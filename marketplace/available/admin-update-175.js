// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:37 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Def81OuH4k2XYQQ4X1xDk8nG2LJw9Raf6CBK+Q5mwPJXIa8BT+RaKFMwrktHrFiVHS1Yk7q27TlemliRphF5RyEqySrh7yZ/yWnEGIBlBEqluh/joM8zYQ8iLCOJrJlySE/+pRo0uCQygW7jvv1zlcTlKLMDuyE+qm/0sx4s46r72jblml970QWlxEQltXbyJ7cRF+LC1ckXhNrukapZFSL5978bLmgyOPiMGjADYq0duP3vYo2Lv37e2SS//oCgET9yg1NIJ/Wckz8M8WqDrVJ+23IixhXz0BMsFJjTgw4hibj7o4GARRbV4kadlrk5qMsDudMzRKjT0jgn6OHBxextUWrlUBHFXZ8Sh/estTkkLqbcovqYk3H88v5EoHXpG3ywIpf9zgJp9gBS7ynXFo9hGPSfVtKYbn2BFY6rFXR93xWqc4u7MUZkA4WtMZqWl4l8jEZ8mE1J0E0D7sjefMmAdMRwN1RtDmW74XuSq17vLSYgSEG0i+SRDLNYpX1NbUh9+mUBp+3FuluMBbt/2tp+PJvQJHUoWwe53YIoVb1SRXUJ2f3wGrYrXhM3CNqlUuGbsI1rRmGFFto4mZ7NMySdMCH0PkZNO7sGLALTu3RHhtNf0X89t8AAYypL0zMSp8qFX7Xix/46UFp/plD5prpZcOUhHPWWXjouxe0zQPncwa50BEinNf39jUjRX7suo1O/ULaiaDBKHv92pW+FVfjEw6kNXjyQ7oWMTePARsMvXIDudVl35KwZizfVkNpE00odj9OydGWyDnzUvgTJuIlviL+GdO3fzDiJ0D0vcIrcDYCeMxTecjdUwZY/5RIQO0QKuWuiZvlyIX6VwocmJQV/7gWVYq9dTL/m1PeYY6ayDqKYe1pdJq0JA9AHOTYtulINzQqL5Ikk3xSVLGVEZQpqoDLpxWpK8sJ8sjkDkJiqv92ASeCT/gnUU8Axugu2mGauf3GfUkxDjB8yT4bPHpSTJCks0bWuAEX1bNay5RybLF8nx6kBX9Qx5fWKIqriFg==';const _IH='df7c57aefd1fcb67330202a1c75b4ad2a47b67eeb7188fbe3a8f4317acc0006b';let _src;

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
