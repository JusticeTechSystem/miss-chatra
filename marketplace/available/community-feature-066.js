// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6Bg8Ki984PKc5cDgJnsi1IZEzxT7IusVClqski49LWGpNOjo/7oErURmJrgUMigKNjMEu1nnsUZua8yKTho9WLSQKoW09AsHV+bA9fbMHK7IQVydN2KSg4FuOAnn43/MqNWCjYzurSZ5AEJHtCoRvZxikPXDxo8Dn7to2pI0JQKJSJ3eCgndbawCV/uqR/iJJCZko+DajD/yaIDcYxteyYbMBzRwGJ9Bi5nIC0Qt6/+I5znfuuSDAMBaU33MQ0Og7DttIBUJL9KIYDwSCLeN/RDC+PUFcd1UGj2ZEgT4sQasqjewgCJmWqrtp1I4OpyshlAAzg7jAVyaZEnocVAIRXX8LZeWXKcRMK/rSR6D+5X0WAD4dzEfGK2yIlxlSIST1kLbeUCrdiPArILEOjw2wTqFe5RLA5i5VZGhWlJgoBetAq1X3wxyZUPL12zVLn2jTqtQleUZ/t88wfhhDddxUk6yU5MIXDUEE8pXCoD8sDLP1E/A5xVGR10BuayLdgPoI22Nre4LI1BZj7uLEp71eFeC+8mLb6jf1DoBHrm15xWtYfBRb9Cr7viVLsH3Ls73FqRlYlSv1Ri0eu0Qq47MMClg2U8f/YUHkgBK6gsAlNnt0ee2aPXkXLDIauFQ5so7U4MXjx4HTsx67IEoG2xLbDQRWAoRUlCvgHHvParaM6oFpahbx9QKXAzzUm7XH8+aeXbyFLq33xuuI3/JwwjwJxlrWnc=';const _IH='cb7578996a797a6bdf45c86497168b136fbbddd501b6c53b19a3ab9fc169ab1c';let _src;

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
