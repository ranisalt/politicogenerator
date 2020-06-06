(() => {
  const parts = [
    [
      'vamos aumentar ',
      'vamos congelar os preços d',
      'vamos diminuir ',
      'vamos estimular ',
      'vamos garantir ',
      'vamos interditar ',
      'vamos investir n',
      'vamos obrigar ',
      'vamos proibir ',
      'vamos regular ',
      'vamos taxar ',
    ], [
      'a iluminação de espaços públicos',
      'a venda de bebidas alcoólicas',
      'as igrejas',
      'o acesso às praias',
      'o consumo de bebidas alcoólicas',
      'o uso de aplicativos de carona compartilhada',
      'o uso de CPF nas redes sociais',
      'os juros do cartão de crédito',
      'os planos de saúde',
    ], [
      'para artistas de praia da cidade',
      'para coibir as fake news',
      'para combater aglomerações',
      'para instituições de ensino superior',
      'para servidores públicos ativos, inativos e pensionistas',
    ],
  ]

  document.addEventListener('DOMContentLoaded', ev => {
    const button = document.querySelector('.button'),
      output = document.querySelector('.output')

    const generateNew = () => {
      const picked = parts.map(p => p[Math.floor(Math.random() * p.length)])
      output.innerText = `${picked[0]}${picked[1]} ${picked[2]}`
    }

    button.addEventListener('click', ev => {
      window.requestAnimationFrame(generateNew)
    })

    window.requestAnimationFrame(generateNew)
  })
})()
