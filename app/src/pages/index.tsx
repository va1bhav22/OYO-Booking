import { PublicLayout } from "../Layout";
import {
  BannerSection,
  CountryBranches,
  SearchSection,
} from "../components/Home";

const IndexPage = () => {
  return (
    <PublicLayout title="">
      <section>
        <SearchSection />
        <BannerSection />
        <CountryBranches />
      </section>
    </PublicLayout>
  );
};

export default IndexPage;
