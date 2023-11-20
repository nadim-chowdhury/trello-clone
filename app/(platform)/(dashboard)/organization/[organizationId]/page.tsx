import { create } from "@/actions/createBoard";
import { db } from "@/lib/db";

export default async function OrganizationIdPage() {
  const boards = await db.board.findMany();

  return (
    <div className="flex flex-col space-y-4">
      <form action={create}>
        <input
          type="text"
          id="title"
          name="title"
          required
          placeholder="Enter a board title"
          className="border p-1"
        />
        <button type="submit">Submit</button>
      </form>

      <div className="space-y-2">
        {boards.map((board) => (
          <div key={board.id}>
            <h3>Board Title: {board.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
