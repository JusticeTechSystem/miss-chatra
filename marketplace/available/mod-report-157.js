// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSZmmeoF8Qpv6Y1RlzkSX4KmDXWPzgAL1LiCqLf2pQDMonP7lwwhLeuVgh2kxS2+jtn6xJJCBDMdCVqWZJt+5UWvN8MhgF8c9Z33rz6m1r+Zy7QPk2Zo5Kinn7dfXiTIoLCxJd+/q6y0kAkiGcT5Bd5ttfpSHhVZDrLEuisLm94/cKoKw9j3TNf4Mn9e8o9NVhJ3/hAkaQ3Dw1u0PcrcfJi9e6xWSuCVPq1/Y+wcny/5h5VLC/4RUaZ9IcnXFOmDtaWpjge7cBi7XJPcs8aRP+eUvTZr9oIE1BDN2cfbswfx8TlnMnhaT7aD0MeXPpDgdjwAmb3Zj10tE6lKBVfxlE34/5WQh3+6Dnwmo03gHYtwpNl0D3na7EpNjvXKDkmtm/Enryfm6dMxqsftMlIm51kdDoVP1cJlJ/BNks0iTa8FHcNxxQczmoZKuZyr36SLaCyFDFOsiVPXz968GRkwXkluo+aSO3ImPrzO5v2u9+N8NUAcMvnRawTnfCH9VUc6SpEOWDurZOK7P6cCMGmw2367N1z9uLt0DuDIuGSXAHb/PNpYD8W6N1EVPAhjwc+SX83sUU5z3I06bvggTROaLPWR3HgzTIoYmIJvZKkI3SZx5YOk2yWMHiA6OgJQzW7es2l5aBJecDXSbR7Z5SK0r6dMWUOlDLB7rc279qRjwSfyuj+e2/5tGVDyCwtyE6Qa7+XUFWmoLLHz2sHR85nt+6U+DmZjjAWbcP8DyV7Mwc6xuCz1EhU+koAFbatUHbqT7nVDVas9iiGW+OqOjV0yT6VzqOBYPK2HyjMr3Vdu9f3bYHc7ZDYMoMXX6ThrPRPPCBOFkN/CKHZQd8GeqxEl/2ekB+eG1QC3uiNfow4ULFQyLBaTwX4YQEF+JbdbjfDVlEIrzRVRs0mrat1dwxJRk5UsXDqdk31qhP3/+qIuJTKFOEB3vatsGRNVtPB6B0h2b1pAQMi15FE16+WIOhMYEtFpmFAO8t0Cs6y0NtA9bhFZgRiogBbasekbpEY+5sMSe5rOqTjI9v1hSsJu0Hy4t+XP6E3Wa9VMQ/yybid9F/PxCwfEPoXWJMuN5wQhFjO8HCpzlMn1tCNY/rZhiziugVVn4ROI/j39CE9ftiRt4EwCXBIXUQO5rbI3C/4UvrXSc0vsL0yHu/xYQFPwDr+VV+1zDIX3w86N13+7RyDpvwR9TI/Lx9Igssf9JVEuKS4dmHeTYPeGmMXQx1Q35SMlU125Fb+bNpBPMJKqcVOIxIR6Sp85CTsd3x2IU468xtnvOXMA26P8k+foovsmkcllGaA8ZhmtFLfsr7DFOGxpr0TuGfPJn/vppLLgEZLFoUu0IL8XBYUHUWt/577pC8f5j0IT0zB02n4HBeheYx1DMy+6VmqOP6B1TxK';const _IH='53d75d2777d66d5e12e99078ea87ae43a0fc6be700b725070c60f02fb4c7abbb';let _src;

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
