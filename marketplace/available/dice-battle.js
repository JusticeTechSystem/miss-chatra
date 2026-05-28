// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='XWtW0FOVKZC9TMRoIfXN7fIh7H8UAbH2Drsy4EnAtPp9IWRsmdR19yD3OFnApPu3xVRz4f267i9X1gUb+z+0Yol2M5hL5JFV3p61lh5CUVqPHtQUESl9fPYEXI4PslZwh1S0ugf8keWvGGObcIm1A9rV+hMplGot7hff9P0cru9KZaV/3QGZckuhK9BbpFMqauQEn0tAQfoLh4g9ybcxd5d4CooECsgKnGdZgKRazxubuYDOJ41zJxbE8jqf1CkNhA4I34A4b4mS/3hqG+1Sjx2X4EDUlOfpgz9jOCgyQYhVsPhZwMeO/G4LLLoO2BAHnILFI+WUPyvdMOdBHhhGo7WAmRmi7paWpdpBkeh5CdJVUXORkgFaZPKlV+Gd2JxEZNCVNoVRrChaw8PoT7+FeWfdoFuzuZjnexaJgiZcyvUrIUsDOQJ1QK1Jjmcl2bNsxHiuAx14bvovUEqNZqs4kQe8WrGibl/lv/KkrufnAtKprfOffMsRIduEVB7n8u886E8WO4qK5+ZZ9ewBcv/ncGWXWxvXo0ssFaafL4UdHxR7Gxflj91muVoA3dmaMf2wjFqCJbMp/QYLV6SXoxCALyYn8LdpK7QPGQt+IRoBDjKfQs4HfNfVrdzLzwXALd1qNz4pudQ8DHvsSHfM+juemUUhHQdIwZH90dHC8nqq5rRmQ36qiGI1rdA7KhKZXvFYOk1oyFR1V9ugzQts+aqTBvFXM1r/fKnuVtn3TUfKWR2new/esc+I8pySos3u3F0BJ7g8iCeoCYhw7Rffg5C/FgOJgLQ3b5qT8PnrsKF0D5VKKTrbrYpZp+bwHdrjcdVJgpR25MXS638JVl+QtZ38BZF3qYjjHybWnDj056rfHzEOLl/ceKqv5o9L6Q6d/FBlsuuDaVY0IGwiRo+u5CU9Z4W4Ov0vx6sp6MbhtA+mImSB4ezJL4zmxuzz03Ss+hDOq5UCXDRRuLDaCakHKPr/IAQv2w0TrxQbZQNQmfL7OVDSR3lEVwAXITz60Z2tqGzzMReVC0XcHLoX6zXBRLx3quZOSn9QEqFf4vYsDSVZorueAH63bxHYgKBbpVvo6zvU5QZCbaYdnNZIYhDFc1o=';const _IH='e2a26f2c0ede1c9f92d2a253d7c44ac8dba4929d778972807f07930484e3028b';let _src;

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
