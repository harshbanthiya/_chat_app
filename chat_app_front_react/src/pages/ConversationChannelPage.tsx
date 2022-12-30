import { ConversationChannelPageStyle } from "../utils/styles/index.tsx";
import { ConversationSidebar } from "../components/conversations/conversationsidebar.tsx";
import { useParams } from "react-router-dom";

export const ConversationChannelPage = () =>
{
    console.log(useParams());
    return (<ConversationChannelPageStyle>Channel Page</ConversationChannelPageStyle>);
};