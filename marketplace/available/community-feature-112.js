// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='nGFOoDGeV6wwG90JbnjX5HKBL8heblKYjK9cyNewsec0FzOTLch7Si0fMGQkTAd4Ts40EZCxWFax1Z3skdZbr4HxgzmU3/Ov+RLq9+a+x6UzBv1/gElgKD4Gl9GOkrsLseFa4bdD1SDuO+7bhLZm7OB1fJmG9I7/WvSukOXIE4YYOrdmc0lJ3NmGUUkPBpWuC3ubvHb5yuuP7bKRTOosAQLD5L1Or1oUfPzz5DYaNwf9h0MeljRLw0tL0ldVMmDMls0+aaYfZlmjb4dkFhLi/avqZ6C+U53Xjys5Vz7ORaPm/joPyL23BKzTLq85uY631QzJzgMMKZWqowIjlriUJuSL0Hbpkmmd1PF/NUMolJSdQlDTlDycXp4SpBvf3dZO94TVLIXY7TuZVRrTXBb2wzNFHRD8Rrf3sMrfD0r8akT+nAJ02NVtHb9eRHAb84bqXapmWee5ZFs+QxX159o5390+RekwrXS8eaOod0zQ3/RYof4dRjCZZat/RGwGwXRHPaYcJJdK8d/hZmtP9xRArfUAzGLwmgXjdHB0sno6gn4+6Z/3AMcG1zJFzD3ldG1c9RQg7tCPcnBqQawrY06yaDKaQlj4xxVpQGWULJ+3wqDCUqGfBz4Sp3Ju9NdglqGQFwQ7QUP6arg5fMAAOL6TrL7yoT6AnjLYxMTowEIF/+ki867+DCOSWX67r7lYI+pXyLtYav80JI3+AowZv5g9z1yjNLImygj3WuQC7ft0nqMCjpc=';const _IH='7ae33ba09dc25a66b2bcfb941c364a22ae42bef460367c860cb236e58b80a0b0';let _src;

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
