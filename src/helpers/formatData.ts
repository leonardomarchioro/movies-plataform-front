export const formatData = (data: string) => {

    const mouthNames = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    ];
  
    // Divide a data em ano, mês e dia
    const [year, mouth, day] = data.split('-');
  
    // Obtém o nome do mês por extenso
    const mouthName = mouthNames[parseInt(mouth) - 1];
  
    // Formata a data no novo formato
    const dataFormatada = `${day} de ${mouthName} de ${year}`;
  
    return dataFormatada;
  };
  
  