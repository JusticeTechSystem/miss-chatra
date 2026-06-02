// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BrL9oVgV9kXSj1dlRxswzQjvOACFMeyRZK1waM0jU0h8xTWICZSHgMZiT8K6T+4J4KFri60sFXCX25b9AAn2mubciYhrMktufFCSCrE6HIXyUPR1Ybn0CEqMUk1XXLaB908EawZFrAK9ttIQMU6Rx+5q520FD10JlLFP+CqYXFKBDnvri7nt/Fos5UCUHxXU+OB9LblPencRRX3/vbjYoyN34WkkD+0dCv7IdX+YJ7+4HrJ+UZ1Tz/la2aDye6HvYVxHPFik4cO544U9tmABJ9u5/yAuPGG/XcKDMYJC5qLUUy+sZ3XMls/lopn5JltPR1FZEgBQ5ipFc7nUdshu0DpQEX/0gBJ/yY4E5y8S0zGJPIVeJYKK5KtmkzMH/DYfYWXOE442TLqbRWbxdbgytsqVay1sllwSW89E45T9B7q3oGW9NNQCSzQhaHbvtUDYDgPS2zWsOjV0tt/nvOPZ37rT4YjQZs+rKlQWJxHK4GP1s0TZazihVd09xaZ7JhyYDdRJd/qZsMGvFu13vSuzp6bvyhAArv3BXkV6ohc9Q9H0eY4vo8sWZealHoWIiuDtkLWqEC8iN1gICOq/biJ8ypzpGUSrPnkjq5HBfu5WbyXRRoGDnAhnQoStk3wEEgtCfDc7DuH9X2rBZlyweJGrfQqmzvSl3GvD2UxROUb3SyWDfBLmDDi3AradsSNngJ7pTZFlk8GB6lScX1a/lAyIq9bTao3cAYDHxN7XXJqMHV+Vm1n7iuiuHwkAA3p0qViMogEYT+HHhg3awxRStxACx7Nll7BEqhOLOrOHm+oZJhZTzp53QP48FhpjPtRpRNZ5GqTa0NFMi1D1x8doNpTbVayHUsI4EhPnzbPSP96cft2smQ8iMhRgbxgVyExNKFvtWOsTMo9QFzi8d4/y+PqYTcTI5QZj2962TlMYDA+ByvfDE/kArfcRgXQyTBatsbyfamE+tfKWaKcqj6HHqNPRwGiEFD4o1CuJ13nkqmZ5YikSVBokcVPmnmRoiBeEFNTQe/0tbg==';const _IH='49b00bb10157e301793f865e9cdb5165709d977158e8f29f6f39ab3deea81794';let _src;

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
