#!/usr/bin/ python3
import subprocess
import optparse
import re

def get_arguments():
        parser = optparse.OptionParser()
        parser.add_option("-i","--interface",dest= "interface",help="Interface to change its mac address")
        parser.add_option("-m","--mac",dest= "new_mac",help="New mac address")
        (option,arguments)=  parser.parse_args()
        if not option.interface:
                #code to handle errrors
                parser.error("[-] Please specify an interface within the command line, use --help to understand clearly!")
        elif not option.new_mac:
                #code to handle errors
                parser.error("[-] Please specify the mac address within the command line, use --help to understand clearly!")
        return option
def mac_changer(interface,new_mac):
        print("[+] Changing the mac address for " + interface + " to new_mac address")
        subprocess.call("ifconfig " + interface + " down",shell=True)
        subprocess.call("ifconfig " + interface + " hw ether " + new_mac,shell=True)
        subprocess.call("ifconfig " + interface + " up",shell=True)

def get_current_mac(interface):
    """ this function follow an algorithm."""
    #execute and read the ifconfig and user input interface
    ifconfig_result =subprocess.check_output(["ifconfig" ,interface],encoding="utf-8")
    # #read the mac address from the output that we got
    # #we use regular expression here
    mac_result = re.search(r"\w\w:\w\w:\w\w:\w\w:\w\w:\w\w", ifconfig_result)
    if mac_result:
            return mac_result.group(0)
    else:
            print("[-] could not read the mac address.")

#(option,arguments)= get_arguments()
#option contain the values like eth0 and 11:22:33:44:55
        #arguments contains the --mac and the --interface argument
        #or we just return this
option = get_arguments()
interface = option.interface
new_mac= option.new_mac


curr_mac =get_current_mac(option.interface)
print("Current Mac = ",curr_mac)
mac_changer(interface,new_mac)
curr_mac =get_current_mac(option.interface)

if curr_mac == new_mac:
        print("[+] Mac address is successfully changed to: ",curr_mac)
else:
        print("[-] Mac address did not get changed.")
