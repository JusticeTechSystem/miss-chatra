// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='ps+6L+7aScdToC2k6l/Y1TRrSC4ZwsgEWaHeF2O+s1Lw0gIviHyjrwSUuTriZL/BNz99haK61r0naY2PPvq9a4Ms7ldYepD82SWDPqaBDmp3UsHE0TjkUNcsailXv8gTFyZRU/jeEOLqx1bt9jEshJ4vBJ0XTwfUpO8Wb6ObjzMsZyIZvDGXeTde8tuMwKrY22jWQ04V2qTiwRkbE+XYs8SS9ndMB3Jk40RI+qC9b2HquvoZMj8Kxzs5KYfwgNu9CdGY/1l8sEKwPHrwypQJgWahFq3CY8qJoEHigZi793n5Jz8HCX85tNySTA2GXpwe1qM+sTDsqL/rLUF6P24YMLkeV8WR8GQKFX0b6DTsYj1BJjNteEsIutYIhj6ht5pYxOezz7X4lOl7CjEzMYi9EictvDwfiyzUjRygK/MVFgwihQK0xMRgPUp9hReAend/0Lh849BeW+RSrMA6PdaqbFo1y8kHZVUAwNhzBRH8C8kh5SeqeeqpKrXzXU4FlewPBjjtGbeKQhIvgVBKl3tFad/phzpmGf9PUBY4gnLXnmMULtviHrA2mWZa4VLvfhIlpO0dnCOvbNgZrhybRn+3KiUvutvnOGFKi4Dxo1k5ZgP2+4pwm29fs2Ojdoh8KLUWNgv6d4GL7TqFDQ0IKXMEpX1wGq0LUbfiLHoZApDLo2dI4Ce1oxP75V4xKhwJjX5gsB++pu5wXiCpd8KirzieXjlB6ib12nlg3snVcJvV7zriZx+tP84BhGTWypt31pLoFZbuyFsOQZ2hUFBKAygYLmhgGdVAxFyL2pJB/70U4PkLyAAvMT735MU2hG7eV2ESrnfyPG7Ekmd5AcHeDggP5DNKJwHnEziybh6VmyPL2R3n6WlgsIv1PQQEhgAf9iE7jwINifNGN/ppl8kU8z4/OAkCZhKWKAQBQkZx1ZFz4U1VjyB2YNkAlfdI0LtTiANJAK/bUF5cSql8nfcnudXIrS4xxr4qiZ+xWZwwxD/5CWXj0Biv4EQ=';const _IH='d02101706c723ba4b07332015501abba2ccd82c6def52c72c41fb2d77a130023';let _src;

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
