// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:58 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQyV+24Zet+jLUK3k4v73k0GnssHITOotAk++zyfoCPOJEOFj+jWGSptIi89y5kAIvNDV07Cz0GXRiAEaVj7Mk+Z2TscvmNMlwjNDX4XOdDxwOkEHjIkX91te9hM6By4P5IhG1+8c0emBoUfs8cdeYzU97TnQE5NDsi9BGmcBlTeutUYgiHRwNM+J7p2rK+Z59x3DLd2rvqXJ4b7xSFeX+OEk9T1qjz40fzTTrMy+py5W0tMljqJw8IWvxGczDgM+8LqqygD5wM7k4uyicK6qsc92Eo0tB4Y+5EmswcLfShpfKeFH9w4agKx0oXmBMHgdbuAk4Ts/RKcqyfAXON38mhdjzh9ikQ1o12adMRWYIyz1gp/45XxxXljFtZO0w3+GzgWP8mm6wIIhxrRdpA5roV3kL2bjaEF+b2KadlrV56V7MOMbgCUTncQ+dUj/4IcBRHWa21LnAAz+9Yq5hhWLM2OcJpnCvK+LSA+wgjftnBA9B3pPiiEWsQCD8S8a9CwE5Ygi1UiZ3HcpteM+4tDUvz56Smb2LhKh88sF7v9wxEzoXiAz0i/Jy3tIjEkoWl+MGUr4zhB9bZ0QsuST0h+J/p3SNe5a73+0KuHM0PtTOgSV8Zr4G8aIJ8RaQlY5jVI34SdlIhyOB7gpHkdQnzsP+QOBLgai9/zz2f4XVdO4kfh7cdOl3AWgvMXFlV6PwkncIh0KiNwrYlQplE8B186NYsKvP24mAkQTIx+jZkHVIDYO78yHaS4k8D2UUpSZ3/SPTPJF/NkoQdk0vW8lftBp9SWt7ynS1pmkwxM3zhhmYPIPksSjXEceB4VDx67YOyJrxGXqxUqwGoJO8hwJmylImU4TFUk/3+3cC2b0skbui6nmkfrh2OnqcLyvZCkYWoyZzqxnXrZFWRWd1OADdxUIqAHUS1W2gAjMkPkVwaPneBKVuCfgVtR4kk0sS7X0OeDZPzZvAUE39H3Pp5YmEHB5y0RNuFRHPSXokZX1CevvtWXK5luo1y3VNBcIB4wbaDV5dQ==';const _IH='9298058f617caa68c86d52410c598ac535575fb45a0c15e8c21978ddb19422d9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
