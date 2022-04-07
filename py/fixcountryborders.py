import glob
import os

path = r"csv\countryborders.csv"
f = open(r"csv\newcountryborders.csv", "w")


for line in open(path):
    arr = line.split(",")
    compiledlist = []
    arr[1] = arr[1].replace('"', '')
    arr[0] = arr[0].replace('"', '')

    
    compiledlist.append(arr[0] + "," + arr[1])

    finallist = []
    for i in compiledlist: 
        if i not in finallist: 
            finallist.append(i) 

    for countries in finallist:
        f.write(countries)
        f.write("\n")

