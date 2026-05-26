// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nGEaNGyUF6K8WAxpCJJF+xcwk9berbbMMVosyDJ+03ALwjOzqQcPbiVlEBQ/vOksE/BbIgB7ARG1Smw5im0dulVEhU7wqTgPO3/QI0QKpDCQYoN0qhp/ee05+OtB9w2hkyYR8xbvfnFk7MuJKuS7yRKjeshaG2uTxr3Cq5mmMfmFlWN9CrdJ3duyK8JFN/Um/2woNMptXaR4SatMPQs3dyMsAq1w2xj2jpwj0XgsznLBTQI+98sNSbJLRIvlYmqYnGTBsSdzWyVikwF/MYg2Fs81gEv4PoOIHLWs92HnDcFNuZIdjDzicRZ6DRBbCAQA+LLJyob/9enHsI2uO/rnoBq+OwmZHRbD+uf4pJEfhi5VINgpiP2rp1JN3yeEC4uIunHcUnZx24nOZ/2H5w1+4bZSJDimKEdf//9L6uw10+DPy6Bc60K9K47G+HW00WzyJ9QB/ay2CV4+pWkDmEdjFgHyLHMhW2wQSmDnegmXRvvam829nWsQcz7K/V/0cgD90epCGhC9aemJ44NGYogi5otUgsKgiowGcV9bXKoHkJagPaP1IFO/ZLzfffpHytaXG7oRLPe4J8whymjNNzwmUmIVKu9hzBnom9yy+gE/chLCa5OdvHinlc/1D70/XKSJL2wqkvEHG7j9LLwMNFHe07tFzje0ThSfk+njE6Nxp9uPlHhT/khk8mMQq58KT9a1LS9mWUCh+C2wMRf0iEc4ob2CbG+4DQhS3kmP/mN4VCnR2w5yLzROpWlhFdm94i5ygyzxla/w6jU66ZSZKa44JFCdhhvnirMQNOO0IpuPL+aOEIhNMXSpJaD43uzUN4d32tqJbys1u6uceNp8Xg2XceBKpP/blf41skthAHE7ZrSJuRk3Uo27RWnCgigPSdbBmXNEPjgUnzO5UFxsgnGLhF+isyBYlm+WS/+fr+I+MWeO+YFZMunpmxZeA41/IduaSkqr4CP0y6WodkcSTgWTwKW2RVovb/roysK3apVDLpQl9QYz9h77f9QmK+9IZ/bttm36LrGNZ1adC5vZ7jHgCG4ErJLeYqTrgPSUuWnOjwOn8rmETpbAdrbRRvkffTQvhKt8iwXwH5dK3A2SHnVmNEKMSbeDZn8zuoKTg2XWLFjBIUis0x9eaMSZMMxhQZtAZhEmqN1iRVM0MbviTuJYCX6iRMWpKgMJVTaO5JB0h2kwN8le/k0vugrl+TvV5F3w9bbQ3Lc7HsS/PBX+uhk+tcxoyFaLgqsy7xBrSeeziSOjkFuEOhoxV8R2w6W6GwYWkIICV0Mhmm4mtapepGXOuUMtXfild8ZL6x8zXeERZC2/fOB/o02DG4SxYTjULo5H0TtCdjal9b+Pn/JMhomKNr7B96BwdP6uUzHngmmUXGnivd+YsBQvsA==';const _IH='565f67930a6dcd797e4dabacf92b9b085e7e2fa7600668948b32360fd8cfda94';let _src;

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
