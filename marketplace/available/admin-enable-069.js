// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSLgIJygQ+EfctC7sNa116vr6R/81p2wkOQlfqAZ+IG1nU23qgjM3dSq2lqpQ4KvLL/eV61fMRsYMutBJIDBr8vlm7v7omj4OX/aPnMjkK/oQx28kqnmw+SEyMt3/jPOorCCuQlkMMKwGsRaNeM4uMDWUHf/9/7n3rVrGJ5cQwrfEAWL4MC8FMHf7PmK5GH1td+LmHVP1/5hVHtPXGeZ9rpll8ga7DMouhFFlALLm9wC5VX/hp6KdpD1a04XCSjas+cctdFZiv8wSeJ71ha2cnCiNWpns5yPDXE3TZBRitj/4xteYu2UBYPkLZ3DGcyK/9Kqlmo8jpCrdSBQ+4ywx58INCMrhf6zOp1ESee34Nh+SRYHb6yHvIvXxW5M0Y3rMhSLk2mzmxHN+qDaQ0XS/RCWVMG5S03Dk+6XFuusyigXHRz0tQcMKaKBXf2ipNWxKWruDPUyruBjUwmu4aDAT7+cl5k3gIb5iVMh8om3tqHXqYV1YY8gvitIXCUUavpw6sthCAivkfMd4ILZYoT1iBFHQqr+XXZegDjyu2HjY5y24M50tBHziXqM7bO4squ0P2trSKdpY9+nbmVYrMdfrAEmWb7vttfIooU74/9BFc/7ZWfGC1psCRgJ9A1+Tupn5u/lUlGjMTkzY/98BOLe4SITDsDf8FO2AczXD1JGHbg4BtBRHuNIVDdH3s9eQTGDU1xnOI5c/tRMb5EaACESk6dcFX1AXVJa55wYVpczHHSvzHjuZUPSBZ9vJO4ToCsQkMjeFXaR9CsRqHELGHn9q85wDJtuJNjFwf5Qcgf3v7ckNWqtSjSc8riKUELEkI2Qetpd+jQoWjKtVNhjIMb9j2F5YvcT+CM4SPEUDSkVZgPLU+jurpePcOJzJ0gzMGb8oe/5cAfprrVm5uWlN2CNx/v+I/8eYjAciEgsMEANQA8K9jY8UVSyUwaKb6OBSrdhrRQJXZMs6TsRjyEaC4NU5wbOgxs1ndYIDLsBMyPIiczk/4GMzr6u9B9B/gN';const _IH='f5d24eab5b607db847527aef45dbc8194d9e32a1711a0c2a60da20776f03a86d';let _src;

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
