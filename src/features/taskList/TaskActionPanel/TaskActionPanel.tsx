import React from "react";
import styles from "./TaskActionPanel.module.css";
import hoverStyles from "../Task/TaskHover.module.css";
import { IGoogleTaskDescription } from "../../../interfaces";

interface TaskActionPanelProps {
  taskInfo: IGoogleTaskDescription;
  onEdit: () => void;
}

export function TaskActionPanel({ taskInfo, onEdit }: TaskActionPanelProps) {
  return (
    <div className={`${hoverStyles.taskHoverChild} ${styles.taskActionPanel}`}>
      <div className={`${styles.pad} ${styles.padLeft}`}>
        <span
          className={`material-symbols-outlined button-edit ${styles.icon}`}
          data-taskid={taskInfo.id}
          onClick={onEdit}
        >
          edit
        </span>
      </div>
      <div className={`${styles.pad} ${styles.padRight}`}>
        <span
          className={`material-symbols-outlined button-delete ${styles.icon}`}
          data-taskid={taskInfo.id}
        >
          delete
        </span>
      </div>
    </div>
  );
}
