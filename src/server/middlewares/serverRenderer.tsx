import { ChunkExtractor } from "@loadable/server";
import { IS_RENDER_TO_STREAM } from "@server/constants";
import { getHtmlTemplate } from "@server/template";
import { App } from "@src/app";
import { AxiosError } from "axios";
import { Request, Response, RequestHandler } from "express";
import { renderToPipeableStream, renderToString } from "react-dom/server";
import { HelmetProvider, FilledContext } from "react-helmet-async";
import { StaticRouter } from "react-router-dom/server";

import { AuthResponseType, getToken } from "../api";
import { API_SECRET, CLIENT_ID, REDIRECT_URI } from "../config";

const serverRenderer =
  (chunkExtractor: ChunkExtractor): RequestHandler =>
  async (req: Request, res: Response) => {
    const code = (req.query.code as string | undefined) || "";

    let data: AuthResponseType | null = null;

    const location: string = req.url;
    const cookieToken = req.cookies.token as string;

    if (code) {
      try {
        const { data: respData, status } = await getToken(
          code,
          REDIRECT_URI,
          CLIENT_ID,
          API_SECRET
        );

        if (status >= 200 && status <= 299) {
          data = respData;
          res.cookie("token", data.access_token, { httpOnly: true });
        }
      } catch (err) {
        const e = err as AxiosError;
        console.log(e.message);
      }
    }

    const helmetContext = {};

    const jsx = (
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={location}>
          <App token={data?.access_token || cookieToken || ""} />
        </StaticRouter>
      </HelmetProvider>
    );

    if (IS_RENDER_TO_STREAM) {
      const { helmet } = helmetContext as FilledContext;

      const { header, footer } = getHtmlTemplate({
        helmetData: helmet,
        scriptTags: chunkExtractor.getScriptTags({
          nonce: res.locals.cspNonce,
        }),
        styleTags: chunkExtractor.getStyleTags(),
        nonce: res.locals.cspNonce,
      });

      res.write(header);
      let didError = false;
      const stream = renderToPipeableStream(jsx, {
        onShellReady() {
          res.statusCode = didError ? 500 : 200;
          stream.pipe(res);
        },
        onAllReady() {
          res.end(footer);
        },
        onError(err) {
          didError = true;
          console.error(err);
        },
      });
    } else {
      const reactHtml = renderToString(jsx);
      const { helmet } = helmetContext as FilledContext;

      const { header, footer } = getHtmlTemplate({
        helmetData: helmet,
        scriptTags: chunkExtractor.getScriptTags(),
        styleTags: chunkExtractor.getStyleTags(),
        nonce: res.locals.cspNonce,
      });

      res.send(header + reactHtml + footer);
    }
  };

export { serverRenderer };
