// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:48 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pkrk+snIDYQdYyaVZtyCqrmBKolZ8t0ko95FoQWkKhhC1GHiJAkAdfQgDOs+Q9cMvGTMgCHLAJjeZBUGHTDW5VraviN3X2DsPM70pIpi5K3QcDBOxwdXKYsDLHqRrPJDStJqLssQdEtG4chcSPfTH/AcFaTvgtUlVzaxYOYLKk2q+Udt7CQBATRnglMllItcJW3+5nE9DtgSztN6+XtkZWZcQDVr0u2d3AVi+9hFjvPe412lsgdbUTi+ZfNgmSp9zG50iFG+1fyazxK9mcIwLl6mEVzo2UwtsImz+h6lu96jD6Rccdx31mOQTuiXjj5G1ER0vZXLKSUNVpGmwJe1q2+ZS2MzssjHC20TR1xYaKlPJ3M5w15VUfhH57ydR7Zbte3wnAdw9eJYMT+753uLv7ePNd/05jJDnn8JmwMRMLXxQ/l6A8tpxMEWUPqnloHMAoMpKWNMXztlg/S0kcccqKesBsM4ZSsDmEKWs9NJmAxSgqj2GccNb4sNhLM6LFUmXMtAca6VEfgDD1rvfgR2jJYFe9HEOZAMqtXbtIERp04MhdBTRkpMBh/0N/RIzsrfhodo9AcApM1NxOA4irnJdkrzA/mMRRiPW28KgjQnVxSQ1/oLN4ze4EpBBUaB8m/NihMoH5RVyaQudo7QsbsIvvz4VEy2fdJ4MYvDKYsWjEkHQ8VbimYICszBkRp5t/BTC+mEg6ta6pdkkw==';const _IH='b85826d6f261b09e8c0c52f285f6cf560b5a37d882e24bec434dc3eef4b551fc';let _src;

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
