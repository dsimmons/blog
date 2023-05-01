import { withHeadingId } from "./utils/withHeadingId";

export function H5({ children }) {
  return (
    <h5 className="group relative my-8 text-sm font-bold">
      {withHeadingId(children)}
    </h5>
  );
}
