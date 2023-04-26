"use strict";

var notesList = document.querySelector('#notes'); // ACCEDO AL AL DIV QUE VA A CONTENER TODAS LAS NUEVAS NOTAS

var glovalNoteID = '';
var noteUI = function noteUI(note) {
  // ESTA FUNCION TOMA UN PARAMETRO COMO VALOR Y PROCESA EL MISMO
  console.log(note);
  var div = document.createElement('div');

  //AGREGO AL DIV LIST UN H1 CON LA PROPIEDAD TITLE DEL NOTE
  div.innerHTML = "\n    <div class=\"card card-body rounded-0 mb-2 mb-2 animate__animated animate__fadeInUp\">\n        <div class=\"d-flex justify-content-between\">\n            <h1 class=\"h3 card-title\">".concat(note.title, "</h1>\n            <div>\n                <button class=\"btn btn-danger delete\" data-id=\"").concat(note.id, "\">delete</button>\n                <button class=\"btn btn-secondary update\" data-id=\"").concat(note.id, "\">update</button>\n            </div>\n        </div>\n            <p>").concat(note.description, "</p>\n    </div>\n    ");
  var btnDelete = div.querySelector('.delete');
  var btnUpdate = div.querySelector('.update');
  btnDelete.addEventListener('click', function () {
    deleteNote(btnDelete.dataset.id);
  });
  btnUpdate.addEventListener('click', function () {
    getNote(btnUpdate.dataset.id);
  });
  return div;
};
var renderNotes = function renderNotes(notes) {
  notesList.innerHTML = '';
  notes.forEach(function (note) {
    notesList.append(noteUI(note));
  });
};
var appenNote = function appenNote(note) {
  notesList.append(noteUI(note));
};