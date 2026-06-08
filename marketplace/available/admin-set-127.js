// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ok9VAKfhOUbUFPOXg34P+NqS4Nhv9BtMvTbsUzYLes3J+xjXBu5bhfW/l1MCECIhPTkEGzJXgZwcysqBitoL27jkMEpl6OB/1REafYrjh0lxf4aLKWUlpNnFcxnBEov3vapFxLZD53ot8OP1aw+Osq/sbl+A+Qj5WliCCdN8v8ePKYTpMtvofyT6X0XjcxUFg6xe0QpXyU0KoPqclt9skPyw1u+fvIn+okPYFbz199y0BqRziFvR9KGv/Z2t18kgTGhNGbqqBTsHxDH19lKzUWSd8er1NFbyPI2sTWypxb4qprUQ7nK40ul1BHKtdpHdv1Bd2a2O7XV6BIvyE83/f8rfUyVYkV8szP4ibJIEx2oUDnJhQvCYFThilRFR/nZ+Y07+PVyVo/hwk/ukZQgdcgoFWSHDtC1+gMAwwAI0EXEJsQytPQWlb7MrrjaTHm2ypvLTpBF3uVcwQc4++djkaNkatsGIszFiJSOiDwXrcCY6MhG9ln2UUEWLMb3j0Rq12T9y9US2di2c8PKcrbjuZ0aYF20ba2QGPX85h0VWROvEJNXMrnTbRl9B7yLd3hTJmoTf9j4PMX9xzLjv7jJYl0l4gLuQWKloTj22o2N68nJbxQjDaHtV1N/+8VPyA9q55HNjvt4TcaG5CxPJP9d/tg7PacbeX1DllcVGp7+Z31S6VKYMMjVjOHeLWSsRK585I2UXHD1Re6J27+wxhcNi1fwBWvtiljI8cmyIAzqmCQHv/KsTcprAEkqqERy23W5jlTwxgsZW27+94KRQYromFaDirhTjMIbEhwld+hu0YB2vd3X1jTN+3ytLhg9S1IU8sbxNt/RUY2Sfbxzk/fKUtzmBBjOjkFxiW4KqpnSmrx4ZlN6vFl4lK/0ir1Nrz1FxJKLOLLDlbfXkWup5S0XaudDNxz2RzysfINk6Lh6wDeHcr7cOa/VMqlo5Jv637pnulNUTYby9QT0pSaT7I2UdFavImVksRiVXwUa5dg==';const _IH='3f812b0de3e7477582d4e8fed7a1ebbfbb5b825771ed7bf0631f954321fb65cf';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
