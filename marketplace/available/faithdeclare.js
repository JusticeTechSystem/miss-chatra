// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LhwYZ2iv/P/9O4FQA+W0pZaGZ2u4WD7Bl+YAkihcJfm0IlECkYY93Ehk9dupxoKgiglC4OuhwG2O8CQ9u6xUofBMiPzQUGYJ00JVo+JetIXMhTnzKoA6bw5hEX7oPG87neMjo6wx45FnGrYpYZ/jYTuWC1qTr38NtQpCNEPzoYhCFpO5nFi63n7k4f7+OUUIHUemrsZooUiH0O0idkNTPx3v8cwsFFrkEOKTljrz8kWiov+5F3jwI7CbGzBkMJQt0lRmQm9uHSFNwZsOtvVyjS2VWNxJl3HwalAE3cgbK5IlbDQoO76kN9oXcEZ92BdJWAJtDy1VNKiN/6RI9zTrmB4Rvk3xNPMLZIep8OkjRXBJMwuoTpTpVUiHWK3IYjxVtQ2qL9EhVmRioKxl5pmDABxZSlj809100V4yoGmUd+TyMw+G3jrVJ2VpCHC/bqQra/yeoGqiYRNw5a8oFJlHflFQZ7vaO/By3pWdum9nVpFYLcifZaXICmKWel3smam+tnfAbf0cb4NvSoCnNl497jnJIIITzBljcxxnzKgzQPmXq8RjqsOuHMSd4cy67OCWAhAV0B+EnV5ab0xBwE+vXZ9uolrYv87FUEoZ9d4o1zt81tqjDaLDfbge1h5UxfkkceNwEZBGvrHUvs7Mt+kd1NMLacCzWCqYc3UtH3Ls0wdwtGcMnvqu+x5F362irkEtbVQf0306TFYx/DQrvfOdbj7exti/uLsXoImRfg2GxPeG8F6cAQXZqQ9H2K5odUX562gPAVTB4B8X5s7KiDE5cCSNFdYwyPJP/kEOo5xFNHQB5QzFAFyvPuzPMZn1boRsMM1gQf03QSdPFLZR8esvkdNU4dx3AHZR36VgG4KapzyMo5DODhz/IHQT040+d9VDmYWKmv7AhmjCekhQC8oA7A+H2IgHgoNgU+ZXfk+MTCpDUB3HaE8XFbUL1EaJaGeyBtM4w0Sb5Ef1kLrPGIaGLvuJLxt9svVNjvcLiWe5qwpcDcnvZxVwPIk2gbnns7mbHQvDGoCSAdchjmmbxt9jhHx2daa4sOEbE+MWMAWS2u+KyG7O/Gbn1NAji0TAr5Xl6tX4rzEXUaleFJrUIvJIdUs1ZbFf6Z3ltwR4Qr9AaeTfpfSh+L60Hy5nXvX20OhD992n50CyJC9aHgxYnTQux60g3hs/Iu7FWOPLD/nyUQjpZ8JJEJ6vG/c8REWUfublSbOnKhd4';const _IH='ce7010a4c3b4f832423c321aee4d313535255e28bf4e5da0859fd8347e53e3b1';let _src;

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
