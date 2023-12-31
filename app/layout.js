import Head from "next/head";
import "../styles/globals.css";

export const metadata = {
  title: "Taskter",
  description: "Taskter a task managing app",
 
};


const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
      <Head>
      <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon" />
      </Head>
      </head>
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <div className=" lg:w-6/12 md:w-8/12 w-10/12 my-5 mx-auto">
            <h1 className="text-4xl font-bold text-center py-5">TaskteR</h1>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
