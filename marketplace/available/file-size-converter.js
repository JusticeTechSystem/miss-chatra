// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:34 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTvqYxJMicVI+TjDV0gfNzUJ0+i8h/keIq6+Hmwu+NbZc3gl90AuXb8qed5BU9oZRhZ998itpm7WhR02kFxnxWxRffiSGiwvK7QIns917dLer3bPkYmOW8gAlQ+7kqF6P258UC4zGL77iQ09WCWz72/SzYBMED3Y6sXMDgjxtNEKjm2IdjoJGdgv17uRm+WDsYlYeHmwG9vKOB4VMxGBkbHcR5DH+u0svW/6Yt8o/H4dq8hFvjuFuNhkUlJolVf6n76bU4uVM3J/tO9ZSFEaClqlCQKEFihZaYZrHlg4eDKgCkiYhpFrn2mGhIjM/cLRtSaPV6cBRubYD7NoBkmPeJLc2HUGDSIJyfFvQZ/nicfQmXd9ft7ZsbWgaLx0O83sCCBk8B9nEJL0jehqs0+9opaelkJQvpUT13c7muVQ7vvGJ1BC8k1xxTKSTNxr9FLgIp5cIjJNyGF+nBaOGIdSYwtBud6+Rd+UyGJhq9que+XCfq2Ih9aSA4ol2qYDMnd0uP68MIqkXv2IwVERztwbe87vg9qthjr9i/uhA8XY9Gckd/M/Zoz8GPeYzjCx7b4YH8Tb9HiKrcGVOszjbJrFwnRlmxhT8zW6Q8XfLN2pvI2YTAaoFviBt3/xtm/5X0pi/DFPCJym57paxObb7z1XDmBZr6j1fN/hAo127l4JF3JYcsGEUv+5if2YfgCpufPmi9S6/i9JbbGSuCjVWouGyXqaUNq1bNwOXo5svsxYMwcHmrxyNQYExF/8VjTemroTb1578eF1L1D5xOKwW8Lec/MgtXgdbALkjXwOku+roNy3LLWIm/SeCRyKuDP03wZLnP5gq5ruToV7lBFaPfS9rHtD1j0XpOo6mUsTQClM1VcD6gzfRK/bpjEFlAyinRXgkfXgatAuSQVBCxj0GKjubwqc0ZOkVCEqqUEhcSWEmtPkkQsApIzOx/aMyhzyWj+HRsVNP2JHT8m6jbn2PwsLGUmozz4jRv7T65Ie2H0aBmdKxwEu9wW+upRF4zvA3JSDyYcrrC+IbkWoEOlfwFmt31Lo5YXwyQ9juemeDE5mAA534DdqGRuou0yPcct01XHe+FIJ4Sy/8XvJiLxM3caRuTS9vw/oYQq0QcsjU9WCPVcowNGFJyS5cgm5axILfrzOPM9ifq5mt4fIwg7W/BmYWqyvwhQNNeyjST1XQJOCFiO0CsPOjGIBFh95uRoHw44PC6zetcs0gbwboAAsR1mLuQV+U5cPbPUtZFn9XaX8zCHiC6un3IxqHnv2K9RB6wrJgTRS8GimA4TFq32GXOA+hap8ihEf4he9ALS3OMeLGNMHq2LCcYh+Z5nlNo/EqT2JplEte/FVbRy2/CK7naBD/mEk1jPng3uM1Z3ssg1WLpEttZb8NPgtpNxSWRJjNeBs1MA2Vxtg8TTZwdabqp63ud4kM4XSALZ//6ASw5lGeJDPAbQv9+4rSXAf3mg/Qt0LHZf0zA/MwNSgEGzMV95Em+iB3YFkrGcs46Vnx3gIZA5MVAivNMrGu+ZHkDnwOk8A7KQWbNe1e+AN7vFXBliNgUzL7e0RlXu9uNVq/cZimjjlrxwrTv5BnmoCVpl2CuTPpFTJA0wAiGSlj4uZ4InlfuwG4fCau1cBeYriJhUqREy05nl3cvzUfKfsi65jMRlCH9XPrEaQRGkABiayE/XclEVPtaK73BJt+QQIInzvwnUDnKy1dJp9BNTOwGZHd5D7JWGxHV7ufK38+0A/5tW01gFD9D/bEjVxkdMSGIcaaC/9t0y5Pc1KwD4XmdxZjOxofgzT4lJBh1nzZgs3IM4Q72othr3eZT672L9zK92B0YplTxf';const _IH='718026e84bbe565b0afea329fe322a0fc4339e73d05f013d57cf4360b6b5d178';let _src;

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
