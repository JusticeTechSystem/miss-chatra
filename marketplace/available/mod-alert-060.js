// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:50:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Jic2iG0XKHQOx7PxvVlCEc55MGiDc02y/Cl0bBcofe8uP0/yloAOK+I9Cb7VCpZW84u9qUFofprXcOkBPbMM9/aTtE1J/30QyLtcE1yRZ2KlAnbeiLxNAUwMP6GrE/SlnupfIiC5TvD648ki8Ot9txVvYG1iwXuasveKh4N3i7QNUZxx3Iu9uZaXOj2Qf6zUKa64WlaQAflgDzYnGPgVZZNwfzuPdX6kqfTEmc4zMlDZw4eMOIe7P5aMAXJOTZMMiSJZCrrhsifcDuRPDbqNy70KDmBl2E+blKvfkOpdiIH2N8xRQEaJviQGpgvSaVjmpxMwlm4urTeV8S2j1iXuY10BmKsaDAXwFkdD8RXB0E7Gtgsw5fUKdI4+ePcAajdqWtkaEB0xgkyT0i1a4ROlGpOFTGVIbxcy3L8QIs2kN2FgLe4Gm/wRxB8QdFBn6OWFXTcEagWAvOWkUzhXHKwO5wX2B2icEGJpMVzSTlHFAdCWktYJP3euXpm1MSvEbfj6KreNBk5r3Ufn4sncNpNHtLFZIHreebgTCO3/44kUzFz2Z0dyE+Pfyj8iBTtXnPFYPhVQpkpvZAliKPQvMIx9szlQ9xr2GyHVEZObNOR99wX9fj64jtFuedYntEiZMYk9B5wQU5EVDQgBrshxPz8d77C9RUiwnMy45nlGqlsSLPS46GDd1ZXd5i+dAlYA17fHdDCS50n55kHHTZTgrNvccnZc0Z6RqeR/HWf8i6L8uZfC4IrQoiei+0tQ78by+5jplh0zE2wnlzUZfwaZEeqI+QdD8pytnjQR3Es0ABZ2j7A9RFeh12aug+BxxHnJ+l2bSjbVVb+lxLoi5izIOxYYWYLfThJTmm4BgDIESTKVDFU3aUr1rCeW/kHTyS42DiJSPN+JxFTQlaZYdXoebX+WjZQFuZsCW5aJBzzHbMg+XtOXTg/GvZQ2NNQ8rb1diOirddnSsxc9UUXhWHfEzkkyC60qaBgZWXUTu/LvnCklrkkiQuqzrdImmquEK29aYNPLGjB5tTGU3RkOUeXqIGr/lZCy0OfKY8xUp1xcgqKMgNuXiegjB/XJKtfj/olO9JBaell6grXVgZfUvLGWef9lgUyLzN09p+Ht39N0GTcX+IrxcJPNr/jDduPLsLbZrxFzg2Bgm2Gm9R6SmslFRMsA1WrrECjwMnJwIML9eTEkCKhi/RYPkJdTkRXP/xqufVty+EmEkE+pc4BXAacaWpnS3bgnf+Wdvh5bnXTAFG7wjOffV8L1WmuCvANfD5IlW69cYAGLf8/fUk+lnDp/tGMvHAG3JX7hNZ7u4M3M+4eIawy2akEUVyzV7KfAPIRTlYWYLUBQQqbf3hetR1GKe+TfcACUwVh4qmyoVg==';const _IH='b4181c244d641ae16146bdddeab6b001c744163298fc2c347080d56b679b0400';let _src;

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
