import Document, { Html, Head, Main, NextScript } from "next/document";
class Mydocument extends Document {
  render() {
    return (
      <Html language="en-US">
        <Head />
        <body>
          <Main />
          <NextScript />
          <div id="notification"></div>
        </body>
      </Html>
    );
  }
}
export default Mydocument;
