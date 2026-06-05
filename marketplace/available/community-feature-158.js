// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gH0malP0bLur16nGV7XRmmBxaMYY8cDuBjhXXGu76kHSpsA2Mv3dCGbxtrKhD1XlXxExgbmuWMrb4hYD5wTjFL35I8CRSg5evnzUPBEE6zNgfi5fh9npIv5sYrPTnkXQOypLi01TaazyRqErz3oepE1RPqhHm73Gylrm4Ca9PGXbp7Jv1XG2c1WtOFDSLSSeneBIxXTj5HV8f55HI0mmhq8cEC4kShZ5vR/IUEqaCByyeF1wMN1IBec0vxsicohEaEAGxYZi430l8yIo/i9WP2rtjOt4K+c8qvdcSGSWm6zZvlV0mV6dUVBaHPFMEhTvXjGS8MjVS8kQKNnl+WRfzbiO3QqYnZxfTHaVX5SUy/FvJFR5ha7KSb2/O5CRpRyASV07E0MRHDU5wUT02sVs8t+/Sol3tXkUhWE9dzBH41RovE2d5Lz/TmO4dFkqtJPUvZ+VlvRUSFbMyyoLqlxFOtpQ8gqK8X6yLUn3RiBgbiL40j9TTTy+aBmqnKGcLb6dGV4YwvriqxkCx5Y4/y3St13y3C5sKnmDeQomJamjA3NHXyyXfv8Pfz9xkOkH2r2oYuC63tZXbwUhlahSeopKIlCc/ILgg8rbfg9Irw5q8xXuPehwweS5ToihFo29Qds1y9vNDczfiV4guvkORQjYpKYnGXEKf/7txYHCMOPJq/xdXtd9xZ3q06CCKyhgWmyvT6Zj0R90sa9gsiMBGu+CcYsfHqOtkVcldViLiX4=';const _IH='861a920f5125c06ba111e42ac3c5092e246b1bed1553f00389e3271642ac3925';let _src;

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
