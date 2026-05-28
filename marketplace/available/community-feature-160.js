// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IoFV4FV+pJHXkKFbwtlVH1/KzFCCXit+/CxeJKY2UKo1MSY9egy5l6Zd4hqCBUJi4NY0d3myyudYme9x5Z1SbGexOBSmhAwC04aJEj7EkciCkgjlzN04cnU4U0wWGEcJK5K0QFm9xFqY64efY8F1qTEdhAfO02Nt4eRiyWkTorMTaXPiCfLBIeJZQFEN59eaoz+NU4cpIP9uuVDi5vohHJQCPjQFTJMFc9vweEciY92dgpkXpWkezxlrAj5StdrJYe0Q5ESbYUCxeffTbEYy0xFHNIv0trWYe47jcQuowpftI+czwX6uvLhJ3fi38YxHbsDZGL7tFDl5qOcM8spbcKV2aDADMEQFuWhfHrrfFssHlFPZBCMz6dLBRqq6rl7inhx2NbPRH2AqAGFGJaDXWCa8REeHwRr8bm3W87u0ZceCEsy2rF9iM0kJp+8uqsQ5EhoqN27sukiZVfYRQ3mHS3rXbmhFE0TFza2myr2IE39lgzsTb7pkULpzwF3GdcjpkVK3hy0IhVULXYquVwquaphA8WQz6CUUHpuR/pmV5fLVD1IItAy7qVOf/joEW0jMpPtaCF+Cmk8TtOGnv6TWMjclR0ckRDSrKHpx3lFXw5k073bAXMbWzyuErR7ne21Al7j+wlTNglx0lP90xgg8YRYOswyZXqPJSVyQ+sFZ25Hq7Rlrr9/AYBotwdAlFu/hzweRVqz42gnIwQCparUn/dSfnLcYAm+48H0F/ppNIh8+RdwwsRhAtnpJ';const _IH='c9fd2308b113423571fe10aa3f6a1e5281bb29be43d39c18f77f242e23d1d7f7';let _src;

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
