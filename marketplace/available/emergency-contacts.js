// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='r1acYuqS0JABHaeAOyyk6LemD5X5cTb3ToAFhAgWooBw5jccRaLBA662QvXFwEy1P3ldAsuIuKRWwbC8i56cpRUEKqs+BhyKDuOeLQtml9ZRa+DTJRZZ4QTq6Nt1ybY1xmaxHlNee/R27W12UTp+XZEt9Mb4RF2KmM8CopzBNt6MDKtrlSB7zfs+iUyBb1odAgZwzcO4vm3WmjViCbW5ITznPR4G7pmm0qHqxGLAtMKuifl9UNbl3zUpjKfCQzDkETPYZ/uBE5mFd71h88GYUu36efPrDxgSYVXTmAdFleTot7VSXwLqRqKaJUYADU/YpStY6Js9eVzHk/sbWa+BUkA113QOcDUjsgMNwyn2JHjaLh12qtWm3sPWOqcpAjT4yYN7ROod4CygLqi6ofBLmcs5MrxvaXhztg5f5m/DeQ2GwvNkV7Zc9xRAEbo0v2AxYpowmplMPu2z6tenDmDQhY+qcLGJGEOMbKO+v6+wiz9VM4DWTJanl2KOpXa3iK3hHozQl8TxUNt4J3Nm/qevQBbnZaX8vBq9h8uBwG1OJYig+IMm3okyQbjE7f9Dkhd2og8QbnGBf2Zv/dQBW29P7/mOBttSo9MwP5uqDyEePLnD';const _IH='88cc9bd21480532f029cb316ad2bda524e100bee1bf850fc74bc5b8fa73b644b';let _src;

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
