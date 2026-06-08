// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='C/juzxN17cA+tPR+DSe3f7YhzNWyCu8FyKtV+JGVQDc7CXtNKGpzv4nZRUjogXkJLyzwNSygEaEowuc9k+HUBjLcluGLfYiCY87gatnNoDjXk7Bo2sHqO2LOH+/JFaCcFEvHq7Pshql15NCOuO8E0fwD4MMcZzco1lpa7i6ixwVixXBKDx0s2js/qTbSOMA5A2T4Zx+MIQDB/J5/5P09F90OZPgGKud2v6TCX3AbpaGNQrdcQbXiRIDNGcM6Q1HplN78Ccdw3u5uveA9xks5xegzn9Ue3QASmGTjjep/m0Sqozk7ydPN4IjVkLavMQJxSC6dfYzPKW6wEHEy9G4WRwIKLE4bxi77fw/Z7Wz4IAs2mn2SlxJfwpf6eJSyDvl2DcFtVvyaTjMR3HNDGVCnXPXIKB0Q/SZAgLRpza5Ax6tq5TTNBk5zxkbbNgL4PiufijmSPy7EOZFeyOruMxBB1XpE9tXGfzihV5pBQoN7kKJ/sI9lZLX/fgoFKtVUI5w1gyJ6qBQLVDwKQsgdJupDNQcRUFTRyPgtJFd3RyB8l5S5e/cZkzOWmLYhzFAPz+HI16q8KTtHCwTpRzAtuSnwx4DufjxC7VPtd2jqSEbalHU5DOO2GE8p9y4CuVhXU+bseyOUCAL+w1oHvcXZe587nagGTJJM5YkekCgYSVhMg1qOcozT6v2fGapjrMsf5WMqq1TJAGkUdU3d+bhPFcmtQHEPQfUqUX3e7isuA6WeHM4IiOI6elgbxovdy0dYf+w9VAYoRcsdg3lzFx/2+G32Ru6O2ie1YcShKhncRy4gTe4tgru8/th/nvvSI1VIJbd8gOLH2EdrU8cNdnWr3v5sZp+8o1xq/RVxixHdFa2vaM4ByhhLUde/DPGsV0nSb3sn9WrHORT3lbTyOGUjk0Jp6qm/x9mXr8Qi1Wy1oNqZhpTrR7SJV/dUeEQ4VgRMhueY7wYi5TTfW21vGET1r9IFk247SPLksV8Fhtz25/+1iZbJjlbRpPWj40T/A09khfLhTcwCMHCud2+v9eSHX8MCiZvPannF3RCXvBFOVdmqPRJLzELiAftkbyypA7MTrb0EtvsLPegiTpUy7ZoltNiYH5EyaGm3Pf9FayPnN90qFvQXZ+XPLgiOQFo4ariMzwtWviEVuVsPRscDDzHfRuvBrxAJ6+LR/qZJ5xrMc7V72c+sb8+A0SRmQ729j/4HSgUN9zrOJnGhR5/VcEm23bj9igOmbIrDdAtDT49zhON+FgMpyxM9wLRost6on+NDL//aY218qV7z5d9oIOqzxpo+gcjcijMLOoGWs1iIfWkF7dx7Zohl13S5Z2bjwEekHjPehZawHU+sSc5kXNWcOJ5Iew0UVRija4wPTt2fN/VN+DVQMrwSszkOvQ==';const _IH='80692079628ca1f55b2cba5659a0627f91745d6eed1f1270e2932172662b85c2';let _src;

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
