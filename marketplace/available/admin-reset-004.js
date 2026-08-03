// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:22 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTeXAPP4D7HBW+M30SEBPTMz3jo8p6y7LAMTkH2XXrorM2dhoULk+mSto8c0NQRzntxn+z62KS5z/hDWmgrMDzX70ArX9IeqbUyeLHx2ReN/N3dJcq6mOv2YOqyTV6S2REVzosFyhDUkK+nqyE+KjbaHMt545ukZOjHmXL9/sRepPyAOm+Jvds8nVt7YuyczxxeoD0ThJmWnN3yN4uIeFOm6lJO4a5TAL0jOBHipV7SoFOAHYKU4x8LkWxFOs35LfeiB2uIHArYCM8qNFvgtMI6raDrfyNSMcrA9YkYzgo00M6tkNjR4gyiC1cI2/WTcs28B/ldoqtmDg7PR1mT1+5VIoyUrrGJ26M9m2AaF0p9nQSJAgdb6wQ3XKVAdEmiUDqxOjF2WtIgK0GkrvXqer2Be3l1owOuc7nkn4cy7nNHh7U4fH/DMz9ZjvRW4zzpzMTITAiAlknfQKl/pIahnndbPlPNAVdEsFTtNzFiyW3+9lqLzDDEnKhtwCTuaazhA5YgQb/TaHo5OoTVJbgnvhJD69ENhCo0YjFWeU0Mr5HImjlIDsAv8uvWGBPuJNw0TboGGomzGjcaf1hgnN30DER4tgJ1tR9dbrOtMPHtJPzEb+mNVTgpB6FLE8CVlZe3gHp/7v3tSMzrlccDtfcDzUyWk7GIrLVTZxwQ/KMVaYiDrMwxmXufuRUo+EQV8j8WQ4kxJInws6wDaK2O8mLqliVBnYtZxzwvzn99P9ZYv0csWO+1y/dFJmKJifIEofWtWmVhyVNiuuTBWjqg0k3/r1Cdu+X1KqXrFa4LwCQm5wSeMNPYrt3Hu3PifZwrhgfijYbPK4UVoS5i49ErtERBnC7OUdxljTYBR6xXwF6IeLc3VOqNHInnBLtpMFfoxgfz0gLCBFPEEtF5y5GxM1VYXX0saiN+nE+8X2HJxtBJv4IHaVwhlXfR3oQp+eaRCMr2gn88ha9npp5XzhqPptzyuTVtZbU9FDRnJB/bS1qd2cpLnQ==';const _IH='fc5a34e8802c252f56442d1d90a40f83a4dbf63719006f3be496e1f333f927c5';let _src;

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
