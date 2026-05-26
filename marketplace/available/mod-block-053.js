// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GUGJEtsAo1RydQMQK7i6JXdXFWAB5f/cwHPLT7J9HDfmAw9QjE+N7jmFp0LjxxDRAm28pJIywJKrx/m1AFDLVkeTeYS2ODlOPdoMLxWqgZ+dmKrzcJdUso3HStzb1JJnle8pRlqJJWlCSUAL8UU5+8eIbrw5px1bfK8FPZyWBnXXwRO/YjKKJtxaShIHH+dDvFuhCTXPcvHrzorF52LeTWTd649Y4mTwCrrctSpEp9qODjYTd8OXauNJdgOFzkFK4ADeKjNW9u3e5YONNbH4lnYcilQPh1qbXwcyeO6yfxOskbE54NJuVG2HDH1sQHwDwRjmGlTo5M5MgKdLog6A+3JVak29UVkGb2N+ulpHkMAVWMO+Y96S8KEjcrrKEUa4VCR8Xz8klo39XrH6NwjK652/2eS+xrJcLPupIjmbHBXvBgwJqql16SilDY001V2ACXwUb/8Z1k3SX687+/yN0eucRJ18ocnlSY0NzOZ/I7Zr38SHuZ0RYmmYSr5YZ6pjBHT13pzZJHlbe6qYxa+5/SG+hjTwwaefvDoOgGyuzfHf4/i0WT6zfVOaSq4DhR983qBWIJTzcJsDMx9U0eZnY80LaZpXpgyfPTXBWzll2EKx9xS1Agz9izVKFx0gapo1Nnn2o7Cu5fu9rd249qfJtzMciGZTzuKJj57CePFloF+1dO95VCYyX5uadhhxVmGhxpFa/tonquKmTAQd951qF7q4f2//iFIrCpIcpry1dz2R29l2ldvtb+WGTgJ810qQSJOyFMBUEc4AhEIbUbROKIMy2UJ6PdEjrdWrg6ryskzvscQeKB1KR/wevi9BIs9mESn/gr13j94f3k4IoM9rWVG2gIUcLwrIcJrDZtS+wNwQWTpjwn6DgJhjkUpuFJoSwX1fVPdcMuPV3AJEpEArsNyO+hWIR+wB1IsnZ1AdqK2xodenUhuxSh3PwSRxhwssQwuZWMl8GV5jIjrTaFtU+z65EB1FiynisDvXZYw84+as8/raZxyRUITSkHQ27dhRDLgzYnBebMo+uL4DAJCJYSDhXeIPmlvf9xnMuU3vWZiL0EnOxYjU7rQu645yN2t69pLky+t5IEU31XkJXqesotARY0c7S6cYkusuD+3rYb9TgdoDoRfgU2HmMbKJ1H0SEt3HBL+kGfWv5YdM8oI1QbgiB8EWfUmIn2g4XlEhg8OnO109z3GBS16VXAlvCh1+tfbsUUzicT7k6G4nxov6SaxxsP10qvAniGw035OXXGAPWCwOfBnYVn2sgJO9r2meuRfdaFvvkWo+WXOanDNF1P/7b1IhbjH4VoT0qY0gPSDcipjByH+uCczl2Co2wR3lHTQKuDFP6pz+gF8RkznrtJRMIR8oxay+Aw==';const _IH='f67906a1bfabf59dd99561ce7bf95fc3ea7bc0b31db21b58fc7b4b81e950ea78';let _src;

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
