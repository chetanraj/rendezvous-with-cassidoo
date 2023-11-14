// Given a list of tasks, where each task has a duration, and a limited amount of available time to work, write a function to return the tasks that can be completed within the given time, without re-ordering the original list of tasks.

const doTasks = (tasks, timeToWork) => {
  const sortedTasks = tasks.sort((a, b) => a.duration - b.duration);

  let totalTime = 0;
  let completedTasks = [];

  for (const task of sortedTasks) {
    if (totalTime + task.duration <= timeToWork) {
      completedTasks.push(task);
      totalTime += task.duration;
    }
  }

  return completedTasks;
};

const tasks = [
  { name: "Task A", duration: 5 },
  { name: "Task B", duration: 3 },
  { name: "Task C", duration: 8 },
  { name: "Task D", duration: 2 },
];

const timeToWork = 8;

const completedTasks = doTasks(tasks, timeToWork);
