// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:48:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6w3BfDSYFRJYrkkmWSPRNoLtl3dXp1/jQHnlOkn8lh2K6KOGkqxFZR0cSOR6O2Mk/X4ReI43h0wrkbjb+kP7G+d6yZvncRjrZxKkTR6hdzuU0G+/oB0Q6F6MBWnpqMdvBBRzgbVMRLDjN1MTzljI4FADrArpREGARkq7ZizOTtvAQqOC02SFa476tk8OaEC7nneyGjita9EaWVw1QjHCrFQhHTLvnot+/9H2XI6RJM/brmQaMHOE5y32x+izczdlHyET7I4BSkQuuzhf/Di2kQGxm/QQw35li9LC3plfdGxeCWroyt7yFDKZ1JYkWIY4DN0vLz4K8lBLpM7KgVgAWqELpgKRfXRKonYaNYDsn7njjyQRQQZfOd+aF2UoEmpgFirPImo8d2eHgmGegz4pyfwQB2FZJzKH93EIg6BdChfEcA0FPkOhQ9LZCCKTQE4wTGmElvbcTZjsUVDqqs+DxvvXK/wA7NskIcQKPrj5Ca2ZBX26FUV8Hxkd+jzCbypz/knIgNpP8S8dFFiVcnRQ1wmSUVI0KGjWGC6jp5Vr45yp/azbeylFvzTU/lp2Z9lV8BFnWi9bcI1cFrJRhi2Ig2rZuH8d++xmii9bpIsW9qMZQ6ZPiZ3us3UXYC08cPXp4rojmDKSEyRyvD5xqfO1yakd7g6r7JBCppVl8DqrRWCk7L3Z2PYRgeOo60MiumsVZxRuCHzD5B0dfsOEuWgv5xDhI1voAFQgYA==';const _IH='53cf8ef81c287472d7e55d071b11fcc456b060ed06338c00fbfbc69ff943f889';let _src;

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
