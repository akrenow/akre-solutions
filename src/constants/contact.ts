import { PhoneIcon, MailIcon, MapPinIcon } from "lucide-react";

export const CONTACT_CARDS = [
    {
        title: "Phone Number",
        value: " +91 72593 56756",
        icon: PhoneIcon
    },
    {
        title: "Zintronia Address",
        value: " Akre Partners Pvt Ltd 1-226, Konaje , Mangalore, Karnataka, India",
        icon: MapPinIcon
    },
    {
        title: "Email Address",
        value: " info@zintronia.com",
        icon: MailIcon
    }
] as const;
