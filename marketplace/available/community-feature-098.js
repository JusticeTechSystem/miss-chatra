// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:17 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QR5tk0BgetLySMKb+5NY44s85nZiaTzf1adVO1nRmuz55KUi+KGyu8TdYW3pe3ZkLtyRsNNvNQMZY+oUSZRWqC6nSySWSWXg1aXnkK6rIRjC7ZYpaLg6YqbxeU4y7uZT/Md+HScPs66bNZfbJEmy6P3lYsqkfUFpAW2c5pkjB/2Q5+jArKiXggMP85sFphHfTQ+U8r3orLi2Er1eIzvrJuFcRxKaJUONB7fD+9TaDJRhd4PLqNaEscFY5gn3EqzBAwm0fCK0LyWNs1hJs/11htp5f4nNp3zyk0xZ3W9jkSUd0U2SyCFyI3SYm75i6SSR69YW9Zg74ZI+GiWDuvLp4NxKlPyhbNL97IYmP7sHRf3or6fOfq5R9d9tHU9H7NFJeSkkNZhLU4h1u430fErztr6C16xIEJL+LFWgZHwdbj+j+u0SuDVpfn/50iIdoQqCC4AtKWKD94p9H1kRoe9IAifeEWl3olzp3w1tBTJUrviosus+c3sBwL9ctcUpB3ez8ZBlasLWr7FHVqOhEB1Ylcco4ibhs6NfmTOBzYpTWeQwQYn4pl8hXe9juEAmQE6d45avNvIGKV2R0U2mfDGYpRsoJd5FPFde2rQfk5G9o95RN4nJYJ6DCVu26puKEHODDqk28gFaGcuihEpAW4entBkGWT4OFCAFQ3gY2dE/BUigrfy1cdlRRrs9RRou0pXiL5NAjETMj8+C28FzlRONqkpWiM+YZ4yEGw==';const _IH='de248bcd620541fab4d313ac04e2c7f660e3de337f293ca7bebef64c6867c8d5';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
