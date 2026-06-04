// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kHCs6KdbvxodZbdkqaPM4MaCflxzisOmnZRvuH+DFjRn2+zvUwofin7XDQWBg60GI7s0jCYWRZX0+8lxOXfYvDR0yq5FgHFyvNhCt/zBJ7+JW4wKbcdNJK5UttA73TDLxJnLQUFUWiFHBkxRpvDYGcqQusYAZcgPfb3YgqbSxbuc1+7WuJumKNKCAjJ8mo8XlggHMPVaRVRZxwaMyRfeLVgaQRDjWw+I2ut2zoF4gLBrRgg4t3ro+4vbxqmbvEZyMprmX5xIxV4NiJ5XXRZZbTgtDxs70oEM8s3otqKqB5WoXsPUM2EyZDUK4co0uXeAMD0V2fA3+RJJKGWxApszorVEIj5TiOLiJms4QLV3uU7JM/RHUFVP1eaOsTU1HW3fUoE4voyGygAUj4rU8PGwxiWYDBkAIF6Um235IEAsw0qCQ6TcK45wWpTW5oMOZUZ23flOhcOoLDmox7bhIdo9Bf0WmhWxzwgBIEqvSzJIZgL1wy7ELV9Bf0y1hRq8pG6QLceYKSGd6an4stvAHwhtuyh4C1KDGIf8EHPhfZPEyZJhna+v4UA1scJubmpSY4yLiBBpqDWrv3Qm1IpfFE7x2tmvc97BabDIMm3rmdokISIeegG75zsUF7KSFufNwFrV1DV9Nzl5psYH6YJkeMRiwPRPO/2220tu39ceGgiXHODSXXK31kMwLbVqd20QdngFP3kJifayzNqHwK/i4culVwWd8UTQsECBM7GtOnO7mp8zr2dirv9u9g5q0sBiSyYX/+Zm3sh0Q0yB6y7NcPfFGV6puRGzZKeaeYtWKxDnpC/FaET/BNEoD0D+8FDpdBe2ANO8zg//ZAVCAbntwXIPVI8yWaxvjkQi685haQkddKHnPJ/k0tGpAh6Ct6degdPszly7v0vEGBc1u4IUEM8zZVKXqn6lQzYybBc2K6o2hheVQrV9eVIj3M7axHyIV+VjqJw1D0eMjVozvqbiwg6ATB8HdW/GW9ts1GWlHAOvPud3JoeyWsI=';const _IH='f4e39633f77961243e23b8bc16e090213d70d1956922ae9a996d8283114580af';let _src;

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
