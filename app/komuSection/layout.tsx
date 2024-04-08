import StarsCanvas from "@/components/main/StarBackground"
import SessionProvider from "../SessionProv"
import { Wallet } from "@/components/hooks/Wallet"
import Navibar from "./_components/nav"
import ToasterContext from "@/components/hooks/toaterProvider"
import Footer from "@/components/main/Footer"

export default function KomuSectionLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <section className=" bg-[#030014] overflow-x-hidden scrollbar-hidden">
                <ToasterContext>
                    <Wallet>
                        <Navibar />
                        {children}
                        <Footer />
                    </Wallet>
                </ToasterContext>
            </section>
        </>
    )
}