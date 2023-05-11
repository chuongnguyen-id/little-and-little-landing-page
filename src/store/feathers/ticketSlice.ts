import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Inputs } from "../../interface";

interface TicketState {
  tickets: Inputs[];
  status: "idle" | "loading" | "failed";
  error: string | null;
}

const initialState: TicketState = {
  tickets: [],
  status: "idle",
  error: null,
};

export const getTicket = createAsyncThunk("tickets/getTicket", async () => {
  const response = await axios.get(
    "https://little-and-little-channel-default-rtdb.firebaseio.com/tickets.json"
  );
  const fetchedTickets: Inputs[] = [];
  for (let key in response.data) {
    fetchedTickets.push({
      ...response.data[key],
      id: key,
    });
  }
  return fetchedTickets;
});

export const getTicketById = createAsyncThunk(
  "tickets/getTicketById",
  async (id: string) => {
    const response = await axios.get(
      `https://little-and-little-channel-default-rtdb.firebaseio.com/tickets/${id}.json`
    );
    const fetchedTicket: Inputs = {
      ...response.data,
      id,
    };
    return fetchedTicket;
  }
);

export const createTicket = createAsyncThunk(
  "tickets/createTicket",
  async (ticket: Inputs) => {
    const response = await axios.post(
      "https://little-and-little-channel-default-rtdb.firebaseio.com/tickets.json",
      ticket
    );
    const fetchedTicket: Inputs = {
      ...ticket,
      id: response.data,
    };
    return fetchedTicket;
  }
);

export const ticketSlice = createSlice({
  name: "tickets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTicket.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        getTicket.fulfilled,
        (state, action: PayloadAction<Inputs[]>) => {
          state.status = "idle";
          state.tickets = action.payload;
        }
      )
      .addCase(getTicket.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Failed to fetch tickets";
      })
      .addCase(getTicketById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        getTicketById.fulfilled,
        (state, action: PayloadAction<Inputs>) => {
          state.status = "idle";
          state.tickets = [action.payload];
        }
      )
      .addCase(getTicketById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Failed to fetch tickets";
      })
      .addCase(createTicket.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        createTicket.fulfilled,
        (state, action: PayloadAction<Inputs>) => {
          state.status = "idle";
          state.tickets.push(action.payload);
        }
      )
      .addCase(createTicket.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Failed to create ticket";
      });
  },
});

export default ticketSlice.reducer;
