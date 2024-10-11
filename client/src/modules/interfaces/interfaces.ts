export interface CardProps {
  linkIMG: string;
  label: string;
  movieName: string;
}
interface dataObject {
  name: string;
  link: string;
  icon: string;
}
export interface SideBarProps {
  title: string;
  data: dataObject[];
  typeComponent: React.FC;
}
