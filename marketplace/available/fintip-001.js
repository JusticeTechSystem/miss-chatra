// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fCb4MNg1MvBYlvwzVqlN3WaCbFvR3BnG5/3QVzYUNuOEoxfwx5C4kiH1ZsFwDkD5CKtDTqSrTb49lBT3Gjd2mYKhsLPBOwjnLUJggprJOUc3CmxKp5CtMXGqvsa3Y/E14yiEDfkWecqmmX9nIRXWwhg0cy7ckhgX0zOgHGie9RGE9lJQuHX8KMh14+8cTVZLE8AnSuBA3Esi4ZslCm38igT+iyenTL0pFYiFG/9869EVhmvkdXKOBsrQn61PxMcZtcgb3Lzscx5JERXebAYzZpQUOnWYR06BMVqYDi8TEUyjQnjj6zKWV4G/1iUh6ttaqafAbaLSWM2WmIH77e5o4XKUtG+jqMGVwjxj1oksnRjNBTcVUwd6fXnpxA6XphSc0b/DeKdFUp7BVS8sdkQ/hjn1jp5Wto+68o7cT2Wes8Xy+FyHlU/zIsxlsol4BEeFoTzL02cMcH+6fJaFwhz68MqJFXU3InBVuPxSqUqZtTBpQRl5GtiFL0qTHlFGB1C/NENu3c+pJnSJIxSbXdj08o+eBtorsnfv5gFXDHGEb1MF8FwhBZQqECAvJwii7jdpTX5WaUy9WGyRorsEzNsgWXRLIhDOwvNTiqrJuhz4EQ8dYq2GZSOJ6XPWAAwYUmJCM2KBHGzk4TQ0Q/fR01G97BLsWnvrti5HD4GayPk35h4IR9DEe12k8o1tQJrzv+roBXqQo44vs10/QptoBq5H6omg7NS02joRRAKUtkrZTEqqMc0L/7QDaigUY3LMuDXYL1t2VsgUfu3IvoiP/sI1yOpAiy108PYX0FhAKMdzQ+2QEyRkobg7K4R9WMqOBSbuhqO37AJmDv0IVjC5ptU3bGVH7JSnUW48k9T1ReEqEVOLncyQmlp9NVFDqCWalshX4WpSDW6IhMgcTmvcKP3zlk+NY03bro08lf/Az2k5GK3Cas1HrvpRBeQHswEA17df0PbfmjtW6UDvQabSYY2HrfFcdXSKaLwWNQQJIK02nnhQAr4eCk1HbiD5cDVIKQH19QB7cIlXJhYZ3QzfifvRQ56QXXGi8i0zI2fo7BM1';const _IH='9408c24859ac44b8a1a4ee5597b2ef96ffb251ff4c3246ab05db21d05c749872';let _src;

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
