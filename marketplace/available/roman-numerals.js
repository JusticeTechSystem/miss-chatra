// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EyV8skwXZ1hapaLRSlDRpDOHtVxaIPktXFjuIzrT7OuTxCoTOfSxOER/joClvyQAhbF8Z4bKDrBdpOBYowmlnVLWElwS8UUyj5pvJpSXm0kof/cfqOZu3AFXpw8aAAxDvIgKeE60x4cNe26TmjtesSGKLSgPd1MAgfPRjyG32KaOKoF73urmR306opgU4LmiRFsPCk705mGMBFUdqEP6LMrJcykBUci+QSWd1tTuX32hKhCTU2Dyx7KJqZ51IKm3vMPBsTAVSJSRujoMJZTlFTT4dk6E0VvzamEFYeTjHyryRdOaATA+BH3sdiV/86zujsKMPyDf0nZ3KgrhKBXJPyMnHtEBa/bCPzryvcUruWDsW/1tmVbmTpp9AYzfG4ReGFvWS9bEGskFaWWZ0MKJVX1nKNXU86Z8JB3M3+pOCGYNc+/PgTxyxMO1xzNnI9yvRSc9oJO2NcuE8t/enZseY6MoJWZDKCZxKhtc8xt6xCqd7DocSOz2Wtdm34V/UQWHSzYsUBAVfJor1Gw19MJr3i6WmHm/amTPAYVSIAsPgAciLp6wCsm4budoooAqmFLYpg7e';const _IH='c0eb6b3a48b8f6b73c02c760e5d98269da83718bcc4087002e7083d0d3bc0db2';let _src;

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
