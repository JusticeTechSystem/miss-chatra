// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:36 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRD/EXNqECRb+voevo2FgrTZavp5XcZdtKyCbrdYZWVoFoDZUIzNNn+xINV1axyJsaR/3GmmiVhcSEntjECdZkcxBZrs4PoUhHtmi+QEGis6Q11OYz2hCls16UV2V6BeuKbEtu5xdGA1acdvq7wCxtR0JYK/WZA/d6N6/B3CGTwTu6sj3GRR0GGygEbJrDDApPHhtJoGXfW5DWFQy0NCsgeh9wtFjHwUhLna1Vr09MdYhmUlg1XXfJE2VvcfWMS/ULDMFwmozfD/p4sfMHjNK+cegd5QDh93ICQYRuGb99KaHFnrCK3MjviH4vrbMlwDMIgk7Qj9F1IXrAzLqx5qf94Z6L1P/myJ5f4Dcq3HZbzWMgNHgPwpGkHKJ4z60E7Esezh0lQtYtFOq9GTsxcPNgz7QYNJNODaIQbbEJFGjpKC8Of20MxCGjLJqOCsVi+5AiweFAQXPgGypY/zkaGIN8sTuOoDK/nrJa6IA0FvAFfIXd92bMT/NIZ8a9w4DWRRG5E5QoHJi2Py6LmRYBSvGFH1txN1mFolfMNnUJEcs0gLxbUXAa5JVsswG82KgM+Olk7g4yplmh+C0TkjvYq2dt1oV6NpAVzewZsko/yKfXdtrewgJ8n+xKWaqSiDuyiHUXbgUDN72lbWfOy+r3D4Fhe+DNqVI9VWCcxchd91Rjyojokf4GrBqVqlKU1GgousjxrBPSNTu5Nu+0qyY9TnlE6a2PGdZeKPOjJynpYRzA=';const _IH='539e4d01e46e8ba6b03842fd29d20cb1ee5e760d1e08a5deadcd06219f32c795';let _src;

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
