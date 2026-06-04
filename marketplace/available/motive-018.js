// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/BY4U5vxoFAHxPhBBfwDnc0zog0AixkxjbyI+shu4ZXF6yZUtcpo8QCYSSDMqAkteJI/Rvvoz3qqpWo26vH8FiQRJvSfQk1XPiNsSQ4t686U2l5LAxgQ/9PJV+69/Xb23JoEJLDOrZKGZnXQgpCjejoUn6vGVkl6s9tNuX42dr3zWr7xgePFBzTbCgKsOf+51jM3Ev1uau9B0+3noL6EdH5ZI5nQl/bJPezrY0AVeYTOU3lcsmwjendp/8tEDblNvA1Qo7n2x+e+4R+1MK5YskcBtsD8EhKd8Y7pZmND09BI9hOHX7276JpPH7hsHLnE7UTE1DQAZHa1XYVoUs428rPbYTsbCMmw2iXqr44Wc3Zi04tiaeIGbAuCsVxfGGrqR2x/puss+HyRerSRaiHZD/OhJzMdJgx7z3GfLi0RNcdKcYKYHhYFGHNZUNanIabJDRq7/jbngvYdRLWfnvyi3AEJQ6yevi5ZI2GnrU0UEZSEWxtoilBaBHWbEA4W5XH16zPT9JW4d9Ygq/I0LwvfQZ+CCLlCCGxUyjFczGyHK0p7Nmci59r9V86C1m/dD30kkaQPR6zqmZcYo+E5yjMPdkL1fSPiWJJ86Xi79Xxjc6Z7ZCLz4NQI8cJcQ46I9YOCbF2c9yDBcfWVBixWJoinIdtCba+pc8AQjxILEM752qHb3VHaF3y48dkErbavI/HNB57rJUicOeidAV0Ns3ApLypgKy0OOaGu17ByviEOL7GKzfSp6bWZ2xeM0hcgR2BumnTorGuUR7WEWTn86HZGHXPj+0GoUGQSHkxO5Qb0YUPCOamR+YPb9QRdITsWFMnPCdEKaK6MWE68kUNCywKWgu3GAEpj9YzaTBxhzfa6WlU2bC3jIf/lLrbQ10+JsY41YKn+iFWNqF9TFpjzqdi6T7JmIuHcX4DKuWIn6XY45Yz1YSH1W75ErEyrLhzz343NxJ+m5GxZYLb3Bhi9/m2Y/K2vVJjYgQx1KfTiNYXmBj/Bg2DCbKZkSrpIhl1R3c21MZQhbJsWs/gUM43B+CtvqFOx';const _IH='26574f7974e93ed950e9076b030d3a2e15bb04092f15a0939914341717a6cd33';let _src;

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
