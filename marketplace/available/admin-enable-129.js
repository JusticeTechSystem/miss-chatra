// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Su5LUZFy49uFuwW4Npm3WsRpNxq+RqTVYcJu2oA90rwAUuYwBiJLcMpjGEbxy6Int/PD4gEVrHl0ity9ok6SMtjDY3+9KZjlanPfpqE9OLHW//P8ZjwvC/xxu9pQ2p2LS6mF1eOyhwht6mTD6FqS5WJNZef/JjZWN1IFeSGrEpf2Gy+FQhrecyuLXF3C/EhbFHZLGOHLm9WOHHkT08K2h4xyevQrwwJzQGW7McdejMFAveFjiUQgjyE9OBvJoT/La4GnqQe2Wgg+yRuFgEC9MDQWuhmjnern+7Tu8x5JpttdrE8WUv1R4W3yRMmmT5/8rw5KmCL4lEamYkFhya6O2VITx9hSuBIUG/DiMNeOevce55VGxAUQ2zhI/xQcpprPEhonKNfDCrRxuF1o2VLJv9LxQwcBeLFlWHgttHJLPBmfTGWQiw9EcUmDOVzPZbT22LONYgob8OzYmqa6MhzrxyBznbG1fMh9r7+nY32TJ4rsxvE3W4KTSnwq7pYhgowqG8HVUAwk5C4h4wOlB+hkn150pC42KpNfuSa7Ae8luxpbT9irW7NbmusC3czC4knSZDhoZ2H0cVFoNU0c3UONk6p+TlmK25HdbjQ6UIF/BOAXL65K+OHVGKtDrKCHy2sLvzTeEqBtQvVnjAjleuWIR5IxpkXdZTePkJZ3iSXKy1jIHopb83Pe0aE4AmHIsbRynb+UoudHzB0o9gY/4QicwILTRhI5p+BqvPW9tERgcWOQOrwxsL5s4KPZtN8ht36k/zygFQeGkNqxy6UFgLKmQJScOSy08ALVHd5sCOzUX3/Rt4VUt/vEwrenfKVWNEeZyR1Ywj3fNrM9d0t7MlqrQxLONjSTzLNGVc/1npJmOYthQA2OgfCvPI97LVx3C2GoZmw9Lv+eztxXT12oqOK/I3/2l1dwWvQCpv2y7oo2rHnigNS7my3SkYuWodkFC1vmVhlLbWK+Ye+ccsblrYVionN+pSz6f4cDAcAd0Pgw7kxRCNzapG4ZWdjRfemLEENRIg==';const _IH='85e73dc5d9b78aeed09ccea0789bf46dfa8e36675d385559c58053216fac2cc4';let _src;

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
