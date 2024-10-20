import io from 'socket.io-client';

const socket = io('http://localhost:5000');

export const subscribeToDocumentChanges = (docId, callback) => {
  socket.emit('joinDocument', docId);
  socket.on('documentUpdated', callback);
};

export const updateDocument = (docId, content) => {
  socket.emit('updateDocument', { docId, content });
};
