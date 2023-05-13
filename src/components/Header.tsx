import styled from "styled-components";

type HeaderProps = {
  title: string;
  hiddenUtilityButton: boolean;
};

export function Header({ title, hiddenUtilityButton }: HeaderProps) {
  return (
    <StyledHeader>
      {title}
      <Utilities>
        {!hiddenUtilityButton && (
          <UtilityButton>
            <Image
              src="../../public/assets/question-icon.svg"
              alt="Question icon"
            />
          </UtilityButton>
        )}
        <UtilityButton>
          <Image src="../../public/assets/close-icon.svg" alt="Close icon" />
        </UtilityButton>
      </Utilities>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background: #02007f;
  color: #fff;
  font-size: 18px;
  letter-spacing: 0.2px;
  padding: 5px 4px 4px 8px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Utilities = styled.div`
  display: flex;
  gap: 4px;
`;

const UtilityButton = styled.div`
  background: #c3c3c3;
  border: none;
  box-shadow: inset -2px -2px 0 0 #262626, inset 2px 2px 0 0 #f0f0f0,
    inset -4px -4px 0 0 #7e7e7e;
  width: 24px;
  height: 24px;
  display: grid;
  place-content: center;
  cursor: not-allowed;
`;

const Image = styled.img`
  margin-right: 2px;
  max-width: 12px;
  height: auto;
`;
