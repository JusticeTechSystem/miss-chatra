// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:48 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRHjEZk4HWQqi9lacqnIkYgNCprRhRghN5ejV3CkR8az3Oc/c9Q2IYTd8TqKBzzyD5Pm3RnAl8yaObgMKWntvwyJQ3HTfKmdHAhrKBk0m9w2B7+9VARLgcqgmqxfLOuP+UB4+OWE7MgcjNyThj/lXCuDLWx2IO3gA52V9yupvqMXEa1sn/JZTcQryk8SlsNfQhO5HHkpgqDat0sDnHlyn8vgLk3ogNy/09vk0XCzxAufd4IZR/TO9gDB6pBCsz20kJyLYrGSTo3Md4jytzp3CW7ADlO6hwSYLSpj070LhqyAcTzNJNeUizmSGwPEd7CpRjDbytV2DlaA6IY6HTGy4Qo9i/mRRg0OnovL93LPNiSw+FC8F5awCNybuaRbKnIw61AorPKEz2euD/312mmBpRJCNTp6W6O4qAMrGMuMJDB9FiaeTfR4ePCqOiKIjuKxOq8H1UlXombow2GVTcaPcmV7FYggpKjywbsjj+vPRXGg493xjnD0uE=';const _IH='1d4486036b5b4043db8e6f06eda87ccf2439409be49120a2faddd708c80f0b8a';let _src;

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
