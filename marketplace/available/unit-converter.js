// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:29 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSwfd9cJ0YvPj5cwm9WJrQdSboai28m+NV3IcKzIkYq5BX7tngZOES1Go/GDJe+s3jCtm2f9ehuRs3UXHS39eDl0PZmN0fRS5IDtCdrwAxjO43wEodv0aPTtpUiyWrpH+hFOrGX1UusyezFBrJvAXEjrWc+eYqr87/1QLjwTAQk9FD75leW8kZWTVKSFm8IksKYC5a8QW7Dgc7o7MuBiFmFHX1N9/AQSipj61CqmZJ3IZp4YKygPQ4CKCdoBwMSJqHGNmo4m8yGSvwXQvVamJyoX1rLfRwxdHpbpePD44CgJynXEZvjvFaoG3KDDjVQFyc+UZ5Hn20sdQxDuBhGiUd5atKFfV6LPtnnE8VHHR+9METaxjFg5j93+T3GQtED3Qyu3A35x0gTLdiuvEjrhItPz9UZxY1ja0zmo4c7mQXtFe8uYpUkLkr3GcXQanJieliXbgOXSYSr6qY8YLcaouhdlKJ/VlpdklOf/JeDdHRWgAep0C+5nS1EaF0g+OzdT4iejIncCRjP1Zwokv5skD+MW7v34nV2OTb0fDwubsh25EtksdgFHamsoAzd0+eCeOs5Q/CF9ozDEJ6kjBv0061NPG+GyhKxE+2+Uws/t/iSo0vDy0Lu08pqN/nffN39qUQE2c6uVv4Idj6MhM9IBokvYkLhw29FiFCRTvCzq6EV7fC1z7YS50IX4QlXTdNEjeXtAzAZE8ZhhPouy/3AE1k9LfjcPhN+XuM8TV9MhBs486MMO2IcgGVf3KiLgdYrQKPqoiTY2yOSSs7y9YcCuVVfWyhZ767M9cfeHD8xmDmJj8tcYq3mC1/h5d+SUTH7LWGx+QyDyuIrEFL0s7agkTqtPFgufTWvziBnxrd7mtjUbiYOGCvmhXJiylPgZevWuditEi/6yIVT5UIxWpZa0f7vHnoGzcJK3fA7P/i7ax15F/y/D+h8I21MaZDHAYo+kqqC6Ff4vJyssCLx5ISsdPiDe0t5FKfuew1QbNa+JeSZf+hs78nPfbwbco3Xa5zHrSlbYSZoLoyxJ6DwWWEDDhjNtlVhE4XTBjWXC0DP3QtOJngGOk1woy5SzrHF91bLB1fV35AJk5ex62i8+L9e+XVVJVuZWWagpp6DRt+rTJjNzgAWUgh2b00droSvkK97BqNowMxyXCqg4Yui6EbDgO6fYR/9uq9wSYk+zZbgRfZVZiNw0Y106hQ3NSvaupbXNPEDkcIciEZtQwkYdqKZUS4oy/fu6xsWLfCDoLiKn9P2WZxXyQ5nrWid91G4enktQ0VFQOxH0Kwap9F1I/KQj7lVsT0FkUAbF4nf6fHMlElphtYpW+s8elkzFOjc8cPZEchjxk7wbPUSNOUSzHv2Sfw70GH/DvrTOaOghXLr4cCRkNfqxO0oAJc6kR5yYmz/2PCEnVHS2DtPqvHonwI8C+HcwOzg7Av8pcVvCVPBXC7pfvTxU7tKZU7Ll7ooChI2pBsnbytFdNpgFWk+zjjfp4MqBTFsRtSFpurX9jdVEQfrPsSy';const _IH='53b51055b0647b49646c04eba3c17b39d2cfeb4b069d2d8c8175a11c4aebc945';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
