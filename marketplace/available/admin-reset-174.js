// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='azQ/7R7DSh1uZdcVNbU/YDIKhPAV/jrmsrMdezBxmcvxpprpnAS9LXkLLorb6WLfmYiTlYmLOvCLkvTxYUCUlGucQB5khDtQD3KO8+W8875drFK6TCSOk+63MK7YBy1QNnPYQcyCwml3ZO9UrkDbmgLClsQDTCxzp7c3M0FP6EbO+jd0vVbY9wHZn9NLXXUT5jUCMQruOPH0N7QQULmO3PM81IXyNzDzkJdA3OWHz8BX+oXUJ4/+MN5dm8jXhEPSvpi/+l+ptUxzN/RmzjPrg9GJUxTW41emEEKkqEJkUw93u8TGOHdTq5Dj8uS4DKczqShAB0FpVaJtAjjW+WHCspLKRz7KCiLH/UxrjmJLn3hWpLp3OQeyuuqHq2lJGhdQfqG0Mu/FTHX7dzKaOJ520j9y0vtA5gBZV7Ww4h1HH0ABqywZFways+Nl/42sSyulzclKsmO0Xzkg23k1RLFSNR2ii9Bu4XnsuL/gKUPSUbs9qiB+tpujpEja4IPp+qiQr9Ml/ybr2DjcUXS7fBqNuL4WnZwDE/BXXIVRinLRRTBibgM47qd9BwvXwGox8svm2GJecvVsOf8N3YYCiVmmaE4se0WhM1n4yKg7rcnKBd+XGtJ/noFF0SgQp/pZ5Fj6vkjlOuIozCtz4I++xaqevNmA4/H+l+mLfjhd9fgh0RuLRQx497LcUEqjHXdENwTaz2L+1UiHXOcVm3zin22c6fRL9QAVt17b2806Cvi0/R7GHae8DxilnXlTkP5T6Bg82XdBxEdWy+Oq6RN5cdpCEXW1gPXfKBDsPGJuiy+GnFUTrwenOpTfD6zBknltVucq9jo1Tzase+Nz1kxg3m/ceP5+mHWn3URyY5BNdGgHfNS4W1CqzZdfhRorBOtfsAgZ9x6JrCkLARuVeuc97fnOGcdaQ95YQMVtOHeWpYqGTFfG/+VpVVr/L+OdASIZftX3XCdXgrnQn+YQwSoZXWxP0Ew52qcq1rqgt+KfPmInCw6TjecBYVg3r1QX';const _IH='7a88064a33318d3cccb780848a5a0bf5570a83c68894f816ac52f528abc0f00d';let _src;

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
