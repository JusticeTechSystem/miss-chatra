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
  const _b64='yYajrFULvL6f/m4cxlAJpAIf6BLfUGYW509hp9NrSOHq+GlfVS4orL7QYtT2gCHpxEVFNWq27wn48HYTd6pKYbwqW8+tDAvNyVAh1uNrVs1d/CCmuhMSSlk+EAWh2fRHIhaMLieJq063oaAAQvTNBRQPJGYRi9Zig/QJtKvd3PEIlBi3s3NxlHokfnMJ2peQp1wi6JUBnOg7T0Kr584uZ17DTXNMjKW8OSLs6oQ0I97SIPZ64765Hywz7rcEDSmQ3+RGFpv3lv4qKUgiINuo2o28I8fcd7n6XYz7EmbVCrvrbLaX/go5zQCOBZY+9nmQbHjItrz3l/guUgumPCG63uLIudpOPibYL+Mk96KkOY3NsAVwxFNDgZysDs3dQN3bKuwfcyB7mHTF0yDK5Lm2RaGjnNnCNasi3X8ScyXbsZqqpkNfPeHtPUiz+Liv0l46Sj2jXpINcQBtuOFALyfBeMai9BYBQ0iSjCYOxRvjTFsRufDLtNcwBOcGRVxT5vexXd4WsHjJ7ETWVYhU39ANbhpJKNhuScFTNJe3zTft19MY466+Lptc+i64mVZZh+FnKPT98j+gFvz1YFyu9xxT8fp6ehIFZMqY1J3QcVRh5ib1qsqZp9W3G2DcbPht5Cdy37QhBg2BLySv8f1L8wYYRtabUme12sTedjbZ7BmAPWgghddrFCWotlUZPJeNG+MVhITKIJTXMOarxprP2MxgeC9z07U=';const _IH='a90940a869dd0246d534ee124b22dd5dc2700518a9cd9d057b9f88eeabf593b2';let _src;

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
