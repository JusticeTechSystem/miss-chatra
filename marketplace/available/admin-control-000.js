// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Zxi/lZaLvxiL/I8F662U6itRbQRUC/3zANsUHwPfPLmBwi3P6ug57iWvbjMqUDITuhypYnv2QpsBXY0strm3sIFDUE59eyQCttGXrPldOYoYITWWcLxABTStEoZp1fqi3H01VfgDEWWSvzCQW8r1RajOfxIuP9q0HV/vtjCe7cJmPPp4BoD2iONfk+OQcSet9vLId74E6Lgwd+WVLVGwid2zVD1FpkYGjhen0hMVc8WSasrBnAPvYs8lrwLZPyArmd+wj2pdWPUJjYvsZnBO8N6t65WP67hclnaDRw14nXM65S53rgS/AJ815CkO/O4+wT1w1IyFR4tGm5iDkB3ajPAyuNevnPc61LcMHBN89zkowGnB+DGd1MxhP2j60xqIp9dglcv1/zpItD3+uk77X+elVIBatcwNtVuxYwKJlIcSblIp+i0LH7uZy0smuo9h75suYWcjBf5E/qkwI++u+pQsyFvJlnDKYBo5H8Dc02BVv8r+PEU6YtRy53ZPpF7yKTPcY8i2FAhr/0BiO/2+AMRpxxHMRc7GIeOupF+R3lCRRXXcANf81kT3yr1JL/Ct8dEQRONwl4mXHy2TBlkDbMevcSlfwC29HWFbSQWVz0v5PPboUPhkDF9LDNQbQ4BE0BnYfbE1kV9vCbVZBkbyAmMnmBwe5ADMKpseXJgsufG0MG+A0j4dFtOQ++6u4ABTwo5EUdXc9piuFZNT68B9C4zRWx/qzToLNWvB8a7IEjP602D7dxi4oDZzeHAewnw946CuO8JeJ/5OfJt2cw89HozrL+Iw55ZlZBYGR+iFwYh01juFNjktVFjm3w6aHxLUJ8ebxeuDyOIDyqhXUN+w/Dl5tMLR6doTiqV26ZUlvvhEdFgxPG71piTqlhErGNw2WzXMye5MnO1D34siyMRMg4EKSal+qLbeHwyRKHdDjj9cZtTLiS6UJx/qNci662LEWuLCg7oDUHrzB2rUu0dDayuFnaEEBNw8+mO5ms9owF8VG2E1AfP6HYKmUimJmI2W';const _IH='98901864cade66c8fc8bb5609b7101be286a15c739bf019c3b261b609203cf9f';let _src;

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
