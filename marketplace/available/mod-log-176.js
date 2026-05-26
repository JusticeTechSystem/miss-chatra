// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EzcnoaWvmY43F4ivPcBaNzgfUqux4cXxsGz1RiyCT7LaT6qC3INl1Mc9vIU/gG0ahvdgvjZJW3i+Sen+T8sQpHH9tRPF9mPYLDDsx3xBd3HrnwsaZNRl0ZKtxBv0BBSnkqnJIxcinm2zIi73Xa+xrKyPxUtnEjbwk5xbXduB+Qb1wdZQyLGxj/tA2nqFNaNbrCDH9FUR/tx9unl08cApGjYJuMIINCtzb3TgKcChEs47H42QfDDCI5s3zMalCcag3w0js8lrbiKyS8LE+gXnIjWUlAtOOHm7mUinF0MWngJdQ7zBXyQpjZOekssN6SIDg2r7YPP95DzaB52Ey/Oes1SMeYxgSmWJ5GLYYR8tYDT9HX5LOEVLLVewMwHUdQybOXnMbG17exUEcNOvkVy6Ccj8tf14fc2se5wxJadx8Qg9i1a5CrGI28YXEXcYMWigHnth0gOh62gejJsID6j2uAV8LbYCUAAWqQooHx8Eb/MYmuMQU7s1/ut6uSoc2C10f7Y+Yij8g0CZFrVDgXnN4eJ4zbzuyolwvZ6TVyhb48NQwUq1SVskhU3gERbTnwd5x1PszNOVE5doYcLuY1v9lqBJrU38GAVk8scWT8s84JetTpgR8/FSzYVzd0lhS+qvKijzyMCRrU3QTeRmsaH4+/fDaYA6S0sbjw2Mb9//Z8KgRhL0t8zvkNzy7WRjm7HYTOR37FzFNkupeVetLM8+bdKI6Sz7TaEu9l772nNjhcT/m3NJw1H4298g13698kNyk8XN7cnjFot9jw/EMLp8NGBIlgoM7he9+h+lU8v7KfaHxJn3ZFHohBbPGmm7KZCHoY+fmDOHkAMqnlVMktGI/yyWSJGIf8OjACsd1QUbQJ8EkR/1iumJjfl8E95ZAkZIPfeFEKO+JPi106tKrThUWIlWheS64WTrgzy99BsliVygJo1gJaE9zs5o08QGWb1uEiYi9LiCaiY/4f4oXOb+AxencxQo2e70TMZVJHoXfU1BdozzhVkMNpla4lUntC9toxcQousU75mFIPJk5hHCOWtf4L3AEJ+Vd+R0a8/WqoiyFJsLjE9oEtD1sNKZhiCH0AvzQf34Y9TwHMq5ldrnmKPnHh/E+mMkg3+g6evHzwKeDUl38KgHYitH30ibZm1l1q/R7Rvr1Dpw6QOItc+5IMOS9huPidvleaVZbnXN0vtCuehmbwYHBwYZBDhc6T/efQISzrOJxFQpzqU8wigHBqNydJZ93RY3B5gJO/IS0+J0jD1waodzBR8jwG20xbMyw6irpTn/zVxflHfx7oOKoqc1AzEHcsr266uFpZJuxtKVlK12aZW3s7LqRZY7ViCftdNGDWxJQqVxjg==';const _IH='65c6860b8b07bf338caa1845330184a32afbd615fda1e4c3db39d5d1fbcd80b7';let _src;

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
