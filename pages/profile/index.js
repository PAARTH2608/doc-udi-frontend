import React from "react";
import {
  BlueTile,
  BlueTile2,
  Container,
  ContentContainer,
  Help,
  HelperContainer,
  HelperContainer2,
  InnerPicContainer,
  MainContainer,
  MainContainer2,
  SmallContainer,
  SmallContent,
  WhiteTile,
  WhiteTile2,
} from "../../components/pageComponents/profile/style";
import { useTheme } from "@mui/material/styles";
import {
  TopBar,
  LargeContent,
} from "../../components/pageComponents/PatientDetails/style";
import Link from "next/link";
import { Button } from "@mui/material";
import { IoIosArrowBack } from "react-icons/io";
import Logo from "../../components/utils/Images/Logo";
import Image from "next/image";
import { useSelector } from "react-redux";

const Profile = () => {
  const theme = useTheme();
  const style = {
    color: theme.palette.secondary.main,
    backgroundColor: "#fff",
    fontSize: "1.2rem",
    fontWeight: "400",
    boxShadow: "none",
  };
  const user = useSelector((state) => state.login.user);
  console.log(user);
  return (
    <Container>
      <Logo />
      <TopBar>
        <LargeContent>Your Profile</LargeContent>
        <Link href={"/"}>
          <Button
            variant="contained"
            startIcon={<IoIosArrowBack />}
            style={style}
          >
            back
          </Button>
        </Link>
      </TopBar>
      <ContentContainer>
        <InnerPicContainer>
          <Image
            src={`${user.pfp}`}
            alt="profile"
            objectFit="cover"
            height={"110%"}
            width={"110%"}
          />
        </InnerPicContainer>
        <SmallContainer>
          <LargeContent>{user.name}</LargeContent>
          <SmallContent>{user.specialization}</SmallContent>
        </SmallContainer>
      </ContentContainer>
      <Help>
        <MainContainer>
          <HelperContainer>
            <BlueTile>Email:</BlueTile>
            <WhiteTile>{user.email}</WhiteTile>
          </HelperContainer>
          <HelperContainer>
            <BlueTile>Clinic Address:</BlueTile>
            <WhiteTile>{user.clinic_address}</WhiteTile>
          </HelperContainer>
          <HelperContainer>
            <BlueTile>City:</BlueTile>
            <WhiteTile>{user.city}</WhiteTile>
          </HelperContainer>
          <HelperContainer>
            <BlueTile>Consultation Fees:</BlueTile>
            <WhiteTile>{user.consultation_fee}</WhiteTile>
          </HelperContainer>
        </MainContainer>
        <MainContainer2>
          <HelperContainer2>
            <BlueTile2>Time Slots</BlueTile2>
            {user.time_slots.map((slot) => (
              <WhiteTile2 key={slot.id}>
                {slot.startTime}&nbsp; - &nbsp;{slot.endTime}
              </WhiteTile2>
            ))}
          </HelperContainer2>
          <HelperContainer2>
            <BlueTile2>Working Days</BlueTile2>
            {user.working_days.length !== 0 &&
              user.working_days.map((slot) => (
                <WhiteTile2 key={slot.id}>
                  {slot.startTime}&nbsp; - &nbsp;{slot.endTime}
                </WhiteTile2>
              ))}
          </HelperContainer2>
        </MainContainer2>
      </Help>
    </Container>
  );
};

export default Profile;
