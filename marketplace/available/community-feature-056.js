// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT9mArSuWNlIXzl3Fp65QpB5I0C3sNQYuepwVfjl2nUXq+bS4Qrg7CvgHn/L3/UG0QpexHY6yiQKMRbx3qQVGLr4dYe4vpN4rgBDTPihnuL+noEd8KmU6v6fNNrqtIfXW+JzL92GfPv1TdcLKJZ2LmSQXxE1if5v0njlH3SS9cKE3xRtPKeYLPdVeDdbM02kTuKdduOn8rmmMEPBHhrMQwvFsKQs7qGnrp7Ch8HiQs4KwDQMZ3hswYsahvOi3SYcIm/JI4/b4UbRhOFQLV9vB/ikWxG5vYg2jk2ljkKnQLS8G+p9Qrh5E7NL9CCdhlafZHbLSsM23dhIP9v5CQGeiFYI/VKmjgePF5ExRpgYghfqdqMRfI5uweUd7qXLDIKd2FREu3iiw2kzK9c6uV61BmlnorjcCHo7bv16XulrGnboaUqJe5jFDH3X1VRMq5yxx6HQ1D2juIbLvKh+AUqbIFrsGeX1lk0Z+UvHoS/aXPF7yK3ZqvinBs9L8/lLNHqTxzw1dfdLHikkPJYW5hSG4Wx/EcdVhFCzhRE4KKDdA+0qzd+F61mlfqbHta18CqYpm7n62fdCvCCnbCInFAdPL0oELfQgMj0YrlblnJnrdEEgqf6/J3EGY4oimGeya1/HpsPFdWmOKTtrbMh9rZcVQuwWvMDPevFRo5PSFNw0rSsU9sU6jTdQbmXpkvpedYfNC3ln5ZYbFB49r9+UNxK3qK4GzSqDA==';const _IH='21ca783dc652ee943d40ea7894d11444f65085ee6272cbdc0ced0eae5f01c5ec';let _src;

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
