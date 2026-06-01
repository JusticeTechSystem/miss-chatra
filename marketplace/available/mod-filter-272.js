// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:32:41 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ+J+tArMvGtnQhRIjrHJdIlP4HNjyNyA16n05SIDjGxPZ5COdrSuTSJD+4Yf0xsZT8KAxWvJRFZOvHo2S26YcvHKvxgqq0TABfuuub0bB8iQBxQeKoY7MGe0k3MFHhbouIR9YCGyEqfyGfsdUZeF89niJN+JY+LRa0D88BAoEluPlrRf7sLlamyBEykoXx7m41L5Tm3bP1xmjak05S4V50WIUuhp3DYcTZn98UPDYwe3BQeS9grxAN1CTAc7dWbgUt12w+Vm2lw5/mxC76i9Vs/Scub3DHg7rxSAcmdl2vTFbKZhe0PfnU6q56e3G0y9meM9o8+T/RZVzELrzIQSzExBXYInQmifPfuu4051/QFkT0UdYFF4WZqF6Wa5cirDnra39oQN4hnDEnQbLzF2uZTj78hrWAkRm5vnFcdQqLJh9ggUg3aHESOkLrUMPgQ2627xMb4DjNncjduS7PJmdhUBFBCpb37LGSdFfrWdk4ICELe+cApIifDWuZjQ1haiITrK6xQoUQg1/aIK+D+bgyt6W8jvy9v2CM9k8n58t/WsyXH6hNXoONAPV8Ivy3V64m9xk955ZUuzOMsaX8e30MIWqbm3/M4dm8+88nAphNuP5zNxJsewNhbNXKAes6l+2BqEJwkA2pqEjvcVw2mrz1yNWEmIvzV3/l1fz75GGMB5cMQWXk72RItHeu63Z9A2HCmFaSfUNUaOY8H/Fb4t5lsF+A/U8TYdrSkRxSMrfP1Oo+pCYKZNnP0hFVNxLjGJKwHnxjkTmItYjHjbQL0+N8/UvufhoGpeKYO4c5ICfbrBI5MeKTtmU2aXSe6u9dyiP39mdUNCq2rescKcSalCklL0m9y6W8xw+gDDBDyUGRdX8+dwEqlc4vtsnhvxmZsi07p7Y38KSNHY4a0W5XIwtTOhUeQwyV1+pqT4eQqemYlMcrZX9zMbDD08LPdAmMvtF+EIuFl/TrAgQsHfCrRmpt058o+ylFQ/ItQwuJbRYwY+6/AUDUbyI/rMr+wzZgMw5GS2AoEkm7I0cjsC7+L4DRJWMzAOy9jlLJdrGSqXlyUBAyGtW03OGrbp56GEqwjDpKf27FjAmyhgBdMGlNP8KJ/ywc8iEBYNOMIWPOfm15I6/IaDrByRBvQ1NfMjj3nYVu8De55+7aNqwUpJCZJGltFn4lqvxTZ7PuXKpxmhVa6Hf5i3YZUafNny1nb5LdFRPJ6exHCEuzHfR+siHbg2olVeorKrZFAEd9GKAPb85Y+hvVeZf8RUu5kHdFV0mEUDd0+oEdZrAQmqFw1geF+fK70CV44+K82DW70P2jo8/OOcqIeBW78RBw56clFO4v3HZwn+3t1DZQD6WsKtAGqFi9du+JG9FRkDwqyRyeNRMJJY/Vo5pKNsP0Q=';const _IH='2a128ec6aef1e622fe710056a9a581c4a90822adf41d234ffafb1280156ce32b';let _src;

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
