// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nq7FzP1pACdwrVi30rGx78sLldhZXCzDHbbX54kAnNJFcR+Va1XXJIACyh5FBtJoVOiiLTLgvrOVej0GhDM/cmn8EG1DyD4wX8ooaGAEw6kHzYBwPSSYLCNa5aYd61BE5g6xLxeDicb28UueNdGE6qLlbO8BKosTIWTspjuRoK9ie8V2GdOm9FQiZ9GLXwMmIrXuYUhz3Pp8nAWY+QLanXmDU9YPL8FFjqZWSwlpsTa9hwyXZYjbiWYHBVk37rrC/xdDxnRCmiG4LAKNZ7cwMr8Dd2anXA24X95PnTClZtCj2W+AsX2csVzwdfIEkEKfUM8yFIOcq+gmLUfIrjJkSX/nWPviAjmnLHUY8FT5MXCVJ8gmd8kmWTYj1rEQ91VQWDZCoNjLc5y5/drJM92rct+a0/aAHdcxrUta1Mqk0ahckbXwsAEWoEWEHEVKRpVPQZAIjU62ucw8Bdzd+Rsnc8AWwk8dYynitrbjHbXlT1IpskABXvIoEkVWdnuQzGVD65fTPyxNra/htdnL+s93+Vxp2t6n5ZrERZ+GcTED9FcbsIawHl4s+dQ9EVdw1d4XSy+Q546dficm9HEuQdYmlX1Qj8JNDjexJECytjnkBOEq8jGjc3mQLaUtIyEEO3ZzflZ3cFS7nQJaagW8iQX2rfx4Lb9eu06U+JT7sqWzdLtx0rRtF7RujHAC7pJE6IsT8fr5mcKYajH89UUZvj7eNiL0jOmGm6y/tCEvEYuP5bN4pQe0otbIYzDPlx3o5FmQorDhXd5j/phRldty9cdjMhX6ekL1U4gZyiBBqgGx1g2ctQ37R87yAmUmHV/NsRbr+XW4dmR3ihxWBMh5KawC68jxMneBJ8zXf0gVBSpSjXx9QzRuSlDmM2sgza21RdaPA5o3e/HGAHbdnFQvuVpO2+wM/Bnqpn4qZzCqex3HXU/zGofUPvvVxNxnNRjgK5VKofd3tk4BClUXeaTjnw72Go4siqeYJoumH99hMA1MR7fHgz4tdZZuHzDZo3KX0lA0wLdJvwHoaVTlMSnpHkCxZfjrh2IiBJpYVBPbLbptfbfsIvy6wjPmXUhjVQHeDLAjgWGN0/sNKvFBjZ441yKsf0huDzcXKQvmvVTjcZZ7vm8hIPTdhmzhdKgW3Y5sdX10uYuO0pNG+7SZgvn/RRHt7BXiiiAxfQPObKAE5zkNdXQXfEmUOUr3Surfo6JLhp0FSYpE';const _IH='abf39dbea7ece3276f2213ca769922e741d3dba90d506515d5785c1501f4bfee';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
