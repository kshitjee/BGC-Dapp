export default function BGCheckForm() {
  return (
    <>
      <form action="/api/storeBGInformation" method="post">
        <section>
          <h3>Personal information</h3>
          <br></br>
          <label for="first">Prefix:</label>
          <input type="text" id="prefix" name="prefix" />
          <label for="first">Suffix:</label>
          <input type="text" id="suffix" name="suffix" />
          <label for="first">Legal First Name:</label>
          <input type="text" id="first" name="first" />
          <label for="first">Legal Middle Name:</label>
          <input type="text" id="middle" name="middle" />
          <label for="last">Legal Last Name:</label>
          <input type="text" id="last" name="last" />
          <label for="first">Email Address:</label>
          <input type="text" id="email" name="email" />
          <label for="first">Phone Number:</label>
          <input type="text" id="number" name="number" />
        </section>
        <br></br>
        <section>
          <h3>Current Primary Adress</h3>
          <label for="first">Country:</label>
          <input type="text" id="country" name="country" />
          <label for="first">State:</label>
          <input type="text" id="state" name="state" />
          <label for="first">City:</label>
          <input type="text" id="city" name="city" />
          <label for="first">Postal Code:</label>
          <input type="text" id="postal" name="postal" />
          <label for="first">Postal Code:</label>
          <input type="text" id="postal" name="postal" />
          <label for="first">Address:</label>
          <input type="text" id="address" name="address" />
        </section>
        <br></br>
        <section>
          <h3>Gender</h3>
          <label for="first">Gender:</label>
          <input type="text" id="gender" name="gender" />
        </section>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
