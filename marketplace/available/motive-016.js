// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSZA4yGl9+hog6nC1s0bWoDTDtb3lQ0uQE0P4uwjZDC2gRxaiDO+EDnZiM11w8m9SATE2gcsoUuRNCNj1zRBrrCyH/QV2HbQoj3tCjQIOg+rZ8uroJErxNQ1tkC0jNvJMi2FJrVjAJpa0FOmiWxOXzNc5uYd0iuwVCeEaMTBIsLDuTq7KkGvdsJozatOUefyQ2lxKUdZkSvuiAcP6DoD7Myvst5euIC40034ev7I31N6/20Tm1jDk1/fDchkYPGm/xzCGcECxVrKF7TV4vxfxn4uP2n3kNuO6oh299I/UqXaiHj2+2eoUeXwwIs8FmHwAMp6+VrM9zn/MU0kPkdHWxIea/hWE6uImQxCmBN3vIQ+lAEpJamrVXMtsuwHo+kiWVsLcXpKBoFgDM5+wm7r9Dp6AFda1RGWLsLB+2EivVkQzWi3SEsw/2UYYOJIFNelvYKgaqjdGI0tPuwfBfHox9bXFuI1uAK182HhcaqqhkYNHJYKfI2yHFqHSlxAjemRd8rHz5DoN4dfHBsCbittcO/2cPBWJ+oJAKOAPDXR+pua71ayZjDLmCYsCFouyvRppEAbo9zRMoTJ79MPqIUUMtubHV4ijgHZxftria9/LP3RyCntH3ORaoBMHAX5gs1M8nP9Ch9yiy4rHZnxUVCdNDnM7qg4tyBgnrTOT4lBnNEcT7Db7F6QTA13Wr5/Lx7cRLgGWHkcjEbBPkn9gpDdmcgOp5kZB5kcMRO3nPB2sZqTF2wWWSWcxLhNtFQgrKN3pCy0VtrUuB5nD6zHm7k4rb+2mF+YFRQiE8jL2U4+WzyAYBoBYVrXGbWUGWm2wiDiarewdPYv38fLfXzyq8tavwDbvK1eBgCze3BpLVQImDOL1u0SE8+HuMWSa/irnzPq1PNLWOEH23qFdT3RR1nPpXicVovfMwGB04MNbPf58tXRIwj/69QnTzzOkNxppmUqe4cl4kLIrGboR7QnFncSpChpwq7HzmSRTW0PQD+cNkECwhJwt4/YAf11za8X3FwZkTYoF8wS27ngk9PII/vim1UVbA=';const _IH='a3aeebe8f014e9621b7a7c3f328da7cde402074ea046575c8842ac7406d97f09';let _src;

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
