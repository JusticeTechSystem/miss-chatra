// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6D7Y2ZWfenBZvo3QQoJ3kvG3Ve7FgKTnjgefGOQ+VGI1mpnW9F2HwEZsgmA6AoYJXGa3TrQ9THeWbq7+dCG07iRD40oKj5NmGeAhdyunGpFHI/UF3jGMu4BSiRJ92g5OSvmu2VaLWFsnX/lOY0LenbmyjerSQQc9fsZxYNNrpGalZ1JwqvKKaCRmhhI1dl1x2FwIdQyjSd60Lkbk0RerG3rixylORleYZPSVRqCcEPcGp9tcWZmpBpvKiZfLINaH5dTEcwmS8d9xi4SsEJqaWbxH1DUBdRocDXijvq35l8mfqsIMkpVvdxqlpD2uMmtvRbtR3rT1v3szHNiRxCanmJFC9SafFMPTnflPmYcQ8xP1hC4+Hoh01pnrdQdxpPe8+6XIvTDGxetKkpwDPhKMmGj51zoQFR3cJsVFe4lCtzQyM9Ulb8IBzV1QWvjTWXNU/BrxjHdPvGZnoI08bJsZBepv/O66ldy1BpLlxBCtGqXZ5C6qWNbfUwQFclmfn0VKQkCjUxr+TFGndMEzKwOgCtmiSE3XOebn77CAH3X2PZr1+qK6Ztv14V2tbPjm2sm75FwNsP/B/y2u/g+aBscTUfQejvNvk8r2MZTng0aFrJeyHUwfQ5Cp3cwQA78+ZbTdRNb5RvhbFZWO+c39oTyeXPCCfZSZsD9+8UPJtH7jHhh7ZazGNmEQnLXrCmT3cMATWhOlui5fsHxaamVSRu7Zs6P6Mhupo+w+Uvm8H/G39EZ7zdl8vtEPkHBQmTeeBJ6Pp32cMgqoMwi06y8tCjzuXSYpRrkvry7mfdiMdn/r5lEDD0Z2FeeunEjzNNtzaGf0FViLPVmT2iEwlTrHRab1lbUOzyNsmVaoNmiw+Pp0vahZ5SuYK3jxZs6pvGaEsnNGHmHQ4pKAxL3KdZ9tiE3dzx1hEtOX1mOHuOet2BnwA8vWET+bmBOPW4hHsjxf1S9/eiuM7iSJSeyszVn2FgUKTXMSsMU5K3nz/apDLGeCY3qFv5+hGEkc4dUkbhB77wHQ3/g/zdOpS45BmXiefd07TBExJItwcJ3m+mjFC10VjNAfdtS/uVhjXCJscmDRy/JhxuJ09n9S9Uj0OZ2YsHeBIKr091XRcjq5kgOWZLIFHaK66TQCm7rr/8DvIznYp0JLB40H+eJsXDDZfjp4Uhfy7/hj2vSn2RSMrS/69hEoj3Vkgte42UzbVR/gAKMI/npDEdDLL3CQWdIYDH/OlaR29nhEr7/qlgAn/3coJ63L1A+15KzgjgQIzL8upnILR6Riq+eAxRZ60XMtMuwYOkuOBu/4q+Y6+bkp8jejW2B7ACDdJ4HqRQfv/dbx9ZqWlh4PSgIuwPsWKwfn2A==';const _IH='7529f9ce1e857fc8136245a76e8f19c6cd9a1a1ac25c9ff30836dcca207dba47';let _src;

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
