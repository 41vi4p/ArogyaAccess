import google.generativeai as genai

genai.configure(api_key="AIzaSyCUKC-C9LeHEwNXmu23fs7J0nTqFmMDsqA")

# Set up the model
generation_config = {
  "temperature": 0.9,
  "top_p": 1,
  "top_k": 1,
  "max_output_tokens": 2048,
}

safety_settings = [
  {
    "category": "HARM_CATEGORY_HARASSMENT",
    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
  },
  {
    "category": "HARM_CATEGORY_HATE_SPEECH",
    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
  },
  {
    "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
  },
  {
    "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
    "threshold": "BLOCK_MEDIUM_AND_ABOVE"
  },
]

model = genai.GenerativeModel(model_name="gemini-1.0-pro",
                              generation_config=generation_config,
                              safety_settings=safety_settings)

convo = model.start_chat(history=[
  {
    "role": "user",
    "parts": ["how does a heart surgery take place"]
  },
  {
    "role": "model",
    "parts": ["**Pre-Surgery**\n\n* The patient undergoes a thorough medical evaluation, including blood tests, imaging tests, and a physical exam.\n* The surgeon and patient discuss the risks and benefits of the surgery and the patient provides informed consent.\n* The patient is given instructions on how to prepare for surgery, such as fasting and stopping certain medications.\n\n**During Surgery**\n\n* The patient is placed under general anesthesia and a breathing tube is inserted.\n* The surgical team prepares the chest by shaving and cleaning the area.\n* A vertical incision is made in the center of the chest and the breastbone (sternum) is divided to expose the heart.\n* The heart is stopped using a heart-lung machine, which circulates blood and oxygen throughout the body.\n* The surgeon performs the necessary repairs or procedures on the heart, such as:\n    * Bypass surgery: Grafting healthy blood vessels to the heart to bypass blocked arteries.\n    * Valve repair or replacement: Repairing or replacing damaged or diseased heart valves.\n    * Aneurysm repair: Repairing a weakened or bulging area of the heart wall.\n* Once the repairs are complete, the heart is restarted and the heart-lung machine is removed.\n* The sternum is closed with wires or sutures and the incision is closed.\n\n**Post-Surgery**\n\n* The patient is taken to the intensive care unit (ICU) for close monitoring.\n* The patient is gradually weaned off the breathing tube and other support systems.\n* The patient may experience pain, discomfort, and fatigue for several weeks after surgery.\n* The patient will need to follow specific instructions for recovery, such as:\n    * Taking medications to prevent infection and blood clots.\n    * Restricting activity and gradually increasing it as tolerated.\n    * Attending follow-up appointments to monitor progress and ensure proper healing.\n\n**Recovery**\n\n* The recovery time from heart surgery can vary depending on the type of surgery performed and the patient's individual health.\n* Most patients can expect to be discharged from the hospital within a few days to a week after surgery.\n* Full recovery can take several months or longer, and the patient may need to make lifestyle changes, such as quitting smoking and adopting a healthy diet and exercise program."]
  },
  {
    "role": "user",
    "parts": ["steps in performing a heart surgery"]
  },
  {
    "role": "model",
    "parts": ["**Steps in Performing a Heart Surgery**\n\n**Pre-Surgery**\n\n1. Patient evaluation and informed consent\n2. Preoperative preparation (fasting, medication adjustments)\n\n**During Surgery**\n\n1. General anesthesia and intubation\n2. Chest preparation and incision\n3. Division of the sternum to expose the heart\n4. Stopping the heart using a heart-lung machine\n5. Performing the necessary repairs or procedures on the heart (e.g., bypass surgery, valve repair/replacement, aneurysm repair)\n6. Restarting the heart and removing the heart-lung machine\n7. Closing the sternum and incision\n\n**Post-Surgery**\n\n1. Monitoring in the intensive care unit (ICU)\n2. Weaning from the breathing tube and other support systems\n3. Pain management and discomfort control\n4. Gradual increase in activity as tolerated\n5. Follow-up appointments to monitor progress and ensure proper healing\n\n**Specific steps may vary depending on the type of heart surgery being performed.**\n\n**Additional Considerations**\n\n* **Bypass surgery:**\n    * Grafting healthy blood vessels to the heart to bypass blocked arteries\n    * Typically involves using arteries from the chest or leg\n* **Valve repair/replacement:**\n    * Repairing or replacing damaged or diseased heart valves\n    * May involve using donor valves or artificial valves\n* **Aneurysm repair:**\n    * Repairing a weakened or bulging area of the heart wall\n    * May involve using a patch or graft to reinforce the heart wall"]
  },
])

convo.send_message("I have had an accident and I am bleeding. What should I do?")
print(convo.last.text)
gemini = convo.last.text