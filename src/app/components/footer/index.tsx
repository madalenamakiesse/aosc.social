import React from "react";
import { animateScroll } from "react-scroll";
import ButtonLink from "../buttonLink";
import { Link } from "react-scroll";
import NextLink from "next/link";
import Image from "next/image";
import { i18n } from "@/translate/i18n";

function Footer({ ...rest }) {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <section
      className="flex items-center pt-14 w-full justify-center"
      {...rest}
    >
      <div className="max-w-[1216px] px-6 w-full flex flex-col gap-5 justify-start items-center xl:items-start">
        <div className="flex justify-between w-full flex-col gap-6 lg:flex-row py-6">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <div className="flex flex-row gap-3 max-w-sm max-[375px]:flex-col">
                <Image
                  alt="logo Angola Open Source Community"
                  src={"/logo-aosc.svg"}
                  width={80}
                  height={80}
                />
                <h3 className="sm:text-3xl text-2xl font-bold">
                  Angola OpenSource Community
                </h3>
              </div>
              <p className=" w-72">
                We aim to develop and promote FOSS in
                Angola.
              </p>
            </div>
            <ButtonLink
              href="mailto:info@aosc.social"
              text={i18n.t('footer.button')}
              className="text-center justify-center items-center w-56"
            />
          </div>
          <div className="flex flex-row flex-wrap gap-6">
            <div className="w-52">
              <h3 className="text-xl">AOSC</h3>
              <ul className="flex flex-col">
                <li>
                  <Link
                    to={"top"}
                    smooth={true}
                    duration={1400}
                    className=" hover:text-black transition-colors duration-[0.3s] ease-linear cursor-pointer"
                  >
                    {i18n.t('footer.aosc.link_1')}
                  </Link>
                </li>
                <li>
                  <Link
                    to={"motivations"}
                    smooth={true}
                    duration={1400}
                    className=" hover:text-black transition-colors duration-[0.3s] ease-linear cursor-pointer"
                  >
                   {i18n.t('footer.aosc.link_2')}
                  </Link>
                </li>
                <li>
                  <Link
                    to={"our-team"}
                    smooth={true}
                    duration={1400}
                    className=" hover:text-black transition-colors duration-[0.3s] ease-linear cursor-pointer"
                  >
                    {i18n.t('footer.aosc.link_3')}
                  </Link>
                </li>
                <li>
                  <NextLink
                    href={"https://fest.aosc.social/"}
                    target="_blank"
                    className=" hover:text-black transition-colors duration-[0.3s] ease-linear"
                  >
                    AOSFest 2023
                  </NextLink>
                </li>
              </ul>
            </div>

            <div className="w-52">
              <h3 className="text-xl">{i18n.t('footer.community.title')}</h3>
              <ul className="flex flex-col">
                <li>
                  <NextLink
                    href={
                      "https://discord.com/invite/tuUDNdRzvz"
                    }
                    target="_blank"
                    className=" hover:text-black transition-colors duration-[0.3s] ease-linear"
                  >
                    Discord
                  </NextLink>
                </li>
                <li>
                  <NextLink
                    href={
                      "https://www.facebook.com/aoscangola"
                    }
                    target="_blank"
                    className=" hover:text-black transition-colors duration-[0.3s] ease-linear"
                  >
                    Facebook
                  </NextLink>
                </li>
                <li>
                  <NextLink
                    href={
                      "https://www.linkedin.com/company/angola-open-source-community"
                    }
                    target="_blank"
                    className=" hover:text-black transition-colors duration-[0.3s] ease-linear"
                  >
                    Linkedin
                  </NextLink>
                </li>
                <li>
                  <NextLink
                    href={
                      "https://www.youtube.com/@angolaosc"
                    }
                    target="_blank"
                    className=" hover:text-black transition-colors duration-[0.3s] ease-linear"
                  >
                    Youtube
                  </NextLink>
                </li>
              </ul>
            </div>
            <div className="w-52">
              <h3 className="text-xl">{i18n.t('footer.project.title')}</h3>
              <ul className="flex flex-col">
                <li>
                  <NextLink
                    href={"https://mentorship.aosc.social"}
                    target="_blank"
                    className=" hover:text-black transition-colors duration-[0.3s] ease-linear"
                  >
                    {i18n.t('footer.project.link_1')}
                  </NextLink>
                </li>
                <li>
                  <NextLink
                    href={
                      "https://www.youtube.com/playlist?list=PLso4Zv7njkDM-AjI3Z0oaFcPZdT7-fmLy"
                    }
                    target="_blank"
                    className=" hover:text-black transition-colors duration-[0.3s] ease-linear"
                  >
                    The Open Source Café(TOSCA)
                  </NextLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center w-full py-6 border-t flex-col gap-6 md:flex-row md:justify-between">
          <p className=" text-center md:text-start">
            © {year} - Angola Open Source Communiy.
            <br />
            {i18n.t('footer.copyright.info_1')}
            <br />
            <NextLink
              target="_blank"
              href="https://github.com/angolaosc/aosc.social"
            >
              {" "}
              {i18n.t('footer.copyright.link_1')},{" "}
            </NextLink>
            {i18n.t('footer.copyright.info_2')}{" "}
            <NextLink
              target="_blank"
              href="https://github.com/angolaosc/aosf-website/blob/main/LICENSE"
            >
              {i18n.t('footer.copyright.link_2')}
            </NextLink>
          </p>
          <button
            onClick={() => animateScroll.scrollToTop()}
            className=" hover:text-black transition-colors duration-[0.3s] ease-linear"
          >
           {i18n.t('footer.button_top')}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Footer;
