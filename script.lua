local HttpService = game:GetService("HttpService")

local URL_ASTROS = "{Receiver IP}"

-- Make the request to our endpoint URL
--local response = HttpService:GetAsync(URL_ASTROS)

-- Parse the JSON response
--local data = HttpService:JSONDecode(response)

-- Information in the data table is dependent on the response JSON
--if data.message == "success" then
--	print("There are currently " .. data.number .. " astronauts in space:")
--	for i, person in pairs(data.people) do
--		print(i .. ": " .. person.name .. " is on " .. person.craft)
--	end
--end


local Players = game:GetService("Players")
local Teams = game:GetService("Teams")

-- Command to choose a team (note the trailing space)
local joinCommand = "/jointeam "

local function findTeamByName(name)
	-- First, check for the exact name of a team
	if Teams:FindFirstChild(name) then return Teams[name] end
	-- Let's check for case-insensitive partial matches, like "red" for "Red Robins"
	for _, team in pairs(Teams:GetChildren()) do
		if team.Name:sub(1, name:len()):lower() == name:lower() then
			return team
		end
	end
	-- If we get to this point, no team matched the one we were looking for :(
end

local function onPlayerChatted(player, message, recipient)
	-- Note: string.sub(message, ...) is the same as message:sub(...)
	if message:sub(1, joinCommand:len()):lower() == joinCommand:lower() then
		-- Matched "/JOINTEAM xyz" to our join command prefix "/jointeam "
		local teamName = message:sub(joinCommand:len() + 1) -- Cut out the "xyz" from "/jointeam xyz"
		local team = findTeamByName(teamName)
		if team then
			-- Set the team!
			player.Team = team
			player.Neutral = false
		else
			-- Tell the player that team could not be found :(
			player.Team = nil
			player.Neutral = true
		end
	end
end

local function onPlayerAdded(player)
	player.Chatted:Connect(function (...)
		onPlayerChatted(player, ...)
	end)
end

-- Listen for players being added
for _, player in pairs(Players:GetPlayers()) do
	onPlayerAdded(player)
end
Players.PlayerAdded:Connect(onPlayerAdded)






-- The pastebin API uses a URL encoded string for post data
-- Other APIs might use JSON, XML or some other format

-- Make the request
-- The response will be the URL to the new paste (or an error string if something was wrong)




game.Players.PlayerAdded:Connect(function(player)
	player.Chatted:Connect(
		function(msg)
			-- do stuff with msg and player
			print(player.Name,":",msg)	
			local data = "{\""..player.Name.."\":\""..msg.."\"}"
			--local data = {
			--	username = player.Name,
			--    message  = msg
			print(data)
			--}
			--local sentdata =HttpService:JSONEncode(data)
 
	   	local response = HttpService:PostAsync("{Receiver IP:Port}",data, Enum.HttpContentType.ApplicationJson, false)
		end
	)
	
end)




-- Parse the JSON response


local part = Instance.new("Part")
part.Anchored = true
part.Parent = workspace
local ChatService = game:GetService("Chat")

local function Chat(name, msg)
	local speaker = ChatService:GetSpeaker(name)
	if not speaker then
		return
	end
	speaker:SayMessage(msg, "All", {})
end


local Chat = game:GetService('Chat')
local Players = game:GetService('Players')
local ServerScriptService = game:GetService('ServerScriptService')

local ChatServiceRunner = ServerScriptService:WaitForChild('ChatServiceRunner')
local ChatService = require(ChatServiceRunner.ChatService)
print(1)
Chat.Chatted:Connect(function(adornee, message)
	print(2)
	-- Assuming adornee is a character head
	local player = Players:GetPlayerFromCharacter(adornee.Parent)
	if player then
		local speaker = ChatService:GetSpeaker(player.Name)
		if speaker then
			speaker:SayMessage(message, 'All', {})
		end
	end
end)
print(3)
workspace:WaitForChild("rickykongcoder")
print(4)

local HttpService = game:GetService("HttpService")


-- Make the request to our endpoint URL

-- Parse the JSON response
local function getPlayerFromName(name)
	for _, player in pairs(game:GetService("Players"):GetPlayers()) do
		if player.Name == name then
			return player
		end
	end
end
while true do
	--local response = HttpService:GetAsync("{Receiver IP}")
	-- Parse the JSON response
	local response = HttpService:GetAsync('{Receiver url}')
	local data = HttpService:JSONDecode(response)
	Chat:Chat(getPlayerFromName(data.usernmae).Character.Head ,data.message)
    wait(7)
end
--while true do
--	--game.Players:Chat("Hello world") 
--	print("writing message")
--	Chat("rickykongcoder","hello ");

--	wait(1)
--end



