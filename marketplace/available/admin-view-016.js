// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ny1TV+d1vAw//fBknjkSkMU8fROOB2RXomqUldM8EGx1PRDGESeGc8W8X4IDqXakGG7EEnrxvCkAW9Tq9/MV9i2LcZK1EisucrJ7oVZLH1F3IT/OYAusdTJFiaIVzsesO90+Ecwet7ZzYuocr7TV/NGGI/Arx1dbK0Fg8bLyqw2YAsgaMkun1A4kRfI9Pqn5WYOUHny1U0gKu4j9Q1PPjG+Bz9o1wm65LKqgh7qObAjxhGGon9HeCSfJSop0SIgh1VPd7y+e+YQNGkQxb6P4hesMaAEL/BjGphK3168ZYt3Eh19ahjvPq5qLaan9DLB6o+mYJ1AD+jCYXloDsxqemErg/mYIDDdSjDRrWjc3DP26JswdpoMiyPBnOE7t+TPl+FXrQH6zhSXufDkHdHd8IlubCI04DDrrfAJmY04t7yIw5EDxLln8nafegxXcWuj4/2tsvBTTZ0bA1kVp9udnGvrw+jnol7f+82VdP0OmkM6wNTplrd6pGtgqlkO+k09bVvAf56yNE0RyzdKXylUnTPSDeC0juT2I8sVIZ8OKbW6Tp2fy4Hqd1xFugONYpc4ix6VHoKPxQJtpJ34ntT46uG0kOQgUbkpgiBD4G5ym+aRZx3z6v3/S84JtRQoqqVdksMBRwEQ62jEH9YWhU0Rgp6HhEwU/KTAxFYSt40mkHw4v6eiXL6hMgg0eAeK3uKaRQQwzJVgjNA1Uqim7ev/iN8S9Q4afqNlfOYX42UlxPU0LEq1k1i36v97/gxXS/lnWsuugT5KQwBCLLZc8sE97Wj4Qhi79Apc4gzqJdSUAx2Lh6psEr8yURxUoyD1GFqiDVeehv7Qc9oiuivNl6/5tJCbSRjW1wDuYnRGRQk3OInwnXY5pGY175uKmnF9YkT/m0i6a/AeE2m47GQxp5KUSPLDChvMYrNoYgEoAWS2VYZUmEOtrFHHOku9K4KYOSdeYAG01bZw9Pz55C8tQpjrHM6OG7GiEX5aulLVZHv/3tg==';const _IH='8da50c2db8c688a76deb0d3b89330ab0af599aa0a85ca65b32aeb34f30660a41';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
