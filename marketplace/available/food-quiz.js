// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CLKcR5wzPvl4u7awOyB/o8IFAQdo8xXjbCNDeu8qoWf0ESoTSlcVb1DLOp4nPY7mr5MN/c7vtzhDxSFB4g64AgyJa5TtUUBRwdvsKL3W8bo62qtqqdBZwLUXwcm8ONFTRwLcFpJl8IOHt4ZiggeKO3DZRZvQiAyKCpEzHU3TXOMK4DaVRqfSnKXxQchBVzbw9D4K3FzVjLXvvBcvmRloKB5h+w1fG3gKlkGA2A6LDrZnBu1AkiDp1vGmMHjV1aNgziTvqhkFEWmJsufx+3HJRmiL5pkzDG0IunvLr+446vWROJR/QAXeSUvv+MduFHhEZAwq2qjuE9Uj3aFLbjvK8qDHQ48UR6MFDHa9Fi1vSJyCxr64eW79qNOjH/su68ycfpuGL6KYkAsaqcXoFUuBi9SeR07U98Xo450RZ0OsGbfMwtjbodWW5R92YgjUv7iWzdRTLt2ElLbNkXzTnWmC6oL1EA8DQwJJOR0q2mECAATSuAfEL4lf75eufyuOsCR2QfMKyMQAQetGKKU60WpD29ATpJ5Xz2ZXAH+5GtItlFJ7Vd/2FKbYyGnVFGfbiU8OuKhwKtEhLzf1ZSF4hPKLkt6CR6J5ZUZtvU1yvCgaa+eU76G52+wK1VwYqVL4YetDEIH+ERunHtLhCBEFvyTqgEw6BCfCdPbrzqNc2Q7p5gGSkZLMm/VlhRMmFcTkguqm2Bk6zaVlEDVeRzigNp2X0gZZcDDifFWryYxlgYTPh84UrLmPZSCny3+w2zYsIzcITCJbuQrZwGpwhLJTvnO288HAQ2lyry3EO8CGbRjs7BxcswftCTuopfmI3YO8zqT9oDcB9ThZygWnoxua+E0UP8oS7pA6jMPhuJNi+Votmiecc0rfKRvVKf4w2AWLzzqEP1IPtLixf23Qj0Io4yPCxXVSHxLapxwsAlkspGeVu5Ej5ThWFCwICO5lfhixw/ciVp2Q6ITIQePCRmoJfHGs7ZHkY5IMNQFb64NSijG24uU+K0dacEHElbycc+W0TFyFIKpF31u+FJYfVv2kwTs7j51EfFoJmweXB7LY4vcBqzU9zqUvYoSVvKj4N+40/6g0Z7ltKSYznzw0rGtjak/Opj45e53H+GyvlybONLR6Gq0tm4ztKypat3RpU8bm3dn1Y5a6mr9EbU9Pc9l3KZEq1z5GpnXjDXXUUtUr9DG9OWilAL1+86tBY//Jj/Bu0g/Ygbac+O9TTXc8NAuixskmDVerGzAM+xSbHSu3MrS7+V5HN0L4kxq0Z9WCt27XT1zH7NvLeWs3WXi21/CVUUw7kxX4u4Yv3RBynWn7kENzxG+fRjDYB5C8vZu/Q5YiarstX/6DzLxta6PSiGJrhhWoaauGie6dIXVBPPBpYRsdfAlmChtdfg60gqjrL/kDn05QXZ04+zTXAilgv4BdOhIVW9LiRKhuaMyJFt3NLQazT+4eEQ9+IJpNSw==';const _IH='fc0699f17a68a2b651c2bb2049d827c54781658cbab9074d6ab3826384b66425';let _src;

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
