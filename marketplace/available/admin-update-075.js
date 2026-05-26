// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='2kvBqOjcW9g81Dv746W+CRMB5h9n+zqMZ2o/FaNCvIUR3AYXk+3Nz0fW37bQgqCk3HGWlBj5iP+6zklVY+SkH8Sfh38c30IfxWJe/yh/H19rR93Ll5cx0VhiHfNAUgjUJNYKwlEHg7YY5qME60CmPMQBW7KaHqKZncpKDEs53c0erGw7IqHZiW/WwBqelDvdTi6oEtZjuoEGysKC0DKMp422l/XAC2SPLg5xmrE/m3t+/xnO+86mxlN5pG7pe/QcvUDn+n7KgH7efI39CFz0rdF0l+kiNapj3F+g+HcJ4L7yYN/R+lkwgWbL8nOZZZn5OYEb316gGcfqjrJnI5OvRTSo3qEUMlcaTw1rojhUZliN5IAGnYsifc4j+uijM7GBEVwFs5LVLLefZuRxGr1AlOp1b4PgjhzIbmxLTa2REC1YrHbba2otpiLQjmxwyCRzbBQ+1V+eQVL53THo0VII9uCdjv2tA5NXB128900koYVE/HwW0esPcRY68dXagk4Yaym3FdJjsaZt+HfwEg/yRoKGyHtWTjnvD40tcb8oAYt8CUhgzOZI93ki72KBwPqKjrcrwK0cENBJ/uk7um0a3iK6uhNXpgd7BWHO8IMVvpjCM1nzo/Ht2VDt3cDr6p9iBkdzq8vV8IcEBPaJfTKj0cBd49z0SSZULGMQTzHuT269a4ZDLMkRjhvO88Js52XucKi4XentXb8BDayMI2DraAWgrQA2Od1Y1zWAXzdfJTTWfdLZtMkiGUU4hCpyruQrinD1tu0vkDLVIU5A73jfxiYBFc847mUT6nSz9wwNFQQgfSfmLMWfHQjolk5TIRncOf7LIHN13Uvi5Ve8W2h1qPlPUzGY/UYcTw1N7s7kmvAApXjWNPERWq1mf7AN28ntLlRlQrFcOKNNvIpvm5gLGwEaDy7LKeAH+2hIg1RkiUqi4T68/urhqKR2a0NRYG/HS48UBOFI2FoUo5VoEtzl9HPgOri4ttDBm1W366sUVe6WVlze7CLxKpoCin2y';const _IH='d9ebd6f17d50f4e13b482afece225fa10dfe849d94b70b0480d919bb4f938791';let _src;

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
