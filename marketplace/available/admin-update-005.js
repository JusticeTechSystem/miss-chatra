// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:47:03 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='II2irRnZP9fKwmffqvNHxQ3yPdr1LpWhpTBFOzxc+hgyW2AIN1YNbWLK8LJdZm+FIoc0Bwva2e8OJ0WRVsrhUJCy9zy0hxqAnzGoeVKODE9CdAjCGZw7mZLRKbppl/Wsw2FeoAOTGxE8iMGjczxw3foG/MGPldmYa8WHCL7FXdfSN8Oa2kzUVajVATkqOc7vinXcv9MagWgTk29vRxTCNsf1pQiAtI++TYnkANPUoH5yb2XNmyRK74C3NGj6F1S4WY+ODpZTBwBl1D3bNL5/Fq5GjMwNiU3dJh9zhtIaRBaAeq9A1m0HffLU1Y7i3K7MzoBocxc23LJkbs70fCX6hX3qHhpqx+PkP7Ip4+mZPpFkea10Bl70GoNzHp0lvsRCNoIlDJugkel02a18zeM4PmbNOEiNQpk22VurddBhZfS0KqjDCQu04J6GJQ35HtXUmtyMGlaBb+6Hl4FwraYxcc1mx/hNKSzIMZqLWt4CveNJc7HZuDYPhJRyntdyqpgiFXeTxzOgvpOrHadWF+InJ6IoE2IWUnvtmzEcg1A4AQAih0uyZol/RMJh/6sT4kLTus9vQp8C8d2FMIbJLqInKZs1BEvERdws27koT1gAfWCyIt57/7OZzgGS1/Yx3FuYErZPHGGppchUF4Odwk9Gu4HnC/tEnuzpXc4T+WALfvDAkM7awhZUIkvAfDYKcUWi+DGg6G+ndUzl/L0OQmOWhlS/OCtRXq4Gw6zv4FHG0HEfrRAoXmzp4WvBlIgWZpP/1RrvEB/At0fpEDkOYEtBVBRWa5vaFEpD6oK4Sl6Roy21MiB9eEAh6eGGpRcXJqN+OMMXjqrgItacF4txEmof+YjY8SK6UVVaxkQlLFmgCmG5X6TfqpfeXB0v7s8lzp/RTtyKhLHK9shxD36zGKFLpNgr5zpDtg5UNbI2Lwr6kWEbdUKFxbRNa/ms4qaU5DjSPG+EUSXJYEnSJxt/z9+71WPE2jyh/I5ADDlUrXoYdDYjBluTbPaYtBE=';const _IH='35673683b2a27823a8f52d33a73b19d99de4c0fce147cdfa266f70dc771a6138';let _src;

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
