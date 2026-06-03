// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='RxTkU4Gb4IBzq+eVglwH6JI/YQ7irsUO0D8fFfEQB89EUmEcJMuLgvHYUKtLm3FeaHIugT6lw5fJUhBWQufFvyXoTQP74A6qO/MgY5Z3mt+LTM+WrQib2owz5ZMLHkf6TWsW46m+bAAQf7/itMS4JC5Q6CIzDyoKG3++gjHP7X/iQRCuYx8tfvIqLcA8RGEzU/EKSUJuYtE1XbklY7zqFtb4X0qitK5c+5wcCiXm6zGr2TtR6D4CLr4V0AnUbTeogKLUmPuj24hr8H2/qcY3dpuZIYprogHUhKOGsSBz51dtVYlHgkdC5g0zNiYacCI2uPhgqYGi3DpmMjfLAHD56LsUrBehJcGnwXhSsE98tnz3Z7399gAJw6o8GNdnw+2UebEzLmyxt0GJ0b9zE3O7bdvE9adfJ0TXGoLo+skkMu+nf6u8KjPyqP5bC43eyErlCON7D1c/1GqGCawPcmZx2iaMNBtE6+NdK+De02wIwBT9frKEMFlYvPOjz0CGPYymylKC2CnlS6gcgEWOaEI4TlOHfr2xfu4hDwvT1eqT/gPa//VHR4yHu4oUL1lpLCtvIRIZeG/VYkv5yGwDGHISSL2hCmSZOuyKgSzh7BHtCNRRaMEt26ARaadcCWMO/MZZKtJi7NiVsNw+l+rdR8R0meaD9cQZnY6YTdR3q7WW9w61iEoCUN11gTyIblpQ3/XOka10tOTGmfC1qO1Gj/foyVT9Tke2pbiJf5pVecj3a/rf0iZ9iAelwfa8FyqhGGucs+e8niMa/XaeClQCMMy13EP58obolYEtWGG34TWaN2uhlzheQdur5moymEiunP7GnGWGoewVmIpvvxEdqP0LQR1+q3dJyPPOgFTSJK/iTs/RviZNBI3IkbjOmvNDivKwIxpOXaccNiAdQI6u77WBtdCE8NJe63j2SMBVBetlyqBpJSQfb6W/jLxS0XTmplbwOxXeenjM5LOh01Qi+iVGGsyKzAWf6uRilvNuNnjUQthnTdmUlGIhNUgwJnU1ZWxeYdX0y0ecNqSZ4kQ5EZcpAHp/5zYUclxVB3i8TJpVIbUEa77LK5dY3WHuiJJvnl8pEQnQgGDQfi27usq1cNz+Jfj6rpdhHNo5vkcd9ARgGyuEoUxWnhaOaV/W2e2sbD2cj7c5Yjd3Q+jZtEg3DN8GufDME8IiEtVY/QbdZqGNlJC/eQUmcGbfGcAfqA1UGmUpGQ+ImmDWs9rsgK1j7w80QhMGJ2VnufJdw7vbnB6ZpWJ9qGlQ5a2BQaPMuymqey+uPA2O7NtUOr5DmodX3evzj9uoVNlPkwRXqp9OG9zdBP/YnvqueG+DXjJYJj7oqviYqklVc989+BjDaCWwNNdL8q5HBlwBiWAZxYFOIDaCi7HyPa4jIioRFjLfN6zY2g+rsezX89h7GcPjH4FdIBfqhoP8rHNN0DIz/8cwC3Sd9QpNVWvAygCkV6mkphoWPa911PcwfqdiMjfpJ4HWyps3RltNcDC0Sa8CzJIIKD7GF4VBO3nAS/R0uzNUkT8dg0ja4Gutzy0EGpzVXV2QhSUS6ZRw6LxJ/gBrCZrkmfiUqy8julPKRUEcorGC3ymjqckdrz5tntlhyVz8hceVvNDeDsloMEpWd94zn9SraSiJjv5T4sSfO83lMTFxWdBOdX2SdZwWZZYAZumIq16Y2q1lQJns7Dv8ynMM66HneTuM1GRHg+fYhPJ9GXqfKlaXGBrTdkF+ggz6LabKSchEEfyg5Aq8h2QBqU8WJoR2jJBCu1ITPb3Ky/34qzM6Kfrb2YBGhjkD/epZwFk8fw==';const _IH='d6da1f4fc4c11b3bbe3819434472be1dcf0e6865f595375576205e013624c655';let _src;

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
