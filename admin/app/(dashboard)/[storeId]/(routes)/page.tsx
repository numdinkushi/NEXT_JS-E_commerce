import { getGraphRevenue } from '@/actions/get-graph-revenue';
import { getSalesCount } from '@/actions/get-sales-count';
import { getStockCount } from '@/actions/get-stock-count';
import { getTotalRevenue } from '@/actions/get-total-revenue';
import { Overview } from '@/components/overview';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { Separator } from "@/components/ui/separator";

import prismadb from '@/lib/prismadb';
import { formatter } from '@/lib/utils';
import { CreditCardIcon, DollarSign, Package } from 'lucide-react';
import React from 'react';

interface DashboardPageProps {
    params: { storeId: string; };
}

const DashboardPage: React.FC<DashboardPageProps> = async ({ params }) => {

    const totalRevenue = await getTotalRevenue(params.storeId);
    const salesCount = await getSalesCount(params.storeId);
    const stockCount = await getStockCount(params.storeId);
    const graphRevenue = await getGraphRevenue(params.storeId);

    return (
        <div className='flex-col'>
            <div className="flex-1 space-y-4 p-8 pt-6 ">
                <Heading title="Dashboard" description='Overview of your store' />
                <Separator />
                <div className="grid gap-4 grid-cols-3">
                    <Card className='mr-2'>
                        <CardHeader className='text-sm font-medium'>
                            <CardTitle className='flex flex-row items-center justify-between space-y-0 pb-2'>
                                Total Revenue
                            </CardTitle>
                            <DollarSign className='h-4 w-4 text-muted-foreground ' />
                        </CardHeader>
                        <CardContent>
                            <div className="tex-2xl font-bold">
                                {formatter.format(totalRevenue)}
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className='text-sm font-medium'>
                            <CardTitle className='flex flex-row items-center justify-between space-y-0 pb-2'>
                                Sales
                            </CardTitle>
                            <CreditCardIcon className='h-4 w-4 text-muted-foreground ' />
                        </CardHeader>
                        <CardContent>
                            <div className="tex-2xl font-bold">
                                +{salesCount}
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className='text-sm font-medium'>
                            <CardTitle className='flex flex-row items-center justify-between space-y-0 pb-2'>
                                Products in stock
                            </CardTitle>
                            <Package className='h-4 w-4 text-muted-foreground ' />
                        </CardHeader>
                        <CardContent>
                            <div className="tex-2xl font-bold">
                                {stockCount}
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="col-span-4">
                    <Card className="col-span-4">
                        <CardHeader>
                            <CardTitle>Overview</CardTitle>
                        </CardHeader>
                        <CardContent className="pl-2">
                            <Overview data={graphRevenue} />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;