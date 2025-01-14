def run_alexa():
    command = take_comand()
    print(command)
    if 'play' in command:
        song = command.replace('play', '')
        talk('playing')

)