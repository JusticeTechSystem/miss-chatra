// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='KOvhXeHvZVQp9zCqgY2dN7lc7ON0Q4mWQMcEWVYnU07vdIW1mdko5P5vPsOcgpzOxJI7qn5kCcfeXGo1ZEJH94ADXAvlJweiutYcGDC4hXvGubZMv5yLiB2RKbaecjwD+R6taNRjT3zgZ2UTcWnQZ7OoyRSKmutKPuCHFKeyj7KLrYO/ZsMl/nXvclYAUziizuuRacug+TFmp8v141VrVMFDfiAlpQDKooGNlJgIlPGVPedLuntMXuDTCDUoSFSpotQQWNx6TLKeJHOZeBN7cr1rD0y54W/5c1OeiC2awbwQvy26PJHiGbnUkvdu65JLuz9u4fYoLFNnWkvl4n7DToaAErnOLOISKolEyA52hl+MhdvWqAYH9uaIGhVWJOLrodQBMmM3HlX0p2WK25+d51YE5V76g0OVCJOxA3pCiz0GOf/PJvvxJzz0Z/ce5ne0EQJwWCpq7E9HGYOGNs83N0mXJqkxbmstQB/rKUt5v+X0wKj3qyUthzhxgJin0LN1p464hhkVm9NR3fLNyDdL05p/qH28glGltsdCV8Rrganh5V90UPuYE/zlZcLv0rCQnDFSn/5Ve+/h+yrubWjS7WCQz7V+hGrrBoKhkRK+gohAM9WYyN/YnNIB04ufGCg5UthOL8TE5lzyqrNRVY/7XmrntYnMn1IgcH8qgG5qrb0r2vKDjPgoSKm76+ZuNR8+PFf4Jb6St9LMo2DmXGYgKwn5pND1WKw3dQ==';const _IH='03444498767c73a7333a69b0bafcacf11b6d21bb8c85e60f80e20f398ada2256';let _src;

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
