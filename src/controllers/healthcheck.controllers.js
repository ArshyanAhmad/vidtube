import {ApiResponse} from "../utils/apiResponse.js";
import {asyncHandler} from "../utils/asynchandler.js";

const healthCheck = asyncHandler(async (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, "Ok", "Health check passed"));
});

export {healthCheck};
