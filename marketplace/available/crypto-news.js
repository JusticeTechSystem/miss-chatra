// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='VOAN3c17kj95Ur8TiDmK/dBOswBa83c9l8BYVI/1l4xF9ZINwlwm+BEzBukG372XcTjR5Q6bjtgTQ9TQZyX5T+Fvq6Te3Du8EuiTOk+rJ6TbhlzHtal8Tfo0nm5CDsBO2da8151YCbjGL9bYDk2xAIQvNg7GQSPvbb40KaT2+q2rpJs8ZBr+fZ8TfuBrB0EiLDhlldl+Lo41TvW9i1h4PYrALqtFssKLvzt+yxhAPtp7Wf8pjcKkXttlmPNXv+Fp776pF6mDnatInIVRDxjyHitW+f0dTrIzN5Sp/0M3nYSvJzOuHlDu04uUlCJr+f7Ku+FjFwbJcQVelP+O8yZ3IQd8F/IN/Ov20Uf1d7MionoOZiv0+7DC6yPSbDobSqY5WrzQC+042Z8uP17U/ZxSeg14gWNMcb8u8OvqCrkOwAfpL7zfwA7zgqarPeGl+Ub/XXQCL6eDFNpf1pOM/NMnF9XbKHJahHvTbOV0u3YhzZ9H58+cxgKsvNJ5CI2EOUvtWDHfIOvmS0Cx0F1eR9DctAFzkMj2ZWukuCo1WNUCkKjhrTaeenvn6si+A+7G/jZ9qB0VbXGY6lLfyFa5791ur8tfqHuWBaQBfN1i1QqL9TZDJqq+kLOKfLPzEoVWGYdD11UNYB9UYM6fBe7nfE0H9hrhyywxDV75hUE+02JEazZ2cpwYE/zzS5OUT5HAJ9rrBsrIQhz292to7QNExQuLnWg56Pa9G9ErxZWEYsxmLujXw+a6h8TrM0I59yE5xDaWrXB1Z2uzRWnFiCfaBysJEhjvghEWuRmu3EsG3iYMvUYEqa0fC3c/0FrfQWmFQ6fmSjCQHrXulk1cbCPQngpqNXlOm+19QtFMfI1B1Ra0WmE5tkLLPzU84wGn8Ow6v5x+J8JKdQtpvOzymdlv/MS/l8UTIhIABgzSuOEaGyoKCXPSiISZHeCNcS2i4Jpu4LsftVADG7Q5E+1oGdZDoGNVm46nP3cnNcsutG+JdQPpEolkumFtid+SHXkNDFUict1LhUeyIMqzQEG3SJi+o3R8kpSzpppE53f7XiJLYh9r+LiuDTtqlWlvsJiWrMm8um7bpjWsaRTac4gm1PXvSIyFJNkMmsOW/1kZFhBjakpzd8w/i9kQyvLDBmTxqoK0SxOYsvLJDbnexHFn5rGLkZJRHn7BfF9XpJcu0QDqdWf74drZn3rI7SdIaiJyRzC2m9hhAwf3qMb4IjfYDha3oMwwgDCCr8lJzj9nEphZZhAWcs3RZwSVYzTp4Na5B+OgvlQah0o8TpF6RpjZN+XZ3Z6EWvRLPA==';const _IH='4618ad0f7abd9df981c7aab98e3215cc9e84a825a62fc030f012c8531013ce7f';let _src;

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
