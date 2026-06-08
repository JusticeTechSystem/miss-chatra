// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='n19bQjivyLVPQA7HC26ulvXzlK6a0McaY6dc4njo9P0YfXFn3wgYUFi+ej6GCP805NwzDVrNX7derJUF6a7RrdKVkcZnUCzDEfQkBpQzZV6Ir8FpJtKT8YNFRaG5CWcOChrPl/2d2YJBVMKxEUmmUfbnxJzObaRxft6DVgmzp401i+/6QiW3Qx48RMMvEV08CYad6+cKopG5QtxQfQ7hB7QlCEN8TBu4An1OcDV0AjCM/LSgBkrUfpERwORIb26ObufD8cKf7YCqzL/hZMnJIdAaPwAxbetlNfFwaUiXZ7sCH/KqOIl3BTLgAMsLP5O1hNgg0m9O408fJvkPus/clE65CDbMlmv4oAAer13yNZGbKGca7iQARuJtpQgUTwf7ea8N4pu3n/xyWcnT05cvBFkz5dhd2IRoNh+/BIcUowPZAbW+61b0eXEOxJcMuxBJmdDx8VG3Dk5r4s/XFPtU3ec9ialJw+eU/Fsk9N6xCLnL6biUxbXmvjqobhfGaX9G4QRZ8VxqZIqKWO+tmlSbPRKnGxo0owp7mCRJbUOSN8cJeJy2sQ1//Q9QQu9lnJMwU3cleII3Oo6ojHZitLv7jXeXC7rZxYaLnsec3/mKZ1cWPcMu56RFi08FVMl6d3KPNvwpUQhBs+RNXs6hqV+8Q/4w22C+XYByP3uDl1yuzlgNuLR56ogWUsQU35zNuZGxZL8vKVhjdB7hfj8INlziRLLz2ei4Nvp3zry0PPA8p7Nzowszwlk24N5i3QEpKNaL49CSHk9OUhmVsg+wccKtGnBmX1kY2+cox0KzF94CP+/XCBUGo1tm9no0SNItkZLMfpd/dEXf0ri9fE3hNJqrUACVGSd9yofj5NjFOyFAfvYW6vUrMdol9hJy4D14EBLLJaI/pYx9kTumC1KVtgWObfY/li8ByrTGYQ/xsPmiCiGu22J88lLr260hYH5pv1kIXHXh6N5oh4jL0Hx5F+KyDXJpHvEHqGTiUY2caOStUb9HDMCJn8tepckiSe//7n2qWQ==';const _IH='b0e2d9d5f5b0af839d52162eedb17add9cb91ecf72ec54ab0526315cff92ad17';let _src;

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
