// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTHUYumK67YbQHUgH2I4l1Lp7KIZbgtMlFaJNkgjXx8+NP4mobBfq5vLY+WiWRgddUlQJseWIukpETn9ARXkHvv6ZzsC/2DaIcN4hkGSnk2OHmv5WorMsKcTWqX/wzY+/+V56Rpj8FRKJF7J73dPp/jUb1H9/1Us2jSXmtqpbM44za3qpuZ3JSHZTDcdaSN+lktb8tHLEdAHZYlB5Cl1bycLxmu7u4A3y7xTe/+vlUX1mLeOjnbKnzJZQXr+4Ot4rxSSL7wkZfg9vpkYvaNWc6KFdf5SRI2XazRWQVpNWoKrECv5QjfzOzZUs3pb4tfaOx41ydqqi3NH/bKjKPcMP2QiTskMbyyqJ85TDSFnu1pb7Z2L0PJPd3vCCT632xIHhfePOQF1doCfI4dgRlQ51le/Ucf7lW+wAzh8i95mo06Dx9qIrAbdI6y6S96GG0BOKnJnEYaBu4M7N/3jImAOLBgwrNLke5DY4MLsbpV5mX85KC/pIxW1DrWisOEBGWqreYmbxWTA0uFrbX0l1SXYzewT7XxSmZMj6W3JcWPQXxcyy/M+wippxZ3nqdWAijnTKGB6FGrToEhqSiyP7tp4N/hfuK5L3mmWBuQDZGNzs+li1QIm69ld9OQGVIwHei/UI85SghJFI4Q36P1p+wNDV5IdpgWPwGTmboECBZ3RonTsNgdxEEbfk5CdI80pCLzQZrDgNuLc56Ez2ZddMb/g8GEhs0EL4c27LxScOhbf2shrMqB4+TYQ3TEkCt0bdLSj/rto9+vlIvSoRK5Ri9Tb1bGVITxcOApFTyVL0sTre2pj8zb/lIIiKb5W3VXEG+DsGU57XTHl+CNU82GT75JZauDfL8zvTXpuTE1+MVKc/0X7WDFYLmWQZ6McheVHTM+j9rrq5neegkgzMszLQ1b1BVS/3NF2iZvhkTqfHqYsYDrrpb/l8epmKwZPUZrpLHXOrhQfFXCLNDeDHGon0VkWlvYmcRMa3wllU9bFwDzC3f9CT3QWV3N4sW1ZAKcnIa+XVT5WW9x';const _IH='9c41768c76552c5e79d090df6989ac3ca4a229ea93a1703a1406a9e9b40f9077';let _src;

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
