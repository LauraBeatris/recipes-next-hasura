import { Spinner, Flex } from "@chakra-ui/core";
import useTranslation from "next-translate/useTranslation";

import Section from "components/Section";
import Recipe from "components/Recipe";
import useListRecipes from "hooks/useListRecipes";
import HeaderAddRecipeButton from "components/Buttons/HeaderAddRecipeButton";

const Home: React.FC = () => {
  const { data, loading } = useListRecipes();
  const { t } = useTranslation();

  return (
    <Section
      title={t("common:home.title")}
      headerButton={<HeaderAddRecipeButton />}
    >
      {
        loading ? (
          <Flex
            width="100%"
            align="center"
            justify="center"
            marginTop={40}
          >
            <Spinner color="blue.500" />
          </Flex>
        ) : (
          data.map(({
            id,
            name,
            image_url: imageUrl,
          }) => (
            <Recipe
              id={id}
              key={id}
              name={name}
              imageUrl={imageUrl}
            />
          ))
        )
      }
    </Section>
  );
};

export default Home;
