// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='acI+XQn9Ya56l7fnFo2ohIk+a/k99kF+cOpXjAYMBaaeWqGR410MeHd3h/B+Mb8JAGtcUXyODZnTj3u85IkA1X7SAYky2kdDjfmNvn2zFXXGTceTB1k142f2r1g6BSF/Vq83SazP2lQJu2jPnrQ9l8orNVeDEIJHJiutOjQ9yvVi2KCyKs94sMI/yDUtKS75U38dMyU2DoqYcKG4EWGymt3AaqS6IOCRjRAkO/RdQaoPk68wGVAxtXuUiDOMoaMOP1cvyFB3OCsw/QkSb4WcBW4rZVBVc6SYjDFG6KltSjm74L91RtARSHxSoDrcvUcr+Io9/H7QFN6SHjVRpv3N4Ppov1WJTa37ZDWw3TUJSuieCkOoMynDq+Mqb4xCiEQ4G9y51RQRx0TkgwIfLu1YoD30mPXVzuMUeYm+Mexnh5l9M6qLK5yzB7sgTwnx0XyPFJzXvFK4WK1kGB81eCa243Rv+kVIcGwEzbqH3CKH9KFWzHY2rROvFpOWJS4zpgc1obhc1MdJcsxnI41Uk7C4kbQLhliim+aPevmxo4UEPl4FaoT53jefG3d5D9Npg0ulevjVFuHUHfcW2ijSksjpTVxRjZI56yoHQku7SakbULbgoY8UelHVqfbabdFfqJl56gqZnUsBwSATZYjcXyulhi/ZA6Fw3MSVCEiVpRnwnuELr2VnuLMKh97om5kWjEKD+VycYp8YlA3+M7JcZCb89SAPmSRcKi0Nzqn3XOs4AXFn4+QCC7sPKuHmc3Q4hwi/+vX5ds99wETj8H4CNhN2Ubr+s45PIPtft8K82XDiMxKWBkdaIst6uHRynaoMDk9GAjVghI2wshLcOvaCQSmeVYYGebghhJ4L9/KyMqwKsXPTBIjQ20lGo7L1I1knx/hh+45RSTN8xrA03fI6Vnbh/vbRb5ASgjMkiov+rOSe+f8UQv1HHpkVAcpKS8HjeqJf8esT2L9VLE4bXxetqTTL0iwV5LdQnNMwTFQRsnjvJFjsQ/ccp3veG/+GfXQgHOGbKhMQIfQg0jY=';const _IH='65d2df8c166b27a6e5237c80cb2571755df263da84e920506a3ac7d58b475043';let _src;

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
