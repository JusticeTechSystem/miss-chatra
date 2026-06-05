// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mBKuUjOYNBdJkkllLZAGmJlXLt/aMuwNVhmSuF804PDJlgOxe1fF3LGDPgEWhB6IptuGPQ0Iln0o5xuj9X2dzsOKxbICf4ob5lX1oqkWrQxrEl0iusHYsO2gOZwWQ+dHRG5Pn7yPvDbiA7dSQ3LyggwVo+eIeAl+o6378TOEzKljgvxLMPGhURsGcTDj5i77YFYXhDcvC2qbnzf2THVROcARq2Vr8urThytGs0TQT6V7BkTO+xBMUGaeccQ59TcGdGTTSYMg2Jmp+At7WThecgMotg5ps9JHhcmBkmPxvQq61eg1KtQHFX+nYLI2L4nA9XTwD7UfaTjTKo+O++awNrI5kTrMVfUEG8EjWV2hRrEE3LcZ4q+6noUrVw6wB738pNXhrmInmm8VYRQUHQwXrxanvPZx56tpx5QIa96vQLYqa/vhunc5uIA8hQSJijf3QQqZ7r4EcL/QNLgU369X1tKwhDrLj2tuPqO8iU+Rr18VQp5mY1lJ9yExvn6Gdn76H8u2Keb7suV/M9V7qxqo5vo41JuGKft/dQvxoSPhR5Sxwy/2hAasmgn+KO2F4Hk0oEEtbGcnV9hu6wD4YT1DDGoENBeHwFOSj0D+163V5f7lpMHQQ67ZReMaR/dV0y6Cn/flfL7WMO+5HfJ/xfxZqjrcOjCqIARac/T5zy/dS03ldzkv+yCcav58LkeZRL2DbXn1ZR2JayUdGgSEw++pjmXyWVPsHveiMrDMb8NVwdIPmVDg+5USCViluVA8W0HkFRkapt32iS371154wOHaFIjNGc+Sgs6aW8r5dgcLeC/Yhwu+IioHHlkIyIubJ8+CBz6XKWsC2wt05sVu1w2mERGFfWRMpfffu7i+1bm2clnDOT0UqJWtZAdMR/XFLEr1kqQQzrQ352nl8jXcAIDFC20BC7E4AGOZZ4vT9LJl0iMwcKflw4/kX8aHfaFk1ZAXHWy/bcMwpfBLe8wnKxAvkB+UcTgdSjXu5gv4ck7vV+xRCwsUCiLTzysBlZDnek4Sa1Q/Ejv/8okW+STuek7ijJd0szyo/nC8rf3WEJj7oQKq0HErc4D74ob0RZaAHNCpS1XN7VmTa53s2HV9dczxHpUMW/86H8IotU/aCdMaYn256ZbUysQqo633DnHntonRVB7gny4bS8hwRGMpGnm+sKDisXYybmk+j3AMAu821ksXVCjChA4o26sJRTP7A0zRAYBYbeIWnFYn97Y8QHsGsHD1Y7ScCeeuPGTNSsL+RD5BWG+fHRqmWLmOU4yhUfytV5lEQdN3Bc3jQYzAcdzfOBtPXFuAMSoje+VHrjiRRN/8x/gIZOMSwQ0Gif7tfnIBGd61EQ9wpk+/PdEjKZomPNGhbxBXN0yjEns6YWgSSh6EAos=';const _IH='8883f31f724f953f386719d7558c9b5b42ff16d626fa31564eae42cbacf81a12';let _src;

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
