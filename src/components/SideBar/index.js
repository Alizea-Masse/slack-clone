import React from "react";
import styled from "styled-components";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create";
import SideBarOption from "./SideBarOption";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AppsIcon from "@mui/icons-material/Apps";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";



function SideBar() {
    const [channels, loading, error] = useCollection(db.collection("rooms"));

  return (
    <SideBarContainer>
      <SideBarHeader>
        <SideBarInfo>
          <h2>Slack Clone</h2>
          <h3>
            <FiberManualRecordIcon />
            Alizéa Massé
          </h3>
        </SideBarInfo>
        <CreateIcon />
      </SideBarHeader>
        <SideBarOption Icon={InsertCommentIcon} title="Fils de discussion" />
        <SideBarOption Icon={InboxIcon} title="Mentions et réactions" />
        <SideBarOption Icon={DraftsIcon} title="Élements enregistés" />
        <SideBarOption Icon={BookmarkBorderIcon} title="Tous les canaux" />
        <SideBarOption Icon={PeopleAltIcon} title="Personnes et groupes d'utilisateurs" />
        <SideBarOption Icon={AppsIcon} title="Applications" />
        <SideBarOption Icon={FileCopyIcon} title="Fichiers" />
        <SideBarOption Icon={ExpandLessIcon} title="Moins" />
        <hr />
        <SideBarOption Icon={ExpandMoreIcon} title="Canaux" />
        <hr />
        <SideBarOption Icon={AddOutlinedIcon} addChannelOption title='Créer un canal' />
        {channels?.docs.map(doc => (
            <SideBarOption  key={doc.id} id={doc.id} title={doc.data().name} />

        ))}

        

    </SideBarContainer>
  );
}

export default SideBar;

const SideBarContainer = styled.div`
  background-color: var(--slack-color);
  color: white;
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 60px;
  > hr {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid #49274b;
    }
`;

const SideBarHeader = styled.div`
  display: flex;
  border-bottom: 1px solid #49274b;
  padding: 13px;
  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    font-size: 18px;
    background-color: white;
    border-radius: 999px;
  }
`;

const SideBarInfo = styled.div`
  flex: 1;
  > h2 {
    font-size: 15px;
    font-weight: 900;
    margin-bottom: 5px;
  }
  > h3 {
    display: flex;
    font-size: 13px;
    font-weight: 400;
    align-items: center;
  }
  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;
