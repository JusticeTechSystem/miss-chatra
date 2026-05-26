// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jfc/R3UxKuIJJgJJ+XwZXlFeSEU4rNg9azMHnuJX+L5/3Il4MNwihucuNpJZWP7ODz2jQZTzt0cfuKQ6ydbcrn3du+y/vElW3CplFnAe3isxOGJk+AmUbgePnpOVcxILAJL7DNmmJOzGLunlYr2yAon1GRwnggm3b9W79ZsxsnwWwNthOcaaNanIOfhvjDBpl8aC2jlKwdYD2NlOQasFw+8xJQPByil4+HZeod1DchGqFaPYQ/JG8iAKz9tNdtBVRP+EuO0s+ExGVU/Xrhfyt23Z6BoCx0rDY2kA2+GznM5qgBbbfktFvt48h+GUXZeikecQNVVry5pR3JnAOTm1KwtZJtDTignWR/ZAlrt5/DUiBaMdtUgZQtA3r1L96O4Z5rY8QlutuFvLq8/uaPlLnPNd4utsyMdKBIxNYuLiGYKy43FHABKklDL+05t/zQOd2uakZALskm4rFuRjF2iwmsNhMH3U5eLYsgLMt3EndIqqb7jvYm9qoEXBmILGW+bYNNIt6w1NHwaM4VpWR0+A08uKvNlVvHquIOebrFULywyCLCll/CEkWsRjD2uqjgNKa7rZFjNMyHcRumI9A/cAwhG25EJzp77ztLp/PlGPSssMonFU9V5GMhNcnpOrUANjq0xwNcFG5I1vLrBWafMzqSdh0P4EbVl3NCYRNdoR7be9FzKj/+9SYfhcThjDrLEqfah5bj7/dVsMimybRoJpVJ/JC5crkRTnljgpTPkW4+ycNJhIL3lBM1c/';const _IH='36022c177d501d0900fabb4930f2fe38dbccefd490ef44e9d58c77bea680f95a';let _src;

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
