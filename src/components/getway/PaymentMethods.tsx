"use client";
import React, { useEffect, useState } from "react";
import { PaymentMethod, Prisma } from "@prisma/client";

// import nagad from "@/../public/assets/nagad.png";
// import wallet from "@/../public/assets/wallet.png";
import Image from "next/image";
import { useGetPaymentGatewayQuery } from "@/lib/features/api/gatewayApiSlice";
import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";
import { Skeleton } from "../ui/skeleton";

const PaymentMethods = ({
  onMethodSelect,
}: {
  onMethodSelect?: (gateway: Prisma.gatewayGetPayload<object>) => void;
}) => {
  const { data, isLoading } = useGetPaymentGatewayQuery();
  const gateway = data?.payload;
  const [selected, setSelected] = useState<Prisma.gatewayGetPayload<object>>();

  const handleClick = (gateway: Prisma.gatewayGetPayload<object>) => {
    setSelected(gateway);
  };

  useEffect(() => {
    if (gateway) {
      setSelected(gateway[0]);
    }
  }, [gateway]);

  useEffect(() => {
    if (selected) {
      onMethodSelect!(selected);
    }
  }, [selected, onMethodSelect]);

  return (
    <div className="flex gap-2 items-center">
      {gateway && gateway.length > 0 && (
        <div>
          <h4 className="text-white text-sm font-medium mb-2">
            *Select Payment Methods
          </h4>
          <div className="flex gap-2 items-center">
            {gateway?.map((g, i) => (
              <button
                onClick={() => handleClick(g)}
                key={i}
                className={cn(
                  "relative bg-input w-32 transition-all p-2 rounded-lg border border-border text-muted hover:text-white flex flex-col justify-center items-center",
                  `${
                    selected?.id === g.id && "ring-1 ring-secondary-foreground"
                  }`
                )}
              >
                {selected?.id === g.id && (
                  <span className="absolute left-0 -bottom-5 flex items-center gap-1 text-secondary-foreground text-xs font-semibold">
                    <CircleCheck className="w-3 h-3" />
                    Selected
                  </span>
                )}
                <Image
                  src={
                    g.method === PaymentMethod.BKASH
                      ? "/assets/bkash.png"
                      : g.method === PaymentMethod.NAGAD
                      ? "/assets/nagad.png"
                      : "/assets/wallet.png"
                  }
                  alt={g.method}
                  className="w-12 aspect-square object-cover rounded-md"
                  placeholder="blur"
                  width={100}
                  height={100}
                />
                <span className="text-xs capitalize">{g.method}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {isLoading && (
        <div className="w-full">
          <Skeleton className="h-4 w-[200px]" />
          <div className="flex w-full gap-2 mt-2">
            <Skeleton className="h-16 flex-1" />
            <Skeleton className="h-16  flex-1" />
            <Skeleton className="h-16  flex-1" />
          </div>
        </div>
      )}

      {gateway && gateway.length === 0 && (
        <span className="text-[10px] text-muted-foreground">
          You have no Payment method added{" "}
          <span className="text-brand">please add Payment method</span>
        </span>
      )}
    </div>
  );
};

export default PaymentMethods;
