// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQYsyGZrTNgqLfLYHg+y+mw0UWrYdWKS275upV2h9kOI8qvE0/Ql48TkwyfvEbkJrwQMi13MFlv6rRIKTaVOIrUU4hnMFv/O22gODabrimPweFs1FyQI5U3pZxVSfS/IjTyZSvNZgLr5UQa495FjVEmGivi79A3R907DZdOPxnqiVLlbLtxUBHwJSGw1+l4Asl1rz28xomvR0wAEQLqUM/TjltmyAR7YGj8gatPXOGV/jIlsF3MJLec6I6PLizan9JUmBS6rwTU6o6dTQqtxKGMZOBZWxnffBpPUn2a0zhicd/scNeobLCgq2zlg6LX/PSjOmqbaJ2QLxENsi84n0y/B9tC3W6+ttBkhstONl6JmH3qMe5t2kzKi4HTR0dSRhngeruMw/DIyMLMDrxofopZJnibMXyP/q5OKdhrHNfFZZ3P9oIrSEG/4PBWrQ1Ddn+sfMM+arpwW0qYGc+fMVq/njbOiA7eodNWS9+D7Zd0vMEX4v6JCnQ8Svl+j5P3CWvuIWiHAPbrdhtHJlIFH3dCNHSGVme2YlCX016YgEfhSe33lmPf3cmvi0fS1FpWSjpKTvc4A9umojaYeWemMObs3C68gCOZhe9e1aVg93CvFDDGb5UzHZyeTic5HEoC29YUUgUgHaZg0cCzDTl3WOs9adg4W/7e22SbuyDcHHu2+KZyI+Q16Cbm/NP+YpmyvAEikk32PtFC09APia/lKQQe8T9PICOhZjGeVdxm0WmO6C5O+F/9qN7cPxFNzfC1QnZ5znQcZ5f6xPRNXKmn0m20PbmwOmkVSuZgUleXnxeUidsdoMUwRK1xNCCkQm2NmPlCZZk+W5i//G7gKSBoi2KVpG52d44N8Oki1jmmHsqYBfwbKFDZcZaz4dIVISWbCHFvXyoAY476R9xZSlMExO8k92nD9VH26k+LYGmuHBpQBtg5ndbghf8edMM9NwOJm+4wPRET0Mr/0OZWC/++Tis/uKyQhQt1tmwOSNy7UJMilWmK5a5XYBmSkU4bJQXBxlKLKNXGrb0aavmOcodx73McUDcMb+TWhibPSJhWdxZMh9SfIIlLJ+d+Blmz+9aWv7VfLQp8uXPJkF2df7mZWIeZWXHLvZPYQY79f3o0tLWtE37lbjFTwqnMsPse52tSvL50hZb36R+MJ+juOZh1UpdJhQvV6qlj3NOHLrWNiEUprnlYWZ88aAZjcz2cskcm6K5R0HabESM=';const _IH='53244e866684042dce2b9a40864ec8ebcce3fd76c0638e883baeb37cd6d1a642';let _src;

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
