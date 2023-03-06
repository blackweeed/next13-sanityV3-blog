import Iframe from 'sanity-plugin-iframe-pane'
import type { DefaultDocumentNodeResolver } from 'sanity/desk'

export const getDefaultDocumentNode: DefaultDocumentNodeResolver = (
    S,
    { schemaType }
) => {
    if( schemaType === "post"){
       return S.document(.view([
        S.view.form(),

        S.view
        .component(Iframe)
        .options({
            // Required: Accepts and async function
            // OR a string
            url: `${
                ... || "http://localhost:3000"
            }/api/preview`,
            //Optional: Set the default size
            defaultSize: `deskop`, // default `deskop`
        })
       ]))
}}