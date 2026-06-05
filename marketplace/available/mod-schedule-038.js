// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:21 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5GB+Cq2lZEuDm0C8ycGcLIRZJBKu/JjNkTwILjJdAdyn1T3SOLESB5LDE2yagbexYc9ANvS3Y8XAfkaaD8ulsWEOp2blf5qrg087bYvoP5hDsFGeQYQ9WtRdaiq+xHbLAjNuWNmSeexfCIDXKmkDlAY6CnzvyKsMWgDkTl/ZeRbAcMPre/nVuDShQOO0ItcZx2oA60dIGguxGODgj72dDG0EPFDAbxndjAcib2KWpl4hc2BPIj6wj36CgQdpSm8d2tZuSlEl85+LYUlBYJw1jR9yUpwUsd3gwGOhtMvcGWEMCrdYiBElt0pHhttEOkR7QEzNFsMwgHLElTmpZHsIM4sE0l21IuXucSEWcErgqyfsGfnS5FIj+1RqF0WAW8R7fN3/yZg2d0d3zt1Y1ql7SNoqvb7N9Nx1dbsZhRAbTRJ/29PKXvzHrcfCpBTnWVr8l/6KELnb1soCdHBNlROqa8nGQnqcJKmqqol10yBBaBdUn9OIiimuo+BHs6fx7cH3KmE93TIx8KFv2F4LIInlOwbvuSVrVVjCu+WXwyeJJfySPeMjM1I8fcCYevTF0bG+y3shEWxNJWhpnu2PUkBv0oaGh21zC7X2FR34gMPmDlpY3r0Le/Vdg4FFYKdA6XZEKJQZkn1xtng5zUDZvuVYfC8Y32JK/n5HSiUqzv8bNW7Y6Bhd2+qvy/M/GUPzHLOz+ftkiCi8Xe6Nq3vuWD6JuPh83Qwtf/ImSODxnHNH4Iv5AG0+2zPL8udzKDXvdNObzYEyTvp8LnQkTtX7p/jHx9OaW6lIL22MECJ7Nc8Snzu4lfGwQ4Vp4ULWRCkuv/sHEIzyg4zOMN0b8w1WxxtRjF2BY6sg/Hx/Tr86U1QXIIZqzzU0u3MSKweatd9OqAQQuaRIHJCEb+onYpidu0gurvo44YRN338EZQ2lRk9FQyyollBew4dEFaaCKggJSYtYDAoNJsQnQ3hjzQAABao+wohw9osN33AloDf343hFD8CSERn4idHSZKiSRUnFfyucvRPN6ygYeGq3W2c73P4LyV1wuLCF4hxUS23+sFhrLLNSM1Mg47ljMu6nDELFRFrv5Ae+/gwgMsImRuqQNG6isop6IX+CwEkZffCaf5BOOQfJacLLMl7/AFynLdQcNqmSl3py3gSfTUQo2ZhoPkrTl3J52v6oVWC6DWEaxZEqG5YMy7UOLzzz+tIPVmAyxRxJRyF4Iw5nMB8vLyQPFkX0hx4nPiCvDRMDrMo8bv0HIXiL8UpjT586MgutMyKCN1y4oU4ViMxdJULEB2t89Q6fjeb5QTOuvZt0WTo2Ccdj3o62Jpe79gGEomGZcBoj+Ov2J2un+KK+mgveNb0HTGTLdlZSqFzjYtrzEWJIQ6lgzNxRJLbXLilQkfYCIS5q6zSMtB7uIQ3ZWQ==';const _IH='3ed0f2243cdab47369c69dea5a00c8773ccbed866dcaa85ee3bdbc0444acc36f';let _src;

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
