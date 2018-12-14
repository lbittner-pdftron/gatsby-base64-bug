import React from 'react';

export default ({ template }) => {
  return template.images.map(src => {
    return <img src={require(`../assets/${src}`)} />
  })
}