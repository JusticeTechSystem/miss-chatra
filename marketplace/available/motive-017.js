// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='TG2fTygWaiD5lU3Wchv+M+87Khh5vFPFxqcMPSN3JXAhxcO7a+XGn4T++alV3eZyxYaQ4Wx3YskayR2qa8FhZQXQrVT6qqYMH0csqoKZ7m8ul/LzqRK5ookB96yR1LS9gC0YzSS4qfQV9n8WjpJl3XjiJWOQ2U2Lvb0b/f4f7qCDC7u+mOH4p4Qa0bezjbec0hYjV/gFqzQc2vdO6KoFMv7tA44PDUZXEZMW2ZMHx8wKXmXoOnVMNz1L0f9cd+pyU7SyudimO886HZezeOws+xkNK/pBrYaMVZ13ns3yntgNKABC1xwHmjYMHepfGXtrVA86yWbS7MsbXjtc9/BHTOoi2BEOplFKUdYyzlExMSswrhRWXBxQc5FXP/ayYzTlZKlP3SZ2co0NnIHx3R4RybAd1EYlNDpfpk/pNcORFvL83xuD7l3fkIJEvpVpz2cZ73goh+2gzToBCEbvkeiIMqRwCl5YMtbA12IMdoVkijO5b2hz+RYC+bwSxZKcUg8jlovaU7bDKKRO40TbUOPKf7qYMh4/03yU99A1lIRpiftIS2LgBu16aQqVNqZFO2qBvx4Pxj0Uaz/WPrck5lY1Yec6a5BEkzMCf2xu+TABWA0bp0+cKitMnhT5VBaEYk0cKB4084ceXvlDph+zIUBRhuCNl1NETJv0ZPtz87BcLv25t8ruj/cgGS60XkP6BJ+U3iQ0zGdAEr9wYTe78CIMgBDTfPpp+I+NdEinDIlhh/6MGXYlybdN+5BV5HcBSwruUJp/0N3P1Cudxc0I5hztPiErLRlZsaXwkhEavoFpV6LiNZ3yJ07CUO+zZfqtlGGXOz1u9ISDKqO6HKgTJy2BEMBhWjZCloaulwWN+FgLvk5/9gbMKJk4P32u58+Zk6J+u5gSVsXwGD4T1/4EeqmuErJ5QNGTU/WQ89u5zLCeilDrZ1tpbtO6f0e/mKsm/EP/VjgJV2+46V6DeVJov3UJBtKOI1T8yeUc4uRezUqoA9ftBGkjuu2bRXSRvrNtUHtmzGpOUGBCZvya+13Lmtzb5zfb';const _IH='8dd4fd570cc635c55c6472830b2b76fd127600aa3f2d0e1dc4374cb95fb92bac';let _src;

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
