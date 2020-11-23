import eel
eel.init('web')

# All eel related functions goes here...
# eel.printStdout() # This is the function that prints the std out on to the app page...



eel.start('index.html', block=False)

while True:
    eel.printStdout("This is a wonderfull work..!!\n")
    eel.sleep(1.0)