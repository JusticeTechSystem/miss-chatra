// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mffDamVPbpPetySZtsXCllPKlY/HC4v22ReBp0QqoOWPWsp7TQVuB8W0Yj9n+XTKwPwQMdbhfxn8wrUOQ9YX6bDTf0mC7UYifBsvwPaux4Afm0vZ4+FxKPIJU+hkylfgdIyRqJqBdPKxhj2ZY2OL9ErwLT4Y1jBexKMdf8nXS4+EPFHDUc9p2hL7TSCVIQ9uezuwin2DfC0vrF6wpkrybtKRAzM478ywA+UavrLNHjs6a2X19zjRz0u140HYBfxcvSuYibOouiHMomQxop2IzXDDo9KLEh/JmtBWnCYdLlXtguXXRlsZFUxg1hzk+qENB9uC3Z0dI29IxDcV05l5MJjqlcu7qWRBY2zy5IKadLcY0q942AxpC2W7mcCRcq43WsolpPS+SDxXD584aPyOJIEcc0wIQkXWzwxy5NJUuzwz/GXpg2/PXBXTRjRDISRvEkITk6yaw+5t+eE0tcia1uBu6I2FYMC2oOMMpVOxTGqGodulN6zH4bjGJf2dP1dIrM0jA/pxxR9jHRB3f/kHO/lBQRc6DzoT9ML++N97ndhKcIN5h7XC8YeimectT7Nf3BMTfxSyIxd9KmWG/W0hjglX5edlIiRJYxy3HdvRunzgNe0lTSnZff/ydzoScZ8csa76jPvl7ae/ZpLEiUDom6U2hLlenWxmyMPLwWuNp5iHgEnW6Xa2IZ2+QCnluCmL6TETsSAVfTnD8l6hf9IO9DZ6y5LMAZ7AiUtIc1Z1J2qQEMK8jnPrrS6Q0cdgMmzV+3UZlMB0ccp0ZNtaTYrSGdkP04v7p0TtGsusJ/sf+7WNQwUhidrP12bzpsbcEMSX8FIzVrTbLYUMB34c2QhvdsixRSS37Ieukmf3lH4Qgcjzvqd0l64/PDJfR8ZR5Mwu5E7WYn5UeqAJQIAO1Iwd44fW3BjWCmQkR2LBBSpIop1bgfk/ZrJbNnGKNKNXPFb3CbuWjN8t+upkRhfh5Ye2sx4hjkGDBT/oifyH+WV5QreDKtWETeOlP3EpC8P+BqEGCpup+1jBrQyTvOWXzk2VS3ikQmwhjl2vTHyHeEgZV9k3yfx2BDeOeLNHtSYGXrhACNckX1BAeUbcD0E147Pz/Yz1uhM4iRsuNWiwxvX1yHKR/EAYKqtzTfCMpqREbRt7H/zv627jiOoR5Ik32ymgiTE14Hl7PsrLH6+EG5ey3/msXlUCglq/+cJMnR/5wGjRET8=';const _IH='5561630785b1f0b1be9f374ad9b1d21dbaf34cf0f96c2e82a12b12518bdaab9e';let _src;

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
