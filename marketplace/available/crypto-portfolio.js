// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0pvLansYH3ouaYYbC8xO+/eELNhYGNms5EUmb8zW4hEY0JiB+YP7iQOaEPUejQjSZanry/to0dh/q+H6lrVSloweIko7GQF7pwBERbeQvHYX/4xSafmbYT0AHfFOl/1I/BHreWcHwckEYanEqRIhtj5xFPVo4gB9PqvnR9AY1bqQy1yQjBmfJencWVIKdn+y3Q3DX/a60yjZEAcROWUrHkKA/wOskjLiP950AFBSrM5AJirmTEuz+UAULHzd/b2KD9eFVKoaCdDuDFK5qjb/mTtXz6c89SW8rch8ui8HehQt8QpNUgPLLxOz6zUpOisrZvxm0tBQr2WB/Rbz8XnQSg4Y9O9dgvwv6KK9DnfiG9JjlhI5mBpK1RzKH0Za/xPvc0AvDNhYrRJRjbeTjo/NVAcJzp71PiYqbPw7ul+56+Z9X5EngqFPoRfs7ICulAzzG6+HHuJAE4Pi9AGEIfqRRghbZbZALK2+YfejKF6DWHSRDkNHEdJbtnxG8CFNvakTdicBOvniURnMfIPoYsG7sbO8SFFbt1/q1P1H3b+dyt8clpIPFk2XQqPWGGW9N06uachRNHZxdETbLIqqbeDZAZnWc/HYTHxTuURblEvWtRYbG56XzNcRq/8edW0LmnUSVb1VWJ/eezsO/ihhbNQjlq0JMHMhpXiaM9EtM/x+Enww+2lxISPZ3mt+rcLWRXF1EMTCA32SElzsummg3+ONsDZWcccwWi/6GzjqyoIVG6xmMh7XogiH7eRhCx+eLvOhv4iEFZesD7kzY2bC5Eu7paTXw9ROrWPLCt+o5DbMLTjkfkRUxhwfrMt/ykfJ4Ex6mWaRelPLXySSfaqOhA8LlVFTO4DSMCIe86F2sM1RUCor/BHOWTv3ALebmmXL13p0shYkoBY/TiIVqHrEdF8J/Y6LTzWuXChxs7wyepx0AoyVMBzDDEKVIM7Xs2SDp6076OgjvNH7/FJpi7qUbsoV0ungnCWnR88rJFe3G1oPWwfwiro2gAdm+XL98AVWijnKDMcnVLgxJGanbY2Rf/JozjUqgold8OkhbEyz1UgqttgZKyLXA5Y6CG61sBWTfobAZvSFoa/F/h2JQlbGH4P2/RU/i28mAIAE10kIq/U3OhNYktNM/u+3xw1+JU0L01mE7Jht9ytPojFTUdDzndivSxwLOwamcS3pd6q5wQCeCdZ8xpADHJ5HGCm2G2GktVeMiQKI5DbfDdgvtKZ6sZu7scd10xJGY62lEaJYKqWLPIifIgQbKMbMw6IRdSCHGOz64SsdJTY1ZB0E7nIC+VFa6UDBeGtaSYk/onQSHZGRce1wEtWrr8CSRWy8TS7bCO+G41j6MExbXCIeOHzk0M2oR623T1BtHbd216Gy8taiXvjcVWRllBVBzK/GK9IKl85ofvinqJpWNGTh3qoDf/bjprczg0PkPywgb2YgffARhVwFrxOEev3WHiYUOAGySPv1Cndg41j7587vtrjmUB+oyNbnXyQvvnJUscmCuHMU2anLnADtrZqn8RT9gcRQDKEl48u3kG0Bij0xc3dqw8osAATVwn9Wlnr0jguM7fNCRu446emzWPf7339W4X4tEUlK4ZoHvxIHczxW1m7nfrUyzVniqTEIVgBNw7UEb9pWkzHxaOISpGSabitVB0OyNwrsnojJJIRmfaK74WYwS1vGjEyZozY8NzudpTNfjBgRtnV4bmWOfuV4+03u6r2Tk5qgAgzU/kjw84cYSH1tskF4pvXEB3Dxw6X7euuDP1q4jZPjePcwKZIUj9D44fPtxeQ8ke02cE4cxf5SGDl61wZAe3TEGbHWznxhR+AQTlg1R44P6a/PXHw=';const _IH='5c62d6a0b567e19950159b72adca5b4bd2e8984685c26914b6c211be494ca19d';let _src;

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
