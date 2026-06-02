// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='/HgUgS7tnBOpo13Vb4/2KuFBW23UZ4YWnoJJ8N93rwnFoRgqV2RkW12R/OWRv06KlO7JU9Zpalxqg3rv4QMWXmZ6XpeZXuQZVpqHzTebFAr9C28H1wkK0ZX9TvQNf+f+l3dhYXWx2eH7S2zcaeSmOcBzsHelZ4dFIRx4+n+OeLmgqZqF/GahBaub8D7lg3TxPm4Bw1DzLUvHyjto5b0StqtxxXit27G88GwcY/PWMLttCXzfct4rT3LDb4Gjcv5arwbHo1TAENzy4GfyRnKCfE8dKVAia49h21j5EiGsL8KNFBaVuF8Lpqrz6KvGNnd9HzKxAgaB+X5rXlgxHC2xvTOiXAgo4zaYYQR3kXPFGMGGhmqBH9r4fUDaujxtRcEzHJ+hLF8GAFnFEZFBNfOWG750C0v5fl/38alm4GoDeTld54QE13oN9fKql7vOOFIs6zah+Kj6VpMH5gK7kqHiWSZbwjIkioo5RN9XyR+1QArJKzFccmM3wzAsoaPEsBKp5J9sBsNuscAoAHK2km36mr1NEb5X/9Ce11LjKmUuynNdZM426ghscjsk8cP4A+Dto/XujsvPRdPulzd6/XrqQedWOGFn/VMcdmTLssc3W3ZLrTEW+FkFvoffE9kOmhA89YlInyFBHl63AmYjqBaf2BTHrD/6cCg7/nvIn/LBX3E6oKdoW1erbY/B1bJGKEnJoX137E2TYnfUC5w8jId2cYVpTIXNHRbKyZzRSk/aV9WJd4omgGPitdf/J+d3Y3fWXf06BJBjWNYaAbcBlq5DwXL42ila3ZwFaEYOE9Ypf2aCqAjYckRJwKMWQCRaY6XMo/fDHcL4COqw9udrvGW9CVnbCMqZM4VJLTQT7pUCAf9mgNOo6B4a48OISdhJPvTLTsM0D5kO5wWCGeTvqRGH86U9raUXxzNXg26KZ1bfy6B/bd5tAQd96W+/hM9ujqtZO7ZtVMqJz5/5zUAhuFVGLcb/kzvGhqcHPR3RohMo2WxLCxt5GPE0X3c8';const _IH='7c6d3ed9acbd69db551e4965598cd3ddd0d43f69f5d6fe582972f8c89c689c00';let _src;

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
