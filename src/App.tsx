import { useEffect, useMemo, useState } from "react";
import { CategoriesList, Footer, TypesList, VegeToggle } from "./components";
import { Content } from "./components/Content";
import * as api from "./api";
import { BazarekType } from "./types/Types";
import { BazarekCategory } from "./types/Categories";

const VEGE_TYPES: Readonly<Uppercase<string>[]> = [
  "VEGETABLE",
  "WINE_AND_SPIRITS",
  "CEREALS",
  "FRUITS",
];

function App() {
  const [isVege, setIsVege] = useState(false);
  const [loading, setLoading] = useState(false);
  const [types, setTypes] = useState<BazarekType[]>([]);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [categories, setCategories] = useState<BazarekCategory[]>([]);
  useEffect(() => {
    setLoading(true);
    Promise.all([api.getBazarekType(), api.getBazarekCategories()])
      .then((res) => {
        setTypes(res[0].data.sort((x, y) => x.name.localeCompare(y.name)));
        setCategories(res[1].data.sort((x, y) => x.name.localeCompare(y.name)));
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  const typesFiltred = useMemo(
    () => (isVege ? types.filter((x) => VEGE_TYPES.includes(x.id)) : types),
    [isVege, types]
  );
  const categoriesFiltred = useMemo(() => {
    let tmp = categories;
    if (selectedType) {
      tmp = tmp.filter((x) => x.type === selectedType);
    }
    return isVege ? tmp.filter((x) => VEGE_TYPES.includes(x.type)) : tmp;
  }, [isVege, categories, selectedType]);
  const handleCategoryClick = async (item: BazarekCategory) => {
    try {
      setLoading(true);
      await api.getProductById(crypto.randomUUID());
    } catch (error) {
      alert(`Nie ma productu dla kategorii "${item.name}".`);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Content className="flex flex-row min-h-screen" loading={loading}>
        <TypesList
          items={typesFiltred}
          isSelected={(item) => item.id === selectedType}
          onSelectItem={(item) =>
            setSelectedType((prev) => (item.id === prev ? null : item.id))
          }
        >
          <VegeToggle
            checked={isVege}
            onChange={(e) => setIsVege(e.target.checked)}
          />
        </TypesList>
        <CategoriesList
          items={categoriesFiltred}
          onClickItem={handleCategoryClick}
        />
      </Content>
      <Footer />
    </>
  );
}

export default App;
