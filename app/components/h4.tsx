import { withHeadingId } from "./utils/withHeadingId";

export function H4({ children }) {
  return (
    <h4 className="text-md group relative my-8 font-bold">
      {withHeadingId(children)}
    </h4>
  );
}
