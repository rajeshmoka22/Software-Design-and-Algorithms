import PriorityQueue from "./PriorityQueue.js";

export default class JobRunner {
  count = 0;

  init() {
    this.queue = new PriorityQueue();
    this.addJob();
    this.executeJob();
  }

  addJob() {
    setTimeout(() => {
      this.queue.enqueue(this.count, JobRunner.getRandomPriority());
      this.count += 1;
      // adjust this limit to support number of jobs.
      if(this.count<10) this.addJob();
    }, 1000);
  }

  executeJob() {
    setTimeout(() => {
      if(!this.queue.isEmpty()) {
        console.log(`peek is: ${this.queue.peek().priority}, executed job is: ${this.queue.dequeue().priority}`);
        this.executeJob();
      }
    }, 2000);
  }

  static getRandomPriority() {
    return Math.floor(Math.random() * 100);
  }
}
