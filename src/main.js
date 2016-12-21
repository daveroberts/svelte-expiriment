import HelloWorld from './components/HelloWorld.html';
var app = new HelloWorld({
  target: document.getElementById('main'),
  data: { name: 'quick builds' }
});
