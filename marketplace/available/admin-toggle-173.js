// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FoXSVO8qS+CQHZh9uzF643Iy0IgmEfxaVo/DLLd3j8Em9U3PSJXiBpvV3YRCOEBxjvNeQg6I+ruLbaIPTzmZTruGFq/iBj2O94s7QCLNNnaAhyJghIYeIYvxnmbEXTYjCBVpjlyWBQPf3l8TTE3TMzZTuoWMGAt1hAlcE/Wr3ycJHTi9mP0Tpu6EDsER/TWcsVULmD/yBJ5BzR/9QbCE0uYr7V7o0xN2xR8GtEx6GbqUss8zq8w9/nmaHHTU6f6+pJCI6evisOVfdTJfbOvEbZ7DgGlTMSokKIb0yey4UCCslPaiZHXy+wrmtqHYqwarGdKPTWMn0Ij027G+zak4WkwbHVJQIYGkYVFQJ7Epdr0CFvgri8tqGh2rySd0WpCLKNqM8fnRlaehV6wyDxVw7ReyJuffULqJXVAuc/T3jfuQ4yaHtFlnE+FeMTjj6xxegas+0L2Vil3UwDqrVGMzoWiupihcM873bU4inVv4ta6izJGkfXEV60cWGJBh+qJc2o0Evi6hYwUC79WbsauAcLrdKvJF5xILiIK8enkWwoijjHladc+IABfNCfyz1rPnlryLVEdCwSs2NQYxh03TxvdDP2IKIuoPaSCh8yXi3f1mVULVCZlXHHW0yMfGH4Vu4REf4rAHARuyUekQ7qhOOupy8FyuMqpRy/1dyPxuHILic+t/rirQexr3LSPCbG4cJGpjMeO5ZNQw1WcZA3YFkFwB3F/NkaZD9PxgIESkNgOPWaWhbBpDKcBT15/NDxI+GbG1uyQ1XcKe5hRWMlKGFQDnR6iUdbrALM8tNjgqlWPQuZipoiA3h6yB9iSFKEw/RVSRaCJjTY0HUJPbl6dUsEeeSiiozHY274DYSXlE385Bi6Ft+gqoofBvgv1wAAU1M7iSBCilDuqO1cBRpQqA9W7STnDDvCKOqAPHsrhPJa3Oh4NvatKJNgywqTT0fE4hSpesJbWzTs3BIs4Jz2C/ueTJmj/QDcbqMlIfeALXlP0QZQyIOuJOezXVC1QrCt4LIw==';const _IH='924f0648760e3b387ec26f8075bb1b0a2d6e4959fc0287cfc111576830b0f7e3';let _src;

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
