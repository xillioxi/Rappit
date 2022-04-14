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




