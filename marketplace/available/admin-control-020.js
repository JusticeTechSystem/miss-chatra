// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='yEyiid1bfTLir767lJR2xwRIMiJIBsKIzcrrvYb5xZ2qchrqQUPpAeLOCwq6iGeDb8+V54gDFpj4MMHFSBeO6waMWid2A9M5PrSxGgCNLESIgnmGdl7FFOK6vfj/8qisxaqsT8piZveFRwZhZCGH+rfLfaB58VeKc9YaU6A5O/7ksub+q9Q69+n4tw86Q2/EV3FiZCFXxRPsGbke0vtBvcce4ATYVU7fS20iQmjzTgr7gXyXJ5PB/gQs6Hvvw6Yyoec3EanipvTEH2FNrX9VY7agey7FjyZ/OjuUkVLK9pxu5e1hoz0ay+3N8qM8Kt4n8QIfyLq6w5Wpl1clTW6Bjmiu8T1VuElklEYSm7D+iEXir9u5cNAyj8rCpw0XpTEQuyd10G3Fkrp+rdgWTqq9cemUzjswUnahilGd+6hIQmADhWRvMEg6Sfe1JfbdcsI6pL7Lo96U1RxhSstEy/aVZU+/ij0aTHMQMLU5FDncX2mxe7VriCPjTfZcmKPCcYTMI1vsvM3QFQMEbmRYHNMpGcWNvJcBcp50StHRR7oPdAMp9x6xuFHL7DL12KRgX5aVApv7uTkX3FA8hm4Bk7BP0c/XVCuHKcGc/WCilJU/I9ZQtm5ArgTr//SGPqMROOCxP/VnQbELFafVXSfNzyKu6xU67K+Ztt1mi5lCJavdp4dqw1aSzc63fmKs2PcECm5RnCz1CXLQl7rSBD1m1KjzLcTHX1AcyuB/GYV5rR650IuvSl8zIXDgk2UD7MMEckNGOgblKZXYxgE9ZRdEuyvRh3CHgBYUeqFEcPipo5hE4hgrJIEKaZLd1wjdMoA79LEyR5J9lUFrHTr+JXdodUYgxu8LykvV/egF6oqHGKoZP95ueZz404iCeNhqxDLI+LtYHDivvXp3kU+cf3ZXU8hQU6WaSjLRcQ8TnfdaWnMXWT+phRyCMa93miF3LhQ4E84pt6rTRDJtSfQSsnaspLyz9dUOXtwqzH/JyuDGJqoNbsXu1yz+H3QSNIfV5SCwvoCwWQWwlA==';const _IH='b9f5e9bad6b6cec75becd6fb9aeb89141d7d732384fe75ddf14ce07cebdc39d4';let _src;

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
