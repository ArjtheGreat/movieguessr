// assuming csvfile is a long string which is a read version of the text file  i.e.

// gb,great bri'ain
// us,UNited States
// zh,Algeria

fetch('csv/countrycodes.csv.txt')
  .then(csvfile => csvfile.text())
  
var dict = {}
csvfile.split("\n").forEach(function(line) {
    spln = line.split(",");
    dict[line[0]] = line[1];
});