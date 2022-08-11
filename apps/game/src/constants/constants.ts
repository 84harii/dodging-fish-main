const DEBUG = false

const SCALE = 1

const width = 1080
const height = 1920

const constants = {
  SCALE,
  WIDTH: width * SCALE,
  HEIGHT: height * SCALE,
  DEBUG,
  FONT: {
    FAMILY: 'Jost',
    COLOR: '#ffffff',
  },
  CURSOR: {
    DEFAULT: 'url(assets/cursors/default.cur), default',
    POINTER: 'url(assets/cursors/pointer.cur), pointer',
  },
  SCENES: {
    LOADING: 'loading-scene',
    MAIN_MENU: 'main-menu-scene',
    GAME_FIELD: 'game-field-scene',
    GAME_OVER: 'game-over-scene',
    GAME_INFO_UI: 'game-info-ui-scene',
    PLAYER_SKINS: 'player-skins-scene',
    LOCAL_STORAGE: 'local-storage-scene',
    SHOP: 'shop-scene',
    SETTINGS: 'settings-scene',
  },
  SPIKE: {
    WIDTH: 145,
    HEIGHT: 87,
  },
  WALL: {
    HEIGHT: 84,
  },
  COLORS: {
    ACCENT: '#2BAFF6',
    ACCENT_VARIANT: '#004F79',
    DEFAULT: {
      BACKGROUND: '#ffcb74',
      SPIKE: '#808080',
    },
  },
  FISH: {
    COUNT: 126,
    BUY_COST: 0,
    GIFT_COST: 500,
  },
}

export default constants
