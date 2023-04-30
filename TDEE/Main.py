from flask import Flask , render_template, request
from calculations import compute
from flask_weasyprint import HTML, render_pdf
from Value_checking import validate

Main = Flask(__name__) 

@Main.route("/")
def root():
    return render_template("root.html")

@Main.route("/models")
def models():
    return render_template("models.html")

@Main.route("/shortline",methods = ['POST','GET'])
def shortline():
    errors = []
    if request.method=='GET':
        return render_template("shortline.html",errors = errors)
    else:
        error_bool =  validate(request.form)      
        if  error_bool== False:
            output= compute(request.form)
            return render_template("result.html",output=output)
        else:
            errors.append("PROVIDE VALID INPUT")
            return render_template("shortline.html",errors = errors)

        
@Main.route("/mediumline",methods = ['POST','GET'])
def mediumline():
    errors = []
    if request.method=='GET':
        return render_template("mediumline.html",errors = errors)
    else:
        error_bool =  validate(request.form)      
        if  error_bool== False:
            output= compute(request.form)
            return render_template("result.html",output=output)
        else:
            errors.append("PROVIDE VALID INPUT")
            return render_template("mediumline.html",errors = errors)

@Main.route("/longline",methods = ['POST','GET'])
def longline():
    errors = []
    if request.method=='GET':
        return render_template("longline.html",errors = errors)
    else:
        error_bool =  validate(request.form)      
        if  error_bool== False:
            output= compute(request.form)
            return render_template("result.html",output=output)
        else:
            errors.append("PROVIDE VALID INPUT")
            return render_template("longline.html",errors = errors)

@Main.route("/result",methods = ['POST'])
def result():
    output = request.form
    html = render_template("result_pdf.html",output=output)
    return render_pdf(HTML(string=html))
                
if __name__ == "__main__":
    Main.run()

