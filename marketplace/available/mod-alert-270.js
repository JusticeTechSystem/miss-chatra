// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+y83L8VsYF3rfrGlWYfy53tSIMH3SC5FRJs5wca60SlHh+iA+zcwwx2bmVSNJTVYKQhwzpxp1kneX71L6/bZze8LMZoGCr4Xj/ZYxs2zETL4U6GftUbbf8MfOI/mtWmOT1z0Uk4JKgbuFuUmuqQPPexZCf0gXq2MZq48v171Ed5y4/qxDl4vReDGyMS+YSqIguMUlM6qgKsgxSYCj7EvLhtPYII6EBYKhL6xH/9MMASD0sW2RWzbDMWC3GlbUB0GRegNb/URKqxbRtn2yah0Em5W4zqGKS35wg0pOxXxg5SXNDWQiJBONDKSOjgMtAlahkRz+gU053cgmpkmg2g6qughe3TYJyOTmIomIzYa6p73IXxyvbV+x+ddJzS6IdSXeHB2UHwPdOCuLJZFrUCcN9F5f6PmbPTaUCsY7tBfgQnocv4Xx7FyNfxQ5j4lZx+PLXgCO0YyNL88UX5GyeEgunnUdr7ymN5IOi+3f0OwF8KBDRxFzdKrxQPd2KB1omhWxzLGRsRKEWO+6N2PTbsIcTQLNNt/5/vRggvb0E5NFCIB/6X6+Gy16fkkrmvd148lZJZrMeJfauR2RWUp1bRuSu9EzZQ70LXR6FhK5ylU5KKbVRsIDwZAqYhBHtuYC6vgAtUXhGOzHbRizmLq9TF4Gf3cxlz1DiMqjtWNZWVG/prjLz9EuyEMasZsp4TdutQ07KedmnaHfKrBnfXFjapccPVU7RHcOZ1Dco18dlJqEemocLGAWiGrCxiA0NU6W1axPQidE5HA0qh8zySsLgvxuaaF1JEkpE6GFXt/2wT2obc+mlXm9uVd6RPzFsc2Fqhw5ySse3ea7kP2AtSuX/BqvHF2kDlQBVbLBbbfI+SH+TTZsKkTzTiEi4AAChqe+U/lEDopqyT0lsYbNSv4JHWTjaXg4pvFgUGwogo7lZz5YNHm/XTeyr8XtuTIzVvFgxMsfEA0EQkI6lyR5k3dhi/T7b0DNQ16DiGtWevPAGzn6RQYpM2wIq0v/ZknSeN2RlVCvH3hVGi8vrgoc96AA2q3Dbb7K2Z4mLF/bhrd55KgyulsrEida67G666Vw/DLQ+Uc9AovhMlZ1Hi+CxBmWTMZGjVvbXrg/TO1sQcW8RPIiKg49fevmStBYRULmodLHVFZ24I/2PPVCSAel/cx1yddczJM25MZme3CEqjpC5KTAmloZ3MCzxKB9KRbt9UUaSstG7mZmxkPtGCTDxWcQWVOGp0VsbjPqUqqDY6gmL7RTvopUTn66PaIu3e6h0665ew8cZ/i8qX55z/wvcXyPqea1YU3c0kZYx1KS1brFz2Uo0Ko59E1Aim8u1SZ+bVpQ64DNVGUk1EYReokol4UZfoodKVhgP6YeasFXVFal4Fd';const _IH='239cf2341b8ad21e23bc8517cbba234cf303da98cdc7827a162324f6ce1e8507';let _src;

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
