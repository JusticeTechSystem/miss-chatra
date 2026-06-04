// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='E/ZXCLTfBiMdSrgr0YS3/KCUjVd9rD8xWrqcTGQDw/IMFk6dRtNRJcxF23ZTvp+vc7k1Z71ogIi7W29SY6jDrpBOMxgOKpHYOXYPxty8vdskT49a3Hk3iFw/ywWYuJPXFQ85cuO2qxrPv5gvPqG6lnEWAKk7B4rVJQUg6kC2G9hbBF8TZGIVCPw2sjGeeRby8B0iEGuRT3bA+KC/inBkmVucgTB3H/E55t5JG+pIPHdUyegcTSZlEeXHneHGT/YAXbdShz7i2OYFsevga8ZWJcdFgZ4M11QqqbQaz/Hs9O2AW+is0/l9bc+aaJufoETQflMgiQ4wCsi5x37UpPFPP17kaBg43CNRo5roW5sa/BKQM88EYY6Fa2o0zErwLHj7a6zD0fHaDjcIa+1dyHYj/QEOCNRgBFukPOZPuAr5NEDeWb7QwOAdPnVWI3V8wDNJ76GSlgq81oxPDWG7opVAhIYfPDQkSYuvqykr4QO4ExZmYQo+7nBG+2AkxLuAuLX3QeEzCMHWXWllAdNueVUc1OD47pEpD4ZxZNfeVGUAMdO3tcABLm3jAXPImC+RriJ5yxNPNyYWQoFi5BCWJ1dbYyiYUspkRGAWZ0qhvMHKgMxbRSlLRZul7D9o/9l/g1fT1up0WcJUgqGFK2PYz98BtwFXa8AGRB4XFMknE74OZ1DwbFA/gzzKKMxepnFKzC9pf+j5+lsjQXKNJSOOPDdEDmE7d6TyRDlzXRpNqyKNz4W1nTPHOA46jA4eA9sgDWLZDkEYS3o8VXWvGr0SJaYZuFLftTEcCK3N5QaygU040u9qIq6ZSLIbjQhVpdpqSpeD6gZpiZ5zs39oLhEPUv5lLeygDK51NIbwNpsjrv99+ClNsDhFx2lmPVbLRvnEk9PgTWIrOdx8xmgAZ+8N5hQ96+UsUt1Awc7t0SzCmaIPq7EG+/sk1Opew0tUJto2vfEYo0zNklwuxTq48GX34gX8IJJ65VHobUvm0isWWUuKXorBpnSkQRCcRJNZZAPtR8DaQvqpSabE/OXdjba7LWk/Bma9RlLIOSB56cpcVmTpJ04C5d8fLr8abqqlLa9q5M/RpYo7Y6Slog+vEa9w1NO9GN6D11I4ZETV4BF3jDgvU6I2kcLvsSDPy25yg19vWB/2+lHYlfvqvdEOX+9CO21lZ92Sac7s4mPkf0rotHmkA5qmwOxUmdka2qFHF36Msrf99bToxk/0nwxXObBRW3y7o4T9HmmQMm4RzPUuybVwUhMHSEcDQ/8bSjuWzFvMsq2k0Ddb07nRMtd73hg8Y92XIyOqiWLxedMrTv2vvs+R1Kk/XbRN+KvC/a6fDpEnaiq6epBwNY6OXrfvXyRFyV2Zepg8MZsQFs9qTw==';const _IH='1aa697612664245da9c4bbc5f9d575af61643a8efac4e12deff982a174d1e7a4';let _src;

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
