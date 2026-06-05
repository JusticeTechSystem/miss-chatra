// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='u8BuOzhLemGZ2PwQMDoSDbkEdWoOA3fDZqjvxIWI6Io9pGAQYZ6dnol1GZzrRYNkBGCgQleZXwUkn6ig4BwoGkRNo3RXfiicdY3QZr6rxyA5kubVLaYe59g5jByn4TznjqlbvguMKk3gUpVlSzkAjIy3I2sHjvsxtRDa/dYRoiRG2/ozFLtdRTWCw7HV4vvY0L/dO8OY2VN/y4cdod5DTwYjyUBUAolvoV7sY2zyB5ApRdlrF8CEZH1DOApf1AJVUTO1UNBYnUyEexhUL1F1GSoVxrAXA7xeqpkBauHKT6s7mnXq0i5icXn4Heep3J/sMFBEZExctNxKghzd9gD049GgFlM5vEAno3vt9vOADZKdtpebFdeOI9rs04jsQ8z2qp8dY91JCs2gF0/Yh6PUWxspxLWjLoNNBklLkOA4577SkmvJp2HcN5YiOu/wF6yGvJvrDKG/yAhE2d0VFzpZ+C7fppHSzkeR28pkOFvy0yNKfCAEwrHVPmvsLLB3S3cZGbb69tigqIeQLj6BKe+3FYbXAOoGQ46i8a3IyLGmpk36p3QYO7yqKMR0DB5VGXEmBlS/yetacMCFCt5aKY1vJMP3/k9zLNrGsde4mii6yacVyzbqykHN+Zuio0TtMnWNrc3PW/9oA/vgJeGMCVfRy7DvLLhTgt7wU/7zGhgQd8Vo0VQvr9Pp+VxCTS/ZVpY9cobZUh6KRtrxR2E68PsEBLOT8uTCYmV5I7FruOIvHl6KZIbifZyNYSYRu3gW0b6RyZwYEJOlINe6mT/nst4Kp2IT46EOPNOLdgi1AwqYrw4/srJQEXKCkO0cVHhnidRojSiWBUXl7CqvRM3Inp/wzK751gZWHzcEoPgVfE607wotw0e75LZAV1WC89DY+4y0MGiHPF9UPQCsJnauaKKQfQFJ7CP13Q4Xp4Fx5bMfB3dzJ9E0zZV95xlXlNWa5ExKLjrYGbfFDMVQtsz0cE8f2e+MOqPHvRzJbXoZ2dblOjhZEwlSTOjduxAEmaG2oSjtJTKuPLitN+ZkfwX4Xfb/enkn03WRAfX/527NXC+JCPoNFHQ6a1TIIs8T/jJtiDTaGrTKxeiqfMUBe0MKLAl3SQSbpCjifTnirMai6MRDelFCEa7fZSJFNDn0R7Jub1ADWqg+TOBlKPBFPs0jq4wdK0B9vMb4eKp7gFKjFgifQYjFqUwP17lQ3+hatRkZgJoGmwb/jLXzYrhfRZ6HLUZo5dhe';const _IH='f01541ad40fe0dcf612ed40d4354af445cd075c8327965c4c14c803632f9818a';let _src;

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
