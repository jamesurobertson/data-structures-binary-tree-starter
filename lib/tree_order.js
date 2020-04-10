function inOrderArray(root) {
  // if the root is null, return an empty array
  if(root === null) return [];
  // get the array for visiting the left node
  // get the array for visiting the right node
  const leftBranch = inOrderArray(root.left);
  const rightBranch = inOrderArray(root.right);
  // return the left array concatenated with the root value
  //   concatenated with the right array
  return leftBranch.concat(root.val).concat(rightBranch);
}

function postOrderArray(root) {
  // if the root is null, return an empty array
  if (root === null) return [];
  // get the array for visiting the left node
  // get the array for visiting the right node
  const leftBranch = postOrderArray(root.left);
  const rightBranch = postOrderArray(root.right);
  // return the left array concatenated with the right array
  //   concatenated with the root value
  return leftBranch.concat(rightBranch).concat(root.val);

}


module.exports = {
  inOrderArray,
  postOrderArray
};
