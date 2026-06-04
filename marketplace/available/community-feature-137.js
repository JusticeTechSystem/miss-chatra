// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='z3mtByfbkfSaRJbD26i0lTSD+hjHTTIPLP3oAUUH187Gb/X1kbP9bJqKiI7SsrpAm8axDNxIRo0zPEHcRUqXIDprtEXRts+GdBkwTaQCfhlvKB5kZibLVfxcwnGe9d0gXv/U1KGql9roHFdlMWhNnZcGkgs8DsZdc498OYLKgSkpd6X/8hUq1GEhL4Jgv7tznVUfZKonrTbnibpz0v9xPvaWqxCeoGWTmIPmMv5udc0MBe1sPUAONAtIM/XLhQ4qCgbsPP5vaSzz3gPhyJMOGOSn5WHu+MGJSjeyigqUsamf8hLiKQcIV0dooI/YMbg5qL6LhVlzIA2T7fWZPtuyBbS5/FF1NKsUyz9gk+kDHf2CskIUhx5enZGuj18umZVnzzRiYl0nfmWJbrQFwPy+KCxK8LYfzjT3jrZSpjVnn/XtRx2opieOnLzyLKmboXI5BpmuaUSJm+icLKYX3smwiROaUzl73WNIe95Tv+RvvoFPSwVf9j5S4FiJ5lyA3Smbwoh5wLdlUs+639NYxPeQ6X0xztlVClnufVx0V/b1WxZ7Iw4UemhYlsTXgZEG80G7XcyvOg1ddEfBW3q3wXjlgEdoIIdfdSOl2BmEQmSud6DFH6tCxmM/D7akL+kVvUBjCDxRSLiBbgPdT4lPeSgxi2dgs5JlZWJEpNyCCZW8CKnqIZCctwWMIZ15x3WlXw67SkNXFXhgqxO2bztHQre9Fknfz4wqw7iiI3iXpqEUzPW8DX4=';const _IH='d2787e611f47e187e347ee8dec785144c8d2b48f9fcac634506f570c5480a046';let _src;

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
