// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:43:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4ava35GvfJbWX0hP3Eq0OGlKxHM0bjsUWZysgOML12Vcj8ZL2JkUmHI4cL025sILGCyc3Fv2OjO3qGGw0RzKBoxCdVrYNjkCjxLMEFixrzfgRm9jwOwW6xm6HloBEsB6Eq4emCCTBRiswSi3QslT7v9+zaNpWO2XgIFsvzFJZWXev4sfIkK/iFB301SrQhfvaVmT2rSL1J6xDlt96dGPPJEoZmP1KOq6DRdaVm41hCIu6kgtSRYWr98Hlw1s8GJdm/YBPE1O8fUE53QOzAPZP1wpOsG8G2YLIu74XDhTPFa+YzjIYtrAA0485igwIRRlj/0n5OlXmFCcVke5hNiTS1UUOTz721q5SqhVRzXqFs4rxe+diXyLRC9vt92b4tCp+MK9dD4WUCIQMAjwJSVRjqdYeCxMZSlwB7Ock045Kw/onUznpHU+WF3wWaFeMuiTje4aVWrbeseGANHNBQ0BEpiBy2dOOk2yqNnkbGeyv8rCvAomyM9o0cz6zXfQ+7nNo3qf3J9g+RFfbAMpNMbhC0uZ8qVfyOhfFtRDXDRJTKm0RP98v5Ac8/8S5VW71OI1HVDBk3xYdlObMKe2quS6CD7iHyiBYE9p/GOEt+LqIZGLXivOK3ORInWj7abtXzGvfWI6vva/h24ip4j/sRbmtkRMpSVYV8CB8ui4pfq9XlYReP3hNXqaijt3Br5AeQajZ1zTvG/CEV7WRaeNo9cCMeLZ208/ffrgQRSC7QzI4XPiVCxdFsUyLlCjrWC71Y/YZvEWGpzYHdM8bh74DBbPGiFr+V0Q0FrNMg2PxeRXgMWn7UCeIW8hSW7SPy4/AI0V/vALp3I9fw8gjOsZrdHKjM/llS6eFuBYpFgr5IaHvRstn3pbzKd36wFhmNCgh7Sz0zm5HaiHbpdJqv8cQmiqQO3R22pcNMF2ptjyD3BuWHOuVDHCG7li8nImmA/zpblSvg5oC7d2IVLdgi2myK5pHPmvhk7lC5AoQKzybQ==';const _IH='1fd95df78ed2432b7c17ddd7ea6296ed62c4bccbc0cc6f75ab441459bb753e94';let _src;

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
