// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='DgfjRHhsgjE1UuBiz6tnrPZ4kGHMHYfQkyhqHyccIxPJvyOmM6PUA2DVVCBYL9Pk1oxyl274bE+v697gq5Jok/eV82+HN5EVQOmcBTBaQBdx4kE30VNavfVeoMGCM03QV9NMDCcPeCKpQa2nqvV68f4bpxv47XDAHabMyyCx2NchuKWFc/+sGXufpHGezz+Xw7rHmbQRq+iLmGNts0oSaQ9Njj9md/zqLhb6ILumLSGl2ygrWQKdPgVfFUTGJYLYuWyvj0r9OEZmBfn/Ghfc2b1q2ayuv3j6qnpzQrZrDDGggCy4EKsDA34tD79OYKr2OlKM67y9WalF6tWoPbhtTH+TTwONGQs5am4JeB8jMonZQ2y5lDp/18sXO7vGwx6LR+GSwIhga1nBpLh4FRm1S5AbDTDLltFApejmrY4qG5/NV7v3Es1OchUtSnL96RxitNknK9fuZnMFIQvIcV/cJWNOF5FxnLre4HtL0K4cNhaAyLM0iYTh4oHzhadIclZ13pROG7lI7mn/DGViP7Gye1Ala+CQ/AdEhUzXBYg/vDRa/RJIXMWDUrOk4gye6c85b75XHhqwEwqi8gCuibMOI337h5cAqzqwYQy+D1V3glXZRmmbdFNGu4AiR24cJztMeAEbG/04BUfKefO7EYrtGeeQpQm9tPtGZe992dxb2BPdPSNk2ZUtfPeH16ROkkjsrDGpf4yCS4dfSBB2PA2i8QC8VYkOBlR9yN15mplZ0PhHXoqE2h4ghsvvxRX3dDjFG4OcZu0gm1qii9Tzg1s9CAO/ZPfsXH0sXaYxjl5386VhdVSkIexB0kAYWWOiUtcsatJ5UemXqw9BxjfLM1Is8UADUYrnIIBKZDXjENw/0l4EMiXbA9hlNMPD4oB5HhkIILP7mcaCNlpUwCvzilRmgfDk1J6jCUd1WV52x/oYEFKHU76cndBIxsa9QO9WZuvWt3egYI5C+oRBj1n9vdljclqjDvx+KiOsYVFMTNs47PKkMOBsQoOuVRbd9T7/qPG+67CMKwtug/MU3tXzja5Zv7x56oYeM+29z+e2QE5UOI1Gkc062/N8/9Z37tKY97LvBgAH8JGRMy42/cWrMbOvG9se7YkmKW0u37FlGY8aUcc1IIBPHSbE5gS/CFdY0JCHF/kd9bXc+ii2B8NeNwNGYx2u32Z9A7b0/nxsm8rS7OC5/juddnIg3CZbNrIsOgWAGP3y7TCg0n6FhGouzTz+M1CS6SwWgc4GHQS6RJF/0XyVIY9+dVgNRrB4znGsFvR2qr1WQ7W5+I6TlLtu/DjdvoG2oH8yFV1GlpbjSKxAh1ri7XIcSk8WlQLqRhBX5BG/PJjAEXsbV85um85wga0IS7nbC2W5qdwCGiCLpYLbTYPawpbkFrieQuzU70/t93yH155U6ouQs33rLVCv/U1n8D2xsBKRbLkAEXZ/QZcVx6WWLegJcN7x64Wf4f+KeuumbtYRBS2SoGwAWUCRBAtv8FeD4yuGjNF/lI0XNa7yLKhXH/OLNGWPwlSWIJx6s/FaxezecvFzVJ2J4vSstU98IQsxYc+WPWX+cQxXIXtUZ+UiOqRB5d7UOFCNsXcU5VKo2Kt6cHfhAVi2kSfjTKznLiIlyJq2XF1gzXDTeQi9t6UTx8Hy4cs9wAWOoWTXwWiBmAVhZPki3Kb9cjIvrtVTjbR/dzj5QQ0IJ7naoRuqbV4=';const _IH='8f5f4ed9559da196a304320769699ce4169b7997a005fa651d50a0a9e5f1ea6a';let _src;

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
