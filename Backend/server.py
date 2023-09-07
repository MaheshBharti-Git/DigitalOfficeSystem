from database import engine
from sqlalchemy import text
from flask import Flask, request,redirect,flash

app = Flask(__name__)

app.secret_key = b'_5#y2L"F4Q8z\n\xec]/'


@app.route("/", methods=["Post"])
def addDetail():
    with engine.connect() as conn:
        query = text(
            "insert into TPCRform(EmployeID,fullname,Designation,funDesignation,ECno,Gender,dob,LevelAsPer7thCPC_Pay,Group_Division,General_Project,LineItemCode,objectCode,PurposeOfJourneyInDetails,TA,FreqFlyingReturnNo,PNR_TicketNo,ResidentialAddress,Telephone,Mobile,NRSC,Email,other,Travel_from,Travel_to,Preferred_Time_Slot,Departure_Date,Class) values (:EmployeID,:fullname,:Designation,:funDesignation,:ECno,:Gender,:dob,:LevelAsPer7thCPC_Pay,:Group_Division,:General_Project,:LineItemCode,:objectCode,:PurposeOfJourneyInDetails,:TA,:FreqFlyingReturnNo,:PNR_TicketNo,:ResidentialAddress,:Telephone,:Mobile,:NRSC,:Email,:other,:Travel_from,:Travel_to,:Preferred_Time_Slot,:Departure_Date,:Class)"
        )

        conn.execute(
            query,
            {
                "EmployeID": request.form.get("EmployeID"),
                "fullname": request.form.get("fullname"),
                "Designation": request.form.get("Designation"),
                "funDesignation": request.form.get("funDesignation"),
                "ECno": request.form.get("ECno"),
                "Gender": request.form.get("Gender"),
                "dob": request.form.get("dob"),
                "LevelAsPer7thCPC_Pay": request.form.get("LevelAsPer7thCPC_Pay"),
                "Group_Division": request.form.get("Group_Division"),
                "General_Project": request.form.get("General_Project"),
                "LineItemCode": request.form.get("LineItemCode"),
                "objectCode": request.form.get("objectCode"),
                "PurposeOfJourneyInDetails": request.form.get("PurposeOfJourneyInDetails"),
                "TA": request.form.get("TA"),
                "FreqFlyingReturnNo": request.form.get("FreqFlyingReturnNo"),
                "PNR_TicketNo": request.form.get("PNR_TicketNo"),
                "ResidentialAddress": request.form.get("ResidentialAddress"),
                "Telephone": request.form.get("Telephone"),
                "Mobile": request.form.get("Mobile"),
                "NRSC": request.form.get("NRSC"),
                "Email": request.form.get("Email"),
                "other": request.form.get("other"),
                "Travel_from": request.form.get("Travel_from"),
                "Travel_to": request.form.get("Travel_to"),
                "Preferred_Time_Slot": request.form.get("Preferred_Time_Slot"),
                "Departure_Date": request.form.get("Departure_Date"),
                "Class": request.form.get("Class"),
            },
        )
        conn.commit()
        return redirect(request.referrer)


name = []

@app.route("/login" , methods=["POST"])
def login():
    userid=request.form.get("empid")
    password=request.form.get('emppswd')
    global name
    name = getdb(userid,password)
    if( len(name)!=0 and name[0]["password"]==password):
          return redirect(request.referrer+'form')
    else :
          flash("check employe id or password again!!")
          return redirect(request.referrer)
    

def getdb(id,pswd):
	with engine.connect() as conn:
		result = conn.execute(text("select * from employedata where employeid =:id and passwor = :pswd"),{"id":id,"pswd":pswd})
		result_all= result.all()
		list = []
		for row in result_all:
			item_dict = {}
			item_dict["employeid"]=row[1]
			item_dict["password"]=row[2]
			item_dict["name"]=row[3]
			item_dict["gender"]=row[4]
			item_dict["telephone"]=row[5]
			item_dict["mobile"]=row[6]
			item_dict["email"]=row[7]
			item_dict["Address"]=row[8]
			list.append(item_dict)

		return list    

if __name__ == "__main__":
    app.run(debug=True)
