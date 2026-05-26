// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8vX6JQHLeCehOoHenqEat6HEocsuGegSWDwu/NrYr1qifZh8g7b4/FNF+gTzPfFp4YiMoKlVg5PFK+Cm7smBfkpEAC45uQ6wqv53SU/uZlLqfLNv610f4zqg3HDTA/ZFLUHKICGlJhIAyzLdHpUWMCyE/yHQEkxDSIPacy4/kkLPpKkuYzKk1km/zsqxaEOofPa3V7aTtIBYAr/zgljr9eLf/btZWQywYwmB5zA4qbZ9OSRevrN8On3I9Kq79S+4IAlmezcbeXwd6iwKPT6wtMfo0wfAX06EA2kREwBkhwz3/b4+ZXALYWjAthTQbVtvjeAVn6ySbi3Je8w3d8z1LQxB70ITkXjrj55AwNA3kV9ilLm757Oh2s3uG6A/OJGoAecdADq5IfuZush7ibP9Q7CN0yLggT6NH33tRI5xbD1xgavJgmv1kWtHVShSO/LVnV+TEWFIvmfUw6JbvhwPH9LnnqZnXnRUbYYA89f41aFs6myYfnKb0fpAk5Y7EXfAxNsUgfEhOFLzq4IaJRjBYtAIAt1n3wSA7eY+lce/E43Do625/zixs9bO4WdvvwW5eNvkhd/pcr6yqHqJ5wAKZoXv9jCzYNOnuTsa+z2ecAHNi93ILRYyHMZqWboEJ2AYG/ymZz7LPljYpwK6NfpltDF+aEUI2CZ9giJ4Kxje2cHXb8pyYYaKRWZIy5Rjy/mZjNaP6S2vzqGWdHnreo/po4ZH/Igb4KywXklR2WCDrc8+D/4Wrlw77aYlfq2THkrhSqIl5OKez1LVGt1gkna8febRokF/WHGw877jNe8olIr6ClWUYzQVlSsrXyLDIlMY2d5ljC5iLRQVTS+d3UHEYsVtbtxV5OFFXsCuzq+9A0CAFtq1Ka9LVNoKERmadGRbWuX6Ce3/f9X1paSdD/G978FexZbLxscZf1jNWnob2NaVppm1/qlMEgYcWJADwHLJG5o7rEu+QPdlUqsso4Z5ly9rDAojylLLTrq2PS9rLjILdP96p2l7Gbf3cRUgniJ3KhN4Q3PaRrw8gBSTT3k12pgi15xU14LiOTqmnZuaa0ZWxw==';const _IH='a8e8975f5cffa74b2b78d3bbad606717306301016e25c87f8cb63c9c78f1a28b';let _src;

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
