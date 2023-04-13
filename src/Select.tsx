import { useState } from "react";
import styles from "./select.module.css";
type SelectOption = {
  lable: string;
  value: any;
};
type SelectProps = {
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
  options: SelectOption;
};
export function Select({ value, onChange, options }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  function clearOptions() {
    onChange(undefined);
  }
  return (
    <>
      <div
        onBlur={() => setIsOpen(false)}
        onClick={() => setIsOpen((prev) => !prev)}
        tabIndex={0}
        className={styles.container}
      >
        <span className={styles.value}>{value?.lable}</span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            clearOptions();
          }}
          className={styles["clear-btn"]}
        >
          &times;
        </button>
        <div className={styles.divider}></div>
        <div className={styles.caret}></div>
        <ul
          className={
            !isOpen ? `${styles.options}` : `${styles.options} ${styles.show}`
          }
        >
          {options.map((option) => (
            <li key={option.lable} className={styles.option}>
              {option.lable}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
