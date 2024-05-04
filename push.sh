#!/bin/bash
gitStatus=`git status -s | wc -l`;
if [[ "$gitStatus" == 0 ]]; 
then
    echo "Already Clean"
else
    lastCommit=`git log --format=%B -n 1 | cut -d " " -f1 | tr -d '\n'`;
    nextCommit="$((lastCommit+1))";
    # echo -e "\033[33m####\033[m"
    echo -e "Your Previous Commit was \033[43m$lastCommit commit\033[m"
    # echo "`git status -s`"
    echo -e "Your Next Commit is \033[42m$nextCommit commit\033[m"
    echo -e "===================================\n"
    echo -e "Changes are \033[46m`git status -s`\033[m\n"
    echo -e "===================================\n"
    echo "Press Enter to add changes and push"
    read
    git add .
    git commit -m "$nextCommit commit"
    git push origin main
fi