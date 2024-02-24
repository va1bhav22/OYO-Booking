import React from "react";

import { useMutation } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";

type Options = {
  key: any;
  amount: any;
  currency: string;
  name: string;
  description: string;
  image: string;
  order_id: string;
  callback_url: string;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  notes: {
    address: string;
  };
  theme?: {
    color: string;
    // Theme related properties
  };
};
const products = [
  {
    id: 1,
    name: "Basic Tee",

    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "Rs 5000",
    color: "Black",
  },
  {
    id: 2,
    name: "Basic Tee",

    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "Rs 3000",
    color: "white",
  },
  // More products...
];
const fetchKey = async () => {
  const response = await fetch(
    "http://localhost:3003/api/v1/payment-gateway/get-key"
  );
  const data = await response.json();

  return data;
};
const Product = () => {
  const {
    isLoading,
    data: getKey,
    error,
  } = useQuery({
    queryKey: ["getKey"],
    queryFn: fetchKey,
  });

  const mutation = useMutation({
    mutationFn: async ({ amount }: { amount: string }) => {
      const response = await fetch(
        "http://localhost:3003/api/v1/payment-gateway/check-out",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount }),
        }
      );

      const { data } = await response.json();

      const options: Options = {
        key: getKey.data.key,
        amount: data.amount,

        currency: "INR",
        name: "Oyo Hotel",
        description: "Test Transaction",
        image: "https://avatars.githubusercontent.com/u/98548977?v=4",
        order_id: data.id,
        callback_url:
          "http://localhost:3003/api/v1/payment-gateway/verify-checkout",
        prefill: {
          name: "Anand Singh Kushwaha",
          email: "anandkushwaha70@gmail.com",
          contact: "9915363697",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      const rzp1 = new (window as any).Razorpay(options);

      rzp1.open();

      return data;
    },
  });
  const handleCheckout = async (amount: any) => {
    console.log("Clicked buy now with amount:", amount);
    mutation.mutate({ amount });
  };
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
          <button
            onClick={() => handleCheckout("5000")}
            className="bg-black text-white py-1 px-2 rounded-lg my-2"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
