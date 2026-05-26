// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:25:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EXZAXt2j1pDQiMwhZReJvrEA4MWvxte2mR1tmp3/xPhcfyvqwNDP+gvRsZ/LMnLS7F6UIhjKqzEKFAQc2+7s+6jihKjb6iapZpUPZKMg1so0KQLNMsaROTKAzk4kOebtJiQuXl6rJwWBYvthGGko8+k88bDTRfON6SUv6fex5E0h7PDzXS1RecdXACAitv/Zl0c+Rdu70Ck8aCgQhKxcJo3+9aLhYCshTNfLr59eyXT81++DL/+VFac7MRJyLF/BsIwO4x9TB4KuAuVGN1t6EAP/Fq3LYEiW5Wq1943SEt2/CF5TU7qN6A0PKsy/8vPiVpucvACW1Meb4ZidSSjmkas0Vi25Ut7MsvYHD7vtAYMBmQVqrIy/KeEiXf/OWs8ZKwk0b7LSgwRLGJeVpFamyc2MvncqKlHqlpeNfnj2/GL+iWeiBZHNSgUd20+e2ANgLFi48q46dr7qIo4J1D7Ymr+eoW7EQ3RWi8suUZcve70tj5sBpoWWKGw7+V9eS1+tzlIjj40XxkuSZISRZbTvGqzW13y+R3RrbqiPc66aKiKpGQeViYIL+iHyjPV84fI8teA7ADBiA7oSxM991S8ajyBx48Kpt6tUoqgK3pOKNvcp+YI/TG2HRmp3Ns9cF09LX4InZoEtC/IIJDTJj5SudBtU2hoAml09BCdBMsnbwLpDUCFZbu1utelQ3HZkMGryXcqUvJUW/9b5+V3pmrpRzNXG2E8=';const _IH='65eee6d6ea728d2959b802672856ae55fdd6f7705120311b2ed0be6cd24d59fc';let _src;

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
