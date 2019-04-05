const task = {
  engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
  designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
  founder: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
}

const phrase = ['很簡單吧', '很容易吧', '很快吧', '很正常吧']


function generateTrash(target) {
  // const target = 'engineer'
  const phraseIndex = Math.floor(Math.random() * phrase.length)
  let sentence = ''
  if (target.engineer === 'on') {
    let index = Math.floor(Math.random() * task.engineer.length)
    sentence = '身為一個工程師' + task.engineer[index]
  } else if (target.designer === 'on') {
    let index = Math.floor(Math.random() * task.designer.length)
    sentence = '身為一個設計師' + task.designer[index]
  } else if (target.founder === 'on') {
    let index = Math.floor(Math.random() * task.founder.length)
    sentence = '身為一個創業家' + task.founder[index]
  } else {
    return '選一個幹話對象'
  }

  return sentence += phrase[phraseIndex]
}

module.exports = generateTrash