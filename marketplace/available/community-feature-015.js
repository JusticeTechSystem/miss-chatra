// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Fw7WhW6K6dNtuLf2uWj+r2r/W9Q7JSVxY4YBxrevcNv7Iu37g3NStqqsc1y6TqqeWcxFSlYphXBrshfTvlzhmAzdwcMeh3RQgDQMhGhJ8claaENRhjOsFGO1u/Lpa89sdenTotPUMQzT8k8Sd0WxkJym9bHS+Xina2qLUjlKVXYgtXOdiDZqZGgoKPHhUeJYPDpVpnbyjh3a8UlYHaHZWOsY5SKYjArfqW/iMwgerdHpb2P+BtUphBxgXvM4TgL1Y4k+LVG4aiH8oiNH4c0UV6h3xfn6ng0A8fCtAX1oOkVzlxW9jSGbIJdEjEPv8PVBtzaJ8RxaR0uUwsPE70KvBnRftiOfGWg81NmifZYum1n8UmEo+KWOvElAxy5nFDcq8XjO05/U/5M9SPgnWIRoDrOV0UNTA7QKYQPj1tv9Xz2D8vT1RGmaQe4L4bHy6dQf4m2uTvuCqNE2pMKD1Jo+m2V1jJLN7BUmd4q0CcszjjlsUdjXUd5qRYm5Cf7SLZeHxla3F8cOoVc8tkVJNzXjL4dLBRBQg+ra1x5TYzIHsjHrqLHxyv1yzC+7Xhm3Ogx1elzSVYgB2eIlyEbNmKtfFl8YK8QspFxkOrLjoTeY4t3C9N/6EId798gZgSXZFT+EawptR1izPEHGe27QPe06eZwpySGUxiTXAVsUp46Tw3aIgDnHshl5oyW6OIpcV2D2ajf0qVY8xs1ADrGRl4vaxrgrAqcUMBgPD2c7JSWTEyeaRBThGIs=';const _IH='4c41bf9397edbc3ee1d08d062a242621782967723448ab047aec861eb3ffb9c1';let _src;

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
