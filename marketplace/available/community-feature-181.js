// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/7LppNvyL2DnA/x2bLLSnuoQWBDYgVfIeGL6psB4gNxviJ9qGjO9DhnE1Y8EcUv4jFYmvcWEXqnGSSvb3v0QWZcdtWCm71nTEX8QRL8NTqpz71d04z02AjfJ2vZ5LKMxhScrprYkina6q1gMuMozkw6ycF/X5c/67jPpm5ZnISNxNEMg2cuMzZux/L42k8ay+MxAn7ROwGQHGJapIPHnyhlPDEjBQqp8MJGyR8dLRh2N7YOcsufan+klH7xfayF3muyggZNk4mphtfHu/mIYjwdhc+XMgtEeH0hS4dZjPnwwFAdpGM1JJnFXscyoCip57RSkg6w8Hvu275j7ZFuuSO0k5mckymVaF898IMDwfYMoTL0uhGeMeHU0P1HRSHmlz9oBW9/i0uAYiRr+fMwHyxhmDpHGcotk05YEs8+C4aO8rLQ3FELW5J9cc7J6wiM66mIYBj/LAu/Y8uClk2ctjIUdSefnJH3+hksYGwpbIlviieWzBWpRlEM4xuYAZuZJGuF6HJvGSlJpecOs99pKkbHX/U5D+iiHAS84UDB1eptJ4KfnbzJacYvtaH+7Z3AvUixh7XKPBXH5prNeNaITE83Dp8f9fBG6XPOXF0s3Ecz1cjl0vsgrFFNtJmlHvsFePPXy5FJXM5tv2JdKuNCHxC0oLxPZ+15AMF7Qqmo49zUx2LMrFK8HljDrQut06PPN/UPLLiRrMHnn/m2KwBLaJQuLXaHsf9+a';const _IH='420ff9b13e6d3600531d544eae06e1cdc3283a53e3f62920fc06d4ec84bb146a';let _src;

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
