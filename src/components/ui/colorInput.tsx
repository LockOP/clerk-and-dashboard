import { MdAdd } from "react-icons/md";

export default function ColorInput({
  id,
  color,
  setColor,
}: {
  id: string;
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  return (
    <label
      htmlFor={id}
      className="w-8 h-8 relative rounded-full shrink-0 flex items-center justify-center cursor-pointer group border border-muted-foreground hover:border-primary transition-all"
      style={{ backgroundColor: color || "#FFF" }}
    >
      <input
        type="color"
        id={id}
        name="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className={`${
          false ? "border-destructive" : ""
        } w-0 h-0 shrink -translate-x-[3px] -translate-y-[1px]`}
      />

      <MdAdd className="shrink-0 z-10 absolute h-6 w-6 text-muted-foreground group-hover:text-primary transition-all" />
    </label>
  );
}
