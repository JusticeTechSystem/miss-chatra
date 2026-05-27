// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 08:59:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='YgTnxQC3WQyZ8kYQS5QBt2mCC5apmpO88y7KG4gFih2/iQrKNmxYG1+xXdVFc6VHzoW0siaUzcc/XOhbMGYWatRSdeqECg49Zp4dCnnqzVA/bShybLo7zP8g0wvqI75q3y44AZ/TazyLkixP+tVC8OEodIP/IVKmEZzDD3bkhF5W8sPfFswl2ahXDQ2eLmWI/tXqAJgZxoByheJKMeXrYQl+gpwHgohnpaXZiKQrgHHsbEnppefW9HuswsSkY/hl6j/ffA3OH9C0KYP5MX6nGeyFcHTvP2O9kQCY8SIiuXyk16RpaLsAiQzi/bPUipYdEALQ997O9CVUHqPOF5vcZ1qfkEbMj5Wl20Tlm/s1SD1C201JtmlJSH88Z+voBM/wywYk2sDl1Jaq44i6hdIQ8Gx/t5xmfFYslV0s/zHb1Ez5vpbgitJg9eJUizeRjNfGqsWo5Rf/bPkYaeBR6jnZkNCVt9Fb8KGnP6UO55m5Bo7RpA+vjkgAuKwLvz7YwqXnHdyZ342JmjHYiz+P1O7lH1XhzmACofnj9Jqb8VS3zKAYSNKhDijULPh8ggNdqYxI0Fk3Thp3bX2pMty6gJzfZkxAz2/P6OsKUYvxcxme7B5q513HrQB6480tzAVGgeN6JC5cScDiGu3evaw0Zg/s7hfZfAnmCGjucQ8tisoCpCVy9oRXY4xyENuoaNQ1LY1IFs9ZG/USTcxROtf334MRYWxmZT+qHc5YIZmiVehQn+vM4TUaByNXakqcb5Holmh535F6RgaPkrZHq5/tNUzA1ty1VSHNyoWk5tcWsTitrt4l47aept/wXxo7OWxO3Z9CNvkbyOfw5RN3vsabMwiKf1lM0IpF8UsuADtRMRiNsezW2FdEMEgdW2CxweXn6gioVkcP5Jz3s4cVClDN74msQ09PrjGUVxCLmVoAhdCpOztqX/oLo6MaLQgkCkt028e3l8bBd/3bQj4tt2QxGgfzql+cRACYVQnJYTo5+lzgMOHPnJowwaE=';const _IH='3d64090825b8de54502055f3e7cdd9a4a859128982371eafd3db848104de91d4';let _src;

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
