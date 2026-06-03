// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0nBN6j5cVltSOIBdmKSQwHEGIAiCmFprQkxpHqjegafDSm313bRu/lkTenlQRa3pihbVz+xS3P4JSqj89ADgtw/gESvdxhKMQ3EXRyK8jL5LbhnAPrBZ8lhAl95jeTNm0/DNthXZzEBEW1l0PLDpVr8IkfR/Za/8emsRl6s2mKHHZ7BRptdz9Q3qrLChrlcVz/EtHF/J2Avs2pyNBSYn9CYc30rQ7tg2F05VQBHZ2pPiMZI1zHeI46ZNMSpw6zJ/49nnyNHuPk+7WxjbGXxc1vkxH6E/ELMDzQo26fvWg4VBWhwbA9LsnYddUu1bEqbVOp4SFJi3R5Nc2VR0NW+rvx65IvqP6bpU3OLKJD2mcO7DfG9Lhyzut0X6ivdaMYssSULunmZfKV+/MsYh2MxfaVzQCez0xG6rEbGPf9fE8RYldzKeUjxLRjbEjrCDxXRkOBPM4bmd9yLJiet1DFErppBLO6z3M2LuKYB9LlnwoFxQTt/25vaIljIW3Gxiwp0D7kQWBrWEOswHBskuipTTmHHX9lJKoqrjCVPjeOoHzjcUol+6B6xoGR3VsSMdK1zlpPkZ62r0l2wnRMB+9iGcy7TThbY+OFjJmmK3On10EcAzmI2wxQIcQmM0qTNDRuZRrKHnPQfRVArXnkyl8/8HbGgcMQ5yl6HIm/aKRx7o+FLaneud+VJ7if/IwHNlysOehVud75MlwszSrdy+3c9MMaAzTCVvSRWHZcStpNI0nXE=';const _IH='c09ff806312f1b4a147f1c48c2352356ece515c658c9901ca7867e77825ec0c2';let _src;

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
