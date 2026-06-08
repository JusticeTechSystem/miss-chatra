// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KdJbjKZJapR6tIP4EUmUolnrWzI6Th6lH7Ui/ktQpuvEe5AK/bh9/j4CYw1hFvvW1IzjUobTZI+ufCG3uFdGHpm1UNLrsmOmPIbAqUmvC2MhX9iFKBYhNhGDJZU7GtOI3/aS5pXYEV+nZkOwXnnA9q2XuklJeyn3kh/xQxWlKOd3RqZbgKHdkYoOYZhxMQvwv/RLFTofxy34xfUIQ+shhxgnztuJNvycTCPFO51gKQ0hqb6qfzRKrQXjBKq8WhMnhavfwCiw91hQaB5ziVXj6ZhBSxPpOZJxL85g2Fp1m0WVYJUY9Crt/BRkHS5sCwRalswgZA162B9Xlz6zIyvXa2qhCS4Yn32CLv5RLA+sJtOiNiYTdUXj1kvMfwr8O7F3FsRflhxJNo8UxL3yFPsA+4/6Qfhq3LRRFtrgFt4i6Z+5x4fuSF3A9/xgsuuyC2ZOmBsh6DTRLsFrpzuTIGCe9u3IHgi3AcZtlR/MThnuwmEnkMix/hRF1+ELsUEMJfxkpd8SPr7jmmrbSNTCfsPGVHnYtQhMQv0dd4NftJj2xX5cQ6WmnBPFtVWdbDyDitWXn+szMmjLrAa4cW4lW63p/XXyGA+/khvo658X+EedSpPNUOvdXeMsfW0/PEiS+xQqwcnS6wKfDfrYLGtzFOLxtZ57gb5T9Obnw2oOJc22h6Hem6GEX7jJihwTxQ6/6aTZ/R8bmSM+rVj8/jzI/hF+ekw4m2lGfFCwx9ELEg5ms2CGETEPoPNW/2a3dn0iD6K5ft4WflEu5QgxsHGgYTmsH4m/5QK8EO9cuKj3atr//tc6dz4JapQZoJN22B6bD0l8xqyaa+RST2j29wODspfRbk0gl2Obo/fV/y3d2gdBMLmMas+mzszLrJn3ujAWf1u+z2dSFNIXxg7skmWi1yMUl1gR/uyYOUQxJATyfT8gnEqs/rg4Al0EeyLIouDIy7H67JsX7MFhGYBJ5pp/7N+utxrgyuhEKIrhCo2pRwGm8h99/+N0hdpCaTsWLQbT7sjgGj5YQQ0gaqB4MkWZDZSyNg2iVTEgJANRlSFXmEao40CWA3FCnSf5lcjPJxT9iSbAhZ5mstbb3i1uaDPD5/BtvGwpRxQFoYgaDxmbv6WU11i8OdpqXeiDgb2eCX799+TiGQH/jfGAts78OGoL7y8w5EVlDVwU8RMY8OsolHt1cKhbZ+7mPpNLZCYIRJqaB5MyIyR8SORGJ1l5JM8BvHJom0nMzgfsHc/+3HWZzcITtlg/w2rVf7Sj5HTq9XA1ollCa0TqwZY+Y909VCip38jM01BObGjdGzEc8gQk16VY5kiqSm05LhReeoFCWVJ7gKDcdSt8s2ySIhsLMClLJZC0RmQJDrQIvZrsSUIvDtmn';const _IH='a32de7b31be0de9ee041153c7b1baeba0d91e1b2cffb296a7d3827703597ca36';let _src;

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
