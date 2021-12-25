import { body } from "express-validator";

export const baseCameraParamsValidators = [
  body("hostname")
    .exists({ checkFalsy: true })
    .withMessage("hostname is required.")
    .isString()
    .withMessage("hostname must be string."),
  body("username")
    .exists({ checkFalsy: true })
    .withMessage("username is required.")
    .isString()
    .withMessage("username must be string."),
  body("password")
    .exists({ checkFalsy: true })
    .withMessage("password is required.")
    .isString()
    .withMessage("password must be string."),
  body("port")
    .exists({ checkFalsy: true })
    .withMessage("port is required.")
    .isInt()
    .withMessage("port must be integer."),
];

export const gotoPresetValidator = [
  ...baseCameraParamsValidators,
  body("preset")
    .exists({ checkFalsy: true })
    .withMessage("preset is required.")
    .isInt()
    .withMessage("preset must be integer."),
];

export const camMoveValidator = [
  ...baseCameraParamsValidators,
  body("x")
    .exists({ checkNull: true })
    .withMessage("x is required.")
    .isNumeric({ max: 1, min: -1 })
    .withMessage("x must be integer."),
  body("y")
    .exists({ checkNull: true })
    .withMessage("y is required.")
    .isNumeric({ max: 1, min: -1 })
    .withMessage("y must be number."),
  body("zoom")
    .exists({ checkNull: true })
    .withMessage("zoom is required.")
    .isNumeric({ max: 1, min: -1 })
    .withMessage("zoom must be number."),
];
