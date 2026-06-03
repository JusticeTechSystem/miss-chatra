// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:52 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='J8pzz0uQqJ0AG4Hq5Ks6xtOPg+bPNMzQ7OAqNeYCpMpS7OIqTmXbh6oU3zXasdatuD2B6f3i3DF/yRjRIdWM2gOcnDTcQxJPNstFqrYTAlTxBmGo5AlKyDe+nYwdMWmDKGNlRidrGNLLMQK/6GxOReoQjw6ea24UR5oyckukEt+4E/BrKezgnq4qYyA3cJUcleKBe5ZHoY+PDEuht2VN7DgEJ9Iv1BheDUhppCbjio5P882/aIJ2c3MN5zy9PIvRgBIPc4bb3uMO6iW2RISYvL6Hbp0Vevf2lHWwGGm1w2U3SQJsKd3BC5IfeLCByl/06FWVcdGMWD6jc9Q8lYLA35PtLQfqRCTH7jGU3/atd0kZw//XsbYzucceMAdTHFStBf8zdfQxTytZt9xUH7l1Q0QUf7l3BQNwMASfLjmKAfyoVb5h6zpiESypX+JqN2pVs9rWZQ3oM6oB4gRaYWGkXomIriRB/D/VQ6zSWli0cTzCQ87SgZji/jpgN4IeWDsQxN9aMoVonor41GsEzO+uyaUWhkVfBhq+uXLS1AIW55EAhq4aNLidnCqoQ+rLJ/3Q9l3iRKvFbjbhgI94e+PTBDztZV7cPk25L5oYw+CWwB9gsCd8wV7sTFQqpDA1oTb5gk13/VcrXVjKqIT74kBBFK5NszUcYUQC/Z97UsfiTOALHYZmMb5dYvQ2WhiS6eQlAgURPkuGbuQZf5cjSMvv0RdLUhc=';const _IH='1403242564294580a536942faad5d5f876480cc4bb6a763999afb5d4b89905ec';let _src;

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
