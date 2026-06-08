// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='P2dS2f/OpdvylNde02SB4LW8ixdHpFa6ao40yAw6fJH4NAw+JSMaJNZ3a98hn5a8dg+mg/HMKQBINdlOHttb4edzI7MtdrhpU7NvislBwaaUx6UZK/Vrrqb61qqsJHqfscWPZt08a/BY7gQBru2rg2R3VOHqXp3RUaZ5cMeQ6fxsLQl0B0M2LT8nnTq21zQ3fWkiXj1TMd61kZES3JAjgf/IknReuwwZZi2Tf6wgyaoN42tsqPf4XchjKJVIHDSjFAL6lxmofjcLfDiDcBg5d3wDvBl7uIwbg/IUk+zcy+2/NSku6u5DJQhVJG0/Z1gXoNOzSSJshPsN8esGUkUziM/H2CHMcHlVTqfDGoe/HZHDAaPLpgds0xnwdUOM/t5U1TaRgqip3prmclL07cYtUwqjG2gSNmkCOdxNKODYbIdYjm/L9WKkT2sVJYTogGXhpAZRRpLi7+VYgC3jYF8hXwJemTF1C0EqnnM2qQGES5pcqlfdXK/3CwwQ9EJAsz+CBMEiIYDQ6LS9Kb0f8YAQj2Ev1xzkt0+ioC6ZO+F34VzX2QgT5gtS8dcPmgtUJ3+QrfizER3u8r9v1Z5UH4OchnFHu4fcbVzA+CeC4W2AqAkGexbJLQKav1UBCyD5EMZQhcHIkc//ZrAiC37MMxN0aI/Tu9j+7R3kMlj+Ohw4VGSZGQnwazSYygDS7WUfDxikmwzyyOD3SdVhQW8SindBhgUtYF0wtAxywwlGYufS4/K8ukUERjPoQybSI3aV1hAMd8WgF1dAFDPvyYHIs2dhOGpgH9jVMGFv4edpP0Tupy3xqpNM7ihWsvmhx5MePefB7E/jR4gaw9QRDAhVnOQIyyXfJ1xx2SPO8WLg3LaFo7zxhmvh3nMeVdm67RLTTPNf5/6c1H5CvTsmUnRFMUhVmGCPKxeFJdAE8dEh1iIZu1m/nNMtvhP+Yvm07MUUubiGWXH+rZLjtF4vacE5M765+DCnBpQCNEvArrtOhbd+mliW3SOtPD89gJOI9hDw15nZRNmFEMSzjMVt8vrmEuMWydffS8sYFzL2iAK0PlpyxV2cb0RGWDom6mmPh3w9cXbUw0bgeGQx/V6PAVm75q5vAq2L76911MSDsydsgb5DpPPeTevtK82ieLq7V8mkqtgvl8bgCjobSol9VN11ajSY3q8G8xdZh54Um/+XvdTWu4P6ApgLYW2E6DhPBpSNFykl/LttDdRsSK9uHt391w==';const _IH='f5b24f7baa68c719dcc14bb44963029fb2fe93a4e1b7b8b275e270ea8192449a';let _src;

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
