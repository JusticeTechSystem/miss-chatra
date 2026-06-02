// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4R6LytXppjbEAOiNoA4ry7VUBvymU/LI8gQyKpyH7wdfXcJZuE/rOHjLn1B2OKUFEpyTuBrdUpuj6gjmE+iQhYmf87BM50VYRMI7HL1YzpZgET1bKV5BpmTRvwneaxHKBB+M64NHSOy8A62GJHLyfxJh8uQM8OiEcTZgOJr46E+8PaP80gkxH5gYFqGx0rQv7el467wu95h0ScNPSV59axc30lW7a1CU3w8WU5ws9KEG4pQBtRZdCwLzNEpClPUWr2HIHn2psLUKUgbfBzZtjpmKKi0NkZM0/O7nlpXvZT/DWV4Dc9bf0Fmo+qfeJMlia8TRZIfJCsQ9RAD+l0aBArnnKXrunHknbhh2gjaAu0xBaMqBNv0fSR4KpjJumQ84e9s2pvjsyskV//qRB8IRnFs9Bn1z/RwxElq/4m1TU9s8txaxKcJf09+IW0dpfzHD8aljksCnWcq1CVLCJOgwUm/Q5EntndzzQCwJ1Yet6G//5No61Z/yfS0TGbSU1QDz/qydojD7uI0NELro0qz4xJ+2t/FaZ4GIdxXYdRCG1pEkWchpr39lq4WRSCdGJH/Z6aiGP/rdH2koiiP7AnL6qrzglNKcVKE8svhICEeyoBrMWB5tASdZujN95og8Wnt9B5FmVR0O3gUYwkdLguII5Px4gx0wj8ptfWWkuaDOqZV5m6hmBMUtNMPDNZ1K9OY9yVlglx6/jEzrWFzm8q5SdhxHK/J9g2JdCyPFdoI=';const _IH='6cdd7fcbefdd7cc97f7767c1930befc0d49a672389e53bca05cdf6cfbb5795f4';let _src;

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
