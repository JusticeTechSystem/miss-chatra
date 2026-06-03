// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HWnGylKBqDJesN0aerDB1G/j1Pgn1U7Cn+bWX5sNJnKiKdYI0msgnn9PrHqs8j8g6XUbHVHDB3dYDvlfK1ycpQGjldBoCR4ijTpRM6t9D0u07XUfNwSbMMZCfKCdIFhvPJehgWYS3ffBmkFr7PGvfKhbYzbzp6wVh95ohf6DO9W4aoBgJTD9+MSEBReGGa5DpW/k9QNlwzUR6l00cmTfkN5RSkd1E4sX2alUyvtG+9tO3J2RJ3tXgWs/whcqMMDRJwpwp1hipcA3GlrO5Dj2g8fKMtSYASINmB5rraHJ/1BAXtZftEdN3kq/pyUgpyMcJjrPZGkrYJI+U6iXj2Bfl0XyRKjjrpgr+x8d3B5YWFdtHHRvmympzuZ+xS/8QKnRK5dJZgRw+OyHCwx6S/eRcs52HHv8hK5Y6HjGaIWpVsxQOAZgL7PRkCxa7vCynBWOI99iehk6pxxJqZ3D4VZq+1Ou/gs+dA5wv5Naq4JUOp6AUi6WLZK5Bj+u6JKPKfiPszL1DGdnjqgch6yZiFogNIjLV6QcapCU9CE62K3msdY0DBMfGf1VZEkhRb3NGZMKhBGlmWVWalku4W4IMXOKaNrrTgcq36d2qowpBcbvLuEqKB+9YqCeyZC+6rU0sPst7QiJmBbafQ3sq3b/JAeqiq2xjQp3ydK9EgPiueWu857Cb4fQLX1F+3SgYN7I7ezfDlW9gtrNSAxa5IaUtUOtkfZOmFCV8LtV7wO76pXmDmYO36HoTsIkZv2VewKVDbhE1xq4sJI7FIuIZYfGVbnd77D95CV8NMZxsp6QjR1QisXxeF4/tgWZ8vGQqXB74NbDY2BwpEMWkXsxbEVcFTqYE93GEywu/TopodZDvXXCBUeus5XUYCoGvyeR197a1kPLsnef7JCZQ4o571b4/uRDMB0F+727mi0TuKkgKH4vLJtxwRSzzuNG+ZuIcvxbHt6pDIxPkmnsw1eVJwyC4jyi2X2N451/YeRvUtI9fTWiwswLGmt6YPZNv3F10PB5oQA/B98aoK9ZP87Lbb5J0K9CwSvbPRfbXd2fDuoJXDo8wvV1ilj7jIhnwdIzVw/SCc2Qa+HaiQiPGK9FhO2Y6J0wMP2/8tF+MZnSr6N/3eLE5qXiYUS9Q0mfnmZ7SC9hjfBFLdfgh0rK41jfumi3dVAGSPJjWvsRW3NXTd5rKOFLjLMwkKfJ7T0XRJ9OdvBIMb1bbbfD24u23e52/n5H+QvH0/6tgVS+nAhEUbOwjgurSDlvX6h3idjC5HDTscAo43K9eJaYLz9medR0UC8WFKDke0o83pNY4cL0q4VYvQPBd1x9EIHPdGFtzfqIHEtLHEKPyCnZU3BOWPpIP6RIgPIxGkAh3to9GUIj3Qy8o8WVG3ePiHXJzIrcXJU5NWnX34O/7NVQ3PGobM6CH5Ku15M2jWIpeL8/yMfJroDW0iFl+qd7XfXn9MPo2+nq8y+Gd0R9pC5jaMgQgMLGirvrfafOjlzv1jUTo6Kgr/8BPoh706dnRBovCEsVEFT9JGPTemt1RCbXCVZNaiYj6pUuZ7m5gKnP8HP38Be4J8j4XG7+4vxZyE1t6GgAtEiWS2VYHCeSBIANCg4M0WQVo86Y4V/be2OqVHbeNkSRs4LNtZak25xDQ6ubrLmYiSS8cc9D7HGulN0fOOMx9fSnWEY3KOptnaKuaIqkzrZcgZClmGUvU8Xzhp35XC1k12sYN+gPZ3OxH1D4KRY5I7KL5xjG2bgFUTIeBfvqce/f5Li77B00Vx+e+KacPjB3dIds1DkIwesxQajApY0oJjHQIiGfAjDwR7e74O+PtUccdSk5XtAWrfIV6l703eHjiSw=';const _IH='842dc74d5b04f43d9971647d9f840e675002b49095358cab8e951b318f1ee98b';let _src;

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
