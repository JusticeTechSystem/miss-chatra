// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='WZHEA7AZkQ8REwEbiJzyGg0XYmrMTayuLrMfOo8m1D1mkP2gOHYTq5LOFrGryseN73CwthxSUq8xxiAux66K7z/D50ay53itk9sFAHSRyl25NpH6UJB8ZM+J00HZOeP7hNokyb65+D/itjP1qEUc6XTUOqXSFKIZdxEA/EQl5WzNwbWEEZgNPvVvftHmSTnoCv5sxb9oOPfTztJ32mKr0Kn7QxzlRjWfGItR4PPvLrVf1rah8FlWk4bVDsETAdvK7XGlftsdSjLyFeHyCn2J4c0cIUEVXSV8hNGatg/HiIb1p3X0r8U1XWOCS2CylfpE7S8gOZkL1hBxJx9kXGDDJG58cXHIKNEYOpaN/bGCrKLMelj/nYE4b0iSZEvSitrSJgZXmHsnKRazrV5M0ITwCl8kceZp5KiouJgWTIzD0nJ5V4hZmR+q7LbC2Al0YWQLXmsgcVPIa/D9LmZqzA59LAc8TrgWPlfcocRs/+tytNk6z3P1KiaflwrUsjxtu6C8d8OpEI0civnSEJCJJ313Rim/XgiwbHK5UxWXArXBvzUrR11T9DuZkltBHtmdlhJ6LEglW99bT9gfF8MM3yZ09ew5sG5wU9mgFX5G8hhZizLPIg+6QzeoRiNtqqOBV6m7//o5FKsDbJYsA8dsrhKy/R08WaE+NAl7x1dkzsBnzvHHFexDjJ7ohl48iwpPRy+av2D9zQS8FimQOI2Fm2vxKPrMQXnFLyyQId0TG2RjodLBeoDHXU56YMv+DTW1I7aw8pZvtaRaj1Co/ndczneZOD9NqLYaMFJTDZvbH2EBdEdQUz8Wc5xtmpvLvV6VnJ3H/2IOFB0SvtZ6scK3sGtYeSJ2EYQ7NVCYUoRohPSBD4cTlgkrTuH5xfGqBvQD4ol8s9SwnIMWGmQ9eqiM0+TSgUwjbrQrTONjBIuzJ+ZfG6MJNyH/1HQORphVXweHw06u2/LmfNstG/+fOOUJY6mHWPZk6Tvcplw4dlihrTCSZDjEidvaFtgaPr82S6/qpi9byM+tMIoAQ8tmIFpxr6y48N/7LEkBAV21p6crltjzzl/Rh/koll07Wh0V7pqBypO1BJj5P1kzTZqTr1O6MSY7ifmKqAlqKHx4I7y8hpv8gWqK8r0n9HVl/COig/+eS1X6Zgu5R74PwlUW9yxcrTjxD1ZcgsGEWf6ZGr7ZVx5p0Nj51GcqdHBiBJc5op816PqpQcdN5FVhzqP8gd3dfrl7sBW08hhFEAMWA/+vwalW7aOjwMsvbgScDmrbxf9D3DtiPRqPK7edRyVCMNTMbi/GQYlGlVR+2sBBv/SCQNZaRwZN0ax+beNH7aYehsnOJUNl8K/ysxXnxXw+Vjn52sJCtVisjlwowR2quZ6tcfpZmvavJE538ZgxBQ==';const _IH='775d11098c9279643a25c4e737c6dac0b5a5a2086bc2f6c206c6b863d344e46e';let _src;

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
