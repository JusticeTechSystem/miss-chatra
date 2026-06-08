// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='k0mx+9xSvH9RWVhwxY+XkG71I90BsfVPvzPlFeOrtNnxpcrhU+Xz4AZA7b5B3eu/MgMW4BGL/2PImWBOVKlFlrgfhc5A99fMI9L7Rv3WaHzc4wQ4iWDf7pESm6YDCRuRJIRrEBZiH674XSBq63ytYrdw9BbUrgZiR8b34UrlQ0SURVZuxJa2G9OrKxQwnwcXyEiJhZRn3F09Ed1SvRUtyDRYpSpgzlUJPZYHOFiJZAn+z4AFasl4ZK5bEO0E6YBt17zZdYrROa6TAXhG+Ulha+DjndcnquIAqDhzWr2lIrsGojwCnwDu4k3MK/CTbKXlTPKoF4kB6n0bF177Zlyf4OKkm2IaTd3+l8AB5aUyCTvI8duVphn7WQumynGyDWRj9AdvJ6kfTpeBMaCrwUmmYzkezm7Cf92eVJWTPd8prkUTZ7QqKwCUqP99jZSDAj5rgR53rFYK97XDkCN6oY9zlVcva3Sjjr9Xe4IGGkQZfVIPYmMN3AUG1Da/LAbICxcZ5Fdqor/PNEgA8gabv3h7Zsr5k4QIleIQhLfByt/vtzCERGHUtKxyhxMERCibPaTfIxms2W8R8tzrm7LlPmDlGkbeo3hN8axJgH22yJ5mX2RAlS3opRNkxo59Wl7/cEh80VFupqmcWDiL/+HZJtZ2AgvuCCHIZis1hqHcBfjmdhCGKaztZT3/cmuCt/hnHvEqQr+tbwIhtYYW4nPnivCkDddeEM9+tvd1nK9crE7B+WbhBH/AsODKTNL04R3XoH/wnk/DuV357+mV7xHAvbDs71awT2lCwEmj+7GcLmW+AxDpLk5ehACGJmF76uzIYIOEhWLusd3jFiQDi8w31es01qMMdTzUf88d16BXjVICYChu+c/tvCSPj1r9GPFWYXmx4/ZJW5q3G4vHA+jSjKOM/r8glvcX7Wx1MLCV4pyjT9hvOvvqYZXFM1gpwDqI1hbLSgmdfxzGcnRoCeCMSQlQK3/813gUyN3x3E7GGQIwmiEYe1qTdM+4FchOTsXAp6G/ZrIrL5DGEimgYN0DQ/vtk38lDgObI++ZQpbas3K2fD0YzUmhvKnwNhr3+j63W/3t8ZLqFw2GStVPp58PH5h2XaMpS9Tbt2sjC2TjndvZX6uV5JC2eI1vrDLrp/YKzFYJ6u2cex4MxmOXY3XfUI34B2wzzPpGsJprzINPQy/guHQxa78y49RB3Ao/w36Up4lwnwFwpSXdxxSraA==';const _IH='30d408282f3f68065ae65fd9b53276c91db313bc16fe82859efaad4dbd2cf980';let _src;

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
