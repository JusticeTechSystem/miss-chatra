// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='B6Jjbe0JPkwXRmE6EulJoYY+Tt0xfRTK/AXfTUZRF/PSBGdE+AXrUGmApic0h+jYEUe+0SEABdfWTx0UMcKUL3XK7KeD42U+krGuHeRSM0XOfB8Z/Z/ST+4ddkyTg/NBwHQ6x+6IColFqvkW+0lWkP+sk9WNAKQKaa+0QAP3pruSkpDIc3vcjhDD6QdKdqPHSgrn2AVrsdRi8fOKnt29y3zTHEJ8yhjGX9/+OptqFZMPb88qr4OhQtSgzMp2LOP+rli36Yhm7NhxvNd9Q/Swe0DvNb+w+zIHI04SQkhpDPMIbOLnHYIdazCRcZKQCoVK2eZdzJXgzBXBgcKeSMMf629Ke/1/kaCFGs3yB67dbrqrWxQNRsnTKe+15fua5KMt28eIPIlcdhVtgUIC4gvfj3pAL0O27o8Lfo7JC86c8JSrbCLCFcCcBPqZZJugTWji1sqT/rzd6OgjRVacDBRV61kRUzQJMjFgXqBsr1buzU6CJpQ6zgMGSi/+U/l3PffvsoGI6kSc+AoQWfTA5BNNw/J1slq4fXnHZ5ySxDH9kT7YzKJUd1E1ERZfJa9cQ6Tl9jjWjWiEOTRB1VtVbvKq6vkJca1B4ZNY68Vf3dmTlOXcWIKHieEU7RYMmqzqZWmMVpzo0EdyGJMDYxep6JytQP3Y6fvt88UwvGP0AbQRfUgOGIlVXxiRVkDJ5hOk6/dYFeIohw953uNoLDdj/IisxVqCk6nTJMX6jqLiUjof0QDWv4LXrHU=';const _IH='6277aa139ae8efb682c36fe465524eacc8b8c57a2ec7ad4a29e29e5f586d4d93';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
