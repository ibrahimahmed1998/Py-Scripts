/* ==============================NOTES=========================== */
mouse|screen|Network|etc : is File Not Hardware in Linux.
/* =========================Compare=========================== */
-lt :: less than 
-gt :: greater than 
/* ===================Condtional======================== */
for loop syntax	: for ... done 
if syntax		: if ... fi  
functions syntax: (name)_ {...} 
call_function   : FunctionName 
/* ===================Commands :: explain======================== */
curl -v gmail.com
cp sourcefile destinationfile :: 
command --option :: show all SubCommand of Command 
cut -d "dillmeter"
ping -c 1 DomainName
mkdir DirName :: Make Dirctory "Folder"
mv :: move the file, basically cut and paste it somewhere else
rm ObjName :: to remove file
A="string" :: A is variable valued by string 
echo $A :: print Value of Variabule A 
seq N : NN :: to print Numbers from N to NN 
bash [fileName.Extinstion] :: to run bash script files 
chmod x+ :: change Permtion mode 
which [Comman/Tools] :: to Display [Command/Tools] PATH
locate [Command/Tools] :: to Display [Command/Tools] PATH
find [Command/Tools] :: to Display [Command/Tools] PATH
file [FileName] :: output file extinstion
clear|ctrl+l 
date
history
dir
whoami #:: to Display UserName
sudo [Command] :: to control users 
man [Command] :: Display Command Manual
whatis [Command] ::  Display Command  Use
apropos [ Command ] :: To Write Remaining part of Comannd
ifconfig : Network ... 
less :: to list pages 
iwconfig :: wireless
nano [FileName.txt.txt] :: to Open txt files
cat [FileName.txt] : to Display txt files  apper of [ConCatinate]
cd| cd ~ :: chage"switch" to user 
cal :: calendar
pwd :: print Working Dirctory 
ls  :: List   
su :: switch user 
[ProgramName] -h # help
sleep [Number Note 9000 mean 9 Sec]
/* ======================search tools============================== */
grep[FileName.txt] [FilePath] 
sed [FileName.txt] [FilePath] 	    
split [FileName.txt] [FilePath]   
/* ======================compare tools============================== */
comm
diff
/* =========================Wireshark=========================== */

/* ======================file&Monitoring======================== */
watch
tail
/* ======================Downloading-Commands=================== */
wget
curl
axel
git clone
/* ===========================SubCommand======================== */
history -c :: history clear 
ls -a :: show list [ -a :: all ]  | ls --all 
ls -l :: show all deatils 
/* ==============================DNS============================ */
host -t [a|ptr] [SiteName|ip] 
fierce -dns [SiteName] # zone transfer mean use 2 a and ptr 
nc -nvv [ip] 25 	#where 25 is port
/* =====================metasploit-============================= */
msfconsole #metasploite
use auxiliary/scanner/smtp/smtp_enum
set RHOSTS [ip]
run
/* ==============Netcat/socat/powershell/powercat============== */
send/recive command between Network

nc -l -p [PortNum] #netcat -listen -port [PortNum] 
nc -v -l -p [PortNum] ## -v = verpous to list nice output
/* ========================tcpDump============================= */


/* ===================other-install =========================== */
sudo apt install metasploit-framework
sudo apt-get install fierce
sudo apt-get install snmp
sudo apt-get install unicornscan
================snmp=========================================
nmap -sU -v -P0 --script snmp-brute 10.0.0.3 -p 161        

unicornscan -ImT 192.168.1.0/24:445                                                                                                                              
