import subprocess

# List of commands to test the CLI tool
commands = [
    "rct crt c comp1",
    "rct crt p page1",
    "rct crt ctxt context1",
    "rct crt h hook1",
    "rct crt lyt layout1",
    "rct crt lib lib1",
    "rct crt srvc service1",
    "rct crt utl utils1",
    "rct crt feat feat1",
    "rct crt d data1",
    "rct crt c comp1 -p page1",
    "rct crt ctxt context1 -p page1",
    "rct crt h hook1 -p page1",
    "rct crt lyt layout1 -p page1",
    "rct crt lib lib1 -p page1",
    "rct crt srvc service1 -p page1",
    "rct crt utl utils1 -p page1",
    "rct crt c comp1 -f feat1",
    "rct crt ctxt context1 -f feat1",
    "rct crt h hook1 -f feat1",
    "rct crt lyt layout1 -f feat1",
    "rct crt lib lib1 -f feat1",
    "rct crt srvc service1 -f feat1",
    "rct crt utl utils1 -f feat1",
    "rct crt c comp1 -c comp1",
    "rct crt ctxt context1 -c comp1",
    "rct crt h hook1 -c comp1",
    "rct crt lyt layout1 -c comp1",
    "rct crt lib lib1 -c comp1",
    "rct crt srvc service1 -c comp1",
    "rct crt utl utils1 -c comp1",
    "rct crt c comp1 -l layout1",
    "rct crt ctxt context1 -l layout1",
    "rct crt h hook1 -l layout1",
    "rct crt lyt layout1 -l layout1",
    "rct crt lib lib1 -l layout1",
    "rct crt srvc service1 -l layout1",
    "rct crt utl utils1 -l layout1",
    "rct rename h hook1 hook2",
    "rct rename utl utils1 utils2",
    "rct rename d data1 data2",
    "rct rename lyt layout1 layout2",
    "rct rename ctxt context1 context2",
    "rct rename srvc service1 service2",
    "rct rename lib lib1 lib2"
    "rct del c comp2",
    "rct del p page1",
    "rct del ctxt context2",
    "rct del h hook2",
    "rct del lyt layout2",
    "rct del lib lib2",
    "rct del srvc service2",
    "rct del utl utils2",
    "rct del feat feat1"

]

# Iterate over the commands and run them one by one
for cmd in commands:
    result = subprocess.run(cmd, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    if result.returncode == 0:
        print(f"{cmd} executed successfully")
    else:
        print(f"{cmd} failed with error: {result.stderr.decode()}")
