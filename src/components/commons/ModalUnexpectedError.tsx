import { RefObject } from "react";
import { ModalAction } from "@/hooks/useModal";

interface Props {
  errorMessage: string;
  modalRef: RefObject<ModalAction>;
  title?: string;
  exitFunc?: () => void;
  isSecondModal?: boolean;
}

const ModalUnexpectedError = ({
  errorMessage,
  title = "Error",
}: Props) => {
  return (
    <div className="max-w-xl w-full mx-auto p-6 border border-red-500 bg-red-100 text-red-800 rounded">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p>{errorMessage || "An unexpected error has occurred. Try again later."}</p>
    </div>
  );
};

export default ModalUnexpectedError;
