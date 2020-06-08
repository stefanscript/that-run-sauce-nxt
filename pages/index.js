import Head from 'next/head'

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>That Run Sauce</title>
                <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
                <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
                <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
                <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
                <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
                <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
                <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
                <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
                <link rel="apple-touch-icon" sizes="180x180"
                      href="/apple-icon-180x180.png"/>
                <link rel="icon" type="image/png" sizes="192x192"
                      href="/android-icon-192x192.png"/>
                <link rel="icon" type="image/png" sizes="32x32"
                      href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="96x96"
                      href="/favicon-96x96.png"/>
                <link rel="icon" type="image/png" sizes="16x16"
                      href="/favicon-16x16.png"/>
                <link rel="manifest" href="/manifest.json"/>
                <meta name="msapplication-TileColor"
                      content="#ffffff"/>
                <meta name="msapplication-TileImage"
                      content="/ms-icon-144x144.png"/>
                <meta name="theme-color"
                      content="#ffffff"/>
                <meta name="description"
                      content="Everything running, training plans for 5k, 10k, semi-marathon and marathon. "/>
                <meta name="og:description"
                      content="Everything running, training plans for 5k, 10k, semi-marathon and marathon."/>
            </Head>
            
            <main>
                <img src={"/GIF_5_secs_TRS.gif"} alt={"That Run Sauce"} className={"logo"}/>
                <img src={"/COMING_SOON.png"} alt={"Coming Soon"} className={"msg"}/>
            </main>
            
        <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
           min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 0 20px;
        }
        
        .logo {
            max-width: 300px;
            max-height: 60vh;
            margin-bottom: 2em;
        }
        .msg {
            max-width: 250px;
        }
        
        @media all and (min-width: 767px) {
            .logo {
                max-width: 400px;
            }
            .msg {
                max-width: 300px;
            }
        }

        
      `}</style>
            <style jsx global>{`
            html,
            body {
              padding: 0;
              margin: 0;
              font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                sans-serif;
            }
    
            * {
              box-sizing: border-box;
            }
      `}</style>
        </div>
    )
}
