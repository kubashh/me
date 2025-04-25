if [ $1 -gt "-1" ]
  then $1 = 3
fi

# Oldv
oldv="0.0.0.0"

# Read old version
if [ -f ".version" ]; then
  oldv=$(head -n 1 .version)
fi

# Init versions variables
v0=0
v1=0
v2=0
v3=0

# Set values
i=0
for element in $(echo $oldv | tr "." "\n")
do
  if [ $i = 0 ]; then
    v0=$element
  fi

  if [ $i = 1 ]; then
    v1=$element
  fi

  if [ $i = 2 ]; then
    v2=$element
  fi

  if [ $i = 3 ]; then
    v3=$element
  fi

  i=$((i+1))
done


# Increase version
if [ $1 = 0 ]; then
  v0=$((v0+1))
  v1=0
  v2=0
  v3=0
fi

if [ $1 = 1 ]; then
  v1=$((v1+1))
  v2=0
  v3=0
fi

if [ $1 = 2 ]; then
  v2=$((v2+1))
  v3=0
fi

if ! [ $1 = 0 ] && ! [ $1 = 1 ] && ! [ $1 = 2 ]; then
  v3=$((v3+1))
fi

# Set new version
newv=$v0.$v1.$v2.$v3

# Update version file
echo $newv > .version

# Git
git add .
git commit -m $newv
git push

# clear