// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vlN962dvIcD3YY/tidgxkIyHyV7qTy5TIVo0UR8FQdi0eAAV/Yp3xabHZKOhLS/ETD7mlMIFqYlCSLNFHOn6hvvlngtTapuAcKCC1QujC9T52QYr4hxNEVGnXFCEG4y26gdEDV8cxrGJXjd4R2becxm4ym89eL0IioC/34Dm1LflsgpmYJOuI8TR33y6cz525xMSZChQ6s5+wzukFi2vXH3lMYjhR8sriSgK6lzfXy3C+8Hna2f516khQIiNLtcFaB97uWkz70mbPO1EHiu2NX0BN4n1Xd934JkYJ+SuW0g4PfcZk8bNh93aycM1B3c80ZX+vC6LTHVZy+J0+xvLFc7P6OKj5X/Ss3Cq61Sk1lw37ja57YjcSP/JytY2GOgsVh4UuVNpf9JdOainbn2KDX7khRyWzjbbaC2/mRHW3uzwkmCq65C/aeoravVdQ3G8sCt2aVIGDklS/f4De2/B0h+aN4oOhgVKkNEey9PgQ9XOLNyAa4kzxgGSkyvQQ7cERjJNS1J6JGmBD+U6Zlz1b7bpAZaArxJC/XRazsBMjbGEAlDboFuuJcukscyxOiaFkRyLTnTwiSdkr1+MKQIZ3s56vqrX7zSKSb3Hgcifex8L1hoZb1vDD2WKcuvJf/WAzaVrC/KdV178e5hxZQKUXrYwKQj30Hnds8YwllVGdguKuzNKybpB1Qs5P1fHVEMjp62SSrLvkIU0jN4v1REeD+O2VJtLIKhDvPPxpnMSbLcaseODK8lLg+jSVDHUAey3rV7KgpzR8rGN7TVF5/lxjXux5MIbe5DeG4QNU4Tj3Nf53YUloBRcgKoCgaKCFLt+lf5IZrAHy3qpJRZdoEmCLuftaWiCUp5J+3xqidtEgkscOnCDYlnuIog7EJPVzaVPqrk6XlfoJGYGgKCaKFipuQD5DXPw9ahs0Xc3+b6uFLryHuGUUS+lCSBaaeiGjNOvTTY9V9ZpJ7g4lqaTKvD2GK3+KT+Ifkwohif/rxuFqOncy+EFHBElPZ1xHEaC+JL0Rg==';const _IH='94dfb253ceaa51bbc154fc2d72981e12f40d20c6dbe774b977237cb319e9c5da';let _src;

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
