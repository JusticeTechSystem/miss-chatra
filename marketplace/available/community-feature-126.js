// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kvcGpsuraUadedQ8EOQ6QRY22V0B8QbaSxr8ZS9/RxjxUbEJFBqH0r0c0h00BK/lFgzrkBQc/+yDkWg0utZMwbf9awmFTqFhciVX3M6h72u1cc66Jy12MLA6RGOldFGO+aiuOmBCuGw5aNqiIHbHR8Tm1kZbMr1qxA6HWSbSXQ+cj/vqmUAidlo3zCE8AqdWXxo3W/W3ZqWyh4C/q76pv27hWjFIN138FZ2WmG0pXF6UFYdjFQEr+IrDzgmjsSotpXpPGe+LtfL/W8GVaIlwKDoXzh3FK7BDLcoiGiSfdUHgYJk8+Z1H5QVkgkkSGYOOsj0u1LovD3mD999nLDLDkA08Tl9fsKSbmfKj+o2Jc95XRPi/pLibYMOgvnak7PYLTkHXCIuG1Xje+rS8CjTHGr1FQWGYyZssGnkLhnBrVaJeCTBcKhUbKCi2DNwYtmcwVb/XVjuEWXtH8ii210y6t3FmkWY9tRbuEpV3yax/J7n3zEU2SMMMPG+/ExDiv3HQeWXc/g/DXcWvXn+btIj/2o1dspdp/PNfUkQRzkz38xsReBWOXY/dAabVD0kw5b/pjQl3fduqdghzIkKAOo3yH8gL2DNFEGl2720ejt9uBxmwuZq0tlk3qVQI7P8zQyJgO3Sv9D3YvIUQV05agI46r2JwdvlnK32004tHXxfQMn/bzLQV7bmzyDkoDzjH5WzaNaN0fCRFGzsgJ4cXnIeKlV/U3IXuhKny';const _IH='2d800edaeb6d2643d748f4d169f82c4ee8a88bdca5e9cc1b26f7079132d5c6a8';let _src;

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
