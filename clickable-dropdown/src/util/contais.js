export default function contains(current, element) {
  console.log({ current, element })
  if (!current) {
    return false;
  }

  return current.contains(element);
}
