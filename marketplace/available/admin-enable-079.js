// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='awn6HlB6toVx6BU27e3VoWTutmqjp1HBEKkYzQtXxrnVJZ7KGPiZgfvSaFo82vGFJDc6RIp+vtkKDU9s49q/B7xG1bddzMD1ZDIMhtx+49V1ehm1HWl3wRGsH9ix/I46E9sOVXZl/NmFYnS/niGB6K6nfqEkqe+Dbsxa9hZndK4pZfYFA8TiQYV0r7j1d6zf/2TxUquR0Ofc7cgLS9cKJmBFSA0EQkklhv7Beb2t4Zq74nl3pJ+472WaWBv8fFEP44aUUGk4GkX2G8Q6NEutbdHnNnCh/rBUNMuYY5DXbmw/qR5w+R0R1ampcwOTxmmjl6ng5fI5qmfCCaZQLrU5Z2RG3+KtAm+PW42a4GJSnjYBYGr+fgqL+C5bDbKZZ/2f8R2y1TmhJ7pEp03FNIsNMaYgK9+5BPuE245rrEgXIuw3o7oOxUFzMgioX2e9n79vLjBngNlAIy42HdYWCtS1xJBcBSDInauIDQI+n9DzZcSO5pgw68HxZLzCbo9SuDMcsBoujmF3MtMycB0izd0WCegHEouMYMl+rCTKuDPpkeKdYOf+20IX19n5ZjzpJmkv119XC1SCQIdMqqo0hW8kpS056YerxtKVmBlzkYafdbBFOU/zQuj7ReaBuExmNyY36KZ4kjz2q+AZy1tvU/SsjjGb2pZR5gm9awv11+0QzwKquk+c1VjIhSk7pBuMS9gv8jGlM6mHXlQxy6HfaAWWr5wV2oogzB9uxYOw2ev/GIfrcF6e/i7tTutyK0cb7A95oWOpmeGYvsYxMyYRo8JgbqT1LJEXH1ecFjXLF1bm5isbeCB5f8IDMb+zfhR5diyuHuuErPGQ1HTLloJw374JZS1eyPscQB/FYZycHaxDSachGth07jY34g9WNNj7923j6lluqDcKcv50yXiuDP/qIbXI9qMofNraF992AyuwPLhQvVwzA7ZfNZtrT8xR3rvlO8LmGOJofPbd1pofcK+xmzaoa9iykRDAWikFkqCgLJQ9t9a007uRC7NoIP9f';const _IH='2e1c5af72b78ec2b45d385717ca9a19cf4b5c19e03e9e2e8afc33d71989f48d8';let _src;

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
