import { PublicLayout } from "../Layout";
import { BannerSection, SearchSection } from "../components/Home";

const IndexPage = () => {
  return (
    <PublicLayout title="">
      <section>
        <SearchSection />
        <BannerSection />
      </section>
    </PublicLayout>
  );
};

export default IndexPage;
