import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  taskList: [],
  categoryValue: "",
  currId: "",
  index: "",
  contentVal: "",
  topicName: "",
};



export const Slice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.categoryValue = action.payload;
    },
    add: (state, action) => {
      const newTask = {
        content: action.payload,
        topic: state.categoryValue,
        status: false,
        id: nanoid(),
        createDate: new Date().toLocaleDateString(),
      };
      state.taskList.push(newTask);
    },
    storeId: (state, action) => {
      state.index = action.payload;
      state.currId = state.taskList[state.index].id;
    },
    edit: (state, action) => {
      let task = state.taskList[state.index];
      task.content = action.payload;
      task.topic = state.categoryValue;
      state.contentVal = "";
      state.topicName = "";
      state.index = "";
    },
    contentValue: (state, action) => {
      state.contentVal = state.taskList[state.index].content;
      state.topicName = state.taskList[state.index].topic;
    },
    deleteTask: (state, action) => {
      state.taskList = state.taskList.filter((task) => task.id != state.currId);
    },
    taskStatus: (state, action) => {
      state.taskList[state.index].status = true;
    },
    revokeAdd: (state, action) => {
      state.contentVal = "";
      state.topicName = "";
      state.index = "";
      state.currId = "";
    },
  },
});
export const {
  add,
  setCategory,
  storeId,
  edit,
  contentValue,
  deleteTask,
  taskStatus,
  revokeAdd,
} = Slice.actions;
export default Slice.reducer;
