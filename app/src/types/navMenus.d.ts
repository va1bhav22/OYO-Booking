interface navMenusProps {
  id: number;
  title: string;
  element?: React.ReactNode | string;
  subMenus?: {
    id?: number;
    title?: string;
    path?: string;
  }[];
  path?: string;
}
