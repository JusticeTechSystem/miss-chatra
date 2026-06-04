// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LEV7xO7ah5Xjk9x1C0eI30XFs4ytco8Q98sS02M5INPXAEGhDCy/aYrApn3+n3dARmgbuH+FuSAKeL2p8asVbW6r9BnjUD5mPvwzzclI+54BSmr5yEbmg46kmlDehRvxZEuglQ9Bn0LXeqOkKNfT45uZHq8ISdd1wUp1mZmPnn9nXG7L5JtcLHtaGazFyehrAlcrKBhk9B0M4C3txXh+UoFS6l16tCJ58M9Plj+HnawDQE9gXDqZRK/oIKxz6U8S0TKnN70bJGGpkupwaoYsQ9GIUsSZI1vPpGnuY9b/hOwsNxUAbO39PV7H1urA7JEaTN6OSg4Oj+mAFTsk3G1YumDIJEELNeQ+gCWKAeFC/xhbufF2WdnSUESKmCVHYqjclj43H6kW1lJqZPV0rM1XWtk5JZYcbt9Mq4Rdw8WRiZmSZDEwgf5ZW2IVDThA1oBmFoj6m7RVP2EXMm2tlH5X8DDOWISXVS/Dmv89bfcIrX3HL+8LEljJqABIJHjom+VqbVYsjKYH9eMhiWWHDrOw47BYSKrELMKTo101pPMrOILS+7rmd844atIu9WzYraGztisqtEthoGgcqFB0m6tHozH0H0Zu6EJSuIEqLSXkQb4v7Mh1hGz4D6ljJBiGOAppcn5LSsSdbxcgMgv/nnXxYSBKEKyur/lhAVtxO1XhHBHC7PU0o92GTlsXVzeQbOCG5TTNMCKeGiu9b/WUUvFIlD0pHwO5+QJcPKsDINQvekp/fi3u6UM=';const _IH='c8911d9e50974cd4de6ad84e77287b18ba4aa2a95ed473a79a489fa16c41c374';let _src;

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
