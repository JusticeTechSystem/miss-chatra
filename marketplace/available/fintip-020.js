// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:34:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='j5B/Le0vLjbC4NjPdrQqOnSaC0sxBGQ8RX1noTxZNbrZKNNnqGrrWBvuz7yGz57cs8R4GecY3bWwtm5zqi8oc2z6b5P8xTe/etPZjX0/N4Oik+RaevQPLbsArG/IC+aPQPJu0Sh+uaYO5gRRWqQW8MljabGwl6HbEGtrrVS9SCJ5z4ILgNNJ37nQb4JK9sVlNKFDjSLnBpyNdVjQ680QP3RWaEWZKDkhFTUg78w1Y4TB8LxClJD+95thR59EtGPvMFby5/tUcBqSW1vfSvhCu2a7kc4wkUv9Oj5XpFYaBICaT95ebG7sgOuS6+dqv/z41i9mxAJ4ay3RuOuLI/mP2zqqmw6wuKrVTUny1fWRVRua76qq4X9bDsOr+CfOtrWfja3XEezrPSaNnsUsy/onq6dm7YRHz3MHnV/lOrkIzEd+B+BcfZsW6HrtE8IL6XICeRgboTRFcQsmo74Y5szIdzWgfDDskvH9sIvZwt2GgAW77cLmfzb3TIpIK1qSL3orN7R3M5huiWBLnwxiTAzEqGCEPgBlKhzkh4pTYtzU+0dhYMGNO7GYzplqz3x7w9Hvo15n/ezqUuY4xV/Z1f9wu4SIWS6+zF7zDCblfLy6tgPvhnxyyj7E2zFE6BUt4D2MEa7eakAobP6kHo5FNozkEJPx3QtkOziHl7WsU7+/2GTLRbXhk3s5SR1plJ+mTJiKzsThgzS5O3SgJmHAEgf+vlE3zOijqhFFPwcbwRs0Bt2bzissBtt3vVpnfABSrOoY3/rc/ETZtW8yMehIdnPiXa3VCrlvp2vFBtzR0WYrWRBVAnOGZFmWOxCGHepeQ1FJRgwA4sltJ+ehiOHKbhoZriGcAMULPtdx6epaO6FTT7kq9xWQ+4FL0lr2DGSveexlFLGfSjbX0whYnEpNn8DcJqzcDCpTR+QAAi4ulKF89RfqWtm/GN8Eb8CtG1p3YUQL3CLHSp1YWuh8G707RPTh4EUBUKADnpGSdCFxY5WxCwCdUZkJwvzrnWazi7w5xFVM5LmJLGUzhtzY00VuvanuULaxzXiaHNpUeumMxu8ddoYdcg==';const _IH='04555b315c143600d8ea8294b2fef3cda554bcc7808dbae62ff5112b0becb336';let _src;

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
