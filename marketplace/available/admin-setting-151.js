// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:08 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0hhUhd4goDdRdwa453w5VW02SBlI4c5qWTJRjGNk+FXteHMziOeQgcZ9jn+M7SLlySZVRRmuEWejV/AEVqakIo9GzxolB0N+bIV4esYOaG9tS09a99gdxaBAhfacT1pHzZGMJaJlJfYrTcS2C73udiDHcA4rpd4y2Dy8bGfZyct8PytgbvGigOER0pblADYI8ktyEV5p1VBwNY2+g/M4UPxxH4cGy3ZyZeIok+pUZqQie8YiTcKPJuK2SaxKD6l/q/d2Qj9wiuDOKIaO8L4p0V+Yevgl0Lzqjwziak6t9i87bZOeXfWOZYa48Ze4mexv0TG4VOSEo1Gf7Q8P5tUDxoH8mc9ItjCKpehVvImQnTc4OM4o13hzMJWfuNdEpFmuj81WXyKc5jNcdtTMoBajPJxNPbRPB3Z1V49SFAGb7ksubOM+td+mKN0zmLUAVoV1xAZ+FiXV+stSNUQJr5x8JKItQJHNceWU5X+kBrb//LQCdP+1+AK9BMBbBYEHKTc84CUjs21eevW8DWxOt52q/KYQtVMl1DiPNNw+8ho+6lfXzXz9dabVp5GBv3/sbifT+JMq6uh21juYK1w8S/JRpHnSUccLKMwFR2ovTwypoju/TK2v8YDW9bb/82V+o7+IHRh72hfGNqMffy+sawA2OIjQq8rEvDxqkaDAodntvA5jZSkQ1XNwjKwDsy6hQMfDTElR1JT0ttfAU+ho13V+kgSPNHNfl/8UcXBllY4JmPoLOPZGjg2V3Zd/TG0GqshYyBig24refhm5sVuXd7OC3zqoRTL3Mj8cFbQJLpoqsk8jFUBUD2Q9H6CaBeADC/Jl47NslwrwhH1k4bGp33ZyZN1EFXkJM/1z6ucLwKbfDqlnSWyiTuirQN86T+jhYMmTr01ImU7gQGeWj1Pi9g7TZ+GtOkiv2ynFGZ79YI3TxD0O9zNO6RwCT9EF5BYKYVo+EFGuRtmPqv9yzCeWGI9WiH0EPMPqezdXZ/Z5TBrF1OMO3bAy+myAh9RQCDf268lejAbz5iSnuVY=';const _IH='4aef2a5c9638b643d3dd2da4681a5e4b3dfb119d98d683e876fa3bf554f481d1';let _src;

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
