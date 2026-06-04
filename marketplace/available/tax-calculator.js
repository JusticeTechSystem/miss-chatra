// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UC6vz3YXM6QCu/b7OX286ppcP2Yvk/7GAzl5TAnFHEB9ndRBjuSGivvJ2whntWT9D43knohtYBymucjk5cANrhh8HqMDign/70GuT5Esc7PnxMS4N0x2W2iQ0EEnEmvoDJIxqXoABR4aS3mGey/fDv/ehjkTFiRxsxmoVdk7ZRPY3O9TYIECuLuUmMAKMAbm2kahUMr8vQWsBVDE5pc/oX5F0Zz8NpwZvgwWqzRqz7Pp5Mc/F4VEPyH75siUe2J43U+cgLxC4QYWTxmt94XNLp4+sL3XceD84dMj7a62Cok8r/71JjSToOwPE9G2EyJXKMydvC5t9/d2f3yJW/qBobRR6zxwBqaFAoOGJsckFjVr4sqHSMStJ1dJQG+V3OT+cg+PSffMU7v32/GmtO+Zh7QfPtD8cJQLyo4LpDenAXh86LsSSzHYYF+BMXgUVmRBXelgRitYMAZa/Vt0UDlq1dxFfTnwQDtmJ1RPyxhjVnb/CoktYIkFTuW7fi56raRD0TuQpSXKBFV0ZF0umqU/faX7u3I4bp+0N5aQY9gZ6sXHmh0fOUzqqqK4kwR5/lxajWftSXmWdOFcx9SyTYvr0i0=';const _IH='656d985a8a8c5d73e44e6e28a10d5bd37285263b2eccf20a1cf48a9d40a1b07c';let _src;

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
