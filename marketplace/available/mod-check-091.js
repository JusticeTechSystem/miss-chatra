// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7tlP202e7TsJcmw7t14bKra9EHHG92QNZhPMgOo2trzIQvwMSHdyqghnrOaBdQG4Cv4Cgh6D2YgWdbeu5f195ZpcIGNqNb4TV9RwzOxs8t6NkQ79NFIi6WB3zFgJ9KwshfI6MqZoCYknUEIlmwaYd6oLN5SnIgx+q8gc2LaXFcPRTHVzMjTudU3I2Q6OrPObtkEs7Yxp0Myi33fHE4opwWaHsUnhD7C7GOlcgcurU+S7g/wqtln1YMj79JuoZGoQnijEiRcEuWPTbAWi/ytw80bha8I0NWEPOCBvpTl3gU0pB2ykXUGjH1Htvd9qnxFmdTN9f4Jj99FHR+CnnKq9u6A4VyqiHrqcQI0bmNg1mWtp8ltKVDMj2XzxOAeHRAScBQpUGAQFsPdWiPOH0Ia3+d9kGUU6myIr0DyYDOvA5pBFidYe74GrEN4bbrCXzTPdRgya7G/34lpY3/NzoIXLiAVT+PbSoVgE56PwvaTlhLr5p8On5a6rdTaSkb8u4Whis4vjzSDn/16DBfU7HczaiOTqP3CiLyMfOOXkkCAmBaX61rOxgs+gSJ3orBhqz3884uQdbieNPfbaAjdcggcs5XgxhbJjJX0nlcT7UAopjKZDTCA/Wp0E+cls5972XZwyyc6If26/sde0AZtBg2jBJ2LgYBA1BjW3VIc3D0IjRDcPufGZfLYWfvGNf10PCeKYC4zh7z+bzGdQ8Je9LOLOYiWqs2MSeAEMn7qNgnrOxJn+fnb1J8BjezwgNF7cz4zd7Vmvd8ycj7R6vvbb2iJ91y8QiIglqCurl9+MPg1BNZ3mn7ihYJITjCLQohx9uofnQ/DgpOcSKIn1Wu+vDLF0G77TWcct5C7b+OjbVDRVNejxF8s1HpRzMJ6Ib2swtbnPEmUNOfCf8Vlk4JDHm2nPBsdUDmVyqEdIvBMzS4fRHlTcMkF9ip4BDiBT9R9YxRYVkTj/dyVEEetEljEjEskJcORKi+dbRRC/a7XpOep25NV56yi5/7pLrnT2bX/UA5TwVHt8SHRk9/tAwOtLDmVSpLXywvhRtAgVMVctqRKq6AnEyCt6bdsamrj8BQhm44yuwHY0G9ONvc2l8UUyE0nZhFmjG1TbNwYM+aMXbR8QR023n/MhO4yLNvXdcNT00CDdeaqBqU5Sle6MaX1klvoQoUBnykayddc1po+TsxmKAqp93/J82tWqHPrlZGgtwARpbk2dbjs52jjAAa5DNNsZTEWCtaAUXMUcHtABE1BInY5oJsp+6tfyp88d0nDunEVXqlml+ibtX5pzY0SJNTBbJrkB5okaj2s/+DlRYc/4hvbEUOg+6qFopra4+fm8F8AVxeZGD5HxuLKR7L4rkjjLwyhra8wxrggTYA==';const _IH='8cf100d9330b7b21060d6762ea3348659ec826a50e3029bd08e8583c0a38c431';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
