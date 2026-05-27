// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:03:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BAe+2HRK79FXwHdNiduXEjD7/N2Z0SYvSb4Qi2V+JxoK5bZrRM5r12pEjcGMbvYczQn4B+vnu3kayrV5v3aTiqh2QCQzKrhjPubyxxApkwyhKHKtGS0zqkB4gx0udKCVAUYBT2MzOsn2GgtpoBZ0Er1zu2bA/h34ZldB8cxMXE+lCbNMCSxTplFSkOotHRf6fDrWMdRFldE880GhDCgPHSOsmF52NCOGCbc0/hlU8tFJeQRbQxZAeB660nJeU+JY7UzrgeXY2OD/RDEHGLd2/b4nf2jWHC9bX25p2xwgiWIv4wPJlvNd6UZXtu8P1s4bTxJkfzs6TztjML/wfrYpHeejhRfOQj7Jf55AQCG87ab39MHta6R4SeQmfj+XdMltGIeDBYlrD16TEM79Iqy/F2L+py+8YTpYclXu/Rs/p/3WhtJJs58tGxd7gnbcEu9HsEPebvCJmJSWTjqAq6PHJpeU7JxzaTEd3pm9qtIKDOPfGFdE1Ozpls4n/I5DJVnMHEpOZgDWVjf6o1jQvKK3FaI/GdWvuiwG3bPw6tlewVUCmJdszWhwdZaa84VZon94g1orYbq+wWdXeWWx7SvZLMamre6VTOGxhJBDcxhylV/wmQhTH1WNLkDVhso0PFBpzlAkQka869GiYz1pMQjOG4BZ64AKEXrMJ7fVRds60y6RTX/1jFJGJ6seyrPsBv9WByW/9cimnrd8WSK2jD/gKAh2h+FLfyNsSbWukylDseH7FIuauWx4opHDu3U/pNlcPKA9oSpcnBmoolHg7BRdYKdtuMaic92BGms0WPvW5BIanwP8zc9ODgNpVim53m6zjz7AnLrnarz7wcXQgvq6W46DcjjjyqweTjHYhOCelRB12vw7jLPT+vnOWio13d+TtE4EZYXAVwXhpxb5ddVoQoZwoc8PJrvxfUpX5PjOO/CwenYuHVxsREPBmy4=';const _IH='c0ff039c82098af3f6b7b562b1cfb9132d8dea0b290df911835905797fd9d456';let _src;

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
