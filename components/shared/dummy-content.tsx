
export const DummyContent = () => {
    return (
      <>
        {[...new Array(2).fill(1)].map((_, index) => {
          return (
            <div
              key={"dummy-content" + index}
            >
            </div>
          );
        })}
      </>
    );
  };