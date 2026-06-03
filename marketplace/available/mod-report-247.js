// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0FTdJOib0FoEA8eozlG4Tkskhr6nGvNWdcvOt8JC2AU1VKFmZ4TEHr2g4BGGOZCVs0rtuoHhOelKJNww2QEVP3FVhrDe+hML+WZBKcie1GLOkpMSybq6mp8NdTuNdTXI2yE+U9j+pXSuJSBxa0OrZfet7laSeSTQnd0idOtLK6m+t9AzZhPL6hkbyIj4of9J9JhN2pIctBpxt3y6rsJPALUDjhZxTieBE3ayxGfW6VhnBKqIoo34ImcfLWNvrWSEWCSNZx+o/NdrDkZ9Z7uTzj7HKgByrhEvvWaIi7b5Ljmktjjx1sjmmDa4X5Ob95OBuSb8Z+M/iT43iAhDI2u3c3hLynP9lkiUKQ9ydxtvVJ1XWBuLMX7nV5a9wZbWt0rOyAx1Ad5JK3ebR7WLo1JZoM7taNKhRkEP6TgY/JGnhH0v+/PGaXHJsLOW8hD4hPBAuISXMYjX0xHAnWy3NzzukrOd7E2FqQ8RhuoK5rgRFpOuaQ1UKFXs89+1QxZDnj1mMp5SMmjfOLMj5sOxjHOFSm7nwyZMzhuNmNOVy9Be8Xa/6+c8BI51abmwm5DYdoCLv2k0NW7W8A8oxNh8O2PNEa9xsM9bf+wfqyhhzvLNlalDCO5gHf0DcIHhvzlaQBkdHcUAHXw/MvEH7kR782AfjsSrNrktkgU2xePqeivcaLOHkP1MXHoBvtQILhA2LmqAyYIv4AkisSIYIZSzRixB5dmXfBzSwKpUdww4brHTfMxFKSXrAGFvUM8+Vb6obVGGditTEDCe09ji/ywEj4uPJ++CUvwMAaVOUZW9bhNOX5T5hOfZCkKI1HvPWFKYvoKixaMGxcpYXv2BAXHZrVbWRVFrqjflkfne1nUte+oc/4JdmtKjx4JeDKKHrKJ/cvPdZDzeIFOO1+pqXY3JWnHpCxLnsVEkYFVWL1R/eqrgmKlySGlVxJoMWAM7iHQ5F3bD9pjVmuzmntqMnp3CegOsaXp7XivXAklwTN7+/UL98535CD/jtFnL6MKaBIKqZqylpWih+r4dLaqQdTqp1/eXbJz4rW21vJssRHUzKmvwWJUi/pirloUPwmpnIH5f++I1m/P1wd9+ws1js4C4FSTyH1y2Vbi+MSz4obfH3mx0wEq+q3DFPGKgs+8Q6aZTCdxR98IYkGBE5Gd+aRMivcIfxa1y8XrLGEbu3ZiEbCoGBbm6s1rWZbv7g1G2lvPal3f4YXFwr5XQR60TibUsWm2LtmHByzgv4KeVIFMjuqXo/g0nGZm5PWuPCQVOIYtsdpNvwPKRF504+292o11Gf3Dx1nzhyIGPX3ovcCWAeYg56hH4Cmj/p/U2HN42RxDuAGxYCNxEabCGoals1/SMeGj8hdoN58pSu/Pf0Rziz0u4Fetx2IEZD26bCQ==';const _IH='c4a7b1497b520301e164879d4e7f905147d5fcc7a61149e33da8e188a8927952';let _src;

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
