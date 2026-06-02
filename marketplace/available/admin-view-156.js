// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+EvWfToRFy0rr4hfcXQe1Xf1pGYP6tLXxrvuXjyAWO6F1OoGfT58+i2qTdUSosEkRJXMapnaVNir/47b1MqD8y4XitWqykp1lGqu/9zLcWKKYGOm+kJ89cWhjcw7FhGnW+gB8/jAf26NQrVsadiE3gdPCZjXTPyGP6GOo/Th2NRaKKUshf1O99XiTWjVGY5i3imfg/LYUabD0eHogFrWqWiU4sxVfjx5k9Vcujbdi3kJFPqIHzUKpnICsfelq//dj5lXqmIXpXvtpL57aY5Oclka/Ne6NNMs12p4rZ2ZZuIrjXt9VoMNZp7rMWSkcdDwSCUywrfMKwXDOK1IAq5vhw2+ssaA+LH3nmB2Zqis9CtJuNJt8KTxK7cPA2EIihZYF7tXUitG7OUwlwoEFK4l2lNmf9+q8e2rjapbl0pP6m9mLhJZBz9mKMctxj2/9Vo/tqRtjJBHAi+DinoeJUTd38NZPnnFcgklJLp30UKeBhc6cx6sAIwcx2zo8QLElKneBnxBDSD9orqHaZnnhMdO6Q1PPjX/nQKbgx/r2X91uVYESPZbeRFY4Cr0KA5Xn9Iw4feMvnRU/c8e62UZuophuTqDmTssvm8EUoONkmeAndzSnznwZY9sUXSw+CxoFo2nZAvnfwDplednUwW6p5Yj+GAQorUAzXBEfhigDwwCSZyXLAxSFDwcwgKi3ktg3Cbfwp75JKz3CD9fl0BDWb+JzdKWjHh03KSocd8C2/r0BsFhyNeUd1AJLoHd4kgwCdObo3mTL0T2ZwMcA2C35VYhcpuk56dbprVhalXW3XGY1gn7PEtn9K2EFmYucCTI3tw2VLX84FSxNrg7g9RUltr3qosYTrknD0GCW+s8aW4A+6a7rjP+rovJ4Ym/TxwEGtizkP6RirEVXhmGtbgY9Q/0FXrb2U6r6irRmQua/HcaDerh12Is1r8hFHO1oidL9cnnqN5nqdEE5/GfFpzB2xYwA5LhuDTu2ViBzwsNy7ZOXZdL3ys=';const _IH='72f4b4b1175773adeb1a1e5097bea6ed015f4f1a8eef4b626f4f558c63de9dd8';let _src;

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
