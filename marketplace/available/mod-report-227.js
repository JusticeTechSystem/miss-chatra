// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTTjXX13/o6f+IUQ9iKMMC5pcYzO0nX/QDppK27j4/QdPgVxVtx1HbbCA9BqFCP9C98TcjEztM8rccgxrBfOw/FBEkMYf30UcQxKb9tHKhE42cpkcmwf83bmT+AMkgrdxAPwJ1gEyjeeL+62Sp3qJMzcQZ96jA9Z4Khk5M07M88uUuhL3+Vl/uCQgQ3mIZbRq3x2TPPXxNyVeWtlDOmPP4uzuKU6+Y4y1VDw50DKKyks/AyHy7YtqHyk4kspPDwRSuYKV1BeMsvJLlalGLC6XsNqDCaiBcdHbxdcsgZ/FVJTKMp5UtqN8PifOSuLpporemvoZ7Pr2gOt5cvp/jvMALWOe7Q/ubycHNg7LuDhM77sLixr9uozeUjQeKaLIGJ0kcLTkQgOO6b2m37thgIgSFLx/uYc4S4fDeDAOeq9sZ8lHbiryMWz4hbZejnuMTi5lUjHaDYEvN6yGCtfVAQUPHrRj5ksoFSvyVW1Jwfk0TgFaYBS0my0sSSSbmUO9SD2rcZtQcEypt88FWWh8kIQLH04y45Op0o9VEMUAUEK+e+lCTvwdVCcszxgglozAe/jvLXkHywm88VdF4Ww8rWiirTNUhS8/e1ZxwSw7nMj5UeP9ikTyijcQ4CyQc2sCbVKgrw7sa3eMF+jGpfm7FkHD2vLeFTJpCowfkxUI0IiNzoyijzIhOKDRlHgmsZ2qMZMgGDVQNpdR8PrMXzJyaeRabfQc+vw70l93xtP3StzrJfeKJoAx618wahXicOnlBW/F6KRU7cTNjY6xxd8/Tr26n67KK4b5VVAuRCOf9QMY6+J4twinmDPRtxBBdKgQTNYDRDKL8inE5uLz+CG22CsKfBNtAkSNj2VSWz+dh2tG2OGYvfvmjQ6schzSiiQsRu691MBqi9WXeJUSj4jkg+mXMgPqaklXkBsQ0X9x/harIkgrIYsV8fn1OrrEH5MBJS43YdMKPL9+LqdGkZNr2I7wCCfkf3QP/v0YDHdOFlLyJZE2oYYx76u0+funB0WD2XLdTVoMWkDiiFiuIXbuyOsHHRickbcgMkPldMA6gW2q+vZktmjKjrVshkQrZI/avStIhqCun6ndUfx2XZFUfQdgL2909Zkyj1vJxvyK5loldw0LIc9WNdilhinwxKcQe8PegRMyl+B8MhrJuggCNrp/FcfzNvl4TgD3VDfCrr8Gv7viOye3oncS2O5CAsj2yf3XWmZFL0UiCP4W3pOJWK1iMLLmrVrnbKTiYRRJZ5RgVc9lD6y7eQxeUEa2lm4AKHgXNk06Sa059bJEq+GGkVMKknBsF1i+jTgYuU9zmMkB03a8TvxUMmwbE0frtmCExsZp0RPuu8uu/8W2NCwaqSL8XGql/fdSKunNFmhglrJrxZGPnnm0Jkylif';const _IH='81df35951ad132f23c02e81ebbf93b96be939bb8fc131c3655163dde42386b2d';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
