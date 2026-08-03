// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTyY5/aj3SdChE0nWiAEsx1rm4j/KdT1X+gV5S2MwsRVcYnEbKvDiKUT0C5FErb/6zunRB0dnkG1zmz4vigm7wi82IPddZxSlotbs4VN3AyIX/K4/QQMFDoq6LK+u/VKqqk5P/4V3Z9tpNlpeXCfBewR5JN+KOyqd8dOUYErp9liSz9rZkHYhkuWJz57G+L+8Jn9G8vudcTRX+iVk0QiICfR5ro6u8MgyepnumAul1mFR5WcqobmHjQQJNWW+QlTZFOGW+OO9244HrUxGAhYC39gvIqWiqZpV+FpFgM+FCFC0uOf9V+RKb2hwGEn6gVVOiPdk7i3mpTWejLMbg8GH5UULZbN/ZJB6w1FLcHp5OdWEDHdgKN29ZQEyKOBE0Ta4h6qL898IifbPEHLeikIoMm1K6hgNaV08L5Db4mRBaTQme+fxKzEVDdq07mtbXu0dS13+uo/GsC/0tr0X51SNaTrkJ/fjRo3EqyEyAf4VgVO+On339WRevlk6EamB6HS+eSFH4JV7tKx06hkth6Z3JSCSJWu6EBhmUG7QEuDA8RyWDfwbdx6hifqK8WJYo8Keyx3LkQL8OBMYwjucihj7PQl0EEOpB0cs8LG9e67dFKuaZIePuywXc0gC35qJKUhE8gen4aDFlCIdNUBEKRGB+6IHZhJgGkftXBifE9dbFR9abV2aVm/WZyMy306DEHh6+egVtYH2LsRbHtEGgC8Um1WUkLDWWTObRyFOnAUIvI';const _IH='406f35ce7b51cd34bb4cae01261fb2f5f0d789143721d23f4a2ab67ce143b63e';let _src;

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
