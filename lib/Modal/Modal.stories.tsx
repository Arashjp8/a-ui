import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";

const meta: Meta<typeof Modal> = {
    title: "Components/Modal",
    component: Modal,
    parameters: {
        layout: "centered",
    },
};
export default meta;

type Story = StoryObj<typeof Modal>;

const ModalWrapper = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button className="px-4 py-2 bg-primary text-white rounded" onClick={() => setIsOpen(true)}>
                Open Modal
            </button>

            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <div className="text-lg font-medium">This is a modal.</div>
                <p className="mt-2 text-sm text-on-surface-variant">Click outside or press Escape to close it.</p>
                <button className="mt-4 px-4 py-2 bg-secondary text-white rounded" onClick={() => setIsOpen(false)}>
                    Close
                </button>
            </Modal>
        </div>
    );
};

export const Default: Story = {
    render: () => <ModalWrapper />,
};
