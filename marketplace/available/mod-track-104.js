// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SGVnYzhfdKir1c/3Nd30ZfzjAnCPChPR318EdbySATsN44xEQcYssEAg0q2p5sIug6GQD8om37Yetn68u/JDHVdoJoDwV3ThvIEhIiAvCDBlXSuc2tnJrkJnm3Anv1ZpX5NCEwjcu0DA4Rs138P19cujeRrHcANJ11FDFyGLVquM4z9NN6eLvkICwDSSYwZBsn1VKsKl0h8y7hTvQ3nEBBEVha7GLQ8d6D15OtKHwTNjElhVssCQ3TrZr9ngTQmfAdO1VhgzLnqqP1nY96EgH/5h8Brcx0LmHz5nKVr3wrGAerlpJECqgRuOgqWiDltNdomn573348pKoFpXR0KqFGLpq3+WuPDkD5FIp881LtqY18tBcPjBh9ZVoDmgLjMRqq89zF/U9zmkkMuSrtIOJOLKdpv7h8WhPp4RcCpKp24UTZWF/4EJlNSvlX3IpmG9xSuxzPdi3TFXywBC0RiD5h1oyJPTcOSKNfLn0qvmz4ef2otgHvcQ9uXeMV2Dg4/8P37sokhPskuYoQc7tUUk2jZdbAWdW/ivgwulPG02re8szWo11vqmLYrNCr60pJhmIVkYGT1SYEBO8sKIybGmLE5dJURMfyvgRDjgcyCWz1E1YzYEKZ/JkB56GmVcFQUkOytEYzwGkUuN924talwCG9lz6+ruJZjO00lN03MXKn2tP/EhnE16yh1ZnWMHPkv4jxB1PmKSGLSY7ihGWnEi9JsqtqM9U9ugixIIreRAtDTDKdmciDj8KMw1mm205E9ZV13WfKg+Jnm2507Ih35Bd1gzVr9qsnXHnJpaqXSzP1p8zcuQ/RVwchF8pJhmtSpny8sahdptfadPVSBDue5ipVl9syBoITKU+0UkfbBfC//uspxG6eKgMeSPcXRZOUQ0h9ysVWHrlNseBmPHpLZ8Ariu3BpenyMBk5viot6WRO8aatW4jo6Kq7+m/xBXPweI/0ITqQJDDX+6iy/wQp283JsTFhOm2oAyqi5CgmJDCDiqe3vQzSS9S4Ysqb5c8esqw7+KqB7HIUQZsd+y7SVewSOWyGZKUjgIZwk18jTnuaxo6FY8NW9gmoYqpZYHITv6zHAtrxaNXq047GR6ga4IraWIu0ydN36mMJcnIkFvN6J0TID8tBW1xntyhX97XMwGAq+k3uUrDaBH3C04iPT8N3K5iLFXb6nbQMs8UGeWu+u+Y5SnFZDdTsjt3dbfGTIUoKLj87kVQOzLfstSwwiFgNo+lL56nih/8LnIWtL7VBgZjBsa3Nf4xxwu5rK7B5ivVUXZqLVQc3GrE376il+wPvYvDAXD8pBEn5DE10b1y+Z9STKineTL3CHwGUisQCO9SCql29WZfoqa31QeV3A5t7oHqrhoaOVnzzA9fdao';const _IH='70cd26ff5746b92659d0473dc58dd6a99e4835b459bf39e20aefb1089f09ff3e';let _src;

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
