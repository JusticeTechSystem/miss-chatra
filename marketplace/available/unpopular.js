// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRDN9WFRPBxWugE2ZOkkBgghY41WqW5QhHBbiiTdYMOr2sc50w4w3WbaK66ykq1JDIwKxVcdXofCW3kfUeIeUlEZPYK83UkBohnpXtDx33dOBxhe5OQG3nz5UvB/6aXlf0Aw45InDEWS6bxgv1x+u3C4lVzCiLo+RnEpbFQ7VK8/gHNcB9Kcy5+/ss1jDW54rFnNJauYdOL7B3HN6y6lCAc8FiXn06VOg/HAPCUGho0wI1I4HJjiVV9lazzSajKA73IQr/A70XP2woZmoB3PQenCkOXOlEhdhDruURWi8Flvm3Azl4Ng6nUDan5ZBR/fhrAEsukGyx93D6Sbd2VYsgNa3K94Fyeg+QpiLGMmc9/w5hIMP33HlZkdFWMGxZ7O1Ay9jW/wSFULiG1zIaG/AegvKdKCACLX145KRMjanQ9DXZ0B9uJdTmgXMmMb2OmCrWbHV/RwDa2jA5wQeKS95xldqoJuprkNjTbv/lDbQmrpa1VpjVICqfo71E8utxLRTM1HMVAEylJVcmavdpqSytXV1qH8ZhDikyNooHLs1Zi44oDQVfT6QZYcrtvZ3q+kI5V6y2eV+1ubqW947Ob0mt5D6AltBdTCyXINHkpEU0Gn5dpYffd7zeB8xC2P3CFniI6jUu21+2jIvALoBBB8D+pIgoSr5X8Zz2d7CqlS2tKSzlFjqB7eYS/EiQb5QV0irgirU/WAr+1PwNj2Eh7Y0Xh85+Y8etS5RlYS1CbEvWgNTQYAQ/gh8IoBmOi4OJQ+EkK2DkcDeYqtvctymGoZ5swzIp1ZRfAP3bIpymILsi9hBske/knNIppz52wCDQqWx8aVb8M/9gGoA3WPeAdcO4EFgUJb1HJAKBe0r8N7G3Kt1qSCCtjuiQcHSYsCXtYj3JXLq/tOe7Tc/sUJbRras4ydu1iATHLkk4wou2Tjjvn6fs1J0veunLKD/JVZgWgbzGLuFekzyVr3LrE3sVhz7PdTkt6OJnT73gAFu+ZhLj7hxtZw7C+hCvKWp+HAiAM4mQKGJy5nnx/W2IQhUnpOje3SNk2j8doWPL7X/kmWzLrN3WTCmS5GcVemI9KTqmAhPxwwOctkAbvrG44XjCJWozWv2YuM/lCb4rhLmw9NnhVmglWWn13NGX2TiKqucoKrnMIlX8cnubfsi1vekmIrBvC6czLhR8X4PayigtmF4ZYMmseFTycTnGnYXTmBfW7eLl89SadEJzkZq6FkDelOVw23ts=';const _IH='343b5e4c72237c61864cf2e411ac346ff58b1c48546cf19c3f1a282d90f6f944';let _src;

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
