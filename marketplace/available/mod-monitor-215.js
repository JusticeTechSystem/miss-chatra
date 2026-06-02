// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:58 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='hdXxr50tIbDqm+L/RUT0Y9HqRV+LnFCLgWZZ+dvXwZG1LicjMwaRt0yvVyu/nD80mROysQ5fBQzvqjDF3EVvRFwk2wVwOQtws4DEX0IHnZWfN5zvLXKk80H8FqEPSxCVlLoOSxOaxyV4etVs/qE5kzc8ceDr5yvNmXAwU3mUjR5FTWZA5DCwStw2OqzI8Ji0buqI73HhuOcmbWlvuqgUXpwDo4AT6DoZ7Z7lXalEFt41vX/lJmRX/NJYtCgj/O4BjekPhoMpbL1psEGggO37j6tXi6a7bFWtR2x0U6mH3Ij8GNrMlndoBPjVmED29VPJccRfaHauHyA97r0/jqwzuh76bCzTrsqvNAIanivbhGKhjNku7krdNluKUu3PHvBP3PvCpOTJD8885nea0Yz1laa8XYw7rAb28o79cTbYzcen+d9TXoiEnbRNyZbpFcNTQ6x8tl9teb2yaM1ZqjAl86Ww6oXq6+NgiUTTDYnoDEtD1zXLTaZsVtNRl7WI1YdYu6g6lISH6lgAbxQEec+hCg2H59/kGSkCYL8UNil+N7E1ES4axis/ee2nYHEnGy/xNB0JBk/IjVER6kkyO2sbFx4ErrDoZ2b7EscJVGZMP4NJ3oBKP5sHUDHKpFrwRhbHQ6GZdqz6Zcz2ZFV+0QSR+GERkNq3UXBIOtEbUsYKeF39caSwSgmnMsOgXoAel62/mGPxkBCOb0r59KKLe642ZtXcNb0ifonlXg8RJkP3Y7BsupGDJCS410/LfAYHAw/V/nUXGuhou/kqaQWC49ZJYsSr7ZwdkxkSaJi76uI6rwV/aOFyvezUvIcDEaPclarMQ1P21//nST+qZvZwDDSHlYgsb+xt1aysapg2dOP18d8BeX0VtGmJi6VRlgaU0bdnm9wqkiKyYYJGP9pw+Bhvo9/brahY8ewYb7O7bYTKOWyfBMRbSlFEDDJqcobeKsdYdmpXy/WBAfhs4JI+clisNR29CYuRo4r9oectZZUMz/Y8D8iFkz3JEdusJrilPU7TQc6DeMI9KOBqHI3M8fSgrnGcBkO/H0wYjntUmH8BBnNJMDqZ50kWm3f70WI8vtrGKSpIzLWhYzxKcMFgmeqJbQljCU33GxYYFlU96p/JXKkPRlcNu3Va42IdtAPUYax3++T5tifU6EbpfZJnrXF3NbhbxbLz2TUAuELZFCs/HOxN/a1Oi0ddSTf4Holo3xB/4bbzDuoFqQ8HmVgcSW9hligSd94voOhV+JUp/31CrHY93ctxjLVjdS/jOJiiDjab/U5AB0r11WAlb94FPwJ9Nz9wYr0VUmHKDe1PcASw6mDY8x7PvV/yuDol0A05wsrecVa/s0cj/bRkVNXCdW+kozugvdNHYV/ztTPVp7L7titmw5ktd/5NfvXyNzXPtzPglTQ=';const _IH='dcdc613a35191826f885a1402ad040eeddfee117102e3a65268b04e7d88afb0d';let _src;

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
