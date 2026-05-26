// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:23:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='i5II/HXn7UjbLMEVACRrA2qExIxcgL4mxVuDwb2wxpE5aCbDRZQLJTnUn/lHTsCMw/pg9X97j3U0KYPCBCQ7vk3p24kMjFnIxPlTaHTtnbXw9BCJE3i7JQwFflh+cILdacVZD4BOVNY+1uVC9zvAHP3QUIsmssQAwR1ocWaS9x8coqHEN/eMfUc7Wg6gktAF2LQefCMzu5hYLFRBFd2pY3k8uGxkKkyWb4fRJc6+6CZNNtigvQip0n+vEwoZTJGfb3Q2zV4VEdyNONNnCwdtrr55/mm6FAy8oBvDv1KQzweAdzHPwzc1D+CQZlvrU/kKntE76WwMLlo5OYNKRgG/bjXdwPRzEO8xncRGcoD3UFzfT3EFnDyB0YGulLtEc5W7cTy470YYrD3QvQOQaUD7ZdSsGCQ2BukkFMXgxTEnNY5m5djLVOs1jMMj+1uQR2303rbFPeox8BQ+VGBGzK14IxCrDNC+5pMHLdUbGRl/IrHaLbcj79yyAgb6Gp3WcmPLNF47Xa3VCVlEHovYRCkBlIVKe68Q5FbfkzKHzWonjNnToL851mpo2pkAwD5ldWmq2cl+FbqOZKiAv3dRCNPqj1eROTHAzPgVzOqZgEYLmfpyolCalidQHPHUGlYcmDHutrfXKJCJBkTGRjFf+2UduPPlcr8yaQBja7j7O20sqo+S1ZrX6ifJHAJJqY2I2bs+SAmVmeK48ufaF72u9ysloFrMQiNHwmyc8at7RmfYYSA2fvOhGE3HrHY4oWbmztgQpyijoutZu33bP9Cu8ytBAz3m5+esfjvK9MuMNWzinD4+cJOv8Ii80jb1WwHy9uXUr+gTjM1FopGc+Mv6kdh8HRG4YDT8LAPTUTFixpuOkti8culP25AstVn9BOJ/VqzDrsIYcHb0TSYtuV1UfKN858yK3NyRWNk9wnMr/PdRG62wEIGeoNfi73eCTF1FjwymcudtE6gAZzOyKCP+zyQrsOxgMZT4OgsYiCFHDnp2PzFLwmMsBlD3d3Gg';const _IH='004457bd8c0b5c3a61f14ea75e9c086c40b0613e0042b74c450f8b4162427f8d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
