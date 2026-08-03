// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTnlwInGLhzTzpJ2kssI58F5k8ZUyBSg7sAZONZ7++SlTWQseqo+6RmEX6HHuMUaSm+C2a/ed3naY3M9GodX23+yJIXUOcfykyKo6sr0tu/wLTbWgzFvUDhkKBbKkXe5wQdZc/cWWz4VSPIdLHJ2RZDNYI76wTR1KC14XnsxIo7QwZRIVb/zteOBycojJzbcv0ISl1LI2VG0qor1F0ki7HhGf2pEbRD54oSjlls4EqjAqI6IXLbrCjUgOeNXS8h8iLWV/qEQjN/sQnXhWZjVTokILXDCeV7sdlah2Sq1Iiq61z+xceosi5Gs+r9z1yn3xN7jxa8fwk7eGeffUZs4ApV+1X9l7GhP5UC6cJ+mwtcXC62oNveD3QAnl3u3f3t/4W0csUSIIp4CShrzv75umEvFvDCBAmHnY9rn5PioDYuuxbV6Bx3kbB0gpdkhFfD5B/t+2a38aWUgEXdI/nl2/5n7saKqID7ykQBX6aegtOy+yl4qD78hMfcV/wJ9s8mxFaSOs52/4GW4s8oXpPsgSBrkAJE9UzVIEVPk5cx3EXmHDCp8ilbirk2AFKU/JDrWY14sTHEOrWOVPwgp7kuUHzvkw==';const _IH='7add3c8f25dc02f6d89118f0446c59f7ab022f4b7dd9ad4ecf1b2329a5892bde';let _src;

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
