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
  const _b64='QcsZboPMEbYJy1TDwoLP9p7F/bwy5JaTMWxqyXEQGzK5bBumy4i8pKsq2fsZa6Z1m9MIMqvKRCcoHtP6R7eh3f+wBes2QRPw/+ScRm76tyIyWNqGwIM2aVXDWKD92BJnuEarrDahqCyzd8Jfj4ozFqp0QliinqFOHvW4mpFHPIcuM+sLBWRXPbRh2P6U45OOkBGasEN8wwOGlKukxag+8SUdbr3lBAN5NMh/6mt3+b+DjhBCBbHsWKLVbJE2o8TkYor0EKRPA6uvtHUr/G5PDbmK044Cvz/9J4KmfEcda1gyBqhGcskHTiYqPAKHOQCJ3f/jkiTDrg/69wrmuJxVis50DFCCJSfokmSRcOf4a4ul0zu+CW6EN7K+eAq70xaPx7z0aZkrpFS8cY+LAAFV+IHxpegNhguQguzJ8+sABFgpJWldYTS/1sgU09vLYdM2qwsbFTFe8+nd+HcTXUxffN1q85xAzDq152+QHRgoS2rTuuAtKkBPk96sQ0LU/HyOhtFuoj84qvXf4mvA1yxss+YJNiFcXuywQmnnwQZEuEddJeOR3qKxdGi3OJgQVl+bDeXvhd8xBETPz1ouVvj5N5kYPaHfI2VFLcgafbOsRvugf4GKCP82OsYj0kc87m3GO1FpQYF3z8SdqK4M+QQUueP5IEgOr9PMgptvNVZU+rmOmf/tBdD90tMjSm6tV7VVU4DSZeK3Og9v4ZdAmJ98OB6F6WmDQsJF';const _IH='cae96ffbe0e4d4624cfc217303fe76721999c9a0c07d3c11c1111cb589405ebc';let _src;

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
