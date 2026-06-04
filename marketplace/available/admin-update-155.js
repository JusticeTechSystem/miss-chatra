// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:48:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='BGVZxTw0Bo977jEYAC0OfBIFzmb1OLM2+6QsgtTZ2rubCQ5rYC5PmYugDqpi0KmuK771E1NZsLGxcCdEkGCBabhU0ZZzq9PYuYLCGMGO70W3d4HPaH+rW0cJxd0gcTf0BG0VQhG+qtSJsuvInHJ1zjoNknAesEjJzzpJ6v9ty6Bcsy0wQTqCjrq7qY3z/XpFtj70xor8cBizP44/ypRiYphwyC+ZLmb6t0ciD01D4syr4ZAsxWeDrUi7tvSOhGajRNMqDKaxO1ZSogAvUAYO/Fv0NR7HK5ROVQTP5mcYUlceqAnqC9ohNUoXCO+vhpRLYEfP5G11Gaastcbun3FJV7XwXbizYCd5s/IJfaXTTJGgirSivGE8RhPUREhB9DcKuwnbzLXgGJnjD6jsWn3qPqQlgOw5LaeVloVViOTPHYJJPf+l9RZX5CFM3OSC9U0I2f5K9tXaMTcsqfk75phA9dCO04HTdHdsGx0dzHvOOsKh77GjqtoDJCJpKRRldN/IoI4S/7wsUfP/8ouHgECnCXxR37hvk1lXDFd4CpgScQZPkA5iW0aeLfD+J3yDFzlFnhQiMvvrvoVDrbrRgpjKWZj35bg6CpgP/jq0FmsxA+oLG0VwOJj8FgUsd7xxYHgZPR6mvbWU0cItqW/BNnVnXDDQ4elFcjqCxNjC0aAycOFvdtSDu2VNOXJXjj8SUf92snYdHur35YZtWC8+DWszF0ni3eh5/yeMAT1v6/OQeXihSjogtORZeihygAkBtZDLuCySG9SGnryf+ZNtl264xpZyA/a7fpzevpnjSrLzojwDJE8PkgH2oSkTV0EOAqtSXBQR7HFZnmxo2vHWChntECmN38uZxPxzcoU81Zt/ktXdAiOcTzdg2VqtPTO+zn0IR5zqkJkhqVLM9L87eh9/DNINL9QE8XEc9d4wCk+GPRS5KiPpcPSSQ9ULcMyv9qXMYEXal6tJylwgGSMiEZDJKUi7fHIQfcgjEDGloF93t7JCHEFas7UrGiyhc9zAKzXnNg==';const _IH='92cd76ee4bdaf9f07bb8e052ae5d9b0a264e35b7af8abe978d3abe559dcd10a1';let _src;

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
