// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='K94KBQXpoM/QtSzLjHiNbMGiXyL6tLpc0wy/vWD8xtX/pHAsj74k5WwDAGBTJ7PICb+aMP5rfL3qJyRfi0lw0w0gejZRQ2MehiK6vu0d3KkUqEVy6uGuHouz44Pj8Fcxl8WWxT0D98ppjhHf82c09IAlY1OzsCC7csLetNB3jp5LDu/w0kf08kGzHPhhWrFSO/2DL6FKof6EpepdXdamXDRQA7dGDHqNvvllMOyVupbWksC4lMmP1gDuHpcZAAAe7QZ6M2GQ39HMZ9U5UWJufjQLyCpDhOonMKMzmNE4E0mH31E7y29tDmFJgCrB7/LIlG61aKXrj5VBokfekW/JeO0xGX0ZxmyRCLHy7NsBOxJll2sftARfqoDGI2GH9XYeqlTD1OhVdKfe1sMBHAOUbi6rdmRxCaXmpLA9BN9tUM4ErMpxZYwdSCxnUl5I7c+onsW8XbSdw7dyxBlj1bxRvzdHnl2hgrjYtbPFCo5mxyyoZF9l06rMbXZSeEdLaNeqcIYVWlQaDhz6jqozubGGm5rMoFrdTemDwtZLgsmezj6YX3lsMMYBvS7C4ZKJzQEwaHs6SgAJxmHh64VJh7XoBUTajpV55N6ZHWpeK+2mGi+PwkaYp9mu+t6UvcZMGimqXqO8Sizs8zPtvDWAVAx0l0k7YbrdqkW/NBxHLXpTxCDLBj/a9SAHJcIp/SGzUGyqj3Hmf8WVoE5589ym3zjn3OFi769sSUUfAPAYkETpQs6tuw==';const _IH='75b76f4c1dd781fadca99891610ca25f21913de76fa7fc6dd5390962f8526a0e';let _src;

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
