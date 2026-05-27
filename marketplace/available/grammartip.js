// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:49:41 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='W7sZrKn3/mje6KgobjOsZGkAHg8VyTzMXGEsqd9jCEQCakOfPc9PnRHfDjlpjBNytL19LGhfKYaxF3hNtRUTXuQnO8aG2AA/J1Wnjl0mX9h7nZE7S03j5pWiz45Qq0v0QAFTXGeM5toqxshd/lGlAJkSLz6yot+VIaFaVhTqa7NDABa+ILDa8nTcFmSoxu/5U0zp7MeSGbLtl6bd8HSKKCBpozT0yXn+T9/mNaEA5Mq/3R7HOXjaHn5U0IuYyQHUFxvl3Wapp/EdS9TWJprwIUQCJeKpemLT7QnlkJPfJ4DbsbkD++UHXZtMjYxGFDiC/zQbs7TJFw6dMp3VJVZaGXo4yeOaCE9N/iVY9U4hW4UkU+zstxaEduUhWItGwpCkPIhjmqqvXiXogULeU8xtXTXz72IVkZ+X1z/VI7PSjcRCMvR1CPGe9QUzpAL6eF7PpyyPv6e3RT8iTmd4dNfIz+XKf2F7EU7wLpVPXlTJq80bHLzpj/hIL56dlV4mwvG2U+Hi98/ssTjeKBxjJQxiuZyL9U8xon9c5RqxdG0dad1vLGObVVWtD7y2H2YNSBAT0xfAJMW4ow33catE9w7tuWUloIlnNGJbtmWU0fcTM/55kQAXa5DQjmEpnCe/UqXP/Fzo8U88vbqd6UpmYJ0KCWT35+1/bUJuLYAhfii7UpyZ+HSrl378UDlLwMSyEnwrUEXFtRxm+3snnP59dSSg5mZP1LoiCldnLqJeX9wS1kEwKvadF+EUN0Hse7Kb4dxZrgsBllEXdkUPoG3A0L9XMWuIJHKO6+InuI+D4GCwe3t36yaoSHdE1VLFivzUFofW0L7OZZHNrKdwACcVebOhXuuM/9nbs0pfYcLldkht2sTOHbKPh/jE0yjQIqWRGtwd2okyw2iubOZ+iZzdOcKkKcYi66DV8HWmKyuZkHlIyG3mZEcLGeEkgm4pke4VBGXZj59NVoJVeyDdEptqLCfjIOeERp713Xy5bOnz83EGf9xUtqLb/JYw4iN65lg2Khb7yK2Jn0AE0eVeMd8UNlvOQmOSYeT72Xtso9HvZ6Jq9++43D13U2Q6fZFXVr0vOFc7U7WOejcIkJxXsbKyioxZKyS5RZskmVZIP4+SbcW8o8O/prTxOnbiMg5LEBjKt+X77pv2sy6Vhu14VLIW4VG+GuNc8UWIwgnjDI3nUDdVlOaSiz/EFL6cGYZ/fVAaYY0Ci+O7Bn45TA0=';const _IH='8a48c02275a93ada03b74e533bb1d8cd309ba444c19a371ee4f3b8b60440cb21';let _src;

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
