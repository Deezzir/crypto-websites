import { useTranslations } from "next-intl";
import { HeaderText } from "../../common/text/header-text";
import { Wrapper } from "../../common/wrappers/wrapper";
import { RegularText } from "../../common/text/regular-text";
import { Links } from "../../common/links";

export const SectionSix = (props: any) => {
  const t = useTranslations("SectionSix");
  return (
    <>
      <div className="min-h-screen w-full relative">
        <Wrapper>
          <div className="flex flex-col gap-16">
            <HeaderText customClass={"uppercase"} text={t("1")} />
            <div className="w-full flex justify-center">
              <img src={"./6/dev.png"} />
            </div>
            <RegularText customClass={"text-center"} text={t("2")} />
            <Links />
          </div>
        </Wrapper>
      </div>
    </>
  );
};
