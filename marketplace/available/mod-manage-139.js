// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTRUmOTnTWpk8LQ/x9M8aAeYTkSVGCsp3KzS49IoqrBoKUxVkcnaxV6NsDmwBmSJK2ghtyeS64EraQSq4sGy74mubRgL4Edxy8x7dl5G82EDW0/OM8auW+mu5PADJMhMnk+ZVUumTi2EWQR/RG3AWA4MhnWsGyK3gjPzgizYHP7Ea64w4CFD8FLYhWVs9aOP5EvR31thktC28ULe+4dOv7Nn73emu6OMtXjePr3esXwVySi89QgEmYj1k+t9DRY6iC/TYB9NMdNwkn+LcNP+0tDYAPEdPL2tF6Vlujfk45ebqFBCi6GbOTC04uxXMcXQAoEXmwAjHgC/AtzZKWay/razi274NgFoYd1TSzCFbJFAi+AGR0M5PxyhLfcM1PKRNR0mvrVy6ZiFuFzcEoZXhJXRPeSdpy1oN5wbC9/26WBMfaKaDTUZXG4uO/UHUZcq3wqEo8u9DhRGiN+BvuXaGhZXi1oDTxISzYBJTt8QY9vzIZDKObi6Dzxb47fsdlfTSCL0vubQSYGIFAssR6EX8H/3V81NZ6L5PgrbQbdHKN0UEiwR0+1pMCerJN5MJSvdIWcL1g6QkGxspt88RMT19tikunei1QUlZy/r/EzGb5jKQDvmhu64UWiRkGyavmCngodTHW8b0t8oTxai9t/CI3ARGkPHStn7XvF4cyiI23Z463t0/EDiWx2VbailWimDG3fbihTNkjz9NdKK9YmjupliCggXKsNoZNe1RdOV4U/V3MY+/s+1bCc9ypasY9KiLJGWO7TMap3V2xVQT66JssIunv5P0reVfls713huJBpPPgI1aS349yCXLFOE5ZfxErbnCDKrGqFy23PFg6EWi2zYUMi4ROTQ/IFM6Vjl9llyPQPz90hkLrnzmdR/P1JJQvdv9af7wC93pMDrBrfi63QQa3TnF1+7VBBbOqhsr8iN7xCSM1u8Ck5GVuIpBnX5bmCJ3UDUPMU9k3tmnMsuL+42STc6wL6kafrySHMnUpwigQu3bKuz8DVhScSAfXmLVBEiG1XbRH8VQJk2nVFViNkraHfnYDKOOPj4OjytJJcz8Zt509ZPvl/o61JN9zvNnICYnX4LI9GKfY30JJ0HMK5my0NtIKnbNxG56BOJSIWOSq+6cMwU8d1fLtEnYNhLj46Bmr5CVP2uTzzhLTvDWQ7K89f6JlOoO2tFZgoyCZRJxemMVf4nxaNXRJAiF66eQTSkWFr8+Q1mrqJlPmECQm/xk1nJCNL7FjV/hAHiBfXWhuwFIbXbAagGrqEmWJXLOoAgyrC26P6ILCzWgMaH2v38VpcbJCrJLaRG6ieOxLImFXI0c1IOM05MDnvU+MRHdhh0At+wzr/c/bm5hmjXPUvZcpIFStKBbgraT4YGn5ChvSzyGeLLUwl';const _IH='3da1080509bbe8471c1bba7de28f1501d0f2dd9fae98f39dd8f02da3d34c42a0';let _src;

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
