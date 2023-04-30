def isfloat(num):
    try:
        float(num)
        return True
    except ValueError:
        return False

def isint(num):
    try:
        int(num)
        return True
    except ValueError:
        return False

def validate(output):
    error = False
    if output["sym"]=="Symmentrical":
        if isfloat(output["space"]) == False:
            error = True
    else:
        if isfloat(output["space_12"]) == False:
            error = True
        if isfloat(output["space_23"]) == False:
            error = True
        if isfloat(output["space_31"]) == False:
            error = True
    if isint(output["n_strand"]) == False:
        error = True
    else:
        allow=[1,7,19,37,61]
        if not int(output["n_strand"]) in allow:
            error = True
    if isfloat(output["sub_space"]) == False:
        error = True
    if isint(output["n_sub_con"]) == False:
        error = True
    if isfloat(output["strand_dm"]) == False:
        error = True
    if isfloat(output["len"]) == False:
        error = True
    if isfloat(output["R"]) == False:
        error = True
    if isfloat(output["f"]) == False:
        error = True
    if isfloat(output["V"]) == False:
        error = True
    if isfloat(output["L"]) == False:
        error = True
    if isfloat(output["pf"]) == False:
        error = True
    else:
        if float(output["pf"]) > 1 or float(output["pf"]) < -1:
            error = True
    return error

if __name__=="__main__":
    print('VALIDATE')