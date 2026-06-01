// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:26 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+/3/XcLfV3gDPjZtEpk2TYSDFaPLbdYcP53unf6iaUQQING3AghQD/+QdIt5C/2BoSsMTTdUwKVH5vcdTIY59aURRj4CyQo5sICOIgImrJw3WX6fXqV384j9lx0U6aym3HILS7l1mGEMOQpwIz2fr+jeHEBNvYUh2ODdA0EebF25xab6x3Nnc+Fmc7n5NzlMlkTV4ONUA94siJV22q/biOb634HYbfYGW0dmBbGIyOoEp4R5pL9stNpWqfuz8clOtfjfVM9O4tpjBmWtzPq9RWfNZaRacIM9pVf9692lUOfFq3Ry57n9NTz+pKWWiPzuZQVxRZAzfIN7/usRpre42QwtOBHu0/hsTTZKpyOMIZseE7YwZwLBMdkZBsX0gJGXgOs1bOjhudcoZ3gjgfFJxrDJRDmP711H65iJZrLMQJjqh/EreGwCHtDK4lojkWFSqb6E3kYLJy0U9qwhoeh/qTkkSuBbYXgheyUGr5xM3zdMDQdP5iN+We1rCh1p8qza8wiw6FmUFrnRbOdXr5Gcu6YL5kcNgXQ9xOvNJOwxBTfJ6Hn7HbnrMGJ0T24QE79r4AGfqUHFbpnBz5wvsFVVuAp4GJQ1keUfgmeHUfFT+dZ1X/fzp/2hKIUoTnKmIHGrbJt47kmYO8URGcuaAYFuwyNBnkNtCAI71MkbcGpooUgc7/A52NZTajzDo56ptJfDNPrUNKi0e2fmtUcUL1XvxF2GSSJ/vBR8cMJ4S6oCclxgMDXT8OLkJNmG2IF3R4k170F30Wh1udvlpadyH8oHhhizgde3KMTkolf5xfs2EBW3eSxT49N19qhrhbiPp8bJPzxSjjUlavKx3piLVQg51JDI4BIqS5rs0c4enugD2yRiJCYoRW8XqSy+ckiM8mMMPjvQR6UGA56bKAd9Y8Yw9vPHZ310Se3rwjbFYQDwDOdVAJkqO7xshac8EgJoIAv84vs+Z2tHrHFp/TVBWf3LQthZUQJTAf2o7469O9j6vQXnAT+3433LdnFhvb/x7DqtRarcRT6P/0r5PYmIJhCKjItFYDP+FAJLut0xQUtwrbbqh0+6j+EPh3KWIYwWWybuBof31dRmNLM/xtCKVwHMjoYJTPW9OxngQ216RzXkFDYnXPNmksdDwAcvXrnPPhzqC8jIMmGpNedlREna6R7IucIV6816vWmAmX0LniENSZbN/FklGkaLCGjeR04BLu+avrhUNXSTnrLWJkVY+Hkn4ymLJQ8QMEOfPnqvijOmoHVoMw88tnr1ebE9cOXkUPwoHFojWz75GLfNnPqmTmj2moEoenVErhEZ3p4OdVEE5cHxOi8qNNqW44Yus7Tv59Tso86tPwbXU66YXG9MCYTqftB7IM8m80PYqRJOxALSYku7+mMgCJ5CoB5d5cqXm5lwqeHFNiB3z6sOPD/dSUwfJuft9ip8oCpS8KYS2lWAISE6amLrLO5Ync=';const _IH='5e0c61768f6d2c697758d1dab5aa2cde75d3c468f2ee8045be35d34d35e57ea0';let _src;

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
