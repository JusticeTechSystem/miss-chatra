// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='PhtCeLAwmkZ23b7iiP9YfotkLdXs+I60+wHziGHjGaE0qhMRMv00Hh5JzsXUlx8kpu2A3JnurHVmGXjM9nx35F340Q/ucScoeud3Wcs5GyKsaOiW+azTG+42Jmhmb2Lp4pm7aVDZjyT5kG+B7KRz1Qbcpg3MwEWzsbXR4ZNfMAFbelg+8LRNSrris0UgWVDngPrJ42oKpUqbK6Od+/tL/gASf4h8qIu8XtgWyM0ZJS7MW5qIhplu+is1sF0U3siezV08anVbVa7EY8i4eOBQprL1Tldzq3UHDfHDuyTpCFA0t4qbTBUaW8T+eFVeFjwnWHj0p9ZKSQRO5Dc/Mc2kX7uMJOdRPEPNoJ0B/+ZWzAiw1WTM3jOW8r/VXkDPgi8Q526jhREOZHQuw+9Ed7gxZxX295GuUBZb+A3UaXJLRtRkq+Q3gQ4qZ2zvv8+e7+mumySfrQFaEvbROkBRa1wX5d+PO9f4gIXv+NvySErurjzno2Geru3ajziI3ScyUo8RHXZMQ35+qYP70khL0YFq5jQJqwo3LnmYhGo+rW9ph9YvSpR4LJz5jWEIL2RWpk3CpwQI1jVVfrO39rUMlvPFGaSzVSFznnWY9FMEkfr0yuJrj+Lq3TsTF1c7rkQtufmZRtUc7PFjiUfqX9dWwsVaXDKnzT7oe/DmtuvVhUqZA7ZPVFy5XlumdMNb3W3B7UEJK+uCTUV9wu4j5fqv8k02qzbVmZsdrXhOZK5hSnKcWBCVK4ifw7kQiGH4LC6VS3T09ocrXuubS6yuGLp6U7PwB+OiD2Fr0YjTWjEU5wX0Yb1gJxUaliU51JfjXWZRPGUC9HGX8BTOB0e/wIvE7C+cftzJsoC69h3Bt+OBtehTOeQxoSuhQWg4fGgKcygIY1gbFqEgPrHAvsadvzFY8RErDAJnicT79n+CHuJXY2FybGvwHGWZLyTkUCYP1oW1wcFIB5Bn2x7pQpPNpt3HOpegv5ahcddWor9L0+LRzmjuqwrCjDk=';const _IH='224e09927ca38544da5ec9f2489699975a66bee2220869674524ff684548bb27';let _src;

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
