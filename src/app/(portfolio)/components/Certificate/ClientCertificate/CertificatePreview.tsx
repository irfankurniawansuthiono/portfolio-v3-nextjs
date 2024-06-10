"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import { Box, Image, Text, useBreakpointValue } from "@chakra-ui/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRouter } from "next/navigation";
import { useOnClickOutside } from "usehooks-ts";
import certificateList from "~/assets/CertificateList/CertificateList";
// import required modules
import {
  Pagination,
  Navigation,
  HashNavigation,
  Keyboard,
  EffectCreative,
} from "swiper/modules";
export default function CertificatePreview() {
  const router = useRouter();
  const ref = useRef(null);
  const closeHandler = () => {
    document.body.style.overflow = "auto";
    router.replace("/", { scroll: false });
  };

  useOnClickOutside(ref, closeHandler);
  return (
    <Box
      className="animate__animated animate__fadeIn animate__faster"
      userSelect={"none"}
      top={0}
      left={0}
      right={0}
      bottom={0}
      pos={"fixed"}
      display={"flex"}
      flexDir={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      bgColor={"rgba(0,0,0,0.8)"}
      zIndex={999}
    >
      <Text style={{ color: "whitesmoke" }} mb={5} fontSize={"sm"}>
        Click on dark area to close preview
      </Text>
      <Box ref={ref} w={{ base: "90vw", md: "100vh", xl: "120vh" }}>
        <Swiper
          effect={"creative"}
          keyboard={{
            enabled: true,
          }}
          creativeEffect={{
            prev: {
              shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          style={
            {
              "--swiper-navigation-color": "#ECC94B",
              "--swiper-pagination-color": "#ECC94B",
            } as any
          }
          spaceBetween={10}
          hashNavigation={{
            watchState: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={useBreakpointValue({
            base: false,
            md: false,
          })}
          modules={[
            EffectCreative,
            Keyboard,
            Pagination,
            Navigation,
            HashNavigation,
          ]}
          className="animate__animated animate__zoomIn animate__faster
          "
        >
          {certificateList
            .slice()
            .reverse()
            .map((certificate) => (
              <SwiperSlide
                style={{
                  textAlign: "center",
                  cursor: "pointer",
                  backgroundColor: "black",
                }}
                key={certificate.id}
                data-hash={`certificate_${certificate.id}`}
              >
                <Box
                  w={"100%"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Image src={certificate.img} alt={certificate.altImg} />
                </Box>
              </SwiperSlide>
            ))}
        </Swiper>
      </Box>
    </Box>
  );
}
