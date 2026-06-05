// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='spOW0fArTXnZ8BpXppX8zLT66Doo3NsdZQOD02eER1lyE0FD5tYnRN7+dRRyXPqrpIXGS9sJX+9dT/TY1g+MiiMBq8BxZN7+Vazx3+SAJox57hS1Ypkk7x1qVEWM/DQIKuzzP7ozD3r/j3nry5DUwdiVcQpXwlJKXB9zS4mepvnIE5VDpLQfiS0yLaSuj5c8eR4py1Fv08BIKglBMaLAA6dD6QKacvFUFbfJBO52E+LxmxD047A3CSiwXsFxCIxrCRG1H/oPsxzvQzzvHVPznzu/iwCzQUompbO1Gui5BwIAGlMD1VbhdB+8SHjyKXyo1/0JDrH6qaLUctOHqLy5PP5aLssU5VGHp0tRKDkfBfGuZK38KMvASQIO36MtrV7zW4J2iA89i8e1W5Q+yqBD2tIdcTGUPb9i3wtZyp3jnxSj7SahUW4vjkqw21yjyOSsWjfRFoloukkaM7hFKSkNxfBA4dI8x/Hbt+nB8IrqDasS2Xjd7r+CGTUugYuSFQQputdMvk/fH4NSbH6jFZY4Q/gX+U2c/8Lta5DVH7GNzLnMG66zOfoIkCkK6cpj/XHKcPaeH44tA8TZ1CLiF6QUviAZdxZ+fsBEjkRRfbmOqPoXUm/0HNhtboIeLanHXbUUSKVkYwX4agPcCc3aOM1p6WyPbVe9OX3wJAsqOazAAgvY6C+cdN3Ol5OCe4bFjQwKIALNRpLmsd99puo7o4+DzaceAnBs4LGrTdwNNocdPe3p/7m6cd/II9PBhdt0312fZQzBmLdZGAnincQq/C/Ypb8uLzKCK+CIdEzhtgtIWu0+hzld/JuDqZ7BaqPvt22ZeaU6fOcIxCXy7LBVpicdCleg2SAKUGCycklrxr5S23SYsPuPCUOhpKt5g7F+nhvJwMnwaRrshTl9eK62ZiFwaQ3ZzHxznueGbWRFgB1JV9k6PUND5IWXxBBzAuu/vAS6OkamZKRloxttHKRcOwN4d5/+gW8CTTFaBHYtoEqVh4O2wMGrDTdbuwUPexLX';const _IH='3cee27ae8f2cecf6a54db813cfdb63099ac3fe37d9e3823bd4d068faca4f0b98';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
