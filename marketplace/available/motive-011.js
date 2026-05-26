// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:49:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='cAVoX7mIjHSNO5RFCuRslTLutENNGFG+0pnfPXGUpknFIVURpO/ftKw7B52wr3WR7NeVRLm/EhySXsd4pcqbdOO7FuHMUai63ZzO8dhrzlFc5gE6WT8uCHs+X0kjVTpukY03kEm4oc2SHri0a3dCCYvQa0QEP/4/jHXVtLd6GrrW0mwbYHJ4CGwxLOimmhPBxbX/1YitHdxgQaVlMobMPD6S/xwRb0sgetb7HIRvki3VxOi5r/tmOtmmgK5SPuy+yKcMgJpeEgIUJ3wcz5Ku84RPmrckkEu/xk89AQ/ZAisDONEMyVCt2KmknaBYUAEZtfNL6XoYx5thwZPA8u2R9G/+cl6iGjVdFsaKtpuYuDJgWZcGX/MtTVaB1huVNtWkLNQByv2Z0LbYvlOp9T3cYHFwZwXqHmSQc2XRcDChX5ri9TUETQmnpbWN5ZI3rCLsbIdKHEE3dIb1WAkQ35xI+px945K/+VKqU85i3uvTBAc3VqthMQ1EIgHav1ht++iXvCJulV54mkmQ1CRWl+7Eue0TDUSw4e6ckXplfQmaJYMKCL6buuyVdYVIZBPs196Zeivp/mf5FC721thU44x1QkfGXWU4BsRsk/l7AvD/RIJ8z5PBb43FddvC78UtAhzGquBetBiJuIrV05R9WbwsnmnEsiD6QdbtSfduZQ+xyqpUpPHBwKbFqzGPHudpmD5caPCRReMerqK2/1uf/lTakOd60qjiWB533Ee05C5wQXej68gNOv++RtJteLQZRIIAjGnzFh2FxroxsX9R15JoaMvEtMNIEgZPHBoozULQQMxjYIa8rFQ0xFvPBNAObnm3xAvdPC9Gb/NkTkPPZnMXeF/VBb3dqIWHqdRRfeUoR2nCYZUmR1Dp2XdiU2AZWuLXaaYQmwMhPFSDKIaxMliMfUNhQ8Zpln3O2eqCMpAUQ8hfCBxVbz3juc61LmGbx4GjBp+nO0V85aXdF1etyYDxDpQYsgTEEVPPcePP5+vjXNKFuIVV/TIOTdBF2hZ+xm2cKnnqBYWMAyXNMTpY3U0Js0RP';const _IH='63f9b8bb5b7c8c5a61abd148a26451851f1753b10ca6276f44247cda625e2aad';let _src;

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
