// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='998sHmj+cra4ZGXWUIUdEGEmEWA4bIFqWGND+J8KbNQIIL9JAlHYY6IFuOsi19odmJtJ04C2x1U/8Be678ZOzEBZuYqyr8pcN310g2KXLt0QMnWOlMajza/QW+RrzLsQgnt3Op6ziWf3PU1Sf4t1qf7FHP7eDZoZEDoFmYsAPyJKGlhmBzMaaOng7Z46wNM32OAk6SXTCQHwUiIFDt7Sgi/gug8x05PjvXvFdOC+rmvU/SoauOTmWIn5vVU+PSpB8eEiLsZJNLIr2e431n0TqqLapXGRVa9ffVISfuzk5dMJXqCBTyNEAuReVDP2hrp3IJH5ARagAY7dg97fY9NGOAHnW/YKAWXmP64uhB32BzVK6M6ssytiq3hmwaZayfwp23rt1CwGOyemth1ETJOKxdna+p+26HaXLoQHtDtfB7YtN/ENhqTwXM8ZxxrTgstjVjjMLzc+O3N6fqQgflAb446NsqHr8EXLxj9q4uSL1JtHSh0RU+r5Ifu3El11eYs0nXgEt9A+PJLRlialxBqrIs3ue6r4dNDhWAJOJ0kOITGS0Gx0eP3iTWO8OoITjNumJJ+TxuH0bBANi1xZ/cPdmrYSSh9cWl4Kv21hHUwYwWTQrMGDzuIQgzTo/5AZ2HhdNPocDUKIZautIt6kRvJXVliSkp44LoF1TCo42vSr3MBQE75y6js56kuD75GnXPYQzMPQ3iqyEmLmh1paFa2lFXnl4a1Y1yzYvMQy3iFZ2hVcghzMj0o6Jvu6ov07cumlo9J++S52/+db3lY2ONwiN5pEqJ1jzKn+dbh/80zLcCcIDDYWdzoUmE9WPVy4DOV78802n/ZuF6rEj+QRYJlbm8Vhozya5J0ElqIB5+VNsumKv2mb9fr3y/qtBGcP0Jlgv4aYzSABtiHHgCIZ4byZMz5vqpLkz1fK4v2bYY4h9K5pwnB1MwbButu2y+xKPxTTjRES34xtL5cG8se+o1oJm0AVCm9lcOgsIrpMYW2ObvTSgBq6T5cMLLduxpknJwfG4mPTyLeBs2OLTnUWVCLgEGdk+Tu5VZO/YbDrpj0OuUcP1nYk4Ijla7c3SnWx3ndR89qaDn/oKIAhJcfuPnYk86nwG8uDwv/vHm/EDZOaqU5LM507gDXpDcazDNGaDcTiPEmQw3ev87U611qhcfzO5aAZIkr4bedGMvorbPmFQeFFHhzZI+/ANhz9htgWeIwq5aymF3aOFPTlUgFwJaC65WLOCmgjVZ+Y7K04Dmts3XaI5A+92OrlJ1XN1Pk5xLI3L+WSJvhD+z2kKG7nq6fd1hMezHr75fmb4gLYM7eKlG0jkg4bX3uL7Zn3dQeCG+tyQiHTq6RwIfflngtgYQ0Nxyy2W9ni7LMZvOfxWNAL';const _IH='547c6706aa438c8a3a58752a2ccd6f121882d07698e807799482da16a8c47c52';let _src;

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
