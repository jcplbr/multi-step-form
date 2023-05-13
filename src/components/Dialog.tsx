import styled from "styled-components";
import { Header } from "./Header";
import { Button } from "./Button";

type DialogProps = {
  title: string;
  scrImg: string;
  description: string;
  showButton: boolean;
  onClose: () => void;
};

export default function Dialog({
  title,
  scrImg,
  description,
  showButton,
  onClose,
}: DialogProps) {
  return (
    <DialogContainer>
      <Header title={title} hiddenUtilityButton={true} />
      <DialogContent>
        <DialogDescription>
          <img draggable="false" src={scrImg} alt="Warning icon" width={40} />
          <p>{description}</p>
        </DialogDescription>
        <Button
          onClick={onClose}
          style={{ display: !showButton ? "none" : "grid" }}
        >
          OK
        </Button>
      </DialogContent>
    </DialogContainer>
  );
}

export const DialogContainer = styled.div`
  width: 100%;
  max-width: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #c3c3c3;
  padding: 4px 5px 24px;
  font-size: 16px;
  box-shadow: inset -2px -2px 0 0 #262626, inset 2px 2px 0 0 #f0f0f0,
    inset -4px -4px 0 0 #7e7e7e, inset 4px 4px 0 0 #b1b1b1;
`;

export const DialogContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 0 24px;
`;

export const DialogDescription = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  width: 100%;
`;
