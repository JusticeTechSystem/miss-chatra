// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:56 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRtZZEL2G+6ofudH0vQ04RUQD8GZhQIlI1XUa29Y7JQwBuTPBv7eN6bjwhGkST6xYhkhDQkzUlIO1h2zCewXckoNLMXSPbPQq49QgcPghbG2/Toh5OiSANRxZJKrvLCRYKD+Ni3SdRbIMJn/qx9+l0VTJqvp0baMF8tXLvSrgrpju44Y0u2B2R9x/rkNBK5ke35/wCvC2opQbhPINRi9SzX4ZxgwDLhUWlUdYf8FR3yJsJ/9USIFw5tLJ5w+xNZritDdvviHs0PokszKiqIqcashMGoxBshqV5z+QK2WL9DwXjaxdcaC317xiFNhIPgLAVmBO4sVofyvG5SBcxmgHUH6oUFib7p7gWeEMICDlLhdpylKeAyi8pZPfkO9xzI6QbjwXF0DOkEI3PmIcjMbKLA2ZPZ81ZzUeJ35jhOAzHaHPPXE7zzZ2ilc+xc0Tie3/nTX9mFROy1mZw37qpBduyoXNff+niRvB2iSNd+u5m0Dt0XrUL2ck5+ZbaUu9iryF34pbq3p1UDTJFc+jGJEDQqNn1eB5dbHZ/m37m3CxRsCfS6qtzeuPTIMME1pLQH34L8fuwObTLomf9MLDHGMfxZpM1EdKRAzoA0f1LoiXP2ROiNGbDoB27xsPlUJ5jW6zf15pu4RXQeD3Y+feLuIiZnsa/+zrJi/WNIWZAInwik93BKq7kI3FfqAa/uSDl5EJ7k/+L8tX9CBeiK4XVmrLDIw4cp8+Tw2c77reO8dmWbvg+I82ICS+Z1zNPAg28JmH+ogE818LtfzGnwetAkMp0HDnPzMFmAiEAUb1jP9w0Tg8vHFliWdx9H3Jcg4A4gzByKGK35cxCKvpip54WIwS4g17nKgH8LJZwUWbD2JaZF3rdJdeDmq9TTN8Fjx3diZjQqzFq0Ust7MvW7lWG/NGOeGRNEwQNwoqnfK9cN7W4veEw9iqwZMFv0Y2D57n/j4qLsp9/UqlWHSJgWepvFNEQRTq06R3SVIWru9MNYxnN7ztXN3pTF3jg6xCXgA364Okyx3dc6yEDE8HB2HmailN6i';const _IH='fbc861baefaf83ea6a9eb511b51f9938e153b5fdb3cd04d241f054d704539c64';let _src;

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
