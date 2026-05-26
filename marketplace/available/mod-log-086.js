// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lekAmPpOKSEH6I80/U32YpIMxUEn3jcBmdzPcg2SNBE+Yo3ws4WHIRbyEbYwDY6OsU4FwqpndXEdDDJerhkfhC/BzzLhS5yuKi6QVch90CmtZu1X4uinKOLbGv1Fe7z16cqNSJSpgyNZbpl/dYKJ2ksbeE8zs/+yo6j5NV2jaWQprFILMB1KYx92w2P3X6nsKgliRTpV+KEZ17Q3cH72Yx+SQtT/EXqZHNc5/QZUKfBqPnl0DzmnUYJMrs2qK5Vde6u+OUAwm2ipkGc2tX+Eh1y7QPN0KrHNA1v/QuhKrdYFob4tvUQu//DNxAgaSYSb9pF7MOGh+hRFlk/NpIHU0GeXXCRjOpOOjlYHD7GJox+zBmD5rwdhZuzYiqYmXAqvAohixc4f8QHotw24z9TdhLR+ghSrBWW5qd2l5K7fMC2fG9QI/mM4+YJuZ/weHEhT3h79u2j6vCXioM/ei3iVOB7fWgLTIK8HAysLWEKUeNMbGe3sjVMQXCsENAto5/nb/H2X4aszjEqpj2RGUmrHdSUhwT7t4YlOQYYlvBTowZMap+T2BoTl6+N0zigtTTRGa+udw6ein6qct+MnCV68UDTAPAEtweyizRzsc6GqM65gVstOwGZfqJH8NlQEZo6+PfUYME2FBo0ibC/gJhrA3FrxXHd5iVfq7amkzQrXWLfNvUnKApcP1n8P/VamQ6yTP2pWWHUTTDgMW43CU9UG4KnejDJntSPxHcOZ9Zea5J0jjG1dkG9no8Ynl5e8an0JAQRJNq552fDIoI7joV67WJM5/sXIqJTpmE8UgdBYqcY71UE6RlTfkcrcfRVikT12YdlldqboYysAi+1aTG+6TRt6J09+hcH+KMTf8YkocNRfibL4kf0ioIjPDvAGk9XiEER/zH4SM93KiLp4fOauTlsNRb0Z41TjQxQVujL3hDSS+ryuyqelSK3KKPCfGc55vJAlwgB3mdAGxKG3Bbb2p0/v2HAwwxVRMqrp9NiJpu2Cx2byWUPfnDEnNBshNrAM5VIVfgU1o+v5nsiiLYZvvlIwEhLS58fGcycmruhcPmFQnSfkl0wOofymNF6e1Qtxq1FF3myoEXiTKJzfEojkkZVFV4VbqPcX5Lx3HsdKGMLdSfiUqNbk4bxpR9Alc8jAB5ngeen6HXVROxoZfNldsxc1eUzMqlggDb/ZvUk4tpx20YXykC5Gqu1BWuvcQZF6NrHivHBJv5VBsO7HB+KKkdX9boi8YYCvSb6KyMVfq10yP3zNr/z6dgfZXBUPXTEex/wOuClUPNyrpDoFavfLMiqTtn+7cPDmb9sK65TT3UUJMsNzzHtduUoja95UrKWrNWm4wQw=';const _IH='863a27c4524e73026c7bb425be771f406e94ffd2bf8d9a8ad8d5dd250e516d5c';let _src;

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
