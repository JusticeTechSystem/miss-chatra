// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='V+GcXKxSjDwqAo4H2hBb63RTRzPX6Xy0RtFHteQXuel25OccpqLQ5aV7vCpG+Vd6Sudta61SPrvV4cA+JnNY9Vzhn5Xxfl7JEy0Exop4mLNajo8UZZnbXEDPapv/DAjGo8O5B0Co7Kb1shqOE71FvwGJFQR4jcJ7+/gIOL++Y7e45Fz97WaX7AOpX1uLf42bsFqlOujRfB0kYMZFsQgP5fZ9mtUKxyk7jmv44HOFTvqEYalkCD7cPyGF3QxUGNG5syqEy3ApZFCJwdqGTABSoQzGTuDtQXeg6x0vmhVkxPLhl2Huve2tqkWKMPvSIKOvt8rDlRUayYzkhBt/WR33GP16ZSAV88Zx1bzLENmipnf523xQZGrFjk0Iww9HxUfLolFjk9xQo9dRqMthhEAeuRRssabvfsHQTO8zKCap03Eb/rEUFhNND7YnaTIs9pWH/yD1Yn2SNGXfNOgcqismn+aVcWICjMSNGYWevEFluO0qN+Yzq5Nw/1c7CT1M8bAZzn6n7kzaLJfalSGBX8XBXJ5s96Db2sHcyJgZaXNnRh/6haNxhiuT0wcNDZTZgf0ToikFuu0iCs/tRTTwiwtSr+xFy2vq/w1+SaJq7o7KdJjui+22QC0Mlyl3vRe4tCYAHw9/brf0jJF+NAN19Sy6aeZ0putQHsO4SHSu6wIOBC6jkh9ySTgHxTl5yOyyyy6ufpgJTJo5qJapG2K3eWXHwbvVvCZGhx2UDFKbQ0u5Qp6AvWi8sOEuHdpbFRNIsE3icfRRJdIJxTBTJtB5hr5PT5CPY6rKy9wMRirW/ShGD/xepwNGMdU9DrqsPSegK6DRMlQchAAmkuvF2UkeHX/bTqyjNcfn7wMxcQvwS5T9W3KQHlDumdUw/QfJuKCJo6aKX5Iw68qCeDSAuXSJ/QdPvI5NC9aZnpgNHfudBjV46MioFvpUuKv2IPq0QaH3bHo/2L7o/ppDnV4JgTOc+8Ut1E5XCd2ODNAOiNhgkYGxNJBUP7N//eCE39YkHbd7j3yiRYEJvF9sBSw2SNfA5iHGKTCPsHaBZ4GClEi2HMP+UZY6+5hE+BJ3OtfA6XGDP+Q1sUL+ctoKuFUujIVl4xiBNERNKxwK1QpeZi2ZQB/ZcRFB9Lz22PCFjLu9jFcsFba+AJ0eDHa3Frz2BDrw6hiUWgWs6UowAbHr2ToReWwmHV/QsW/z3rIhTsVs5CbDGxxugT3U0VATajwIgktZ94leaVCBPaV3RhJwUcYGAVzmzQDvI3CMGUrWE4J6T5etinZuj1Z4zOTLrYnNE2pZ5GLhA26pfNwCiqTPkXIgHqJIbNJUoV2Zz71Ji6GlmCZLBcUEwmKNtNukM6RFuvJbQrML6kUBMPM+aIn9G4t5lB/MwsgXJNDcBkMyaEq9divnpU4gN471q4od/6Lms7YbWdzop0DclXXLkYkuJjFoMaqzvZNPqRaeZDH5zaU2uNcgNZYN7mErwWeVnI4fxZGzVYzWCu5DvslgVJ7WnQyq86EX9aJ8F5eBR/hCqlRwEFz5QlCMj6EG7zU+MZ/LS86rRDmOOj9GJ1ISyeUrAEy/NQ==';const _IH='65bc8669991f0f0dae6ee4d5e0a7e3c3c63b640c873c8e057863b01ab36471ea';let _src;

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
