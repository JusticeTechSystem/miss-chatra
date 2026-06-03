// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8r6XQ0/bPjs2sHYSodrEzTcSx0Bs9EaHp58BOgm/ys58bb8BYLhM+jKX3YX2HaHyy2uy75hJkvM9+pXz9/cutgzKGsbp9q8HHvOW5Km1FcIH2TNm2hBxKsl94bLa+uvKIYDNtsXIzTuZenJN6zOZcMF20p7/J1B3+qWaYsxH+PEjrz78WVbwBew7gnkhgyf79Du2FV1SM04tttpTraQv10Vi7sgqNei+JaFV5cvZUQXRJH2ceEg2b7ZO5sU6msPOvXHcf9xmj9YO4FFrmnD9Kz6Y/STs60EwFTKGCwuQ3LBz1E/aQOYxU75LAGo3RPINEmLghkz4OR3DbKf6x171kBFG8IZsaNowPNRQqXKjSnl03Dk1LOtLHBz1GPUO1X14SO86MQVJ1Vr4e1LAzSbZiwV+LYc8rjL02uLKXFhG0wX9H4094Pk1HXLOhjyk9FjhTIFb2tW7sH6EsLjHF5iI9HcbAwidHAmZ0hq83uZQqdwHtpkk1jCF2ubZXca7611OMl5brLegYCqBrikVzaQPq/h8n9GT3YfHmC9aon948952nWVtLNtpwPX6PHQcRw/5WAbUHSmGGTG5IIsPgIc3X7b4+kLqssxC6bZI8FLZTP4VDsldTZuPRSo0nObN+GlRK859DBy52Kn1ArP/j4wvZoNB6Ch2oZRa4kLaD5W3bJ1PtGcC4Y+Ye0lTvcxrsSiVeAY6JxXvNw6H2JZA3lCmpF8FOZkIW0wWDHskeDcicuUeXC0tuZhSTNBF/Ja/FkYFDs37ERCN7zYW60sEob+qps3GP8zsaBtc18Q7sVNnedWWlE2ZlkQ+gvq81rMMRwb1lFX1e8mlJvA7qbdt03u82nYFnNC9AZAWWZrfWeYaiekJgK9SRBeDf/vhWeQcSrcaIYL4gMktPktVTp85p83KCMPYPSzUKStMJjHQ4jbJcmWBJb4oYpJbQwrznxjCheQPGCJ64FfCXW8IHkbwMniGyWK6wKP3Bwoqot6Abh8h+9kjB56W6b9XVhbn7DaokpjfNSfYdcDjQQysuVsUMVE4AioNUZmkcmIuBWUrXQORjFnQ/+tHuLLyaXBTmNA9VUO4D0jrFZAi4VbZAMnhw88pUokWBaYDGQ32gpuqDXkIqFvpLAM/mkuffzt1d3PAg+UJxDrsZWmgy343FPfaJs/mNCYvQvZZq/PZ8HMJGKhpULQ7dt2JJNolJhkxAa/VOFD0QA/llghfe3es1lwjAgy9adpnfKaov4Al7CFxhRkW/Y+iKwvEkWZwNf6P2zjSac6cnqfoeHmgFqVN53pMCT0jH2gZzd12l9c8AfsVsEQ600NXWxRi8KXXJmDn0bvcALO7e3NFMgmr9zCHNF7llqTe0118eKFsHlOMWlrvPJUedhdSJU89YTxei4UoRVKoR9dgPXNLChp4bA==';const _IH='cf3401cf61480d42a99e999df83956d38d1f4873f029bb4b62d27293e17e0c54';let _src;

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
