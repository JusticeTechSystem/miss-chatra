// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRedkRBWL0U9NSEPfHZSLOm5OsBeVSJIcic+ZFNuBX3JrQaM+H9ZIbFGS35fbb7NoMYiVBO22P3oemO5N0fqkAWlNYeOHbNnhX+PTO2+fQ/b+eCS6wK1bmR6D44cVBH8OrXqo2Wm06fFkW5DvYEubDBdlc++k+WJ+GWPiHzHrrqOCeAJSxMw+FVgK8HspL7nKGIQ3LAr3RILCcu1YzgOlTJHVdrtMCyprNQ0S64y4r+F9tRq/8vLAFBHXqHKGmrUyavQTJymujDEgFfR/dBA4QHZsWVEgpHPIASIRAVv/JMGGzakLQF1oRw1w7s661WoS01PHMkcg41KcfdgNFRZLWaRKmtdqogL7EKpH48+YEPjwhZAhGHyCEfcMekoTmGo5WCoL92qgx8FfkgYKrCJS6Dz5TzJlkxSDGcDnbJBrRHW92EnLegozpRaQQ0ZxxQ1NEkEGFdO1mLBBsn0nWKZ/aot5YtItiWCj52lkevFtD1i/0/1ZUJ6JxDWVc2YABHFOvvkAvl9yvMxHXo58zFp+MVAc5Bk8k2IV1CBv/iKGXWeMuZleL4Y40kOM/W2MgbVfUkheM6876K82i2NMSRVLkyP0FMa13J4JgpgWiwj66BjIe2BbrsE6DiVuuyzwlH1jHX0sAJG+SoyoB2K1tHX9OZojrfS8DGGHTeqwB2+VpCNyPzBnQPpZYCzEpEDh1FKy24yJ/HvHFOBuioV1M+O+mLCZkKKNgxUi2WDM9TNK2G/O5wYuCRM+ClmY8/0FVqPfK8gTEGkhRKVrTYeNh5VftKSQZN0oS+33Gl1KCK2ojAxCuS7tJwmzGCR5SbT6w9YV64Egk/W6nSWyOGbnFQG80qE06Gp5sGjbZDJx1IrrV6SWUV/8dC/8I8y3+9LDeKF2zZ4+rViWdJFnnrJdw3bGCvGbiL6F3eFeDrBHWrxTFL1IdkMBOAWzOGnUl087JotlPVVYC+CdgqZ1E5FxFHy4uXSaolhxucaQQ98k6eYbRJipQJsh1wB7p4HS56bF+Vg9MV';const _IH='7d51c3158cb93ac36e598f8460a26240c8c95cd67031f130302aa898bb2f1a19';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
