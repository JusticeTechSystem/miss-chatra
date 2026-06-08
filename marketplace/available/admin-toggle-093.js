// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T8puSWTUAiOhIDO+nZLVNLYSuTVmkJYDnWwEaMk3HKNXhSE20C7AI05QaUVJHjggPKeNkndN0crHFkO9CPmUyPVvrnNZpVpK3EtVHj17G++TeYt0zEBdKn3j7qS67ofCRMz3A9n6rwjEPqejNco7RsSsTn3LleaddASNoaCfSDeCf/YaPYnI7vWBwKoORUzTZ7e+ZDUciaRxWP/e7eF9OIQu57O/XSeWztjLi3w8ViCTQGGSVbsh3AidUpQAxDUHUu6zKVBMeHy0Bart+C7I0RAbCNKlQoEUHgZ5s04gBy7XLz3xyEndctroHsLpKVH/IlI3MFxX+7NQAnGXXPO+6g53DnTyW7YLNpEqgtpUEx+XHMJuASs/amjgC51yE7bBAwBI9ZG6ztm0SNcgrI/1Qen/zAffoMoo7lDnBp8ScK1X4U1sItktS2oBG/+L51TFDpA0EhAI1H8m08pJ2uX+wcqmj+Lu435NmAy8TSgyVCq7V4HJpaPnUzBWRvv7lJ4wVoZvx6UriHwhz7EQNB7E0wtVyk31NHvtiga3pb035gxDfM9VoE5BGbdFWR43vMKHA97RbaQ6m4QfwSbnE6HtTf4fAaXSTpcgL2Rkee9ysk4YRZhhcOIbxnI/KBOXLY6qwAPyJXK9wZpLMEWLBciSPUP6TZECyFLiomZxbt41hyPFy5MUc3aIgyH6R0N0zLs/1YVK4m7Dv24Bi5z2/01DvY9WPLi5lTZVGc0tBqJw8MsCckxd931tgRb1ZPd54mzwlqinW94gjFxgQqSoqxUAip0iwUuVbQRO6JKPCQGBx9mxubnfXqgLqJ/RnOv9pjWnczY47oyUehgV7T/fBo5fpaUNmEjegHY8m+RL6Ii9Jw3hSo6MJNRnCEhXmLAUtY5eMJKGEtDuM1GzKa/faPspGo6lG7Uo7vSG+doRBsD7mM0HKjekQM1xaNKb8jJll+zzzixT6w5Bt1u1/hG1Kgxj/LabUQmc61mSpuZmK8jmhQoWErsKireA8yEb5Elg';const _IH='fa6dd307430383c151a467cbb250e94948ad8253380b2f2839be4c95c9e348e6';let _src;

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
