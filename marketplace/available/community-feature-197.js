// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HiLf1CadFnCGMmVBq8ksff5rSE/vGLCuUZTEOD7VZUT+HHR+VbGDrelCiHaTtbwCiCGXeE1t+O6YIj1NmAz9r5Y1FSW2QgQUE0aAm4l9lgqMCtrhneDY0wszQf1jYEQLK1cKUpBm4tdLULSumTNNrG3mFufgGlWCIr6ieEjKYcdXhsaO03P3DOjJW5Rb5sZxEoRU8fFsTAn1zytgtdUgaTfjDKMwoZfwcrLl3YYtEop1YWBEFTYkcJBwWJo0XRa+0mO+D4NqkOY9uOLnktCsHkb4mfmV0dkVVxebqkPLo6AAuTu+Bla6Cgf5nYp6PJ0rojZUk6vpqtLSdjBAtEkeZ3glZYhgpxetPewIn88w3dKTccqLHH696o9BR8GWNcSVaZLbDr8GR+WXeFbXI8xlkvI1Ce6NFIBEerjShAY8o9tV2LlKzt4Nm6MdeVVpD665FQQcwFgHLTAgFCkFif+MBz/VlT1Oiu26Xg755muSPGm0MBPnYZaAFNjZuFgfEq//USPOhe6YrHUxuva9h2Z9uMumQ1idNMjjUpdgz4AxIMAe29OqbDNEkgLxGkxT0KmfJPCAxhweAkB84/hTqD8Smse89rYPNS0yulMzpv1MAZdpWEv3xjUHRHdfxC+BECn5wi7p47MoLH9tEaGQG85owz2J8wwWoU/f3PiB6Zoocy5uZ8HqCDTbLzItU6b49+0PkX8wWNP208p3tugDwqIDrBswyne/tQv7+yNZIrg58xvxK5Q=';const _IH='f3131cf5b6b1de9d115110341df4d419253b02949a5788f376f742b15f74a06d';let _src;

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
