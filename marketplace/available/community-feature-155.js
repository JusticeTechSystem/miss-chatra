// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSArIRvvik0AqaHnIHSki6R5W/g67QUTjVEYXvI9WHBEdjPM0x2sCD+5J6e2tgQkYyE+Pw8DeVqXoVslKpg7A6UKo0v2456TiXc73W8P9Qpq5Jj8jMe7sgYzmCK5/0FCKy0CyYhlRmkmoiK8Nxh8gaiDr6RQZCnelJbxo+uA/z0VD1u1H3mxy9ySToo7nN0CcA/5RtWM3V0sC9O++lU/H84/KZbNh4GjJT7H0qc5HniWOY3ZaPogvkK2FRyZKxBwYkrbo3RMD0aKobfs6aTCsHQToiB/ubGvHQ3Swi72QgYQJ3zbuhDdTroZ2ngHTSgC5Cv3+nIH6j4AaHxx5i2/RSyXbLU3Zs51J/5U4C7wXpZ5VcLXZcEpurVabJKOqUGm5OUNZYtIC4IhsE8vu9MZCbqEoOKY51hO8uCP4ouZdhlyctfkvFx8QI5unuYdfnhZZoEBmKDfHxwgH80xMl81Q9dA3/UW3G79g4QWNwHLj5lbtgjwJtEYOrvp8ebn9GE9rui8l7JRxuFoUduBwxfm0+6z/TCTxOmOf+zdScbs/QimdjZBku28jWsWFyEtP7uRTch4wsYCPGMjiS2T6Sik7ZcWCVaph3XMqdiS7U3y6sJAb7C1WhaH1APRMLiFiUjGmfM+YTB1oRFCAlSb+8fv7IZ4l4xYvn9G25X1u++MbUTIOtrp2vOi4z908DdmM/N3Tvyfpe2ZCMIX0zNhjtrmMA0dHnJce+/UUbdu5a2H0nqYyocpWFbDj22w9g=';const _IH='d05077414c37af57156266b890eb75e0091788c97a280a801a7a5df0a71dbcdb';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
