//* Constants
declare interface NavLink {
  href: string;
  key: string;
  label: string;
}

declare interface Feature {
  title: string;
  icon: string;
  variant: string;
  description: string;
}

declare interface FooterLink {
  title: string;
  links: string[];
}

declare interface FooterContact {
  title: string;
  links: {
    label: string;
    value: string;
  }[];
}

//* Components
declare interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

declare interface CampSiteProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}
