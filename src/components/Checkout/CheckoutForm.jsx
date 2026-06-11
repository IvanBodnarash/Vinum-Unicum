import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { FormControlLabel, RadioGroup } from "@mui/material";

import { RadioCustom } from "../../utils/muiConfig";

import { TbTruckDelivery, TbBox } from "react-icons/tb";

import "./Checkout.scss";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function DeliveryForm({ register, errors, control }) {
  return (
    <div className="form-inner">
      {/* First name */}
      <div className="form-item">
        <label htmlFor="firstName">
          First name <span>*</span>
        </label>
        <input
          id="firstName"
          type="text"
          {...register("firstName", { required: "First name is required" })}
        />
        {errors.firstName && <span>{errors.firstName.message}</span>}
      </div>

      {/* Last name */}
      <div className="form-item">
        <label htmlFor="lastName">
          Last name <span>*</span>
        </label>
        <input
          id="lastName"
          type="text"
          {...register("lastName", { required: "Last name is required" })}
        />
        {errors.lastName && <span>{errors.lastName.message}</span>}
      </div>

      {/* Email */}
      <div className="form-item">
        <label htmlFor="email">
          Email <span>*</span>
        </label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}
      </div>

      {/* Phone */}
      <div className="form-item">
        <label htmlFor="phone">
          Phone <span>*</span>
        </label>

        <div
          className="phone-wrapper"
        >
          <Controller
            name="phone"
            control={control}
            rules={{ required: "Phone is required" }}
            render={({ field }) => (
              <PhoneInput
                country="es"
                value={field.value}
                onChange={field.onChange}
                inputProps={{
                  id: "phone",
                  name: "phone",
                }}
                containerClass="phone-container"
                inputClass="phone-input"
                buttonClass="phone-button"
                dropdownClass="phone-dropdown"
              />
            )}
          />
        </div>

        {errors.phone && <span>{errors.phone.message}</span>}
      </div>

      {/* Country and City row */}
      <div className="form-item-wrapper">
        {/* Country */}
        <div className="form-item">
          <label htmlFor="country">
            Country <span>*</span>
          </label>
          <input
            id="country"
            type="country"
            {...register("country", {
              required: "Country is required",
              // pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
            })}
          />
          {errors.country && <span>{errors.country.message}</span>}
        </div>

        {/* City */}
        <div className="form-item">
          <label htmlFor="city">
            City <span>*</span>
          </label>
          <input
            id="city"
            type="city"
            {...register("city", {
              required: "City is required",
              // pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
            })}
          />
          {errors.city && <span>{errors.city.message}</span>}
        </div>
      </div>

      {/* State and ZIP Code row */}
      <div className="form-item-wrapper">
        {/* State */}
        <div className="form-item">
          <label htmlFor="state">State</label>
          <input
            id="state"
            type="state"
            {...register("state", {
              required: "State is required",
              // pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
            })}
          />
          {errors.state && <span>{errors.state.message}</span>}
        </div>

        {/* ZIP Code */}
        <div className="form-item">
          <label htmlFor="zipCode">ZIP Code</label>
          <input
            id="zipCode"
            type="zipCode"
            {...register("zipCode", {
              required: "ZIP Code is required",
              // pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
            })}
          />
          {errors.zipCode && <span>{errors.zipCode.message}</span>}
        </div>
      </div>

      {/* Address */}
      <div className="form-item">
        <label htmlFor="address">
          Address <span>*</span>
        </label>
        <input
          id="address"
          {...register("address", { required: "Address is required" })}
        />
        {errors.address && <span>{errors.address.message}</span>}
      </div>
    </div>
  );
}

function PickUpForm() {
  return <div>pickup</div>;
}

function RadioContent({ option }) {
  return (
    <div className="radio-item">
      {option === "delivery" ? (
        <>
          <TbTruckDelivery size={24} />
          <span>Delivery</span>
        </>
      ) : (
        <>
          <TbBox size={24} />
          <span>Pick up</span>
        </>
      )}
    </div>
  );
}

export default function CheckoutForm() {
  const [orderOption, setOrderOption] = useState("delivery");
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const orderData = {
      ...data,
      orderOption,
    };

    console.log(orderData);
  };

  return (
    <aside className="checkout-details">
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        value={orderOption}
        className="checkout-radio-group"
        onChange={(e) => setOrderOption(e.target.value)}
        row
        name="delivery-options"
      >
        <FormControlLabel
          value="delivery"
          control={
            <RadioCustom
              sx={{ opacity: orderOption === "delivery" ? 1 : 0.7 }}
            />
          }
          label={<RadioContent option="delivery" />}
          className={`checkout-option ${orderOption === "delivery" ? "selected" : ""}`}
        />
        <FormControlLabel
          value="pickup"
          control={
            <RadioCustom sx={{ opacity: orderOption === "pickup" ? 1 : 0.7 }} />
          }
          label={<RadioContent option="pickup" />}
          className={`checkout-option ${orderOption === "pickup" ? "selected" : ""}`}
        />
      </RadioGroup>

      <form onSubmit={handleSubmit(onSubmit)}>
        {orderOption === "delivery" ? (
          <DeliveryForm register={register} control={control} errors={errors} />
        ) : (
          <PickUpForm />
        )}

        <button type="submit">Proceed to Payment</button>
      </form>
    </aside>
  );
}
