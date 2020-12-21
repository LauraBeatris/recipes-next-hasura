import Link from "next-translate/Link";
import { Spinner, Button, Flex } from "@chakra-ui/core";
import useTranslation from "next-translate/useTranslation";

import { CREATE_RECIPE_PAGE_PATH } from "constants/routes";
import Section from "components/Section";
import Recipe from "components/Recipe";
import useListRecipes from "hooks/useListRecipes";

const HeaderButton: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Link href={CREATE_RECIPE_PAGE_PATH}>
      <Button
        color="blue.400"
        display="flex"
        outline={0}
        padding={0}
        variant="unstyled"
        leftIcon="small-add"
        alignItems="center"
        justifyContent="center"
      >
        {t("common:buttons.add")}
      </Button>
    </Link>
  );
};

const Home: React.FC = () => {
  const { data, loading } = useListRecipes();
  const { t } = useTranslation();

  return (
    <Section
      title={t("common:home.title")}
      headerButton={<HeaderButton />}
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
