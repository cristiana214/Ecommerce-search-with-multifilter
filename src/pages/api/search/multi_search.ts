// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import Typesense from "typesense";

import { json } from "body-parser";
const searchClient = new Typesense.Client({
  apiKey: process.env.SEARCH_API_KEY || "",
  nodes: [
    {
      host: process.env.SEARCH_HOST || "",
      port: 443,
      protocol: "https",
    },
  ],
});

const handler = nc<NextApiRequest, NextApiResponse>();

handler.use(json());
interface SearchRequest {
  query_by: string;
  include_fields: string;
  highlight_full_fields: string;
  collection: string;
  q: string;
  facet_by?: string;
  max_facet_values?: number;
  page: number;
  per_page: number;
}
handler.post(async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "POST") {
      const body = JSON.parse(req.body.toString());
      if (body && !body.searches) {
        res.status(400).json({ message: "Sorry invalid request" });
      }
      const { searches }: { searches: SearchRequest[] } = body;
      const searchPromises = searches.map(async (search: any) => {
        const searchResults = await searchClient
          .collections("category")
          .documents()
          .search(search);
        return searchResults;
      });
      const searchResults = await Promise.all(searchPromises);
      res.status(200).json({ results: searchResults });
    }
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Opss! Search failed" });
  }
});
export default handler;
