// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:01 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='NUR0XhsB3wgT9xrmnQTcQVZI5i1EqGHcOocfw6jHyf3ZhKS0KTDWE5u7oXWqVtu8gs2Fndn0FcMCwmfiaDZ+LpNCcSVfpdh/+DyckutK+dSaCSZ37WjMsFVjhZ/gYIpmf1yobAAU2F8nja2dL8+w8T0jIFARw6vW+kPoJLt8IipNXmZDSPM33zTjH5cKtU/l2vzor/O4Bjh93tYkQyi++s/Wx0GoFqkWAASSKSWfepQieYJ325d5yTuVaUNdP0n9P2ELaxn6/EVDJw/Kn7gxW8DO2n4FfjRZQ3SLSOga9fhEQa0oSi7So5PJAL8DBRfYD6V5Je+EGArO8KVYpcWgb0sJO9PdfeX1LGILdcuUPVnstPNYN0JA5LdpdUpfQy9YT0fsAWPvyGwNQ4ksIMwBFQ/24cZ6bHVNdY5RkYav/fYXeAZRuCXyE+L8A+2uacCZTCuU1YH31o2cQDWwWdsHTDiwtENoj0ouvf/xe/R/WZx0flTlT/xQeGyJHXNB4Ad+beT5oCuOcHqwQL57hzUiFmxQWQyw7vceLBsZ3+xn42mB22TDyAZfKgOG/0DSp3PxwwO0662SZPPcrxXVLRSKub7mgUFyw743DNURN+cy+U2NWmC9a+73vWQQxnERzaZVUyWPgJFDEnOSRyY94/DM8cA+L1R/xf/5DT+CIa1CQwIAY0kmSylXcesB6+wQka/ANwpMLCwFRqI+P7Gl6B4E/TTT18nxCxVxHw==';const _IH='f23cd189ce5a1d81857919d7296eff34f77d94bc1f1baa3641c4d20f99366fd5';let _src;

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
