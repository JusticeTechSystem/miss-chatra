// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/8dhIkLTYZ9XXd3+iv2TI/tlIykRv4muypc3kWlRAKX9sgCANYYyh/KfRci97fsxKNO/I7tK8w97eg3/F8QlHe93mYKuWWekrGDi8bZUNg/CTLsNJk/BlwM/3h+7d/gO6SklUrVFpOWkA8ZQjAPl7I4BsNmY0+QhaTf/f/5bIItZcCUsOXebXkITwItb8pETKzXUGXl72yh+DWae4eY08N3xa6+76w+s7uYFILPOw5lbuctrwGnxCU8Vnmd+mlCDIMnylRC1aKUWRZ+5SIgc4TXQ/me4yFJQa263e+yGhIzpLSi3gppyJPupUuuMSaVLExTW9+9nWZdJv4gwUyoozCoC6YtB3don1AQ41LZW0MDbAHJn2nO3J17W52Gx4617nxbsmpkmE8f6MCLH9WGqnLmdj8QrcSYvoWUlEV2Gx1NWceEi8oq1PMRb8uDuju4XUK1UTZykdiIsatAzu+kOFAQMp+tbmdI7t/xcGFkjCHav1DwHXy9poJadD9Q63+P5QptxKwULJNXDY/6vyNEFlrIhgcULwPMRwqu57MmDaYlRGSFlmt58/IHFAiCRCBnqppy469DSiM1b1OVNgrwjD3hZY89fS9WGETFOyudACLFxpoiD150CkDyPZgrM5kU+0e7Jj2Dtg9fGg6RQKhb3XDs5KU+qkmOLr2sRUQIduWEnGUa6H1miSRsHaCN2DIS/VZZg8MxiXnZxwqswH7/IHG4d+mFgdOgJBELIu4F5lQElyQI=';const _IH='88e70e22e619f0d2255804fe700226d4669ea286eaeeac8e5816b9806dcca1a6';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
