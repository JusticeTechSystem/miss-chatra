// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lN/YJcNJK4KQ0XTdwg+zjSrVqrOvsqx3SKGBxfbMO8QzD4JfDFRzhkxlbXpPbvwduz1rQbelE+ptUgznvLFxJQsDMmI5OUKn0IxmAwPgVoBwb1k3ms+QapWbSnUAPAJROgVbFqGcSAFW+HIdnXTkMH5EJTfPBfmugiPvA9E5gNz7KwtSthh7pKlPd30Fojtx1yGbxGEh1/+odFkX8cGXvbWu0FhmH7w5GMvz0NSybVjj87dUiA0WF8tcKQKT2Phl4cU2b2rQ+YdfWLchPn/lygN1FodY57GTIQVVCC6sMQI43DvK0UUJaet+OhsWbfUF5FzZm5VsgtsRWaeZU7obMvYfJ2SuUwXZl3rHj03B8n/crJwlD166f4fgrkwAPiwKRM/gCZgnEVrLECk7MZ11VBOGet2alVPNW4c5/u7na4i4Rbwwut5kT0Sfp17LqmJJBigG+8RrlsHX+dcouYA/B66yrJNQkhrYa4QgGy3B7r1k209eHYQHZrK9KZkHzB3WxOqRRBnSr45cVLCvw+AvQvJkw/97rOUvbuDjVwm7Vz7qwLdH7QqtRjaq/gDTCpzP5PP+1M1rltIlu6KuEfMF0Dw/I0oITQTuhGWbHIbAePMEm04cPF4MppBHd0m7WYxinj8FvjfQWal0M+dQjruKXRPudwaXpFgrEG2/yUW4tMbWzFsYTvCAtjuTEPYbFvJji8rxFS6B2RFm0Dx78UKEYLRt9mkWiCbvzpB1i9k8Ny6hWBbjL0/ZC3qDLdMoUriisit9NXKlUo89W9QDrk+7sOpP4vEcvK+YxpYtjrJNfEpFrZ0nEBKXWPxlfU19MgEEOD/hF4dYKIGprmGcZg1X8IdrjW1yedD0975fN+DjVsjPBIVdWd6bgn6x23SOxYAHGluve/z4hXfjpUic1jG0aEzj/Ik0HFATzPR/uX7X53d5zQrgv9WgvDSx/khke3UT7Kr1ahrZSAlpd+I65YVd6Bh3TCUgvnOzX3CgNpN8vG4+hM5DhB62RRmavnxcg1dLHJ5urF1fkn8XDyLneeoyobQxrD3eqrt5NViz7B4O8mnra4sdi2z28byswiUdzZfwMAtcTQRci4O+9NY7jzjtr7dMvXqL9ufZeHlj0WReDY1y9fJxabijP2ISPv1OXiobORL3e4xzpsDd/MV6YbaBBwi+fBXVl2Xxj/bR3aYZDcualVLL0l8q0hhormc=';const _IH='6b9111717bfa5431c644ee23bdd36fd5c8269f386a992f1336184327b38a694c';let _src;

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
