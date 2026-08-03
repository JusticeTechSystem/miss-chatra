// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:05 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQMNj048id5Rtao19A2vE6bOEw3aCondm2jIqO3x1JyZxKH+vttFKv1sSEWU1oQ67BWT+zzza+BhYjPeYMfblekdTfke1V4nDpBOZKp6Dj94asUBP0f2Q+zJnxM+ljYSf22r1xzlXQ8Ye5WxDLQD1qukEbkDLxXuJk5C8bDpZri4vfP6OQNU1RqhAse4paS+gEsOIRR19CFwWE8WFXW6njB2sCU2kzf9Qc8RGwguTxakKkaR3WeSU1kt85iTMg27qrannPpcQoLLVlcYx3V6jkE4fKGyk3fkM1qjadApIxPmbUS4DvWUdQYpD6xu0EgTu+C7aTjmUgfd7SQyLtuIM/f7jFMilWw2AKCo9BnCtl4gLjt3n7pAxnDvQX7W1Ef5bmMGmiJLTYDLEfpgtg/SlwxdK6Q+96T71wJVAUVGzcd2BQs2KcPHhUEUB9HnvCiiXySkUWGxtvPVu8LG7PKc/63jXJSdnXPuSvvNILiB1sK4mP0J5wuooO+OKbqnioh6AOAL/OmbX01nJ8Umt3FI0rLt/qJlYzm+6hDX6bYQLbHlhgyIxkz6jPPzCRIlbol22Wf4UVPVI8eXOnJCXQOHE6e8THCn/gEDWaGPrna3GOuZmDBFBCMSyMOoXcOXTN8HH1jkMkgfUmwKFuhDZCb66YrM0LvX2sCjt5aPWnbrwjy8jFBmFHZhRh5q1B91IXLGGMsgFv5feQmGK+QEPSoRcTTKMEPJZvcgDAj8QEMZml8EKaN8QW8syrgCUs4kgzyiefGzn1snAln3/pg2Cx1dFR8YpkpsSAojYBJ7XzZKgLGeTCs8ku8gy7M0jlqiebGVDYEUbiC+f44nXCgDOzN6uOYq2AMgBtG3UM4W9hk1s0/SwZPkpTgSWyvPzqP4lMl1l0Sr+qnd8vel8hCqgDP53bFLEgLOCY6NQ6YpF734k4e5rljsPvjP8VcgiGCdA6QNwt66iYcO1QP3PHAUHZBVOqX5B8+hI+hHtOPdoYxqU4IzcLO/gMTrq/VxkFVkdLUhyyswjf636lOjHszmPvg2JTQU6TBbxiwTgjquZUodtKwHLqb7pB9PTjDV75Qhw3/A9ToAx9ux84aM7HWcCIsL1X9rdSeRnS6ZX5rh+IFLe5dfWKPMFn48ydRbC3idvHuJ1CJ4hKU13YZHgsYPDTTtUZTYhZFcNu9fvzZxyfY0uvQuODX+G/vMHFqDcdCqjkW0b2kAAeow0IVmGNMMTBKOA5nvIBwbYIGRYuAl/iutKDFHylfw2aMVvxlIKFQB4N7KwYlaiwyjAaLyjHIaJgIL9gG0MA7y0/BWfMRsFlrZEN/Ugq3Ppxt55ycm12abVe2L40EGte+MteB8yvLni7bWZrQJot6xXS8zfAc5kM=';const _IH='255bd4e5353c062744ba2b06694bde6157756a05b289da446d126626f4b29b06';let _src;

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
