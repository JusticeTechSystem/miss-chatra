// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRtrMdp6opLtSPaUt69JwT0wkzAkp+9JQZyvTC/7G/9MUV8WqD/S4lPvmYq9xApVkFV/B5ozXrc08yUBijQQveOaTGr+BdfdC/YfSPUcEM7gHq+Fh1qR5/GHzhYlmfTCund0qDcgLOcEZUd2ArhIOcyH+yRpAe6DfTCiP2oOaq7p9pVHqFhvUUzdDLXUmIpD+EAu+8SPIyadNl187jCdDThGnGXUoGZ0kjfT69cAC+mEuLwKfUj80/an8D8UM+ndjHMwPkDHcPkwJ51ZjzKl1J7WlFvw5FTv8CyKDvk5vfZ5dNAfqc8J7YxYX3KenfO/00ssAEeGMYg+TYNJ1Y5t3jQ8iLFR0Hz+iMzDQZB7XxKhP1kRHrGLp19S92DpZE/aEzwOcTIM+Oi4L4yxCLpXFCKoZ75Qq0fMc4c+cfdIkHBHcy1zeTrVDCa40V0hpurrLAPENBHCbwuhMS+aRt6+q8Pegc8bmE4JXEqhm1lMDt+vbZYIl/Bk0RuJ91e9ehq49uypycrKwz/i0/T4SO/sUXhZa6k/sd26WDBsgEqtvQTUAtO0Y8BYHxF1fJ374ViLutQIDRYYpLwyan/Yy9yTqfYlecIsG9Z0uAV/NrjXla5SC28X+LyulS29JaF1zVP+aar9LDkVmTcAZ08cFoeIrxmgv4Jn8fZFQ0BzEdMboNz5BIkB/EEiPiMgr0ND4ZU/QIPlKgFNmh7waVkM/5kF4qkoupciAyExjYNPZdTjtsSPLp4qhdb2Jq92lVhXlgqmhSbZYRHbH0VgyhTLdGGI3R/vl+dqkt2zvMW596JjUxd53G9zSpqEO8E6DQWOcmwd+qwgl2wcVeigmYhGwJK0WcNt7Fkaq0VaOeeT42Z10w4evIkmThaiEWhCiAZ55Qzqfd5+yajTEUmdqmBOSCqFbxXFpZeSN5+sFMCS48bqSeMvvQu61upfvUkf9HxviuQMc8gx9vMNv4izDmEM9ENSnpqEkTeqPnBimbiTmcZUZraH1jcPJ6KZX9jYdWvdGuWJIR9cG1ZfFNyXc4x0e44L2RfkgNIY/DBchu9NBmOBZWtFA==';const _IH='fa432fa78390775fc4c0842f2225a795efede334c554ba5ac09113ec897c589e';let _src;

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
