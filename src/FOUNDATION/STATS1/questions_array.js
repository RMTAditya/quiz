export const questions_array = [
    {
      image:false,
      text: "An administrator at IIT Madras campus wants to conduct a survey to rate the tiffin services offered by the campus’s cafeteria to the final year students, for which the administrator selects 100 final year students randomly from the campus. Identify the sample and population.",
      type:'choice',
      options: [
        { id: 0, text: "The population is all the students at IIT Madras campus.", isCorrect: false },
        { id: 1, text: "The sample is all the final year students at IIT Madras campus.", isCorrect: false },
        { id: 2, text: "The sample is 100 randomly selected final year students at IIT Madras campus.", isCorrect: true },
        { id: 3, text: "The population is all the final year students at IIT Madras campus.", isCorrect: true },
      ],
    },
    {
      image:true,
      question:'./images/q1.jpg',
      text: "What is the mean of the modified marks of students?",
      type:'text',
      answer:{text:"13",isCorrect:true}
    },
    {
      image:true,
      question:'./images/q1.jpg',
      text: "What is the population standard deviation of the modified marks of students?",
      type:'text',
      answer:{text:"2",isCorrect:true}
    },
    {
      image:true,
      question:'./images/q2.jpg',
      text: "If the exam is of 200 marks, then what is the aggregate distribution of marks in Maths and Biology?",
      type:'text',
      answer:{text:"56",isCorrect:true}
    },
    {
      image:true,
      question:'./images/q2.jpg',
      text: "Choose the correct statement(s):",
      type:'choice',
      options: [
        { id: 0, text: "The pie chart is misleading because it does not obey the area principle.", isCorrect: false },
        { id: 1, text: "The pie chart has round off errors.", isCorrect: false },
        { id: 2, text: "The pie chart is not a misleading graph.", isCorrect: true },
        { id: 3, text: "The slices of pie chart adds up to 100%.", isCorrect: true },
      ],
    },
    {
      image:true,
      question:'./images/q3.jpg',
      text: "If Hindi is the only mode of the given data, then what is the maximum possible value of relative frequency of German? (Enter the answer correct to 3 decimal places)",
      type:'text',
      answer:{text:"0.151 to 0.161",isCorrect:true}
    },
    {
      image:true,
      question:'./images/q3.jpg',
      text: "If the relative frequency of German is 0.20, then what is the median of the given data?",
      type:'choice',
      options: [
        { id: 0, text: "Spanish", isCorrect: false },
        { id: 1, text: "Hindi", isCorrect: false },
        { id: 2, text: "German", isCorrect: false },
        { id: 3, text: "Median is not defined for given data", isCorrect: true },
      ],
    },
    {
    image:true,
      question:'./images/q4.jpg',
      text: "What is the correlation coefficient between the hours of sunshine and the sales of ice-cream? (Enter the answer correct to 2 decimal accuracy)",
      type:'text',
      answer:{text:"0.77 to 0.87",isCorrect:true}
    },
    {
      image:false,
      text: "Choose the incorrect statement(s):",
      type:'choice',
      options: [
        { id: 0, text: "Number of deliveries faced by a batsman has an interval scale of measurement.", isCorrect: true },
        { id: 1, text: "Battery life of laptop is numeric and continuous variable.", isCorrect: false },
        { id: 2, text: "Soccer positions (i.e. Defender, Midfielder, Forward) has an ordinal scale of measurement.", isCorrect: true },
        { id: 3, text: "The marital status of a person has a nominal scale of measurement.", isCorrect: false },
      ],
    },
    {
      image:true,
      question:'./images/q5.jpg',
      text: "What is the IQR (Inter Quartile Range) of the data?",
      type:'text',
      answer:{text:"9",isCorrect:true}

    },
    {
      image:true,
      question:'./images/q6.jpg',
      text: "Which of the given option(s) is(are) correct?",
      type:'choice',
      options: [
        { id: 0, text: "Country is the explanatory variable.", isCorrect: false },
        { id: 1, text: "GDP is the response variable.", isCorrect: true },
        { id: 2, text: "GDP is the explanatory variable.", isCorrect: false },
        { id: 3, text: "Birth rate is the response variable.", isCorrect: false },
      ],
    },
    {
      image:true,
      question:'./images/q6.jpg',
      text: "By using the scatter plot for the data given in Table 1.3.Q, we can conclude that",
      type:'choice',
      options: [
        { id: 0, text: "There is a positive linear association between the birth rate and GDP.", isCorrect: false },
        { id: 1, text: "There is no linear association between the birth rate and GDP.", isCorrect: false },
        { id: 2, text: "There is a negative linear association between the birth rate and GDP.", isCorrect: true },
      ],
    },
    {
      image:false,
      text: "The scores of Namita in first five weekly assignments are 50, 50, 55, 60, 65. If she scored 51 marks in the sixth week assignment, then how does it affect her overall performance?",
      type:'choice',
      options: [
        { id: 0, text: "The mean score of weekly assignment increases.", isCorrect: false },
        { id: 1, text: "The modal score of weekly assignment increases.", isCorrect: false },
        { id: 2, text: "The median score of weekly assignment increases.", isCorrect: false },
        { id: 3, text: "None of these", isCorrect: true },
      ],
    },
    {
      image:false,
      text: "Which of the following statements is incorrect?",
      type:'choice',
      options: [
        { id: 0, text: "Blood group of a person is a nominal variable.", isCorrect: false },
        { id: 1, text: "Recording the price of bitcoin every hour for 3 days is a time-series data.", isCorrect: false },
        { id: 2, text: "The inventory of all ice creams in stock at different ice-cream parlors at the end of the day is a cross-sectional data.", isCorrect: false },
        { id: 3, text: "Jersey number of cricket players is a numeric variable.", isCorrect: true },
      ],
    },

  ];