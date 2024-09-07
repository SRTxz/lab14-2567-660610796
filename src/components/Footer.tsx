import { footerProps } from "@lib/types";
export default function Footer({year, fullName , id} : footerProps) {
  return (
    <div>
      <p>Copyright © {year} {fullName} {id}</p>
    </div>
  );
}
