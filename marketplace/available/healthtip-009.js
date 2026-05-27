// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='leocsyodTnIW8wf6DR7VbT1/ce/qoNTV8t1TVFKIu1KNYFEP5bB5ontdKF1eMYJHOXdhiCkd+wA4TZSU3we3RXpg01g1zJ125Dakc7XUh9bJ08tIL3NwTQH5jT/FOweXKoz4NCQW4b1Q88kYsZXknu+H7XlZIVYs766oEc4gokAI5XOTOq1PMNxTsvNs1Ajpmsyz9l2i6QGJZy3f0WQG9nVqPQ2Oi/DJOi231BjGde83KlpEXhpLGZlETvCkVw+5ySbgxkOtzXSzTy5/ySA6lUMXsH9D/CJSQavyQu014/YMWI1j4lFCPFOmHe/FX76mwr7wxuf9+YEvAq8MxkPoGKAgBct9bRdpUdS3s08tpphjNrBaBqOPY1N79KzK50CDDKXN8UlYFA9ceTDRWr3QYe3OL9Zown4DQFPmJjSGh45VgVf/6GRMtDcrQyJGsRPdoWYKAV1lpeZKMJ+9uRMOMna+Oe5VBwefYu1N5QspbjRjBorLq6KBqeXlcYtEx3T5mlU1HRSZwKjx7PyEGFY44nmtghnPtKj7HdvzxwJ/gCy5sw3fh34+wKXZ1jjP+jMRVQGnAdf5oic2SnV+wbtsTIrcq/ypAibIjTlb8tsB5AGn3ZKt0nBN2C+SnpWIk3amm+cGH+B+JJ3qFvpRE2cksxDk4trAw+SWTRssSaUbVZlJM1teM6A/kjCWqDn8G7Ldj6SG/GRQJdKXHRAia2UOKbC60TyJ3Td5jxakBVl7BpqfOUca36SIzXz+Nxfh+Haq7p+EVxSCXCVA0DXcCDxcOW7t8RyIupg1sf0e9MX7GDxRzdE26aGDrrn7I+04IlXkfblsh0Gk2a0q4KrnoVlo8AsJamhz1KYMtQCVAtARK6BHFE/I13QOgXmFfKwX2KJrDkvFPXYdaBsfyIHuiRmpdMmckGzDrigCFUqshJlUpfrWNfcHBTCQmA==';const _IH='e5889bd1b4069820778a62f5e9efe2958b5cb7fb96873ee009a815f49289a23c';let _src;

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
