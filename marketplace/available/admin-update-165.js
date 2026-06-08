// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GQREHN/jezow0PDn+kPx6Jwwo3leZNQ7nEdH+w35FnvKqWKSU9i+Irupa6RxZg/8zGV+AM8uAJSSz1CZCuE8JNE+ySaHxtXRVoSg6q5wRUomIemJvur+zrNfbwNPTnZWC90Z1QZkX4O370YI7pEvksX5esq++E8mSIR3sjQBp/4LDsEytcM/NHO839Tex1RbXMrb64B4AFNcs1GnZxLClYAsK2VNfcpeXVUm9BqOBllZheKN/zZg30d6SCuuKAS/7ihfmUNorhqRzUhVdY42A1uNXodUgY1nNsD0b0RAkRMCTNrtyaFr5OsXIwNkWwo0lQ3838ulU4BnaEVT7PW1FwmudOZ4q1bMAfNH0H2evWtwvm4H0V4Pm9LzlasT3gkJGjvQJfDddjyU9AbfnKuONXam7L37L1tq5Yqf168tFX3iSnBNQtMSmDHSWRZKfSvmNdl4rXvScjvgy986zFvrZ4ayjK+aNfGAsBwU2OV3vs/FOmcI7IawKihfTo0PsAx4w4kWbqU7zeWw/eZI+udl4biSpI4+sZkK/OhJG3doVRazyqGgxWkteV8DD0OuczibuhJoAU/ik0mKRsy0ENcLwKEpMeT3UQe/4ftFO3yo81L42U9SFrEaz53IExR8s+nojh6VNDB/sdHfZtoqACNqIzfEjz4I9I6/ib2rmWFFgIivj46Vio2gn8CGDWsa+O8Jc3tDBp0gA+Tgj2BAHfMb9C9DxQTOBi9zIL9APROGiWE/ac6mr4PSgVaY6Lx5DQt4Srm0jOGo1EmB77ILv58RgXqMwSyB+9vClnaawZPSFmu2j0OvWjqddb2BCLfqlI6qgYMKLZmMr/4uqju/iTKdMmWff0muiEG+bHv64vCr6rXpGO82cem2yTnluEO9VaxAdk8yHZ8vKZQyBWUQzqJv8CkjqHK0CGIDdl3xAbO6jQfX/YcjHXz7z4+v3QCsrluhCZ5CIA5+NPLJPR7OxHkdDdBH65YQHYgY6bPEY1tPuekPzo2yMcZsMBdNLBk4SVsSLw==';const _IH='2d4cb9d2efc31f07a09710bc4be013087bd9097edb9b56b73d292f781ec18d82';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
