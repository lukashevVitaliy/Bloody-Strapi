"use strict";

/**
 * bg-accessory controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::bg-accessory.bg-accessory",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { slug } = ctx.params;

      const entity = await strapi.db
        .query("api::bg-accessory.bg-accessory")
        .findOne({
          where: { slug },
          populate: {
            bg_content_1: {
              populate: ["*"],
            },
            bg_content_2: {
              populate: ["*"],
            },
            bg_content_3: {
              populate: ["*"],
            },
          },
        });
      const sanitizedEntity = await this.sanitizeOutput(entity);

      return this.transformResponse(sanitizedEntity);
    },
  })
);
