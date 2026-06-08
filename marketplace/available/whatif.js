// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Gnvqv3FAngV9ZaVaa/5kbJD5DF9xho1hgFbwSLdOaFz8YrAiHH7WGyGaeZPtZO78/q84YAyp3ulGY5AjMOFlJnXF+Chw7F85FJgniyQZ72VTecd0TtJvR6PLl72tm5VWyQcgTh6E+QN3QYtDAN7o6Yry9GaxW64fTyCfk5kh1RTPgy74ySFROihNuPP/9T5PtKfECRoa5CAYJMymHC6IgitNMSUg+TE9XLhJFtLGZ130bu5LMffufueCjZTT8WGAOTenwRKpWWG3YNKZCOvHoIABnU1WrcSC7cEqw30xDP2hLAKQnWgWEIQxJ/CjoN7dcTE9J7qo89+J4hH8RPSDS08A5YVeA3wi58UViXqbi4wvGmhQbEfpGPZJhr65QaHWxVEeYL7PUOW6K+TOW6x3452Sxh/fxEhR09ms9Dj2WyZSBNnbX2X4Kdl+pH5AFFahaKutX3nPP5PJJMp+AvHZAYJXe8Zd5W5eHSK4TTfvkxEwvoRTM0pDX6Tin/KN+7p88rwQP/kZAvt6GFVjVnfDIv448ORusg+lftl9W71k4dUZ/FFt030n9iXeNzkujBbbYWK1t10L5Q8UXMdO9EVb9iLBWhnoCYMerKhAJXgWELsoTei6K0QwdMRl8XXNgGcXdtz+YxSMC6xMmmPoMeu6Bud16WTZ5AMsQqkiHw//LFWgVN5+xy9kVdOtTqbJc/uBIHTsyjeTfiYTvS1lq32M3GxLfSXQmTR/XBnSwi5OrFmaFY1TV7fPmHTKDzr3QMl/CkON9lk8lqlqum6esEf8xq3rxWWNRoUsYYF2H5O7aenAcmVQRxDkgKu9xdWZAgmf2XAlcoH4YpXUYc3li+W4UuWo/wKtX3JsSEmd6nqElJ4wHsmlFWqc48VjdxU9pF9qKi1OECoqbSKRQoLRia2xBkTwf4HHoWfucc7u0nSSrsesGocVKmL5QZCrb311MTbEKmePOLSyFSo0IwK6Z0i84PcP1EWBaVO6gEb8GNM5R2JZiZbfdXQVUk2keUejmH/kqYr/SwGdOl0XIrVmPfmS7ZjfiEWS9tcidnxAA4Gg6jfT1gCSXbwNi63lu7Exg5yN85fQ9lC1yUuAwaD2AR/jeUmyzl3uu4J5ReinwvTBm1exIK3P93w4J8dPI9REnbQZJ6z7hIOs0gI/NnUg5ph2/ek40agVdnkdejr6uIPGi1Ni+b9LphF2qw6LOrKWfWUtJjk=';const _IH='92d87144c2968fd23fb03195f2c379088033f11b7407be49d264b287c3783a71';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
