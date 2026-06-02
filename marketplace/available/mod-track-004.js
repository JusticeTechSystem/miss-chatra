// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GHexzkUlUq7jjdrbaVMYXdYyZ5a5lxL0S+YGZE6sN/8d/vtCWUw8/X4dh+y3v2YxtAl3RXCHirWYl1BTrugC63di0Rrz+yCScvIGbp5boyMnJSTf0eSSPHYGRSdriqanhuKmIv5Z7E3ikTSh3By2oCLJVu8/RpH+pRe62kUMf+W95HsynBZXdK21kQ5Fm+q031g9Uh41eehxuYOOak2gacT4Xw5Mb1wZp8cI3HeoWU5Xvz6KUmY8sUCIckMGoHst3EXCMpkACpEcUkqiR7J35U1fh2QwS7pjFQFrD7+K5rrjJzWk1IMKoNOUyMFH9YjpCKL81a3rnWP0lWBv/aUxdkHhEFrwRhwyD59SF2dKmIjFFuHl05djejf9MoaZ9kUPUDrPkZzQJDBbWCmR+WeY/3yYKHIVmTEMrP0tMeaSnE3lZOLx4zbzTgP9YC6tXXTYghTKHVUTyxcCySUtOhgkJ51wPOb+69iB1zclgPrPaUoycrit4CEhhUPV+5Tr8dGbzT1yfR6Zi+FoKSswa8rm1nq6dgibvhz9vIJtBWrWHtKk53uRx6M3EckynYyGs+CG8IKkID0CKf/an8AwdF1HfXu1e2+YalBIkY1Vh63dp+zu0Q50Bmp6x6+hJkM3F/+ATafd52ZwTnw5M2UYn20EVAErxdpUJHX5PV5L4WmcZiWCVBghkEM4ZGyrsRh0KVrLf+ZKj56RnGIHQi5XpJVwpz8E/JuvCMMh/0DH5faDFD4RNyaMh6ssOWTCcBScn3jgy7jT8r/qqytPb2hf4n0R0X9EHy9vOw6e1fY356htrfX7gZqgkAUZLjdeQzrzFTiO+r/BToJVa0knMrZBM2m+Y1whAfJX7df1H8Oy5ID1yMyOwVtFVHgcbEwcc2Ltm9eSJrk254P2rQKCEEbE0CiBOevmHwQhVSzeb+bI+gSlq41Pevj6MLidxESEuog8kHk6Zjz/u3/eGu84tG6a35WDScboLz177LnQC/0m/KJ7uJ2JiQTf9duI7UL015ZQEUDPtDKBgRWvUqKckhWFNF8MKYCM6j6Y7mRHnwvlz3fAB8hj7J54ch+WdiAktgIDb/kyYcTCNajUojSBbUvBr6sJDmBwZSnHeHBgumneX5/IMzxXASFR+1IoDY/bKg1SnpLD0KvHcJZfeINHOapnOztu4tsn2dBWb6Rt1jkGsExsABcnro+4H/MG7DxijvGOhDhRqMJjNAKifmzbuYMVs2RlBtxURkWMr92S3YKrZGrAGDvPeRAuu9Y67uBMXoJpZoLdMeAz7dNYtbeW7M2MMl0OuZIDMmVD6okwkb8BUr5MZ3Jt0NgWFXPOyJ7s3L79K0aaG8N51R3hfhGcpIZzqVTezouuqdY=';const _IH='62c1352ae0f79f036165596413065352a529382ff9173292112658a0a8728e4f';let _src;

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
