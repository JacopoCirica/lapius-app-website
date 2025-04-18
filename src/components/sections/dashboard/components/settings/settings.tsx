"use client";

import * as React from "react";
import {
  BriefcaseMedical,
  ChevronRight,
  HospitalIcon,
  LockIcon,
  Paintbrush,
  Receipt,
  Settings,
  User2,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import PersonalSection from "./personal-section";
import InsuranceSection from "./insurance-section";
import PrivacyNotice from "./privacy-notice";

const medicalBillnav = {
  nav: [
    { name: "Personal Info", icon: User2 },
    { name: "Insurance", icon: LockIcon },
    // { name: "Visit Details", icon: HospitalIcon },
  ],
};

const documentNav = {
  nav: [
    { name: "EoB", icon: Paintbrush },
    { name: "Itemised Bill", icon: Receipt },
    { name: "Medical Record", icon: BriefcaseMedical },
  ],
};

const SettingsDialog = () => {
  const [open, setOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState(
    medicalBillnav.nav[0].name
  );

  const renderContent = () => {
    switch (activeSection) {
      case "Personal Info":
        return <PersonalSection />;
      case "Insurance":
        return <InsuranceSection />;
      // case "Visit Details":
      //   return <p>Visit Details Content</p>;
      // case "EoB":
      //   return <p>EoB Content</p>;
      default:
        return <p>Content not found</p>;
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        asChild
        className=" hover:bg-teal-900 rounded-md py-3 px-3 cursor-pointer"
      >
        <div className="flex items-center gap-2 text-white text-sm tracking-wide leading-5 font-medium hover:bg-muted/5 hover:bg-teal-900">
          <Settings className="h-4 w-4 ml-1" />
          <span>Settings</span>
        </div>
      </DialogTrigger>
      <DialogContent className="overflow-hidden p-0 md:max-h-[500px] md:max-w-[700px] lg:max-w-[800px]">
        <DialogTitle className="sr-only" aria-describedby="settings">
          Settings
        </DialogTitle>
        <DialogDescription className="sr-only">
          Customize your settings here.
        </DialogDescription>
        <SidebarProvider className="items-start">
          <Sidebar
            collapsible="none"
            className="hidden md:flex bg-white hover:shadow-lg h-[500px] overflow-y-auto"
          >
            <SidebarHeader className=" border-muted-foreground p-4 text-black text-3xl ">
              Settings
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel className="px-2 text-xs font-semibold text-muted-foreground ">
                  Medical bill settings
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {medicalBillnav.nav.map((item) => (
                      <SidebarMenuItem key={item.name}>
                        <SidebarMenuButton
                          asChild
                          className={cn(
                            "py-8 px-4 cursor-pointer rounded-lg hover:bg-gray-100 hover:text-black hover:shadow-sm",
                            activeSection === item.name
                              ? "bg-green-100 font-medium text-primary "
                              : " text-gray-600 "
                          )}
                          onClick={() => setActiveSection(item.name)}
                        >
                          <div className="flex items-center gap-2 justify-between">
                            <div className="flex items-center gap-2 justify-between">
                              <item.icon className="h-4 w-4" />
                              <span>{item.name}</span>
                            </div>
                            <ChevronRight
                              className={cn(
                                "h-4 w-4 text-gray-400 ",
                                activeSection === item.name
                                  ? "text-primary"
                                  : ""
                              )}
                            />
                          </div>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
              {/* <SidebarGroup>
                <SidebarGroupLabel className="px-2 text-xs font-semibold text-muted-foreground ">
                  Document Preferences
                </SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {documentNav.nav.map((item) => (
                      <SidebarMenuItem key={item.name}>
                        <SidebarMenuButton
                          asChild
                          className={cn(
                            "py-8 px-4 cursor-pointer rounded-lg",
                            activeSection === item.name
                              ? "bg-green-100 text-primary font-medium"
                              : "hover:bg-gray-100 text-gray-600 hover:text-black"
                          )}
                          onClick={() => setActiveSection(item.name)}
                        >
                          <div>
                            <item.icon />
                            <span>{item.name}</span>
                          </div>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup> */}
            </SidebarContent>
          </Sidebar>
          <main className="flex h-[480px] flex-1 flex-col overflow-hidden">
            <div className="flex flex-1 flex-col gap-6 overflow-y-auto p-4 pt-0">
              {renderContent()}
              <PrivacyNotice />
            </div>
          </main>
        </SidebarProvider>
      </DialogContent>
    </Dialog>
  );
};

export default SettingsDialog;
