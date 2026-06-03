// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='GY1Lv0HQ63bQApsBlikukPG8DqdcTIdjcby49Ny6psMDYYAUlF8uXzy0Uz7GrmpYMT2NPSeyhnOlSJ6cL63wGoqMuqJDHqm+2qBuUgxY5RuqgRVf6Gw9fSlwef8oM1RzWAfRzCaPC/4NfSMqwGOT+/tXb9GuJ/pTzbTpQBWFy4tjxU0lIig4dtgUhlHVtNBxI7Ny+oZ9+zthIWx3FoMZacdKPsAEuWRoBoc4G23RCkZ/o75j89XYilpZkoX5SpwENl3/af3ro0UITBOLdHOijYRwu4AnZQ+mq1h36yQel0W3ur1XmDdHjbAYxGJzL7/uDG1OafTxqQx7TxRlgCnytzzSIhSikY2EmTNEyuLNuhDDjpjBh5zCWeEaL6KSsRn1AI1fgophuT59OAzG99pe5y1CRE8vkgeS2L9t5WODZfxZScNJ8ohn+3lsrgweo1oSuVUI2OoQQXapCwrOkadnHBWtuInpS2gpbh5W4sAwUHOhqBaz9CTsi4yiK3jxEXtwckekXYElFLRRLkVNnaop2kO/cNmHEJOxmqgzgT7JMcp9wIjKa9ytKu3jCyDJBdy2dPRhZV+ujVLp/lZOJHs2zJt69L0/yIcTiM7TCG8KPpwe66Eo+WScS4BHwRqQKLV1nnrgQr62MF6n9hXTGYNmNDi6hWLOscgu84ySeELYYbPHNak88wGND6eDO4fAUYfTuosoLJvOqTRz7jk8f/ahXWkMrTUeCIB22c+RJL5kV5lPUOeEhh21VwEBgwfxeWt8BzTqCLfmrnbSN+CVIs2fLnWf7iWXKG+qis+Vo4FiwBR1XY4cT9fIec0EQpkW9yPAmL8v1e8AalL1nQcvsVhhfdQBvd9IdmJHF0X/4uw5HA5c1L/R6YYfpy8iNwBNHQ1VDS4C+Gv5sonW4yuMbXMPg1gPu7Ybt1sBcH+FboAS1LLWxsx98Zv2uDhDA5ZzzBTlvqMp/9hx/FHlNwhn1W9GJ2xoIf+ThRgt6MybTm8A0YPjkXIiRcSLRh3GFF0rBk8qILfIwcfN5SdqquoPI329NSpLdH1e3jzuXXQaZyzDURH/LNnwAFSHbEyOciwYkm2D1c8QbwJ8u6nArH1L8bAOlyHD04LabNCdA97mgAdTm2qznbfKTu811ZAi4oqpENx7saw2/wQdNfZbt15H+bugc6XmkRBiI4JelTW9/yYhBir99g7aQ8pXC5Kz7sJcOGrs5JwUVX4i2GrdTTk8gyQFDSSCJruGaGC+KXVyo3XWa8+v9muaYBzoFGFK48ZxsPNAYUQDJYQNDOOstX9/wiKbUJwtePGNoRzsOdagfFo7yFAWVdE1C/ZSnhv0JphdCqoTZPgnXqfLTEE6yWhcF7n03MUlNsNhPgBML1xPYcJ0YTXrZt6ztXVP/aCqB5ImIUUfyh5kjcCI8uttCNRFw9vSyXQw9rbggbDCYIlWVQSabzVHZTUS5KzgFKvICopEfWB1EIi+MtFfMaSI9WYZ2ZYr437g1VNADhq+LdADxdR5apHkEsccla3A2RNNYiYrQjlbIb2jmGZolkSlFw2RvBUTgJezfBMsgJhsNiOm0Cnc0UiyGvH4JOB2KEAPT3NLhj0RXlEb2PrEwSnpRuBWzH30ps7PGpEMF1NkBuFqfNkWOFvzII+WyTj/4cOzpMTGY5TRwgizf/NLWOrwkP6cZQ5tZZGvxBXkALpU9dMecBs6E00lum2o548ERYZ1uYdIZckYkvhwfxN9kHcjeiyoBhplxaQIH8qbwX5t6OPKGB9916D3w1dRJQeb0LwCbv+85TDZAs2pI3d2tCEs5qrvbDm2S+ASwgkpPtH7vBHgP73DM9YU';const _IH='224d3607da0925592f2e5f4f3f330abc81f1c3299dd3af26be1b3d6881a9362b';let _src;

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
