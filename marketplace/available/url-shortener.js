// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:50:45 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+A1A3l0xfWu1YXCljEq9+kcpJ0CtdCxNK4wpHy+SsuiefvoU4hzPVkxmSFMenXi7f0Vh9tUMDmSJT2vt9isHrTaINu20olUvqXSSrRzpaXb9Qah5aFDV4ncpbiskqcqS+a/XVackuXTT0xSvQT2cJ5BT7Jl8rE5hgTg04h7tiigOBRqLNY7vP2NNcMQJoro3JIC61iA0x7ljN1TC/mYHE/3dJ2z/R4S/KBqLS46nUMbaiddmnh8xqqwnVO8W1LUyuDhAl+POQDWTDRUN6l0lM1/YTDsSAeZHkAf1VMT+MTDJ1hSyNdsmoXWZe+i8oKhTqzWBaxsynNsmfsqORaO1ExRx6PL9AqgvsJzOZ0FmBJQgkNgbeP/C/0ugiGQP9x6POubBs/I5gMKgwLjRyabJE8QVcOCLgTirABxWXeci4LjsARoGas15whjkEpqm+WnPAY3YpdlZ7DIyasAq2C5Rqqhg/VHHEZC2BUeYxyCmglvJXsRgfPz3hO/9f3I5JH/oXvNMWkuDb0js10dqYZ8Y/rflWlOiwGvPyM7B5AH5TsoNkfdeLfulQXox+/ra0rjK/0TTrUEuMaQNipOq/dqUO5Lre/OICTpjk3YWlJjxYtdD6V7gGadH/1w+GTSeZWkPJbt/vDbHeB6rimHCUgxqd2ogqXvQlrxL37wTwWtJp11Ui0c8AWQztVG7QoG2AIzaR/7zv7cp+MOyJ6ZzHqOvRa4AMBSOyEua2KOCbT0v/DNk9hosa34dl29AxNXulyDMs27HRMXpJZo4BsvbOgDQLfch4wpU9vr3+PjDg051BPfWpHWgl3+BrD+/7qT4OmIDFn/+vmpbb7wBwE39THhiDjNBSMajhwx9170hKgoUirJR5AYc7TeYHCQJD/lj6vtVGMIxKwFfRWMV94truowfgF08v4+eE99BCjLyvHxGa3nV5aoDjDsGhJPKEha2p/f5juvokaI6c/nC/++tRO6hKB7f/y+XlZ7cnPFlMQdo5CcjOHrSFZaJqw22EjC0hYAuUZo6aXaEx2Yhvj073qqssMQoPduN8Pp+htHhLd1KxBomd21E2hrWcZi/fzo/wqco4kDQQHny7xOFZosiCSUpikHqHiQBkZLUWqaypumAdAyLhkKp8Y7EA0YqLXsRItUTYjSF4wrX0Jck1ywutXrY7z01HN/Jz/RSJ+EGLI+yZrVz81I10RJ+AwxIr3BgEL+oriPhBCGtjoGCgBxNeVhNOHHnYm7AVuUZaQ==';const _IH='0f1caa6f6fde1034f19cd6e8423e7718a6100bbbb91b49d2658eb6322938f10d';let _src;

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
