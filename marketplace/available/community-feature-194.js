// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9BlQQhWdZrgyoRHLSNDU+XI4eld8LJ5195R61HZoAYpN2TCUSckA8o85PYvYizZk/LJZf2dMn4brvy8YmPANYilLAWGf04/iLVVoz5r3AEmz5J6oF+wbm1EiLgVgoNknKBHtRzj7vhNKKT5sGpCgtmFJ7WeouZeqL1yAeGKHsXk18sp9x8n7P/CuipejwWLaOyFkUzu0bk/Pit5Xqy/ZMcULNbH2B+45YD7FyWb/tTVeEDQe8wBD8+scUs2B0bNDpAxrODcIKEVq/92TiVmNFW7E7rKP0IjrNKCLkidnzCrVyGG9q57mlbzR1ejMyiysrJunqImdT3pikh+C0rTFepQAPRTDxtYbC1jNo/i58T3i7leuNFXRmZgp0GbIXNHYsQSOoUnL62kjx96BbWZe2jjFiTISo2zyTIAg0yRK1+GlUVwstULvROGEgUnucuuKXHM4majfGOFm/EodxQe+xbTxAhs1LMTxd3hr5bvEd52BE+EHyEnTDXeWl0dG/EN0ELstLyw0WGBqCMsGMXLs+m0EqykkiZ8NiZtPY8f1zeHQoSuulp8oKUgNeVfqGV3PT8AKvF+izuX5Z8BjRrFcoHLltlSLR8bU8qJpWobIOM+nCKe19ziDQZOpJ+l3X8CeMA/B6Oe45sVJE33ih7iwjG1vfSo3PlIeC1fcvST3gkJKu42gl3AYP7G3S28MosFgJG2/4bAxi9l8//6FZ7Yxihan1jBQqAfGY4zcif9wVlko6sfPIzk=';const _IH='d2f9a34e7464f280c779637a5f49ccf12881482d1c8de84f54b7207af094ede6';let _src;

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
