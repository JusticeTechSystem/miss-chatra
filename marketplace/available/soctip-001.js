// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTd/5EWjkaMvme8rp/YP9HNj4GxU2ve6M65qvFC+0RpOOXn4YJWLbhk+LT1mrI1uHiAV5TuottYCKiH/VPRPF03Y3AXwtZHzut6xPE+SApNBSbNCYGHeMbxC0k/epsHuMCFxO/Ru+li5Mc6FHILTg80wveREe/MFpoKYAlVW638H8CVJwE3GSNGhhTQZUzg/nGB5FpzZytDercARgwe0ZyoOPGmzcLeD7dMTdZBWNE47njh+mNhKiIkKPAbivtSUbXdV9LCJ0iqFOu3i/0TLipfN9+QGTD1enL9qzent4MT9oZWeB+x8B/zzGEreIoZkGgOrZGrOT5QSkMSV3XuJeYhK6UaR8EiklAmWJwSRTJFKWF6Z1YzIqT9IGGIbZhm+aupctPwoXzW7cZFcWmmhnzGbQdnNa1zNq92L3a5rledjURSdN7PxjVXc4i0Tg78lJVtWXxsAYfkzrugEk/FEqq5ecC63ooueBZSMBp38SskU0qTqx10AoVN+wW6v0YdB6D6TycQsUXpkDQ0x0vJnZ6xqNE1BqFACytS0IbjCHxSlTJ+ICrFFsK2cZsaWph+NMYgrILxvP87Scrgp7gOeKL5ByqCut9OoMgIlUVuzDdqtZTvJxiNtymYNSrreyJqlu0sTpidLiNYLbmMSKXTDawwUSi0XoKowl5EkLtLYDDQPuFO8GlQDg9QCaQu3nOjMt6efsPEw/jUGMkAP8wd6qdYdeEWEyRSgXOOqi47Ik8ynaJU+f/6gavVwGGolBqThlLNVTQrJNcv3N2MAfjEEefVKSJZ8ZVsBDb4NF4X1cwrkRIvUtud1Dn7Ey2jlebxVGaLUkHx8DMyCRznF9EsmhhTZSQKXKn0l3prZvuSEBQmzjEFaVwtjl7gexSNE/ubsTce0CvNszzQkIlt7RcCY6ms2AT+OcmLvYx1NNu5nFOciZ8FVQFldCPaDLibYjTDpHG5VZzwmu9YxQWWb1FglbDzIE96TxOSgCQ8zIKtyABD2353G88TOx1B17aBbJxQFCVDLYfOKe0C/vrmHdc6uqC3MvHSuhfCktQLgg5QxX5LeKz0Q8NUDsxTwWvRiee11L30anv+w02igd0Bcw==';const _IH='604829388afcb3d4d03c7b8123b895ffebb1a1930ba942e00903c404ef13a3b3';let _src;

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
