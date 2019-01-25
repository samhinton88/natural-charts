import { 
  SEARCH_BAR_VALUE_CHANGE,
  SERVER_RESULT,
  WORD_COUNT_CHANGE
} from '../actions/types';

const defaultState = {
  searchBarValue: '',
  serverResult: [],
  wordCount: null,
  data: {
    PERSON: [],
    GPE: []
  },
  namedResource: null
}

export default (state = defaultState, action) => {
  console.log(state)
  switch (action.type) {
    case SEARCH_BAR_VALUE_CHANGE:
      return {
        ...state,
        searchBarValue: action.payload
      }
    case SERVER_RESULT:

      const newData = action.payload.data.reduce((acc, item) => {
        const [name, _x, _y, entity] = item
        if (!acc[entity]) acc[entity] = [];

        acc[entity] = [...acc[entity], name]

        return acc
      },
      {});

      const tokenData = action.payload.token

      return {
        ...state,
        serverResult: action.payload,
        data: newData,
        tokens: tokenData
      }
    case WORD_COUNT_CHANGE:
      return {
        ...state,
        wordCount: action.payload
      }
    default: return state;
  }
}

const lexicon = {
  write: ['make', 'create', 'add'],
  update: ['add to', 'edit']
}