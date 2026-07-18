// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:32 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRtx7jPnaoWdad1l4SHaM2yhe72SllmoBntZ9yl6ud9fXo1zEBrefXYnE543GJoDjoywDaoUhinESHF71jDkj0RNdizdN5BA3vbiNXG25m3+RhYS2fHZWXTK8/kFYj5pA2D1t0/durTmVACaerraPizquOeHDR/G0dFlijbAHEp1ogfQZEgeGynyO0z/KOwduYD3h+wS++AMKo0S5PZYTV5tqSMI/ZRLZsJ1fmon8nnyNRrC+i8X1D7QjAZs3noYC51Jjc/1L8k43qsCCPeWCijn9qeyDkkSNe/kibVaOIaO+dbxncg6z6hMRL03tTaDQxPU8c7Qhr+DBqf9cz4jyLoPvhe+bodhmcuUvdAzLXR3Z24ypHvqDkny1EyQ+HzF16qcp1AsG6WUYd08l22shdE/27/8gGgJ7XmNcj/BnsaH0SbBJadA3M8jUcuFpYLH5CsFZPjLHD/vw6pBUP9vXwcYqqLkmg2WQoVBfkN7b8/NwLPgCjuSnhAiy3wBFCcioH+tvPngLxMBmSP/R4bikGUhI7tXTGewgneHei/SA5qCGHh2l80qSoL4OXdLIyq61SfmzXpBGx3CLFqsAD2nfg5jl42jordJkIG9qLSarbAhW/jTlzIiKFWDtD78umabADIi25w5/bVPxn/bw8Qj/Q87uxMomHxJy6mOAau8vzehgRZbV45oGH2tQS60br8nqfR+tA8LcnIjs2k4nNmCARv0pDG1qJjGzZ6epPKahTkmYrmpA3BykPttogt2eITAwQpkLLGTEI2SRpQb4Q1bRzQsJf3CKSH3Hjo4kxaqgfytHOXx+w45LmFJm2j+/n2jEQU0djhCDKHSYyJM8ojxPd4Q+lCaC+AI5OtZXB+KRbi8C+JdE1Na2VKegH3hHOCRM04W7tKS3TTxpLXtij3NTzC5/HperVKK71iHEicrWlcNsc2u+jc/cWra0pmsCSZnpoGJeZZ9l/1TXtgxfHuKnO3jy7/d763E6zzKrq7pgV7DKFknD7MJwR+zAEaslU2MUpMcm65w3lk5/p+l7/bb0CYfY3uCxyr+NGriwcMXeBnoNvjGSjm936PC00uFktxEXvF7Z4iFdYUx/HZEsuN4esHM0V+pFse7LEGmkf6mv82k36pbpY+vr+gSZw4p4Tx4dgwiJJ8E87A4lg2irnrL5ISol0HT7GxzWg8BheuFqQR0TrJNWTUtMM0axntwtwScu/I4IlTC/1NmOPRW5HEnSZPX0Zg6l5ca3HXi3Z/ncYls3eMBhmdsG9vUEvTcE4LGZ36CtGVy42n1GE28YJMOO5HnEJVoqMNYhjC+CtK3jSpnzMxRKqGbM8ONi8jt+KS4NRfyBJqDOewbHR7h/Pgwyc2cKWHstcBrh1TN8m2IKM=';const _IH='dc79a14efca678c2358b0831dc4f0f3147dd342851819ef6cc6f36c02b5149a2';let _src;

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
