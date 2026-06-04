// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='dhmcnpCtE6c4efPcfe0R8BqMs9LXZYxLEsxAwpSOq6xRYAj6w1ioFItvdkrOo3LYC/4i93LmBxEnuStcmiNK3TPKIkuN/Fc+3mF6NCg5keurFpEmAZHUKcgg3M9I+dpWglUqnIzZ2uDupoxvbBGfLfzrrTpyUiJajl6zALgByUxK0V11ie5F3MquKdgF4ydMF9dsfTaPr8CHxAGeNjkOsJPxWu9FuSx15taIdetldMNhOSxLjl0OknuZfQ9X5Xkd3FHe6OzpzqO/tlvopb+z/nl54eqC0q3BymR63ZH707DBUs06uTIDz4TxAYLWhqddgwflmZTTx/2EoVfOkF9rkF2Pq4jWXBpMMOAWiRRQwJMxEkwxwvWc+yv/CHSJfzXJypANVJyqG5o92NWhFij82yNqsbH4gG1T7O4kt4cfW0EUBintuPt+J0UCGaPBvfg2sWT6pH8zSNoy6r8M4fb3Ohve8q3up1Qn9PqYhaVzxJ41YIBmY9ChH6kopfGlVgtudk/VIsqDheFh8T9pxGPCdliO1npfq8wUVoLmxGqf9LcFBMemzFKTptDsA64EiVZqpvuRG5uKazeVJ4IN/FjPFUVnqaDieywWT9MBSQ8k9jELtMxWFJ8PGHZDMn7Jg6rbfNx5nBxollAVI/4r/UzoxcJyZvts/JugOKClnpYE0YziDRqlpieyII2v06ncEcaegUGMWKL0QOoJ//ToTcEYBoTyUJo=';const _IH='8c56793b9b4e561bfa88f0565aa724a3d8e2e63fdbf13cd694f8d19bebf4c389';let _src;

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
