import { Theme } from '@ant-design/react-native/lib/style';

const lightTheme: Partial<Theme> = {
    // General
    brand_primary: '#1890ff',
    brand_primary_tap: '#40a9ff',
    brand_success: '#52c41a',
    brand_warning: '#faad14',
    brand_error: '#f5222d',
    brand_important: '#ff4d4f',
    brand_wait: '#108ee9',

    // Text
    color_text_base: '#000000',
    color_text_base_inverse: '#ffffff',
    color_text_secondary: '#888888',
    color_text_placeholder: '#bbbbbb',
    color_text_disabled: '#cccccc',
    color_text_caption: '#999999',
    color_text_paragraph: '#333333',
    color_link: '#1890ff',

    // Background
    fill_base: '#ffffff',
    fill_body: '#f5f5f9',
    fill_tap: '#dddddd',
    fill_disabled: '#dddddd',
    fill_mask: 'rgba(0, 0, 0, 0.4)',
    color_icon_base: '#cccccc',
    fill_grey: '#f7f7f7',

    // Border
    border_color_base: '#dddddd',

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
    input_color_icon: '#cccccc',
    input_color_icon_tap: '#108ee9',

    // Tabs
    tabs_color: '#108ee9',
    tabs_height: 42,
    tabs_font_size_heading: 15,

    // Segmented Control
    segmented_control_color: '#108ee9',
    segmented_control_height: 27,
    segmented_control_fill_tap: '#dddddd',

    // Tab Bar
    tab_bar_fill: '#ebeeef',
    tab_bar_height: 50,

    // Toast
    toast_fill: 'rgba(0, 0, 0, 0.8)',

    // Search Bar
    search_bar_fill: '#efeff4',
    search_bar_height: 44,
    search_bar_input_height: 28,
    search_bar_font_size: 15,
    search_color_icon: '#bbbbbb',

    // Notice Bar
    notice_bar_fill: '#fffada',
    notice_bar_height: 36,

    // Switch
    switch_fill: '#4dd865',

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
};

export default lightTheme;