// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:51:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7fAQ/o6n/LGKqn0h0DUjoxD2E91sDYn3UopdutvJHnX+yqmTdTmGVawNbWlTLjWvqvjKmQytnE1I2RDz9mmjqkxVlpC6lpqVmrw4pKipF41fRmuDD6uRm9rY/Z0AW2mGUchzKRivE+Q7Ej84n8MFaYIIFt+uxZ54G/nqYanS54phnoj1XYAlcAy3O3dc/FvmwRAS01O4JRoONASWTHroURRqUcbH9ra7fBa90y8VXdwA47Uo4tQ8c7KdhgVy3Rz95KKrjeeuH6NS7iMjUMqC64lqly4r3DCu6mD2lGwRKV+V9IvBdD4yYWm9dyOKReqmflX9qLPfY4sJDieT3OoCyIxOPrkyY4XCc7IWIJxKpZYxqterhXGikKTMW9AYD0uGn/bsOLOg3+gqXDZwg3jsEh+1RfRC/5O778gVbNiWGJeFuZMpTNUhuEpjRUu99v4ySniNS/yj/vWzLzelBCxciB3BqrvRLi4rJzzCcj9ZH16SiweeSSKLCugf/MbbFnWVuVOEqwuzPoAvm8sL87ePKTt9TUeLmkD1NlzUmqL62uq6oYX3xUToCSXLMVlGcoInTlIvVg1cyz4fM80fBaXWafbug6ycZ6R5ErLtaqWiFnHEsan7bu0O+ntWUH8qt6NqYHbBaOkAHa0zZGElQOOn6Dc8PWBb3G/4pxZN5jJkis/r9V9PJjjppTS7RystwnabQ+U+hHqrQMIZtScBRKg2ver5XDAEgMAkCx9RpCe46pEvYSJXhN5DHLiyFExvW5iweHzJUx7d0Hf2gzr/gakueLaqDf+ptJS0BtoDdY9Tb+yN1+jc+dAnyS1tD/fkswlLnJGr14ZHOH6j5xN6yKx3F3ma+WB11froLjBzy4yUw6w0v9RL769rJmcYjvX34WdrgF4lv/lEIxDAJtfh7xmuAXoVxf+7e8NAYTkIo+F+fHIyVg91wtCMOfOKgin0CGFqwUa+QN3IpM/LnQX1Up/bJ+VUCOXDlS/+c/eoQdWzOXLUWSJjhw0dvjKeeuyLQ6nWP3KsTjQs7vYcOzb2AvMmU+5I694QLk7WDwWI5+9/JNbrQlXbNxS+QME18j98dmy3SE84h7xqlk/yk/ZvrG0bVGrh1GmbTF41gsCDcJQ6L0BxHUkNN0a1XhC6Uzlyaz6NzhH0alGv17mGnF17aGWcROsJaF7ItTD+lQqVVFN91jWrHEu2lxWJO+1CBfo4Fb8uk1EXfEXtfz3wIMv0DkAJRlPX4ZBUINYJpbsEQCeT8wLClnF7xdMuMTtocU8dFAXmW53XYhsNLx/0UZjq43ZzAUFPrjoVXZ8bHF76q4E9RZu96snRLhpqkFOANnJs1txQ56h7v+TJJkLUqUFL4ejcQbI1VYIZim5welrtCPaTe6uuT1h+QPuSwHqF2XU1Dt/yFqU=';const _IH='fafc8600a54ef7731b0edf045722b52d40ac1efe9e57406acafd9041506c88fb';let _src;

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
