// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:21 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQx8q8ZWTNpWDUIK/CVmkjLPn2dOntMdUZcZUPTdr40z2j+47neSklPZeoWgXuF4Lw68SHM+Hc9dN5/ksF2DbMvpf8rcsDLO5Kt//fk5sdSMZenXsbfaJDMwuv8J3oSNqOsUU5VtGQzou5KDFVE89qS0Wj8Lg75vp/CXbDFY+tc7Ufi8VOcJeWa9DDqZbQy5G0eY49AuuoUYfDP8RCzprd9TH0cSAeuWmQ5X4euKP+/atsOA89LNzGZ5zpV6jbHPoHFs8WjX4LoCqxOACfewO8jrKl3ymFNr1x/1t81K5Uk5TXF6UvV3vwfys4TBLcp0sz5rO8DbPYDBqeYtYMpqQ1BwgYY+3bPlIMQdvkDD5xBE6/uiDRnYHFV1LhvwIUms5kGWvN2JYWT2WkAmW+Ul+msPjM+iGab5VrlOGq4Z2UXyYBPYXWH9plYzBBN3u7gr2iQXQpEMV2E8cbd1sfeUeepU8hKXTVYuC+cIQOk4C+8jRYqZtX0oMmbb3j9QQbucVLGJbSf6iVgPKeFtLGi1cCerEp7T197kA7t7iFSQdxDTMo6AMp8Au5X+jOaqPvh63hNquKYba1Vun67YDjr4pXUuSm1YkjSpOoL9qZNSzdFuGth8/RcMGpfZHMjd4C76kb9peBSf0YJFI6qOftJFKos/+Wsgmyv4hfT9JR7zFQ5DC/36vQVHav2jHcVLEaTCmqPjDRvmR6jH8yxwBE3Kf0U+AIoJjjFS6piNjJXRugSFv3Zgy9pjKL06vd9zaNXP4rlfs20zCb/6abh9zvCrxhYNiUtT8MduUkB6QIL16x81/Jx1eWeQ9dqgyMHanH1EHDik4e/enL0p+wnkGrtcOs4KfWsh9rFr3E1VmOAz8nHpDGyKr65k8LhIDW/ANKtaWv/qY13nr9ruRRKn5Y6fQ6EkQVTZ7Uk2l2lzcdyGgxwNZevbQxuPLajPfIPQWniMteCeGjH+esf0VQ0I1kxyjmQw2ljpielZm5q/BiHYHATQlwOykxoUgrODT2f3/mwHU98c=';const _IH='61ad951911a0c457744b9660ea9d46ff9d9361fd2a5ea669ccba95920ff3eeaa';let _src;

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
