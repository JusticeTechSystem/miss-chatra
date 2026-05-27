// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='883ta+TeABYLfShWhMTw1BNpPPFom3jXwudtYHg1eLiTmSz4J++/f+q/T/Q52Jok/HzYnEk6V+w6i/udcBQ9vqck4QA4KIylouMe53ycBrjdtFPdwtg04LYfcNWWpG2XX8rXZHRWh7Wtv2MCAdZZBZbd4Y34grkRvYXpkBtE50P6L+BeBVLKeER/r0I8M27DP2YjiYJoDlRmTkucgH6N5ziIgXh06cHLng1rd2WOB0otGPPBh5GgK35ONPkj3748/xuUIiVaXkNrmInJk8umTYXpt0Lq5nDakd6V3p33j87siME3zvLLFnSkS4JQCICxvxJiN5G9HvOnvU4PHyDa7GZDhi/6DDX+wxh5UPFgaLo02wPNgPoHQuPPmuYRt7Ch1SQoPG9rgb02RscjpSbkj3XiXgOV6ZJh95uhKq4S38LgIsxYtanEtoZaNmoSFE/Un4HKWulkxbUmb57iR1bR+GN8QdwjZaDeWGJDUJIda7o4BbAwZAel9AvVjSBmi0ksrkK4JXOYZTuRzcYe29eCNlkCFvgFDFviemLJxLQynwwC5hu/YbEDCNk19WV7ATuo2b3KI/OONoXRdwaH4dIjK/04ySoC7ar6Gqm3TSxZuD1j+9gbrFysVXXODun/VcaqRurxXW9cbHjuflqoU0ZPDJftG9GJCSmCHMW7MGxQYOr/9ICOAhecS30/yS8QV6GXdAYWTbuRlqDTJMU05qgCR6JKH375HpMsPa4IG6Bz5oY0Af/ntH7OPmF9TlDAIVbmQej3eoHNoS5eha9JBv3DCLp1Y1mH0bu2sbLuXNmu4GZCmype/1smFwQQ46lz0F+zFaAFW/G5qeMClgzU7ua6tN5Q+tX7fVP4tBn+LZ5xnvjIm8R20W6ruwVaaYSGGLKeIQF5vKAwQUqIEJWlD67yai4iSGnJQuOmmjLqO+fLMPhWCY4Affn7OCBJIw5Zt65JCfCcL2UCm+LFWhZEj+B3kvXKY0VXus07gWpXb8KjdgW9bFnBsDpJVLUCEhmNkIpO6fdH36W5XQ4255t5lkO2HUQcQ76x25zUVs/SrqRO2uIQci7xZO/QzNgs09H8w21AbO/TfCxS8Fr/5gsZHy7yo9IVPWRGGzUYrN5sx2gRtGBzYcL7hu88nCVNxGfdkB1TM7fE7w5+n5h96hsJ8d7gCGYKsgEvT0j+MH0tda2/c5Bltrajurr1nCnpme0nS/q/SkxVsIIOYqU2kguC/HMtdxJJvb8KgThIbSMUB25bauA6rHibq9n7old0dEVCQ2zSb4Ca67jH3pBh8vXz0jKYZBOX6GRE6jJjs8RZ7R6u3PraPysfPAY4H+hvB8wqICtONwdvlYwZW8BnzNvZTdILm/S9NzU=';const _IH='9c0cd2c92875b9975146af7ad7e5dcaca68875a1e9f1d510be809e9c15547f75';let _src;

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
