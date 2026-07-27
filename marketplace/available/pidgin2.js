// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjS7lkKC5C9bhfPVUpIrEVp2EaRijo26dQ+/9vmJbc9W6oSC2IQPaZ/sxXzlzDMvDOmq8h+COvL7alYBQoaV8gLL6K0ehCm6tX4HSBZ0T78pbp+hiAEvQvN4Kl6YHPwMOJ2Kre3zbVGkfuEaphlKTjQ5E88WiIRL2Jx3SNY3J8EByRf3Rvdk6Cb5Z8X2nxEy4nnx96K+kGuVTdmjksqluD+zE3eFJmFwNzIjc5bunhkd2Q08yXoBiBeG59D9Bt/GFPLsw0RIbfcd5hq9Q9POfsyRuO3nXAzjEAdFVJKqvvCkoAbx49ekBkW8HxwhidiS1ThBK1zMLSAYffpm2pzhoBr64f0XEKs3WGPeD3cAv3YNR1sMP744TCjiPhIa63hTPW0SG0VkN6OkBO5oZbFo5dZXadIdsBqvXgb3Bi5peFBvyipu+dNrzjWVB+ZIbgjltaYhaTkz15Zr5Skzv0Ic4q3DTrglpvQlVchKv1TCqGwTNwffSDXlJ1HhghZTGJ33NxQNO9xSPDZayPF2RX1Nro2hWXhyv2guWC3Mi8XydAUKx3BDT7Ssole2XBbbWWS7EfDADXzhk7ttVE5NSYrtCulwcSHSHBisDtMaBrzO6Z7LI5FeLBab5nD68QFlEe16FZHiAWWfDKgRD7OQYR5ZfV1fCv94IAx9Co/VCV2xVZw3iJduI4GAmi1/D5lWdWwtWLEweCIZ4Vp7Tq81meJdg0TtcJj8wn7DMZM0kSBZKzDjbI+s+QNumT8XTYnNn4f5F0Rs9qUZ9W6e9qpLT9MUeq/qchFCh3sUShAP8bPkUHJMtmx8Q7vvOfBGjoPzsxk3TADaWQJJfteDpTmriB26ZRXgrxC6NtbTjo0PbYBHR0K4YUYEYQkVu2bM88QqlRZO+ng5VU1SES9A2nlz/MTidW9vY/ypYRUEzZ4YDVqIsG4GtLjP8jgEPMt9BS/LiI2i35u2/+lCsAL36Sw1kIwkfiXHx4QTI/wpeUaB74/xgRPGK+0mXrz5DmQxaZ4xUq3U7QgE6ASICzTsRfVVx2m8vDbMKTqQyS6BUp3Q9hT69bZUQ3hN86jRR5bq8H6lsPK0HCwBLkh5yHnFeBWo5KxUHIwM0GxvLWf07t3zJwVqrCf04jCrs7Dyy7Iv8DQlHVdtRabMA5tS8ZINUjJGaQ86zuhiw+5ood2HaKxsVw0F/a60kcOqdtJEgRravyWrlsJm';const _IH='a11d16fd373a9383f12740c3607906f405bdabf1527bd39c3cc9ab7c926e73e1';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
