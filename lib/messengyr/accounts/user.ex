defmodule Messengyr.Accounts.User do
  use Ecto.Schema

  schema "users" do
    field :username, :string, unique: true # Added here...
    field :email, :string, unique: true    # ...and here.
    field :encrypted_password, :string
    field :password, :string, virtual: true

    timestamps()
  end
end
