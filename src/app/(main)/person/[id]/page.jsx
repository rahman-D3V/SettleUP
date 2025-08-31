"use client"

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useConvexQuery } from "../../../../../hooks/use-convex-query";
import { api } from "../../../../../convex/_generated/api";
import { BarLoader } from "react-spinners";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowLeftRight, PlusCircle, DollarSign, CheckCircle, Activity } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExpenseList } from "@/components/expense-list";
import { SettlementList } from "@/components/settlement-list";

export default function PersonExpensesPage() {
  const params = useParams();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("expenses");

  const { data, isLoading } = useConvexQuery(
    api.expenses.getExpensesBetweenUsers,
    { userId: params.id }
  );

  if (isLoading) {
    return (
      <div className="container mx-auto py-12">
        <BarLoader width={"100%"} color="#059669" />
      </div>
    );
  }

  const otherUser = data?.otherUser;
  const expenses = data?.expenses || [];
  const settlements = data?.settlements || [];
  const balance = data?.balance || 0;

  return (
    <div className="container mx-auto py-6 max-w-4xl px-10 sm:px-0 space-y-6">
      
      {/* Back Button */}
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

        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-16 w-16">
              <AvatarImage src={otherUser?.imageUrl} />
              <AvatarFallback className="bg-gradient-to-br from-emerald-100 to-blue-100 text-emerald-700 font-bold text-xl">
                {otherUser?.name?.charAt(0) || "?"}
              </AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h1 className="text-4xl font-black bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                {otherUser?.name}
              </h1>
              <p className="text-slate-600">{otherUser?.email}</p>
              <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">
                <Activity className="w-3 h-3 mr-1" />
                {expenses.length} expenses
              </Badge>
            </div>
          </div>

          <div className="flex gap-2">
            <Button 
              variant="outline"
              onClick={() => router.push(`/settlements/user/${params.id}`)}
            >
              <ArrowLeftRight className="mr-2 h-4 w-4" />
              Settle up
            </Button>
            <Button 
              className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => router.push(`/expenses/new`)}
            >
              <PlusCircle className="mr-2 h-4 w-4" />
              Add expense
            </Button>
          </div>
        </div>
      </div>

      {/* Balance Card */}
      <Card className="mb-6 bg-white/80 backdrop-blur-sm border border-slate-200/50 shadow-lg">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl flex items-center">
            <DollarSign className="h-5 w-5 mr-2 text-emerald-600" />
            Balance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center">
            <div>
              {balance === 0 ? (
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                  <p className="font-medium text-emerald-600">You are all settled up</p>
                </div>
              ) : balance > 0 ? (
                <p>
                  <span className="font-medium text-emerald-600">{otherUser?.name}</span> owes you
                </p>
              ) : (
                <p>
                  You owe <span className="font-medium text-red-600">{otherUser?.name}</span>
                </p>
              )}
            </div>
            <div className={`text-2xl font-bold ${
              balance > 0 ? "text-emerald-600" : 
              balance < 0 ? "text-red-600" : 
              "text-slate-600"
            }`}>
              ${Math.abs(balance).toFixed(2)}
            </div>
          </div>
        </CardContent>
      </Card>



      {/* Tabs for expenses and settlements */}
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
            showOtherPerson={false}
            otherPersonId={params.id}
            userLookupMap={{ [otherUser.id]: otherUser }}
          />
        </TabsContent>

        <TabsContent value="settlements" className="space-y-4">
          <SettlementList
            settlements={settlements}
            userLookupMap={{ [otherUser.id]: otherUser }}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}
