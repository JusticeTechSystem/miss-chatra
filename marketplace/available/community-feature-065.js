// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:56 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+RnHNEJW346/jHgqMeBoDM1wCk94NZnu7EHGD+IyHd/4aKcGaoGaOy4a68Lhy2zmlKPuBWvu3q5GiZEMYJrksos34kbC4EwDOFCY45ET9IGaFlqPVLXjTcEm9fYCUj9+G7zaSzzAvb5mj//iHlPLMjZrtPnkLjmBqRqOP30H1Ui75vbh5nFUeXYNj5RwNu0BNRwdLFxc5SW4NBXT4Enk5NvL78JEHgryRhRM3nbGwBGPhGV8Y8PxT+X2UxIanT8plR9cHutXdShSd808YT6jV/GtnnW7rUIlQqXwjYTrTawfceFAmHGcexfFWC/g6LwgPfXY7JjqnCGvOLWvB2wy3TcS12LXgE294OKh8MlZ0kGdxc0qtjj/nw7Gjb0rCuw7C4kQwAXg48uOQrDJY1TEQOCenJUpvDR4esXx080Yq1E1gXst3UGd8uiojoQv4tZCSyRIAhZf0CLq8dqwQPE0s0XNtrQIqQQle7nQhJWbf17Sb/XmVeAUU6bz/V/Hj1WC/2WCtuc7P5elZ8xbfHM2/l0SgxQvqwzKMKN1NM/nGWH+sXj04PLqb+8+GBUkgjp/5Mf4wMqDgNIsO6gvX8WfpXQqAPDwWKCIhIHMNK+SWl+9PVjbb+TlX7FeY9gpEGgzuB6ssyqVqWnaQmUVbXiXsa5n9IeLjIx7pi58B8MfZLAqsYZAGYctNFGZ/0pFmAoiBQWzIY9wgzlU4+TzHdqgZZj49DPbDKORomsN80F9uq/DCW895NT';const _IH='6d27a5c95e6c3ceb532af45055dce7184bd999c5263a56bd89eb1117cfdf87bb';let _src;

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
