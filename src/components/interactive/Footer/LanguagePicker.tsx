import { Locales, type Locale } from "@/helpers/lang";
import useDeviceSize from "@/hooks/useDeviceSize";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { type FC } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../ui/select";

const LanguagePicker: FC = () => {
  const router = useRouter();
  const { isSmallDevice } = useDeviceSize();
  const { t } = useTranslation("");
  const { pathname, asPath, query } = router;

  const placeholderValue = isSmallDevice ? "EN" : t(`lang.${router.locale}`);
  const languageText = (locale: string) =>
    isSmallDevice ? locale.toUpperCase() : t(`lang.${locale}`);

  const changeLanguage = async (newLocale: Locale) => {
    document.cookie = `NEXT_LOCALE=${newLocale}; max-age=31536000; SameSite=Lax; path=/`;
    await router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  return (
    <Select onValueChange={changeLanguage} value={router.locale}>
      <SelectTrigger className="w-20 md:w-32">
        <SelectValue placeholder={placeholderValue} />
      </SelectTrigger>
      <SelectContent>
        {Locales.map((locale) => (
          <SelectItem key={locale} value={locale}>
            {languageText(locale)}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default LanguagePicker;
