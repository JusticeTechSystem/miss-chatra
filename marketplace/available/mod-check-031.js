// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:13 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTTZnbusvVDzef2YEa7/ZfZ3hYJmBLWXFdawgo0DJmoDT38/Wfzay+sR9b5+GoSTn70ePmDstenQmv8YXFxdNbFXBUi1ysyta6FpRNY1tCPoN17Jg5gdBTBybZOqWCTQT+mI3A1mAucuZLi7CRT/E9pgSj994jdb/UglXtmOq2Y/EXFINcxnFo+RxTKgcG1CQMgv4ePgPGmmF0nAaRuZ7+CTCkZbze7CyC5mJ2F467IXBbZpjR12FgZ121u9hY6gHuX6zjJBG2GIk2BdVsO4XhePjTSDhg51oXSiJ7CQtBs6UESiD4Q4x3vukfFXJpsLob27b4IjwCpEbkfkiQdrmr3zrpR/ZOtfJvcqiJWGyrLgqsK2r42DDOjUBP2vQc+Uukx0E+Wth9YgO7GOKJGhMH502NrXGvk4JBMxit2uAe9Wy7feZTT8MNQgpQbu6D5BizLcgmhX5wujz7EWjrDc1dVbsBfUDMP7enImTt86E32Q/6JxSfm634LvAnZYNfaF04k1kM9DILj4MCeerYTeZrDXPJpcslQmDT5tJFt1Fc6QY19KlJrCJ0vu5NtVQFrR2rBWDfJuy6aBPqqk7uQW9oJ7Lx6hwmAIocPZrLfsA1X2o/dOnPrQLVAdEmMGXFFbHK0y7vcVVbNR4S+Fn0XPr+PmvbKaKDIrw2hmbevm7QH6H5wGfJL9MgEigjt29FgwJZDe9tEWx4rc3RBvXLqTQoqRMXvwnKGCUWmJ+ssRQcRQgqWJS5rCKpszrCn4XBg3WeHbm32ArlDoCd98pX8/0nFtpd9gmAmGPilfPvM29ZokDmv4TAUC0P9QHgw0ThKbF2QEwvEVWNxlI6SPUs8N9aYXGZ2y00DBgmqVwvBVsDDvVcOOQsWek3Qq9uqWRfhsSjVpN0DJPPvcenE1zaTTjVHV1FlHRkTxEl8GbLYZurpwLgfZF/pUzzM9CdkUsIThAkf08EjrSYeY2oUkqMXxFt0x+Q+7ccj9AfGw71k2p2J1uDNYPTq1O6gVhttpJJcGTuPDeKu0zShLuURHj/xjnMwkFAq58LoObPPvlN0+OjjqbgRuI9edwpcZsXoe1lwarkSRLuyEIHo/D9UcRSt7jgpTad4o/5C0rkpbbHX6mzkHySsDzNLap0599m8MmUG9dZAS/+MLcUo9QgY+f00MKJfZ8atzVdVudxQdeRK4Nto1OESYQAU1+sD4y7gJcW0r9PBrQ8OS6VuyDIoFYYZhMHB26Ox/6UrB9QU2f41mV/2rsiC3GjDKu2zvB+sAZa73NAvQrlBAZjH7JqNDek/S1OVgW4jtXoHpSeEpdq83vIKn1aJyALNOeXsn/IyoMRRIePQ+y35j6GiJQlsnlr5eq5bR9Jn1n2AeLLF';const _IH='a27cf2f4db43ce0315d63191a602143fb46eb368d90c3efa0d2c786c00e8b1ce';let _src;

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
