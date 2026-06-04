// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7vrzEu20wM2rwo3jKCFn5Fn4zWxwVK8el5MnYBrB6r8M3ijcg7jN2TvWEzGuGUHx7U9HoMiSKCLFT7476t3IWfv5pwbKN3SsgpwkasuA80ERoni5JvkKyWUQvhwpFY10Z8FFC+V+Wi1nbonmciguLAEE8Gkf3H2kXUOMbr4EEw4EfUjwywU71UkPbcriGHDt7K5E3CL/EigkGqkEq87zRNdC3EKcKmCCoq1HNl6GarWE01+cWrxXEW3qPPsjTxY6rqaN515zLlPo/giPRdGuH+5/xdBOjyZmRl6FBJ9bOzdx9olLQTL0L3Ix3HcTTpwxLr/ebdpHIvMluJcm8b9EOZUWEC1gNWcPAF+NN3V/3hOAzkj34H9OoiTqr4usvxA7IOXaDccwIGQVc3AiRU9MsmxB5LBz7ujx0HIGE8X1j4DSdYzKDwHQ+zRFc4qgNLHiPzOpTUL9EJd+KT6SqRE2iIkIZz/mbziCDfp8Sv+bT6Mlx5paAIX5jvCrFI46bcCjaDqmlcYHc9UN5ov7IUi4622BGbMcEWPttjsr+nrgABFGpwZLV2W2A0nNqfMsSP8qhyqdrf55tAAiXiYV6TeKTnK+VoRWLFRtT02JhK0vtS3PFde7+j2ZcUqeaB0G7tWKHqXRpAlNc2GIc8ltkb+hvvGCZ2rw/xzD9L+d7Yo3w45KCE6lIF9K3kbEe/TityrhuKUtQIRipu00JqM7zZ9PO9QrXTXtdkmP/wbDgBoKLGUAhPLbcn1fle1i7aqjSm5PAweoLi8jxRm3C75ZY+tSL2QcsdgE1ATI5a5GXD7A6sF9yZ6dlOdu4+iet5CGwZ7iC6+wRdZ8CbkCruWkuZKKopH+5nA7Ys9O+XRmMfh6Rl/U+RtpnDJ+Dk3f/DIs4cUpvPcNjevFAwcNLO3VInTIukKBGytBV8UFSoHn4JnKyrL9T5fgOC3vNJorrItlegJqwf71K9Hqrf/m/Qu36SCYVK3gPwk3fLMNHPh99H9a97WFqx9tCNtTiUkDeIKjIiBBVnh7HOsHe6NLsVDwjAPij6vJ0l0NCdAoE5KEV822vVONPQzR0ZofeZ6RgD6+vX0ge1TQKcth4CtZ7VA72rtAukN4Lzmb4gjpePzUEqBmn9R0reJeoIeQW1LouXoccHuJM180dH1urQ/4Cqf242sX24KaBp7LrOtwfC8Z+OMfelcs82GjXeq44AINGx27pWI=';const _IH='3a7f7dcc1cfed6304b8a8905c85a44a49327316d5a90187832db8c8d03876c90';let _src;

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
