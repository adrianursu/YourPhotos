const MainLayout = (props) => {
  return (
    <main className="px-10 bg-gray-900 bg-none md:px-20 lg:px-20">
      {props.children}
    </main>
  );
};

export default MainLayout;
