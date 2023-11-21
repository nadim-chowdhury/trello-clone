import { deleteBoard } from "@/actions/deleteBoard";
import BoardDeletButton from "./board-delete-button";

interface BoardProps {
  title: string;
  id: string;
}

export default function Board({ title, id }: BoardProps) {
  const deleteBoardWithId = deleteBoard.bind(null, id);

  return (
    <form action={deleteBoardWithId} className="flex items-center gap-x-2">
      <h3>Board Title: {title}</h3>
      <BoardDeletButton />
    </form>
  );
}
