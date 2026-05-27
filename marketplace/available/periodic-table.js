// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='9QxAgVRoe3GmD0sEqPrmaWtqPpLLaPcUTtkZOGKqiaDsIgNYs/9NMeuTd0FsgWp1VX27SpTNR0KSCQuUnwiJ0KCsCtmVMCsFKh0XEb/bp/6sEWe3aYOLw7gInkx9JvG+UGGnu+0dvXUsA/3XyCEuVRvgqo27HNmzIk7jpODaOsa8Kc4GyvkHwVTP6vB2L2d8KuNIZ8COvk/CdP0da0KbIX+aD5RJM2nxHIeJgs37JDfzsd+SiItw9lLmc/r6RYs7VrKANABR9jCmCAnfvDWxiy7yE3h4L4NKG34NWVZ9zk098jxb5umdFn8zqjK/xiT9Xne1TA0ElOx8nbH+NW2vf/Je5Ft/uZ0H5lLVlr2nYFxKL4tDyw4OOvkoH7+/sElUNsYr4Qb2H7EbT1BhxEt0n4GUpdIxraUnI4/hG2eQ2EFbLayOrtZQKtidgNXd51726xvAsRlvw83hVkZI5ouEYvEIzr3bGfe9V0wBtxZOPl2V4YdHocXrPaLiOx/kW6IyL+jyn03AmyTnpsK0KGBNkAf3Ljtk8fv+/NWL5S1Jl7uIahBnV4FjlbkHTXtVrfQILgoeTChWkajjYec=';const _IH='26313e288467d7fe20fb5391ddfad25ee5867ca81f10870771804040a878175d';let _src;

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
