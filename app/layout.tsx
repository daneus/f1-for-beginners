import './globals.css'

const RootLayout: React.FC = ({ children }: { children: React.ReactNode }) => {
  return (
    <html className="bg-black box-border" lang="en">
      <body className="relative">{children}</body>
    </html>
  )
}

export default RootLayout
