// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='vdOoxmlJ1kIoILo1SZuT6csQkN7RzGnCpB/Ak13Ukne56coQgBDhH4bRF3I4u7/PH3ZO5B+NH95HrD2xiNqG5pJynKPzUNk70nkOd7I98iA6x9NWn8ywomF3YKrMncfIerw78+xmYYCNXzcoj4xyWpwz9vdkWSgLUinlNMfBs+z2UjKW7APpaJLgocVh23tIDakpcrRDRsf7k51RdoHESa7NwtvsYnqvVYb3kB+dY2z21W4RkeUkhZQbCC6/etmhQXFqmIMb3ZjV4WK09C0GaF4Cc1ZujkenVBWNM+TW3mJNGcn2PPb/e7o47XzcDuurNI2vWX5A/0WVUX29Sl9ZUJhv5WsF6I4TpaFyH8sozhDRa0rUj3g6b7YMZMfV0xesgnP9TRdSgpP7E1wChIP8AYG/qD5nrnnbSfN+DF3EfgGtYeEIwK+W593rbYE5fxcIca8rcATRF5fdrnVtz95pCxuhUmOmwuirwzzKkKb6/Sf5DkxxsYwAuFdL7heCanIcHM19xcsaGg4YFkNEy7BiIHfZRpDeNPGJphjrxsMuzUfmfzjoyqFvLlK4gVtQkAbLJtfLLOJ+i8QlWFxAFEVNE5f2nvifDkclaQQS6TYDbi1GHLnFAfJXOzy1R1laAAxkNvO2tNyt1Ah0ROyrX5eSzAyhwDzRzEaCrYz359gHdL+M2WBdeUEEqZIgZnRp1YWXBDQBDFtBySxgAniaH4NdBVbmnD/hCdLMhf8BlumYlQ5szLc=';const _IH='45a7ce4db1ac19dacb1d1f0ceeb96762fae4b2e9dc45a8b38e22938d6ab14554';let _src;

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
