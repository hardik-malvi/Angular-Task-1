import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  /**
   * Fetching task from Localstorage
   * @returns Array of json
   */
  async fetchAll(){
    const result = JSON.parse(localStorage.getItem('tasks') || '[]');
    return result;
  }

  /**
   * Adding Task in Array of json and saving it into localstorage
   * @param task 
   */
  async addTask(task: any){
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    let find = tasks.filter((x: any) => x.value == task);
    if(find.length == 0){
      tasks.push(
        {value : task, isComp : 0}
      );
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }

  /**
   * Change statsu of perticular task and saving it in localstorage
   * @param task 
   * @param status 
   */
  async changeStatus(task: any, status: number){
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    tasks.map((x: any) => {x.value === task?x.isComp = status:false});
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  /**
   * Delete perticular task and then saving it in localstorage
   * @param task 
   */
  async deleteTask(task: any){
    var tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    tasks = tasks.filter((x: any) => x.value !== task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  /**
   * Update task and saving it in localstorage
   * @param task 
   * @param oldValue 
   */
  async updateTask(task: any, oldValue: any){
    var tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    tasks.map((x: any) => {x.value === oldValue?x.value = task:false});
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}
