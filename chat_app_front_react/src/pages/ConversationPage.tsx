import { Page } from "../utils/styles/index.tsx";
import { ConversationSidebar } from "../components/conversations/conversationsidebar.tsx";
import { Outlet, useParams } from "react-router-dom";
import { ConversationPanel } from "../components/conversations/conversationPanel.tsx";
import mockConversations from '../mocks_/conversations.ts'

export const ConversationPage = () =>
{
    const {id} = useParams();
    return (<Page>
        <ConversationSidebar conversations={mockConversations}/>
        {!id && <ConversationPanel/>}
        <Outlet/>
    </Page>);
};