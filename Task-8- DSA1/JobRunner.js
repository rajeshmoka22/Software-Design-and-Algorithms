import PriorityQueue from "./PriorityQueue.js";

export default class JobRunner {
  count = 0;

  init() {
    this.queue = new PriorityQueue();
    this.addJob();
    setTimeout(() => this.executeJob(), 2000);
  }

  addJob() {
      this.queue.enqueue(this.count, JobRunner.getRandomPriority());
      this.count += 1;
      // adjust this limit to support number of jobs.
      if(this.count<100) this.addJob();
      //console.log(this.queue);
  }

  executeJob() {
      if(!this.queue.isEmpty()) {
        console.log(`peek is: ${this.queue.peek().priority}, executed job is: ${this.queue.dequeue().priority}`);
        this.executeJob();
      }
  }

  static getRandomPriority() {
    return Math.floor(Math.random() * 100);
  }
}
