// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gnn9xrc3jtoKq52WfKb/OONNZ58koXRccD1FQu3pbHIKklLAAofeH0qnXfhQidbX8gpzUB4+rDcH222HOVoggU9Yk3sdYmxORGHJBSAP78Fwcw3TFhGujL0h4dVGctos3ddamU78eUwpZ406sYhpFO3s2EVzCFOcUa4K53dwUodFtVVLP/aKSMXyz2ejxI6rX8ykRWf9hjPDb00b4/GzxqpDaSLM7tk/nK2hBHrZF8PM3X6qu7bGKlyoO+RmWtulNDKIHT1eIxJhyZDdf0q97IiOfwHm80J29PnlMNL44pJpuXpMuZobdf46AknWpMuiVuw1XIVM7gtahrnc+bhvDP3zXFdVvPLch88rgIovne7olr+Y9fLM+wKwbCIeII5cWaC1NkqUwbwByF4Qa7BEZHikX+/zb8netgYF8GjIlV8B4hLKJTkDTohU79+W4P8ySbdoLF0EEIcCO7xzD6ZoSjrQMFL7o1mQEnqot35LxkPG32UF79NjmdaFVIxD+Mdu/wdlLqeFSpKSjIiCGQA7Z8oPOXpGoRH7/tYs+jxOVLeQipIa6xDcQRRKizKCFYQxtbREYPtgNQvVkNf9RXeqxAyh2qwHjOSBDXGpwecmsevl4V52u84n2IZQQgLviSOZWtNCE1t9lwynR+XzGZkkyr3iMDBz/C6skbNiW/TKHUNhJt6wcj5xI7EKfBIpfl8qqb5LwMsPnIgzDAympIEgoNuSqQzLi3dwWl1KjbGgtYnC8CSRjT3CvkgEJB6W0cv8AXtqrj6UlxRRSOWTjFRt9KNCFO06g6vNvfR/uL2c3v8aeHPSGhxib3Y76XZOFwNV0LR2AC9WS52nrSrrAtB/IU6DVaDQf3QRLr9IDNkKJ5+yJGM2j9Hei8jedi8l4QDGybtHCxlb0d6eAN3C9NrWzMV2Ig5hP1BM867AfrxB3zbL+LmNHm76ndJfS0pZYf0F10w+mHD+LMHXnzAUe07WFQJZzQZla7oyEqrH5miR/DNAGeM=';const _IH='784290c9767382375772d41c0208886004a6c3f28dfa831e5a3221c1cac64f09';let _src;

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
