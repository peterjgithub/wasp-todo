import { type Plans } from "wasp/server/crud";
import { type Plan } from "wasp/entities";
// import { HttpError } from "wasp/server";

type PlanCreateInput = {
  name: string;
  price: number;
  billingCycle: string;
  description: string;
};

export const createPlan: Plans.CreateAction<PlanCreateInput, Plan> = async (
  args,
  context
) => {
  // if (!context.user) {
  //   throw new HttpError(401, "User not authenticated.");
  // }
  // const { name, billingCycle, description } = args;
  const { name, price, billingCycle, description } = args;

  return await context.entities.Plan.create({
    data: {
      name,
      price,
      billingCycle,
      description,
    },
  });
};
