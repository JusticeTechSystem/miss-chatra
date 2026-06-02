// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='sqr/E1jgBMBSm5NvR4Gin5YG9GmDn3bexnO3K1CBSSf8zzlUz9uPln3uwIp5X+mYQn0cUo1kVQ2BzvffDroUO3DRF/nL+rnqswE7v7WFHWMdhm3XV8EaEN5jp2ZKV1zyUjeEuKbhfPDQNSta1WaRALrZbfGolOQgW0+D9PTDvuvU2R4gbvlT5TNqUBDFyzQ4WcoDnYZKDRs5vAkYlKYhmKeXFhdoWWK1L1tXJlqAvOqo7MNXdr2tPHYgADpzd1pnkEDta/twuz8tq5wqRVaP2iNLPmO1aSeSStUL71vEZlvkz8AsvW6VokFpgEBT3Kqa21sQlG+OPEdTGxjgYtWxgEzJYxQCbgLlLzjr/zigWrjfdZF7oOYoCnWeSOfaj4dEtOAABYprlsODDfLDP3sls4HgXhOpjE8E3H8aLbP9pi/7PegNoRtCqzDkowaR0DZdsdvC51NQPHjKefQQQatvmrdgb4koKk37LMC+5ckxHacefDCXj5uqiJuC9xcDCfUpIRDt49VGA+yiVNZW0EjpXzf8TvFO2+6w/MTSHqEoA1u9cvjaHO+ipy5T5bimCZBF1rKJw3nKBGYjzur1zYVijYcfi7IBzX0WsS8jYTqovdNsaoOhUURkkjG7HaRvpGoMZc3evayR/hQb9M8W+zUg7Jw/bs1MFmVyYLkj5S0VqQ0IYWLhz6mI4xyxDd8VqvkGmV3zQLGrRcaA7EZfoAsfqqcikgj8zUAdOhb1eaTT27brcGonX4BnxjCkpI/GFlGGo7Rfing7Ne1MWoDXbXeXgVakQceD9T4vN2+bHLxdYQdF0X4vtgkWTdpJ1hXYAqyCmkjGWCdGLLQ+5kuGp3TRm6EqicQUJpu55OD+uW9U3ddlHat+xL/JJVrhTZhKuuoKAV2IBjJyQKBZJqlrU6Qerb48eLnr66fkNXt6EBHytEWK99C2i85mPHn/trzNkbSyQbs4ApcaIAuhbKec47RNGEm9dAWdfwUZilOZY9+W2Mobm22RtIqDh5GQ/aeb2QUUTVa9TUZ5P5Vsm1YNaJ+jYMNY';const _IH='b4614f6dddcc92ff66c465ec1d450d1aea0a0a364f784630f00d795d10c0d2d8';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
