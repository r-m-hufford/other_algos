# Create a function that returns the most common
# letter in a sentence and accounts for spaces and
# letter case.

def common_int_ques(sentence):
    sent = sentence.replace(' ', '')
    dic = {letter.lower(): 0 for letter in sent}

    for letter in sent:
        if letter in dic:
            dic[letter] = dic.get(letter) + 1

    most_common_letter = max(dic.items(), key=lambda kv: kv[1])

    print('The most common letter is', most_common_letter[0])


common_int_ques(
    'Sad senient sandwiches sulk sullenly, suspicious they will be snacks.')
