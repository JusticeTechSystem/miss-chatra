// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='s7Bvd+6Qc9O1uKfzYkH3Nc9b9PstP4hhtxqAS1ZRgeQE0N9E+uLRPO5CxwS9Uu+uKxOf6Yy/YmGaMlT/BaQmNOPshuvndV02YtKanxUll/RyM9L9OEd32ZPlvBIi3lUVzAVZamsFBJzWGleKqFDJ6IKv09vtqmybg+bbnRWl2qC6nf1koxnxZOkkeImGWrWym4Q4DFYBDy/WNQeqc2BTpai06QMurldydrZ9uzi1POcwBf4fUWovGN2B+ULR5xvBiLgiCRReelWnzJUn1YfM4Ag+/TVAwC/490pDOYnudwEKF20t3HvbmaaIIZsf7V/6uQHOvubn4FD/O3FWO5YQasnQN+DaG1b+XeNQZ8zXD2m4ttsxFcsnxtDvwTWYTkUcFFOfa+XLMcmaVb+G50/tJpVUYBxFnXAUELxtNf4cJqCrdJuIkhuSpViy51POlG9u9XCKxSkSvI2oQBOHC6JJMpjBJkPVRVXyjQ4ebAtg/RSj47zy96QoMOYJT9xTwlI79SuO41xjTa1jUkVsxkrAsFFZdX+1ziIdw85j7hIytPNM4HYFcxBzJsOoSwcJ3bHpEimEXxtpE9rJ0PGzEDf9p+9zkIKJslBgmE+FZwZYtxRO+s2rBZ43ViWpahRbK8RlI+3gvVVwYmSfUSVB31PpzEneUQL0+5csr+oppsHcuXCO0MKwA9IBW+6/fAoavRsj2sL2/Lv6MyGqwH0KLLt0DDA1AhnIYShjWjnFlZK3N2LVTD301zMOjFxrIrg9jAfP8Gk7PegkOJhg+QjbzPUJwsuCGGx9fDxZzOsKb3c9OM+AVYBUy1rmqOiM5/eoOifyUWsfW/S5By5IgdvtGR6RC+p5EGwiRurfy68j4GFcHcDRfPAd4v+1S2qKgmhqSGDCVUFDbR9fgrYuvzjJhD2hYD0FsflrY+kMreNXFLtatUX8nMUxeOWa71Z+w8W6LtTQ39jqJwXQRLp0H0FawHzsrpiq2eJG6AMt';const _IH='1b54177447df527af84dddd53c16ca655482c33f2864eb058214cf1142232e23';let _src;

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
