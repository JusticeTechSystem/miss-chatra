// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:44:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='INeo2IVCw/f3obhf+ld71OPz+f4GqfF6W1lsKH97Vot2ge/URsbd1ILYv5oPXSgzpEB3IiTUACGciRVOWf2PYH/vyFbqm43WISAbB5B5RlvCqjjDRzSD8dr+rlYZNmWqb7OjX4y7gUNNzzap8jKnLOMvRE99xxDuEFetM9qwaCgSJtDEq9IuQTYrP1r+pCIpgf1NvdeFeIqBMSDdSSl3BrvdCjyc/I7ej4OybbnXdyEKyk8RwWZG3c4HX1WZBkdPGcaL0NbQxdC3K8PZIkSH1qMDfLq+pKrv2/z0zd54/2Ji8mYJ5O7x76B3X2sa1wueorrV0ZmMK30L6bP4TT0fZv7ei/o/yIyN1a/3cKMheJC5M4+yWRc+xeb9f+D4ducuBl5Xlc+R/pIa/PKtwHfd1YCnGMs6Hk4p2Dpaj0UvDpbxi0QGIIKLnCav6cVyALps6Rvfc78VQ95OHA8yI5/FuS9Y1cSmFloiXwfjQcEnqSO5cB/6PRWbA9IX5hDGnQ2U1N1R3zbIbt6n92STAMzyOh4Z3k5B8pUPNjzz6uA/j9M8cKGAsGTxBHt8O5N0hLjAor25Z9R/fA0H+Yv5YW3sIicPxhb2dt5fHYlIOuqmN8Zxw4l6Fi3UNClq0QZGEEYxRzGonQl5eN3gqzEIx5xpW+gI1QAwoFGvTcS00JCss86a+q6hyvPhjgiPi3NeO+U5Ln7Y8nzemSBsKUbgv2WucaqVHqxQTBFywL33Z+eYiVibPhIdXWm9kxJU8c9qF/EBM3hmqeLAF0DQ7sM3MEcukmbJF5Es9yhkwYlKGQsm1Aa//fbaef4acKhKdPFqET9ODsLeYhe5nrA2ct7HYe+feUJv5EvzXXFHR+KS7r062BThRGg5hQ6cdZ27AyWBRZHi+qNNkakJq8uxi9epfQFflCcatihIe5fYfZ6Dn7rlno1VbAEWXJtxw3GDHe5RVR9xCcCPV4hdy+2IYf1xM0GQ6juLMb4UenSVHSesdoJQxOAUiD0=';const _IH='a548daf8792f67ce18fb5c2940304b2f0af52825eadce25bc2be69cb8844874a';let _src;

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
