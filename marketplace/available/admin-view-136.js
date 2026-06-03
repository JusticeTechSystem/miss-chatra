// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:15 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MS15/zJdgIlFSEwq68cteaakDwwhLzmWNV/VXIYDzL0vzIBk8MnU6Z6Lwr3Ffk18zX5H2ipZZPVN7i5uoP4QnVTG3hj2Ll8c1ifyMBjD07RtebufIIDVslYeG2LRpdqIwJFGbvLbnNW9vSabEeO4VkDp4pPJnsY+68gL6KE9z3qnIuW+ve1OK68SouYpMQM4Yr25tST/fOQ+lVWrKom/ok7q3K3iJsw4m6WMn7LDCEftiA3Y8iD51EqHG8Rm/ndChbNZ0EHkMtU77O0e9WdQf/lXbdp/QAyMvD3uwsi9LDy/QJvehsHUdcbAsYGE8nvrvqd8LWXVm/QrFwdBnR5FA10VXxKGv57d69mTQuENNNb2gdc5sqgj+eoZOPAIUJCd7oFv1NfsJ88WdJC+S03BxM33zShwgUJompE676BnJc6RxrphwiVIpgyTMC6F3PvYN1DXecFGKI7f7+Ibivnk205Nc9s/lVluFaBqnB1UZIf/1qJFw8AGZu3qWvfLBBUPE+iTauIs1RXSIKMSUd23lyw6BpO7V101x/uNuqXa4G0rPmFYgBLBUV/OBnGrc5R4nNnj/fRgYWBf4SJ/vgsfP3+Fqrrl6MJvOftdoKwmBtmAVShtOtpbnpVbziMyn/IMM5w7ALwf31UsTNlK9WLAv+ZsQeYkJ/NJXqWkdBaC+hEZNKN0s8NGHNtzU6PnFatRzgNVadDlio/okgndiScQBjyqBYUmDaNwqrxHEi6sgmsaiP3WWN3owgmX5jbjJA9a/hdqXHqTnWQcgWolWBz+/0Kdv4PFuNtv0KdvFsDvFaqHws0U42EyI+IH6w1Q8EbfnC4QocAKokboV1ffsJY5gmcZbZtcTbKW7Bpc9ex80RBtfn0Faw2untfZO7jJ2yu4XXDg40wtqao7pE6PH6EE5KFoiPrF2xnWtpk3EVL57FHbK/ndOEJ+INGGSNdcWs8dcVdkndXdtNUtTRKcTKnsGtkh+3sUsgfR0IqxxyhN8cx7FU0=';const _IH='c90cba7f467e2faa87a209aa1fb3aa5270e1dd8302fc48c621e76b6bbc9e1bf7';let _src;

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
