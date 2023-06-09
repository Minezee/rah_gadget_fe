import { Container } from "../container/container";
import { H4, Lead3, Lead1, H1 } from "../typography/typography";
import {
  FooterContent,
  FooterInfo,
  FooterWrapper,
  FooterContainer,
  FooterSocialMedia,
  SocialMediaIcon,
  SocialMediaIconBox,
  FooterCompanyTitle,
  FooterInfoRow,
} from "./footer.elements";
import Image from "next/image";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterContainer>
          <FooterInfo>
            <FooterInfoRow style={{ margin: "0", flex: "2" }}>
              <FooterCompanyTitle style={{ color: "white !important" }}>
                Rah Gadget
              </FooterCompanyTitle>
              <FooterSocialMedia>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 3H3C2.175 3 1.5075 3.675 1.5075 4.5L1.5 13.5C1.5 14.325 2.175 15 3 15H15C15.825 15 16.5 14.325 16.5 13.5V4.5C16.5 3.675 15.825 3 15 3ZM15 6L9 9.75L3 6V4.5L9 8.25L15 4.5V6Z"
                    fill="#E5E5E5"
                  />
                </svg>
                <Lead3 style={{ margin: "0" }}>loremipsum@gmail.com</Lead3>
              </FooterSocialMedia>
              <FooterSocialMedia>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.99984 6.65697C7.70961 6.65697 6.65668 7.7099 6.65668 9.00013C6.65668 10.2904 7.70961 11.3433 8.99984 11.3433C10.2901 11.3433 11.343 10.2904 11.343 9.00013C11.343 7.7099 10.2901 6.65697 8.99984 6.65697ZM16.0276 9.00013C16.0276 8.02982 16.0364 7.06829 15.9819 6.09974C15.9274 4.97474 15.6707 3.9763 14.8481 3.15365C14.0237 2.32923 13.027 2.07435 11.902 2.01986C10.9317 1.96537 9.97016 1.97416 9.0016 1.97416C8.03129 1.97416 7.06977 1.96537 6.10121 2.01986C4.97621 2.07435 3.97777 2.33099 3.15511 3.15365C2.3307 3.97806 2.07582 4.97474 2.02132 6.09974C1.96683 7.07005 1.97562 8.03158 1.97562 9.00013C1.97562 9.96868 1.96683 10.932 2.02132 11.9005C2.07582 13.0255 2.33246 14.024 3.15511 14.8466C3.97953 15.671 4.97621 15.9259 6.10121 15.9804C7.07152 16.0349 8.03305 16.0261 9.0016 16.0261C9.97191 16.0261 10.9334 16.0349 11.902 15.9804C13.027 15.9259 14.0254 15.6693 14.8481 14.8466C15.6725 14.0222 15.9274 13.0255 15.9819 11.9005C16.0381 10.932 16.0276 9.97044 16.0276 9.00013ZM8.99984 12.6054C7.00473 12.6054 5.39457 10.9952 5.39457 9.00013C5.39457 7.00501 7.00473 5.39486 8.99984 5.39486C10.995 5.39486 12.6051 7.00501 12.6051 9.00013C12.6051 10.9952 10.995 12.6054 8.99984 12.6054ZM12.7528 6.08919C12.287 6.08919 11.9108 5.71302 11.9108 5.2472C11.9108 4.78138 12.287 4.40521 12.7528 4.40521C13.2186 4.40521 13.5948 4.78138 13.5948 5.2472C13.5949 5.35781 13.5732 5.46736 13.531 5.56958C13.4887 5.6718 13.4267 5.76468 13.3485 5.84289C13.2703 5.9211 13.1774 5.98312 13.0752 6.02538C12.9729 6.06765 12.8634 6.08933 12.7528 6.08919Z"
                    fill="#E5E5E5"
                  />
                </svg>
                <Lead3 style={{ margin: "0" }}>Rah Gadget</Lead3>
              </FooterSocialMedia>
              <FooterSocialMedia>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5463 5.20488C16.4566 4.87097 16.2808 4.56645 16.0365 4.32182C15.7922 4.07719 15.4879 3.90102 15.1541 3.81094C13.9254 3.48047 9 3.48047 9 3.48047C9 3.48047 4.07461 3.48047 2.8459 3.80918C2.51195 3.89897 2.2075 4.07504 1.96314 4.31972C1.71877 4.5644 1.54308 4.86906 1.45371 5.20312C1.125 6.43359 1.125 9 1.125 9C1.125 9 1.125 11.5664 1.45371 12.7951C1.63477 13.4736 2.16914 14.008 2.8459 14.1891C4.07461 14.5195 9 14.5195 9 14.5195C9 14.5195 13.9254 14.5195 15.1541 14.1891C15.8326 14.008 16.3652 13.4736 16.5463 12.7951C16.875 11.5664 16.875 9 16.875 9C16.875 9 16.875 6.43359 16.5463 5.20488ZM7.43555 11.3555V6.64453L11.5137 8.98242L7.43555 11.3555Z"
                    fill="#E5E5E5"
                  />
                </svg>
                <Lead3 style={{ margin: "0" }}>rahgadget</Lead3>
              </FooterSocialMedia>
            </FooterInfoRow>
            <FooterInfoRow>
              {/* Tempat menu akses cepat */}
              <Lead1>Akses Cepat</Lead1>
              <Lead3>Brand</Lead3>
              <Lead3>Laptop</Lead3>
              <Lead3>Artikel</Lead3>
              <Lead3>Tentang Kami</Lead3>
            </FooterInfoRow>
            <FooterInfoRow>
              {/* Tempat menu social Media */}
              <Lead1>Social Media</Lead1>
              <SocialMediaIcon>
                <SocialMediaIconBox>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 3H3C2.175 3 1.5075 3.675 1.5075 4.5L1.5 13.5C1.5 14.325 2.175 15 3 15H15C15.825 15 16.5 14.325 16.5 13.5V4.5C16.5 3.675 15.825 3 15 3ZM15 6L9 9.75L3 6V4.5L9 8.25L15 4.5V6Z"
                      fill="#E5E5E5"
                    />
                  </svg>
                </SocialMediaIconBox>
                <SocialMediaIconBox>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.99984 6.65697C7.70961 6.65697 6.65668 7.7099 6.65668 9.00013C6.65668 10.2904 7.70961 11.3433 8.99984 11.3433C10.2901 11.3433 11.343 10.2904 11.343 9.00013C11.343 7.7099 10.2901 6.65697 8.99984 6.65697ZM16.0276 9.00013C16.0276 8.02982 16.0364 7.06829 15.9819 6.09974C15.9274 4.97474 15.6707 3.9763 14.8481 3.15365C14.0237 2.32923 13.027 2.07435 11.902 2.01986C10.9317 1.96537 9.97016 1.97416 9.0016 1.97416C8.03129 1.97416 7.06977 1.96537 6.10121 2.01986C4.97621 2.07435 3.97777 2.33099 3.15511 3.15365C2.3307 3.97806 2.07582 4.97474 2.02132 6.09974C1.96683 7.07005 1.97562 8.03158 1.97562 9.00013C1.97562 9.96868 1.96683 10.932 2.02132 11.9005C2.07582 13.0255 2.33246 14.024 3.15511 14.8466C3.97953 15.671 4.97621 15.9259 6.10121 15.9804C7.07152 16.0349 8.03305 16.0261 9.0016 16.0261C9.97191 16.0261 10.9334 16.0349 11.902 15.9804C13.027 15.9259 14.0254 15.6693 14.8481 14.8466C15.6725 14.0222 15.9274 13.0255 15.9819 11.9005C16.0381 10.932 16.0276 9.97044 16.0276 9.00013ZM8.99984 12.6054C7.00473 12.6054 5.39457 10.9952 5.39457 9.00013C5.39457 7.00501 7.00473 5.39486 8.99984 5.39486C10.995 5.39486 12.6051 7.00501 12.6051 9.00013C12.6051 10.9952 10.995 12.6054 8.99984 12.6054ZM12.7528 6.08919C12.287 6.08919 11.9108 5.71302 11.9108 5.2472C11.9108 4.78138 12.287 4.40521 12.7528 4.40521C13.2186 4.40521 13.5948 4.78138 13.5948 5.2472C13.5949 5.35781 13.5732 5.46736 13.531 5.56958C13.4887 5.6718 13.4267 5.76468 13.3485 5.84289C13.2703 5.9211 13.1774 5.98312 13.0752 6.02538C12.9729 6.06765 12.8634 6.08933 12.7528 6.08919Z"
                      fill="#E5E5E5"
                    />
                  </svg>
                </SocialMediaIconBox>
                <SocialMediaIconBox>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.5463 5.20488C16.4566 4.87097 16.2808 4.56645 16.0365 4.32182C15.7922 4.07719 15.4879 3.90102 15.1541 3.81094C13.9254 3.48047 9 3.48047 9 3.48047C9 3.48047 4.07461 3.48047 2.8459 3.80918C2.51195 3.89897 2.2075 4.07504 1.96314 4.31972C1.71877 4.5644 1.54308 4.86906 1.45371 5.20312C1.125 6.43359 1.125 9 1.125 9C1.125 9 1.125 11.5664 1.45371 12.7951C1.63477 13.4736 2.16914 14.008 2.8459 14.1891C4.07461 14.5195 9 14.5195 9 14.5195C9 14.5195 13.9254 14.5195 15.1541 14.1891C15.8326 14.008 16.3652 13.4736 16.5463 12.7951C16.875 11.5664 16.875 9 16.875 9C16.875 9 16.875 6.43359 16.5463 5.20488ZM7.43555 11.3555V6.64453L11.5137 8.98242L7.43555 11.3555Z"
                      fill="#E5E5E5"
                    />
                  </svg>
                </SocialMediaIconBox>
              </SocialMediaIcon>
            </FooterInfoRow>
            <FooterInfoRow>
              {/* Nanti tempat image rah gadget */}
              <Image src="/footer-bg-rg.png" width="235" height="235" alt="img-exam"></Image>
            </FooterInfoRow>
          </FooterInfo>
          <Lead3>All Rights Reserved. 2022</Lead3>
        </FooterContainer>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
