
cmd=$1
shift
files=$@
$cmd && fswatch -0 -x -r $files | {
  while read -d "" event; do
    case $event in
      *Created|*Updated|*Removed|*Renamed|*OwnerModified|*AttributeModified|*MovedFrom|*MovedTo )
        # https://github.com/emcrisostomo/fswatch/blob/master/src/fswatch.cpp
        # If it's one of these events, run cmd, else ignore it
        $cmd
        ;;
    esac
  done
}