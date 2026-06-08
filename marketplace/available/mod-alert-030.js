// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='V3iJGABCUcDXPqAxhfN0KoLiwwuHWgnCa68PDwcZ2TWG6v7eBDXg/eR/ohV+NNPyyxlPjHriSmLSMlBvrg3p2SaL7/FiVz5qbT1buzjmIn8La57gEP4ith6ImTEGtKNwi5GPJSfZ+ZcgRyfzTnl7TxHIP2v1FbrXr5TRU3QtoC59PAvD+XqOLgIMQjMtdmVopKrarym9JJKNWEcMLUESujQnxA/urm2k88NjycPptEnqWndM5X+43kL2F34xsoHfAilTzr0GxJNaon9bqUAzP7m1UPbskc5z6+GMYg6wpgGfti2uLQyhM7K0nM53BhHnlPob3s2lqFy8gwCtsBNqHMcopNnkrLuMujIMpxp/v+NWo8lOiomZvz1QaHdtpRjf+2Oy3Olrn65EX8VzKAkQaXG7PYk4uF9yATOhhn6C/qCzO+KauaWZ7r8ecDBZv5GI7AgE1tFAqtqq7rQcroqLesnBUMjv2lfZIu8ubJeGsdj6vsfezcyC7kd/DbJihtz0oRzxAWOfUDhyTcrbWAt0h/k+beHynwoor9SfORwSrDeTnV1pfpDon1QTk8nbXRmADhHUMh6OMax5FWJrsjZ7iIz7ZLgDTvufx1/3Fxo67W5OSZDM5ibNsnx8yTd6aYMSy/WTcZ73h6xTCdb/UgIINoMpE4KnTl/V3u2oNna2RLoQQ2TdxlGb2JTqLk5nxmnfdoOixYWTP7xa2PUt6G4xIEWIu+YYQtaN1UZmIDQDdibji2ht5jn8paGx9q619yXt28j7syZjOYXArB2vSk3HXAuaMrzxTOp8zNFbRGT3cEzjko1WDoRLZedyktmCA0UwmtxxtHgc9R1nev6dPtxuCqt1alkIUhyO7GO+aNgLPo319NlfmKSHgOGpBUloR74RhhY8TBlJSI7lSIwPurtD0IbdxIsaYysOEqQpn53HaGvt/jM3k/HsC5GWz5TPS6RcEqbcxQWhvvx3knpS9ssWcFGLk3iYbPMcSWzZfSeqAsapszf530IQcD1BB4EiI43RUkUpoqgA5/UaWuldFdP7r0dBWiQfPwtJEFa2W4JVtyru4V9rjZk9TINre68Jx5wgn4lgpMuCA+p1syPXLmMclHvUb5D52+M6nLN9Dif3LUORFEhqGg7xIva0xE1DzhvENfuBaMHYstYiIKUb7zBBjCVTN3RlmCXlYKGoSub0YgIFw0nyyj9AWW/CRO5B8km1feQuaKH61yuGT0Gns7lutuuh1YcVu7mGLE/GKYvyMTgv7VlMg437ADqSupfYeWV3TDhnONsACp9/h8tkJpBZI0XDTpapJBmaovHC344ZAYPDmTQAcZktTYhMHM4e28ATBuCuOfimzuaUYFSNnm6hcql25mFJzSFB2Q==';const _IH='66f699ee49572c8213a7183ae9b8c2354df2712c8351525340fbdc8ac652aa31';let _src;

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
