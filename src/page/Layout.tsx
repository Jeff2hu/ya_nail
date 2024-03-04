import NavBar from "./NavBar";

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props) {
  return (
    <>
      <NavBar />
      <main className="h-[100vh]">{children}</main>
      {/* 如果需要，這裡可以添加 footer 等其他共用元件 */}
    </>
  );
}

export default Layout;
