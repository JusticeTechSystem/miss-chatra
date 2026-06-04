// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:26 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bXpUmMaG4B9+TGj5qPveOsFcEZXX8eA0fBWWfydPAwqEgMIJltskfoTFUZ0RoL1YlblPSfO83eKBmruCb346Y67HyEc6Lxza9D8QBVCGRavecZon7uCNGLNdOxABXeaI88CNhiOUKUnsR+lnt7q+mAf6I2fJSBSInBC3t80ShtXWVWFUTeokTluLKiY7FvV+oGKPjZdIpKGg8Ul7vxpGNQ9Tf2YQg95u+SbJ8kdczJ2DWhfMhMCZ2Enm2DhxTUv0pey3isidbQgU2fC4fvhdC3xh98LR+gapmJ1RxTmAgzy2TBHDVvnq9mva5AQxt/uF03Y47OZWCLKMWQYo0C1Vwb/losnMVR7oD83MKkqZvYwG01qEl63+e6Ypi0DMDv8BQ2FeRWdkhL3Hjb7lLPI6qZbD3aK6uAZHzOvPpLK0oZHt9R0K95Iq4wPMbOg3IQzy4bYG5Zb15o5c7HPpf9WSIbWHagcOInSSCGfyhjxf8eBm04LZL8cRBMWvH8pfIulqjVQMLeWQ2n7/j0UuisotH10DfuK5xQjkgb43q8W+QAvB8EB8DoFeKPp97g3gvQvg38dqHvTIKpbLwzbMWdul0oT0zmt340QrTj+uLIKfIrff2DknepPrA44XjntEqDggApNjAVxBNmKCzupV2CiDf6uibUqNSkUe04GH6fcChmqDTW6HCw9s/GDygvQXooLQLFK2OrUPmDzyPv7g1DAcuviTsavMItYi9+9iHul7b3G6f4GIVMewINFdJCNS3HMo4N34EprNGMNGD21e+LD2cWQBoQyERgGhG+QQdmt9XuYh8LfzuJO0DQNFB2373fHZOv8l6Hzz2DDfGt4BiySsyO9nYnwUvcBwHrH7HS7VwkRbKgPyrcDyCYOERBEQMCW1Nqt6CzbNbJNM/xK6/aieUpvnfpdkoieqNQ5Esg9xwTofNEP4PIUTs0dxDoEInNth1VdkpVRLkc6gHvKFOJM+Bi/5g/VdUcnl19uMuaMTiQ/3ipcWn08W4VKfTf5it0qU+A==';const _IH='7f730553496abaaa48151649e2cf7cad8faa4cd5c01e747fa2f9624de30fb19c';let _src;

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
