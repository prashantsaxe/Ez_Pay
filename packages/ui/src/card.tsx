import React = require("react");

export function Card({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}): JSX.Element {
  return (
    <div
      className="border p-6 bg-green-300 rounded-xl bg-[#ededed] shadow-xl font-semibold"
    >
      <h1 className="text-xl border-b pb-2 text-blue-900">
        {title}
      </h1>
      <p>{children}</p>
    </div>
  );
}
