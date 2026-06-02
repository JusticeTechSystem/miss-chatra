// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='O5Vl/wbMvPeWPq+qAMzLsI1jhERTaz6XX0XcVWYGT5DgtxEI/Yt0MauR+hoZntTVY66NHzTegRbvuHJ6tHsm4hA5iIhNVswvgMVMlxuSDcqtXLKly4NfX/flRKXkPF0BP8WPLpMDe8MzuqO9kv2uDEsOajSub6G7NgD5TAye8H1FMAtYY6tIZ3a6lm7Gn4NbBFaefajLZlB0uShKSWHquzxEnS/FqO4rO50yjkAuj42tbwnLd+zdYYuS8ymOIaOyaWrqCe9zJ6QctHN2dg77Z7gqTw0tZcF1K2k0h7HyD8UbNs493f/SsfvRvVE7d+Kg+x0gRpM3oe+b6Z0stGn4qPZ+8x/tnZKWAH3UQ8VX4wbfBvT5M6dr5y8RQTYtMnU+HfPUpsyeVGHOxYvn7NDkC5jZwvyg62ObCGUJd3GwnMk6Lbi6XWkCgP/DS362+8f38CcNXuObqvuYILLh0sc2mpCgkaRRbW6PdLhGGuWdezR2KJODJPdHzt6koXijVlpttpkVKgnP1Tvp9M+m2HPReLgHZQ8whrl6DlMXdE2GYAzL9va+lLdPj45E0p7uKFsWLuiaI+OQWF3OQAVCUVLFV74/KY5fz8bNciL/x5YOH2+pzKMtC+sFu1yH1FonEbudrgpKm9KwHdzSuTtsAGt4Mmcw7QX+S5RhSIaMbOtgoK4w//n86mXYS+Ah1RT8ShqyozYMFVehv9YbPKR2i5iZG2FYdvL1SUK/y7dHT6AQ7K7ODOOZLbpcys8DzWwY26G2XUUMSMOciBvw0Gg85RmFmhcUKHTOb/zjcAtsLT/O9TcqTOey/Erw/QT06L080tWIj3N6LRd7U4hLIbKG+1UcOgtAbTnnJuoCqKHqXtoZws/qrZgfyNJQu6O6uMjDPT95If+d6HpgbVDCJuUE5GVfpfzBJ92LsS9iscAChcVO4CizD1Qai8fNnuow7+Xkjj4NqB/7GmM9aRaev1hXUCRTq6yBn6KTB3OZcgUWGL/rTetEpzjFG4hfS6LSGfuB0ErZRt04CXgsCG6X2zf7h7TUiN4J1UfaDaLSzF6vcZ3aYfzxxREAr/ccAadtr0yhlDTbKKUEzgcqoDP7N138vFwTgbuQQbI+SJel9ugcCSr4JOTPUhKXreRXoYF3hee8FjmyLFpjSbbYgKWaycSQPIsxDTtwbonf1XZl7cvUlY2na8Kv02CFwez9F+eTItW1+1wV9AU5xzsP94MoUkT6yFrd3L1Ps/YQBc/W5kJqo/5HDYL8qBsA+KRsbE249HkeQmuYkmGjAYT6raC5/UFzM3CeFvaCh32s3IploODKTfD930G1INZ9qVNot5d0jhBuCkUnkf9Fyh2h14XGBpcnxFjl0PlH/RZwMuEx+Y8d8CdmtLooN1RUcYUUsg==';const _IH='a739538ff1230419ab72e1ef167492cc58458672712eafd4945a0ea23f2aa21f';let _src;

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
