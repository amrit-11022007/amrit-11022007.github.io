const content = document.getElementById("content");
const header = document.getElementById("header");

let currentSubject = null;

function renderSubjects() {
  header.textContent = "📘 Class Notes";
  content.className = "container";
  content.innerHTML = "";

  Object.keys(notesData).forEach(subject => {
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = subject;
    card.onclick = () => renderSubjectLayout(subject);
    content.appendChild(card);
  });
}

function renderSubjectLayout(subject) {
  currentSubject = subject;
  header.textContent = subject;
  content.className = "layout";
  content.innerHTML = `
    <div class="sidebar">
      <h3>Topics</h3>
      <ul id="topicList"></ul>
      <button class="back-btn" onclick="renderSubjects()">⬅ Back</button>
    </div>
    <div class="content-area" id="noteArea">
      <div class="note-page"><p>Select a topic to view notes.</p></div>
    </div>
  `;

  const topicList = document.getElementById("topicList");
  const noteArea = document.getElementById("noteArea");

  Object.keys(notesData[subject]).forEach(topic => {
    const li = document.createElement("li");
    li.textContent = topic;
    li.onclick = () => {
      document.querySelectorAll(".sidebar li").forEach(el => el.classList.remove("active"));
      li.classList.add("active");
      renderNotes(subject, topic, noteArea);
    };
    topicList.appendChild(li);
  });
}

function renderNotes(subject, topic, noteArea) {
  const notes = notesData[subject][topic];
  noteArea.innerHTML = `
    <div class="note-page">
      <h2>${topic}</h2>
      ${notes.map(note => `<p>${note}</p>`).join("")}
    </div>
  `;
}

renderSubjects();
