const lightTheme = {
  // General
  brand_primary: "#ff4444",
  brand_primary_tap: "#3498db",
  brand_success: "#2ecc71",
  brand_warning: "#faad14",
  brand_error: "#f5222d",
  brand_important: "#ff4d4f",
  brand_wait: "#108ee9",

  // Text
  color_text_base: "#333333",
  color_text_base_inverse: "#ffffff",
  color_text_secondary: "#888888",
  color_text_placeholder: "#bbbbbb",
  color_text_disabled: "#cccccc",
  color_text_caption: "#999999",
  color_text_paragraph: "#333333",
  color_link: "#1890ff",

  // Background
  fill_base: "#ffffff",
  fill_body: "#f5f5f9",
  fill_tap: "#dddddd",
  fill_disabled: "#dddddd",
  fill_mask: "rgba(0, 0, 0, 0.4)",
  color_icon_base: "#cccccc",
  fill_grey: "#f7f7f7",

  // Border
  border_color_base: "#dddddd",

  // Font
  font_size_icontext: 10,
  font_size_caption_sm: 12,
  font_size_base: 14,
  font_size_subhead: 15,
  font_size_caption: 16,
  font_size_heading: 17,

  // Radius
  radius_xs: 2,
  radius_sm: 3,
  radius_md: 5,
  radius_lg: 7,

  // Border Width
  border_width_sm: 0.5,
  border_width_md: 1,
  border_width_lg: 2,

  // Opacity
  opacity_disabled: 0.3,
  opacity_loading: 0.7,

  // Button
  button_height: 47,
  button_font_size: 18,
  button_height_sm: 23,
  button_font_size_sm: 12,

  // List
  list_title_height: 30,
  list_item_height_sm: 35,
  list_item_height: 44,

  // Input
  input_label_width: 17,
  input_font_size: 17,
  input_color_icon: "#cccccc",
  input_color_icon_tap: "#108ee9",

  // Tabs
  tabs_color: "#108ee9",
  tabs_height: 42,
  tabs_font_size_heading: 15,

  // Segmented Control
  segmented_control_color: "#108ee9",
  segmented_control_height: 27,
  segmented_control_fill_tap: "#dddddd",

  // Tab Bar
  tab_bar_fill: "#ebeeef",
  tab_bar_height: 50,

  // Toast
  toast_fill: "rgba(0, 0, 0, 0.8)",

  // Search Bar
  search_bar_fill: "#efeff4",
  search_bar_height: 44,
  search_bar_input_height: 28,
  search_bar_font_size: 15,
  search_color_icon: "#bbbbbb",

  // Notice Bar
  notice_bar_fill: "#fffada",
  notice_bar_height: 36,

  // Switch
  switch_fill: "#4dd865",

  // Tag
  tag_height: 25,
  tag_small_height: 15,

  // Picker
  option_height: 42,

  // Z-index
  toast_zindex: 1999,
  action_sheet_zindex: 1000,
  popup_zindex: 999,
  modal_zindex: 999,
  colors: {
    primary: "#ff4444", // Bright red/pink color used prominently
    secondary: "#3498db", // Blue color used for some accents
    tertiary: "#2ecc71", // Green color used for some accents
    background: "#f4f4f4", // Light gray background color
    text: "#333333", // Dark gray text color
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    fontSize: {
      small: "14px",
      medium: "16px",
      large: "18px",
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
  },
  layout: {
    borderRadius: {
      small: "4px",
      medium: "8px",
      large: "12px",
    },
    spacing: {
      small: "8px",
      medium: "16px",
      large: "24px",
    },
  },
  components: {
    Button: {
      colorScheme: "primary",
      size: "medium",
      fontWeight: "medium",
    },
    Input: {
      borderColor: "gray.300",
      focusBorderColor: "primary",
    },
    Card: {
      backgroundColor: "white",
      borderRadius: "medium",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    },
    Heading: {
      fontWeight: "bold",
      color: "text",
    },
    Text: {
      color: "text",
    },
  },
};

export default lightTheme;
