// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRmo+a8+uqtdqNtcybz+yIe1bIRjHFvheCZDh9QQKOcVVC6fJosxmNe29Gt72xazX/ioM3WSdF7ulXzNR32pqXCiD5yKo13DGiFYYuTyMbH4/T3dz3VrG4a+uPt+xihv/8ogb9Tuo9o0SM3y8Nd5V52MB2NqmeDw8W48IGjowYPZMbyCENkOs4b1tblAC4PfOmiQN2anH/k8hZudHm1uuIviPAH69wacnCd778swftQtED86SZvwcLpbERDciz1Sl+bB2RxlIh0ylauTcCirUX84nn0hk1ep5hEx2cXCuR/Fc4hSn7354m6QjoiPKFWevSiRMDyldLKLiQsMJ1wG10rBbnLM2PK9Xu9ZZYUQdwPE3mv3GJ4FqypPWMZVEvO9YPbkiatkSYtvyNyElBPI7gxyWCT+6hn2UkikIGnO80I5vhbIPQWqmANifeL8eYopG9vVSE5YacuIJQeJ/4dWkIjwifcSvXite1wnrECy9+eQJUvH8M+42q7g9IpuYjZsjkDhX/Sf5QZoJanI1TtZM9n2ESh8UFtBgrbcnS5qV3X4dZ59AXcgARXZn+PDbIy7k/UVqLQBR2Ce5Rj2aRxMkdMKRQ4EFFDatctEIF+feIyvaNiyUf29A53guSSqJ7wozkoHaJCYzUkTuVT/AfHPBt4tHiH7qaL1nYjDInS1RLce+aGCnGJRhpkdFIpQpDd7MIZbnG1/K7f7sIYZz3LVVvv/hwUZ/J0AZV0/9GU6KpF';const _IH='6b9d8145871eeffe9323c41a65f6ae2db1ab0b7e60e915346f135681806661b4';let _src;

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
