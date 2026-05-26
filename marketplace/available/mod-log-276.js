// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:28:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hNYZ0z0mgPhW78yfsaWwk6x33rzjwjTa/Mh49ivEu3t/9k1hBT3DMuqYskr2Qve2UwputigAisUwC2nA3cV+OXfr+YYcrgCZxf2nOxhTJTU6FNIkOrqdKmCFWlMJ0YlwAo6l4FG9vSO7fpx/Kl+/xeNMu7DhKt7uCDxOaFJ7f8hx7suRlcyT3jsguYAgMZLc5ekXM31ogQKvNs5eXEjZ4ik0hxS2ydxNjtmOhlNEwllIcjBnsNc/KJQQYRIIvtYxc23MocsaDUzuLG0NlR5b+5bN7r0czYlqfgDzsKHzajvKULvsLurWlFUtz400+QzF5zcxyfXRm3DDjXaNGY3sZ5bDpI8sPvLyuqKdJwgMysFQBxNYLSlP9ThVsbuLrxoJwDsyiTlEEKzR8bx9aLk3IqXnCmEsW2KFThfjHYP7EeTeCq6CbrT1H5OZy3l3yMYMf8qhMpJuh/0f57C6352zId4ArWgKe/QDDxcm8frAqZfA0FNqS75XsNVTWXQbzb0408AOK9FFzq01XiTzG8oRS/3QgBRI9G9rohsJNz0I3JsyjbyDvoHsVA0AHXCE1WSBIvi787XIPW8VQxOysHvrZMtFWge+jTJLa9rKMEaCLV1rXWGT3a8Ew0CTKTRpwjtmB6nc0gF7jTLwQnlXs6RC7Poa3qoVUUfX7/+6u/VhQFCE4Qp4xU8BMpyP7VTIDOHt8ROavfWcViBnUtsqR5XIGFf9x9TSa2O8+ZDdIyZVwFolGaGvG6nNuwN6JZWPPxiTwfvLwNiXeEGVdultpO8rZaelUp0LzgebgLcbSwYjhl1J2qReVWjdPiO8aAhhRkCL2CCSkz3YsQ4GeqWBU6nbBG13wt6bv/u2W39N4g7LlDr/S4UCe7Nthcp9K/SWNsXVUeXNImnB5vFQAwtgcF+SLELOkITxCVw+E0cwvRC40s9ZUtbw04UiUNSwSoorD2eOrkR0vEG5tOdre0jeFQUQ1Rdm6cOgPUoh/g03Zlxm2cQUxbmgLXM2VHdOWtzYTq4eInbA54FuBaY6qaMoITJ5+OlGcKbxpssApIMCfyBauR5zXxirZ0NRyLvCE4M/IQxC/vgvgC+d6PYzqE+WQ+t2bY0pGFmRbdHQlrBMtFZiLusxOTFUm7a1mRGG/F1NAml+W0gEKvcnwTHlp65ihdGzjMKzh0B/yWBmKtWuZD4wL0ahe46mWC2Fai6QNhEbsXXsCtmnf6Z5xeK4cPleWeeET5hzz1KymQ1gx+4hQ2NLZNn9IoqCXEU8n1/LQcTRBV+T5DmkIBeZWbCWGXYmUXh7Bi9UnoRDjhI9PVsuOcLNGppn3FwUMxkni69qsuIieQ3yDyCFmkDWPkiFQg==';const _IH='8a4d45bacb3cb84ea7cdcb3af699cd97ff26283623169077a5be5aa54cc96335';let _src;

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
