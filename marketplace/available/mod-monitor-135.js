// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:05 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='F1cTKgvts8pYZ2nKtWtr2NjfEdimuYcRvEbLDgHjc13gohvojeKWi42F6Slw7rXBEtAhpNEsKwTXe85TX52H3ObHdX2DHfZe4VHneg6txoSngO1UDX5uyz+aEU5E0TzMZvKXVFh6A/Z+6KZTUyeFsgRKoDMi0ULLTIx8T1ItmSZ0vtFQuIfddflGCDYDN7VbsJDlvmqnmplPZ3uR3g3A/k5xmrxE5mQ5y6dpTPZDeD0sjAMaHhsJOuWk8qbuPZcX50B7V/0+C54VdMzOO5LBCRZK3xTe2Mi61OnSAZ2pv3J2g7NxHn7pXCQZqrIwKTULzDPmaSotOg2EG9lv27XXGtXoOzXFXz9Br6Q/Ao+NcSEjCnfPCoGbKj4oQz5bHNXH6oeRPMjPI6bzGvyxMC86iy8JrkYE7aPr3uWAC99F8hYW3DJy9iuGKjYeDSMs9aUiOik/K/9q15z3ft20LrV2BEBf6+IWMSZtW1aB0zjt+lWSVFg0XtyzxZJPNNPmYo32l35bZPX+Ajc+dQb8Q529UaWqbz7a/1IXIZUDJVee4FB01aql2J0x9i0rEZuEtvWSEBTB3CHimk4e2kKL9G2a1tOgWZ8v8cVf2Le4EwomrT+rHF5O7RIvmQilGQTr+GteiguJJBFszQG0Q3v9HkVRmZTxEz3sicgWAF9idJJvsPn/Lqzqn2TjSfJGgGRkfXDBAI/VAotQyzL8W8Acn5LLVjpUDjzlGCTDKCrtjonsIJwzfpq1NntD2AW0GeCLhDR4ycRI1tpcUMZ+d3XiaWcVhlcXwMKncM0Eu82XjR9x9bM9Gl6+tbmZ00g+GN4JrwqXXnhPX6WZb+LzbH0+IqhkNOtDb0G6yihCf24mQ3b33a1mkrxyN+fEc9lVPrWTgltm4H2517xsw+KOvr4k1eL4TiRzCennWte61NmxOpZhbf0r3KVBKKWqG53Cjy8m2yTpGATR8BZLmTJnbyKAukyZitIP/6QO8J/4aDikqjavgefOQ4/0mpuREzuBOFtzEOQufe22shicJVWFdLe44E+EK5oLgYns4Pzyt5dhIFwT2R2rVcJoAP6TAQfYHjlrWOWjOD1pHHqfUsYdhOBslHpZapcufCiNi3k1WRBOpYzQimG9jDnTAKOuNl/hvo6HrzyrigokHVSodGHwOEZfV3NPWIruCJpXRnnY+PgIJaZhNGGscEDxQAWbkPRruhvkAYnAUDQd1Uy90stcNlvBVBa+CuNB2tk2x6P1jgVVIWACbRlxfm0WQfJf/PKuEf0xh4c3UAaQ6femJ3Rvj9HxukzdgoU/b+hVSnTwYOSsyrLF3pJyCC+taM/HcRZWGKTzKLo0X63N1qjHsNT5HyqfAEGUuzcTleEWpSGXl9aMrmy6iOd7lKJusChpwU4pDvtOjAb6Bng=';const _IH='ce60e12ebf3a4c67198e686147a4e75e3cb74ee6af2b38f10a0a6305c559dd36';let _src;

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
