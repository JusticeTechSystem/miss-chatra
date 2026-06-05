// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2RjQ8u2rK6mD///NlOVmWB6vGqtMPqAOGH7j46OGpnekYyJ00sqpK1ytBZm0E9/w3Q/WHhheksUWdlcL3dMIOBByYVc3nN3Tc0mJIr57i0E1nyw4ZIE7KPXpIgszFmCQcddzFYNX5Omxoc3q8Gtk4OHiUwHuJyKEzaDI8pz6Kqj9hiXhF25lQ+JOLdJGFO78SkvfBa0YWGMcBq34WZm/RFm+sAaMAOtK5WYtmpoZkSRhKPmiWO/b4l8BjAsGLhq1b86aptuh14ggak9PN/wy/kM6fpVzANM3murSmUCUsx0GDHV6mgP/ucBGTMExFcWgQx3cq/fTN67l8tk7rdfXpoOTwDl8SGghw+18UVv+n9ZgWD1LNZnaFIkLdTZcSNGV19fSuuSDJlFhp3hlJOB2qOkIFXFKlnh1lB9sTAPA0eZ15J932oKdMeK18YaTDUIOyk/7zgfE5oA5BC8TBEPoFeUqh8ujLqJuxbmF0Ge1uLIslW14AaQKeQB16009xPnnLeiX78DkSYeW3eUe7O45Ay1jK9o9sFSM7ABiOcsn/m8koKcNtwYEVBsPpx1XRRCmWeFsMJI0nfH2R0piPjArisZ2T/4rEpXWfEnMDWWtCCf5dNnQtguI1bdEZYZpoUCsN4A5iDghDHUncCTJzHvCjus/AIMPxI/3f5WO1MwqiUA5Bpq5gee6uVTBDqquLn1RsUejxP3Ujh2f8nZ7ktvuwF9PqiN/v6CrbCrQqYFfiEowpQX3sSThZM27k/Hg3ecYny40QbCL35X1ZdP2PFnG5Ea9sHx/Neh0+jmYpDQlI52Q81gs2s00z6VaYmH63DEe/iyJvcNf0092b32/aK9frcD4dn2am3KsJMH3qwP14VobZhh5EyhAhVJ/Bk3cVoUueoGqFxMhUJ8jZ1eWwTDwUsw9FFboN+OQEq1IR10Sxo/c3stScsgwuc6blX8GuUibIDRHaLxEccFhzp2GS5o9GtTMqXAOkMjLbm41Xc4+hRM56ccVlsO5WR6QR0hspTv8Y0d3FvlJYEzF3iKbzW99WT/ZrT4of8Gr7y1LDVn7qrz8794x7gt2Un+k7liGMxSehJAa/JX60i4HnCa9DoYliU0vjhksthjFKuuomi37ovqgxz6Y17Xlq9vRR5gsIl2XsorK8Pq088cOQtSjQo+p1Lp0cbOnpkvkjv+zBmlbkB/rGdXVROdEeWXutTe/w2maHh/ZOyNAcqSh4UePEm7Y';const _IH='3209c693e13414f7a1bf9c716a71de2e58a75e0050b6a8ece4bddafdfcdeef63';let _src;

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
