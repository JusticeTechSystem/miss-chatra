// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:45 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR3OooE+FRMBi13Vf4mZQXOFf3bzAQZJeQ7ge6fmmq91jS3C+NriBdcmyekS0GpoK2kTJMP3van7LTPOhkny5oqF6CH0a107b9UrusayxIP5OG/T7D9WzGJpsHyMTPQhATXHq5DNvvP1hEtc4PiL1oyMVSqSYdh7yVje9NKbR8yKsqpjQboasO1wrss7FQ5OGZBtANtEZHDsY7QBosUK3zJNvtpE0rtKplBo7YBC+PxvnMPx+Eq2XKuE2xDJgk8va25OClpJYnpELUAuzZHEGtMo3BfceVgFZumRwmH7ysQmRDGEPEI8/kCCyuSaDeaeMl98cvvvO0qWB0wyEgBU/04zaz+4+Bh8vglCY2qHEYloYCgYZu90FW5ORWyfDIRTsMFoC/2CP5I3UWG9kgSwgHtfI8iT+DOXmdjGYeUIq8AA3+FOuywnQyrBLIuJ4dybNJMzS/tois1gATuC8QIFnUIk0Z6han/wSZxQjeL2UeWYCWbUdnuKRbyEWzD+UyBOGLsSxR/XePt8JMofZf+S/4bg+Bm0/ZGJX9wY97L220FIMGsBNgshP3/P5pw6C+iyL6e3NJpifh81Sc/ggqfDyt0Vx8Vl3uXlHRQR60r2DIOyG4Xl0hjQhM5h2exJw70qSvXHd6PPLg9zcfbR3G6EuwBRu9YiXveyoI55Y5OoLDldyuHeHpMMgav6HKZ6/KoYaV/35gh6PKi5FeOQa61449GDmvXJ8qSVz0Q0N1wOKO2x5yx2W5OX5AfECXfQItxZVk3A2VRdnlePxhlkStk8mu34A3OyUA9ZDDeZpq02UeiSwYhiilOFzGRjm/w0Osu9ARa06jFTeHX/1jXUjtRn43Lvf2iC82L19PH1UK/a1MRp0ILuuM1vWcu4GySQ9mWG4xvpVZukGj22YO50DUXwZ7XHsRvTp1UlmVZW0TApn3tOx9NrEaq1K0HNqLoSecnbY2wj8ur8x3wPMawy5G151pwtEhVtz2cnXhMXQtpp5yVl1mPNBXzC14tRdiNjMjXb8vOa5nGoTEaDtD1n4TR9MQNfw/24WYm1M0Lbk3vCiz6O13Db0n0DrSZknGTNwUimL7qeTQrsgXYUR1993Tc6oXe2GC3PrQNucF1eapnnlbw46j74oBiFUE6HHP0Zn3/2gtW1WztxNbs5hCR+9jPdluJ/sa4QAcvC5BF/9QJ73r3CerylvjeJVqMAZu4Ki1Y8ADuXY0DR778';const _IH='9bcb38e2bb366a958d40c8f4b47b90e4dd789dbe00bb61e7641d6f2dde441d88';let _src;

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
