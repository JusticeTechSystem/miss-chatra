// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3lspq5ZkYUHLafoz2Zm2Q+rPC7ZO7ncMLQQXFPtNqTjDfI0x7jhBEYUs1U05IARAgGqCuXAXGIx2AeToiPpY9EIHBDBlZfK7V1/qpbvGsR5rhql2u1XPrzn7qdRdWZd73g6yQtUKb5llIHZKuxbsVg1X2QB9/MaHBrHVs0tSscFRxc9ENBohVCOMSeL0L6xUTP0bCLrwqf/47GGrn7WEFpE9l33+E7D1jER/GVjsoeeg0EZJ7+WLxLUOVMoivdD0qPJDGoK3bNn4aetm/QkU5nEqTViZhE3cAAM0NDo8hsij6ZPntyBj4AezIMGZ2G/lTdbs3MQlALr4i9sbidSlhEhHID1tUUKA1d1SGkukAjAblJwnMDV+AUmNyl9zP9bm435tF/IBHwe7Tzpxq4Xfw0dXe5vfQD7y8MNo35EnGIHla6dXLa9g8DDM6LiQ2OUUQWSx5uQIKIPYkugBw9BuoADMdiSlpn42KCAMBPmKS2aTKW8n7dSp9+D8YxvvcUDuXGD5pfy9+5jD5QxvDMov0mh7helFTIash/6RyTYWzFvhHd5Vsf29FCskQLYAy/3kbyV33eYseDx9ggV1g/p3Hbslne2bhxUw9NR3PTsmBtxNwm6P5ex1u2PNpxOJ2HbbDv/ikZ3JQVKQA4xV5gOKOih/KrCFwo5JAWavGa1r/i6dWutanmRn6GROO9E6ncfZVdLD1Ae+GNjLlOHrtZorDezxQ6an+2cIQb3l+0M8Xtk/oBfnRANPD9INxWMUyc/XSCX5OM3oxJXrY4kKmOmXwlDLyT0ogqtaYF4xOowD5jAZYJAcN8HGfkyfLyzHucNPXzbnz21AiEa92ltiY53yvOAjHikfcdQUT6qtHHkeplVCn6aGAIHqTJIWIHDR32VwmjzXMYA5oBa4DdoKbsB5L40WEYOOC50NkCwDpyhQacS0YgT7oC3BMm5Edypv2IJK6E3Kq6psWvVcnwQRFeJwTyf82gmst601ky7I1IgrHyGiwgttcQoAdnykzs3FcacFmrQo2RDai5TGS4wgbBjIrqs2UBchVxoKIRCR8L0DpWheWIX0Klwxv5peQrMcD0WTDAeVz388SkqaXXoAydmPMuUadT/OrHcaOjypFwRcgIBdex0rI4/ZcROgjrHejWqq8yyUTnyIVWoMxnX0QFsTXpL5HaBoIE/b5Y2Vc8SoPoKuTaLfMRmBFLkfanitVnDkQEor+3TF+MgjY1LBTrbbSVor6pVQrwH6Q3Xly7IMs31ON0zqIbcF09p+eO2zyPil2o8Kxh6P6h2GPKaUtK2oAu9wsHs4YcbFCmxb+PNUuxKQ4D/n+mzSiBtDLW5IbqIk';const _IH='d535e3a300faea30986b7eed4d82aa926e1ba24f8acb97361c58fe0544567839';let _src;

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
