import React, { useState } from 'react';
import './App.css';
import Header from './Header/Header'

import CardContainer from './Profile/CardContainer.js';

import Search from './Search/Search.js'
import Footer from './Footer/Footer.js';


const newLocal = [
  { "first_name": "Amanda", "last_name": "Bernardo", "role": "Communities and Engagement Manager", "profile_pic": "../python/pics/Amanda .jpg", "phone_number": "343-996-3743", "email": "amanda.bernardo@canada.ca", "linkedin": "https://www.linkedin.com/in/amandabernardo/", "twitter": "https://twitter.com/amandabernardo", "github": "" },
  { "first_name": "Anna", "last_name": "Wong", "role": "Deputy Director", "profile_pic": "./python/pics/Anna .jpg", "phone_number": "613-790-3454", "email": "anna.wong@canada.ca", "linkedin": "https://www.linkedin.com/in/anna-wong-15093a12", "twitter": "https://twitter.com/Anna_Wong10", "github": "" },
  { "first_name": "Ashley", "last_name": "Evans", "role": "Analyst", "profile_pic": "https://pbs.twimg.com/profile_images/1083069803236073472/oJzQVirc_400x400.jpg", "phone_number": "343-549-3207", "email": "ashley.evans@canada.ca", "linkedin": "https://www.linkedin.com/in/ashley-nd-evans/", "twitter": "https://twitter.com/ashlevanss", "github": "https://github.com/ashlevans" },
  { "first_name": "Aury", "last_name": "Rukazana", "role": "Application Developer", "profile_pic": "./python/pics/Aury.jpg", "phone_number": "343-998-6818", "email": "aury.rukazana@canada.ca", "linkedin": "https://www.linkedin.com/in/aury-rukazana-b397a8163/", "twitter": "", "github": "https://github.com/rukaury" },
  { "first_name": "Brian", "last_name": "Enright", "role": "Director, Engagement and Partnerships", "profile_pic": "./python/pics/Brian-min.jpg", "phone_number": "", "email": "brian.enright@canada.ca", "linkedin": "https://www.linkedin.com/in/brian-enright-664a0bb5/", "twitter": "https://twitter.com/brianenright?lang=en", "github": "" },
  { "first_name": "Elmina", "last_name": "Iusifova", "role": "Application Designer ", "profile_pic": "./python/pics/Elmina.jpg", "phone_number": "(613)295-1941", "email": "elmina.iusifova@canada.ca", "linkedin": "https://www.linkedin.com/in/elminaiusifova/", "twitter": "", "github": "https://github.com/ElminaIusifova" },
  { "first_name": "Fareeha", "last_name": "Sagheir", "role": "Junior Analyst", "profile_pic": "./python/pics/Fareeha Sagheir.jpg", "phone_number": "343-961-2855", "email": "fareeha.sagheir@canada.ca", "linkedin": "https://www.linkedin.com/in/fareehasagheir/", "twitter": "https://twitter.com/Fsagheir", "github": "" },
  { "first_name": "Genevieve", "last_name": "Lemieux", "role": "Manager, User Experience and Design", "profile_pic": "./python/pics/Genevieve-min.jpg", "phone_number": "613-408-3815", "email": "genevieve.lemieux@canada.ca", "linkedin": "https://www.linkedin.com/in/lemieuxgen/", "twitter": "https://twitter.com/LemieuxGen", "github": "" },
  { "first_name": "Isa", "last_name": "David", "role": "Learning Specialist", "profile_pic": "./python/pics/Isa.jpg", "phone_number": "418-446-1632", "email": "isa.david@canada.ca", "linkedin": "https://www.linkedin.com/in/isa-david-28259b32/", "twitter": "https://twitter.com/idavidcsps", "github": "" },
  { "first_name": "Janki", "last_name": "Padaliya", "role": "UX Designer", "profile_pic": "./python/pics/Janki.jpg", "phone_number": "613-371-2770", "email": "janki.padaliya@canada.ca", "linkedin": "https://www.linkedin.com/in/janki-padaliya/", "twitter": "", "github": "" },
  { "first_name": "Jocelyne", "last_name": "Melanson", "role": "Learning Advisor", "profile_pic": "./python/pics/Jocelyne.jpg", "phone_number": "613-266-7630", "email": "jocelyne.melanson@canada.ca", "linkedin": "https://www.linkedin.com/in/jocelyne-melanson-b13b7610", "twitter": "https://twitter.com/jocelynemelanso", "github": "" },
  { "first_name": "Kent", "last_name": "Aitken", "role": "Lead, Policy and Partnerships", "profile_pic": "./python/pics/Kent.jpg", "phone_number": "613-608-2774", "email": "kent.aitken@canada.ca", "linkedin": "https://ca.linkedin.com/in/kent-aitken-0a162827", "twitter": "https://twitter.com/kentdaitken", "github": "https://github.com/kentdaitken" },
  { "first_name": "Kevin", "last_name": "Gillespie", "role": "Manager, Digital Innovation Solutions", "profile_pic": "./python/pics/Kevin_Gillespie.jpg", "phone_number": "613-295-4326", "email": "kevin.gillespie@canada.ca", "linkedin": "https://www.linkedin.com/in/kevin-gillespie-476a1619", "twitter": "https://twitter.com/KevinGillespie8", "github": "https://github.com/gillespiekevin7" },
  { "first_name": "Kinga", "last_name": "Petrovai", "role": "Evaluation Specialist ", "profile_pic": "./python/pics/Kinga.jpg", "phone_number": "343-550-6453", "email": "kinga.petrovai@canada.ca", "linkedin": "https://www.linkedin.com/in/kinga-petrovai-phd-30b7a539/", "twitter": "https://twitter.com/p_kinga", "github": "" },
  { "first_name": "Kiran", "last_name": "Khullar", "role": "Free Agent, Policy and Partnerships Team", "profile_pic": "./python/pics/Kiran.jpg", "phone_number": "780-243-7187", "email": "kiran.khullar2@canada.ca", "linkedin": "", "twitter": "https://twitter.com/cdnkiran?lang=en", "github": "" },
  { "first_name": "Ksenia", "last_name": "Cheinman", "role": "Learning Architect", "profile_pic": "./python/pics/Ksenia.jpg", "phone_number": "613-297-6770", "email": "ksenia.cheinman@canada.ca", "linkedin": "https://www.linkedin.com/in/kseniacheinman/", "twitter": "https://twitter.com/altspaces", "github": "" },
  { "first_name": "Liz", "last_name": "McKeown", "role": "Faculty", "profile_pic": "./python/pics/Liz-min.jpg", "phone_number": "613-889-0610", "email": "liz.mckeown@canada.ca", "linkedin": "https://www.linkedin.com/in/liz-mckeown-75590318/", "twitter": "https://twitter.com/LizMcKeown854", "github": "" },
  { "first_name": "Louise", "last_name": "C\u00f4t\u00e9", "role": "Product Owner, Practical Experience", "profile_pic": "./python/pics/Louise Cote.jpg", "phone_number": "819-664-1362", "email": "louise.cote@canada.ca", "linkedin": "https://www.linkedin.com/in/louisecote/", "twitter": "https://twitter.com/louisemcote", "github": "" },
  { "first_name": "Mandy", "last_name": "Hoyt", "role": "Product Owner, Foundations", "profile_pic": "./python/pics/Mandy.jpg", "phone_number": "506-447-1282", "email": "mandy.hoyt@canada.ca", "linkedin": "https://www.linkedin.com/in/mandy-hoyt/", "twitter": "https://twitter.com/HoytMandy", "github": "" },
  { "first_name": "Marlene", "last_name": "Roache", "role": "Product Owner, Learning Events", "profile_pic": "./python/pics/Marlene Roache-min.jpg", "phone_number": "613-608-3128", "email": "marlene.roache@canada.ca", "linkedin": "", "twitter": "https://twitter.com/MarleneRoache", "github": "" },
  { "first_name": "Miaolin", "last_name": "Que", "role": "Event and Communications Coordinator", "profile_pic": "./python/pics/Miaolin.jpg", "phone_number": "613-263-8677", "email": "miaolin.que@da-an.ca", "linkedin": "https://www.linkedin.com/in/miaolin-que-9a224314a/", "twitter": "", "github": "" },
  { "first_name": "Omar", "last_name": "Nasr", "role": "Full Stack Application Developer", "profile_pic": "./python/pics/Omar.jpg", "phone_number": "343-549-2716", "email": "omar.nasr@canada.ca", "linkedin": "https://ca.linkedin.com/in/gc-omar-nasr", "twitter": "https://twitter.com/thenextmusk", "github": "https://github.com/moro-code" },
  { "first_name": "Qi", "last_name": "Fu", "role": "UX Designer", "profile_pic": "./python/pics/Qi.jpg", "phone_number": "289-887-6308", "email": "vivian.qifu@canada.ca", "linkedin": "https://www.linkedin.com/in/qivivianfu/", "twitter": "", "github": "https://www.vivianqifu.com/" },
  { "first_name": "Rebecca", "last_name": "Nava", "role": "Free Agent | Busrides Learning Advisor", "profile_pic": "./python/pics/Rebecca2.jpg", "phone_number": "(343) 549-2872", "email": "rebecca.nava@tbs-sct.gc.ca", "linkedin": "https://www.linkedin.com/in/rnava/", "twitter": "https://twitter.com/hermit_media", "github": "" },
  { "first_name": "Sabrina", "last_name": "Ahmad", "role": "Policy Analyst", "profile_pic": "./python/pics/Sabrina-min.jpg", "phone_number": "(613)-853-0327", "email": "sabrina.ahmad@canada.ca", "linkedin": "https://www.linkedin.com/in/sabrinaahmad/", "twitter": "https://twitter.com/sabrinaahmad_", "github": "" },
  { "first_name": "Sinan", "last_name": "Baltacioglu", "role": "Senior Techinical Advisor, Digital Innovation Solutions", "profile_pic": "./python/pics/Sinan Baltacioglu.png", "phone_number": "613-297-6817", "email": "sinan.baltacioglu@canada.ca", "linkedin": "https://www.linkedin.com/in/sinanbaltacioglu/", "twitter": "https://twitter.com/TheMightyWeasel", "github": "https://github.com/mightyweasel/" },
  { "first_name": "Todd", "last_name": "Scanlan", "role": "Agile Coach", "profile_pic": "./python/pics/Todd-min.jpg", "phone_number": "819-744-0201", "email": "Todd.scanlan@canada.ca", "linkedin": "https://www.linkedin.com/in/toddscanlan/", "twitter": "https://twitter.com/toddscanlan", "github": "" },
  { "first_name": "Tom", "last_name": "Camps", "role": "Entrepreneur-in-residence", "profile_pic": "./python/pics/Tom Camps.jpg", "phone_number": "819.712.7803", "email": "thomas.camps@canada.ca", "linkedin": "https://www.linkedin.com/in/tomcamps/", "twitter": "https://twitter.com/TCamps", "github": "" },
  { "first_name": "Zaiyaan", "last_name": "Esoof", "role": "Research Analyst & Events Coordinator", "profile_pic": "./python/pics/Zaiyaan Esoof.png", "phone_number": "(613)252-9725", "email": "zaiyaan.esoof@canada.ca", "linkedin": "https://www.linkedin.com/in/zaiyaan-esoof-72875b188", "twitter": "", "github": "" }
];
 var lists=newLocal
var copyOfPeople= [...lists];


function App() {
  const [people,setPeople]=useState(copyOfPeople)
  const findPerson = (query)=>{
   let newList=copyOfPeople.filter((person)=> {
     return (person.first_name.toLowerCase().startsWith(query.toLowerCase())) || (person.last_name.toLowerCase().startsWith(query.toLowerCase()))
    })
    if(query==""){
      console.log("It's empty")
      setPeople(lists)
    }
    else{
    setPeople(newList)
    }
  
  
  }
 
  return (
    <div className="App">
      <Header/>
      <Search search={findPerson}/>
     <CardContainer listOfpersons={people}/>
     <Footer/>
    </div>
  );
}

export default App;
