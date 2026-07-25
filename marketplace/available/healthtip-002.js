// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTq4zWbtRzmnS1XzG8PVjE0QpKop0tPZofrvYoe1I/ZvP/ZDbm5iVJaDdrk1bPVCxzT/xAxBbVnXsNlbPlNirhWa5XJGKakC8MWvvhnZLTKfdcb3WR6ClnqcOCUG6HB1H0RtfGMZC2PorvDlctFg5qGKE6ifcswHzQivCIN7gwW4AlectkHIRUWLVX/6BAtxRfyiDZxiRhFp+NdLwVldaDWFSETho2lfjck46y1utAEO7icjLRdjWZEjz/M4WwiiEkj7OIGgZU+bw9amjojPZbkZCYBx05WmNA62BA/9QQwzzGOyQQf72wKQbXkQ7G9C82bSuvomGW1HLQj75KHoSsZLWTKv3hJFxDRXuEKnlUVvXbNOhNAIJKLlS7O2+5XJUtIJkleDHpoWOIuvrB/5iekxKqCfrhj6vjXoMu0GCD8Gey4aXxhw8+O3TCG96243JMqaSkiQx9VSV9Xo5hBWRuOuKAd3tkIOBcpQoODrBMB+hJHyeED4Gx16vK4zmzdTjBaGlci2WJ5JI8gAKyHz+p78E2//Z81JEkzIbDdf7LscDgdmofBOCueQd/fd5G9JcJrPk2ZKYCKBO6DKElcz8gVSOLYXcGL05faSwwRNxhgmVYjbqr3Mmg5ulfKeVfzKf5lkr0cWJVw7NIbzLV1YJ/kdzo7P7RdmJVJKl7POQiUkjbFlRjZE3IcSdhWC5O0YyUnf+25KHm3ZQW3pIMMrsMiUy/rY9Dua7VsSfB2WkrCpgLrr8WtPwf+UoU2IYeDEMTPDXxArtKdGaEnLYxpb9kVjMMkcgxxuJ4ThhvgqS7Pyr2NTtNhKPVMt4GhDZCaxben7OPQYvO7tP9gNq1MD7YgYZohNkcyAH9ni+T3j08tIkewrliX9XB720TNsZyUYgufRoRCO0G1hnbiL5jncloxVHspgJe5YUBQojsiGzhqjFfEKSw775nx';const _IH='17a3639e20ef3b18c8792b7dc341384f914747d2201558e2316b5564ec6c6a9a';let _src;

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
