#!/bin/sh

# Oldv
oldv="0.0.0.0"

# Read old version
if [ -f ".version" ]; then
  oldv=$(head -n 1 .version)
fi

# Set vars
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
case $1 in
  0)
    v0=$((v0+1))
    v1=0
    v2=0
    v3=0
    ;;

  1)
    v1=$((v1+1))
    v2=0
    v3=0
    ;;

  2)
    v2=$((v2+1))
    v3=0
    ;;

  *)
    v3=$((v3+1))
    ;;
esac

# Set new version
newv=$v0.$v1.$v2.$v3

# Update version file
echo $newv > .version

# Debug
echo "$oldv (old), $newv (new)"

# Git
git add .
git commit -m $newv
git push

clear