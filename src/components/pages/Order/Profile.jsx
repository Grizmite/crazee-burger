import { BsPersonCircle } from "react-icons/bs"
import { Link, useParams } from "react-router-dom"
import styled from "styled-components"

// eslint-disable-next-line react/prop-types
export default function Profile() {
 
  const { username } = useParams();

  return (

    <ProfileStyled>
      <div className="info">
        <p>
          Hey, <b>{username}</b>
        </p>
        <Link to="/">
          <div className="description">
            <small>Se déconnecter</small>
          </div>
        </Link>
      </div>
      <div className="picture">
        <BsPersonCircle />
      </div>
    </ProfileStyled>
  )
}

const ProfileStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 100px;

  .info {
    text-align: right;
    margin-right: 10px;
    p {
      margin: 0;
      color: #747b91;
      b {
        color: #ffa01b;
      }
    }
    a {
      text-decoration: none;
      .description {
        &:hover {
          text-decoration: underline;
          color: #6f737e;
        }
        small {
          font-size: 10px;
          color: #747b91;
          font-weight: 500;
          text-decoration: none;
          position: relative;
          bottom: 2px;
        }
      }
    }
  }

  .picture {
    /* border: 1px solid red; */
    height: auto;
    display: flex;
    height: 100%;
    font-size: 36px;
    color: #747b91;
  }
`
