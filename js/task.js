
class Room {
  constructor(flag) {
    this.flag = flag;
  }
}

function countRooms(circle) {
  let currentRoom = circle[0]; // Початкова кімната
  let count = 0; // Лічильник кімнат

  while (true) {
    // Перевіряємо положення палички в поточній кімнаті
    if (currentRoom.flag) { // Якщо паличка стоїть горизонтально
      count++;
    }

    // Повертаємо паличку вертикально
    currentRoom.flag = false;

    // Переходимо до наступної кімнати
    const nextIndex = (circle.indexOf(currentRoom) + 1) % circle.length;
    currentRoom = circle[nextIndex];

    // Якщо повернулися до початкової кімнати, зупиняємося
    if (currentRoom === circle[0]) {
      break;
    }
  }

  return count;
}