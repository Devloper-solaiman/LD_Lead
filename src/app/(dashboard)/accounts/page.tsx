"use client";

import { Plus } from "lucide-react";

import { Payment, columns } from "./columns";
import { useNewAccount } from "../../../features/accounts/hooks/use-new-account";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { DataTable } from "../../../components/data-table";
import { Button } from "../../../components/ui/button";

const data: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed54s",
    amount: 50,
    status: "success",
    email: "a@example.com",
  },
  {
    id: "728eer354s",
    amount: 150,
    status: "success",
    email: "asdf@example.com",
  },
];

const AccountsPage = () => {
  const newAccount = useNewAccount();

  return (
    <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
      <Card className="border-none drop-shadow-sm">
        <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">
          <CardTitle className="text-xl line-clamp-1">Accounts page</CardTitle>
          <Button onClick={newAccount.onOpen} size="sm">
            <Plus className="size-4 mr-2" />
            Add new
          </Button>
        </CardHeader>
        <CardContent>
          <DataTable
            columns={columns}
            data={data}
            filterKey="email"
            onDelete={() => {}}
            disabled={false}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default AccountsPage;
