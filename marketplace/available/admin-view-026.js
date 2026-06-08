// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Fb5Ymzzp/Gp2IMv06eHYIUG0yOdum4k+AsHG/JiM6jYIkjPe9DNn+674FULnpoDa6N+sTHr9xaLxccHKo5R47XftiZi3J9ZeLRYlcgGmhCM9nrsKy15I2jlRSf6XzYxki9BHbvTDVWbmqAWiw87KyrTbdDXLAMo2/XMSiXLsXOqfRneN+rAcXFawgTWO6bMvk0AkB09VPWs4kwxjhvYylzn8Hp6BZTZpahEOTOYuGL9RZrJfU7IwQpBhXxV/qrG9FG/Bd96TKJPo5LGkU+4v3x++2VTj7CQfnKp1wardqb7+LcsO68eqJyIEpp3RwYy14JwNHI6q7SoRj0auaASwIkuAoXBmcPeIlDBakZ7PKSd3XulU3RwTdQzO6XamkN7bKSpmFqGoB9fymFzZ5lzqRmmWIurHpWJ3l/635p74XC+J28r9W3LPG0M3D3RKbdim+e0rd0wDsOO8Gt8wqyKhJXYCASyhzMadJYmIQMlCdOphk5M82guuqpzfgWaDi7fu5q540xazIuOEPbzhPCERXvBDYZEMoDvNMd0rRH2iaZOqlCeqdb4P95duLfgidEcwILZ2QHZvL25kVQ7UFlWAxckglcoW+4Z2VRWGPTte4EAl5LvPwdl/kCJOq93vunxJ29RWuYKyJzEdhqj5iDd2uDO0qUFAr8tRS307sVpZhvBPP8O4yzH29cgzpSTexJ+PArcuACAz5G+fpiXL2wwRGhw+njWvXjnmW5LTl4n9dhfTkgwPBQWnIun7W+TtpgSXwWkJ0oEruKpGswnOW0uBiF6QrUN/o31ijplyzeyFRD62uCe3w9VcjLKqb3myIsUogdtucD3LnO7tLALm3EjPcLOWVT8wxNraJ4jFVL8LheA/tY4OHUdmXJKg9xOAc7NLj49cVNSDqodoGInbtmQK51/X/cdEqBXZZUyfqS9Het5FjN1+UWr5wyT/qIKwXzRhYqYz9MrDEQXMSMXRxb59HpipcENOUFSBymTyjvSb9w==';const _IH='31318259292eb92612f768f2af0fc0f90201d36de7b608edcac64aaf9d67da13';let _src;

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
