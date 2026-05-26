// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:46:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6ZeaUmcBtBsOl9/nV2bcplp/KwMt7LIYcj/XPbmspIcg6WfNkhOyRclX8JznP4sNzU6Q5PzitCMob+CJo8W9MH7Wry59m7YNf6pVOVRvydpxaogj7ZUgi4AM2mdwuNjovr12FSUf9Zc6dP2232N6h5dJFYSc7f8S/gXPZ8DYdoDHaJ8IcMfyPanB6gDxOod5C/TkmExCMTD4bv5hyat+P+4w3JXbASqFybBvlvCqU2yTL/+O+HBEvQYw/fXWDlV81tN9d47Jc2dEFZc3AfUDW4wjy4Gsxki10WJF5cZaIGOzDvZR5KiUe2+aE+MwyRR0eSEvVAm9HblnH1ymy8+CKEixic5b7amTWQP0xdH7b+qOdUmIBq35roItdOwiZQVi6q12FBqRs2mwgsGPe65mgxLDKH9AvKje+z0Q9AEAJyIERQ7Tf1wmxOb3C2PjhEnyL16/rlJ/VuRMTAFK50J3dntVdDZMgEiTpZotWQSlsuSsVPGKxC0qdOdfCyAOaaDGlSCaWvv1t+I/Pt1NYLmI+5OnUYJm0SGbsNG1XMqYlixGXOo3b0VmuByMe3fzxFlK6sxCggfAMiWMhOKqHxaya6i4fxAPflBAengvbdBrgw9fxhnSGKouO0lxdjvgDlHPqIPqQGmE5nf3I+tpLNvZsgjGqkKPhRUi6sNMWgx9PwvUZ6XuriIa5GW2OgqUAmaJ7WRGXPP9ylpn5kckg33uqLPxKiNlMIAt/tZoRURj/wS+Umx87j2n0A/udXgpCpi0asjXkX6iBkB8n53UIBdlX9NNLC/r4AnJrZLr2LSu+OGoHTL5/DEIZKm5KB973MrZjvc8gkrPjmFT4V3aVygOtNMuIvDWlOHPMBsPMiaepOU42w5TJ1MYW5hz4yIrFKTSMl4DnJI+1LcI8Cm1O4UhzFtwcR2HsBFFm4bnO1PpaE644ZrHjLB0BjKfmmAM0Zz7PT3IQIo8UyIzQiuQaStkWS//uJqhm/fvDWSaYeBc3boJDgkK32CbkCV5mpMdugXIA2ZEblCpFFWY2AkKhcB9fC56Yb5pYJkPQnrAK+1Bt7qOodCYgV1dAG1Nj5FRQV5nFNcl9G06jikTcsiPLMw5amPcb0JHOKgc70/B0y7CePUn19xXh+vG7pSPXnhr/r/2m2FrZ+YVJXKq7tLofHljTfNtvGl/+4zPSdLMG9PoRM35C8fk1nCd+yRCJJpFdzEzN5lcvw==';const _IH='7372a1e78d3ed68aff93ba815676fb64de0c00768f7793ecc6aa29e9fbcf7923';let _src;

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
