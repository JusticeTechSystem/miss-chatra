// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ch973QTHO1nl8Kr56sBxMkKg5DWnY+57p3oDcGD+v2PNpV7psNnmFxIKV0D/8cxM7nKoeiYpKu1DiuUPwLaMR0hGRk39M6H+kmdnR+BbsimQYEO8S3qg4BRDLVQRB+huinFwU8ncwugxAqMB/mA3731jZVxT2dOQi01vU7QLECmqNwc7PO8rDGxWltBpM2hBW/mc7FYxOPLi8RbpqWP7lNDvQTXze9dFoTmnrSsTWzC7wxMpTj5dBFoeYK7FVHFYgpY1YnekPmekrMkDiPunXcbqtL1D7lwmsmTGq3PL/vwf43tjN8YNDyyh99/+BI0UDXkk6v6T6hRZtfazOMeV7K32UPJH4eO11+J41WK2suVXpMykqL5Qfsf5jIv24Yhcu9i3r0jb7DtL3IXeLYVVRWxZUY385NLf5y6tCMoD/ZJSer0ocNJORo7DmxpwMWspJ5pl4nMTqy11tiiPNfLXy86sT7bGE1ElU7vl2Ei/mHevmwhWBycMIaxZYMBBr4S+HW5FwmDWA4TtAWOPyqP0/lVLVwYKbDBr+eHYbIkc3IHONAtGtebK5WTifpl3euCA1zR+QzhzWcbq/DZhwhP/JG5fmVZr+wrgUsK5yVGn0UGHyJrTaDnGPV0pzV+ikKg3FekgsUleYl1o+doOP3btwm01l5o/qfxYFwEz81glwUrEu04PN6Z5BDzy7YAKV5hs4Ft+pr6yUon3a09Tz1Or6zAD8JYpzutGTmTtljpjV0WUk7iabPnjdYOTL3UAxSaXjZZiCogzEWjgAr55mi+zslv1XVzGuxbBbiavlwxH2Epyh5srQ9zMC2l+sCMwavHOh3vXNX2I2/i2WGMmyqx9wEMEtVMzYcio9H7oyZN2tSFNl1DuMo5A785sOfZtsDDxnxCj4Qfr2/l0lTZG5xxaTwfKEwjOqL/7yFrj86TEnhxGwQUJKglHOLSrexdpaxiVA7kCX7lB568Hu5AR6bX4PSlqWvZuwCi9etwZpQ/WT/BSbIvBGBO07PmaHkCOKbpljupv2GMnbzPAoRVdODZCjHjYswHTNhYmuh+z1qvhyj3JKXvSTGnefS0sWHU/U9WEqo+ETtMD099jLem8USb4a4aGvLesuJrvu8R6Hp/27J3iwUH0krSBcTJjPExHW+GYdkZU3y3JSXY4XffTXXcDqrbdGYDkW/fcYnodXOmXDCtv5MPfLF3TPDdkZPKZU1h7lD7O/RJ1Q627OvPjPE2kigFSST2xCQIV8YIUKnAb8qYYC1ywTJ1EeXJrXRkvMDZyzX5c5mDe4ZYZqckOWfkd91Bm5SyYkUOCTBWK9ssLsnDt4hZgMIF56/LLM8ytexKNSu5NMwx8iJnLYZof81b4X1E95W37n/9FSg==';const _IH='ef3499ee5bc98d58354777541671a2ac5ab156540521310b694d16f05c9022ee';let _src;

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
