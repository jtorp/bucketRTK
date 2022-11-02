import React, { useState } from "react";
import { TbTrash } from "react-icons/tb";
import Header from "./Header";
import {
    useGetItemsQuery,
    useAddItemMutation,
    useUpdateItemMutation,
    useDeleteItemMutation,
} from "../features/apiSlice";

const BucketList = ({ name }) => {
    const {
        data: items,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetItemsQuery();

    const [newItem, setNewItem] = useState("");
    const [addItem] = useAddItemMutation();
    const [updateItem] = useUpdateItemMutation();
    const [deleteItem] = useDeleteItemMutation();

    const handleSubmit = (e) => {
        e.preventDefault();
        addItem({
            userId: 1,
            title: newItem,
            completed: false,
        });
        setNewItem("");
    };
    const addItemForm = (
        <form
            onSubmit={handleSubmit}
            className=" w-full flex justify-between rounded-full shadow-lg bg-pumpkin focus:outline-none"
        >
            <label htmlFor="newItem" className="sr-only">
                NewItem
            </label>

            <input
                type="text"
                id="newItem"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                className="border-0 flex-1 outline-none rounded-full p-4 text-xl text-orange-100 bg-pumpkin focus:ring-0 font-semibold "
                required=""
            />
            <button
                type="button"
                onClick={handleSubmit}
                className=" bg-primaryBg hover:bg-redred text-orange-100 m-1 font-medium px-8 py-3 rounded-full "
            >
                {" "}
                Add more
            </button>
        </form>
    );

    let content;
    if (isLoading) {
        content = (
            <p className="p-3 z-20 text-2xl  text-redred font-bold font-serif ">
                {" "}
                Loading{" "}
            </p>
        );
    } else if (isSuccess) {
        content = items.map((item) => {
            return (
                <div
                    key={item.id}
                    className="p-2  text-orange-50 w-80 max-w-sm transition duration-500 ease-in-out rounded-md shadow-md shadow-slate-800 orange-300 bg-anotherBlue hover:brightness-110 hover:shadow-2xl hover:shadow-slate-900 transform hover:-translate-y-2"
                >
                    <div className="flex justify-end px-4 pt-4">#{item.id}</div>
                    <button
                        onClick={() => {
                            deleteItem({ id: item.id });
                        }}
                        className="fixed bottom-0 right-0 p-2 font-bold text-pumpkin"
                    >
                        <TbTrash size="30" />
                    </button>
                    <div className="flex flex-col items-center p-8">
                        <div>
                            {item.id % 2 ? (
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/1147/1147560.png"
                                    className="mb-3 w-24 h-24 rounded-full object-cover shadow-lg"
                                    alt="alt"
                                />
                            ) : (
                                <img
                                    className="mb-3 w-24 h-24 rounded-full object-cover shadow-lg"
                                    src="https://cdn-icons-png.flaticon.com/512/1147/1147571.png"
                                    alt="userimage"
                                />
                            )}
                        </div>

                        <p className=" text-2xl font-alex font-normal text-orange-100">
                            {" "}
                            {item.title}
                        </p>
                        <div className="flex mt-4 space-x-3 md:mt-6">
                            <input
                                className="h-[32px] w-[32px] bg-primaryBg border-0 
                                rounded-md shadow text-redred focus:ring-0"
                                type="checkbox"
                                id={item.id}
                                checked={item.checked}
                                onChange={() =>
                                    updateItem({ ...item, completed: !item.completed })
                                }
                            />
                        </div>
                    </div>
                </div>
            );
        });
    } else if (isError) {
        content = (
            <h4 className="text-lg font-semibold text-orange-100">{error.error}</h4>
        );
    }

    return (
        <>
            <Header name={"Autumn"} />
            <div className="text-center p-10 w-screen">{addItemForm}</div>

            <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-4 pb-44 ">
                {content}
            </div>
        </>
    );
};
export default BucketList;
