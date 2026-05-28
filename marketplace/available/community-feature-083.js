// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kRyREi9H3V9JeUdHRsCtWfUVneuYdCr/F49/UeaTrpi6fw+FUmHrZuvG/Bx6QLfwsPzgXv/m8odhRxGWX+TITrhUG0e8HrJ2SBngr5YawdMnuaG15WVDoL+2WEhRf1hYMsjzX2aetuQF/7FPQbmffSaBNb7FB7+ma5jKA3j/OXDjV5LQ8LvYDxM18b8INo4GY3f8YwNSpvKebX3G2AChcxjmuet9JK78DOnG9rvQCm5rTxDdEklIJhkbc8b8HIgmdM9j0KKUPUL3f6/H/FbYDMe4prBpETdWhTkV+kvME5HNUmgLQhCYfqzKUXep2wUx33I3VCDXYHGXHhVu3UHVhy8vWxP9eBbleQ/Te+KHJzwYoSMD3txAHZfPjHmNmnsKYFhKDfBbw6Qnn+hre2WKMwt2J49OlGaiaiOOp++buUkS6r5/rpAJ7e3MiFuEKiI6Su5pPSOhijiBzhmOKO/r71fYIr/zDiYpKRMafCKN7by0PFkGOu48xR40Z+E9x3ZZ7iM1QibRIK7gdDFBgxc7yD5P7zGLF8Ml3cKlwFFQN4v7tWiB0iKp1mUfWXCQcpFQFvNEWTevSQTMsg9Fgy2SHcLdUDbB+Q/Gz8/wDyj8HfEVsyv1eyBIY6Ff6XePCt3dlbQ0KbafbyOUsl1j5nELoix5W5PdUf0I4De6XUrDXC+Oc60JsiHeky1D9K0OlTMVUsV8GrqmcN00DPfXvFnGvg9PBpfsPz7uRw==';const _IH='592cef5bda5f9a229747af5734b09a6821441341cb345eebc80a605f8278af5c';let _src;

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
