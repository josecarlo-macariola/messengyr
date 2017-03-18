defmodule Messengyr.Web.RoomView do
  use Messengyr.Web, :view

  def render("index.json", %{rooms: rooms}) do
    %{
      rooms: Enum.map(rooms, fn(room) -> room_json(room) end)
    }
  end

  defp room_json(room) do
    %{
      id: room.id,
    }
  end

end
