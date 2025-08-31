"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { BarLoader } from "react-spinners";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus, Users, User, Sparkles, ArrowRight, ArrowRightFromLine, ArrowBigRight, CircleArrowRight } from "lucide-react";
import { api } from "../../../../convex/_generated/api";
import { CreateGroupModal } from "./_components/create-group-modal";
import { useConvexQuery } from "../../../../hooks/use-convex-query";

export default function ContactsPage() {
  const [isCreateGroupModalOpen, setIsCreateGroupModalOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const { data, isLoading } = useConvexQuery(api.contacts.getAllContacts);

  // Check for the createGroup parameter when the component mounts
  useEffect(() => {
    const createGroupParam = searchParams.get("createGroup");

    if (createGroupParam === "true") {
      // Open the modal
      setIsCreateGroupModalOpen(true);

      // Remove the parameter from the URL
      const url = new URL(window.location.href);
      url.searchParams.delete("createGroup");

      // Replace the current URL without the parameter
      router.replace(url.pathname + url.search);
    }

  window.scrollTo(0, 0);

  }, [searchParams, router]);

  if (isLoading) {
    return (
      <div className="container mx-auto py-12 space-y-8">
        <div className="text-center space-y-4">
          <div className="animate-pulse">
            <div className="h-12 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg w-48 mx-auto mb-4"></div>
          </div>
          <BarLoader width={"100%"} color="#059669" />
          <p className="text-slate-600 animate-pulse">Loading your contacts...</p>
        </div>
      </div>
    );
  }

  const { users, groups } = data || { users: [], groups: [] };


  return (
    <div className="relative min-h-screen">
      {/* Subtle background effects matching your theme */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-emerald-200/20 to-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-purple-200/15 to-pink-200/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto py-8 px-6 sm:px-10 md:px-20 space-y-8">
        {/* Enhanced header section */}
        <div className="animate-in fade-in slide-in-from-top duration-700">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 justify-between mb-8">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Contacts
              </h1>
              <p className="text-lg text-slate-600">
                Manage your people and groups for seamless expense splitting
              </p>
            </div>
            <Button 
              onClick={() => setIsCreateGroupModalOpen(true)}
              className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 shadow-xl hover:shadow-2xl transition-all duration-300 group px-6 py-3 text-base font-semibold"
            >
              <Plus className="mr-2 h-5 w-5 group-hover:rotate-90 transition-transform duration-300" />
              Create Group
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Enhanced Individual Contacts Section */}
          <div className="animate-in fade-in slide-in-from-left duration-700 delay-200">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2 flex items-center text-slate-800">
                <div className="bg-gradient-to-r from-emerald-600 to-blue-600 p-2 rounded-xl mr-3">
                  <User className="h-6 w-6 text-white" />
                </div>
                People
                <span className="ml-3 text-sm font-normal bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full">
                  {users.length}
                </span>
              </h2>
              <p className="text-slate-600">Your individual contacts for expense tracking</p>
            </div>

            {users.length === 0 ? (
              <Card className="bg-white/80 backdrop-blur-sm border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="py-12 text-center">
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-slate-100 to-slate-200 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                      <User className="h-8 w-8 text-slate-500" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-slate-700">No contacts yet</h3>
                      <p className="text-slate-500 max-w-sm mx-auto">
                        Add an expense with someone to see them appear here automatically
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {users.map((user, index) => (
                  <div 
                    key={user.id}
                    className="animate-in fade-in slide-in-from-bottom duration-500"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <Link href={`/person/${user.id}`}>
                      <Card className="bg-white/80 backdrop-blur-sm border border-slate-200/50 hover:bg-white/90 hover:shadow-xl hover:border-emerald-200/60 transition-all duration-300 cursor-pointer group">
                        <CardContent className="py-5">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="relative">
                                <Avatar className="h-12 w-12 ring-2 ring-emerald-200/50 group-hover:ring-emerald-300 transition-all duration-300">
                                  <AvatarImage src={user.imageURL} />
                                  <AvatarFallback className="bg-gradient-to-br from-emerald-100 to-blue-100 text-emerald-700 font-bold text-lg">
                                    {user.name.charAt(0)}
                                  </AvatarFallback>
                                </Avatar>
                                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white"></div>
                              </div>
                              <div className="space-y-1">
                                <p className="font-semibold text-slate-800 group-hover:text-emerald-700 transition-colors">
                                  {user.name}
                                </p>
                                <p className="text-sm text-slate-500 group-hover:text-slate-600 transition-colors">
                                  {user.email}
                                </p>
                              </div>
                            </div>
                            <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 translate-x-2">
                              <div className="w-8 h-8 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-full flex items-center justify-center">
                                <ArrowRight className="h-4 w-4 text-white" />
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Enhanced Groups Section */}
          <div className="animate-in fade-in slide-in-from-right duration-700 delay-400">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2 flex items-center text-slate-800">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-xl mr-3">
                  <Users className="h-6 w-6 text-white" />
                </div>
                Groups
                <span className="ml-3 text-sm font-normal bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                  {groups.length}
                </span>
              </h2>
              <p className="text-slate-600">Organized groups for shared expenses</p>
            </div>

            {groups.length === 0 ? (
              <Card className="bg-white/80 backdrop-blur-sm border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="py-12 text-center">
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                      <Users className="h-8 w-8 text-purple-600" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-slate-700">No groups yet</h3>
                      <p className="text-slate-500 max-w-sm mx-auto">
                        Create a group to start tracking shared expenses with multiple people
                      </p>
                    </div>
                    <Button 
                      onClick={() => setIsCreateGroupModalOpen(true)}
                      variant="outline"
                      className="border-2 border-emerald-300 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-400 transition-all duration-300"
                    >
                      <Sparkles className="mr-2 h-4 w-4" />
                      Create Your First Group
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {groups.map((group, index) => (
                  <div 
                    key={group.id}
                    className="animate-in fade-in slide-in-from-bottom duration-500"
                    style={{ animationDelay: `${(index + users.length) * 100}ms` }}
                  >
                    <Link href={`/groups/${group.id}`}>
                      <Card className="bg-white/80 backdrop-blur-sm border border-slate-200/50 hover:bg-white/90 hover:shadow-xl hover:border-purple-200/60 transition-all duration-300 cursor-pointer group">
                        <CardContent className="py-5">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                              <div className="bg-gradient-to-r from-purple-100 to-pink-100 group-hover:from-purple-200 group-hover:to-pink-200 p-3 rounded-xl transition-all duration-300">
                                <Users className="h-7 w-7 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
                              </div>
                              <div className="space-y-1">
                                <p className="font-semibold text-slate-800 group-hover:text-purple-700 transition-colors">
                                  {group.name}
                                </p>
                                <p className="text-sm text-slate-500 group-hover:text-slate-600 transition-colors flex items-center">
                                  <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2"></span>
                                  {group.memberCount} members
                                </p>
                              </div>
                            </div>
                            <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 translate-x-2">
                              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                                <ArrowRight className="h-4 w-4 text-white" />
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <CreateGroupModal
          isOpen={isCreateGroupModalOpen}
          onClose={() => setIsCreateGroupModalOpen(false)}
          onSuccess={(groupId) => {
            router.push(`/groups/${groupId}`);
          }}
        />
      </div>
    </div>
  );
}
