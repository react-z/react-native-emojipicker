import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import { Text, TouchableOpacity, View } from 'react-native'

/* list of emoji's sourced from http://getemoji.com */
const PEOPLE_EMOJIS = ['😀', '😃', '😄', '😁', '😆', '😅', '😂', '😇', '☺️', '😊', '🙂', '🙃', '😉', '😌', '😍', '😘', '😗', '😙', '😚', '😋', '😜', '😝', '😛', '🤑', '🤗', '🤓', '😎', '😏', '😒', '😞', '😔', '😟', '😕', '🙁', '☹️', '😣', '😖', '😫', '😩', '😤', '😠', '😡', '😶', '😐', '😑', '😯', '😦', '😧', '😮', '😲', '😵', '😳', '😱', '😨', '😰', '😢', '😥', '😭', '😓', '😪', '😴', '🙄', '🤔', '😬', '🤐', '😷', '🤒', '🤕', '😈', '👿', '👹', '👺', '💩', '👻', '💀', '☠️', '👽', '👾', '🤖', '🎃', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾', '👐', '🙌', '👏', '🙏', '👍', '👎', '👊', '✊', '✌️', '🤘', '👌', '👈', '👉', '👆', '👇', '☝️', '✋', '🖐', '🖖', '👋', '💪', '🖕', '✍️', '💅', '🖖', '💄', '💋', '👄', '👅', '👂', '👃', '👣', '👁', '👀', '👗', '👠', '👞', '👟', '👒', '🎩', '🎓', '👑', '⛑', '🎒', '👝', '👛', '👜', '💼', '👓', '🕶', '☂️']
const ANIMALS_NATURE_EMOJIS = ['🐶', '🐱', '🐭', '🐹', '🐰', '🐻', '🐼', '🐨', '🐯', '🦁', '🐮', '🐷', '🐽', '🐸', '🐵', '🙊', '🙉', '🙊', '🐒', '🐔', '🐧', '🐦', '🐤', '🐣', '🐥', '🐺', '🐗', '🐴', '🦄', '🐝', '🐛', '🐌', '🐚', '🐞', '🐜', '🕷', '🕸', '🐢', '🐍', '🦂', '🦀', '🐙', '🐠', '🐟', '🐡', '🐬', '🐳', '🐋', '🐊', '🐆', '🐅', '🐃', '🐂', '🐄', '🐫', '🐘', '🐎', '🐖', '🐐', '🐏', '🐑', '🐕', '🐩', '🐈', '🐓', '🦃', '🕊', '🐇', '🐁', '🐀', '🐿', '🐾', '🐉', '🐲', '🌵', '🎄', '🌲', '🌳', '🌴', '🌱', '🌿', '☘️', '🍀', '🎍', '🎋', '🍃', '🍂', '🍁', '🍄', '🌾', '💐', '🌷', '🌹', '🥀', '🌻', '🌼', '🌸', '🌺', '🌎', '🌍', '🌏', '🌕', '🌖', '🌔', '🌚', '🌝', '🌞', '🌛', '🌜', '🌙', '💫', '⭐️', '🌟', '✨', '⚡️', '🔥', '💥', '☄️', '☀️', '🌤', '⛅️', '🌥', '🌦', '🌈', '☁️', '🌧', '⛈', '🌩', '🌨', '☃️', '⛄️', '❄️', '🌬', '💨', '🌪', '🌫', '🌊', '💧', '💦', '☔️']
const FOOD_SPORTS_EMOJIS = ['🍏', '🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈', '🍒', '🍑', '🍍', '🍅', '🍆', '🌽', '🌶', '🍠', '🌰', '🍯', '🍞', '🧀', '🍳', '🍤', '🍗', '🍖', '🍕', '🌭', '🍔', '🍟', '🌮', '🌯', '🍝', '🍜', '🍲', '🍥', '🍣', '🍱', '🍛', '🍚', '🍙', '🍘', '🍢', '🍡', '🍧', '🍨', '🍦', '🍰', '🎂', '🍮', '🍭', '🍬', '🍫', '🍿', '🍩', '🍪', '🍼', '☕️', '🍵', '🍶', '🍺', '🍻', '🍷', '🍸', '🍹', '🍾', '🍴', '🍽', '⚽️', '🏀', '🏈', '⚾️', '🎾', '🏐', '🏉', '🎱', '🏓', '🏸', '🏒', '🏑', '🏏', '⛳️', '🏹', '🎣', '⛸', '🎿', '⛷', '🏂', '🏋', '⛹️', '🏌', '🏄', '🏊', '🚣', '🏇', '🚴', '🚵', '🎬', '🎤', '🎧', '🎼', '🎹', '🎷', '🎺', '🎸', '🎻', '🎲', '🎯', '🎳', '🎮', '🏁', '🏆']
const TRAVEL_PLACES_EMOJIS = ['🚗', '🚕', '🚙', '🚌', '🚎', '🏎', '🚓', '🚑', '🚒', '🚐', '🚚', '🚛', '🚜', '🚲', '🏍', '🚨', '🚔', '🚍', '🚘', '🚖', '🚡', '🚠', '🚟', '🚃', '🚋', '🚞', '🚝', '🚄', '🚅', '🚈', '🚂', '🚆', '🚇', '🚊', '🚉', '🚁', '🛩', '✈️', '🛫', '🛬', '🚀', '🛰', '💺', '⛵️', '🛥', '🚤', '🛳', '⛴', '🚢', '⚓️', '🚧', '⛽️', '🚏', '🚦', '🚥', '🗺', '🗿', '🗽', '⛲️', '🗼', '🏰', '🏯', '🏟', '🎡', '🎢', '🎠', '⛱', '🏖', '🏝', '⛰', '🏔', '🗻', '🌋', '🏜', '🏕', '⛺️', '🛤', '🛣', '🏗', '🏭', '🏠', '🏡', '🏘', '🏚', '🏢', '🏬', '🏣', '🏤', '🏥', '🏦', '🏨', '🏪', '🏫', '🏩', '💒', '🏛', '⛪️', '🕌', '🕍', '🕋', '⛩', '🗾', '🎑', '🏞', '🌅', '🌄', '🌠', '🎇', '🎆', '🌇', '🌆', '🏙', '🌃', '🌌', '🌉', '🌁', '🎨']
const OBJECTS_EMOJIS = ['🆓', '📗', '📕', '⌚️', '📱', '📲', '💻', '⌨️', '🖥', '🖨', '🖱', '🖲', '🕹', '🗜', '💽', '💾', '💿', '📀', '📼', '📷', '📸', '📹', '🎥', '📽', '🎞', '📞', '☎️', '📟', '📠', '📺', '📻', '🎙', '🎚', '🎛', '⏱', '⏲', '⏰', '🕰', '⌛️', '⏳', '📡', '🔋', '🔌', '💡', '🔦', '🕯', '🗑', '🛢', '💸', '💵', '💴', '💶', '💷', '💰', '💳', '💎', '⚖️', '🔧', '🔨', '⚒', '⛏', '⚙️', '💣', '🔪', '🗡', '⚔️', '🛡', '⚰️', '⚱️', '🏺', '🔮', '📿', '💈', '⚗️', '🔭', '🔬', '🕳', '💊', '💉', '🌡', '🚽', '🚰', '🚿', '🛁', '🛀', '🛎', '🔑', '🗝', '🚪', '🛋', '🛏', '🖼', '🛍', '🎁', '🎈', '🎏', '🎀', '🎊', '🎉', '🎎', '🏮', '🎐', '✉️', '📪', '📮', '📯', '📜', '📃', '📄', '📑', '📊', '📈', '📉', '🗒', '🗓', '📆', '📅', '📇', '🗃', '🗳', '🗄', '📋', '🗞', '📰', '📘', '📚', '📖', '🔖', '🔗', '📎', '📐', '📏', '📌', '🖊', '🖌', '🖍', '📝', '✏️', '🔍', '🔓']
const SYMBOLS_FLAGS_EMOJIS = ['❤️', '💛', '💚', '💙', '💜', '💔', '❣️', '💕', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '☮️', '✝️', '☪️', '🕉', '☸️', '✡️', '🔯', '🕎', '☯️', '☦️', '🛐', '⛎', '♈️', '♉️', '♊️', '♋️', '♌️', '♍️', '♎️', '♏️', '♐️', '♑️', '♒️', '♓️', '🆔', '⚛️', '🉑', '☢️', '☣️', '📴', '📳', '🈶', '🈚', '🈸', '🈺', '🈷', '✴️', '🆚', '💮', '🉐', '㊙️', '㊗️', '🈴', '🈵', '🈹', '🈲', '❌', '⭕️', '⛔️', '📛', '🚫', '💯', '💢', '♨️', '🚷', '🚯', '🚳', '🚱', '🔞', '📵', '🚭', '❕', '❔', '‼️', '⁉️', '🔅', '🔆', '〽️', '⚠️', '🚸', '🔱', '⚜️', '🔰', '♻️', '✅', '🈯', '💹', '❇️', '✳️', '❎', '🌐', '💠', 'Ⓜ️', '🌀', '💤', '🚺', '🚼', '🎵', '🎶', '➕', '➖', '➗', '✖️', '💲', '💱', '™️', '©️', '®️', '〰️', '➰', '➿', '🔚', '🔙', '🔛', '🔝', '✔️', '☑️', '🔈', '🔇', '🔉', '🔊', '🔔', '🔕', '📣', '📢', '🗨', '💬', '💭', '🗯', '♠️', '♣️', '♥️', '♦️', '🃏', '🎴']

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      emojis: PEOPLE_EMOJIS,
      emojiCategory: 'PEOPLE_EMOJIS'
    }
  }

  static get propTypes() {
    return {
      onEmojiSelected: PropTypes.func.isRequired,
      visible: PropTypes.bool
    }
  }

  static get defaultProps() {
    return {
      visible: true
    }
  }

  toggleEmojis(emoji) {
    switch (emoji) {
      case 'PEOPLE_EMOJIS':
        this.setState({ emojis: PEOPLE_EMOJIS, emojiCategory: 'PEOPLE_EMOJIS' })
        break
      case 'ANIMALS_NATURE_EMOJIS':
        this.setState({
          emojis: ANIMALS_NATURE_EMOJIS,
          emojiCategory: 'ANIMALS_NATURE_EMOJIS'
        })
        break
      case 'FOOD_SPORTS_EMOJIS':
        this.setState({
          emojis: FOOD_SPORTS_EMOJIS,
          emojiCategory: 'FOOD_SPORTS_EMOJIS'
        })
        break
      case 'TRAVEL_PLACES_EMOJIS':
        this.setState({
          emojis: TRAVEL_PLACES_EMOJIS,
          emojiCategory: 'TRAVEL_PLACES_EMOJIS'
        })
        break
      case 'OBJECTS_EMOJIS':
        this.setState({
          emojis: OBJECTS_EMOJIS,
          emojiCategory: 'OBJECTS_EMOJIS'
        })
        break
      case 'SYMBOLS_FLAGS_EMOJIS':
        this.setState({
          emojis: SYMBOLS_FLAGS_EMOJIS,
          emojiCategory: 'SYMBOLS_FLAGS_EMOJIS'
        })
        break
      default:
        this.setState({ emojis: PEOPLE_EMOJIS, emojiCategory: 'PEOPLE_EMOJIS' })
    }
  }

  onEmojiSelect(emoji) {
    this.props.onEmojiSelected(emoji)
  }

  renderTabs() {
    const { emojiCategory } = this.state

    return (
      <TabWrapper>
        <TouchableOpacity
          selected={emojiCategory === 'PEOPLE_EMOJIS'}
          onPress={() => {
            this.toggleEmojis('PEOPLE_EMOJIS')
          }}
        >
          <EmojiTitle>😀</EmojiTitle>
        </TouchableOpacity>

        <TouchableOpacity
          selected={emojiCategory === 'ANIMALS_NATURE_EMOJIS'}
          onPress={() => {
            this.toggleEmojis('ANIMALS_NATURE_EMOJIS')
          }}
        >
          <EmojiTitle>🐼</EmojiTitle>
        </TouchableOpacity>

        <TouchableOpacity
          selected={emojiCategory === 'FOOD_SPORTS_EMOJIS'}
          onPress={() => {
            this.toggleEmojis('FOOD_SPORTS_EMOJIS')
          }}
        >
          <EmojiTitle>🍏</EmojiTitle>
        </TouchableOpacity>

        <TouchableOpacity
          selected={emojiCategory === 'TRAVEL_PLACES_EMOJIS'}
          onPress={() => {
            this.toggleEmojis('TRAVEL_PLACES_EMOJIS')
          }}
        >
          <EmojiTitle>🚘</EmojiTitle>
        </TouchableOpacity>

        <TouchableOpacity
          selected={emojiCategory === 'OBJECTS_EMOJIS'}
          onPress={() => {
            this.toggleEmojis('OBJECTS_EMOJIS')
          }}
        >
          <EmojiTitle>💎</EmojiTitle>
        </TouchableOpacity>

        <TouchableOpacity
          selected={emojiCategory === 'SYMBOLS_FLAGS_EMOJIS'}
          onPress={() => {
            this.toggleEmojis('SYMBOLS_FLAGS_EMOJIS')
          }}
        >
          <EmojiTitle>❤️</EmojiTitle>
        </TouchableOpacity>
      </TabWrapper>
    )
  }

  render() {
    const { emojis } = this.state
    const { visible } = this.props

    return (
      <View
        style={{
          opacity: visible ? 1 : 0,
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'stretch',
          padding: '10px'
        }}
      >
        {this.renderTabs()}
        <EmojiWrapper>
          {emojis.map((emoji, index) => (
            <EmojiHighlight
              key={index}
              onPress={() => {
                this.onEmojiSelect(emoji)
              }}
            >
              <Emoji key={index}>{emoji}</Emoji>
            </EmojiHighlight>
          ))}
        </EmojiWrapper>
      </View>
    )
  }
}

const Wrapper = styled.View`
  opacity: ${props => (props.visible ? 1 : 0)};
  padding: 10px;
  flex: 1;
  flex-direction: column;
`

const EmojiWrapper = styled.View`
  flex: 5;
  flex-direction: column;
  flex-wrap: wrap;
  height: 300;
`

const EmojiHighlight = styled.TouchableOpacity`
  height: 24;
`

const Emoji = styled.Text`
  font-size: 18;
  height: 24;
`

const TabWrapper = styled.View`
  flex: 1;
`

const EmojiTitle = styled.Text`
  font-size: 32;
  text-align: center;
  width: 44;
  height: 44;
`
