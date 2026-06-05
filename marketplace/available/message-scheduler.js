// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MqRd1tTJjzy4wbnwz6inrzxHPXzI3Uvln+EYbQx49/JjH1yL/SmHynxBzPkQbMqYnGWSl0p7BFinD5xzRuhNrjoTPDB49isE4H/h6ygodQHodkyHHVamYGGToJxYczA5wfdFWihNzFN1gRcxrkWGaZz5vCjBxuDglRL/pxN6ni4TGpxRqO73a11esrwWZiNw/O8cLhkzi3jy8o8Cnz1MJwIu3PFsAH0zjLmJTCvvmxtqeBKubBLTbueBOCX3ZiMnRrunlOC4ZNFYIrhOtOwJzlNAa7SHIO1GSx582pwvOC4dJRkSAE4JbAv2vwT90sxHXzAnn2EWYn0+7e5JwW+nQYL8/8nPC+XdImJNcZbTSmFmtFHatKdxcX/4HogHAlJ6IehFxwf0iisDW/BXbiQMsq2h44NerUnSIFa+GI8KU6El0IzzPrpn2O7/8TYztEpT53XRMcxoi9Y22TDt57E7THj9j3gNw1JXrvwKVokoq36Ihb2HdKL/7oihXBBd2oTXv4cUmex3Or8fdPSdr7y7mIzw8MQc12aLlwmZcgbZuRth+6PteLjvx7Yuzw878VjWYW7B/l++Ezk59TSzTkCinAFvsaB7LPLCgShrih4+1BQE2Yo9EgDfbno3be3ifHTATgK8MAmzkmcIdRiwInn9ciSk6SwHMicVUiD22TihNmj3t6evbbwG6zQpMEWhPUv8mKNrtFQvnlVXK/HlkM3T0aRYAhi5+rhHzWU4b+PVGCr620a02iEayb6jcDFCo9f3YlvcaMzuK5ANv7+guBFrsJHH6JyWZVl/fiaQSSYK8F5Wrjm+o22Emx7EzdmK4OP0H3k4NUD4ReZvLllT5kbqZigPhYSLC3+oEJ3zjYu9yoOV/1YljpOs/fyCG6kAfCd9UjpQIXM9s/gX0H5Ly5c38Tn1ap09Gpn5LvCQQ6qjKK1Tp7/EmE/cWk686LWy/3HASPR0+IBazS0io9slkgJUuDkyiAl+sON+U6576o8hFjeDsyex3O5SWo6hxUQJ8HbuV6jTofYQfKciKd6cTcCE/CSxc5LxGV4CHkVZmOCGxOqeKe8opeYK8cpXooLmZhjrb6UZlICwluZ8Yvlo1N3RekO9gyH6xCrk1voDzCHunjVyFAKKP0BMYGpPtQr4ElHqzjoLxgoznOrSTS38ZBPPYgCPPG2s/Y+G/IcSP/GKRbKWzQ/ce6hp0RiOcfCUS3cbmX+EKTiZxRpUCuFwv3+n/mT2OK89zzGtZc975a3lqJpULR6Hy/mbIWTO7pdAVBoIQWJkbL9Nqyhq2SlJU8ms1XBZdkpMUQ1e9oBTMgNaBzZCUaV4ZHzE4Chk/N7DX0qeGZvp/XV0lt6RlhNKe58xUjndn6KOkYuYw4DaXut9Mzhi5REaGGZd';const _IH='1d253a96b2ea461aa65d1ffc9969c086983e263e76e2579eee7b43fa5fd7312f';let _src;

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
