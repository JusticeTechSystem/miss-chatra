// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='7wmiWFhH1jDLgh+RmdUXhtj2sVoxJagMhittJb3BB/gRrzGYfDqT0zYWae+W9Gahk79G69lu2tbrWJ6SCMn+s4+OV5WWiVsoPUvTvbNGFArFpwSEvCUOqtJbHhqyoXG243sVQBGKegxWcsaSddE48KBs2ucTciLi7XeTphbM4iAjFC7U5IWzAcRtIrk2lyRebA51PDFfu0MLex2QJDF+gvAFPKpnhJqTS9GjPMxGcCqvcno8522M6WhQo2UHT5vmBjepGbwOvxOsMR9tLsnwBaXtgWfEFflHE/5oL51V7otDCz93Y1aeR45zMGhCjUl8F74/7USZ++qbrIAD5GUgpvCNTOCaoW7QPL1PrKjBaLAqJD/Fpu6fquI69r0JGtoaxT8cAu7rV8/TPdItbOv7iqTPzQ2FSg8IQx+42Bb9rVKTPjd0eAykTyRqOqTpiz1XrN5ufGJzPczCnzM/e+eh0W20rVkO+3vi3EWOIBlj+0JdQz0R+Cuiv0hnREvPLgK+kkjzj78rwY9ME/IDuKcmcJIJytmDLu5QbjoY+LUq/krGs6QayY9++pMOy71OgaqrnZYagdARUp6AO0rCoEegrY+QFTmCOub44QJARqzSXOf5PCQuQxmhbZ8dOv9lLBG0B2cqBCkoMm2pOFv5wdKVzEvL1D49qPPa9sNh9MqzR+pyzTmlmXoyfoK4ddcmUn/O6ueQOyQrAoHDbt4/fAWBAmR6CstwYo5Nh/Re9tKhuvH0GWGbvthNPeXDL0T7LerhPo1OIJtNy9FlY1qZpntzlmbtHXrzRetV3PzMEzPai8bIvFpeLXuznr/4oxFbF0exNrh2LMFUQ64RVqFmZGgOVACFangVHd/i4gn9K/BZ3TwMdqVr30L6zusm4vjgZWkTZPbC1FFu7LbnVmXKqCNN6FcUnyANaW4DgWBjtyyIpMrRBmg3aJS8aZHu0XXwlxrdmGfFmdnsy+4W44YdMdgS/f7tT9AvhrIQsdXb2nfVX5+pxsnu+bPWou78CywPdxHGnpJidy560YzD9WFLIBSYs89DG0m6OJWiR3EU1424rXKFF5IApV2UYsrjepIuSVHo6FDSHNCbKjBz7as4RT44WaKKfgRzVJWB9cIhd0mVBNKP+KxqFd1qK/yL9zxr4rwotxgXtRtDIeolrkOLDcIzesKLYU1QFYAIF3qjHli4AXiIA+zPV72OSWAwjjN7RUAXWSshHYIWyH4qap+6mlbWM96yMzWnl+nKl/6VEyBu35AEOLT2/eUlyVwBYZE9qiG02mGXn3fozmAO8ePbrnZYrPG/zr7VJH9ZdLhMAETlNmhH7rxLr9KavP4baO9txpe09YuTpezwLJQ+oov6cpKvBCv2OcdrkCmSFpTF/5OTzebMEzhKhuPRJSquXOb1RHRwadhz2ZGltGzRL6YIqQJKTyhEbm0+uhdW65Nw7bxeW+y5KabOYrpmn439Pw3bMmZpbogyga6vQw0MWlpJ43CfTnW5sOcAQC1iiLSX4C7roIASsgpWcpBjKWwZbiq9l6pDycQMjbxC3arZhxfSy/6njEOsHArdiMwLEjTuGawlImeIqP/FmancxqcW8S2W1iS2KsrF77En4f6BKPZEBqj2b0ZGfqNVzbR6OsRrxrogcHEZp8N3GN15v7h2qWqDqVw36NlTa9RlLvdqFGexFBT7wlwsAjtHIHr2NG7t1ZgxcTp0CjbdDcFyfJtfYC9k/hh+eu8o+JsgLD6d5OG1qnZGagIRNaVoHXfMHhouOHnFdKx8iHRd3PRsCigTNASaHn0u6QwsH5i8ga4L98P+jS5uOnYQfwa2st7HdIdzMAzGmgwbjN3ww9AZiPB9sTOYe43BUAm4ar1KuAE5EgW1X6unGsknmSwy4IeBeIU7EirYvjv7mxsq6g==';const _IH='90a4faac90b819fd15c7f7fa51d23af3362d75ed2142c12916b5653e90c15cc8';let _src;

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
