import { useEffect } from "react";
import { CategoriesList, Footer, TypesList, VegeToggle } from "./components";
import { Content } from "./components/Content";
import { getCategoriesMock } from "./mocks/getCategoriesMock";
import { getTypesMock } from "./mocks/getTypes";
import * as api from "./api";

// const VEGE_TYPES: Readonly<Uppercase<String>[]> = [
//   "VEGETABLE",
//   "WINE_AND_SPIRITS",
//   "CEREALS",
//   "FRUITS",
// ];

function App() {
  const types = getTypesMock();
  const categories = getCategoriesMock();
  useEffect(() => {
    api.getBazarekType();
  }, []);
  return (
    <>
      <Content className="flex flex-row min-h-screen" loading={false}>
        <TypesList items={types} isSelected={() => false}>
          <VegeToggle
            checked={false}
            onChange={(e) => console.log(e.target.checked)}
          />
        </TypesList>
        <CategoriesList
          items={categories}
          onClickItem={(item) => console.log(item)}
        />
      </Content>
      <Footer />
    </>
  );
}

export default App;
