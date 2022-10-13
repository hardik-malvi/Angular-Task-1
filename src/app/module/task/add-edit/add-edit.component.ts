import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {

  tasks: any;
  compTask: any;
  pendTask: any;
  editTask : any = "";
  constructor(private taskService: TaskService, private authService: AuthService) {
    this.fetchTaskList()
  }

  ngOnInit(): void {
  }

  /**
   * Fetching Task List from services
   * Params: none
   */
  async fetchTaskList() {
    const tasks = await this.taskService.fetchAll();
    console.log(tasks);
    this.compTask = tasks.filter((x: any) => x.isComp === 1);
    this.pendTask = tasks.filter((x: any) => x.isComp === 0);
  }

  /**
   * Save/Edit the task
   * Params: f Type: NgForm
   */
  onSubmit(f: NgForm) {
    let task = (f.value.task).trim()
    if(this.editTask){
      this.taskService.updateTask(task, this.editTask);
      this.editTask = "";
    } else {
      this.taskService.addTask(task);
    }
    f.resetForm();
    this.fetchTaskList();
  }

  /**
   * Cahange the task status
   * Params: task Type: String
   * Params: status Type: Number
   */
  changeTaskStatus(task: any, status: number) {
    this.taskService.changeStatus(task, status);
    this.fetchTaskList();
  }

  /**
   * Delete the task
   * Params: task Type: String
   */
  onClickDelete(task: any){
    this.taskService.deleteTask(task);
    this.fetchTaskList();
  }

  logout(){
    this.authService.logout();
  }

}
