import React, { useState } from "react";
import { useRouter } from "next/navigation";
import LogoSVG from "../assets/full-logo-new.svg";
import Image from "next/image";
import { LuUserCircle } from "react-icons/lu";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/shadcn/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/shadcn/ui/dropdown-menu";
import { Input } from "@/components/shadcn/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shadcn/ui/table";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/shadcn/ui/navigation-menu";

const HomeComponent = () => {
  const question = "Why do you want to work at Google?";
  const router = useRouter();

  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ];

  return (
    <div class="w-screen h-screen bg-zinc-900">
      <div
        class="w-full pt-10px pr-10px pl-10px pb-5px"
        style={{ height: "calc(100vh * 1/10)" }}
      >
        <div
          class="w-full h-full bg-black rounded-md flex justify-between items-center"
          style={{ padding: "10px 20px" }}
        >
          <div class="flex justify-center items-center">
            <Image
              src={LogoSVG}
              style={{
                zIndex: "999",
                height: "25px",
                width: "fit-content",
              }}
            />
            <NavigationMenu
              className="text-white gap-20px"
              style={{ marginLeft: "50px" }}
            >
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink
                      // className={navigationMenuTriggerStyle()}
                      className={
                        "bg-black pt-5px pb-5px pl-10px pr-10px border-solid"
                      }
                      style={{ borderBottom: "solid 3px #a855f7" }}
                    >
                      Questions
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink
                      // className={navigationMenuTriggerStyle()}
                      className={
                        "bg-black pt-5px pb-5px pl-10px pr-10px border-solid"
                      }
                      // style={{ borderBottom: "solid 3px #a855f7" }}
                    >
                      Mock Interviews
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink
                      // className={navigationMenuTriggerStyle()}
                      className={
                        "bg-black pt-5px pb-5px pl-10px pr-10px border-solid"
                      }
                      // style={{ borderBottom: "solid 3px #a855f7" }}
                    >
                      History
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <LuUserCircle
            color="white"
            style={{ width: "25px", height: "25px" }}
          />
        </div>
      </div>
      <div class="w-full flex" style={{ height: "calc(100vh * 9/10)" }}>
        <div class="w-5/6 h-full pt-5px pr-5px pl-10px pb-10px">
          <div class="w-full h-full rounded-md p-10px overflow-scroll bg-black">
            <div
              className="flex items-center py-4"
              style={{ height: "calc(100% * 1/10)" }}
            >
              <Input
                placeholder="Filter questions..."
                // value={table.getColumn("email")?.getFilterValue() ?? ""}
                // onChange={(event) =>
                //   table.getColumn("email")?.setFilterValue(event.target.value)
                // }
                className="max-w-sm text-white"
              />
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="ml-auto text-white">
                    Catagories <ChevronDownIcon className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                {/* <DropdownMenuContent align="end">
                    {table
                      .getAllColumns()
                      .filter((column) => column.getCanHide())
                      .map((column) => {
                        return (
                          <DropdownMenuCheckboxItem
                            key={column.id}
                            className="capitalize"
                            checked={column.getIsVisible()}
                            onCheckedChange={(value) =>
                              column.toggleVisibility(!!value)
                            }
                          >
                            {column.id}
                          </DropdownMenuCheckboxItem>
                        );
                      })}
                  </DropdownMenuContent> */}
              </DropdownMenu>
            </div>
            <div
              class="rounded-md overflow-scroll"
              style={{ height: "calc(100% * 8/10)" }}
            >
              <Table className="text-white">
                <TableHeader>
                  <TableRow className="hover:bg-black">
                    <TableHead className="w-[100px]">Invoice</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {invoices.map((invoice) => (
                    <TableRow
                      key={invoice.invoice}
                      className="border-none nth-child-odd:bg-custom-black nth-child-even:bg-custom-red select-none hover:bg-purple-500"
                    >
                      <TableCell className="font-medium">
                        {invoice.invoice}
                      </TableCell>
                      <TableCell>{invoice.paymentStatus}</TableCell>
                      <TableCell>{invoice.paymentMethod}</TableCell>
                      <TableCell className="text-right">
                        {invoice.totalAmount}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            <div
              className="flex items-center justify-end space-x-2 py-4"
              style={{ height: "calc(100% * 1/10)" }}
            >
              <div className="flex-1 text-sm text-muted-foreground">
                {/* {table.getFilteredSelectedRowModel().rows.length} of{" "}
                  {table.getFilteredRowModel().rows.length} row(s) selected. */}
              </div>
              <div className="space-x-2 text-white">
                <Button
                  variant="outline"

                  // onClick={() => table.previousPage()}
                  // disabled={!table.getCanPreviousPage()}
                >
                  Previous
                </Button>
                <Button
                  variant="outline"

                  // onClick={() => table.nextPage()}
                  // disabled={!table.getCanNextPage()}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div class="w-1/6 h-full pt-5px pr-10px pl-5px pb-10px">
          <div class="w-full h-full bg-black rounded-md flex flex-col justify-start items-center gap-10px">
            <div
              class="text-white flex justify-center items-center pt-20px pb-10px font-bold"
              style={{
                borderBottom: "solid white 1px",
                width: "calc(100% - 20px)",
              }}
            >
              Questions Mastered
            </div>
            <div class="w-full h-full">
              <div class="h-content w-full h-1/3 flex justify-center items-center flex-col gap-20px">
                <div
                  style={{
                    width: "calc(100% * 8/10)",
                    height: "auto",
                    border: "solid white 2px",
                    padding: "10px",
                    borderRadius: "50%",
                  }}
                >
                  <CircularProgressbarWithChildren
                    value={36}
                    styles={{
                      path: {
                        stroke: "#F75755",
                      },
                    }}
                  >
                    <div
                      class="w-full h-full flex justify-center items-center flex-col text-white"
                      style={{
                        borderRadius: "50%",
                      }}
                    >
                      <div>36/100</div>
                      <div class="text-[0.6rem]">Behavioral</div>
                    </div>
                  </CircularProgressbarWithChildren>
                </div>
              </div>
              <div class="h-content w-full h-1/3 flex justify-center items-center flex-col gap-20px">
                <div
                  style={{
                    width: "calc(100% * 8/10)",
                    height: "auto",
                    border: "solid white 2px",
                    padding: "10px",
                    borderRadius: "50%",
                  }}
                >
                  <CircularProgressbarWithChildren
                    value={78}
                    styles={{
                      path: {
                        stroke: "#F755F5",
                      },
                    }}
                  >
                    <div
                      class="w-full h-full flex justify-center items-center flex-col text-white"
                      style={{
                        borderRadius: "50%",
                      }}
                    >
                      <div>78/100</div>
                      <div class="text-[0.6rem]">Company-specific</div>
                    </div>
                  </CircularProgressbarWithChildren>
                </div>
              </div>
              <div class="h-content w-full h-1/3 flex justify-center items-center flex-col gap-20px">
                <div
                  style={{
                    width: "calc(100% * 8/10)",
                    height: "auto",
                    border: "solid white 2px",
                    padding: "10px",
                    borderRadius: "50%",
                  }}
                >
                  <CircularProgressbarWithChildren
                    value={66}
                    styles={{
                      path: {
                        stroke: "#5755F7",
                      },
                    }}
                  >
                    <div
                      class="w-full h-full flex justify-center items-center flex-col text-white"
                      style={{
                        borderRadius: "50%",
                      }}
                    >
                      <div>66/100</div>
                      <div class="text-[0.6rem]">Job-specific</div>
                    </div>
                  </CircularProgressbarWithChildren>
                </div>
              </div>
            </div>
            <div class="w-full mb-20px"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
