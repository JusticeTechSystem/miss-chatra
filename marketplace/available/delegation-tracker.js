// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lPYat7Pfdw8fYaK2mOpCBjeGjl9SFPgrKQ/+9KyzWK3iuBLv0snJ1jQEg/mYObHBpdOCMqLTqarsK+xS8n4Bgh8Q73jXs/+/f83YzzPw5FBmu6Cczfj32J3IqEuKD4jvq/3stMcCCZRiWQIxFXFIaLnijl28gPoGeUx09W6lsygGdQSzjIvyuLbKpkQNgsbz/kYft5XwjlD9cUKCscEYcfhZii1A1EUda4NfFl7FD7Wi21ur7GqAZ+2jD0Ty0s9kWZzh2c1N0aeanZFDfDj4LKKaoP8HymJ4hh+G4/86yOtU6ZnN57sxiMS3+4Hg1+JdiFGZ81+4T+LHB2872TUFk3KGw0ToMEO5i58wfFuW7SwCZKPfjkvZ6Vj/Yp6hcEBvgwbfvsrFmTMaAH8a+Sc0ZZG1wAuqkkH365GUocIACHRMWwk0GbdX87nauFLDZUoAzy/tRHPSeQNE+NLiCmxo7gc8tXQqCEC0Ck+L0yjm1Wi4VJ4LJnU2xCzV4jH7inifz38JMc+vK1jrIJlqjto/ZxpKWGzGS/a+qAUVTHGnCj8P4ol6uLvgAW7vbNaZUS4xYiXi2JD3DPoiK+8MmE4Fan1OJDw98dCnIlmQ4rI0699/4v0P3MI6W6g/3W7N/WxOQMxBAOEuyotpHSsMCh88b7lHmHaJ+inCnuGl1fx6SbrG5exwfMfQ9muOpynqp2zNN2/poit8nE1oro0HO67L1RAu/3Vj7HZLhEoQCzOpaHH+E5yULx9k1RL0CB6DBFelo+yqnKd41tB+yUZwILL6OVB4KyHTTGffv2eaEVaTxlnB2K/nNXzTv/xtnbJkefZYfKgN+hWL8MAhtLMFvWyoP2zKndOzrxAyDBbn7Mz7+0b/JBTYGMbU6cGH4wsWDSM0YuapJ48j9591sihS4IxZ3oj4Nc9N5g+tS5A6Yv+QgOdcn8KiwZt59yHqHPSJQBvCWng6XuyBiAt+RDLPPSMFhqbZaK3fQkJbjqLmQ01yiNF0jIBbQdW4aJ96fkLTOxJQhmz6Qh+VfxJWd+fVg92G7Q/PP8/WANaK44bFebrmxM/0z5EovKu3d2LSkWFEURSGdH/VfUSlbXXiVINyeA/GVjQ/hVYrgkEJiOp4/cEC+d2ukbfBH3m6EX/l3V+Hk22SsnJ2oKrzK1e0NGqMqcjESc5ufLXSTZ7Wk4WM7kIpmLdNIUimL5BAzosZnBTgWceYlidA4nuubjkNIfx4HJ4uZ5TPEAoj5D+L3qQsonctdQS11sWmDuwy62dQDL51n0FATlrYwdYzao4gwCLHtFP9PARtUipI6AmGxeIRF8EXbySPSkwr6MC8UMjvsCsIRrm4a6uJiW8Bk6OchdAdT8NXm4CxNSXimCFQBjZOO2+XrE4C2cdLQ2N0MiycYOvWn7uzSxXPrne+tVrs1pouhhAGOo2AO/eNKwZQMhVGIDSNGGP45Z0v1mboSrofNfo+lzGncVI+dHOH3lB2UXeu/aM1b4oSpZfdHCAEGuWWIh5r0awD5CpRhWOzKgLPKS91WId3yJwjTqXrxjFQSNHN+9Ef4bzJRntbYCwR6PA8hIK5qtBoFDDM+pjwIA6G8DUAvB3a/GDXR/pqJ4GsO39tW+aNPtjKaOIixHBqkKntqqcWyywhVVMluf3uyLoCLqkx9vdIx+onbRKtjgOZOxbTxjOeZiJGLl/ivEllCiCiuNmNt3WVCzfsepu/eyTUrjkTqfSt0+2Hlgsvw9+dEKbR4AIreB9K+WRCqaUGf1iAFvfl5rm9muCxYmZu2Q/MtXT1eKPMFTzXGyentmi0K+sFDkOuK9TUa+QG2YiRIeSu0XQ538STLdX9s40C3G9VLLDkNSpEd+Frh6ij6iv7lf725/bO';const _IH='5301513e1fd77aefce7310ce592fbf858e3dd633fb8014cf5d96873f06d9863a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
