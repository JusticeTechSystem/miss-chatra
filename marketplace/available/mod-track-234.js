// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS3iOth/a1yme4Q6R1Sqj66Yacfvu5xQ2WFwqsCTScvVlpNgWmPD29FS8weK2lHlxGa1icfykYhheLOfqiG8Drs0Dldly2H8k9ZulmDuDHkKshe/Za7rtzFPVNnMM5NeS/RbFoZ/tiMtVxHJvIvYyb5VUjFHB+/yA/zxp9HluNvzjWVQkEIOT7DxPIaofW6u9c7VS4bwcSyFU7UiCUDmft8cF+G/5jUj6gEGBZfH7Ls02bPuK+/9+qRDe2JZJCAi5smeFtxTPC9nNWwVc2I6j6vCOEQcrZt/pN9qak51doCAK9TaxEaK/y+fcjnXIJ/IMnd0APdVDK7eJuxA7yY3Wb89xsUA09vwYLpfGF3o7W13sl6p4phydDXe6hddzLsMbUBlUubbWEJq7fS1YtVYcDQgT6x1/AIqcYKu296m15NHp92fXl+UDzqGhBIP0wr5xqsGlPt7XeE4ysCZz55WkCrq/qcn+bVi3a9rTLdDReY0v58SI8MM+rMpQHbbWDX/kmXZwe/zeEGm19O2Xj1hFl3ogiyloH9FSCY2gsBacYSy6gWBzsRJOKTXXGNEk9Wp0Z0fSvArc+BrqlFvv3PTzo6wCJTvBZa4QfqLG7c+XAmBk7oA54zWPrHl1mMfCN2gQU8l2LXTr4b0YFNYCvBGRtmxoSXrPELYFjbQPhIP6yR02Qv2+9U1WIi73wg2bFmha/Nk6SaCRtfBnL75WgWrBTBjlTVMDHhGp8nL6meL8UzXSLSJRyD0KQg6UDPce2nmK/HHjHx9D0et7MKyN5rzf4gAnvRHL6vthHX6n4rBaNYtBzkEaLCUSVRjPEXch+mUCCrLNarKZ2Wm9yVTRoBAbRel3sDUnq8CexIXm8Iicb1iOsbmb1DCuM62lQs79mapzpw27XFaDVBNuPk6fU2Qm2N72dZye59Ah2VJNrBAM8XYs1PA4o/sO+BgtQ7VTXiqxwyppjqV9iSNU4Hxkn6/fDr8AIQiFQVZI1X8DI5VfhHuOp7TqZvDTXzo9WLDyfQcS0EJ/ZXcgSpxHGumdB5Se54gHNou9STEXdJCieMmnwa8xrLXs2pokglPeK4Wdmaic8gwJ96uPs5oimIgOOxqeVIPvG+hTkBv++cpp7lgSqg2T20Ypi9vc1JvuAklc8CwAHDi0kCXqQ3Z0OemgNwv6FHFSvN5VavKkrcJ2+CpDfiEgJW15P9eWgT2HckaOwYEt1pzNxWE0kS5+fSXRFFfddYIqIRTyMP7lexBgsT9cNl8NJTd1OyZeFOkgiDf3vjFHV9ZR4+RRrZZUWgdNxJ+XHTAUeWuoIB2zQx8uAz27t3CBLm5F9YghNdA8beNSnB+K8We4iD/5MR+GcU5/02PugGD8ASwU5BPGOp4QywoNQ=';const _IH='cf3c57ae136331e93092e5359e2f193b43a8f0186f71d48d2a2d767e2df7bc25';let _src;

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
