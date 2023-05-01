import { withHeadingId } from "./utils/withHeadingId";

export function H6({ children }) {
  return (
    <h6 className="group relative my-8 text-xs font-bold">
      {withHeadingId(children)}
    </h6>
  );
}
