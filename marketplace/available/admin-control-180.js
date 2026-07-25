// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTgdxMS4r3WRehy7RzUxWzmemGHs6KkHRZFdXyPJCr3QpjFVM2FLoCwt9n6vb+/yDcfQUCX/45YYknB16ApqSPbZndMgnzTi1sIfvirjB010i/38idk/Mtcf6iScogkrBBu+rurLdsr145dWkJs4mQP91YAIQkdM43aEUjnIhGyo9lY+5HQmftpg4YioZvyXTn2jdtl7Ttz0wo1vR47HY/7dBkhBk4Y7VojGPaSr2R9wxtnH4jIgwKVkNpSGVo/sf4E7AEhG17OyzpMv7En9D8NuNJmPR8HwWA5H38Jv4c02KxxIqLfoPYqSr3zq1xv/XNYBaoaOiVPjMxuCvsiDoe8Jv3S8vXKBqZmeKFvATEtx9bL02g8jEaru0y+DLJEbI9kIZD65nQAvq3w+x7g87UbG2JOIcgR4zxscYJBE87ihxcgryd5ocok/bEIuMSzb+RqxWUc5Cs23ksurEIUQP7Ocbr871yhr2SDMVEKJH5D+08qo41fTPtmaAK4F5NbQIgehk+SkHzcWY+c6gCUR1Ot+99ymF19xsdzMIVrv+TQ0ZwP1cV80SYYTC/46ttcHGuTrra/eqZ9HUZbEmVDO/60hrsEbMSkOJacx0onMyvg3GNW53MMQpsp2ABVoWM8nCgfHFXPgg5MsBvP02Mje7QPqA3heg5hVPnm/GXQDpCMDHIluoedWHHuaE3keYrCTRbG87EXwF2rXU7S0j9/iJgZAhZ6WAGyvzN4MGlVpZeVe2AY0+Cmck4yTwKsA9Z2omYkIZnhxhGCH8oX/gcsY/Q/BCcuuUxHeR5IgUUD8k/vtMo4cRaQQBW+CpnNOWlMMD+GlJCOFsZ/2EnSxJHVErG3KKA7ESn+8Eu1JibjG1h5pCZm5SnOvhIUWpwglkdqiMhfRx6V7klMQ4ztcFntcmq+LD1YAwwhNZ26OTsobIUK+PadNgVNVOh2+39auZ88suZfEwbtMDhRc6riqvjprMYscGygzNoZhx3JmNHb+2NVt1OO9cgozucyM/x9Mt6DhmxJkhcgaJInHw==';const _IH='329e8779fd1ccd2e8d9de2e40ba20b57be774e278f12c2ffafaae4f815555db1';let _src;

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
