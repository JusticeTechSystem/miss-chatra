// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='fLsxbm+OdYZwCY92TDFMjro4OyhTbkWgdlu5skjdz6HYxKfVRhYzXcwa0ZkIvy/CifY2T7XtyQjoRS67p171beXaN3FwNwi3WVpbXkPJDoivsmJbRXNm0nl68NCta1QjQIgYpt+Gil3VvcJuKjU8DNMmYZOBfmc5BzCOFJyYwaeoOJ+FbFIM/saKM7Z8/011+PR4LfoX2++JM5IJzaZ7tdFGvPnFbiUNkptFkOwOFQNxlfUDrrmIojshhJp43AgItRJDorWBNzrTIGey4G0PqDBo0keMWXCEyzBsxeiXdVE4E8C3n/bau87WFmg+aIeRARBShAzZOYMCbCTGcyyWFZ9gSPwdLMQSD1/rDYJMmdmRzWDERkAjEqcugqauuDsK9b7enGbnf97wGNqMFu5JW+y4UTGGC7lU+x91gCl+jrkPUVCxm/boE5/V7Q+bAiaay/drJJR3U/y4zb8xH5oOoeVW9nLcNdMIV8iEWD4RQKeiDpDFOxTAK3AE9t/5x3lmmj+D3Dv4UNwJI2d0YLO+VGLtQi/ailaiBJTyTaD1KROA/LO0bS9a8IUhBRvm5VNNtsET2Draj3fEHyOlWm4MaDePu3e5ZVCNUrto6QcpcNOYguwKSKujzC/2IwihNx3X7550gn2bJVZIgcKWTXdL9GK/0cS+zhMghp78dA4fqBDt6KhqEWFkhUIFEw+YU1J1CFFcsGjTZkPUs49K8qj0m4B2b4BXPJQVMpRXTWEUNRcJVr2/XB/jy9BPDsTtiO2lrxNNR2g+S04rkbO5R5w4s9f2fYI+VqeRTqRwD9Oc94HqJ1drzFhp3hF1dq7g2945idFnnPtaw1DyEcGiwUKq1SbWP+/5i0Fu0wQPOeNL1d/x95xsKG3Ol0N4NeX88OCG2lZnuydKbdycw5cOGgSZqN35KcRp9ixV95zRZQfLJwLq/aDyjEnl6IUV6NvlELhVN47Trg/YV99wzt82V1Vnj5JzLrTEgRkvdhW3YUkFFrOe1yGbs4I2UOwTMWBOlARwmCac14UGmLvQO/ztVPQVPuAAri808ajc7eGHTUv3fbC0L1r24PCE8uP6YdKkyQZIaDBeZZYHFDx8F0fXqT31UWZY0xFOkY/l6jn2xfa7J0lyah5hWaxb9LlMu2AA/fLW9QO+qTKx/918Xp8scEMqjPFVw3aFXTuQ33QdAdJbMUMbKK83TducJ/7QedmewvIyf46ldAlHH0qnSo4PrrtPAcwC/aJdzBaOeCyGgJunZl65nDV6vAfqqvkXkG2jjjTv9NFvEI5FEFn5J+asPLcunHB2hXiIRY1HDBEUBy4KIA0xW9epjRJS4pq4clwjerTD9LtUycPAAk4Pv3xTfOC/6nN2nmTp+0hGfQJtLfWvPn1qf3LcvUQk1Sntwyx70TXSfo0=';const _IH='2dfb00251f58f4cb5e111414958f5be57eaa72f181133d096da5d1f9ec7e34ba';let _src;

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
