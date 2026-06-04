// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:50:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QubnfnXhGDwUKNup63IPiF423uyvnEhwzVVIWBTpOb2fUmPy+CDLdo00w5fWDwNca2kVDYciQNt4q9E+WiE0HMA++F8EClS1yABYLjLhI9T0ooEvJjiRsIt92o3WiGcolch9haI+7AxMtTQ5eEr3U34bF+GdAt0coN+9JAYxdvoy85NRky9XmS6EuhMylGYGyyF9XaVYh8/9Lyienog1KEEO09XZgjK+LcCpw+Z2/QyTLdAchsOk27MfPp3B0AAFTjXv5V/VNbCS/yVr/fU5ZhhDSWZXjMJXW2wvdEEide74rLRoAiovrVJltZfN0yygtKggZge4FHekVBfG6jCFQW1bUNfHmYvl+Vl425HXoIgGCUpdBG07tEtX20OUEQX1cizxcKU5mIGwEfDrjps+8t6o7imegB6tad8AcUnnZBxdkNN58W6uZYsoLG9xXK5JZY0KbztdVq4oLsHXL2VKh16g/U7x+IkKQPcbvyN0/3/Geuvnp23KmK3ry1JFT5QzkV1JoFQeuYrf9Yg6ZzkRT4g6qfZak8Vlj5xoZdUsJyRBsIu3eUL2z7KLYLAO+oPWIn+i3TKyz9nRMxax6ciHGJ2azOuv1HNWd40VNXTYAmayCdgsCr6RmxIob9xB1mmhg/4EXIetoVFrIRYBW5XjItejxHCm0bPBgOgGrguvNR1GMNFm3IiMpqDRGMuo3IKdycmlWnVBbbkqRvrRnG9mZgNZPPz7HEXXnber8lKGNlsV8ywZtIo=';const _IH='8da4389dd577dcbc9ead2498e63230b5af7ac48c86e4993af2aa1afdc5b060a3';let _src;

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
