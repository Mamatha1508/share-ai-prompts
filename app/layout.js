
import '@styles/globals.css';


export const metaData={
    title : 'share prompts',
    description :'share ai prompts'
}
const RootLayout= ({children})=>{
    console.log('childeren',children)
    return (
        <html>
            <body className=''>
                <div className="main">
                    <div className="gradient" />

                </div>
                <main className="">
                    {children}
                </main>
            </body>
        </html>
    )
}
export default RootLayout;