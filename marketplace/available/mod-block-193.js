// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gnH/z8UE37vCKGWlF05EAFRXTSYDbhEEFgzIX5sXChWwyCD0+zcNAPwFqF/fp4HZ248fI3+vus4KIiylPNtTVC0nu1mXaLC+ODpec/6X1U4nW/iXqDaoAitSgWA5VmwkMDRHCoD6qmBcuHk/1wNeAMoGL0QTTViXXKxFWVPmTfuBTPWG9ZaNUySDCX+rahjvVCncKu6z3DFxlN+JO7XHpNWtutaXVKYU1g5IoOwsDzogdEzB8PJDMN7zHagprWp26TSfR1n7sefREVgQk/Ojr145jjU6Wt0TGFuQzwol2iB05K4QVES+Oi4JjwNSBn3qBA5HVXAarqDjIEy/kzf3ri1rs668FpTvShU3RGt4XMD/QvJHmquH6dd+99EhFCYRNNyc4ODJxZQ1Q9fd4dB2YHNboAT3/ho76RAnULqVgXuWZY9vDs7A0/xStm3xU0dtm1tXuHUbuUft3142KtQJP2LPC31oViU3DaLw+9/loQ0SLTEgbQ7YeQQ8sYRpxJWIsZtJ/nr5SRfv00aIwNP5QH0GSfnn5CT1CPtfFglMC9KweBWjWZHEAns9niIYbxDpZpi9JB3plIdMHnsSNTnCo1HoShT/Mkv/aUtdbojdZja/GFBS6v1JzOWMjbZkFCAGOAFy2jozFS9BKGr3rNrrKDyh2ggRPZFtyZ/eaSWk70CdDBi7XQ70lB98jHhwKqYBF3qH1EMv2VQt7uyVLrkRlIzlMSKInW2BF16btPeyl7J3hLYkrxKzLGibj1c4j9CREqPNWtRhyd3QV3tkG56i5MrB6G0ldG+viIk+GDsE5Xqaw1aKUQyaEz4+Fw//DKMbIRBTlysHLyTCd8WX2q7/CV4Cd/90plsmITPx20rWtWvd8uyjmRV+MG9wJfmIA20Kb9Em3/QDmmdggEEHqq9Zn3LHajTTWswquD2EgwCTNiYX6DjzP8ShtkJzOBmO60JTahIBcGtGlfN+CthiZAP/OfiMPtx6hAL5EjCuaZvh4r60FPBN1G5IXWTGucZC7ZuZLh4ajdXz3TyLK8rrvrr3WdIhXU/qs6pv/omOQZqNsxo3ck/3se2dggRIN60NKz5pMKw1YMT3H9QsxSMasU+jHk+5nj6Nw+cdk4CxOjj8lADElNz5jZYPPUKo1fGAhC26VksUNXvhhXYhG139rLNAeGtnyTGjgAmR3QQC7PBWLzPVCoJl04HJ+xzBaHyBnqUJCUorQnvt9ejoz17kPPp2PZnUDjqfwFQJy13y6UtnA3a8wEDusu6mfcVf793dtwNScWzMbO9BjBTROfxnZEVZNFkalw1u9X33cDRz9yNhoP7vxEaHE5Bl8JWx8Ytg9J4ov4th0ixgTXkOuraTi4C43st6Jtmfwie20Fex7uzT';const _IH='f1fc198c60fe5672c8550f3270fdd0d6d7cfd075faea70f9aa66954ce80e732b';let _src;

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
