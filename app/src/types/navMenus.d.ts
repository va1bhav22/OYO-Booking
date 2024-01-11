interface navMenusProps {
  id: number;
  title?: string;
  element?: React.ReactNode | string;
  path?: string;
  subMenus?: {
    id?: number;
    title?: string;
    path?: undefined | string | null;
  }[];
}
