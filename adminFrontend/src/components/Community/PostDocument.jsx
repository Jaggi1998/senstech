import React from "react";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

function PostDocument({ mediaDoc }) {
  const docs = [{ uri: mediaDoc.url }];
  return <DocViewer pluginRenderers={DocViewerRenderers} documents={docs} />;
}

export default PostDocument;
