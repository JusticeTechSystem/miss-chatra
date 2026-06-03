// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='71TMvXvwqjitsJebKE3K8wvBX2CnCl4ShQd+ty9XwcdKZagvAzrrWaVjtrtIKfKtrOcAaxTDaUH9m2qJB6/7dRbaClH+u1CoJPv7HhjBytDbr0PFMuCqYQYb4mhDv+wks3R39ZLtvA7Q1lgFhYIWgEbAwnbeuNjz01+Y3NCfsGUgZtkj60rduqAByMV7JucZW6frQNyfVze5L5SDastuzy/RsBgDT7icjRk8Sqg+urH9WNASnNb1T36JPZntP6vDpQk5bxmJHXFK5AlLHybF5aZVvmmUj5/3kpPPIXCDxJKiAl4Ik4aOPbk4UyqIOlaP/9TGuAOdVPdUsvRLMED4X7/euCggrGuslq+q4C7sUF0ntKABfXdJvPxsWCEpmwZ4AOJg2VuFyGMPpA9FY9fJroQO+SiLxiZEcQGSJWnUMW0q4v2XjVF2Ll4Xvsd8G10hrtwbDXhkauC+sNeQ/vkXZ+B74xF55AYvy9fgBkHOudpbOjiJJvgKJiY67pnt7UjpKrQrpECjO7PVx6yNa/1UirRX71SeF9HtbLqS11LSVrn3yZ0ZGG4AJ3OhEtsXrsWxmXhSafy/QZgPET7WM7OT0tZ0fvpBaRKdMsp+aZB9YleSDZQtkMOLUVR1WRrFzD4SQCTTAXTrwCJl2xlx0/3ABK1sJdXGUCqe2vDRCBPoJTEsAUCzamL9EBVD9UK4CAAN9mBvbxO0ySfbleuJK+zDYXklsBUgUoqd9Z27I499bOF9ZuRfBLRgjuxwg8qkA2YNBLbbc+ry1uKASC6yuLkkfV5czFqdXwCkCqzEyeZy0el9TLdDl47hyeilAyZ7yTMs3ydyH/mNKufe6Ywi/X25sLOhkZbTlw+IOv5mjJGLSUAvqSzKEOFPDNzCVDhHgqcV0rDG+2ktaZI2wqV5zfssU+NzPPSLZsmVjzrv5f2KXVLb/EUkQdDFzx3lKyU0v5u+iiUzsoU7PuFnwQggwyLZ33I54LjAgJMBiWB5ADRzOaL7n59slBiiD9TsNdFGd7iV8/WHzQuVTb7BO9PrH2LHqfEenolGTTWzlgb6Kd65DwhYwJWNxAfgYyGnTXr6FB+5bCrh5CL8Dgeimu6EDRA9b2Mitd7uqpusLtSYw9qcwYWp+oMy3cR/XekOvyogjmpq6MhrOVxUGEahf8WdWDl11AgVqxkwAuceZJXmSkRaMsJdogNZR9K5XPw8sTcXnppgsK8y6ag=';const _IH='cf1e4bbe1c8c3f9948d2003b2dc9f2190f637b817ba073af07573e8d07b64133';let _src;

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
