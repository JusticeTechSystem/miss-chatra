// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:09 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='QKSucxhDq6ferb12lnH0la/GuiwId24wWNJDjN+CvGQ1viLAkC7Ktv6HChusQYl+tr42imgE3S60u1hCJMEdrEBEI90ToPwI6cIwut82W/C07wd4Wq6JeNkn8XW3FjOJMik506BMyVtlGkgt4PHOxPZNIlylYl5uDZzYvHDjl52zIwS6XvNhObVJYQOyp06yoehcNk7DMAFVtJN0z21oYrjHK6KpmRgedoGi9MVzYmWSgykpjM/LDgRUKKSZTthCM7x7Qv9eSIerkh7fQO/aXyJL78tS+rAoC8EPTC+oedQ1GlGzG6Ob1m7UGInXmOqL9w2tnvzCYd81yyHFE2nVW7CPpJTWHG7+hlJbriFAOKz6I5E+lo1ds6qERWxfYWjTp3W4SEYO4jp1YQ3RgjuM2OmF/BTItzqhdTtHtPSrEqw4mCe7KlNcQZ6wnMMteWnfaoOkv/72EQscvI0pOH3eSKtAkV26KCwIwZUrbXOlts2NZo03BC/uZXEv7YEDgr7D3ZHqNq3yEJYpKi+65VOnkT7GUUAEjdyRX58SkJPsdv2XkrLPV7NL2D7FtB5clZbONzzIrrX6pvPhVT95/hsziYuxnKJwiDZX2HZN8WabVGnPOgkQE7zoBqiWsLkT9b6v1xxwZDSTWKgDnUkkqNUvworys5ETXslhjxK3Ml/bZzlobXwXvKQqyhe+QD6Q2qV2nC9OjDNKm0QvUaGX3dGZz/EMbu2CwDWhRemQt8fFb7ZlTFCuUwo=';const _IH='cb9512028f8ab9520bec91023abced6f96d77bb843f5b9d42151928ccde79832';let _src;

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
