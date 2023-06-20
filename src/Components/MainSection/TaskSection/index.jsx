import { icons, images } from "../../../helpers/assets";
import styles from "./style.module.css";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { taskData } from "../../../helpers/dummy";
import { useEffect, useState } from "react";

const TaskSection = ({ projectData }) => {
  const [todos, setTodos] = useState([]);
  const [inProgress, setInProgress] = useState([]);
  const [completed, setCompleted] = useState([]);

  const getSectionData = (section) => {
    return projectData[section].map((data) =>
      taskData.find((task) => task.id === data)
    );
  };

  useEffect(() => {
    setTodos(getSectionData("todos"));
    setCompleted(getSectionData("completed"));
    setInProgress(getSectionData("inProgress"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projectData]);

  const onDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    let add;
    let tempTodo = todos;
    let tempInProgress = inProgress;
    let tempCompleted = completed;
    // Source Logic
    if (source.droppableId === "todoId") {
      add = tempTodo[source.index];
      tempTodo.splice(source.index, 1);
    } else if (source.droppableId === "inProgressId") {
      add = tempInProgress[source.index];
      tempInProgress.splice(source.index, 1);
    } else if (source.droppableId === "completedId") {
      add = tempCompleted[source.index];
      tempCompleted.splice(source.index, 1);
    }

    // Destination Logic
    if (destination.droppableId === "todoId") {
      tempTodo.splice(destination.index, 0, add);
    } else if (destination.droppableId === "inProgressId") {
      tempInProgress.splice(destination.index, 0, add);
    } else if (destination.droppableId === "completedId") {
      tempCompleted.splice(destination.index, 0, add);
    }

    setCompleted(tempCompleted);
    setTodos(tempTodo);
    setInProgress(tempInProgress);
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.container}>
        <Droppable droppableId="todoId">
          {(provided, snapshot) => (
            <div
              className={`${styles.todo}`}
              ref={provided.ref}
              {...provided.droppableProps}
            >
              <div className={styles.topHeading}>
                <img src={icons.purple} alt="" width={8} height={8} />
                <span>Todo</span>
                <div className={styles.taskCount}>{todos?.length}</div>
                <img
                  src={icons.addPpt}
                  alt=""
                  width={20}
                  height={20}
                  className={styles.addProject}
                />
              </div>
              <div className={`${styles.emptyDiv} ${styles.emptyTodos}`}></div>
              <div
                className={styles.taskListWrapper}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {todos.map((todo, index) => (
                  <Draggable key={todo.id} draggableId={todo.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        className={`${
                          snapshot.isDragging ? styles.draggableWrapper : ""
                        }`}
                      >
                        <div
                          className={`${styles.tasksWrapper} ${
                            snapshot.isDragging ? styles.drag : ""
                          }`}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div className={styles.taskTop}>
                            <span
                              className={`${styles.taskPriority} ${
                                styles[todo.priority.toLowerCase()]
                              }`}
                            >
                              {todo.priority}
                            </span>
                            <span className={styles.moreInfo}>...</span>
                          </div>
                          <div className={styles.taskName}>{todo.taskName}</div>
                          <div className={styles.content}>
                            {todo.taskContent}
                          </div>
                          <div className={styles.taskBottom}>
                            <div className={styles.workingPpt}>
                              <img
                                src={images.ppt1}
                                alt=""
                                width={24}
                                height={24}
                                className={styles.ppt1}
                              />
                              <img
                                src={images.ppt2}
                                alt=""
                                width={24}
                                height={24}
                                className={styles.ppt2}
                              />
                              <img
                                src={images.ppt1}
                                alt=""
                                width={24}
                                height={24}
                                className={styles.ppt3}
                              />
                              <div className={styles.remainingPpts}>+2</div>
                            </div>

                            <div className={styles.statsWrapper}>
                              <div className={styles.comments}>
                                <img
                                  src={icons.message}
                                  alt=""
                                  width={16}
                                  height={16}
                                  className={styles.statsIcon}
                                />
                                <span>{todo.commentsCount}</span>&nbsp;
                                <span>Comments</span>
                              </div>
                              <div className={styles.comments}>
                                <img
                                  src={icons.files}
                                  alt=""
                                  width={16}
                                  height={16}
                                  className={styles.statsIcon}
                                />
                                <span>{todo.filesCount}</span>&nbsp;
                                <span>Files</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            </div>
          )}
        </Droppable>

        <Droppable droppableId="inProgressId">
          {(provided) => (
            <div
              className={styles.todo}
              ref={provided.ref}
              {...provided.droppableProps}
            >
              <div className={styles.topHeading}>
                <img src={icons.purple} alt="" width={8} height={8} />
                <span>In Progress</span>
                <div className={styles.taskCount}>{inProgress?.length}</div>
              </div>
              <div
                className={`${styles.emptyDiv} ${styles.emptyProgress}`}
              ></div>
              <div
                className={styles.taskListWrapper}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {inProgress.map((todo, index) => (
                  <Draggable key={todo.id} draggableId={todo.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        className={`${
                          snapshot.isDragging ? styles.draggableWrapper : ""
                        }`}
                      >
                        <div
                          className={`${styles.tasksWrapper} ${
                            snapshot.isDragging ? styles.drag : ""
                          }`}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div className={styles.taskTop}>
                            <span
                              className={`${styles.taskPriority} ${
                                styles[todo.priority.toLowerCase()]
                              }`}
                            >
                              {todo.priority}
                            </span>
                            <span className={styles.moreInfo}>...</span>
                          </div>
                          <div className={styles.taskName}>{todo.taskName}</div>
                          <div className={styles.content}>
                            {todo.taskContent}
                          </div>
                          <div className={styles.taskBottom}>
                            <div className={styles.workingPpt}>
                              <img
                                src={images.ppt1}
                                alt=""
                                width={24}
                                height={24}
                                className={styles.ppt1}
                              />
                              <img
                                src={images.ppt2}
                                alt=""
                                width={24}
                                height={24}
                                className={styles.ppt2}
                              />
                              <img
                                src={images.ppt1}
                                alt=""
                                width={24}
                                height={24}
                                className={styles.ppt3}
                              />
                              <div className={styles.remainingPpts}>+2</div>
                            </div>

                            <div className={styles.statsWrapper}>
                              <div className={styles.comments}>
                                <img
                                  src={icons.message}
                                  alt=""
                                  width={16}
                                  height={16}
                                  className={styles.statsIcon}
                                />
                                <span>{todo.commentsCount}</span>&nbsp;
                                <span>Comments</span>
                              </div>
                              <div className={styles.comments}>
                                <img
                                  src={icons.files}
                                  alt=""
                                  width={16}
                                  height={16}
                                  className={styles.statsIcon}
                                />
                                <span>{todo.filesCount}</span>&nbsp;
                                <span>Files</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            </div>
          )}
        </Droppable>

        <Droppable droppableId="completedId">
          {(provided) => (
            <div
              className={styles.todo}
              ref={provided.ref}
              {...provided.droppableProps}
            >
              <div className={styles.topHeading}>
                <img src={icons.purple} alt="" width={8} height={8} />
                <span>Completed</span>
                <div className={styles.taskCount}>{completed?.length}</div>
              </div>
              <div
                className={`${styles.emptyDiv} ${styles.emptyCompleted}`}
              ></div>
              <div
                className={styles.taskListWrapper}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {completed.map((todo, index) => (
                  <Draggable key={todo.id} draggableId={todo.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        className={`${
                          snapshot.isDragging ? styles.draggableWrapper : ""
                        }`}
                      >
                        <div
                          className={`${styles.tasksWrapper} ${
                            snapshot.isDragging ? styles.drag : ""
                          }`}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div className={styles.taskTop}>
                            <span
                              className={`${styles.taskPriority} ${styles.completed}`}
                            >
                              Completed
                            </span>
                            <span className={styles.moreInfo}>...</span>
                          </div>
                          <div className={styles.taskName}>{todo.taskName}</div>
                          <div className={styles.content}>
                            {todo.taskContent}
                          </div>
                          <div className={styles.taskBottom}>
                            <div className={styles.workingPpt}>
                              <img
                                src={images.ppt1}
                                alt=""
                                width={24}
                                height={24}
                                className={styles.ppt1}
                              />
                              <img
                                src={images.ppt2}
                                alt=""
                                width={24}
                                height={24}
                                className={styles.ppt2}
                              />
                              <img
                                src={images.ppt1}
                                alt=""
                                width={24}
                                height={24}
                                className={styles.ppt3}
                              />
                              <div className={styles.remainingPpts}>+2</div>
                            </div>

                            <div className={styles.statsWrapper}>
                              <div className={styles.comments}>
                                <img
                                  src={icons.message}
                                  alt=""
                                  width={16}
                                  height={16}
                                  className={styles.statsIcon}
                                />
                                <span>{todo.commentsCount}</span>&nbsp;
                                <span>Comments</span>
                              </div>
                              <div className={styles.comments}>
                                <img
                                  src={icons.files}
                                  alt=""
                                  width={16}
                                  height={16}
                                  className={styles.statsIcon}
                                />
                                <span>{todo.filesCount}</span>&nbsp;
                                <span>Files</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default TaskSection;
