// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:49 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRroHOimsBBKwCVis6LpkyjhmkGbkgLhq6zz1OGm/OA85y8xWrNrCLqIyg7KDoTOBXce06VGro417urie2p98NSwzQEbzAmIBLJu+HgtB5gZHp3Gw3nOF72ZkSd4q9mDCARicOCnUcuO3Ml7WAsXjGffIlUjcQytP5MEf1d7iSZnwGADNsMvNmI6mmk/GMWr+xtq1cK/S7FAflYHstIagm8L0vWpxorL9ZFcoz98AZNkfm/UFOQowh9F8ko0ow9IvZLmCWu+IXHGmVTYPfxlbpepBE0jfxrf8T1BEG1wBIaBEDRCMyPFbw/7wf5nizMCWV/NTfvTT19nk8Se59lWy8JOm+RlGYao2xE+hDeokp3dkhDL+wXdlFDhautrtCAgQxTckhRs2ozESbrS3pOKo2I8pNlKL2NU9TqfwNVnDDAT12QbTygKILVnSeha1iO36vRbJls9WohXfKrWf3e9rtcHN9chr6SV9P8YizLFrcynAoa41ESmSYR/n4e6ri4O9Cem43WjrqdtnWbUMfglb4OT12n+xFrWn1w1efvSneb+VYBu4zEvp7pHFJ26hb/nWtudsWBLAD/4F6YkG5vwwPbplskIly+eWR7C+9aENcefNisH0XpRqnQORXlDd7AHN1/ZWeWo1QbLGBzg0jedSrPzkcY3/ZnOBcJslpBESM+4PBT92NzY+SkxabyrJw/5kCmfClg2XSsRxAi17kMmfY1R21IG2HXFuzNK4/i55XE3UkOg/vHE98BqAmQXXrcNdALSq4NCIT2CNu7q3+ijHS7WYHkE4xhEwPPNvI3oTRoSu65hF7Gmlw3OrHdd9mtMzAPgkClcV1YER713cXnmDGUebN7vfgL+pfGpWt51C1ar3l+zOsA4lhb/7w9Vgh+q9Su0O8M04nI0BxTNHvbvMmJn8CHJu7tavgAmj4Q8Cysbf3V+/PON1ONqDJ6LM9i64VLZMgivJZFVmA1ngM6o0FiPx21+FXehmixxykyo+rZNvzZBu5052Y+YSsQc6HDStzZi1xdr4v9KF6vGO3T+ahoM8AcCeEJrQ/VHjzY6cRCsIZAoxxULqD7YX2FaCMCRmcCDv+aFY+Udhy2cxqql7WMyQMQiHh1Enj/iTe0xZpZsAgg3qAWEF9eIjvgM0AwYdxzXf+4TVc50tKYcX4R8CrF0VbEjXw+W/dKsjifhMolb6n/30w4gj5vvHSd4qNoFgHp2RfzbmGv3ybZqSwq0r/cIQU6hdVSrZhi/LQU9Yt8xGdnHiNK2b4UX2BHIn6f/lgIZFU5K2Zrjc/RArvXhFOQaKZbph5NxA/I0slp6zCemTx4BZbgRPZXzX32K/WoRA2Oi1jJ5wNfoORSRvtTNaCrne33fM0mgeiHn0nGq6EKFQ==';const _IH='41148fbce4c7a960b479eec55d3dcd7121d000f6feb9b72e2366dcb2b0daf3fe';let _src;

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
