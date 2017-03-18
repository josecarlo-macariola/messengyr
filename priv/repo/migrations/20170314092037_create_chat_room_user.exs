defmodule Messengyr.Repo.Migrations.CreateMessengyr.Chat.RoomUser do
  use Ecto.Migration

  def change do
     create table(:room_users) do

       # Add these rows:
       add :room_id, references(:rooms)
       add :user_id, references(:users)

       timestamps()
     end

     # And this index:
     create unique_index(:room_users, [:room_id, :user_id])

   end

end
