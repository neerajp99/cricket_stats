##########################################################
# Making all data values as string to make all values even
##########################################################
import json
new_data = []
ctr = 0
for i in x:
    new_data.append(i)
    for j in new_data[ctr]:
        if type(new_data[ctr][j]) == int:
            new_data[ctr][j] = str(new_data[ctr][j])
    ctr += 1
		if type(x[i][j] == int):
			x[i][j] = str(x[i][j])
		x[i][j] = x[i][j]
new_data = json.dumps(new_data, indent = 4)
with open('new_data.json', 'w') as f:
			f.write(new_data)
# Input: data = [
#   {
#     "batting_score": 0,
#     "wickets": "-",
#     "runs_conceded": "-",
#     "catches": 0,
#     "stumps": 0,
#     "opposition": "v Pakistan",
#     "ground": "Gujranwala",
#     "date": "18 Dec 1989",
#     "match_result": "lost",
#     "result_margin": "7 runs",
#     "toss": "won",
#     "batting_innings": "2nd",
#   }]
#
# Output: data = [{
#     "batting_score": "0",
#     "wickets": "-",
#     "runs_conceded": "-",
#     "catches": "0",
#     "stumps": "0",
#     "opposition": "v Pakistan",
#     "ground": "Gujranwala",
#     "date": "18 Dec 1989",
#     "match_result": "lost",
#     "result_margin": "7 runs",
#     "toss": "won",
#     "batting_innings": "2nd"
# }]
#############################
# Finding the unique counties
#############################
heck = []
ctr = 0
for i in data:
	# print(i['opposition'])
	if i['opposition'] not in heck:
		heck.append(i['opposition'])
print(heck)

#########################
# Calculate highest score
#########################
scores = []
for match in data:
    temp = match['batting_score']
    if '*' in temp:
        temp = temp[0:len(temp)-1]
    if temp == 'TDNB' or temp == 'DNB':
        temp = 0
    temp = int(temp)
    scores.append(temp)
print(scores)
print(max(scores))
# Highest Score is 200


#########################
# Total matches won
#########################
win_ctr = 0
for match in data:
	temp = match['match_result']
	if temp == "won":
		win_ctr += 1
print(win_ctr)

# Matches won: 234
# Mathes lost: 200
# No Result: 24
# Other: 5


###############################
# Max win against which country
###############################

win_match = {}
for match in data:
	if match['match_result'] == "won":
		if match['opposition'] not in win_match:
			win_match[match['opposition']] = 1
		else:
			win_match[match['opposition']] += 1
max_value = max(win_match, key = win_match.get)
print(max_value, win_match[max_value])
# Maximum win against Sri Lanka, 43 Matches


#########################
# Total tosses won
#########################
toss_ctr = 0
for match in x:
	temp = match['toss']
	if temp == "won":
		toss_ctr += 1
print(toss_ctr)

# Tosses won: 239

#########################
# Career Average
#########################
total_score = 0
for match in data:
    temp = match['batting_score']
    if '*' in temp:
        temp = temp[0:len(temp)-1]
    if temp == 'TDNB' or temp == 'DNB':
        temp = 0
    temp = int(temp)
    total_score += temp
print(total_score / 463)
# 39.79
