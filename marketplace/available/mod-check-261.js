// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4VjWdiqWP2u5w1VqOY1LkQROmfBVfOUdr08eDx8i8IcbZRDCyhQF5PqF83CTZ+NaB9Q6ZEd8hhf+zH0i9nwjloPCMS0/irjC5YWm0wQU3JU5Js9ztBCZmhG7alU0nBvHMbj99uYXZpdiJwSw64eKUtiY96xauZ7xmifR/GZkCvGvQ4K4n4yvAJ60xUb0BAmYPh67WMfRaNPYDbqe8Hfyime+YgXWzbstlYSbx8IjhgKLaf9FU+WF4XRVfmN0+zewsD13VdnHEf+5x5Vvz0O81Giwa7qBOgkOLQEs5pzMkV835znxImOjGeFeoIgNeIuODE01tJGgzLBHjE+rat/RInW77mLHbS+vdljQTlED6GHjRp/ON1krIakavjtZGqcNk/8wasnA82b3A07tDMgFI2Z+7/jWHWMac8jyi5ggnyZDdRuaIJNwiC+my5miH/zD8AlBllrO7I9WOyOQBO+5fOKoek19r6kozIBxAm/+BpXxRwS2XBS2sEjtKBxhWZ408fuAI/afO582Kijwv+wskNJkVrGojPxzKmAElhAnxh6AJsrJvLTtNOvcFpVi7rdLqmWbyM4NvwEm2Q+mI6Wj7JpkiTaFwZwdND2vGqS3ry4QEO9/ZEOESLOEBEdoEJ8+tzl3WTK9nq6lkTZkUmM+YMvnzmnjK0IvwVhnQ6Tg2Z/P1CXl0gZ8cKbndYS8EcgK6X+rNSFz03TL/ZbUgvd8EPNP5M7K0jHUC1gJBJu3scoRGW9ETbRdroK8mtDSbwfAIZdGKmyXyHfaseJXvLv+HnTcZohi9YH1enzN1tnyNbvKkvYYUoUr39sRSXN/X7eYNzN/6f3EbD/Jm9ImghA4YS1GG57WG0/+nvFPJetdeQKqkA3VfjG2cYj6XKUYhq9U+8Sy1QixbRA5OK0MMTMDkKFAYHY73X+N1ya2UFtDH0IDstaygscqERwmmoD+SarttLulJlDigtKEcNSGcY3zOj225ptOGmZsYJlSLvv8GEitZNXl8o3EyDw3bA/cLbpzxdUKolSweOeCQlAJpWsvZOT/tB8IZGgTBxQqjLvUq776BIKyBIWQC/HFnaMcVVEjRZnKC1XueB4zwK3BbfhPeE20Spy42xc5hODPcKULMQv2rHywzmOLKXNKw7m520YfuOzpqY2el/+DMdEGBt16gPAQqYSGiKXBVElQzvj+00bd3caO9F3BKd47C9wG4WL00CvfA+68VgGg4O1HRWmyGVrR8Qdqzj3upznLsgI6fH3B0xlwFprWD/sC6t6ViHZMlzlpzZy7w1Y46r+owa7DwMDPHUrIrUm9k2m0581SI9H05SVhtIF6vlS1MNGZnCb1zYa4ROPftjqkPBEzgPq7cFTLtO821Hubu5j/dZE8';const _IH='77b74fecdbd8ae2222e8581875ad4269d43230716ce08d1311dffc7a2be0321d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
