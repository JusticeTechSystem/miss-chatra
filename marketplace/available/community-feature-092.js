// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:54 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQwTyDz5CUGz83DbNx7soGJEfPxzhjelUs7PnYFzmMnrD2NiCkalvtg+xGZBD5iTk6KKL0JCNIq/gbT2Un3kHr+xHZ8G+6pnSKmDwXBfMx+E8izMB3lzvEIIaaZAT8ujJs4QXFa3VTvn3YHq//tioD0aDKRLZsMyaEnN5l/QVPxy2qjsu4dKDKf+Q6/jj7gtiTo6/HfJ8AQ13CA4+YoGb95HfWny7Sq3e0LqX+oA2ByyiStvcg1PmczmRfAWUrF6qI6bqx4r99R8fYWtV92XqgShIsmC/3mNyiAy+NFHT/CUoRV4ZfAX02+QE04F5La9qKg9jlsDQ1nlXNat+KfXPzkJI55TDzq2Q1Nh6M65+NVlDPSk5QE7hOgCNimaMNL7/BbEwM0fhrJEl2825fYLzEMfKaQHF11Fa0zV8fHN4yz01frgEOfk22ko3ymoE4TPxUD2ETolUaUQw99dTNz9EpHyXKEl9nbKWi4mkeXnyvw5WaxtBnS6zkpc0VSFQ5dMFlD2OpgvLbtvjvlqlnoyGQw1Kl4mjvS6WOh6U5bCfhjnogt//XLQrw32kncNFSSpcogE0Nrhi2wF39uOb5jLQFLlbtqwiAFhOa43ARhAcYqEY6bYUXSYl33wQjihdStVzh3AziSWmxktGojWhMYci/nJyJH7koH8RydfMWtPwKwBDYZtaZx4SSGSZSm6wIU+75xrf2S9pWhTQmfbOoQwqghOoNoO+D52M2oaL08aAkoA=';const _IH='156d3175dc23b25d22970bd34090ebfa8edf5fdee4c0bd563f108b277fa470e0';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
