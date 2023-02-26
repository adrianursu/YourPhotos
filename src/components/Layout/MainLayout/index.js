const MainLayout = (props) => {
  return (
    <main className="px-10 bg-gray-900 bg-none md:px-14 lg:px-16">
      {props.children}
    </main>
  );
};

export default MainLayout;
