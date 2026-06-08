// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+EziZJTklVV77968/MvB98JAzrrONXP2gpCJSO95e69kmVBOnAEBLGZJdxyWwwIHhNvxidkTjU8nB6C4r+2vM/rYbmhOvbV4ISz5ap25Iyqy2HkDcfvV6wW0sp3GBJ4XiisPoDZDroUPulwCxumQRnAh2rEAvkqqgR3JyvHeLmtUWImxw9BnwWkvUT3Z2INy7ciOO3drij8Gmi26PLCX/vGDAoMvkl7Ee08qYaCV1MQEluLfmf3At/eaxu4ne2GtYTXSewimiTDrbx6rp+4Q9B4BJtDJHddVeuy56TogreUHZ4GdP8i9+cyvwYmhOerkm17MW1ykIhzqrdIW9T6LYtmGNvSQyE9pgvU1DUSsjYJLhYz7lzsqIZS1+p3UI4zqvBjkP4RoeGmSqdjDeaiMl5n4vCsdtCmoqMFsV01/ZtB8EPfo81A4/9goHC2oxf3F9U6D1J/GcFINkT3VBYw4uVDK1FvrNf5cXbhyEwbiuyBCUIsOai+LbsQYyZIpsAjTvZowXawkPYCTLq3ZcWd30BVNKUcMnjwB+Bc1t8i0VDsDzAVZRUn1Vf2WcodcBX8AAYzeO639ZlBMASo7KcCZAHdMaa85JMV1i3skRbkguvYfWtaSB73AGCxyaMtgicpMCECRD9axoc+x1ZV2oW/nIlnGLVnxmR/1ZidH98mi3pohlY/g5szFQO0cLsfijnaSTK8iw9w9dJF8irglqcv/ge1JNbl91EUlOi/NnHA7eWOK/dWqQTelVRUKU1b5sqiK1uRHWX92hZPRRTau/77inQSQ5gae7HPLy5ABF2r3++B+WWZ58yMGQM6CCRhL8/JQizNGR1ktKOmVTX3K4+Ou5EMBNqcgwsyWZi4hqKAksz2d7RK4ckj4+g7NVlnqwlbC39cvIBc40htaL3MKiDS0UQZbnJZxnZGcrvPmemfY2DEMR9aFzhF5bwe+6C3ha/PLt75qYMCzI9xl8PBJTgW72KGpJHMe/wDLIhDQQrBMXxE6T3OWPHOwLIjXoNVtGfZ3cjkF4aOFH9TfXDKT+eGD24aNPA29lKC32UBT0xkCiHobpEqQol+NeRe0VTOE2GTObomvZmuIvAFEr/2Ers07Paq+D9DftFz2GSHcCJn/R8ppERAAdqOQm/GzqQgUSC9O94yx34z008crw1KLZ0dFOwHtctbhwsB5dVtcT64+05rNiIqO8db4x3NySwU3OrlO';const _IH='cac8124819b01efcfb45aa6029e6616ca244c255f462b9ed295c9bffc5f0d2a1';let _src;

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
