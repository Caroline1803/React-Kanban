import "./tasklist.css";
import PropTypes from "prop-types";

export default function TaskList({ title, onAddTask, tasks }) {
  const AddTask = () => {
    onAddTask("Nova Tarefa", "Pendente");
  };

  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content"></div>
      <button onClick={AddTask}>Adicionar Tarefa</button>
    </div>
  );
}

TaskList.propTypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired
};
