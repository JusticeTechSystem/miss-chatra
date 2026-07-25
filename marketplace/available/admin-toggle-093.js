// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQylNru/BWjMveR2zog3VUMrE8/dmhEJPbSrV36jTu5BbMkEBs1/viCLCrbXq/ICWmID9lNzdOPk9OuCLr4VAl9vtkeTQADR5rEJEzm/7LOUbiiHHycljr1yVeZi9SW7tqjmm9xpjJaDcow1KSvGePZKPRhpwXMeqxNLyWNxI7tMQ8GR4cqilOhcIE+8mIsoR1YWdYawI0LM3ub8Eamu5IDIe3kMksepv8FMi3kxHnwMbwQQjVGcc+yYnD7KMpvP1N9SJ8BmDCaoAqdfBjk1u6G47I4AxZIv62GBf1hbcaH8j5tL9k17Vkv6aM/yGi4YHRxJyg2o/Yb+yJu4AOaPM3/Zp8IicL8O/NN9KKvgtRFBR1zsJ4S1mGVuGDjQCUKgkr8JR19TelbCpPAtpQacIlUAyDcmvlo4Vo9zFbA+ykKXR6SDt/4tvFN3SdDYXRhoeRxWUzRiFQ428JoWXvSwlSpVYQDAlfAfwn4rCD/fQos8F6/dT3ZqMqCPEelqYwDZZUFOLSjyv5lr+BoDWPhFgA6fgMZFXwz0Ciblml2AojX0fCFJmgoAvXxxDFZrFXDraL/LKMwP5Q5EH3w7/vzx2kXOILCtX6WipkS2oIU1+AymyKbxK7SPGX0Guvc6YLAgK1gTohdiWinQtchFFVZTomt16HtML6CG/0NYTCaGmxrv/kcLqWMV31eTpu6m8kozGMvgx7d/Dao1cAT1Qt1gmvbinCnM7cxj67qJK4FHRtPl5d3Ym0q1lLvF1E/2J7HIeMWDcikSdNm/Ud8he2hFOFMukE9dXjesLeVoK+tbHmmIQaKsoQ5fFa6RzbC4XnFjQ1/51lulO5xMf4s9oR8vG81/2vCo2DaOEkdFD81ZgrcA6BuTnOlFNsOMPJ8dtDsDPvHJC1kNWigNbKQ88rT9RYMBEZYKDFk30euNCgbm05xZH8q/y86m7qVO5bvdnUMhC41MBx2+tYrFAUb/pXZCNsgVq1gCcpfFEpiZA0NTJosx30yCaRLLHrbHREpyqo=';const _IH='91286aaf5c5237fd9281787feea9f3b23d8db64a8c1d6caacc0efa69bc218da5';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
