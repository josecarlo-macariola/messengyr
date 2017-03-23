defmodule Messengyr.Web.RoomChannel do
  use Messengyr.Web, :channel

  alias Messengyr.Chat
  alias Messengyr.Chat.Room

  def join("room:" <> room_id, _payload, socket) do
    me = socket.assigns.current_user

    case Chat.get_room(room_id) do
      # Make sure that we get a room struct (and not nil)
      %Room{} = room ->
        if Chat.room_has_user?(room, me) do
          {:ok, socket}
        else
          {:error, %{reason: "You're not a member of this room!"}}
        end
      _ -> {:error, %{reason: "This room doesn't exist!"}}
    end
  end

  # Channels can be used in a request/response fashion
  # by sending replies to requests from the client
  def handle_in("ping", payload, socket) do
    {:reply, {:ok, payload}, socket}
  end

  # It is also common to receive messages from the client and
  # broadcast to everyone in the current topic (room:lobby).
  def handle_in("shout", payload, socket) do
    broadcast socket, "shout", payload
    {:noreply, socket}
  end

  # Add authorization logic here as required.
  defp authorized?(_payload) do
    true
  end
end
