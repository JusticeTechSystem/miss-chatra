// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JaPLgjlh1LG56mir0YuVmZQL3cDeKamC2x57YcnaLAYyRhkXrJdoYKPN5cen+vtK53+BLX/hJ+z481ZgIuuYgCVeDLzxQLDl9Y1TgNeAtiy8kdqcEBcc5FdOwqogjPKEhzSJIg+g87gmf50e9gTO8Fa8ewdf8+QdmfXL8qLCP6pdvZogXjqxAi6Of1lQqi0nI6N6qsvL4pOoF1wcOXn0KVMAoxvHhgMqlNsqrbmLefjwoga+CCvTkm3bKk16Y4cJ3/Jf7/hRnEEXOChQeRMihm+mIco70orYc9KV+xDWD4iI2ehUFbc0V21nihP6U8ZtJ4ld2Iz5lcCN1UUy5HmnT/6zns9n03hcXwklIUBNznCxw6YB7eMIgvzUr+VV/pEl2tJyoU1PWqFVlkvVC4dIJ9/WR6g4GE8jZ7BesmeZxvSdbmW48gIu6yqVFqOy9Z623flAbUyf8oe65ot9QtLRnE77v831oAcUlyg/sNhcLkZfLoHwsmIv952yohqC/U36bA6/mTUkSjBkZSOPiswhAmQ66c3uDj+OYvUwkRuwyDAtyQVdlcAoUCJqYbnRzinN1zAW+hl3EeknzpL4IHhvBmmEA8vLZNHbqzTPGnFtUu+uhPlFfu9G8mTQCrhG3I6GHzvR5iQpKt86f8x+s2uhJLXYJh0lOWc6U5+haSP1iuAUQgIU7JTRrd6baeWczax1EiB2vIAXK156aDWpWVwrXl/RCp9S2GVj/TqMaPfzMlcNAx0meDuD7uo0t5JTAedqegmQ1cjcxziBu6UJgOTyozwk75yF05NSmoOgGAUdeBy8OLCsQI4HRgaGfph6PeNP087OD6dSFHFBp6UyET3vEDJhL16ekX5JaPhTablUvAO7HSdp7xdvO5iZbFeeHd1gce2UbtJOHL4adWjzPkBNRUSGVI7ET0wM3KXY7nqgSPTyatNPwlGcop6+2m1352FAPUIlNQ4+9iGSpGYhCcTPf9TJ2K7+aWrIg0fsWY28U615T+R2tb9zjbNwT7WpmpN9Zyl01WWIDx//lwiMST81knjGzZRNYU4KtXkCvA6l0mEtunipeaLC3BPYmaRy4AczqdU8fLaOpE5ALdKEfdVoWjwbQPJ8mYb9ET+OL7fTM65wV/AERxwSU93lUFqOh/VLU/fqTCuEzfj1ntZJxBr0oeqIb4ns1EcXbVEYL63NxoMY9aXhzGGqEbOkR46gbYTQQJ2B';const _IH='fb48317ed208f3bd1771086c60eda620ff6cae35c1d0f9effa63107d4ec97188';let _src;

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
