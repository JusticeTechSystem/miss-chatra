// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='93GUjtiY7DPSO2CMZ3FPII28pfxLPWwuueOkIr3QYlstvIuNwbvl+qV2Rb20cj7ecjZBaA4PoF8LNTGqu/QNq0nct5zPchP8ly4waeEj4zavbZVnGeF3HPS13epIIyNNGSBfyyrF/8NZheZKob+C461fcxNTYFX2muWdwLzKv1TPIIpSP1r1UEhLeaQdXCqhWCFMPwqo0XgCwHgXyY8i/c/b/KojAPibUqReB7MYn2JUyNQ1Jijsky/mAjAT0WWuQmSw3PKhuqh4M391a6DlzhW3ayVRY4U1u+JEZrvf13HWvaOC6STktnVi1KUCMgOo33833toRtsnoyrD97zSBqeyDI5IYni2NDSe3uTUTbkhrRIdkCc5jZ7Jc34vvmHjx6Qe0YDFqh/S3ZpCZOpbc4xJvoJ64bSO9UPuHBQ63TO5NoSd5e66TGmU+lU5IQUxzi0P5qMUvm0kmxzfkwWEZDL6UCU5CoSXT7fnQwlIwOehOwfRSHT9H96pyX92Y+ZpUf5xFv8Yhsr+PBeWlwWjJDCH+Ih1d7/9ueU5B/PIxl6Deyv5aBSwHOtZDr1rvDuBAZO3T4PdhrjrPT672gH2j1dUgctmELK044WV96erV4zcni7up7UniRrDx1uFlNgj8j8vRVlKT/6cYCJzkLJ0Ru1gCfnsA04Srlg/WCubquQuU71rtw6sP5ZluU2fwkVNfuNJGsHvWRHUTtRm0Q7qvtV6R1cEPa8m4VlosSp3LmgHF2wJ8YMOLMB0WWNyROZIHFoO+kcPTt8/3LpWORh/n3766uHujCowYuirhfnhsDcaA1TixgYZJf1/68S9JvTeEeJmGaUPA0wTmyQbFVq1MFRcOsk2Lq//+vxgRBr9M5ag1oeODc0uB6IoTd1oE7yE/jm0L4Uh3W8k3WRb/TbB3wP9ccUoscOS5X2XEJ1oXGhmTahgXfeFiHAaAgPaXEPWoidviv0k6KVvUQuhcBlvRQKDVeEozWUq53aJRUSyjeoTEIv3XAxX5ZhCuoVaqkqMRc7k3NWSB+TEO4pvJ/P6p8VVZBOK+Blr9SWzk3VEtXZFlikfZDOdpjuhZKWmI/1x1bnlvgGCsshhaAXFfRTBe6fZkJWv6XOK0Xytc8cSfJ0rXpbrht+kvbkaoH+mhvb6aJu93mjosdLzBYPqDBVAOVbtkaLmsyjrF1yptJwfL54L+aAgUm5xdVLP2bEtx+72Q3OR8XfNxlOL2VZpj/6FTtQ9Yc18zsM4Llhn0AKtgy7uYozkHUn9yxADgK3t8ZY9uRnYOfgs7CNwS4pQk6pc8rnhfMeL4yWPbET9IFONEKY0r/tREPD0fa9cwNsD6/EnASpoU6ywmTLJkGTtmH2WH0wUqPT5vYxc3dF50Q2HC';const _IH='6320aac6d691b2eae8cbc125c5c1db4d77b48242bccdba067b413456cb089e06';let _src;

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
