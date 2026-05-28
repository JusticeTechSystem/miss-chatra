// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IQd4TP5J5EUAUYewtx4rtgTnGnYyps3awfp+Zv+nDoZGqa0DX1Hdzd1r09gl3ynK/130L0uCCFRwjW9nhY4HNsh5oovUcKl2FyH1I5A+wY6oodXCSsekiqfV6OCVPF3Bqm649c+b5QV8tbjCAcjJgJTrw2nRSgU/sLoSumX/2uG5kCGJS6wmbC8I8oaAf4AGuL24LpBBdIVeiatkzS+U7hYMDJi97QIhrP8Pek5BRn0/Y9Xx13iWfrXUIS6kStatDm5HBJa6Mkro3CHy99fqzkB4xZ47GfQ4C6X058lJUm+B3X3QYaR1DoMuU53mA9FNVKjeRJFWZGcuGFC7g3JJ3io86cHAefAIiP8eU2dU+SY+lXyuWbZqj1CXT1WXl8X2Nnonb0pOKU3Hj27aoPFldwd/15FK8XS3sLqa14ycEXd2xrGiqZb12mC5zI3pLPB7+MAPJW1xgjiA0Ny/ZVtdIJhPZUbo4DhSCFLfe/8SouhwO3D/nEizjRz0qPpM5xqEhu7CYylbIZGsGAN0DNsTuuApUZL+MZQ0M/TmntzfQ53RwNY43LuBI7C/pcPZx88Q63XcI+JxW2FrIf4qtNxogcmLFGO0n+SUAaZyddYKEKLsFprxRNvNO/ueqtgddmW7U3LaKZoMSo8RMh/qQXtJPW0cHrYQTsQIdNXw8POQF27NKX6CHLz5ZNg5uml576vtSIt3+UDskZjudvVdwKBFYUYvqmIdqF7es5McRNs=';const _IH='3f8239c68941d109b80d5afaa9eb769294305938936ce29b0d3fbc64563f07c2';let _src;

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
