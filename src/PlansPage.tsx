import { Plans } from "wasp/client/crud";
import { useState } from "react";

export const PlansPage = () => {
  const { data: plans, isLoading, error } = Plans.getAll.useQuery();
  const createPlan = Plans.create.useAction();
  const [planName, setPlanName] = useState("");
  const [planPrice, setPlanPrice] = useState(0);
  const [planBillingCycle, setPlanBillingCycle] = useState("");
  const [planDescription, setPlanDescription] = useState("");

  function handleCreatePlan() {
    createPlan({
      name: planName,
      price: planPrice,
      billingCycle: planBillingCycle,
      description: planDescription,
    });
    setPlanName("");
    setPlanPrice(0);
    setPlanDescription("");
    setPlanBillingCycle("");
  }

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Plans</h1>
      <p>Here are all the plans:</p>

      <ul>
        {plans.map((plan) => (
          <li key={plan.id}>
            {plan.name} {plan.price} {plan.billingCycle} {plan.description}
          </li>
        ))}
      </ul>

      <form onSubmit={handleCreatePlan}>
        <div>
          <label>
            Plan Name:
            <input
              type="text"
              value={planName}
              onChange={(e) => setPlanName(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Price:
            <input
              type="number"
              value={planPrice}
              onChange={(e) => setPlanPrice(Number(e.target.value))}
            />
          </label>
        </div>
        <div>
          <label>
            Billing Cycle:
            <input
              type="text"
              value={planBillingCycle}
              onChange={(e) => setPlanBillingCycle(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Description:
            <input
              type="text"
              value={planDescription}
              onChange={(e) => setPlanDescription(e.target.value)}
            />
          </label>
        </div>
        <div>
          <button type="submit">Create plan</button>
        </div>
      </form>
    </div>
  );
};
