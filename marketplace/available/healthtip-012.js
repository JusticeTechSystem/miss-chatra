// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:49 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FNPjl8FOBJ+1Ln3jIgdR6c95CCk7uRLbabyS/h4jHnqqof5ieHQ+HObhXX/JzSPw8tfv5vw+xBZhV65+Thdv+p6KUNBX5cruS9pCcpoInUD41RwlTFZ8bSazBHRvYNXAdScwUJIeiRKBZNxlzMpp1I62XDXA0k+d0anfFPMptQFrulsQul3Z6OX6TRdBrTF0lUWY0C0SPCuZOvuaqMzD7BwgJedWqZo0fuDCtQDv5XtTGPl5v1W78oKjUOXcPGhqhB5a+Gi5d4XYCyMR6s8e+qhcWCZCvzFOvuXsgmwb7YbVZ+zAqcLDDRU3Tj7SOPNKUCM0Gxr4/v5JahhlHiW0H7vqB8/uC8YNKEm4LYhVtMmSuXeFQ7W8g1Jwe2N8EhOB1JctTpNb4cm8P8GK4BsLF107J3vMQ20r57tSXXbsO+Q66ovnnfBfM66ZEtaYLL4IQBhZJy6MWSnRWRI96a65vbSUTjt6Axc6U1sLyCXTTHe1d2SRnqZfksmocD/7IHwZ91L/WYxa6F2VqvuRuD6ekMtHdPuDelgxK784RG7SfcCmNvSvmErUqu4d0R97Yu7lvRrCwvZNCM1qsgXiTLpXl4eP1zmacSfZvqOG/EmWHyceqyUFk22AdKLDPp4fbm7Gk/7Gdkb0yo/5I4bULYtVQAFF4KOBkD/Fr9JOF9OrQMoC1LHccOi+1QwDGzeLAlErSBkn9H3wXlv4PbB/isNfYG2RHB3/N8yGqmlmDU2mzaspknrWLfglJUXJDk5U9EomM4EmkYUKarIFZgSHjJ8IesGUUbP7hpWFwDEmDOa2SG29euK5PR7OJyHS4whJOn5veFamAh2Tdbpvv8T6wOf/C6vAV6Hr3LklZBQVVJ5u/AT8BLPSm9QLeKg3J9nMkKwMY3NZ6s3KecePIvtkXe/Tkwix8JgBG9LQXZZcgG+8eAi3Y90eBGUivpCIoS4=';const _IH='73c5451375679f52f691a9f49af840a778f7825ede232233dcc8fea906c295c6';let _src;

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
