// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:45:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JVpcP3IzXz1/FrlVwmGpczD8Cio7TyXHW3NakPaK7tqtc+Fl1d/rdTJS4jyTZ1/p1AhhTcp7ljNrkp2r4BBoYZyI2s+T5fiLN58NZA6I91sYItCHWQ03TGu9Qt05U6kR0LCLGlLRyaMpKPOVz9aRT9MUl1O7WascBm8rCCTIZ0wzwp7Al4DrD0A+qlRJRgxfX1Kd9weyTsF8RLmD42MZS1EQqLvhwQXXPrhb0JcGPITgG/7MQ2rGJfDGjvFf3IHU6ygMRSjE6UZp6oe021gRibtsguTY2Upd0fagqMkOt8xQahlRIRZJ2jxti0NUsvTJUv2v2YSg/f73BqRkkRf0meJvxsq2y2cN/493ItPHm67JvyDDxbatn8EMAfqBQuSLx2DZDsvZ5NcEi3hKAd37WpT4WuU4s5/APpPVJCBvLtXmt2AmUNZjbcRf7FqvsmACf4yPhU25xW5dMnKSvGfa4i4/ssAiFqhSgcZ3DbB6u4kKa44GnaZsTGiHXBxaMia/7FfKpC4BELQF/to+RwIBV5CTkR6NYsco1MmRcTqHc7kqWl2BI/hW6Gv6NI5+CHkgT+YNr1ZYlyi8MYquMoL3iYTqMVl413EPqt/ToSRtUahm43KgSDcTyHXjUmLDerBB4HmV2boEugUGSgAfiU2ex0KyYAK2um5hVvdj2QSBGSYl6VKXrF2j7tzVlTTSZIeZGkSyKKoqjg3JbRwQtiHCZP34egDFkYTErqq+OM8=';const _IH='406facba31ca48538308fefd9dff72a65e99c9921212197eaedf5573b344e314';let _src;

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
