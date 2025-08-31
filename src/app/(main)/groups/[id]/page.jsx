"use client";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { BarLoader } from "react-spinners";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { PlusCircle, ArrowLeftRight, ArrowLeft, Users, Activity, DollarSign } from "lucide-react";
import { api } from "../../../../../convex/_generated/api";
import { useConvexQuery } from "../../../../../hooks/use-convex-query";
import { Button } from "@/components/ui/button";
import { ExpenseList } from "@/components/expense-list";
import { SettlementList } from "@/components/settlement-list";
import GroupBalances from "@/components/group-balances";
import GroupMembers from "@/components/group-members";

export default function GroupExpensesPage() {
  const params = useParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("expenses");
  
  const { data, isLoading } = useConvexQuery(api.groups.getGroupExpenses, {
    groupId: params.id,
  });
  
  if (isLoading) {
    return (
      <div className="container mx-auto py-12 space-y-4">
        <div className="text-center">
          <BarLoader width={"100%"} color="#059669" />
          <p className="text-slate-600 mt-4">Loading group details...</p>
        </div>
      </div>
    );
  }
  
  const group = data?.group;
  const members = data?.members || [];
  const expenses = data?.expenses || [];
  const settlements = data?.settlements || [];
  const balances = data?.balances || [];
  const userLookupMap = data?.userLookupMap || {};
  
  return (
    <div className="container mx-auto py-6 max-w-4xl px-10 sm:px-0 space-y-6">
      
      {/* Enhanced Header Section */}
      <div className="mb-6">
        <Button
          variant="outline"
          size="sm"
          className="mb-4 hover:shadow-md transition-all duration-300"
          onClick={() => router.back()}
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-4 rounded-xl shadow-sm">
              <Users className="h-8 w-8 text-purple-600" />
            </div>
            <div className="space-y-1">
              <h1 className="text-4xl font-black bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                {group?.name}
              </h1>
              <p className="text-slate-600 text-lg">{group?.description}</p>
              <div className="flex items-center gap-3 mt-2">
                <Badge className="bg-purple-100 text-purple-700 border-purple-200">
                  <Users className="w-3 h-3 mr-1" />
                  {members.length} members
                </Badge>
                <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">
                  <Activity className="w-3 h-3 mr-1" />
                  {expenses.length} expenses
                </Badge>
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button 
              asChild 
              variant="outline"
              className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-all duration-300"
            >
              <Link href={`/settlements/group/${params.id}`}>
                <ArrowLeftRight className="mr-2 h-4 w-4" />
                Settle up
              </Link>
            </Button>
            <Button 
              asChild
              className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href={`/expenses/new`}>
                <PlusCircle className="mr-2 h-4 w-4" />
                Add expense
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Enhanced Grid Layout for Group Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-2">
          <Card className="bg-white/80 backdrop-blur-sm border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-3">
              <CardTitle className="text-xl flex items-center">
                <DollarSign className="h-5 w-5 mr-2 text-emerald-600" />
                Group Balances
              </CardTitle>
            </CardHeader>
            <CardContent>
              <GroupBalances balances={balances} />
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card className="bg-white/80 backdrop-blur-sm border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="pb-3">
              <CardTitle className="text-xl flex items-center">
                <Users className="h-5 w-5 mr-2 text-purple-600" />
                Members
              </CardTitle>
            </CardHeader>
            <CardContent>
              <GroupMembers members={members} />
            </CardContent>
          </Card>
        </div>
      </div>
      
      {/* Original Tabs Section - Unchanged */}
      <Tabs
        defaultValue="expenses"
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-4"
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="expenses">
            Expenses ({expenses.length})
          </TabsTrigger>
          <TabsTrigger value="settlements">
            Settlements ({settlements.length})
          </TabsTrigger>
        </TabsList>
        <TabsContent value="expenses" className="space-y-4">
          <ExpenseList
            expenses={expenses}
            showOtherPerson={true}
            isGroupExpense={true}
            userLookupMap={userLookupMap}
          />
        </TabsContent>
        <TabsContent value="settlements" className="space-y-4">
          <SettlementList
            settlements={settlements}
            isGroupSettlement={true}
            userLookupMap={userLookupMap}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
