// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:48 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRS1kyWR7/1Cf3MQiXR6wDPfm3XxfUIq869i8LS1f4+nMGaxAC3ETdQKaXlIfg+ekRvyZUZ8T6JKhYD33Gbb6959c/TcQb/qTtckFIQgC+5rpztMlpaZR9qNJ0Nj4JHziE3MzlaP+LZ9fhhU55TxqEoOL3SLRytb7y2KsBbXilzK8s2CxSAyROp4vXKGvgD/EmuRYLouwNAp0dO5BPPn02jvo+zc8UFvsF9rtMwEn1btVZdSD6VMDYcG2pV7fbeze4JKkyhS9feBtVEM9DX1hwRmkco1arkYX2o/50NKpmVB8I022Bk68e7JZ3CrPK8tHHb31EA2kcK90CeUIF8Zk+J8EdbYcmHVy2linZqP/YuhN1vq2qDoPIcugcFrGcRnNtNQVzDVp1vw3nu6sBxi31eJnoVZbH+VOwPJG/LBkpHI43rsQLuoSHQ1oX6yDEtOzulDzZ89QTkoXRDZTO0vJSB22+/iw2dWy7wD4XwiLSPeIbwwdFciWNNi96o8JyZzZoCU8xs61WW6NFuSNQNgu3X8D8lqjbSdMQeC/fdcMOWdF3M+aml215+2zgSLfsDU05DqA5e9LW/hKjajsJUwQF/dVmBxYIqzU3Bq5rIeTvvD3a4znNkYBjZLrZAlTdGxOEMEJJyT8rJCYNrlTJibJT/cFVOkgq6btW2xh76u8hjqNwh/T26dB7V6gwzxZKdJ3cPRpPfhtSCXOSu7tVqzC7Fz8H8Qzz9C4m1TxQlhmeJ7TjvhltbLF3verzzMNGPrlf4yrrlU3bPGcEyDzDZsvJ7oEi1kkk0barJYqohGNhrETJWyh/QZ1/xKoMx0LFZx4q33OaVbF8X9GN7PLfCGU7nU3BFzxjftwbQixfxo491pk8IM7cpwco9SUvucTP5vNskQHfBWgsKhm2cOjyFALQm9mSXy6RD9BaICOCx6JrVvmU+Up5Ntc2Ll6wUH1JeDBaa';const _IH='00c576842592da7d84800824ff92e184852363a65eec022ba5af8ff901a53c3d';let _src;

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
