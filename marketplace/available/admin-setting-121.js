// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='joUbi0gfm8yMMKVFKDDVmycHv0HmMkoT3uraJ+sg3BKz0sgIqPiGDmbY8VmxdIPnva+AUroXZcxRkRHuWJJAHZkujChoGD9hZwLNFUAkF87TCIY95O5nn5/xr3uyXJdk7c2vTfNEHSVzT+N7hbeVtWtVAtrSncV05yBumlzralSfwFoLpGaED9f+J4xJldfzr2xb6/iBqSkMSa24bTyvRSbOX0Ib6MB2hv1pIx46Ioocp14x5rCHDMNSECIEifAMInxUWMziMyb2/2N0GlTV81GffX6dVd1GRr1rsUrIKGkV/bb2GSLk/R2uyGHaNVMPL/DeMviGAnyvcJxvHVHr2iPwBbF4hwl3ZVbQvaiecrVA2daFAXZ+IpRaOyD1PGmPKkTSajnVGNthzWgRw+Equd7P9LqdVfbMmRZQEj2HvTQNwyUh0VnIuyh4zc3m0yHha7U1JASvvjsU3S5V11orjkN3hev3A0c2R154lBiEoFXBkOeTSut/dH5QgK/Q7yCClN1PzkbYGHh5zy9caAlmlABJPtz1hvWlWlxrb4Hhv+WDKSITwsQBIDg2ly8n38pQ/1EApYAuS8IVvG8IExq19XdAL0e806irh6byWhLoE1weGd9lx8GjUWs3GAKAJWUqUcIJn/9u5tr14Pxkldz3FvzeVSVljYBzDxja51OC481tXzbDNT1dm0qZgiG6L8DfY0DEHiF43sjK5e6BMnKPVwTvSGoBPlJNfqC+RnTI1Y9cbcvVsztN9PkNYM7onMcvwIFFOXKu0fFJSp/k26AIXdSGZMqs7G1207Pdu4oyMgXBaepPci/zmYkK3z7znpeqJ5zzeeZvIgn++FL8tIiCetPLzuXEz4ZrllmAVVsOyE15fqGiMmcPyjajP0RQUd6FG0sB/7LEnQovx3+zzQDJl+hLc3cOvhG5pYxJUT98E8aMYOT6f+sex1ZG+yI2mm6GmXUGIcg8Ma0cjHYSbygwVX8b66lWUB0YNERrwxBgdFUYP/eznXHXbZbhGuIdNUcGdx/+ZWpvDIo=';const _IH='21d0b1479919d13d3a739781d13a3bec05115f2ab19b9c5fc4b8a4f69e505abe';let _src;

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
