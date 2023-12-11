import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import LogoSVG from "../assets/full-logo-new.svg";
import Image from "next/image";
import { LuUserCircle } from "react-icons/lu";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/shadcn/ui/button";
import { LuFileEdit } from "react-icons/lu";
import { Label } from "@/components/shadcn/ui/label";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
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
} from "@/components/shadcn/ui/navigation-menu";
import { hash } from "@/utils/hash-functions";
import { LuCrown } from "react-icons/lu";
import Colors from "@/utils/colors";
import { IoIosPerson } from "react-icons/io";
import { FaBriefcase } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/shadcn/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shadcn/ui/dialog";
import ProgressBar from "@ramonak/react-progress-bar";

const HomeComponent = () => {
  const question = "Why do you want to work at Google?";
  const router = useRouter();
  const statsRef = useRef(null);
  const [statsDim, setStatsDim] = useState({ width: null, height: null });

  useEffect(() => {
    if (statsRef.current) {
      setStatsDim({
        width: statsRef.current.clientWidth,
        height: statsRef.current.clientHeight,
      });
      console.log(statsRef.current.clientWidth, statsRef.current.clientHeight);
    }
  }, [statsRef]);

  const data = [
    {
      category: "Behavioral",
      question:
        "Can you describe a situation where you had to deal with a difficult colleague?",
      stars: 4,
    },
    {
      category: "Behavioral",
      question:
        "Tell me about a time when you had to work under a tight deadline.",
      stars: 4,
    },
    {
      category: "Behavioral",
      question: "How do you handle receiving constructive criticism?",
      stars: 4,
    },
    {
      category: "Behavioral",
      question:
        "Describe a situation where you went above and beyond your job duties.",
      stars: 4,
    },
    {
      category: "Behavioral",
      question:
        "Tell me about a time when you had to adapt to a significant change at work.",
      stars: 4,
    },
    {
      category: "Behavioral",
      question: "Describe a project where you took on a leadership role.",
      stars: 4,
    },
    {
      category: "Behavioral",
      question: "How do you prioritize your tasks in a busy work environment?",
      stars: 4,
    },
    {
      category: "Behavioral",
      question: "Share an experience where you had to solve a complex problem.",
      stars: 4,
    },
    {
      category: "Behavioral",
      question: "Tell me about a time when you failed. How did you handle it?",
      stars: 4,
    },
    {
      category: "Behavioral",
      question: "Describe a time when you had to manage a team conflict.",
      stars: 4,
    },
    {
      category: "Behavioral",
      question:
        "Can you give an example of a goal you set and how you achieved it?",
      stars: 4,
    },
    {
      category: "Job-Specific",
      question: "How do you approach problem-solving in Software Developer?",
      stars: 4,
    },
    {
      category: "Behavioral",
      question:
        "Can you describe a situation where you had to deal with a difficult colleague?",
      stars: 4,
    },
    {
      category: "Company-Specific",
      question:
        "How do you approach ethical dilemmas in the workplace, particularly at a company like Amazon?",
      stars: 4,
    },
    {
      category: "Job-Specific",
      question: "How do you approach problem-solving in Software Developer?",
      stars: 4,
    },
    {
      category: "Behavioral",
      question:
        "Can you describe a situation where you had to deal with a difficult colleague?",
      stars: 4,
    },
    {
      category: "Company-Specific",
      question:
        "How do you approach ethical dilemmas in the workplace, particularly at a company like Amazon?",
      stars: 4,
    },
    {
      category: "Job-Specific",
      question: "How do you approach problem-solving in Software Developer?",
      stars: 4,
    },
    {
      category: "Behavioral",
      question:
        "Can you describe a situation where you had to deal with a difficult colleague?",
      stars: 4,
    },
    {
      category: "Company-Specific",
      question:
        "How do you approach ethical dilemmas in the workplace, particularly at a company like Amazon?",
      stars: 4,
    },
    {
      category: "Job-Specific",
      question: "How do you approach problem-solving in Software Developer?",
      stars: 4,
    },
    {
      category: "Behavioral",
      question:
        "Can you describe a situation where you had to deal with a difficult colleague?",
      stars: 4,
    },
    {
      category: "Company-Specific",
      question:
        "How do you approach ethical dilemmas in the workplace, particularly at a company like Amazon?",
      stars: 4,
    },
    {
      category: "Job-Specific",
      question: "How do you approach problem-solving in Software Developer?",
      stars: 4,
    },
    {
      category: "Behavioral",
      question:
        "Can you describe a situation where you had to deal with a difficult colleague?",
      stars: 4,
    },
    {
      category: "Company-Specific",
      question:
        "How do you approach ethical dilemmas in the workplace, particularly at a company like Amazon?",
      stars: 4,
    },
    {
      category: "Job-Specific",
      question: "How do you approach problem-solving in Software Developer?",
      stars: 4,
    },
    {
      category: "Behavioral",
      question:
        "Can you describe a situation where you had to deal with a difficult colleague?",
      stars: 4,
    },
    {
      category: "Company-Specific",
      question:
        "How do you approach ethical dilemmas in the workplace, particularly at a company like Amazon?",
      stars: 4,
    },
  ];

  return (
    <div class="bg-zinc-900 overflow-scroll flex justify-center items-start">
      <div style={{ maxWidth: "1600px", width: "100vw" }}>
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
                className="text-white gap-20px large-screen"
                style={{ marginLeft: "50px" }}
              >
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link href="/docs" legacyBehavior passHref>
                      <NavigationMenuLink
                        className="bg-black pt-5px pb-5px pl-10px pr-10px border-solid"
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
                        className="bg-black pt-5px pb-5px pl-10px pr-10px border-solid"
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
                        className="bg-black pt-5px pb-5px pl-10px pr-10px border-solid"
                        // style={{ borderBottom: "solid 3px #a855f7" }}
                      >
                        History
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div
              class="text-white flex justify-center items-center cursor-pointer"
              style={{ color: Colors.secondary }}
            >
              <div
                style={{
                  marginRight: "50px",
                  border: "solid 1px",
                  padding: "3px 10px",
                }}
                class="rounded-lg flex justify-center items-center gap-10px large-screen"
              >
                <LuCrown />
                Go Premium!
              </div>
              <LuUserCircle
                color="white"
                style={{ width: "25px", height: "25px" }}
              />
            </div>
          </div>
        </div>
        <div
          class="w-full mobile-nav bg-zinc-900 pr-10px pl-10px pt-5px pb-0px"
          style={{ height: "calc(100vh * 3/40)" }}
        >
          <div
            class="w-full h-full bg-black flex justify-center items-center"
            style={{ borderRadius: "0.375rem 0.375rem 0 0" }}
          >
            <NavigationMenu className="text-white gap-20px">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink
                      // className={navigationMenuTriggerStyle()}
                      className={
                        "bg-black pt-5px pb-5px pl-10px pr-10px border-solid nav-menu-mobile-text-size"
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
                        "bg-black pt-5px pb-5px pl-10px pr-10px border-solid nav-menu-mobile-text-size"
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
                        "bg-black pt-5px pb-5px pl-10px pr-10px border-solid nav-menu-mobile-text-size"
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
        </div>
        <div class="w-full flex">
          <div class="h-content pl-10px pb-10px w-5/6 home-table-width-container">
            {/* home-table-width-container*/}
            <div class="w-full h-content rounded-md pl-10px pr-10px pt-20px pb-20px bg-black no-scrollbar home-table-container">
              <div className="flex items-center pl-10px pr-10px gap-10px home-table-toolbar-container pb-20px flex-col">
                <Input
                  placeholder="Filter questions..."
                  // value={table.getColumn("email")?.getFilterValue() ?? ""}
                  // onChange={(event) =>
                  //   table.getColumn("email")?.setFilterValue(event.target.value)
                  // }
                  className="max-w-sm text-white"
                />

                <div class="flex justify-center items-center gap-10px home-toolbar-button-div">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="gap-10px flex justify-center items-center text-white home-toolbar-button"
                      >
                        <LuFileEdit />
                        Edit Roles
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                          {/* Make changes to your profile here. Click save when
                          you're done. */}
                          hey
                        </DialogDescription>
                      </DialogHeader>
                      hey
                      <DialogFooter>hry</DialogFooter>
                    </DialogContent>
                  </Dialog>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="ml-auto text-white home-toolbar-button"
                      >
                        Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuCheckboxItem
                        key="Behavioral"
                        className="capitalize"
                        checked={true}
                        // onCheckedChange={(value) =>
                        //   column.toggleVisibility(!!value)
                        // }
                      >
                        Behavioral
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem
                        key="   Job-Specific"
                        className="capitalize"
                        checked={true}
                        // onCheckedChange={(value) =>
                        //   column.toggleVisibility(!!value)
                        // }
                      >
                        Job-Specific
                      </DropdownMenuCheckboxItem>
                      <DropdownMenuCheckboxItem
                        key="Company-Specific"
                        className="capitalize"
                        checked={true}
                        // onCheckedChange={(value) =>
                        //   column.toggleVisibility(!!value)
                        // }
                      >
                        Company-Specific
                      </DropdownMenuCheckboxItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <div
                class="rounded-md overflow-scroll no-scrollbar pl-10px pr-10px h-content"
                // style={{ height: "calc(100% * 17/20)" }}
                //home-t
              >
                <Table className="text-white">
                  <TableHeader>
                    <TableRow className="hover:bg-black">
                      {/* <TableHead className="w-[100px]">Id</TableHead> */}
                      <TableHead>Category</TableHead>
                      <TableHead>Question</TableHead>
                      <TableHead className="text-right">Stars</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TooltipProvider>
                      {data.map((q) => (
                        <TableRow
                          key={q.question}
                          className="border-none nth-child-odd:bg-custom-black nth-child-even:bg-custom-red select-none hover:bg-purple-500"
                          onClick={() => {
                            router.push(`/questions/${hash(q.question)}`);
                          }}
                        >
                          <TableCell>
                            {q.category === "Behavioral" ? (
                              <Tooltip>
                                <TooltipTrigger>
                                  <IoIosPerson />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Behavioral</p>
                                </TooltipContent>
                              </Tooltip>
                            ) : q.category === "Job-Specific" ? (
                              <Tooltip>
                                <TooltipTrigger>
                                  <FaBriefcase />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Job-Specific</p>
                                </TooltipContent>
                              </Tooltip>
                            ) : (
                              <Tooltip>
                                <TooltipTrigger>
                                  <FaBuilding />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>Company-Specific</p>
                                </TooltipContent>
                              </Tooltip>
                            )}
                          </TableCell>
                          <TableCell>{q.question}</TableCell>
                          <TableCell className="text-right">
                            {q.stars}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TooltipProvider>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
          <div
            class="w-1/6 h-content pt-5px pr-10px pl-5px pb-10px large-screen"
            style={{ minWidth: "250px" }}
            ref={statsRef}
          >
            <div
              class="w-full bg-black rounded-md flex flex-col justify-start items-center gap-10px pb-20px"
              style={{ height: "fit-content" }}
            >
              <div
                class="text-white flex justify-center items-center pt-20px pb-10px font-bold"
                style={{
                  borderBottom: "solid white 1px",
                  width: "calc(100% - 20px)",
                }}
              >
                Questions Mastered
              </div>
              <div class="w-full gap-[30px] flex flex-col mt-[15px]">
                <div class="h-content w-full flex justify-center items-center flex-col gap-20px select-none">
                  <div
                    style={{
                      width: statsDim.width * (15 / 20),
                      height: statsDim.width * (15 / 20),
                      border: "solid white 2px",
                      padding: "10px",
                      borderRadius: "50%",
                    }}
                  >
                    <CircularProgressbarWithChildren
                      value={36}
                      styles={{
                        path: {
                          stroke: "#138808",
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
                        <div class="text-[0.6em]">Behavioral</div>
                      </div>
                    </CircularProgressbarWithChildren>
                  </div>
                </div>
                <div class="h-content w-full flex justify-center items-center flex-col gap-20px select-none">
                  <div
                    style={{
                      width: statsDim.width * (15 / 20),
                      height: statsDim.width * (15 / 20),
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
                        <div class="text-[0.6em]">Company-specific</div>
                      </div>
                    </CircularProgressbarWithChildren>
                  </div>
                </div>
                <div class="h-content w-full flex justify-center items-center flex-col gap-20px select-none">
                  <div
                    style={{
                      width: statsDim.width * (15 / 20),
                      height: statsDim.width * (15 / 20),
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
                        <div class="text-[0.6em]">Job-specific</div>
                      </div>
                    </CircularProgressbarWithChildren>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full pl-10px pr-10px pb-10px h-content home-table-progress-bottom">
          <div class="rounded-md bg-black w-full h-full text-white p-10px">
            <div class="w-full h-1/3 flex justify-center items-center">
              <div class="h-full w-2/3flex justify-center items-center p-5px">
                <ProgressBar
                  completed={60}
                  width="calc(100vw * 2/3 - 40px)"
                  bgColor="#138808"
                  id="progress-behavioral"
                />
              </div>
              <div class="w-1/3 flex justify-center items-center p-10px">
                <Label htmlFor="progress-behavioral" className="text-center">
                  Behavioral
                </Label>
              </div>
            </div>
            <div class="w-full h-1/3 flex justify-center items-center">
              <div class="h-full w-2/3 flex justify-center items-center p-5px">
                <ProgressBar
                  completed={60}
                  width="calc(100vw * 2/3 - 40px)"
                  bgColor="#F755F5"
                  id="progress-js"
                />
              </div>
              <div class="w-1/3 flex justify-center items-center p-10px">
                <Label htmlFor="progress-js" className="text-center">
                  Job-Specific
                </Label>
              </div>
            </div>
            <div class="w-full h-1/3 flex justify-center items-center">
              <div class="h-full w-2/3 flex justify-center items-center p-5px">
                <ProgressBar
                  completed={60}
                  width="calc(100vw * 2/3 - 40px)"
                  bgColor="#5755F7"
                  id="progress-cs"
                />
              </div>
              <div class="w-1/3 flex justify-center items-center p-10px">
                <Label htmlFor="progress-cs" className="text-center">
                  Company-Specific
                </Label>
              </div>
            </div>
          </div>
        </div>
        <div
          class="w-full pl-10px pr-10px pb-10px"
          style={{ height: "calc(100vh * 1/10)" }}
        >
          <div class="rounded-md bg-black w-full h-full"></div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
