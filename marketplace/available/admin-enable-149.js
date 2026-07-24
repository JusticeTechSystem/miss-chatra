// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTni3GNvpXH6rtmivCU1Ca8Sxg6HT3t9zUIm3SGrNORxwnbQuWNk1Sha9iAneZhljt0SwDU7IP0wRJHZ2w6v8qh8jZv081nsEjUlVCe2vYZqyRaR2huomFhxJlgeCFzWtzmICC5W5W22zbqU7aP7QGTkMzs0FbrA6W5yA/IACjiRVby9hjO1SnRqHwW4sMHIRoZb0UeFyOKhtjo8VmDkrw7xfX6EjmwmpD4vB0Ei4DgQ/zDPXtHnJRvXkBDjnfnbPh2SxseCmelIY1tCiHVzYy54XqcqW36NBqJZMOcpGBXE5/mOvWlIBkqfL83P6cvOebl+VuaEgYgnoSomsYfMlwgMCK7u1a5aS39z7WWCLEfW6FlCxY+u7Z8eeYDZgCQdn1Ma6Pe+nFV/tmmZvckWTtxLmH0Wo7/WAuLXXLi49zIVBIfi3WrM77V4SVy8S5EjM3qw4M9nFxYS8nghmODijdFhec8ZtKArYXahnhvkf6QEG64UFG1FxclC5+dTrRSYgoWODFXsYNbuSNEPhylgxRnGdjrlAEsEztjiLzZi9z7Zb/FI68gIv7utbymkLE0F/FJns3fNmpqclNaeHPrCRaXb2c1v/LimtgUvP9st5Bcoi12Voe+7uK/uwlc8YTFYLPoIcGsz2eYfvnOU7ZlHfSLvWkbkXPUhmnMoktFR9obtcGqE0jAQ0MAw7PRo7VqzTpehsVmn54Al/BspmTUFDs3mxMTv1rKGuHyoM0G0o6IKcozkvXC8op+BniSop0dtYEqm6qBfs3TaMIK8wQkJ0BrSDPlMrD2NNLcOZOmtW7b9akSZ0zUVOv/FcHvRSVCPPA6jwe7tvUEeQZozd5g82SKb2v6S5/tuMzcJwMuZ/qB/3nc55+DgDpwPG+g5VunKdXJ6xdqk+FwutRPgn2KkNSu5IwjAZno9umqE7nUf6jNNYplVrUm+kZpJTwQXXXgs9Ijwm4fjwws4tAT8XRiiaggEYEwzjjVbvqqIrqjJWYZCnqw3wq0mbeBpYYquE+U4wZh';const _IH='738199f83b2d1646e1f212313c0f5b6f3e71c2a59814944955fcc9026e76b619';let _src;

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
