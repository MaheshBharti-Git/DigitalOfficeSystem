import React from 'react'

export default function Row() {
  return (
    <>
   
    <div className="form-row ">
      <div className="form-input form-input--text">
        <label htmlFor="">From</label>
        <input type="text" name="Travel_from" />
      </div>
      <div className="form-input form-input--text">
        <label htmlFor="">To</label>
        <input type="text" name="Travel_to" />
      </div>
      <div className="form-input">
        <label htmlFor="">Preferred Time-Slot.</label>
        <select
          className="form-select"
          aria-label="Default select example"
          name="Preferred_Time_Slot"
          style={{width:'200px'}}
        >
          <option selected="">NULL</option>
          <option value={'00.00 Hrs to 03.00 Hrs'}>
            00.00 Hrs to 03.00 Hrs
          </option>
          <option value={'03.00 Hrs to 06.00 Hrs'}>
            03.00 Hrs to 06.00 Hrs
          </option>
          <option value={'06.00 Hrs to 09.00 Hrs'}>
            06.00 Hrs to 09.00 Hrs
          </option>
          <option value={'09.00 Hrs to 12.00 Hrs'}>
            09.00 Hrs to 12.00 Hrs
          </option>
          <option value={'12.00 Hrs to 15.00 Hrs'}>
            12.00 Hrs to 15.00 Hrs
          </option>
          <option value={'15.00 Hrs to 18.00 Hrs'}>
            15.00 Hrs to 18.00 Hrs
          </option>
          <option value={'18.00 Hrs to 21.00 Hrs'}>
            18.00 Hrs to 21.00 Hrs
          </option>
          <option value={'21.00 Hrs to 24.00 Hrs'}>
            21.00 Hrs to 24.00 Hrs
          </option>
        </select>
      </div>
      <div className="form-input">
        <label htmlFor="">Departure date</label>
        <input required type="date" name="Departure_Date" />
      </div>
      <div className="form-input form-input--text">
        <label htmlFor="">Class</label>
        <input type="text" name="Class" />
      </div>
    </div>
    </>
  );
}