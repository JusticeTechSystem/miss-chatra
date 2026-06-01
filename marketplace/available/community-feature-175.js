// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:13 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ9hsR9VS2tl6jvbMHLz5RN5HO6UEG48H7W0YMfckbQmdQGV5uxLhSO8bzJivpnUAG9nkxsn40U9I3cl26Qhsp2445asGJG3fo6Y5L/850uxP8nUqtm6DNwLgk4RcXhVK9nLht79ROlDCMWKzg+GkCUoJ9IiQDK2oubEj8plRJAlfSS4nixDrOQoRa83f7kULS6zBwCrfIpqL+VEIUhRjOaxA+mK16pyWXT5jpVxWVqHhajRPKd4eVIHHNf9lpoqae2yTad5h/3aPaY++HYTJkMJJETQJaZTtWY6+QtivmqLEcnDMzij+ybPww+gNHjV5NPR5HXnKv0JItl/i0VCMYDzFrr8aMuf5PYeVJVO2DlhlSe4Wp10oFUed+5WFZeU+jQnopI8zdVDzKOWMUqHVzz1AKSIIZuSRexR30VN9Du4xqEUbTv3xGR0tJ30A7VYA7hJaDgdvwtIYZ3lIkUG2tusGOQLhJD9JMQUZgpUy5fAL7XemWw4ilcylkOyOxtqP8r1IWA+3hofZc8T4PV9fMG7ThhXeYS5e36D/j+Ob15aEgiH1WSVYgksUKz/Vl48WY7/qskeQwSvIg6KvWFg67Pmb66LMeyLS/6+h3y+ENQBFHrfhs+zE982hQXttgc3G5IasM3OSqiadLeM9777Oqen513wFuhTxRJmdAx03WfiaV513ur6OZybJsP8XcJ7EYKJEjAlHhuLdKTFsnO+1ruc9rtFkMie8c1IOCj14qiAd3WojS3Z4ycqJFg==';const _IH='49602d5d1bdde119be6d8a1c56d1d08e61fcbbe9f7ce9db7f9d16170ae7dab85';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
