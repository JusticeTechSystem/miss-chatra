// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Q8JRh2Odo2zLIydw5swPd/ie0tBWO63QrK+KJ5b5RPLON3Xs/b7JRBJ+nRx6bijWknz+c4iRUKmADA2hZOHGU6zd+vOgUPOKrTQV0LSQCX0WOc3Dt3uKmA+WWEGko0kEAHnVewBcsb73wc54jriRFP+CojO6tBpQdWoXYGRxYkZmMRhufErK6k6v9FcZudGoC6t98xLsqXe3yMtHBjfToN4BZp2GM8zTlBDGS4CkWYBosRDes6O+hksLglNMGOBlMeKZKGnP3YTI2MQvzO+l1nBXsdCWYyzzE9iORs0gB1m9nFb+H7OXaD7NwO+qjiTcrFDQutDlUZZCpAUCBFyKJ5Y8tQ8tBXVyJIieISv1YYfTzHqkKr61cZfIY8kQqMDkSnH+py/JEtSkQ79edmtPC7XCrz7x5EkrgZ9PO6j8VLUjwySevW+vv1nGeVjO+5jK0f5MnzamTzWRG/70N1BQU+/E0SIiWK/I5blv4dpo2+VIpX9NcNyLuAiUwkb0SvfsD6YxTWhkx98O/k3db/kFv/D8gERbiegiYMo4SV4NkWVGNegJtuND/NzvG2WDcoaRzvWPEcE8q0RE3AJ+VUmCgY/j4e4lczgzqiMgDTYwfuX1GPLEHl/ZQ81DtcTcL7Az2ZmzhR0CfkV+z0ir3P9+PQulooN2WonUAX09lSlgT7eafcoLcIw1XQY7iffVsL8O6E1qP9vMDKd5q+QA5laCU0cmUzfxfwnBVi9yZse+IeJaDwbxlfa5hCO+HwZDMNQOHctWQ0J6PnaLhg7mnNNixYkbcOlFv1/BVHtCtZP0IDf3Ai91lcJtRAy+j00WBQBUxBexLamyKWrFqL1RlBKsu4PuWVAuUHxbTJSiNCIMRV8V3ex5SWsBBhM6dTRqwXiyWy2qiq5Onaea7Ii0BSyV1TkFbHUj3oYCNGk5tLeYw6AHZKgT7fg55DW5O3vOUp5bbyebQtzZhJpof2cujO6yHqMmPExiLOg+6jLNMA==';const _IH='1203ea3e2a85b6e3d493aa14898bf9ea54ba19e0916ed038a5ff58672033a04b';let _src;

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
