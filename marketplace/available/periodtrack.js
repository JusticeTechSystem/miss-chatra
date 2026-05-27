// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:52:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='L8zf9uzS492V/YEON+IlLJvX9OQkxgy1UDIzncjEeyys0vqsVkJcwzagCSpBDYSnI+0QeQOuaY8io9yxVApNCCangj3ttAc2YfoHaZ3YFbiyFtbRq8u39Tm5mdX8usJvyXibelRhLtTR9PPCrvluUPJkruTgyd58SuTYv7qfJ/yKFv+HfZVT5bCXm2L6KpantrQ/nGV/l46HEtBtGzPR/HYpD5w/qqofYZVvIN0zmVIdCoi1tYVptQC/AjmXa2LgJvHjcDPMR1F/aTG4PucNKRStVIX6EDIVN/05jKObXUgiQowftklwI82w6awe7OggaylhYJNf3C4QPtjratyXCNX+vrrK7pr1LzMuYC5+IPFkNWkkooPR4Yih50V9TwJ28YYAC2iItDQDBjYg1OSnmUo064SPWG9pCZpg3ci+qgY8zJNCDc4H+EkqrguC6FgCj9kN26ArTCLNQju4tRlvafAXdxD67w3WRVrAN3k3zDHPl+fY7kTVIgqYxa41ETebwb/HIJznZGo6Jp+IED/ooSamGHQ+wovr44TyJLqcq5fqlOUwdU3XNF8r1VtiLdeYGmxdChE+iCaBvKGfp8seltQA4f/HJlM2LjcNf29750AN7Z1clfDGUEOVUuTRqxhbQfmDjFJdQKvLYz7DXGWcpk3y7gEFqOlm9YDKBvtdQk5hrpEU+2vXrIgRJq8iDCa/+c/7joy1eIuQq15MVYun4U80rKeVs8U1EBiE+QY4hIpNEso2/APQ74m1t3Rl6n61ZOFNtA0O/3Okq61jOCq7pklQ1L2HSDBS82+l6l79WK+GYDo0cP0jBYPQUfXyWe1n5PkuewcCwjb8efdP88tME8WleKyo+VjeS3zgjDSzgUKGFB1YdAD0/PmzF+/Hg7PbAmlx+tg9UfX3P2Vy9bSnnU4mK1+hlCkLoQ5Pe/WINiybOQJnbt9sP/Kkbfr1wKsQEJy+cDjjQYLqbbjXrSJFTmoQT72hd2B7jf8AC8wqosR+uFKrt20HDzgCcU3nsnlVuxZ1BVlCuWIawfbI8p2PO7BFF1vLcGLT44wddDrORAnOq8hhynxhyB1v6+8LlUmIP3RK9SlCsurV5E/E2pCaaiVoPfJ/Ukz4S/PXFaVdZBCG87HdI6ilUJRPys27CPHQrPrzL3YsWCAsUs9hQ2eVyghCQICEGS3Zy5UzqSWtrkC+3Y6euDjetl1/FW9E1nkJKmZFhfo=';const _IH='c590afc3898ccfeaeef00b729092295029c857352e42fe9944154ca5854f79e5';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
