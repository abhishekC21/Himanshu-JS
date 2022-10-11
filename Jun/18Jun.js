function kClosestPoint(points, k) {
  let objArr = [];
  for (let i = 0; i < points.length; i++) {
    let distance = points[i][0] ** 2 + points[i][1] ** 2;
    objArr.push({
      dist: distance,
      cordinates: points[i],
    });
  }
}
