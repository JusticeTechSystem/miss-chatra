// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSDtd8DOBUprWDbu5b9ScQpmvm00g1l6EYYtfEE4McnCpLI3PJFX5f+kS8cND+Dec3Kz5yt3AaYEu5LjHBuqncdFQ1q+y/lGkgFH/jgUGgDJzqZl5YnqnkAaPP4DR5NpJRgYARXFlxsnTcl4yUE7DT6TaxEiXNr62+Ge2WxjyFkmLZYQKAPouw8XhpYS8ON3iPhE+N0Xo4But1YOxEV+rJsEY0IECIQ02rPNeqIQKCBvl/MRv1nd66xy67anaJp2iDSG6FG7roBMRsfSdcOaY0zuwGcOUJ0Yn1lwex/lRpjwzD0DlE8aQrIIHCspPYqIKXJCgnwU16SMm5EAX3cdVcpUEPodV0IY5fQJxw9Q3DLyD3dBDUQbThZTjHSxy81QW+nNXjGhm+d928CQgYhkiLuzDcESUWLY1j/2EBm0ztXKRUxrz60eZSlQZIzYUMiUmbQP2ExVYoPGZdNVuj74f0zaEZDLmf8leaRHZbSCwDKyHNpZJCEIOXa4P72GMDYmaBFXuJLE1j/X8cyMcaoGuXr5mVKjA0bB2hP5QiLh4r4EKS9PG5joqrHMzArD/3rwRleyGHAJf4oN5iMKvxNbxZc8Wd7ILSyIAwbsfhFM5sLCWltczxJshBIFQkuCqKfRPfs0N1O8hPGvkNMlOLtSxSlZkVM5I6PHTHgfpbY9VaPWkvUz18Q7d8BVxST12e4EM2EOELw7F9SXwp4PI9NlkFvWxVvWbDxfRbEQ9SrjGijFns7mqexHKRlJa88kleIwaafqP6moykwvuycoflV2zukw8Tne1cncDS+gZp+IUwg/FC+EAnxWOBszvQX4Fgze+1FPm1AQYys2ITXxJJnQvcaMI/7wvBOCv9d+5tQHQSZUIkgmVxSM+cucQSWOrd0Z4fPLs6OqMAPtAtC9PfGn3KH6jQ+xYLD+RgNeXlgDUq80DF1hWeU+jgfKikABzVXyvhAnxEVpdtuJRt1A92oCo/OsaiYbHCW4pTtsQp2ArQLV3SZiACndcOMcDo+FjPlCRioRF70z8WEVTwQGcIr3f8OD4xH8cfo9mOT+67sTSxNi9en';const _IH='3ea770d5d635c0503e86d3ce92cf2b443713e4c29406ab87e56a32d93ff09e24';let _src;

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
