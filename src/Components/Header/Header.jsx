import React, { useState } from "react";
import styles from "./Header.module.css";
import { FaSearch, FaShoppingCart, FaMapMarkerAlt } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

const Header = () => {
  // Language dropdown
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");

  const languages = ["EN", "ES", "DE", "FR", "JP"];

  // Category dropdown
  const [category, setCategory] = useState("All");
  const categories = [
    "All",
    "Books",
    "Electronics",
    "Clothing",
    "Toys",
    "Sports",
  ];

  return (
    <div className={styles.header}>
      {/* Logo */}
      <img
        className={styles.logo}
        src="src/assets/amazon_Header.png"
        alt="Amazon Logo"
      />

      {/* Deliver To */}
      <div className={styles.deliver}>
        <FaMapMarkerAlt className={styles.locationIcon} />
        <div className={styles.deliverText}>
          <span className={styles.deliverLineOne}>Deliver to</span>
          <span className={styles.deliverLineTwo}>Ethiopia</span>
        </div>
      </div>

      {/* Search */}
      <div className={styles.search}>
        <select
          className={styles.searchCategory}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search Amazon"
        />
        <FaSearch className={styles.searchIcon} />
      </div>

      {/* Language Dropdown */}
      {/* Language Dropdown */}
      <div
        className={styles.languageContainer}
        onClick={() => setLangOpen(!langOpen)}
      >
        {/* Static USA flag */}
        <img
          className={styles.flagStatic}
          src="src/assets/us_flag.png"
          alt="USA Flag"
        />

        {/* Language text + dropdown caret */}
        <div className={styles.languageSelected}>
          {selectedLang} <FaChevronDown />
        </div>

        {/* Dropdown menu */}
        {langOpen && (
          <div className={styles.dropdown}>
            {languages.map((lang) => (
              <div
                key={lang}
                className={styles.dropdownItem}
                onClick={() => {
                  setSelectedLang(lang);
                  setLangOpen(false);
                }}
              >
                {lang}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Nav */}
      <div className={styles.nav}>
        <div className={styles.option}>
          <span className={styles.optionLineOne}>Hello Guest</span>
          <span className={styles.optionLineTwo}>Sign In</span>
        </div>

        <div className={styles.option}>
          <span className={styles.optionLineOne}>Returns</span>
          <span className={styles.optionLineTwo}>& Orders</span>
        </div>

        <div className={styles.option}>
          <span className={styles.optionLineOne}>Your</span>
          <span className={styles.optionLineTwo}>Prime</span>
        </div>

        <div className={styles.optionBasket}>
          <FaShoppingCart />
          <span className={styles.basketCount}>0</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
