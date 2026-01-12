import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild,
} from "@headlessui/react";
import { RxCross1 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";

const AdminLayout = () => {
  let [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div>
      <Dialog
        open={sidebarOpen}
        onClose={setSidebarOpen}
        className="relative z-50 xl:hidden"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-[closed]:opacity-50"
        />

        <div className="fixed inset-0 flex">
          <DialogPanel
            transition
            className="relative mr-16 flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl transition-transform duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <TransitionChild>
              <div className="absolute top-0 right-0 pt-4 -mr-2 left-0">
                <button
                  type="button"
                  onClick={() => setSidebarOpen(false)}
                  className="-m-2.5 p-2.5"
                >
                  <span className="sr-only">Close Sidebar</span>
                  <RxCross1 className="text-white text-2xl" />
                </button>
              </div>
            </TransitionChild>
            <Sidebar />
          </DialogPanel>
        </div>
      </Dialog>

      <div className="hidden xl:fixed xl:inset-y-0 xl:z-50 xl:flex xl:w-72 xl:flex-col">
        <Sidebar />
      </div>

      <div className="xl:pl-72">
        <button
          type="button"
          onClick={() => setSidebarOpen(true)}
          className="-m-2.5 text-gray-700 xl:hidden p-4"
        >
          <span className="sr-only">Open Sidebar</span>
          <FaBars className="text-slate-800 text-2xl" />
        </button>
        <main className="">
          <div className="p-4 sm:p-6 xl:p-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;