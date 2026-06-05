// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='s5xODXIT31OrhjD8dmiStc/xQnk3cIu7M0SbB3l4e42K9SwIsyRoa6Y29chcb9vZFtFEm0vNcxH4FguWcaa7LKmZAP8qESdFnbAvXzF/Vm44FdR2kOZcV2JjP8YX3X4OLd3QVQvvK14vJ6qC+qBdiZuwPu0PuE2GZDpWZVIpUp+hpnb7i40FCDlP9UTbiwZWE35UuGFDhai2kfSrCK3AY19gFCLUal3VYw2FEnyC406FD/YX3dmqh7tOJsc3qQHC1+sIjrLNa65zAjSWd81mKchGK7ntecl97v+X5SVJ8Xqht4kr6Qiwwdbn3SpY959sEqwz9AiHyZaLQ2EiN6AoPewGxJ5dDhfROVOzB9D6uizOPMyYfMTr1m9U5iWup1nm/NbskPsy/VUPc+playzdGBiGZI2+rsmdgavg1KAdvzq3h8bCO0RWaqqxCEBlCjriQWeMyjgLms3hVchHJDEjhRaor6O7Cno4Tiz5oL8IXk4Mv+OM129l+a55scsFVZ/AEhX73Ncdw3jz1CUt3ynrAEWvbmBctNDngk3TB4IXtGOHX0KXmcPzzBDBWQA/RUMep+vNXQPQHjykcx7wdNs4mqzqA5lBJt7vvKKM3MdMfh11JzbtZ1OI5w7gh04O3cfoereHsluk95GP/rcIE06vUAWZ9pvvKVRey+bXuWzk5toMLNYFUxS9tlDfx3Wz2C3FsOAPgg2bMmLH+obBMyIvMd/HEGU=';const _IH='7f1179e8c8bb13079419fbd52560ce59337423045a97caa0af02b645221cd7ba';let _src;

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
