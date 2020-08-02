import Location from "app-location";
import * as Yup from "yup";

import { UPDATE_RECIPE_PAGE_PATH } from "./routes";

export const UPDATE_RECIPE_LOCATION = new Location(UPDATE_RECIPE_PAGE_PATH, {
  id: (
    Yup
      .string()
      .required()
  ),
});
