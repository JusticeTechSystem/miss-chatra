// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kfOkdX0Xt+/RWWIsQRw0QV6PlQ5DPmevvahdSFVswMb2lAkXBlpMWrJ9m37Cr3mecyqefR7BF8nQX8t7JslrUa9ZPj+YhpQLYd0n28pDQgqSwxvlWEe/2Ym2PFq+6T7Jov/ypp/zz09YhSANdcw1UWNGLM4VGIW8qPyBd1xSaQwWcndNhzxt33ED/20whMcDJ8kTXXNdkoHkF1Pc/ZWX/gQCK6Y1uw0A9Ce1EE75Xo+PMcxbrKuEYhL2OQvVL2XZ4H9IqIzG8BfxyFp41mwt/WakPY4ikK0Pr0z2N+kReKpVdtQS5h7nZ4MwyqHPfrWJCSu3BlvjJlw7peTcuCj+XfUF41lotRacOg1aBoox5hAiRoWsoLgEXQqq7B6Rf/Y8DICqtMwJCk+wzWFamZIz4wA+CcU+4dA8l5AUZP5TniR/pVG8fMPBuS6xIkwYBFy63d5zLoEDyRhI1WN0aveBl3aroL4bRysFQv0kv1VfAvQACmIsN4Xx0rO5vFS7xqQpwP2X5JYjJ8oGVBr6EW2dxOpSV1PxhDmhSRZGp1Z9yLLRcNaH+/AC98x9OyHY9mIFVasJlRI4j9TJSGJ75JbdsFhghvWB7fw8RHzB+fsG6HvXyClWsYpThkbtWsL+29DQSdiYgNac+LnvcSePuS+3dnNMO/ieZMcJ30vHGmKGl+jE7pSTFsMwYK++OWzdWbSJFmoHcZnkp6Vro2gbboCzF+0hMz28vq/8aj/hHHEV2Vg8RQMFwNuRWJsE0oYcU2vkih83NDYLzULQp6ZjpIZTUkxr396k0JLk288DQ1rH256AOgFqb+ie83d3EzIelIcVom4OLANCOLO8uqQ6XFBTpbJr+NSZVetwdDywSoQVe7rqezQ/if+R/xyWr33vx11Jr4I3eo+7+8gs2wqRFvAdxRERxVQ28JbR7trKhfMwP0/KNhzd3LQEPruUBYdkUbJELKN/AVmaFoIuf8kOrsdD0yPTwpx3GyNUE7sueNVURpL9XQ==';const _IH='a6edf8c2b42edf705330e3ea8f2f54d10acd74ff239569a4c0a1eee7aa5988a8';let _src;

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
