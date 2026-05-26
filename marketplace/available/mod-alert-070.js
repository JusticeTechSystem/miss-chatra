// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:47:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='497ck0O8f0C2AY4VnP/apVoUChEQxH7kvEEyoSFrsjXp/kZSoWunWfn1a07VKz+m3dhHSPV0DiGumJlrwNHNncJ1EkoZoKM1byIoLafXQfD/e1mGjeF2VyMrQKYNF3Ec+ieDJKxxAGYe0IwicV8nEzYc7y5ckfzhNeHU5vqc38cFR8h5Xq9BiOPUsDkF+SV+TKO7nddxRnUh6gu7bTTv5kk9+PH/OTD5k/LQFU7D1aHgQS8EVnmBDLXdNyESHms37IvkFYcr73SPoEEvxl2v7dO1PEISXMBMi7k6wtt5t7YbrtU40/PoaikTMXnrii8OsCmxx7tP4aVat22rzt/NjKeufot99UzMnWRJumIiTcif8ymb2qzsH0gij6yt2gZlz2pXdRtVcAWi8E+IleCXd/e66sZPns5lxq0ZMeBksyAj9BVJen/Pt3K1r+QCg7r/OKmRYE5hTzHGsNn2r4t+sYn4RXUTai7SqX9L+EO3wYcv+4Rw1PrRDjXuYhDq63u9TS4bsPK2j0aXwE44M6I6msyiPfupzeeSV7rwwGNt3ZGwmCdKyep4zKCu3uNPUJfvy3oG6Pz9VbhZbbKHPbv8uGJ5RXrNMlULeSxNfEeGKfRxfLrE9eccFGDU1J0js3SY5UgCdQlGbCuuGfTBv3annWxZ49AkYaViNKmhBCeE+youO9a2znsLY1Yjiw1992puo+px7qTc6bjH+Dtplr3xrpIUE14G0aVCoxUnsCrTe5ml6jX2/KudbVPKDkBWJuVMUycusI1ut90WM9LNKoR4m+Zf0fBZXUpanEgYfQNmPPptEgAdjSVexZHVxVImJ9ACGoOWPtJY0VUDixawH/bSenYIOtvsFJfoSTQ61VTWGkBgksBIKBAJ60UQU+KOsD98VaNEy878m5BAb+uVpHobQGf6GQm5/jlvTvjc1FPeAowAxxxE9StTPYji/waUwUKEmy2NsIK7mSzkf2ibicueTCQ29i1ReznyibQtHnNiPQZyz52biAdRA2o932B8JrrlypcATXLAOEzqSeUmsIsZwID2q6o26uek+zGRvsmvMd5Dcu9vtpnw6B3hyloZCnc3WOYtg9qgpDrax5W2OZsTBNm1LIjml4YHATZPYVQfUAxIx1lm6IysXKgCYZ/E4o0OohYcrD1t7uAiaKxY+sapnnK28s6cNlh7T8xgNkjQFeUPWXiv2JMsk/07JS8vpDfRk2GIejgBuQToXQs8Dp3QMiwJXfNz/ShhJXOPsHlsCZw16LXfDN3J9bM5DPO2Uckc5pAct0yw7kfb+0rNi9yxzHZ7jZZapQ3gjUY2sbSay4KvngZakxi3dP1d5bOjWkfo3uGEp96Sua0xkTHM/YuuaDRpSOfUg9TkFg==';const _IH='5f1ab692bec81a6bf6212fc8b5963d8d4c2379d709524798349cca161b0b3de8';let _src;

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
