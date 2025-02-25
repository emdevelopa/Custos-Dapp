import "./globals.css";
import Footer from "../components/footer";
import "@rainbow-me/rainbowkit/styles.css";
import Metadata from "./metadata";
import BackgroundWrapper from "@/components/backgroundwrapper";
import { WalletProvider } from "@/components/walletprovider";
import { ModalProvider } from "@/context/ModalProvider";
import { NotificationProvider } from "@/context/NotificationProvider";
import { GlobalStateProvider } from "@/context/GlobalStateProvider";
import { Analytics } from "@vercel/analytics/react"

// Add the manifest so that it can be injected at nextjs runtime.
// NOTE: Removing this or moving this to the metadata.js file will not allow the
// InstallPWA component to be loaded from the InstallPWA component.
export const metadata = { ...Metadata, manifest: "/manifest.json" };

function Banner() {
  useEffect(() => {
    const banner = document.getElementById('preload-banner');
    if (banner) {
      banner.classList.remove('hidden');
    }
  }, []);

  return (
    <div id="preload-banner" className="hidden fixed top-0 left-0 w-full bg-blue-500 text-white text-center py-2 z-50 flex items-center justify-center">
      <img src="/banner.png" alt="Banner Image" className="h-12 mr-2" />
    </div>
  );
}


export default function RootLayout({ children }) {
  //  const pathname = usePathname();

  // if (pathname.includes("/crimerecorder")) {
  //   return (
  //     <html lang="en">
  //       <head>
  //         <title>404 Not Found</title>
  //       </head>
  //       <body className="flex flex-col min-h-screen justify-between">
  //         <BackgroundWrapper>
  //           <div className="w-full flex flex-col justify-center items-center min-h-screen">
  //             <h1 className="text-4xl text-white">404 - Page Not Found</h1>
  //           </div>
  //         </BackgroundWrapper>
  //       </body>
  //     </html>
  //   );
  // }

  return (
    <html lang="en">
      <head>
        <title>{Metadata.title}</title>
        {Metadata.link}
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className="flex flex-col border-none min-h-screen justify-between">
        <BackgroundWrapper>
          <NotificationProvider>
            <WalletProvider>
              <ModalProvider>
                <div className="w-full flex flex-col justify-between">
                  <div className="min-h-screen w-full remove-safari-border">
                    <GlobalStateProvider>
                      {children}
                      <Analytics />
                    </GlobalStateProvider>
                  </div>
                  <div className="h-fit">
                    <Footer />
                  </div>
                </div>
              </ModalProvider>
            </WalletProvider>
          </NotificationProvider>
        </BackgroundWrapper>
      </body>
    </html>
  );
}
