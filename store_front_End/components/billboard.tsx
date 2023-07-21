import { Billboard as BillboardType } from "@/types";

interface BillboardProps {
    data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
    return (
        <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden hover:text-white ">
            <div style={{ backgroundImage: `url(${data?.imageUrl})`}}  className="rounded-xl relative hover:text-yellow-100 aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover ">
                <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
                    <div className="font-bold p-7 rounded-xl bg-gray-400  text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
                        {data.label}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Billboard;