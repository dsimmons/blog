import { withHeadingId } from "./utils/withHeadingId";

export function H1({ children }) {
  return (
    <h1 className="mb-1 text-2xl font-bold dark:text-gray-100">
      {withHeadingId(children)}
    </h1>
  );
}
