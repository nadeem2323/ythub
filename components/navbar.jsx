import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import { Logo } from "@/components/icons";
import Link from "next/link";
import { Button } from "@nextui-org/react";

export const Navbar = () => {
	return (
		<NextUINavbar maxWidth="xl" position="sticky" className=" border-b border-default-300">
			<NavbarContent justify="start">
			<NextLink className="flex justify-start items-center gap-1" href="/">
						<p className="font-bold text-2xl"><span className="text-purple-500">YT</span>Hub</p>
					</NextLink>
			</NavbarContent>		

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<ThemeSwitch />
				<NavbarItem className="hidden md:flex gap-3">
					<Link  href="/login" className="border-2 px-4 py-1 hover:opacity-80 transition-all rounded-lg dark:border-default-100"> 
						Login
					</Link>
					<Link href="/signup" className="dark:text-black hover:opacity-80 transition-all px-4 py-1 rounded-lg bg-black text-white dark:bg-slate-100"> 
					Signup
					</Link>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<ThemeSwitch />
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu>

				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link
								color={
									index === 2
										? "primary"
										: index === siteConfig.navMenuItems.length - 1
										? "danger"
										: "foreground"
								}
								href={item.href}
								size="lg"
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}

				<NavbarMenuItem className="flex gap-3 mt-6">
					<Link  href="/login" className="border-2 w-full text-center px-4 py-1 hover:opacity-80 transition-all rounded-lg dark:border-default-100"> 
						Login
					</Link>
					<Link href="/signup" className="dark:text-black w-full  text-center hover:opacity-80 transition-all px-4 py-1 rounded-lg bg-black text-white dark:bg-slate-100"> 
					Signup
					</Link>
				</NavbarMenuItem>
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};
