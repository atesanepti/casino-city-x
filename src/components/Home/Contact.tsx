"use client";
import { useFetchContactInfoQuery } from "@/lib/features/api/contactApiSlice";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import facebook from "@/../public/assets/facebook.png";
// import telegram from "@/../public/assets/telegram.png";
// import whatsapp from "@/../public/assets/whatsapp.png";
import { BadgeHelp } from "lucide-react";
const Contact = () => {
  const { data } = useFetchContactInfoQuery();
  const contactInfo = data?.payload;
  return (
    <>
      {contactInfo && (
        <div>
          <h5
            className="text-white text-sm font-semibold 
                "
          >
            Contacet
          </h5>
          <ul className="mt-2 flex  gap-2">
            {contactInfo.facebook && (
              <li className="text-xs text-muted-foreground hover:underline hover:text-white transition-all">
                <Link href={contactInfo.facebook} target="_blank">
                  <Image
                    width={100}
                    height={100}
                    src={"/assets/facebook.png"}
                    alt="Facebook"
                    className="w-7"
                  />
                </Link>
              </li>
            )}
            {contactInfo.whatsapp && (
              <li className="text-xs text-muted-foreground hover:underline hover:text-white transition-all">
                <Link
                  href={`https://wa.me/${contactInfo.whatsapp.replace(
                    "+",
                    ""
                  )}?text=Hello!%20I%20need%20assistance`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    width={100}
                    height={100}
                    src={"/assets/whatsapp.png"}
                    alt="Whatsapp"
                    className="w-7"
                  />
                </Link>
              </li>
            )}
            {contactInfo.telegram && (
              <li className="text-xs text-muted-foreground hover:underline hover:text-white transition-all">
                <Link
                  href={`https://t.me/${contactInfo.telegram}`}
                  target="_blank"
                >
                  <Image
                    width={100}
                    height={100}
                    src={"/assets/telegram.png"}
                    alt="Telegram"
                    className="w-7"
                  />
                </Link>
              </li>
            )}

            <li className="text-xs text-muted-foreground hover:underline hover:text-white transition-all">
              <Link href="#">
                <BadgeHelp className="w-7 h-7 rounded-full bg-blue-700 text-white p-2 " />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Contact;
