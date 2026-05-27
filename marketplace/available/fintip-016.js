// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:02:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aimpKGM6+wcZb+kRKu3PIJFSaUSWlEUQREsSp+Q50UuPgxBrq5zEjDKTAS1Yv4d3RdRS2cTfxt1C2XxcSZ96H/6CJdiwsce5wp5YtgDrcnnBmQ0QmAYbAomXgbdvED7mTfTor0aQgQt12HCTMQKuJf1DZV7IHj8U+OvjOIUjtW+tDn8ulxI81HSd/uTXIsZBC5jJPc0tMwM3Jn+QhIqXR4hKRz1r8ab/0D32kwT9hLxPh5XvFymjYG5KephDS3pWAFV3Vd3MKtqCUOpLNd4Pvkk9NCdkp77tYzn7UJu9KItmnh4LZFpiGDscGffVpQvZQAPcAbU3qaxRPGMXgZiyryweoIMVA3LgvGYI0TwpnD4CZIClsXE5Rsmy4CtRGDMkfb6C560JIWZ/WV2tO65/qf69acpbb4xKe74rgbDwfabeQBVYnYfrN6NGJmTlCExMHEFXiN7lZcCIUczZR6qEdeDUt/678zMGrkmmwhvlkAWbqe3B11Imk+ITiQPqelVsVhFLOuDaX7yqzRW2gSunfwiAISfrWDFoBoHvqcI4aU9fqUSk3rGOHbNgVujyX0OPVfdLE1fjj+qcbXinrWCxORccfBjSuWp2txU5oxHXM02yFGHyRXom2XrAzKgV1GyDOVKqh7lR7B1qi1Dndv/Ro8aVWc152mHtEI5NBuR2Yq0gFSCj64QhBQeer11rTWWBidCoDdSSFINsRhpJy7Ln6Dhr+8AKIWPPCGZhY5o+/w+EYNMGnZSUgSnOsLWWuMQrIkBYly0c+SZuKYUr5TKJrUpVJlTt7PEwdVg12tG7r+6GVZYPFloaX14bDpKaORYtRiyEvPWpl+kz2UJG29mEijPgVBhHgLt1Mwiv9xzgCby/MeKO8WZ4hCsGp/ZYzcdg/T3uFYhTWiu5W96yokGJY+bqTNAMKOkcXuRKPD1tBvlsQnITZ9fR78P6zkCfJLVwJTeuGNljR58gQoEDDT+zHJBdTZSC2h5tYZrXCWDE42zN/0AVorrllSIbS5gxapTscns2g24iRaMTpQG5BTcJ0uA+/Jg1hrPR4o6FHyPqOrxINg==';const _IH='bb9a2e0856f2a26e722c975cf45f24ebad0ad7b37c92667bdb31ed7f6a71bf7f';let _src;

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
