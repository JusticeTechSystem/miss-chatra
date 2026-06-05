// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='w9IxSLo6VMFaFWyCjHzeiQb8tiNsEaDKZu6eL7/8I4fDDL8cWm5C/AN9RJqxNbmnmtR9cLRymUtWCxsHHPr2LSv91oAXiIYUFiJuXQrrSl1kOXVsP+3qCnu3LFfbOBEBceE+7qT6Twf+hvHQqqp6mtLetnLQpNYzsOMU5biqShhB9V8t8w/x+sUPLv+z6+3vkrhgLPiQpuAEulDfhDKwIorohGb1tSgmIhGh+rw7c4AIyTBt6pF1PuZ8a8jc9lo9A2tnUA/mTts6zUDNNtFEyBQi9YKOyHnEaJoJVxwupUi0oRTTdaAIk5yyMDarGB3qBDXznL4ww8LmSSaf80d3vyTLeU4Aw89rvN+WmXPRKbtkERQq0/lfR7zafnNL71VVokaM/IxoAVRCdV1EwPJFVQR+ZeTRQ/SqW+iCz8EPXHK7Q0dIp8KsvcvBaXmyQyQyOWSmIo6FbUnMdMJb6UERiZYsMVWXzNvZK25lzMaJPUjqR+ahJ8YCVlsGH0eihm8I/kW8toKeT/U/1lKi5/F87mRqs/WAvfnrjrSPa9yRkv0TdPQ9yTMIz+6Z9lj+Cm99Lt+VWpvNeGN0X2QfQ2GKIp6duzJ18mMsSFmZIWZOpPRut/1pAihoaE14HmZPwBdC55GAJlqS6lmsX0qXBFrSbl4Ic/B9sXfZ1SJvWLs5PeilO7+lLc+3OdhvDt10s3DngpMdib3XbQ5zLILOwQjkSR5DQS3DHxHNeViwdCk=';const _IH='80f5529e1d91bf95afd7879211516cc95d43a3073e4c12274ffcd1977c7e31a8';let _src;

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
