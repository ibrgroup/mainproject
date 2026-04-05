"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import { BsBank } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { CgChevronDown } from "react-icons/cg";
import { IoWalletOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { NavbarProducts, NAV_ITEMS, ROUTES } from "@/constants/index";
import { GoChevronRight } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { LuPhoneCall } from "react-icons/lu";
import { FiUserCheck } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";


interface NavbarProduct {
  name: string;
  href: string;
  description: string;
  icon: React.ElementType;
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const dialogPanelRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    router.push(href);
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const renderMobileLink = (href: string, text: string, icon: React.ReactNode) => (
    <button
      type="button"
      onClick={() => handleNavClick(href)}
      className="flex w-full items-center gap-5 bg-white p-3 rounded-2xl text-gray-800 hover:bg-gray-100 text-left"
    >
      <div className="bg-gray-100 p-3 rounded-xl">{icon}</div>
      <p className="text-base font-medium">{text}</p>
      <GoChevronRight className="absolute right-10" size={22} />
    </button>
  );

  return (
    <React.Fragment>
      <header className="bg-cyan-blue px-4 w-full">
        <nav
          aria-label="Global"
          className="m-auto max-container flex items-center justify-between py-3"
        >
          <div className="flex items-center lg:flex-1">
            <Link href={ROUTES.home} className="flex items-center gap-1">
              <Image width={50} height={50} src="/logo.webp" alt="ibr-logo" />
              <h4 className="font-bold text-xl text-white font-saira">
                IBR GROUP
              </h4>
            </Link>
          </div>
          <div className="flex lg:hidden items-center gap-3">
            <a href="tel:+79931712990">
              <LuPhoneCall size={23} className=" text-tiffany" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="text-gray-700"
            >
              <BiMenuAltRight color="white" size={30} />
            </button>
          </div>
          <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="text-base text-white hover:text-gray-200"
              >
                {item.label}
              </Link>
            ))}
            <Popover className="relative">
              <PopoverButton className="flex outline-none items-center gap-x-1 text-[15px] text-white hover:text-gray-200">
                Еще <CgChevronDown className="text-gray-100" />
              </PopoverButton>
              <PopoverPanel className="absolute top-full rounded-3xl right-0 z-10 mt-3 w-screen max-w-md bg-white shadow-lg">
                <div className="p-4">
                  {NavbarProducts.map((item: NavbarProduct) => (
                    <div
                      key={item.name}
                      className="flex items-center gap-x-6 p-3 cursor-pointer transition-all hover:bg-gray-100 rounded-xl my-3 hover:bg-gray-10"
                    >
                      <div className="flex items-center justify-center rounded-lg p-5 bg-gray-100">
                        <item.icon size="25" className="text-tiffany" />
                      </div>
                      <div>
                        <Link href={item.href}>
                          <h4 className="text-gray-800 font-bold py-1">
                            {item.name}
                          </h4>
                          <p className="text-gray-800">{item.description}</p>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </PopoverPanel>
            </Popover>
          </PopoverGroup>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="tel:+79931712990"
              className="flex text-base font-bold text-tiffany items-center gap-2 p-3 rounded-2xl hover:bg-[#ffffff3a]"
            >
              +7 993 171-29-90
              <LuPhoneCall size={22} />
            </a>
          </div>
        </nav>
      </header>

      <Dialog
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="lg:hidden"
      >
        <DialogPanel
          ref={dialogPanelRef}
          className="fixed inset-y-0 right-0 w-full bg-gray-100 px-6 py-6"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center lg:flex-1">
              <Link href={ROUTES.home} className="flex items-center gap-1" onClick={() => setMobileMenuOpen(false)}>
                <Image width={50} height={50} src="/logo.webp" alt="logo.png" />
                <h4 className="font-bold text-xl text-gray-800 font-saira">
                  IBR GROUP
                </h4>
              </Link>
            </div>
            <span className="-m-1.5 p-1.5" aria-hidden />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-full p-1.5 bg-gray-900 text-gray-700"
            >
              <IoClose aria-hidden="true" className="size-6 text-white" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <h2 className="text-xl mt-4 font-[600]">Для наших клиентов</h2>
              <div className="space-y-5 py-6">
                {renderMobileLink(
                  ROUTES.installment,
                  "Рассрочка",
                  <IoWalletOutline size={22} />,
                )}
                {renderMobileLink(
                  ROUTES.ibrmarket,
                  "Маркетплейс",
                  <HiOutlineShoppingBag size={22} />,
                )}
                {renderMobileLink(
                  ROUTES.becomePartner,
                  "Партнерство",
                  <FiUserCheck size={22} />,
                )}
                {renderMobileLink(ROUTES.aboutUs, "О нас", <BsBank size={22} />)}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </React.Fragment>
  );
}
