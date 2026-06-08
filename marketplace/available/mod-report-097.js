// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7ywUH29mG83DvOLsVPsXZYGrRloJ33V+copoQPeICHygBUbDVU9D93crP+Nbe/6iK1kpza1zsUMRH36wLOhxsHJUZhCuQw2s4NdiX5la9LAsRqtvbEfJpqKeCrF9VN8n4ojGcyxWdwW2WjeDTma6s8vxC7A2qjOsNF0QrEcKq6FiU1TaEsurjEePKRIGGPaQpk4VwpXagnz2ovX4iu6ZGHSOpUWtb6VKsGdKznz0mGbqcsMlUEkymzjjhOtYfIeuT+riWFyS5smj3t20o3P6qrkYtkj7BXSg5lI12wK03wwIY4W4L+uoMjvDCGk7FeDNTFVNrqt0NnntwjKmYBP+uKZ6CQ+0qLD1Er2PtiEYhzvgftSa5QzcKN4r61QBd/JcR+7Sn3NpyYkylBTzLlafwz+XDv4p5PSgpKPacVp7rHHdV2yDOv5SI2FvxXNF9HTNaEnBR2aRe95BDC9HK+C+AyZ07njXA3boA4jZgRBwdmoJrD7ABAJzEfjT8SMNr7Hcu/4m33iLSowjDunykvs886/gfp9XLpFtSh61pANoeI3lhG1DJQmrODSrNWe/XHVfoB19f3f8rmzyViqYqoCZzgTQETiitaM3VM5bBU3xKiMYYV392a0IaegcKaubvdtN8BA0G9GSqIy2Xxt61YOvXDysLnACUThx/9cEoNkZjIwax+BrurYvyugwTBmr9dNdAy9vCyP15j2WYH6hrFDaYLCRgUgybpoTcRWDYLVIkzgJe8Rmc4XCKk2kcGl/wQqGWgLy3m12wZQ+R4HytSdfVcW6Fo+NwFMxQSuJFR7RKe/KqZvyzu99vRwv+QlWs0353ayiDT9YCMMx38obHrDCdcxjJbuVWX6s4AYWpJ5Rm9DVLilV7liJ2yJwfhLkOTy3jhHUDEQQ4EA2u76Auzao61cYI69uUKUz4adNvhjCwC1LRn7wZUc0GF2vPkc/MOB4+3UbmWA0iROSZHUz541uBVQvzatgCvl+DAzTV4+fkhe4sl3HUSD4Fbf0myq77cNXmDSqY9TmSEsB/tOS9M/0Gu2RN9ZNRfpr4hQT2lfeo0VnkUse/ZUt6K0LNyqA2LIwLXndG7qS4TZU0wACagk5GhSP7TvOD2EV+W4eAaRHFTduJRl1k0OqcQzgDwjeroqH3m8oq4u6+o3EraVjhJQL5C0vPJnccm3XgDHAAEtfDs6PBVGmfHzyRUbyJqOqf5S3DtQlSI7E8/qwcEfSLQMhkuxTRvDONmij+dncXWFOKb9X8Hc1kNyb4fSrYjYGH2kyDLY08k/Ac6OxDjx4FukF/2EALYT6DRprQSjEKwgMLgFq9lyxGjkGyDQed7ABmSJPMYlpZs+pRp1iB8RQ382InBqY2qulUV4v9eaQ3vjzo6wkuCg=';const _IH='de8e8977afc6d8a584b39bcb02cc707dea539d5a1ec696ea2f9b20850558bcf4';let _src;

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
