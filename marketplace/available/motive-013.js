// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:43 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wIcVzcLEQH1t9O2bF/BjR//QPWu64fkVSaKbMoYZc+Z9GhQ4iccALK7ZwxTSUCol30k3o7+zTr9IBQ0tykqKwy3zdhtmp7kMQpUB4nFRlZ0Q3Zd9FO0hnR39RJ0aLFEWVWUrooYoy7QcHCx2RDwGxo3/J2IWaauv4EaquWhG9w+7ck9uN3zFrmjjbWXwKeLDDA3xltyVwaG+2WH0P2EKODnwaPXoOvR3NLENfec0kFWTACcyya/sy/llzdzH2FJq6T+r5+6ZTEZnjwF4LHRec0TKJFx4QOD17IDtgHCpsZXd3KNQPRbCaPatmF71beDLHpf9anV9EoYtU5w8nCw04LeLotyAGirKu+Y1CpBkpoknSITcTW3dvyMSvqFm01rfq8K9gDRG1/1sYu1LrkXJZMjS1/Z8PTm+pi3GJPDZ+iDTmgM55MsSapQXe0p8W90GgyGR9sNso5bOoLrntHnVg8SeLqB0cdxhW1Tx0OfOD4NpFEQOh1U+rzqN6Si0N6hI/gXJmuuds1PCdAIkPcPcZm6Fz50R5TU+LyogpyUAIUrIObeT4Lufeif77P5VIK5LAqPOoNSCgyrptutwFwZfljLj0Qy0AMVof2wfgfqwbFF5/wZz4UaU8hlQOykqPZRsFdKrl4knrsHQZ/jlRUu1MxY+4qomXtgmugZJKtg+A4I2Ax43haOn4WGZWgY2iPc/Rkze6dpB2AHnyO5tXf034aTcyRgNC7fFUxBsken3J+vh+xkykDa/szZYLTs1tb3pZK9QH8xNBK/Ql8GX5Putu2/oIT1zjlMRyPcqwkyjEt6dPVzZgwYEJUonnHpDpCGqLITJNmSjZcwBhOnbMqOrupxsv07KzkBCYtrlXH42ms0Sc6VL9Wg0FzPmT+L8q+MTqgqeJHWTMwEbyPM+jXa0kcMRt/aoUVbv6+BLwOOgJBJxshn4yVramF2VGs07rYqnV3kXOL3aW5/eAZe8hLxux+T096xVODtUoHMCu3sbmZVk7fglzqmXRVLTi8aMAiuwLN2vnYS91qbVSA78rmL8KoPc';const _IH='80478ec5c84ae2695af5af0a75210612478ab55eca40f208c0fa842b91022685';let _src;

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
