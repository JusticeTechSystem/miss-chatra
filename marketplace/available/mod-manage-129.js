// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='uQf2eZxIoKaVReU23Ftvb1fDI7b6L2iEKkQD+ZM6ic2eDfKQJYLVrU3JvJ8PzNl+gbU/wdC/5Lt01eAv06ssc+RJhCSWCufy0wh5hsHsYAKlL+1X91rg7UZhlSNADNWr/i0qlRk4cgLurdh7QKa61Rwqp+W/Vr+YmEDb6poEU8SSt6+EKJMVOkOIax78egGWkxubG7pNONmjRh26FXNYurWnAu8UH4i5ppoOa4oV1jfT9mVqWvif42UcNuI7r+Dta8X0UnDK3aCL6emWBfiGu3R9E27Uu7tE2skBaL/BIe/SNKDgCNbxOcKc/FJjZh1k6NQanHU/BojM956Uj8glATF+Nub51ERkEVVfJ3ftNPkSKQ3W7F/dF82dPDcjLSTt0aDO8asyEzVzF+xyW2iMNE8KAEnHj9bQiHTuY68zQ2ZkVs4YHTHmDXSCPmjyKVRSHMTGViDKDmgVPIccWUusONy0FHxym6j4+C15X8xc4gcW4BK0De5TAyak7Z01zb/O0PqJTg6ftg4y4eWjC2NNhaYg45BhoV3R74/Qqij2L8AsoSC44Lrod38+jVcIFL+j05rbfI40PXkcT2oZf952shSDQYUTSTCu4ecowGiMnF+wyOIBYAJS3pkNO2V8dMweFJAcehySq2Nd+QoRuWTwYBhW9bWACjD14SoJuwR8yga78H9BWitxnlSeeqWxwlusKYtCmuLZK4L31SXImYU+P0r4PDZQX4TA9DAZZgU3NG03dU0hRgrua8FKaWnjqWcysHLeuZ9WmKtDGyEtF+REb4bUs/ryQB1EtArvEf3bOxfLzLV1j7PfzRm7JTwJzzyTb5ZVPCSijmpNBij3CvUqfCzUgbc9QPyzqMzR6q0D5CHcM3zYgoJEq7xPka/uf4GYLQlh7wrYHdXfcuv8sh+4ieVZ1cd7rRzNjjuuEHu9WsviWjuAp/J0rMocJHeUeEPzX6TvqhnDhqTFXjhiPvIdz8V6tznDFxfKIGN3iizpzwISrqv99zX/c+xe/tpmappbGLmlSChiQwiKMxej+KvdNl3bzxKcwaeFy+4Tko6Yyb3AEVHxjBUSNN1KtRBxPlg8oKgEsLDSq8Lbw+PfM0Iy/BT1Y+Bu5y5jerLI50CuiDhMPitlzlpyjZVBcZ0sRPjGEJQmu+DuUAkKGztgIGGJ80QA233Fa/aElNVeHh0RGqBrP5cBujL/3IX0jGYIOmaO3E8tRAQn/wzXehIiUofmEVKEdy/X8QmlcFWcf52hRGpflkl9RIEHk/C0U39Eilw1TrpKW6pgN5jKKMiVXY9rBB1K+e+pGCaz9yIWuTrJgLn1lFwnzTEdjTD96R48uxJWGkrI0EaCCztUPV7aWI5gl+6OHZbvRyzRDoqVd5QBCEXEDVbCuNDbPQ==';const _IH='18e3d62e7fd325cc575f306065d30bce20187399e60b119c10d9e23c5c6f6e0f';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
