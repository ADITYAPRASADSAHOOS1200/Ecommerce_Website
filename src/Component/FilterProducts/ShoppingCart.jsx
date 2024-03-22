import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../../Store/Slices/CartSlice";
import { Tooltip } from "@material-tailwind/react";

const ShoppingCart = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.Cart);
  const TotalPrice = useSelector((state) => state.cart.TotalPrice);
  const TotalAmount = useSelector((state) => state.cart.TotalAmount);

  return (
    <Dialog
      open={open}
      className="border-0 outline-0"
      handler={() => setOpen(false)}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 },
      }}
    >
      <DialogHeader>Shopping Cart</DialogHeader>
      <DialogBody className="max-h-[500px] overflow-y-auto">
        {cart.length > 0 ? (
          cart.map((product, index) => (
            <div key={index} className="flex justify-center items-start p-4">
              <div className="flex items-start">
                <img
                  className="h-32 md:h-40 lg:h-48 rounded-md shadow-md ml-4"
                  src={product.img}
                  alt={product.name}
                />
                <div className="ml-4">
                  <h4 className="text-black text-base font-bold leading-tight">
                    {product.name}
                  </h4>
                  <p className="text-sm text-gray-700 leading-tight mb-2">
                    {product.text}
                  </p>
                  <p className="text-sm text-gray-700 mb-2">
                    Selected size: {product.size}
                  </p>
                  <div className="flex items-center mb-2">
                    <p className="text-sm text-gray-700 mr-2">Selected color:</p>
                    <div
                      className="rounded-full w-4 h-4 mr-2"
                      style={{ backgroundColor: product.color }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-700 mb-2">
                    Amount: {product.amount}
                  </p>
                  <p className="text-sm text-gray-700 mb-2">
                    Total Amount: {product.TotalPrice}
                  </p>
                  <div>
                    <Tooltip content="Remove from cart" placement="top">
                      <Button
                        size="sm"
                        color="red"
                        onClick={() => dispatch(removeCart(product))}
                      >
                        Remove
                      </Button>
                    </Tooltip>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="p-4 text-center">
            <h1 className="text-3xl font-bold text-black tracking-normal leading-none mb-4">
              Your bag is empty
            </h1>
            <p className="text-base text-black font-sans tracking-normal leading-none">
              Add Some Products
            </p>
          </div>
        )}
      </DialogBody>
      {cart.length > 0 && (
        <DialogFooter className="flex justify-between items-center p-4">
          <p className="text-xl font-bold text-black leading-none">
            Total Price of all Products: <span>{TotalPrice}</span>
          </p>
          <p className="text-xl font-bold text-black leading-none">
            Total Amount: <span>{TotalAmount}</span>
          </p>
        </DialogFooter>
      )}
    </Dialog>
  );
};

export default ShoppingCart;
