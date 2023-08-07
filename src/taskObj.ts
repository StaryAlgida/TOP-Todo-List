interface Tasks{
    taskName: string;
    dateStart: string;
    dateEnd: string;
    piority: string;
    done: boolean;

    addTaskToList(listOfTask: Tasks[]): void;
    setTaskToDone(): void;
    deleteTask(listOfTask: Tasks[]): void;    
}


