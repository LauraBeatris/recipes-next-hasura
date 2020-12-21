import {
  Modal,
  Button,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
} from "@chakra-ui/core";
import useTranslation from "next-translate/useTranslation";

import LIST_RECIPES_QUERY from "graphql/queries/listRecipes";
import useDeleteRecipe from "hooks/useDeleteRecipe";

import { DeleteRecipeModalProps } from "./types";

const DeleteRecipeModal: React.FC<DeleteRecipeModalProps> = ({
  isOpen,
  onClose,
  recipeId,
  recipeName,
}) => {
  const { t } = useTranslation();

  const [
    deleteFood,
    { loading },
  ] = useDeleteRecipe({
    onCompleted: onClose,
    refetchQueries: [{ query: LIST_RECIPES_QUERY }],
  });

  const handleConfirm = () => {
    deleteFood(recipeId);
  };

  return (
    <>
      <Modal
        size="sm"
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent marginX={5}>
          <ModalHeader>
            {t("common:modals.delete_recipe.title")}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {t("common:modals.delete_recipe.text", { recipeName })}
          </ModalBody>

          <ModalFooter>
            <Button
              variantColor="blue"
              onClick={onClose}
              mr={3}
            >
              {t("common:buttons.cancel")}
            </Button>
            <Button
              variantColor="red"
              isLoading={loading}
              onClick={handleConfirm}
            >
              {t("common:buttons.confirm")}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DeleteRecipeModal;
