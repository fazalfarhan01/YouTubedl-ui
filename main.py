import eel
eel.init('web')

# All eel related functions goes here...
# eel.printStdout() # This is the function that prints the std out on to the app page...

@eel.expose
def processData(data):
    print(data)

eel.start('index.html')