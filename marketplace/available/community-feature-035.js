// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XGyazm5bz5A5j2fxvm0jfxkr+T/nSCu1Quww9tAQMW25GVmPJ1QF6iYeyiBfzMTYIsdDij672A10NfKtKbW8/KL4RAVdAEe/DJX7h9r2p6kyn/30lAr3MEZrVOoFHBN7Ovmljp4cZmgMa8Umr4q0l3jMbslkBx1B3mUkJHBK1fpdAxTIr4G+VftYUf4Ur/AZSFh2A1jxcdA+gjULp745h8ywMVgkk6pqG3Dn5UftxOiOfvdnfzteUQ+sCRcUV/QY7MOQKYzkwpp4ObLQ9JCxAEG2xDoztfp+3Gi3RqO+59WkOQL19k8TsuYvj1PemZzYuv2dDW6eq3HK0UVp3AYobfo5SLF1Z3NGqAwaQVPFiQ/3LfMvCJq4g18sgQxsBaJQA+tTTc4xqFBEyVP90tzvjqMA5fT0SYTIGfOJkdQ1jm1kiQtGRl3ir41tqmrNxw1ilHfG6g06JUSHp5GV6LR9UxOBB2lhLLyQHGYAzBq4uouOjYqcoq3zgUOpUSrBiZ0wIe/Rs+AJmhQciDMwQ49zY5pPBTxAnImR3ko4xAdVH2VMCaiQw+5qrwHrKZ0xonEzgLKsxwZDBrNhvo+kROGzTjgEMB1sdEnZYFY7NhUR0V+IZ+H+PvQCyJ2ZMZAijmxUjMndBdCHHCNBVqRNHBpJEnLcLUl7tKC7bnxIp6c9pN7sl6Bfa5Asj0UDrXcombzA/oU8EHLkYZV3kODAoKH3odGbAULZ1F7sNBs0gLGQOARsNm4LSs0=';const _IH='6a96109dba88e3d5c0ebaaa5be2d102ecb75afb69a84863dc1bcbecdd17354a7';let _src;

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
