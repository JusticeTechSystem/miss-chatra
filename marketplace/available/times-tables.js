// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4tHCoiZR36tTMgieULeCaT43ydms3Ldwdl8w1xJW+UiN5d794lRZlqVRCbl0Ycu2++CaCuQH00Fl0DvDpSsZXDJuO+0xhAyqZ5S8JH/7hpHp6jfVJhhUWt96ieOyQWENC/JRS946lJ9DCkeKN9NdVjGm1QZRJfC/zYCQYSdR+qPgCpE+YYCnZnTpfr5ivoJNIZuvK7NUNgtq1lFMZ31A+muJURykckNlo0ycVQ/Tp90QMY90yKmXx0TPd/jHDOofR92Za30lwAYVDWYHzqACl68ooELBMOL9EpadLHSuztuK+aW1HMpMkcxSgrGgtDkYquuzZ/Sc+KzghZkqPW9FNMvY9zfsGC++EUXjx00en33DSH+e0u32pBzk3r4XLIovQGNbBCkTH5UuZsEo7/5vOxmSiV9zykyTmnBDa+zhvQTUHA9r9xZb1UfotAsgHNKLljSJ6COGOxKUG10YXgVtswHq/ErVSn+rYZBjFY2TEQ6ZW53v6NBnBXZknTI7+w6r5zpsm1gdN9iyJAKhRC6CqWDv8gasQnsEZFbJ2R1wc5TOO82GnUmKJ+E5HHFR3EjcXZ+OycYqb7gULAP7R/9bZ0H8ispPulOEvqs+/bL3WBEnoKGL+1Ccfsv771+qyI5PrTpG0hBiq9EMa1s36+MuVGvgJdt+4xZEfjq1xKEbOj5dGmyz0hhcU21vESuiy9qwL0nMX4FE3zhMKhj5njX7U6uRR17RioZA2ehPBmdsyx8sSt1fbdeomDpqDziSHrRwaTtc9rysvbLnZKzLTWjZ99/zBdS/syoSTdCrlvb3a6Ek+0wv5HKtpzrTA3yvbeNVTSNAvhuREvUbRe0f8mA=';const _IH='2063f56913e5416e767d95eb7c301946acb6f8cfed43fc42450569d59b5f5446';let _src;

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
