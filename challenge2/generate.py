import sys
from pathlib import Path

pt = Path(__file__).parent / "flag.html"

with pt.open("r") as fp:
    r = fp.read().replace("<!-- marker -->", sys.argv[1])
    print(r)

with pt.open("w") as fp:
    fp.write(r)
