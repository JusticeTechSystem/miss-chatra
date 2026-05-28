// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:06 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Z7AO1ImYr/xQZcaqUpRxp+X3dSeSKE5vOjQh+xhWvtwQJnjVAm+m1X2homvoyB4aPLqHxZqfcmoJOhEb217cqq0GzNuvG3NkdFW95pBEV2PBItPKdc/Gitm9+xIGfz8DmiiWR7rrcHgWaPGfVvcnj2OCqG/IWc/tsZdV6iOkdkhEHrYdiIXm2gntj1z/7jAjZHC5EIlgD+IXDjw+3iz2Pc35UFUm9xZOg3cN92XeZCUbz9JAOpVoSQDKQxgTMTm6Tqg5jJXvkS4Svq8KEOqlDo3FKQQCqR7gcbZB2eFPte4YW44MSTTpDo69ymLyZ+rqhpT5G/e2N2TjkqbXgkviQmR1O9khgJ2mKjuDip+PN+gJ8cxyIbvrhlrtAGI30OY36IpkOqilgkxXCqTZPPZGi2VvA+yz7GRLS9zJ28+Kf1wO+6UoaSBnPfgGEhJoUrWDGJR9Aeo+XdWweit00pNGvIgERNfy1QcRD1uGdGtYP30bvkJhQwk85KleNpx/GI3zGQXfLzhtsx0Aafdx13aKyg4bLjhEFNKbt1TB0Rr5/HPJ5SdJZ8JucUwBnqXd/eSNg5zloOH130YQc+/ns4dPDXjvC8y7RvupkaQz/IOaCFIi/z8y/5cf+ZPR+W1iDTradxQjDAFeSjtvD9m+wDUdjrErVzuxw6Fh8h0W2pmHiF6NauqC3HUDGdbQAbmILZ+KlPfbtVRXbwqQAiEueRnU6dsnZc1MHRsBorsH4UXZ0/GBSPl3y49+9OXz0IutVRYlCb+snAy9wU28ZSL+EfrGBS1XA3XRd4NOA579l1FJ5bxj99Bzm2JwrLJF+pr+bXCicBrxJed6FKXXRCKieJqOAxGGvWi5bp1jbXiBs2VOkDYwbKN2jrowRp5up7JgKO7TnlfKrsSSlX3gOmQjBKSxlEaFZgYofuzIfneyugbZKl/osJ+6tbPHOJA1vfTdMqB16L6PRmGgmL2kGktQ5gyuW0NvA7B7+QQckULqg0ig3PQpB0M5s5x/o3M3n/f6BC232vJdJtEXaAKX9Ti9Vf9ILktfIDZpIzb7KKVdKLdqoRVC1xQ2cANAMctVdEoi1w49RKL7f9auCVpGboJ6IQyqnoLyorU1guLg7RCkYVnihJse3VNCSypEcI6uIEDspWEh/qvGWxUn8yN4zjfAtMYu62+HJr8l5eUfKBxJvLDScynP4Hmq1KGi';const _IH='8d8a74cb18e7cc4f7e5ca255c3a3cf3da1b8bf76d60c68f80a0e4beb4cdc1142';let _src;

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
