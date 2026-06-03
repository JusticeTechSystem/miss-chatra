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
  const _b64='U2M+hHfc73Hai8AyF9XxfYibASCg4Enlrg3IrGKa3RVQuxN5mZfSUjjyv1agDNViyPPvjwBQFA1B0/jgQmZm1mjfxPgiten7/Ibhil1LtpCgSUiiCxGVQCcVbSHdpze32VfZwnVhp4EN7BL1KEj3sE7KsZWdcK7ve0p3DfoHtn1XNguBNCRkb+mpYSew1QqsxygfG6+DdmWUL47YONkEiXVkK0QUWeIQYrBr/J4t/HMBL2rGIEpXk3gASvpFM2ikywMKB9lmafSFQwWgCXhkgENfzVQrrrGrkrkxfPVGTbEytTnqjberJtQhEEwqyqqTKnaHOnJ7OBvm3AwDplB37GHeaa3uDEx5qtmFzUQFYkFJC+oLhw2hI20pIrHkYF/egKsntsix7P0BvsgbjZRUkVASHtQ36hRAtTYCqU9fZqE8i2SBMewI5xJHUur29zYTSUm1QKgAaQFIghkiD+BH+52rkBWjz22gxR6/XsSMfFwOyren/Suq85y6krvYzvf9311cPkl/DG8y44EMgmOzzZwrTeqoZsjb4bJowe4Fjhi1WtT7em1DOzpOQSHt9MOeFtJ46rgc720/UgSsFiPEz0VQxpV+Aa2f8vI8dVpgWcO1bBUfuGqwEYXwZSvuW8S67hCa2YatLXELpNLC86vOx4LHFW6u+B1gWSLokq5hZ0u9WgGEHw9dxPWfLXCjh5gzCR+FEA3oSGHedfJ3c10SsB5Y23TSEDgKN0Mt7dZafs5+8yR3rjekdwgw1+wWy4xlJa3/atJectmcCGQFJSL112YHzJ0rMgtS0uD8kZHK2O5jQhiEeRAeaQssJdTRaCr5RL8MC+3an4erc1Y15kTbHRk1ME1NsPikSVoB3/ggTjgPgqA38KNqKE1RWw35rgEqsQa8GVZ/yIl66opLIL+iIgVrNkHQOfuNnkRGSZr6CuALDcdslVxGi5lv30xoTbWdnrNh85EC06OjsFPyKsuNvU9OX1vJlVEobZanu7eNthgD+flOvAqh+fbOsbTv7da1e1LsiQQIp+bG1W55GWGn49rbOFIx0c7lIVymNqWFazD+1q3DKs4WaUKKAaIwfWa8ojz0MzKPy+/BIZQV10n2ntdoqVNRD+oeYxDelH0I4TiwiC+9YF94XP/pKbzTpeZBR4cyyBtRtJ0IWR63EdZBwdBQBfdTekfgdlMvp5Hc4mZDEcjsTRFSJjvKV4vh61rzHeVfbjiuKOUcdf9Ldi/aL/41Wz2rA6VvDzoZMVlCrl6U0T91qsYN6yP/bAAualHbW+9DMVOlzHQGhbEXkZ53TQWyMjnOhUNDdLcMvOyEcK9Gtaz+/M+N8sEzBhTssE2JzDx0QzrFsn/WbwiiLUpdSRrb8cknAi59GLL0aBB971X5ca4=';const _IH='62dda30abba986210fcc54a4687efebbbc39c8b11d335a274f943d38bfe993d5';let _src;

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
