// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uyBpkO5aynkrWofQTTNqeM8iwgIATQSZmabJHBwQbATwNvLIPJ3eHF+iNHkAiWKHVuUAtdw3ev65PoFeD2E0O1Z5Xat4GV4rhZ89jcHNm0Eza0qcKnB2R302h8V+loCIqTVXzptO0Y5hD02buGvnboR7lQgWb2xAG2o0LXrCcjVXDwBN91OidZTx2oi+PJMArzUwZG9tOLoCZy+BeWOz5AMvV+Ozob5+NZ6yCDSZLrAydfqwLPsOUMEt1kQDLU16+d2PfsZlih+ClNDjdxXY+ZGT/kP52Idca2skhAF66iiXCDgppq8s8yDunCqs3s164V78uF3Fq8nKsK7q16uANEIcT9sP2AmD3frOTPCbing/wvEQMxI2bB9NO20/PHhpC9l868FwHYESSW2xbxA84sg6/+VnxqqFfeYaUAoa6vfG7NRe/RYemsR5tcttFTgxvSK5WqtDPNwZhqp7X518IFUrE56oCJ0qwRicoRjfpdG3RUsRq5m31kyfpxy64lUKRzTS7PnQdUEMSUCk3y0UqsuRj2vQIkBo2qN2UCqXKbOceQ0JHcZheepFvpYGWs+SwadP4IRzdIJNzz5bBY6qvLBekkwBLPWwaIvcSge5nuCgZ8trUyN8UKQ0MyoU2GhQ+Aq/IN4HTCS9kElQyOZlzEOV4+Xhb7DKlM1spfgITYenpoBdqUp9Hkk8OXnn4Zy7hX8lPRdfGAkec0YICkn+TNJ3pPfIsBrR3I7gDPZZAdycEMMAVSkigA9AU/nyofyBxzivb6iJceDAN+FIGj7BgF/VFQVn/SzbyjfB33WNIzmpJFU3nKA2PXB3Fy2l8w63J4Ex8FbgWLJwMKt0wiT4QGTCpVtI/WvpGYUaoPglCrj9Eo0DBgxlm0vYHibVyvUhsoxB9GvUiUBiMWL3rE3+KHyVVf3deCaO/eogjXY5yq7E0c57PvSG27dj1mf+9a3z5hLaWfXOFWwnzFSNV1yGP5jkagG0ubc0AipwiUbFidQNtQuedalQu00G2srNZ5X/Y61bjkpAiQCpeQuBIw8ErrSPHp2Noq6pk5xUmt8a58KqGs7vJTKWPUpB/3nOyE1jFlHdDIqN7eDNMqKzPcsfemqfWSIrHuBrIgalz8rM1D+Ojcldt50VKygOcxIlW4Z/d8RAaA/Ub2j+yplPNsXM6u37fZOYR3+uy5vWKwf0kQLbasWspCwDqJldgbJMSi5t4f4IqbZq6OrY2AuM4N5zCrIdPqXX2VGW23bl3MCsyS8Akjlu3lLUICm/7buOPzn8nlMmI94gL9XZLxXC0Z1ZtY1wg/SpYw2YnzkPyw+VFtkWx6GypB6cD4vuZWcUhNTFDjr+A/7V1MX+BDS9yTC91QSQGpdN+Zw1TBPW8oqFRy4fF3UA+0D7uq5YGuaPQTGD7iI=';const _IH='569f5747fd51336681420820a2de1e9bff4113d95e945a05b65fee2a9184696b';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
