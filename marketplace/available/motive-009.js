// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Znkvm9Ue5USSsRKnioBEkz3znUp6ILH/ccKqEZVXoFri8idL5UAUBLivn7EoEjs5z0xmsXjZHY9EQgOBI6iM+vBl9rz5rSAPBLUgktAAr7kKMywnJYUBNzPPit9Dfxuy9oXong4KNVeXpRU7Fixy4xQb3TM/XHO5+tTiTFkzbbOulJSBnsoig1n+xug0xkQG0uk5b7l4Eyg/zTh6ggPNOXv/r/I97VIaWS/SDbrBsU7RID1QDt21eAIs5b4xcXgKFy3nfasD6MIVXqr5YA0qg8iZwAXEwb4rPwNjoiWnwS027CXWXT4i3FDH39UpXyCTpU+LDrdKppIqoIUXH1vFdFRE5GzUc/2Y38W13I7Z83tnXO8vjocgOl8DS+AS/fFwvv9P9PQnrKLgBGv4/2iyoeb6ipfB+UbknOpeXqjMUkJJx5fDh71o6LrsA2Oe+KWZSOpGvSvxjOJyyf0omVTg2ld/jesu2xisP8o8XtNwcoWz78kb3p6hBEbIciXZ2CuyxwL+nyWc3YTZ4i4L+W4DjvsNshEzCZ1tWwlCR7VuyM8DwfrkYU8SlDCl60o3b8o7J38qwB5u04/19VmmeQwq3/wsNaY8hZxFxdF8Un76QupYR6QHIn/hw+xsI6KQdg/GZPShQmfP6t/pp7gO0oUekrjHiNvPbjLQoDulllpR+wZCLrNQdFQwPgJvsqq61948B4SDdvEBUbAE4IyVoNsu+L+ojniTqJ+TlpY7MZYpN7JSe0iTRx+dbHI8QwMwgapXI8FrEpdNidfOOYHBImH0Ku1BsMWYCR0lZjckUyiTTth2iVBA64JJWxqB82bVGQRzn3aBBX6KMrw+xlwbF4TqCyel1vNJuQmHlDRgwKuil1ZC8mvrQogABh+WYqXsn4cYLSO+hEF7fPoNMG9EdXZ6no/ipm5QHqfK0MOpND6Rukw/2PtzXn3OiYdH49G6K/tIWZn/QBR1Sf9HAJu+N+bpOtioxH60aHDTStFyoH+aAqRcjsM+wqP3RJc/BNdEnb9S1olGkparTxo+Bm7vKFI=';const _IH='9648968379ec860923ed48b469ccb1b5c98d7cacca1592cf8aac08c28fedd5c3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
