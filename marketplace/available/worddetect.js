// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jo05PEytafkt2S54YeC7CQXHc5/hRowIHL+h9GyjklJS+iSj3N9caSisLFoAg15Tt6Fk44YbcPtbY7svoPmdT27J/R45hVPIwOS2yoWzGI+nGY8/WPpBueTNhpKv6KMGrEdPDPghxZ5WhP5iL9OnuYg4UoTcuxauD8i3wMT4O4GL+wblREHNChu3DsWN2oV4aifkkJWQPWvsoTQs1Hax2jMYjw+LqauQgSlC8dDzQxKcMMTiC0J+Igx58/S3jLYkfXUB9yoRml0EAA3urcQt/ij6bdg7FIFojDLuS8hBgwjeBMTUEQ21saf6YN/H7Jy2h5NCp8fdbn4LsS96a0bYuhord2CMXdE39F+Ioed7rrTCrJMtiaH0mZxJGXXG69ie7mdZrSGAga40+69dbk4rSxDEDHQSrvDht0SXZY8G+N6OPOcwDHC4S0Sqy5Kqv2pgF+weud75IG6mB0KE/bjLht92Ikeyu4WcR3tJMi1gV8oYwEwP3KjZPF/4Pf0r2WlHHXyuzLejP+1ZBUmNa5uJB1ZoJnX9pFyflZqD9dsv6jwr9/rb73nPvqmuSdD0uVzlNYoPxo6X9R1aQ4r8kBy3qzNntbsgFuw1H5cmoASA2RHE5IpMa1419aYGbPuPOcNHDE1FrJehRP9g+SV8VhHqWyu1TsjupLMEBiIMXnB47jUtoo6qBHGpz4pJErfx+GRIrKqLrClbtg+s//gdfZOCQDdVbHxVt60jsGxlyIKGF7Lr0sy32mKh+36T5dKODXc8B91aq/FP3oVUDXEYebQa8nqRxvUhc5sX30sw1iWPQckmXIsng1lzQ8WhplJlqULtv41v+R4TF3sVL+YlWB5FqP72R4nIFhnR3xPkVtO1FFLiu83KEl9yigPO2AWoeI9Fyut0yn4MJUd3Ah3U7VxvjQxnC+GCwg/DS5OrSw7xozhaqKarNmPYQQAWYW59XatBM7g8YxzlnKOouo0NjeHhBbGxgvKy9Iifcep43609dZSPAO39ONvBMzPYq1RkDC4DY4MbT5rTE3V4Au7G/C2ddw0afaTHpmtILMRN0g9CdIiSak3G57zPtdyLFAOrrf3TXRLSuQvcxiGKLZ3FuEXF+SZOg0lku3BNIeJbUYoJp+R0PabtWB8rEQiTmVX3DZPLq3xoQ5PmonMYSEpg4XlnEo4vRZBqgaiKtH5WYt26uc6kHZXdkGpY1GDFJoNxgPP6';const _IH='3e2d8042244a755bc904cc0195abfde7d0ac2d7dece29b8ce540f9e9f70e279e';let _src;

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
