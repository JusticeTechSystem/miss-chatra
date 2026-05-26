// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:24:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LbDajA7sE+2Wf87EItj3vpqRtQD1oQiYY7JbTFVN4A1YPlvJb5S8GF9668dhBFACYbj/ev80LQv6OD4SWoCJ5Xn6deCzZ/9s59YfWOYnSUprpkrpKT8ZSSVtZGksKS3e6lZRhih0ViPJ46Uq02N9mE1YEmRRljiXSWOj3JGqZh/ej00admdPhSd6YmXHa9MaS5J55ZUBp06n/B2HxTrefcQcw4fmOdzca278kPMyeWXO/XcLfxvposlfTjcRVC6wR9O66ijg1zEnxRMVzAIbNrNmXn9JB9usAGSSIaakipjGuf4B1wtXtn4iPs0iQaR805zJM02tTLkq8ZcwEMdYNTBQLH6MZgXxMpaE9GM0MzzALaW4Rtmwld86I5NBk2t7InWQliUV4WZKI2cGVs8vciY1PkPHCY6w8BxdextfGC/fXxvu93jFb36P0SfEajn5NmU6WyOeLnUxtdqWUTKOYJH5lOzBS1h0lE9LiMJupq97tNq/bTzf1N3z5F0SSYzJ13pyaBhdWESO5iEgokbq8Hv7vOepO+qON3P1xb2RuBkqY3Iiu97LwUylaVNjZWh0GLbGKdEz41G6qcyYKvhlZDSuryobGqMU6xn7ntJAtuZozRi9IpuW6CpIk0FCw+mA/pGB1BSkQRHVQzcXkWK2Q24KsfkXHd8ZUNUCnPZw7rGXQ/JFeMs9i0avbuCbo0jU1zg+XXJnyV6QZ69/YEDqyzFE+RQyWxTI+7LgSzmybK9ssstzVmfGH24UO50CKZkbgxFDR4vz7ZYDwmHemOhvFSgL/kRNM08ld6AHJhUUp+YvswCqMd0CrnxDcJx5S8tACJJA7W2Mw3RVGox0vAli23OKGIUskyfNJGl+WdLh6aPqP3xswMMGwKg9HrtWw1b8V7Chx6xf+plr48O24i7cWSdrgRuDl6R51hE3CAvud4Ugxtj/+6PSuw4b159O096E08uYFrEPKcN5oj3qpfVyLeBoV2XAMrL3VYbvqgUkkU7WFXgFxecvkxc9Q/dO';const _IH='04df3663b41bfccae79d84bc81b9e25e45f6b7093b0a55f6954c33fd6b7358ab';let _src;

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
