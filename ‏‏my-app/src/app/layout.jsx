import { Tajawal } from 'next/font/google'
import  './globals.css'
import Image from 'next/image'
import nav from "../../public/nav.jpg"
import footer from "../../public/fotter.png"

const tajawal = Tajawal({ subsets: ['latin'],weight:['300','500','700'] })

export const metadata = {
  title: 'سداد المدفوعات الحكومية | الرئيسية  ',
  description: "المنصة الوطنية الموحدة",
  
}

export default function RootLayout({ children }) {
 
  return (
    <html lang="ar" dir='rtl'>
      <meta property="og:image" content="https://pbs.twimg.com/media/DTqo66NWkAADHiX.jpg" />
      <body className={tajawal.className}>

      {/* <NumTrack.Provider value={{NTrack,SetNtrack}}> */}
      <Image src={nav} width={390}/>
      {/* <img src="../../public/nav.jpg" alt="" /> */}
          {children}
      <Image src={footer} width={390}/>
      {/* </NumTrack.Provider> */}

        
        
        </body>
    </html>
  )
}
