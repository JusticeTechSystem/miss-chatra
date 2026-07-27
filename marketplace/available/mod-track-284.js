// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTXte1QIZ6J3jv3nuDjnLbbqIk0/ebpZlfKdszwjUE7urEuTH8feSCpO+QGAIIJGG60p9MItrqVHWFznGXSC7dbpuMwaAEgCCuQFSNejnKsNVe0YXisoEkrIasF75FLmbb6o3vGhUCBYuE/0dgSPjeaoKRzsZKfG4BuHoA9iYcygOtm2dwNch1Um/Vu4gfYPzIre9gNQG0bZzuGdHErhJ8eVY/EMqQyNcmDBGrBCwr3OOUdQiqvDUfncDsn8RtVV622LSSQLvnenOtbZ3U+PgNJ8InXIn9I4dlQhJCsfAAhyAVv50sZHi8+Yi1WojEi28dV4KABXbteZ0a2L0mg7yv8pylzkp50B1637ZZ8CRwEbaOtZO9iUXml5eHo/NZhrL5pctZ3KIoTmsyMiWQT9buuy73pZZIsNUsKjTFmcHkoU27qBf3POaSvoGamJAVnn2mfcP+jHN4Gv43c38gkeOVBIpVRV4mmQNJKi4Iz/r0kt8kRcTT8hQiY3wBFhY5AZwyLteu0Y+7ZjN0MSB6aVHNv/7ahZn8Fh/Mqh/T0z84pCWjqVYemCx457ammU7nLmd/XwL7IlwaVkm1aHLDAQvPRSfGR0WDrMgnMyD5gMgoehFI7jXIfJxZN5iH76V6jV3moVCerD6T4SDk4FzzegKedN6BAs6e56FA2q6oPwNpNbYJk+XxFuitlAqj0wzNmGbfOWQzqM5Q/lBy9kwgd5tgyftfUw2LKtAXt3LZPOUGCu7BUVQxpirUxS8Qd60K8NwmVPjHkvr55D4WGK6wl3abCJiu1HkELzF4mRviuwdiyKwdlpa5cCANqvCcLs/HSDZWyLhcLBUou3QUWdDHQrdKS5wyQm8i+qc296z1SVvPe00ZmA7yJx258L6DhX9G1exl1QtaGXYrja36LGExipUYu5TF/iT2YcTpx3IdE2WiKYmIsX7GF7aNjsJUjmbkJMX3uQBKC4mtlg0YVf54JTMssFbjckOH61HIEPsoGtjMvxC4BdUPaoOeZIR9gIF25Y6i6a+0kWJ7QQD4U8cEm7XnjcQyo8/YfxN89/d/MgRNJbPP3lzoLngUivqB0hAElkKE2v5zfUXsk1lLgaL+/WPYOh5ek0LTy5rYbfowllgkTihk5JT1+BkcjusL04BhAnzyzAG0zj7bju14FIaiKS60+HDtnhxkkfsXnsoUB+dkXFsYXaKfwPbNo/v9WRQsXm32V4Q76RSRMRUsqnjTjZmMdk3XVSb9XD+af5S63nHbkh957539ppKtez0F08v/GQMw+vDF4BZUFykkG6y3qN4ApsSZXbkVeF5J7hOPlRmmdEjBT63yyJNnvyukEGLMA6GqJTacC7Nq9rKZSwcVMoym1RBeo/nhXhKF/m3h3yZI=';const _IH='de5d605fc04e050165a2a7aa089b3d4212411c02cbbf16b6445fa81d819773b9';let _src;

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
