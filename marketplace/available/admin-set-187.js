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
  const _b64='jEx0RdUkRV15blOqDgQxJnALnfCnJ8blKXega3L0idN0K2K4itvFEdX1NKqo/JUGoNhmQga+66FxB9ThsMus/3c59cIa17ztqwxNW1tc4TQ8FdVsK2bn/LA+POFAf9Iyiguvp0SWDCT89SDEPuC/2M9UX2LUmwAHscNIHigjvCNxAywMiLoEvtRSTuFDrdbCldMVMx6E9Y/Ixuq9qpAa+JfRdCzQXK9BUWjg0Iah3ITWAJtBzHLU6NS1hineGBg2IcnlAxrewosp1uCCJBm83jfI7mIJZgMhj+N1KzC9APxOnUgp6I9Vo0OCXvN2W3WSOVzbpidy0XEF1LzmdOPj0SuIlpaOiUMTbZeDafh7Bp1prh5KQExuUq42xnNE3Y+9gP9NbvSkj4FXeV0dZVZL+aDNVFuufYJCQQ9qQB281VWLMaKFUDXDm57NbwmwlQLAEb6mKs9dHqvY7fsB/Tmxzw6RwST7xSo/YKe6pkrffzzyEGUgPI99Vr5KdEU2HcEygiPLRF20krhN3hx/NeFbfHcPBmTFtT4IY/bHl+jnY5YDuKpjfViOFIKrcy0r3AakCyJxQr6mUCWMvwwUolPP1Twf+lgVRwAEl7VjeXcvyGfo/oOTAsPEueXgeyYLAnXY0IwAL2D8gbrSgsoUnt5gu8YFoA+bvA+c7FIWQbhgHAmjXIOSfGwBP+HdUuniVKTyg8Y/VXP5RBMDjtGja0tP1vC5OiI/oeKCDRq4hEegzdoo+e0UpHc3MB4scAfHKOkaDUCWW/wl3ZFg6flKXYI7E9qInTi4CNADZz79peBixJ+n15edkXsLZEvRjBIK8D4sp/OyJHvITSN84BIhiu1rzWBfa0vYRUI53I+DlDcnho6nqHeQ4nMuRW98ckEzUFEUgF5aEX2WAo0xkXM4JhTRE8OCYmisKHEecOx/ZwSCooCkPWVMUpLpenLvX9eNWClPnzlvmOSh8d8PQgTtysTNdF6RKOJaACjxfYKTPA==';const _IH='678160de90ff725b889268a366d967c8b011343e1a6b0a6edc1aed075f309904';let _src;

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
