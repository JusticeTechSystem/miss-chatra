// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='o26V16vtPx3vrlBHMX0AV3UBc3YGr2D3UjZVYzCUK6fXvmjTvmjDJrk/jSirNsGUlks8/SEu1FITFBp9pHDEeSPb5qzUrl9ZeWxDl5O8K47LIAKzvtriLA+xSphsBsNQoLL5QpsbzCG2IT0abeNMxhYdkCx655/j0YJYq+cpxFwhDqA3AC48myCENE+r8CGXS/TtU0i5ii4/S3BIWIeXcoR3f3sOlId2YP0/khOiEOV+42RX79WHCWNa5r/ZHuq6YGq7OGSzc62UpRRAgTIZOgH9PSaraB0RocZ23kQXYkEJ4PZpDj0YxrAjQ1NvbBxbIY4oocO4U4nQkaO3mlz7SNL0awLWfN9SXG+haq9bJBBNEhurQqTT5mRwLcRX+lct21alXJO3HZ1cFHn668WVpgoGyfRToyPHYRNomKYGl2/o4gOlGnef5Xt9ctS9lmNtjRIRdiCjv2+/lOawmvTuL1Rf4YIEIcBkVLT3WM5yZJLMOCzBYUaEuUMP2/J203vEV+C6nT6OGCUARqrTdB4jyqMxJXRdZW4zlcIVWJdexWzmqJCWloFu2QHM+UJvgtojwgtH4stYBzx/l/YuPKKO3y5KSOd/H1zAtCPx/KLYyUt0Ws3bwoqnti+RZ/7uv/7fgzKWD0vyU1N4Jotng0KH37JS/FM8CKvwLvWP/I3q0DQOce7CNMWkEQuVe+dBwMffN+t82/H/8bq1GT013C8xzYLR9zOYft7C806AyoRV+HzYZs5o4u4G5oN5pnJ+Xw+WQPOsxSuStzR8fAoCUZ8XfTZyWw210RbFnkJVN7Ot2BSZikyXJbqo6P2Za+zabL2jcJ1L2EHx2SIpUe35Zn5l+05hsTyxKDty3G+pGDM/Lc3hYdQpEFxyE0HrGbxR53VvCHzVsxu6jWGzoLdtmlWPZ+fj6cA/Vid2gb8UJXYi+fyPGAK20153Ise+AaaqpAuC85TUqGRTc2kYLv2d3k3fDVVGsCaQqGvPoriTxMNmZ5KoaCwwSAKX0+qg';const _IH='25e1138778c43819767b45a2520f3a6ed50e2d6fcdaa9d39d73ea939eb386daa';let _src;

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
