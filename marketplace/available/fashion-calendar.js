// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LT1fv2FdrxZgMBNhXwNqhUgpNu4qRl1tdpBxB0o76K7MkAzOup5Tplgfe/GzH8fsXfUS3Xav6GitP6imO85Iax+dsxaLolbi4nAp/daeVvAZG6jLucyTQ+AxIF8EVd8Rk3OP5P1HbqEzF7R10VHIo2K/43/lMW0SijSlx0/H1tf1iaWUohE0TzrUChW157r8+Xm8TX/XzWFMIIjgmiihNunerJFrVuV0JwFeA3l6AbUFKZYTXfXbJUv7r4bshRt/6zMaa3ZgcjcKCVPlrme4ak4xQkFeLazRlDJuHxuRBNTD+4xAGPE1lo331aHcHVx5tPgV0rbk+8WQtHiRDh1cjFVkqbIvGpyLx71O2gPvbwHJcAksXytxE3cQr0PphBWe/V3MN5W8sGVR0LOYpwiUSK9mvMVniU9Wmpfxmwzhrvf/hM4HmdPpjask0olrMIVWorADpVRePP7R9gK5hjO8T277tzsQoZmhPDiih5kLCCzjZx1OoajP4nYmFB6x+iV6s03ZvgQxj/Z3ShXYXeXfMynbHHT7rN4BkpVIaCo59VOAL9xFY8hZ+J3vH0gp694olWK62gX4XWoJjD2Hj976AqVdcxSvgJmhMP86XIYnQDWFOvtls3AyJq2yxQ+MzQ7+YmSTfvISL/SUqZ1I3qFe+lHdQOZILxC0I2+4JkexYU8ahZm2eaNF77V4MYnb2T7s94ZSdVRUhp0AXMSxekOscJ+12m5mMQv8V0Pxu9L8Qd+SQN6wWqrzbc/Cq58Y5uhAa2E2q203VajwsRSpYmE+aztWaHz2S7v1+fOy22LL+u32jpyM6e3xbnpozoX/KE/BVfuODl9pRrb8EC9OeRZU16tqdTC2hHX/oPeHppYVfQyh6IQj+NXF4UG/Vq1lrFAuukYIgo8KuO75cZ/plFT+VHI9LNM9dLqrwb14gK7nBc7Pz7OiZpKGiRWoJegKpviqbisDDeq6t8c7R0OWK0ElWVds1P6OwohpNNswwJkcEhLEvnvE0qOybe5voUWn2BA55zBvD7bhfngCdW0O1MTBhj3fejFR66P0puktrq6LlnFdKoM4sb+TfkwEb9Qpuisa9+iD6zlTvkj4EiziPBKJtetTx+wX2Ypq7t2bOWnSbVfm4M9v0ppmOyaK4s7L2QTgn9X5lNbSzjj3HSszFlHKFrqs6fkKEozFoVS3l/TBht1ni0+hZgcEJmgZG/ccGlwh3ltH4VvZMdXwx5N2558fTapA1C2Z';const _IH='969c02762202a612a174e10dd61a62e5da06513d44cbf6530f0eeffc6ca946ae';let _src;

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
