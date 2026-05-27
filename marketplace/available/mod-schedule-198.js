// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:10 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3Rdy9Vd2gMU8rpPRQG+yQIijUOyqMD5O5I5AZyrdh4YIgNraHudQaExAUVzoy7oZAnwO2Y2n4ygtk2mHRK2eHMdTV1ZVIGDA3ldEk8arGdAyyBIgazUCneGbu29PCSZYRlHUqKRIYblabwhaXt6C6svbk9uL1USSR3Bp72d7Vv3CkQDQQ1j92Lel7nySoT2C0VxQSF7FBzP8RrMG4Irx1mMjetsSaTdJFCMVhf+CHQySf7DjzkJN4VWgAnkyZbbmwRm8MZ1kdGWjU3CTqfSOcuXDhQXjC9gah3/pVJ15X6hRv5b6WxE3wYFxpsk3JD2nzCSaFg77q/1sDLMjLcPIHicFxJI9I+6fEyFkl8LJns+e9lxfah39dpCrCC4Be7FOnUaPC5Fc2utQD5Rwp5P/U+ZIEeiq6WcpT6u107+YdCBv6j0c+UNueQFqtVBLdlCdtJe7jw3G+CRyP2MwaYn43gwLLhkmlLg0GaET8v0h8qYzbPQbcagrE8LESJo6qSvaDaDm8eUsfmi4TtKST3rVwmIUoE31HT7I4gVtP4LXkm30yMXaaffi0ImdVXkNOK9oNs0fBwzkeC3prfY4QeHuQJSAWsxoIg3T5JDe3HwwktUaFDup60mzs+kGvkEM8A/51EBEZVf5tnIcS0TGXt1VnmYD8m2GdJRuHgnROVTLsC7jcXPUPbOEAa7GlBtgxBrn8sWaukxy1RUM1Lzna1lV29B0gkuyNNPlAGGAe/vcmLOug03lSOVTYzVp+auDNnd60WnZrfRwXwuaX46XgyNA8ZGo4ocWmyZSHjZj+hX7EBdfIK4NAPo//21AZi3O+7sTcZSjT2PU8rGA8V9p6IMj1CwNrCpNTnmxnX9I2KcgTdOvsqzGPCyTuGM9eomxAK5k4gB4ZpWRiVWrChquUDf3byfyD4kKx6W0Ls3liEecsRIfP8lcuxnkvTz28vfW0b6SX/GpY0A1YQ+E8/vY4xQbtCeNy3PWHJixatBCwPqBHrwHfpm/PVHvMQ1CdCOkg0yeRV9/JJK6us+h8w3I6bXCk54rgC5NNqBuk5SKZ5w7anQPNmbJhgfc6aTYjGHsngCZGbO9EsYOcJQHiY5DVC/HrK84oIDnqRHiUJDxUwUooBjtzqitBSHq+s7poETrFsPF6ZcnCQRZ5Rgt6tonLhKr0wIP1Unx1fghKyYyyZEkspTrbdvR6ATbqmeABO7ZcIIEZkHxO4FJUpkmqmBmftBoaU2r3QW2aS2ChbOxIqVw1BEjLetEuIdX1oheEb6ei6wslNQurHQ2ZjqwZZE+81J75pB2jWqB+nxBHbuNkr4i3Jvy19k5yQG6pOHyV8VwVrmfCY9ddPc6VLDfbx3aU0vqQklSTHyoKzSRvFPUROikYfypZnzsYE4y4XA5fedTlFy4jLFv+dtNpLy6oQru';const _IH='780cd6d7e38e033eb8cb449a6f6a737e64884cb0d3edb4ec166702b055635377';let _src;

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
