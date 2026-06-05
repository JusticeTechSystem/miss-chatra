// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ac1Gby+PKvnh02IuKwbjVcqw8tOhb6Dy0Dkvir+mMBR/jBRISPt59HHHvjlAStguBv5VU1Cn8slynRNJHOyghNGNLDXXoN4uq845WFBlzGzjyMJoze0gTOyptIku/dD26jaGB6NxAOdjVJgsE4VRN84a5c/3g/Wi/AqrBqbz8w1uKX4Ngx1/pr5VqwxB4sFTEa/dAz+TIuqGJNJkVJYIx1DMMEZmcWlDczW1g9rWzNuRAe8atJF9EXY80pR53PJsCQc6sPnCobkFG+obBWo7Q8x/V5y/WWZDoCF54FcpTHFCa0s5ziE1mc7FZyBl0uqFacFKsyTTiEvMT97PHLpYqOl4NaXIGmEyOn9fnemnLOP1Jd4gDC3brIyMb5qGizbxFi9JmVXjJ9J1VISMpKRSU2WW2NbEx+R+dNnRbYeE8Plu9jJHO185ES3HsN7eDvV0/+GHC7qOQQe85gk5X/tzWvAhemYfkh0s9BQXwBYFE1fbgH9fxYipqrhIx2Ac5tmNryVTDtpij/Ct8FNNmRRFmKN9MFCuqqQM3INEj3sE4a+DgJTFLK8bT71BJIFfZ1N6aCgi9pJ7qxlbEQGR2xSuE5+kh0uDMnAm/bUuJzBXI1HEvfZ9lOHAtf/eOuv3eECU3fmiVYK6gQA++3oi8MxEK8QdOU5wlP+zinCZSu5ygFXkXN5gb98L3ahA5az1w12qi0ZSOMerSYD3jEv3EwWKk6q1wpMAasrD5HjwINqxczFHzOL/k5U07vS0YzYBP0QikvWgtgtq6lSvcmh6pL2u0Zf3eXYWqPWNxsh9/yCMBWi6SyO1Nq53nzAwG689F6vIBIF3DhKCzCACpdG0/79pYkJLoTN9Qyu1MAtPVnnPud+25Kk5svO1yjhoF0vEHhF8oSK3aVfdHh8nyg8RdElEZsSxZBqgZlKJtdWbyLdWw5vEe6fZq7kGbNce7vPavegQ14Gi8fISPZrG7HwKHKCNrM79C3qfnCfJPpmVAGxozFQSmcIieVURzlQ18uJFQF4uCsiRnnAeC4VaQKNo9KgNNiog4Gdkf9sGCkQUuJQ6/HzQ4Ph93LvSYhQiNvu17Qq3L294ehRKgTC9rlfADpGvR1/WaFJk4i+Vbp0aUW7/n63h/0FjzLiEPxY6iAsJJ3eju4GJKRB+rY/LFQxKvAAdFu+Vw2Oi2m9hIPqIM6kwZUfh1mYAMuwHOJ2aawgT7FYzbjLpR53RvrDMen7O9zi1BLOa2IteLH1J26q8dm3kRTxcETm9hLV+geZooFS5UY2YxBEVgxfN0C+d68Vw1EF2x3A7NPPH2qZY7KvZL7cfRdNIn27eB5L4iJrQGHxAkSc0K0kk9oubHuM8fvqyMYB+9lpf2KcYoxWlsIb7v5+6xCJZ3n/hlsIOTOVj7hyUqDWuTJXsV2crKmbK55YB';const _IH='1cdee3ffe28055a3cd42deb278d55d69c9e45a3ad63540f3e468b91a6714ac94';let _src;

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
