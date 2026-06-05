// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GItOnBA2jdwoVJkc+U9B280qsWuaMkMncRBTfhyXn/sBnOG91DE02WBrrwX4GyF0u538VtidQTcni8QAi6inQTCQz28E7hrkfa7NPS5iyQ4qcnW9KW2IXpIf63viQ36P0yp8gJbNhi58MSDuoLBYKOM5wWTCXXROy7S6mOkIuQpDg8acihyOyK+GSH2UxKT5UshOQexVZdlU4c962uJCzCDGRj28iP7Aysk1qgQ4nsmsFBgNRq3RzbfBwBK1yxFw7BP0aEEKdSSGxujrdMRr9ZxNuV5XKgiKZEPp1lip9h3dTh69HcGMZ0+VgZ7bvvnEfi7cqJSBjpOSoinHne4BZ9HTZZSkZ/ff+dX59EK+TMAC+7dwYy+U0N8ReJvIeV3vWlWEGptkhgSi26MIEnn6yF6wrZr/jS5U8nxDvJW/4/BrK+qoY7s86RNZzSovNiSXZeDzdKbmk8g639TbuoYITNvILLXeqBVhwwsS9PhOVwtN9E8YxDwUfbemQ2SPmkJIg7tx0DpiZA8B3zVROwiWOfbm5cQL60MDl+znn1ulOv3Em1nR3LcaGNATNrA77G3WoTq4/wtjfbHkMcEeqTCRoSb9Jx4lYNoWPgawj19YvaSXMpFXvEyEjmm3ZtrLusQxGNq3go35/1R15RowlrP8ot85HMthrt9uHA2PeOQgHrPJA+s/mfOjaxYaHsXKwZW6ZiXgNkUKf/XftlFOtnrs6/w0gONDsQ7mfPffOxa/Vq25ZGFFzcz2cIESRjpJwuTdZi2crZDIwGH0yfkMzhktmt0ufjvD83TOt/ud+oXtc5uhrCqYwR5oL/JUaJ0Nj1IC7+NmQuh5rFtXMX/FtY77OVt6Qfngv3JtBZaZuDqsiAsi9gBlC7ps2mG04Lwrymcmd6ao2/YmwbiZqseWPmbCowqx0S4VEWQ3Oqao4QIdrB/q5ifhfcIgUQRxxt64rAOg0M8OK8wSC/DRAXeSVVpQeVxi02ZZWuSs/HH0zlUnh1K5E/su9saOy/PusRUmlTYd15bd4A==';const _IH='e8a15ac4f25db0f28fea98f1518561c3fe1bb1a3adcded06c281f09c253533e3';let _src;

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
