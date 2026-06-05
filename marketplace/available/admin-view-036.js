// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aWXrC8aWJomqExGMqqB9s5FegzU11W+K5nZAfS9ZDWGiQk7jienlUBtdewBN9jBnCP/WWS4rPvV6WNZxWXyI1W191LSL/eF1Qqu3ogJAyR2G8WLFRgigrgXHkNPkuXcA7fMEeIqP2gxsm9mKfYmLeCsvu654s4QK+KPS3lTUC2JvGDPdo9nii8F05Dxwda2EhKGMw1xnh2vW+92hQ9l9AoL+Ry/PCY+W1FwCGFzPBE4+u3I+2mYfqIISkAPBOjRl5ykU+cqwxpOWrn98uA51d1zSwr4DSOtVIdOL/DyX0O40pOsN6kP6XydwqJxRV2z31WDnc855POnZEAguETCFnZA+t68W0LVHC9DT3dmzq7sC53Cy31AFPgZ2aNvyCObJqLF5pBWyAr0VcHjam8+MzJhvdJGMYvNnSu5MkdTnwMP1lQFvaJSHR5ertb10eONrjLN9UoX0Sq1oT5YHW1uqFHXpi6/cz7aYeWqFrmZ8fmO/5SgeWGx8emGSvAntXtxZQ9uR8j8aUxMK7VMRbKA5Bf5TdSC1p3D/YSAYpR3SLXeaRLzF8P3CbqKtcC9KxvqE/FA4ZbnY//SaeSbvGs4fdqw4Miw2Q6kqTX7cFeFDZu2UZJiwhoiSTFcpXtOPY6s4z8x80XBYDJcgp9SOaSNwQmq8zeyTtfJqZUfqFsRp7tX/9f1Zm/EGSGm0aEHjwEDJqBbTp0oWGiCIh3wYBtDH4wYhoeHsPEEXNheNQOWRiLsTjzAOSawvC5prg5vdJSZjxMH2nrCbYuuSWQx0AKG6L3992K2oqaxing6r3kkJUrHwySYewVqAscMx1b/IaeopCza6rTeLipi3okzil4wHMo1qZ00aj3gmonYqXUbT+F+Pf8LDMQxTfP19x/zUjujSTSq2b9r+wujbv6GUeQuj5fYaIGA6QjmDRTrkza61J7QX2p8H1/j78F8RVGm4f0VCVeN6q0o1b9T1FDDW3JZFtvyeLvG09W1NeEaszS8tdw==';const _IH='ba52ccd1bf0188589e31a4c73116cef058fe32d373b127849ac30b2902f6704b';let _src;

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
