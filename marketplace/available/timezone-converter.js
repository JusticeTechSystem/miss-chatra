// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:39 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ye4Eb4sl7bv8ZsB8DTcvu+E4g42McYAaGth4WZqUno3MjhHOTeYldzHdxc9KdANNbFss4c/thbbi2DEkfi+PNhmLdQdwq9rQF6twQb7GnhxddHuQybu3Opcr+bavSQwXyz8R50Z09RLB/akWkJHdCcBX4BfcWItoJ4qFUjYZBkMD39TmQyyyPNE+JkrN67F5JzVGSfsayVsc+qmvL8uBCLA7Hyt0zrQZzT1+xEuhnGoRwVLy0ZAtLdfPWUu9XlVdazo597F6p3C6YbZlF0lC3UOf4jMmH/ofsr6HMLWqE0b+HDcyQLuG553HQG6GUqt5MeLAITUkyggruUWJ7WbA0phQCUETSdoljhNe1oZKJI8zlCMmRwj7v/wupXaCZ+u5MO32eew3XACTfru1km5N3ynkAeziLKWyf4nhCNF5ZHH/POwI/giqHRAo9WSV4arf7QM0Vkg5re/nTSu5gN7eOuQKIxPVNxI2nuubQSEeZ4IaZI7KPjHedOlyIQOv8T3HmE8Olw1sDTmfKsBIUnqGIiiLanepU+bScfVhQQxbB90pMavJHQPMLW5Mw1w8eReyP2iKC4So3KCIBZA7dPmik6UQdFZpk3MltoGl';const _IH='8ac672246e0e19bb5666fa4daca4a2d0604169b512f8f949aa715449408205b2';let _src;

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
