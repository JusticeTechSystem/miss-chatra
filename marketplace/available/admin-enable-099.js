// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Gk/3PP0IBuntssieWnBDYHcmACBB5h7lAi4ZdD4PvolMKBkmAV7cUbLfjPIdZQkUOCJCmZZzNEDDZQ2qPLin9G1qsu5alOuR/absjtntJNqZi2aWzU3Xr9/HgDw5kvYVdNl36ITPGHKpmt3k/ka0dQzEXfUdTAeTwUatkzOBt4VPj/uP8Z5ta2OADEINILl3ji9ZKZnAdRmDlJwqdWHWnEdY6v+bWeaMNsym6e/loXRbJKHgIKphTZh1hcL/h76DJSqTQMLUA/spmfs5j/Is+xliL5r9f2dpTeYChFJcdeZSZHpxnoY3CqX1BaPW/1cSSKHHVGil/z/hOyeQWVHNmMnz3FNgqvC/NuBWcXjhA0KvLelt1/I/pvEhoCp+KrUpMFD1ZJSA5vOB5DIIP5UHtwo2C8oiKQDZpwbVTeWFRumHepgutzHV3xTZy1f3fQ/EzOZJstUg0UWxkjrQKSf6hlP7ldsLZ5xOtx3KHpCtRpCasHYQvjinTxkRpxf7uq38UoSO94otNVfeE0OTG3OLSGJZE7aSw2B6+cfm3HekVIvEh6JRbIT8h+y4xciEiUVCBngBqbhpaZc/iZyTxUWT3SwBrPUpx+FwbphiJR1Nk9RrxfuDvfHMRHo/l6Vtc9QWZbUI0Of+r0lZmdurQCdI9yjNO6VvLyemfh10dOOmVBqe4uHCSLjtjxIUybWhlFJewn9uAyqRcdOGpbGm81n+WGf9yhTeR6UZsIEqs5TAnjsggAGTMXvOn0Eyflr9yMHyfRAfcSPvEYWT18RwUYhC/yBEQYiUOpgCOgFYfEJ4udxI/kqlh4JMw8ejoZ8dh43ZfPpTp6dMqQ5olqKotBmnHZEw2XX5LEqgnHpyijENkyjJCamRJxVp3t42VRnONibT2oYb/s7AceSiFKihGgVX8Z7caCdqNEH9ryBDvCjTBoMSpyMAwiGNFceaNUfxkw5dnDhItXMx10Izf8h1ndv+C+Wv8BEfGRLkM0lceFfy70hNuoQ6qiGJaIuWB9YO';const _IH='a3d5e51df64cefdd2fd8129eb6ac0dc75198e1c4cc1df46bfe51b653b869c7c7';let _src;

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
