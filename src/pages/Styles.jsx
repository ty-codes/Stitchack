import { PageWrapper } from "../components";
import { LeftOutlined } from "@ant-design/icons";
import { blackDress, blouse, skirt, top, trouser, twoPiece, wedding } from "../assets";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { device } from "../constants";


export default function Styles() {
    const navigate = useNavigate();

    return (
        <PageWrapper>
            <Back>
                <LeftOutlined onClick={() => navigate(-1)} />

            </Back>
            <H3>Styles</H3>
            <Wrapper>
                <Style bg={blouse}><p>Blouse</p></Style>
                <Style bg={trouser}><p>Trouser</p></Style>
                <Style bg={skirt}><p>Skirt</p></Style>
                <Style bg={top}><p>Top</p></Style>
                <Style bg={wedding}><p>Wedding</p></Style>
                <Style bg={blackDress}><p>Black dress</p></Style>
                <Style bg={twoPiece}><p>Two piece</p></Style>
            </Wrapper>
        </PageWrapper>
    )
}

const H3 = styled.h3`
    margin-bottom: 1.5em;
`;

const Back = styled.span`

    svg {
        width: 20px;
        height: 20px;
        margin-bottom: 2em;
    }
`

const Wrapper = styled.div`
   display: flex;
   flex-shrink: 0;
   flex-wrap: wrap;
   gap: 20px;
   justify-content: space-evenly;
`;

const Style = styled.div`
    background-image: url(${props => props.bg});
    background-size: cover;
    width: 250px;
    height: 250px;
    display: flex;
    justify-content: center;
    border-radius: 5px;

    @media (max-width: 540px) {
        width: 200px;
        height: 200px;
    }

    @media (max-width: 440px) {
        width: 170px;
        height: 170px;
    }

    @media ${device.mobileM} {
        width: 100%;
        height: 170px;
    }

    p {
        color: white;
        font-weight: 700;
        font-size: 14px;
        margin: auto;
    }

`;