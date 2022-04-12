import useModal from "@/Components/Modal/useModal";
import DummyModal from "@/Components/Modal/DummyModal";

export default function ModalContainer() {
  const { openModal, closeModal } = useModal();
  const onClickButton = () => {
    openModal({
      Component: DummyModal,
      props: { title: "My Title" },
    });
  };
  return (
    <div>
      <button onClick={onClickButton}>Open Modal</button>
    </div>
  );
}
