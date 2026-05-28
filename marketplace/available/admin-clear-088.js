// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9TVsN7AzrPTdV2pAJJyImb5s8mJCpcPeDV11HfOmb0x1GBjwNosqlm+90sZhkessp4vmmwr4kWqwwxdzsjLX0uFmLZBnN3l2Fd51Pz3YeWgB9WV3PYHH0zgTyqFB6k9SK0S/EjMWjr44gNQhrdBvPtWuRfD5xgXWWp6Abx450cxrUEZSRTdBgRe/dTZIrx8PFOklSzuMdm6C5mVhPzoPW6F34HhLA08yT1Sr/Na8z+MgbX+SBfPjnhsY+Q9CUkY09+gDp2W5vSG8v78cEEU0KpZOizPIn6S+JWujtC56oZgWJzNnVLfDOoXldLFVMeloI8+LOkJkEICKFe7po9/x/lKBOLf4SocnrLBp9Kadrsi7d0aEPMWKo+XZUcxtfFEZ4hCbZaV9N6iiVq2Q0ScKeEZ5CoP2nUjTlRmF/NjFOdUZmEVRAYMksKjAi23UqsZRo1Qzho93rGKqSS+MJEz3PnQgk+Wgj8VWKSlZmu/21ZvK6Uoa+adivCMWC/kOHtuy+4hzXvq1zkbs3tLPQ5wsaX4Xaf8fGJFIGdIfrRUqNwgPUdKAG97wc+7sj5CtYSWZvndSW3vxpkXrbZSgGkSlaCpg0t60AUMjLOJtwvmZhYN1Oh12XQzP2eVPAYhZjIU73iAfn112IyvjeuZfJ9kZYrOfvwenNNSTLG5WN4A5BGsTSjGeRdRzR+SBdu2rY/hCmYaqN0tDXwHjrzIvj80Eueep4hawU6KEhtiwJndI2rxAvBlIChMBBtxiUkBYVoS+e4K5qtiCXKjrrGmhnnQWE2M3JkzrI1nHaON69y+o+zOaEEnua7O60+Wg17Edbz26bdgpyLUFhESIQP4CshPE2SFhBKKWsoQfMRzjxbh/r4nbhwR0bKuFGawEiRa4PSV9NQAnRL2WYw9K8vgZyLgslD2rKvuS2dxSdg0V03teE3cegd4PXxpF9KE32iSGktmOFcRJJH4ygfu8BA+PiXi4y3DZ6U6fcUuctBNtAR4df9aJ5ivfzdQ=';const _IH='f92af3a62f67398359b923292a2c16fc3d14c9d4c8302707ed6b5a30905e86b7';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
