// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='FpopqamjCGiSYNnSj1Pq7Kk3kp1QUtci35fToP9/RDHQ4o3cgt8TVINMpN6/syosoGJfEEtPx5FuiWO+sjPpnxq1RZdmziS5OHzEZgKjnjzVUosyiHTNZyoisfa+/AvvWzCHueS8cEKigZF5HRMIGJ1nzicfaS85I0qWaFDHaiDhydusWBqXZ1Eoj4nprJaGfixY/dZD3AOuDQIlDanC48EvIXOfWBRbyrMn3xtVPz7NynfGnYOXTh3ofV5AUfTuiKaKvJzJQW17sVaocRXjq3gldl5OhZV26b+E4NIAco9JAURnkxzs4vp4Jc4YqTSdVFBdMASTv0NbNWhPnXzIYdzUV1B46OMVEkYkNwv+zOXaREuFex++H4dBHaOg+LU3xdt0ePxO/FH8DKozWGS4exNMkoUXaIjNUfmDW06Qaa7Do+ZFNdgsgTWUqLsfExACfnDRI7X8HPGpqb+J91Tko1eqiednBW56W5vsdAYMVUkaFY5cSXo1KId65XNR8KMjmUEiWg5gl4JWLwMZHBTCwtQ0VZ+4a8Kmvfkc9Vq3coPkW0MXiZZssYQVb+zarsSg//BncBhOgxg9y9PznHUN3m55d0zAVZCwhxKRBLbb/Y2hZA+ciKXbVEaMStADarMH57pUyR7/hXDNvT3P2NzotDs7fBUe6wzCzkwWkpgrqad2CM6khPlaoLBrrkUhlc6/HWYS3gYHL3GRvztLJA6YRai+nH9f0WUuu+pJHUyOjNHFiIzlgvPpgUAG6TqYu9m/fqzUq+V8pcCzSNh4VYmvJtB4quAZKn1aLs22NTU2oG9VJApG+jKyjUWcwN17eVVlwllcmOD4jfBPgxPB09MIKAowwQ5e0rSTPo3W7EIXvTE65ViFfkQAOzEGy3rt+AHh4DYMSb3ZBOwPLTUDaN15smhtGa55E1c6MMvdR4wptAFV0P2iUMJUGtL8mGmFaKiahLUS77NJs2O1w+oDQYKXDfo6UcJTubx9Wda6FaRed0AnyUlTNTa1IU52Nwv6TO/7p25xB88Xk6OpgF7E5Zou1M4Y';const _IH='b69c4e7c854bbd8da26c4a5b2fb36e3d00ab59545ade385780cc33d51f14edaf';let _src;

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
