#!/usr/bin/env node

const items = [
  {
    question: '1. 寝つき',
    answers: [
      '問題ない（または、寝付くのに30分以上かかったことは一度もない）',
      '寝つくのに30分以上かかったこともあるが、1週間の半分以下である',
      '寝つくのに30分以上かかったことが、週の半分以上ある',
      '寝つくのに60分以上かかったことが、（1週間の）半分以上ある'
    ]
  }, {
    question: '2．夜間の睡眠',
    answers: [
      '問題ない（夜間に目が覚めたことはない）',
      '落ち着かない、浅い眠りで、何回か短く目が覚めたことがある',
      '毎晩少なくとも1回は目が覚めるが、難なくまた眠ることができる',
      '毎晩1回以上目が覚め、そのまま20分以上眠れないことが、（1週間の）半分以上ある'
    ]
  }, {
    question: '3．早く目が覚めすぎる',
    answers: [
      '問題ない（または、ほとんどの場合、目が覚めるのは、起きなくてはいけない時間の、せいぜい30分前である)',
      '週の半分以上、起きなくてはならない時間より30分以上早く目が覚める',
      'ほとんどいつも、起きなくてはならない時間より1時間早く目が覚めてしまうが、最終的にはまた眠ることができる',
      '起きなくてはならない時間よりも1時間以上早く起きてしまい、もう一度眠ることができない'
    ]
  }, {
    question: '4．眠りすぎる',
    answers: [
      '問題ない（夜間、眠りすぎることはなく、日中に昼寝をすることもない）',
      '24時間のうち、眠っている時間は、昼寝を含めて10時間ほどである',
      '24時間のうち、眠っている時間は、昼寝を含めて12時間ほどである',
      '24時間のうち、昼寝を含めて12時間以上眠っている'
    ]
  }, {
    question: '5．悲しい気持ち',
    answers: [
      '悲しいとは思わない',
      '悲しいと思うことは、半分以下の時間である',
      '悲しいと思うことが半分以上の時間ある',
      'ほとんどすべての時間、悲しいと感じている'
    ]
  }, {
    question: '6．食欲低下',
    answers: [
      '普段の食欲とかわらない、または、食欲が増えた',
      '普段よりいくぶん食べる回数が少ないか、量が少ない',
      '普段よりかなり食べる量が少なく、食べるよう努めないといけない',
      '丸1日（24時間）ほとんどものを食べず、食べるのは極めて強く食べようと努めたり、誰かに食べるよう説得されたときだけである'
    ]
  }, {
    question: '7．食欲増進',
    answers: [
      '普段の食欲とかわらない、または、食欲が減った',
      '普段より頻回に食べないといけないように感じる',
      '普段とくらべて、常に食べる回数が多かったり、量が多かったりする',
      '食事の時も、食事と食事の間も、食べ過ぎる衝動にかられている'
    ]
  }, {
    question: '8．体重減少（最近2週間で）',
    answers: [
      '体重は変わっていない、または、体重は増えた',
      '少し体重が減った気がする',
      '1キロ以上やせた',
      '2キロ以上やせた'
    ]
  }, {
    question: '９．体重増加（最近2週間で）',
    answers: [
      '体重は変わっていない、または、体重は減った',
      '少し体重が増えた気がする',
      '1キロ以上太った',
      '2キロ以上太った'
    ]
  }, {
    question: '10．集中力／決断',
    answers: [
      '集中力や決断力は普段とかわりない',
      'ときどき決断しづらくなっているように感じたり、注意が散漫になるように感じる',
      'ほとんどの時間、注意を集中したり、決断を下すのに苦労する',
      'ものを読むこともじゅうぶんにできなかったり、小さなことですら決断できないほど集中力が落ちている'
    ]
  }, {
    question: '11．自分についての見方',
    answers: [
      '自分のことを、他の人と同じくらい価値があって、援助に値する人間だと思う',
      '普段よりも自分を責めがちである',
      '自分が他の人に迷惑をかけているとかなり信じている',
      '自分の大小の欠陥について、ほとんど常に考えている'
    ]
  }, {
    question: '12．死や自殺についての考え',
    answers: [
      '死や自殺について考えることはない',
      '人生が空っぽに感じ、生きている価値があるかどうか疑問に思う',
      '自殺や死について、1週間に数回、数分間にわたって考えることがある',
      '自殺や死について1日に何回か細部にわたって考える、\n または、具体的な自殺の計画を立てたり、実際に死のうとしたりしたことがあった'
    ]
  }, {
    question: '13．一般的な興味',
    answers: [
      '他人のことやいろいろな活動についての興味は普段と変わらない',
      '人々や活動について、普段より興味が薄れていると感じる',
      '以前好んでいた活動のうち、一つか二つのことにしか興味がなくなっていると感じる',
      '以前好んでいた活動に、ほとんどまったく興味がなくなっている'
    ]
  }, {
    question: '14．エネルギーのレベル',
    answers: [
      '普段のエネルギーのレベルと変わりない',
      '普段よりも疲れやすい',
      '普段の日常の活動（例えば、買い物、宿題、料理、出勤など）をやり始めたり、やりとげるのに、大きな努力が必要である',
      'ただエネルギーがないという理由だけで、日常の活動のほとんどが実行できない'
    ]
  }, {
    question: '15．動きが遅くなった気がする',
    answers: [
      '普段どおりの速さで考えたり、話したり、動いたりしている',
      '頭の働きが遅くなっていたり、声が単調で平坦に感じる',
      'ほとんどの質問に答えるのに何秒かかかり、考えが遅くなっているのがわかる',
      '最大の努力をしないと、質問に答えられないことがしばしばである'
    ]
  }, {
    question: '16．落ち着かない',
    answers: [
      '落ち着かない気持ちはない',
      'しばしばそわそわしていて、手をもんだり、座り直したりせずにはいられない',
      '動き回りたい衝動があって、かなり落ち着かない',
      'ときどき、座っていられなくて歩き回らずにはいられないことがある'
    ]
  }
]

