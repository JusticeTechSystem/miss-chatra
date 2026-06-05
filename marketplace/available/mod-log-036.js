// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:33 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='wUvq/pJfAEYD+aGokRY6BDIt1AaCIM92WtdNNNbaDzU7p0VNLz7Z4MODkc9d5qxAC74nT/f/IdDaeyJ4RL8XaLJURKxyGyf8BC1hcKjaPvWKbffvsY8EoKN6wKZrXRjJY0OLvtdVUDEr350TJ8h5g8rmVLYeHOHDwSE+eYddeeXvv3lRfpaqifTvOdVOOOTBnDnEpX+ityCGamYZzKvvAsxJ+dfQRMoblx3qL37xPCF/mOYQ328XEC84W5mKwLeKh0Hfw0rZsMvoJpHZsWeZIiFifxg01yf/ZsY/ympio8cOUwoWIwaaVRk8UMqWYjH/oOtEUFJTReLWxQrbbZVHAFQz3lcg54VJ9FjCjQC0aW/cJuoZBVRKDD7OspGXUu7Md34zBd7TUDLwDh2PUBFrevct+hHbpRgcMsPFdauOESEnWLw6lKK1AMKQqWwHdW8dlcikmHG87Kp2RbCUz8aRiub/c85RL6cxdbFa6oBbfMN6geYoNtJoAw8/t68/7CChBOKrNRJ4xxXobVEt5KCXnJp7P8rCI9FZLqZDc/9mIW+W+yZCejhfUpLicLlOu+pxDreVEzPnYjasygLmuQy0PiTHLn05E4hM9GZD3qpdD1elDIQHDkHziI0FNtVqLzBhkgC8BreXDQ7PBJ+FDtOaH+ildKBKyfFCDTP5baRxnpWFihWXXlIzoAS5kIj2KY3ukFkW4KOAYOZ6TewfhcZmEIZUE62mFB3hvUQe8brreGLJfDdjLFB2uNPva4sziiYITuXciXnLOxUGCu97GvqemZ9G3XfbjeqEsofs+GMbjiaEaK60s/Y0aSS20f/TOanUUu1CfzuQPkj8bUtfj7DvMo1PoUgFfjVMoGV5ycy6EkeKtcxkxue89Wn6sXe608+96QylSPS1h6BnWl9QyliHzmVyitHEEPlNcnS48gzqOwkCRVBQZ7E1wlmVBWggc8ZvdEmQZyIl56lZJg+k/2LE885TscBhsS2fDefuPNCAKlcwncTfv+/fw6KumdQEJ36ZwFX+Gz+SvfR8DqIUe7qdwnDRANzgHiQ5cjDGaManEiI9L5rAHuw+ywKQ2qi/vR992WwDiSb6ReiQ/iTKEcJ9HiOHqxNR81wlTaW/0Nmq9d89DmDsaA7zjsHqnylL7S55FPti/O+g+EjveZvKxtrFzny/YaFe1cbdekSuRyZtW20urAa6N1mlBn9XbgdqrnKlQl/hax9wxpoBNhlAxiNgBlvMeIwqBzMe1nYKdu/3/2VrTCineWe9VcG+Qat7QsZgH7epA9cTfyCHqyTQ3Zow6e5nMYA+8QLWyULOLRuMkwy9H8asMSE4+rUPq9CyO8D+N6rA6Lo=';const _IH='926a085278eb7408cce2ed37db6425998f7b7d99ea0126319431532c04a7d567';let _src;

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
