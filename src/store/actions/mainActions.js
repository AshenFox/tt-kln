//   import axios from '../../server/supplemental/axios';

// ==============================
// ==============================
// ==============================

const arr_to_obj = (arr) => {
  return Object.fromEntries(
    arr.map((card) => [
      card._id,
      {
        ...card,
        ...card_fields,
      },
    ])
  );
};