const firstMessage = `最近、疲れやすかったり、頑張りすぎたりしていませんか？
こころの病気は誰でもかかりうる病気です。現在の自分のこころの状態について、知ることから始めてみましょう。
これから16項目の簡単な問題に回答してもらいます。過去7日間のあなたを最もよく表しているものを選択してください。
時間は3分ほどを要します。
(何かキーを押してスタート)`

const lastMessage = '(この評価指標は簡易抑うつ症状尺度(QIDS-J)に基づいて作成しています。)'

const readline = require('readline')
const prepareInput = () => {
  readline.emitKeypressEvents(process.stdin)
  process.stdin.setRawMode(true)
  process.stdin.resume()
}

const { Select } = require('enquirer')
const scores = []
const select = async (item) => {
  const prompt = new Select({
    type: 'select',
    name: 'question',
    message: item.question,
    choices: item.answers,
    result () {
      return this.focused
    }
  })
  const answer = await prompt.run()
  const score = answer.index
  scores.push(score)
  return scores
}

class Severity {
  constructor(scores) {
    const aboutSleep = []
    const aboutWeight = []
    const aboutPsychomotor = []
    const others = []
    scores.forEach((score, idx) => {
      if (idx < 4) {
        aboutSleep.push(score)
      } else if (idx > 4 && idx < 9) {
        aboutWeight.push(score)
      } else if (idx > 13) {
        aboutPsychomotor.push(score)
      } else {
        others.push(score)
      }
    })
    const totalScores = others.concat(Math.max(...aboutSleep), Math.max(...aboutWeight), Math.max(...aboutPsychomotor))
    const totalScore = totalScores.reduce((sum, value) => sum + value)
    this.totalScore = totalScore
  }

  #assessSeverity() {
    if (this.totalScore >= 0 && this.totalScore <= 5) {
      return 'nomal'
    } else if (this.totalScore >= 6 && this.totalScore <= 10) {
      return 'mild'
    } else if (this.totalScore >= 11 && this.totalScore <= 15) {
      return 'moderate'
    } else if (this.totalScore >= 16 && this.totalScore <= 20) {
      return 'severe'
    } else {
      return 'verySevere'
    }
  }

  resultMessage() {
    const severity = this.#assessSeverity()
    const translation = {nomal: '問題なし', mild: '軽度', moderate: '中等度', severe: '重度', verySevere: 'きわめて重度'}
    console.log(`あなたのうつ症状の重症度は27点中「${this.totalScore}点」で「${translation[severity]}」という結果になりました。`)
    switch (severity){
      case 'nomal':
        return '今のところ安定しています。\n自覚のないままストレスが溜まっていることもあるので、ときどき自分自身の生活を振り返ってみる時間を持ちましょう'
      case 'mild':
        return '治療を要するレベルではありませんが、気になることがあれば医療機関に相談してみてもよいかもしれません。'
      case 'moderate':
        return 'ストレス反応やうつ病の症状に心当たりがある場合には、専門家に相談してみることをお勧めします。'
      case 'severe':
        return '何かこころに問題を抱えているように思われます。\n身体の病気と同様に「早期発見」が大切です。専門医に診てもらうことをお勧めします。'
      case 'verySevere':
        return 'こころの不調のサインが多く見受けられています。とても心配です。速やかに専門医に診てもらってください。'
    }
  }
}

const main = async () => {
  console.log(firstMessage)
  prepareInput()
  process.stdin.once('data', async () => {
    for (const item of items) {
      await select(item)
    }
    const severity = new Severity(scores)
    console.log(severity.resultMessage())
    console.log(lastMessage)
  })
}

main()
