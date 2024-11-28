import { Button } from "../ui/button";

type DeleteModalProps = {
  handleDelete: () => void;
};

export const DeleteModal = ({ handleDelete }: DeleteModalProps) => {
  return (
    <dialog id="delete-modal" className="p-6 rounded-lg">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Are you sure to delete this Goal?</h3>
        <p className="py-4">This process cannot be undone.</p>
        <div className="modal-action">
          <form className="flex gap-2" method="dialog">
            <Button variant={"outline"} onClick={handleDelete}>
              Delete
            </Button>
            <Button>Close</Button>
          </form>
        </div>
      </div>
    </dialog>
  );
};
