// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSTfSJ0dVbJbCRIvS4vE5jjaB7USxPr4eh0Z1CmZtaXb0Bc/B4ExX5wY8UUlYLGnoRfDTZCjDzcctrGObUyZqCNAzS7Z6NzgMRwzfWU4A+BW8AhHql4O8E0Vtkn44hC3+ndJlEc3772F4UXaOK8vXzuH4PosIUfBR/qWwYfTimq08RrfZ0gHDqy7pyeKuqOwmavrHLO0uBEsLcn4FhK88wTFl4f66ic95BzbYV+JhZ4zG7wPE6npYTLB+oCi9zbO8k9IK+33QDMtt9y9o0F5q4HDVGKHtKTSIqSjmCT9SU7rgXscrmibclF5Pb9u1UIUTnrI8uaolNXgA7AxPmlXc1htQddT4rzgO5YfOkXcLYutPajncbFtx0+CQGFh4OT+Rx/a0raw0XQHd+dBP/zew90TWZveMogIKLzpA89Y70pSZLHPQN/kFLSUPNLSTYcc0tEt5KoGpIGfODtZ1RAUaPlsWi1uZ2hClXogi57xWrWgpRu8q6hD9e+jC6o5Go660jYDOFdhdZ2D6dWVwVNdn6yt/w0y2srXjhr2mtl22kfiLJSajcuKiSOYduzpvMh7+70DfXoF13PVWgCCICqHvC6hjzpMrmBSvOMmaf6VwI9ka0YbrLPDBWJ1ibp2fVWRtBeawm754ws6BDoZq95M2gwWodMR5Dcf+DRg54yrOQbmBs5cQRxZtC2D598B3GTxYV+zTe06R6cQ0qaCbhISAS0UGanLq4cYxScEYAijv/57elOiQyR3x9e2e7GBIDY296IWSI5G7KKiLoTnKI4IZiGACpt4HSiHPd/X+LJSpqHQqDZSO66sDiX3eOqkQWe6bTQhqoTo2+g22bEoOgZ8D2SZJpNKTabTtSXIZUK1VCZ9ZvbO4shsB52Pw8UIJJ64nv0DTOF4yGDXiOFAKVwWXFGI95VrxTYYIPkcqgF7/1jAeJucN15VxDObGk2Thih8lBkb8hAHxs8uGOXdmRYpzZl+//U00ubyUzHK732z/wk7efevY7xdmsNbrpcBql0jKKTzQzJIEEzGxFI54+H/htho8yG5XBNWgLrJItJOiDECDzhpm/xSzouJTRuSQWNQqYBctZBT+Ue+edsDLE+DV3Nft/3/Hh+s5KXggKj/7P5If8NUq9rpYqktL8/J8T3g38YAXTdeNFj4Rd4C8amD7kZIA/OWIFuOBLet1JuGI3HqmZ1nrzz145DXw7wC/JWJM5zKknaxJEvEnGr9Qox7HtIMXVcDl600yZToGb92A+x1UfiELhlGIkyb02tIOjkQ8WKO1W6SM9rD29nzTG+iz0fB0CEZAMDV2k8PBiDZrYkK2CDfFyuAZhXM9GH13AXVgzKjKHcHxl1tREeZQsmtkNWoH5O7kmPqG57K+cbZHD6OCuyvzLxnKk/rrsyyDvt8osT1Q+gyxnSgwVkHevgG75asG+5o14wfbeslzRM5diwPzTLof6J4LgzfOxlmIL6OF1syes6r2hBREDx6KxydNpINOBGCO8jF1acEXQnsBI+v9xrFvuP3/zXSC7BIL7KAatZUjzmFYq6ISZU7OtDsPlSqpEj3kWogWaKYnaALIGPyasFwxDfU8ltUtJQKCsCaMbqtss8THk1ChA70XUa4PwRUSgIXOPUaNO/GlMPIUUScaFIDqd3WeM2vXjeM8QGIp9z7GZ8CGo=';const _IH='d2ef8ecd795f193a65f27d797507c1578c2481c45f22e7ea7dc8e23a6a74af61';let _src;

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
