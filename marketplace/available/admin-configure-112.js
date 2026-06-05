// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CERFCOeBrLuYAjdorydDLlDpMTWPxZgPCxpv0suCs1SMyixBoqpWGdDtc3TmtXkATuSrt3PaMlLBStdXEsVUqg2XzpJRMmTI5rHhjdtnbIN0lXU3ATqvwQOXZ8O+AE4eOxidlbHe6xTS8N4hw20WCIZBGBlFVcG5sfBlGkzCzsHNStIEfQYZnFHotzd881GufP0/zsH2HFMRPswT+UUk4vGJbqz7MzEcZQdF+PiH0/Rm80SQc4QYiRsbvTWo6/vbrKG3jB3tEQwh5TAGHitNfzSasHVOvxXM876Yua1ghBhCXWNLsre6gXhio1qcY7TPO3ATj8cHkACPGw+fAGhlxpInRewqN8WD608fRatV4DU1kW/mavlwC8aQI8Ra3xyHEd9fQvAZEu84jKtUNjDpi4fWY7otbsNcCsXE5gNRnRoM4a+QDbpY7mKT7xKIoQFHWOUVWikybOdbUMhOAdtkE541PTCfvCpbOsLalwHN6w1eLYYZwd5PaA2k6uECFoMSiaWJxmVJKkPJctmuJYi8wAYFZARf/kF28Fq/6r+N2VD0Df0DGejVBMhQ+Jsb5gkPiFpVD8DhUsGBsm6wkQ5g2+oMOSCjbezXMb2IN8Kmb39Q0MduEsoOYsa18+LGqiAocYwtWXCfnvZt3QGVUn+oYfj4+yAZOxcCylWeJSYh9X5Et6Zhdy5+2zHhnRVFjgvf/AWyPZ5PLkuk8GVwuqlyw8xM5dCL25jyD1NlKz/lk+ABrx1y4BFSMMlBAhmXuSU6rcLDRoK+gwqgCxGBbSD+fZ1RjYdP5KaFjpCmiWWJ0uQQsiF03Ma5PEgDia22mJubTbwA8M4fTU0i0c4hnaJtXrj6HqCbfKdPlgcgTDO7UBCfLr0p9saNFUs55RPiQdGlPgvvliBHfP1VVVLA9HC58ZDEqlpl1YaYwqzUtL+XzqJKGg7BarVqPBsgyp+0k+YnOJFK+OFOe7J2gzZWB03R2ryevB5cMfkz+G9X/amHWiRqyminN3+GT/oX0M3wcBLMexKIkpOCcFUazqLVGWyqoK+os9BMsA==';const _IH='53f497b44a9add25985789a963b4dcf0383a587452f980d6ef6f3ff735e4f79e';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
