// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Fsnob/pu+KDqrs/xekQnrxQcAHfT0vz7HKz8gh7ocsU2O3QoDFCsBAETSEMYNckck8L6iTqRrI7U+i9Q3bVA7rmsMTL1K+2t6Pi7DV0OjqgF7BP0OOpgOgt6+Z1kZYNh09cfCxKgkkF986SujtRj51pu571U4YmyLbKIb38j4xYTt+XmdReMsLVDWBSzaKExD/mgg9QYs/yOv03ZvaIOvddXeba2o8G/9O5HQxMXC1vARiCxSBo91+gKXizMfzE0UW6deiSLFuKy13Gqp4THsNvROkiiKU+tg64orN39g6lHSJJ0ixRG0ugMrkcVKR85NVxUC6bYfpB0OwG/PtUe/iwn3oDh6ng6h+Qmr8pKaseqLQNSGLtNz+Bj/4H4pis3o3epVlznS+OMlW8IM591+wEIuatzKQ+VpjoIBXO9lApEjmIXh6SZsKEZ/DRQtHGN0cpw2WW9IsVhf2GG2OqdZoyuhpoHsfKJKChSMRe+Vnrf0d2ixix90otbvZAK/ma6E8qmpn4AYbF0stvlTeLEg3sKxeAoXzVk7btrXk/A9DZBiJrBdGYAp2QFw8b5wf6zKJRhZtZKshKts4FVHAufgMzw8cx5IBCqBzrYgvb2Vu0EUWsx72IeNL2li6z8+qBqCFDjcH6CfiA+xMdAhOgm6BJ0aRCKM5htXbHnIo9/n3m1mFYIwQF9t4Hp8X6rcmdLQgHWOHrtIcV5ZFD78SNX5mDyCZz2YUI+dwQbGqCb4LTVHQ2eKiRmCWICXOuZggjhYC2z5/8EDFHdV9EB/kCTDrck4BfZ7oZ7eeVzLmxDngFsP9ewwnrHZ3Y4DJwT8jGignc/MCms7vP3n9yiIT2dNI44yBczIuZoshuDoiiSguIZKMHehr7unVVKbgRWeDyP5Moy7IMlcoMzhtcihDw09v3Do00LSk3dubeb52JAWvLcw91TpomOGHxZC7oegiG9Gp5GIh+etd6Fwfrfv8AA5uRSe2JPUPtp5c6sHrQUlkcPbgdUCvJVBTeQ5JNDQKqP22aCH8em8Es1sfj7deXagbaBNzeE5DUlfFrSRQ+G1ADfjw==';const _IH='2b6fe311f7d821861b92efd587ac1194fa6420120f932c6eb5c7d4f88baff624';let _src;

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
