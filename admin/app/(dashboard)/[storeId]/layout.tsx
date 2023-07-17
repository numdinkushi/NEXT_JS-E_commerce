
import Navbar from "@/components/Navbar";
import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const DashboardLayout = async ({
    children,
    params
}: {
    children: React.ReactNode,
    params: { StoreId: string; };
}) => {
    const { userId } = auth();

    if (!userId) {
        redirect('/sign-in');
    }

    const store = await prismadb.store.findFirst({
        where: {
            id: params.StoreId,
            userId
        }
    });

    if (!store) {
        redirect('/');
    }

    return (
        <>
            <Navbar />
            {children}
        </>
    );
};

export default DashboardLayout; 