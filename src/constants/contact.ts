import { PhoneIcon, MailIcon, MapPinIcon } from "lucide-react";

export const CONTACT_CARDS = [
    {
        title: "Phone Number",
        value: "+1 (123) 456-7890",
        icon: PhoneIcon
    },
    {
        title: "Akre Address",
        value: "Mangalore, India",
        icon: MapPinIcon
    },
    {
        title: "Email Address",
        value: "info@akrenow.com",
        icon: MailIcon
    }
] as const;
