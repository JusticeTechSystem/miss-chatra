// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:18 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ0WGSHJAo5dP8WEghI10dSH6l4l8J2eO+NJAw+utLaQqH5pfFmMm3O4b0n7EkG9oAg2oLDXTlKXZt/Gyezv3rwd+Exf+qb6Pql3xs6L8GwRRNxvOsm7mk8YFqCHmT9ag1eRFjaoJSz0a2jqyzTEWngSNjvLkHBvw9W6Oh5MR1zSRTI4fxSA5kjOSo8jREJmax6dvBduugLS1f2nqUA2029/nVWp0lCE3qY3CJDwM1LsR4iMJNWvTWXzLzvoUTxh9PFu1V7y7iiqX9qGGE9IXnF2CmVStutmBJjXe0BuWhoZISspGjk+rFlg2kXR+eQksF5pwWOcOFehaHmUa5W/+cwcaSq4f5i/cKFqGhDcYwXLOtifsqmlKK+WwbvKsqHFNwtvfawGrQvKLYUeWWu/Z0hyYWJvz/fDlUUSv8lZ5KB3yL0OVN/0e4V0d6L27pV+Rce3EDJ+Zljvw9eb3+bMzNusEjGb3Bd6XU7sBDmHVFIw0uu4dUWf9dK6FNSF4bvoxmU+6NUxcByzdqpgXdiM1cG1lKu+RxdDjbv80sJUPm5Jt1RuD+Przr2XvJhsqzigULThuxzf/lmZuEBttdpVpPmUoT8FZpzUVst4SHqUwfjsT69WglKt436+fWgCNRdeD3/7sjlCKJG+EJSjja1ahRRI3tg71AHvS5aMA7c83KOPYLmiUkjqPxgbNQzYK/pnpXft2n6GLHKquiYanylKj4Cubah7g+KIaGPsb80vfwDPu8h7Ts1cT1huq2UxBLsMTQslGbGS3/ONum1Kmd91llCYc5IYHp4FPC5cav3r6H1NVWhQY8brHZo8d0hJoFCvXn88kQK+s5OpBOWYmdYdysSFHr3mWFeMzgdnl2P0WTPQ8Ft8AJnQMv0u113WMpYeZUtr2uB/dNYmTywr1FO4yVK97EnoohjnwVJtgoTz504repQa/x4fTe3YiNZrvNJ0yCgSysFjAGqNZoarcbrCDuvYgQ9VJP55UWocUCQAkAOAcYojrqaHqzk5elHit6OIDDicKu59ZHq4RULkJSC5cYeBw4hA8nWKPnW4NLYq7sKjrfc2VyCuVuztxGNY9bIQJApUT58CVmZystSpNf+Pm0FEI/l4sq05HEnieIyFbsnMMuK8PX0WYX/O4JJW6s7PdqbYFfRebjPRc1mp9SFH1k/50rigpHGLEpg2cS4ajLtNb3QOJqjyYTlWkdG7iDm0hId8=';const _IH='2feebbb50addce7ed587a0b3aae12005abd5d808bcb5c439cb61a9c1f5314658';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
