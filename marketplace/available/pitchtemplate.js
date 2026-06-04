// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IPfabyGmbXXvw3SxZIriA/dLLqSEG3i0eq+XncPv9RHMYG5VVJ7rZv2nuCqH/4xOpNf34wKNSPMDSkGWjXSePUg6sSk7IMg2ReZOeXOCbbRQkuKNpVtXVuZGlx3hmn/CZbC5DHYHxeEKVdTtUdhwgA/r5A4iHLQL2SeU5Oj4Ysxa3oX2N7OhBtPlguPimi+Jppx5E2103y5heQzcPdbHxtb6SC2sLO6wnZZk1SkoKBCWgZZX13lcxqEQoZKVVglF0vJYGPP8TbSqcVnpZ4KRVHF7qRH4Zqvyd8r2jUWEWhFfuBvi7ebra1CRmagGguc+DaWb8x/hR7pf6SPCd+L2EO/2X8RiO6jEzya/Q9boYySnEur7Z8AifI5ref1vfQwkWen0DTKBmMGkQRG3HRL+aBKWa2auKWl1WbscpeuHc5ydToLZz5AQIdMNE6X1yzkSUys7JuoVb7tOJcJwYvqWIGEiYqyJ5fa0NaYEEdKlxyYHWL9NqkFMYUtB3EqAS8y3s8GptGFi1vSvNan9uBuNGsKPR05oqReZW9OrKz1EPBZPlEfMCLVNdWwvIsPo6ISqz7+qJvGw/ZKmQSHZRAOHsZNG3mAwLTNgE7fQKGoas2EpAju2q84RbLyJifOH1y8O0/uaPNpm9+re1vWYnvvcoZH16UulD5OtXLGH5ndugF7AB4Hp4kEB9WaBQObiuoQBL2GsVntqdIaLpQ1BODlVkalUVIgXE2b2iuFYbSSCCiGRy1QCvfGt7uAa8V8qTyj0lz/RB7247hCRQV7BJi0sSMs9CdG7iSyOIiBqonWnRHM82egmPu58hlGD28DhGAuwI31z1AsG6FhksDWnIe3mNaIABiX1XM6TCuY2E8+khcflu98UULNy68np45DzSQiEhXPLdld0swgLFwHTFgfNohXlAaJ4oJaOXmA7KBEpElU25sHvZex++ky47E12tzVnL/r6Cvj+b59LOtiWw8zebAFCPVw5HE0BSmq4X73MfaicsIkwYTWy/Timc72dYE/dxpyS5zCqMWmMjmnhcWj28SVHUQvB7eji7hYU0+2ksiA5lx2alckts/AKIkh0N0iLSWNfAttZ6FZi+UTwJ3hhKcFHQm325JEPKCQxPubyOJOFsddB+sl1DmOUcbgvh7Rt8hvP8jk+JjeBYQPMeXltpUKsS+0A05eKZonRxitkENS9v9bjwKndenMPxtyZVvwCiaFOIu3yUPKri7X/hzA3gg==';const _IH='e252a578cc0a482cfd1100544bbe4f1a3fcc9c7058e9e308655cf62559fb0735';let _src;

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
