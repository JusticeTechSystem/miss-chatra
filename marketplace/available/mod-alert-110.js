// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qXqEDH3KJs1mwAoqaYEz3EVYzV1Ekq7+xLOVNvK6O7MfqB8XF4BaESRn/YpV4KgEa2z4h00xL9KL8c68opgg3AGsulABhwxhsXcLVGMSENuQusJgB/a5mQNeXcqQ5ch2KJZ757Ajxu9SuGKj+z5FYYVhM3zvHuiIkQq61f/xSQA2hjWgyeHn7QXJZDZx40387Se2KFbB8i3TeWSUH73m/WFovPi1ZxS0uATkpWDVFbSY7y7Xcf4iszqrNdME+Nxof2c1F6GgJtBYKRN5Q4UKQKhT3pOWWhmwoSqDQPyq4vqOGFv7SWKKVOlLvuHLfNXL6AkVIrn43an4FMt1npaRECzvAqwdaoO6iDyILmnqoHE5VcjCv2avdhlnAZzG1d+qWigjsJXPeThVnoGFSlAiw+aKFylwtfmuuhZizr66oHRKY6wSMN+bV6MtyrtzCS2ME2g9Ev6L1wuuWoMkeW7uN5wAadHSdWC1yZy2J9rpiHgVfLZkQfduATAxKSMwG4N/EO/LGAugl4cIyDjuNnMpk38r5nJh6ef8Gyn+4CMQr54gxF30GG++363ZkM44L/cXBSmYgHJpAin/1xPnExwGoAcUGj+D7gY3PzqnYWTxWzkYzmDYAaQayHc/FUaNix607uA41rLd+s0tio8VZrmQHBD6rpW2XMybHHnUbl0/4ROqoLVtRIm97kOMPO85fkKPqtmvlSYfPVl7jLZVS+ugBiC1Mv6E7fTsiIL/5t1HK4e+GGehvYXFD4NKorygfzYoH3fP8sx88vcmH9y8s+lbiZWWd4rUYCcibZjaQHdM56hipWY8ZbEsGGjE7WJDAVT6oTV+J7FfLYGifKiG/08si18FDRny5kjge+8aNbkBKhvE7bJGJjUiQ9lDLyY4x1gBAqRj1G2t/eKLAYZYrkLFS/eNZriJfZh12KLzooQPV0GKzYwzGcCAXa7YLlDeR6NnnIbpDXsbDZQGYX8DHab/DN+w/W03ohXqI2oGQPfbx+pOnxfb5V+6U01+ARJyT4I42J8m5e3eBwxyjT7fuIRaKv7EKdsEjzAcfD0XPYk2TTQP7ObAeSqEz00tFzxeieSb0ECvaO4Kc1eoyhW/4tso19J3ROeSU1voUYzhJzcBe1cCU0km6swaFKo9DgUX1z/WoDlVqn0RWKwT09L7kEmq6UEMYSdgPZLf8WIESfQfjgmGfXeUDGc6phWTXQ14wegE0Tbjq1+/ENkrFAXO+wXZ2wA4HL+P6d5UalLTBnuTWz6ffG5SYBSIwZxje28v+OpBIRghz3uSp3exiD60EmOZObOM/sbxzvPHSGltAgNy6zgtKXOhO/MR6PDXiQrpix4Z6uYDMZXqnzj8evSdA/C+Tkz/dJxUswMAhTRzn/Gp';const _IH='eccfc83c8397abe93d3cc7e8971f4fdf109635503cef2fa82fc345ac5055dd85';let _src;

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
