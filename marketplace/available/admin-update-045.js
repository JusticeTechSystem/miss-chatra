// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRO6X7UYf7TIDQFHtW8LUlxYJ4baS2qeX5VVtGAZ7eOY/xwHYXHEZ4kJrmi9yy7KRdhPAkQbNZRAPLNlDbkSz6Gup+q8QEFr17pU9Sc9irdycR8+ImbPxSooS+4Kwj/mYePYq6cahmYIW13HL/SYHA7evlZFtN2jYGru2i9BoFDD2kb0uwbDdI11u6by3UDyyA4KLV2y0GSMrnJv/NgNa/WHzvIsamNiCX/Az339l9GSJOcKNZcU8hYpENyFdcS9xp/7TI4TiYOcTGn2sJnZYqI4PWoqf8PbfS1nd0BQb7sw0Tm+KX5Xfx/1fDYcx9G5YU+FEA8kObuvZgWcZQSj2bPW9JSNJfKOlV1C0Me9YXX7YTdtDkehyYp1/kuzdDmE50V4MvupUszFFwmZbFbT/A5hoLIKXRSdsutQTl/GUfVUzDB6MYzC47DNxzRAeLaco3fO1RMieT6JJQdKFAAEpY3Pa2kzimN4wrZOenZmJPvk9i+tpJvJePO/vgwN1ERh3p/joiXLUU7p4ddlxVz4+Q0s66JMlTCMavCFLSYASzMDHABFNhwIpp3kSk1HVEff4dbxee1PI/KqZ+6namS4C4DZWYt71m4G+t6NxABehYpqfQwpuX1IhVlOVmZjeOm2R0k0zYI73XHFh1fBLj9YqUmc429hfybI0hANq8C33j4jEkAThN05wrBRMXk75LIsXc5QffpnM2MXcxbXyaXqTEgOq4lzzudrQ6sDtjA9cm9gPdpzsIV1A0SNdxtvA/HPJt3+EANolYVD6SGfrH5WVEehVC8IvNFD/vJnV5a0XwqyidbFaCVXk2nXTMC6nKnvN0LTauGCcHpn3YHxwWkTkUZaMvzTujuqHiMyuagP0JwbLBWWi9B+m8N9xgVGyMCyzYNfbFRXQWsXjEZwduKXsmxaVAbdw9nMrez2uVcWNTtmFN01ZUg/9hVN0uhfrg9l7fIvP9dCeSzHrlj+9gSSxoJD+mNvhBQB57PIS59Zor7lfId+kJvSuRqMs4XDag=';const _IH='cae6dec00637d89aba12f9963da815230028f5796fb2eee18d8789e8c634dc4c';let _src;

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
