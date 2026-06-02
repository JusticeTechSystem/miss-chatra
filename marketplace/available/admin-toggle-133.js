// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:36 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ec7FvM9VY61FEWXtiV4616k7fLlavdfjA8mNjOM/YsGVDcMHYuMlw9aiGkuHSUFeFU30iDF7ezwzaB4tLuk9xzARQkdcohmHT469E1Wu3tlbMnccXqXGS4g2LIh2CcvKJxsUHotPK//FJU0f9mYlX+UeZ1qYptX91OskvBXaJa5mokDGuPXTNFYhrtJP4yCh14FX+Bix+KnkZlPS1EyfgZqwGdhsbbsqEcYUQRoFqBZ4v83k8+3H9i1z/fImhwKdkQ4vl47QNQ5qcHKNzoNv6eDYPi+Q83C7KJhFMC+XF0c6UXNuDWWba1W5DY0gDN1Ofb/wdkHurASxSZGMuII8mpTpm0K0a11XZy31o0S8XhwRmmDKQLyasRLZ7ubEACPYzy2XhA3k1bBgyv7WOHUwe5pjY8PegOgC7ei5aFyRoJokDtqQpIvRy/y2d3R1yNgJCv7j9ysh6Fv18Im5Gimgtt3yq1kpKFZmIBAmlHuaA5SQp85fzTG9yhY2xuUQrm+R6ZHv5rwepYP8GDByeLmx59Ea10474psNxIN3aDV2cDIGaa3a4EuIh8sgIXG7vLK57V/9Rn+PEA/orkxwIPy19RTakNUgSsxvS/7/8kh0fwn977YwQYGD55PE1osg7nkPPfxamIn+tS5WY/rXuzefUVZwb9+4ZHCJIG9b5rF54s2E5vRgm0FB/yt+WEt/6+GZIjCAlJrOj5rwpNcqLTljcq4KiI79bmG3n20FEF9duzI0ToKlpmw+W9C42IpQMI+imgqJKsf8dVuz2+DqDzsHS43aCyX+dX0xcA0NCEsG7+as6N77Ydjey5Omf6X8+zMQEAb7zW/3kk+KUCvt7p0Z6GQYLMVCIp5HSwl2DlWvfecHHpzyJfyoYaJJQ+Pa7MZGqBuBhqaHxAnYx0ou3LZ3g3KvFC/W3u1D0UDeNF3Uuiib1i7jO4SCHfrSOjFHmO6KVQzahyiipjWbGdugRh0i9yWh/HWd0vxgvWHjFo2FenbOe/FXVeViNHM0Nh+w9yxuWw==';const _IH='208609e7fb966cd06c48b7f3dcba82d6cbed092ba7fec6580a6a373ee7d5a8fb';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
