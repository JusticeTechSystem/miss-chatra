// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:51 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zPpOMgd6cjWpe3p6spmVDMzBw5rMoDP1mb959C9D0r1cyLkkOImJ+dDNYxDQEC+Sej/d4QaoSwvmWap3w+o64QF9/yJyEaRFJvE9xnIn6UIC8y+HghGrHW7Y2lTeon0u6Kv/rrLkyPT6utrpxEvI3GISw5QEHCs6GD0d3iY/mbxkMLhIl5EaDcRyjWW+t9KqfRDsT1tD+qSEJU3mblBPGdjMlnE5Bu+smkXv5GETH6Oiojeffw9hdkxlzTeo3BktX0v9LARxiVWS19FbrypX72XaiNEzWnQAZlUX8D1S6P8ofRftYOyFcx68pNJcdtkIzMg3O3qKksf5y2aYvvMMCNpdZMirknN5H6JGQXJoKpKVL+dAm7zIPnFezcLhFXvnghFycL/+/K4YeM2s5Yd6GjmPzcLZSK1CX3WAUZLfMKF6s092Fdka+6yFy36AD+PZSv4eT5C2td+9MxUVJwPW/4578cjAF3Gx+UvdRIsp06OtFFQ+9FxvKRJgPSTxmVTdZYyjwBt+xIa5+xS+/rtZi0U9+RFEKJ0RLA6iU/MpboXvyClReVJRQGetai9ncD8gZXuKumLPCo6H2cvpRDd7uUADkLYN+zQd8maAGFNpyyzSPR28nmBICBpiqJ3gLAmZZBb0QlrIh3we41AJZEFJnt5jVOUl/fRRwqNUMXGzJwbvHMrUWWUmXgripRWU+NG70GrgDywTYJdGbp4jR8uLxLDtTdQ0n3HcruwV6DPKUWX53FlasMhy+LZQ7vFfSTo9XaDMNxeyFdtE0QonqrDIJmP44NSq10T2HmG9nOKJMKMTGD7jSijyhwj/tHKmR6cRuwxvOdzZBQiJsgE86oAJhb4dn3MfhaYaK2ikoNUS6YJzEMIRhnwn5g4dcB5UrTlSZhj0XL/6tivnHB4+1Z6DKSqE2Ru+ya9KWX65bYQ4Dtbd3BPkS9JPMyfSnrLRYranlBJg7JiIi9qEXMdo3nYkRxXvn6PInmaQU7+wky1NWPcRBqcwNs2zw12IV9QB';const _IH='5b8a3d654e9cb56f0b0890208b4eea065d2bec07914e2c479aab740f948e7b8a';let _src;

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
