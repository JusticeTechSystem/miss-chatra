// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YvVHhQFh75wDstrfx2Ie2ELY30MFDKytcRIFuxc0ROvDCoYl5Bx7KHArB7ynlGwY0wLGK7oMVkMV6B7Cqs0B99gEhfSrOyYhNhb0S0I8oklt81RK1xQ2KmYFlIAqgh4MIngIceSHEKUguVQWmROM1Li4nlE0Qvg/iX6Lku2BD9/EWR8wUJdz/Vt2St+2rsDBEZIhULGz8i9bNkTt6yqMOuNYPmyN8ryzlMbkY9hSHC4Wrr4Bpn8dT/s007fqedtMAirWTz7cr6hCEM8VP0cCfeBXkGFniDykwteGKQX2c9W4fRd9IZrMcrScAOssz/Mo9P+Sfb/GNoMbqIZUhhfg+P4jREE9qlSDw1ZZAjJJ0RJIXcY3GrDxlCZ5/JdnG4fs1oEcdgvY3aMtG6Qarx2KkftAo8yFCoFMgJLDN8DDzApOBaQ7N0BMGjLWFdSFcIE5D5h1FibjCuJwkDN4rgmx+FWvLU1bcT32PLp5m3mClnNTUOPJGyQe/uNlSHy4ImJilYYKUMazmsFJ63bvR3MhBLOIsogzwSVjMlvxrwhVL/npO8cFDbwtaj5Qos41GfJyks8E+v4lfyT7Sqfmm+4gBUzZG97fK3SRrElywvcIUdyY1jj18D0w3pcA2sYOiVY2WZuR9WPuiPp4YBhTib2d3WE3LX1mQw3BiHXIgZCp5ic+obkv6MMcAXWU5dqeWh/M5YRxoyAkgy/EiKI2XD7Bxrx7MBHpHJV/LQsauLKS/fYA54PM4/KCZqQnkhg2AcjLZNhY0hRg5oabYHZ7Aps2zkoFXYZ2T6iuG22fyKxMlllR0kBBVEoNTtM/tfoy9AY/5/6hf8X+J9GqG0iVyDECl9/iykyxwNXUDkP1jtrhHDQqPO1ncg3Jbpb4lu6lGsmONk0mHB44ORsaEmUg6P3Uz6U+6Gf72lrlQBXqwaf/t4jG0xpCfPs5Fc6qHjObFWiFhBqrptKZ62VxCp1qxvUtF15hleKLkWII9hFCAPT+g0NW8LI4rEsC+K3Moj+48+35mDKHNH/pbNOYG3b5JSHcsE2aU5YnhwVi5g3Gkllf7liZXdu429SiL/UdafFnXrg/asnlK3NDcddtYkS93PoXQ4sCEVyUYsL5tMkWkmkZp1oRWinKfFH8cqg1maBP45GybYmaqD1Gt/2WGZ5RAVx1DVK/YrNbu4BmW39LDMb06gXMJDyQxfsTe/5iKFsc+OQda398dLJ/EjA9+BLzfZH06dIxGoyJCnpjMEFVsR+l8KU4Xf4at34SrRHBXakMALMZOGDiZ4zey5iSWho0EiSRRVY0HIs3wmoQk6PkV94s7p2+vOVyFiAMTvGStr9oopQq/bLzQi62qcwuH6RyxHEB9NAFEb7hSyLJjl7CkbYFzokhguY=';const _IH='eddd490df3da273458a567421be732194986d6a15bb507b7d898678839337b73';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
