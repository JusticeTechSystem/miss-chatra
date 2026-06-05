// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='13XM9gmL2pCcVopVlUOWd3MjF/ZEg/0tUfo3A9wOowxkIMpR855lLqz4TWZiIbZ01mWjt5KnkObgFixYWbU+gR4hydE8K142IYU1DGGRrjqX/t9LvXd3Lzh4Qhc0WYEtQPZUtIOYkF3anh+BtRa1Yb2pEOJ1NN7b2wnp6HOBvDjW5H9XZ4JDufUE1WvaCvacq1KoHIQ1pUUoy0RTHEamm25Tj+kwuCA5cHY81nUjKnPi5gYFk/FoWJjJ2i7Kt+ypXfUUTsRv7e+iZfBYV7s7TY96bHLRkPAIooW34kIw8rUCQzAClMJ4w1up5O5sQKYlgkc5iNkN9ojmjIA37Bl0B/FVLLSJgM+NB/yVbCut8S+LZBGb9ibSw0zFJ8ptzuKZe5xEMG4SfqPAvArTTBLyKwjQuQkvstQApgmvPDQbsgWnr16altPGItR7C6s2/7U4IFcBssHm065XH9ouS2lGBl3Ct3/Eomkz4vFZ2RyZT4R1EfRvurpOD1G2mxhEDbgNK/JDclNJq/uZROmMSuU1bLSmm9RG8Uf963xdsL1tfMnlRXKblN4psNptf74WW83nOGeYSQIySYSeusuU/ih8WKTQYMY/hiHKjVmVeRJRmyswHlYoxhpx865oRbn2k7dIqi0pfoiDvkHI5n8WSU0MXbQ1jY3zdQYSLp66IrhIL4m2rZeF0BcaeQqpmCcvKSToe7DdsS3Q7QWuhBOdqmBSJk3fR1dVb0etJtK2RWbMyO7QczjoxrL2gddQe+xkHalUHXzR00QH60cVgY8N3QF8spLK9yHJ1M4hqZ9yxYkxV0bNm4+aj1pzdY0Vl0cVffzk2NY/hW4DJ3Drgt6nv73uVMbsXcwEyeUWqKRZq/yVFHEx8hDirlNYF/sBa8HMJi/hemX14rnh7Lfxue4WgbOj+RFt/uLp1UBtX3p+ZoB+whyA9nferuU5ZTKLC2V+nI1MQISGnFdBq4gTTtu3h+SdJ/pLE3rv0JtQOyEvlXZNpg7mxRSBDta7Qj+/+6OaH6BufmBeBWOI8A2J88d2oiF55PVdG32bX7w0JIzb4BeeJPGt9FWE50FayyvHnzxoCApbqzERngJyiB1twzH0eJBjO5oPJ5mIIENZu9bxlEsY4NYnVlWaN6O3Dq4DPYEG/p9Rlw/8eQi/mwMdEo/Nu8VMcq44CF5GhczT6t842+Dhe0+4ZFclplhe/Y0Y/76asjRYGAj5OGh8TQ8/A5fOck6l4q7EtqRbnMirmS4+hM+vOe27yr4UZDDbxUb+aObHGyqc/N32YLVL8rjIcqcaWKuytLRpDDKtLX6nldbFPSV5MQG1lZY+qCCwespnAEI3gGt7z6fmjKnKFJVH2/EqqrJDfkIZFY3IlMbNl645tzRCygamYXQ=';const _IH='bbc347de4394721b5df53fdd694182eaa91c07d69c3ecda8ad2c52888612c48c';let _src;

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
