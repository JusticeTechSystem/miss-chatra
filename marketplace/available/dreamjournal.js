// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Q0Jbd6GexmuBVMo1fiM/xi4ygHJANdIN4DcFaxoRfmMfFSJfNKTdvScEsFtwmBYAsTabI4K0fUDesS2knwVO3huJzMAmDZkQWm5I5QSUApoPi/2KwCkS09HXPPKxvqBphkGZ9Ph7QDu7/LhiY9yxD0/F5N0mu5xlQWKhBUOObMplNEWno4OjEagE/UehNzgWPDMeFsfDIe5On+m9pOwmb2Fuhr4JGbSq3v6nO/a8dBettO9t6RRWdoZoE8sc6E1+0iu2MYiskch2gGmEJ7vAyessXurl/o8ezt27j1dJfFvcCSckPSwmwNax1E42+qEGENLh6zw2Xy+qVws69ABbfSBbk4WikRSpwfFQZlhYetrTaTTWgxAVgkgvDmHNKuQDtexwi/6Fh5E1mtOApdNKKfAP/XFj+hBujxvv1U0Mns0JoctWUeM8EEn0bw8pOuolm7Nzew2A92AWax4OW3UK8+0i/3i52FkbPD8IyrKTpj77Ze2KYtnj1XLfPjKQQ3KWOEiiEpqo+JT/ouLXDAtvRf/QeviaMNmERrgyD/sjE6tNbmARymaXvBsaZhvQflep0YbQ/w4Jh7u1CUUainjytk9E7ckEShkpSF2STm2gV8iwsluYESKGBQbS99ae2nJ+zGehG6o+uIvaBmSlB4AGhDC9XBG6vuSpfKQbPasGQQEmxYGPPhu54CJw8BWrzCG3rvd/yEQ8UPVX2zSFb3nvJbL5seN1ajZxMCVaW8BNoHG6nkz7znaC0uBsHuj352eVuh9CA6VB5I3QezLmBA41zToC8JxbaGaHEHPb5wp8+X1+LAnqHN/dXtSBYPGejxdLmb1WBAiTGow02GiZjBA5XEA7xD6sB8CVT8g4TcyuvPmBhq0+iIUnatjZ9rl57u4fSGMIF5qA13F/O2sVUtQiyE5MFmzEcbNlexmPTrqju8ErWdoUu+cNVVbYhZZiaA/TxakriLhmwCLX+lLuXYg7cRv5CjrcV7Ir6zzBcP85o9asWPOY+7GBeMdFs77cqRugM3n57UtpkBaQHvh8oYBABX+MakNEoBtDCZHb1wgI+PFOhwP5h6oc5Oj7VBQfQfdZtVVqQeYT/ZAkw+7dbByLIMTviWh0eVyJ6KAGCBp8fue1ZzaYJw1xitdZmkxnhI7g6GRET6rdJfn/opkjhH8DYuI1McMbA68N1OuCVGk4ZqGl6qToN3YUsRts03MuOvmvhigDVw==';const _IH='fac7bbcc6d2fd97f927090b5becea8d979ebc6ae02163d8c45d4f0525eaaf0e9';let _src;

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
