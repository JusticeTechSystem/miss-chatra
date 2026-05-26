// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IQfmaDneNKGDrSaTuDHmJ8xujJ/kpNO5DNIGw4de5q4W6JnTSwK3btg7pHGGDUJWyPRiNIlkEHJuwiyXD1MpqwksvND6ubM3KUxSsrsg/XUgmofo+W1HPuoJN4oAQ/11ebDLKPvJK3hnrcd6A/f8PiF2AMvL3tikhX67sKpFzASSPUXSC7gF5/qNACarfJBoTBlEE4FeEvtBA7owR2Ba9FsVobIDR1AZ8yH0Xg0D8h1xecdtQ+0m0fJA5/1KKM0xinFimA2Txr0GIDDSo+Cy9hw5Y9g9CJWeNI8qxte0CzZzFXIir7zTQBwOxuMuJJAVyghh1gIA/tYpBUeAmnyFevNf3XBuHesn+vtaRTLYMHhVJKLFHcy1u2ma9Mz2F/KBi/gwt7UAsreTFQ61PACpPlbsstGY2ru4nEmM3i/CDNZT8X5ujh98TO/R9q8/FuFh06V19xmtFEdM+3WPgbIDcRmqFDg0HAYKx9EAdNrnacNC/+KeIgJftwCmeBLbgiccIQZcpxQWP5Tza1ggMpE2n6bnJzjFkeekgkWqLIrIbIYAtpwT37V4ZXLwc0toF/QDd2+ThizLrDXySFA5eTo9P+L3mVT+trFNWAfqi5wra+OZG8gAqyXuXn0NK3lfWSLC92HgtZ0PXMAVpB+BQW1c9Ro6IoB+Qt6zTwLNvnBLvbh4FK/+rQquRPSv6suNb9oE87RDHfiiKRDyB+WNeMjrrcApONOzGsPOppmuR9MRyetrn56q5GAIf2DLWSJ8XJDQAAqnDt4TFSwhBaC1LphZ5zAaNfW8sZLJNy7cTT/meTFC4BJwXtC9T0Xm9WjE1f4uhljRfDPET8gqSP8b4R3IgsQzzTf+r2KKea8PhkfO7RYztb+L1z1m0WA8DOpbNuyj55Qe7FH/YgotfKAztNuWUHBlthQwh+pB9jUKprMX0NJ+kWQLKNMLLGa5V6pyAmWEA1cy1rchaFPy6ca74PtPoZc8cY51T1RM1Zn5Oc38N4wxAgsfCxhN3gm4GGJllhcck/AH1uSOyTB8GsVJkb2gqm4pnlOnDDQlADlnWP7XqezOyd19JW2t66WZ9FiNT5SCL6q/biOVd8NtYIlZRNu7m7IAgfNtKzwaEB6VSH2IfpeSVUalqirkNwQAEkXgu7C8VTelL8P4/dEZ8IYLy9BcDDoXxsxxo/0fL0xEJX9vemHGMxx818xa4OYA6rccPCRw1ubaZxktB7Y5UX+ZTrRVQEktOe2XEBL7Aw5mVC4r5PNWsrIzstMlbjXCyWggm4HColj/3iCPJoNz9qwUmN5nbrp94//SJ/AzlyZB8l/NzVdNxZjlAuvDIGoSAKowvSEnCumU5GuZPkOGGmnCTjHbGffQEkUSUtgwJBBxOiDJ';const _IH='4abc92a8e077b57ea8af71da8e342d1d55a928e50308b16e27783e36f138b1bb';let _src;

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
