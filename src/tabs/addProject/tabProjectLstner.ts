import { clearSectionContent, clearSectionTitle } from "../../clearSection";
import {
  addTaskButton,
  renderAddTaskForm,
} from "../../renders/addTaskButtonAndForm";
import taskRender from "../../renders/singleTaskRender";
import tabTitle from "../../renders/tabTitle";
import tasksContainer from "../../renders/tasksContainer";
import { TaskList } from "../../taskList";
import { createTask } from "../../taskObj";

function tabProjectListner(button: Element, project: TaskList) {
  button.addEventListener("click", () => {
    clearSectionTitle();
    defaultView(project);
  });
}

function defaultView(project: TaskList) {
  clearSectionContent();
  const container = document.querySelector("#section-content");

  if (project.title && container) {
    tabTitle(project.title);
    console.log("ok");

    const addButton = addTaskButton();
    addTaskButtonListner(addButton, project);

    const taskContainer = tasksContainer();
    renderTasks(taskContainer, project);

    container.appendChild(addButton);
    container.appendChild(taskContainer);
  }
}

function renderTasks(container: Element, project: TaskList): void {
  const list = project.getList();
  list.forEach((task) => {
    taskRender(task, container, project);
  });
}

function addTaskButtonListner(button: Element, project: TaskList) {
  button.addEventListener("click", () => {
    renderAddTaskForm();
    const add = document.querySelector("#add");
    const cencle = document.querySelector("#cencle");
    if (add && cencle) {
      cencleButton(cencle, project);
      addButton(add, project);
    }
  });
}

function addButton(button: Element, project: TaskList): void {
  button.addEventListener("click", () => {
    const input = document.querySelector("#add-todo") as HTMLInputElement;
    const name = input.value;
    if (name) {
      project.setTask(
        createTask(project.getSize(), name, "low", false, undefined, undefined)
      );
      defaultView(project);
    }
  });
}

function cencleButton(button: Element, project: TaskList): void {
  button.addEventListener("click", () => {
    defaultView(project);
  });
}

export default tabProjectListner;
