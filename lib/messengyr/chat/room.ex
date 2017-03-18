defmodule Messengyr.Chat.Room do
  use Ecto.Schema

  alias Messengyr.Chat.Message

  schema "rooms" do
    has_many :messages, Message
    timestamps()
  end
end
