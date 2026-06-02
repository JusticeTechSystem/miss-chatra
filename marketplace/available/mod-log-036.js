// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:35 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='i6M7Q+V8DyFe7a9ZH+sIcdzhW9vEGpxp50lwHA1sK+MXxzMBgemuVlEqk3rcqcuimuGWtF9ZpnvP79iUqKdI4CEBxFRgLWC4i26hp5jxnk5ehuF5muM6aT8QlTygbrm0pa1y9Q3q0fWmUub4wlLZKWilVEDwYKteLCYdixbeQjP9baWeHyfJosUEk1UBRVLdkvsvR3yqX1icCaeDW9f/EVk+95tlWmWLZ5554OhyD6t1vxRdPZjFc09e4v26ztY7fZN0zNhgyBWKlzaYbrvhEmC3RAmS0Ftzw2y2yS8IbjioO1hZGhyMdDtUslbqb1yplqKzWHXEveqTAzRXceOlVmHggqRWZGthWW9vf/y1AzIiWsjcMki3mpz35YmPQtA/MC8vm5kEsQy7dt1B1BZtvmbm40n5D/4zSg9VTx+4EyUHkYy3JQDfOYz25w06zyLpuFU5MA9u9cNBKtUWv5AhB4b520Da1bOmf793Mu6q7RoUjRWdeYAyQz/WL/MnweAEtAJZL0HZG8021NBtMvicXJJ4BPI8boCYzWQsYauLrfxB7HbH3PMe03vZ+EPt3aIny0jASoV+MP3t2/QqtmzxhWXOzTWaJCAdnsAMylHLrAHsPeJiaty5Bp9FE9kFrl4aMMIh7IsWSDbEeV1gCVyRwb9fbcV+tjCCVutZmrGPGzHSEjQUGes7syC4EK8kivy+6DGKo6zvLt5CsC9LVEmeincSv53egt0yF37/XuKjZiy18ZkUydt6zEHKxZ5Rx3RyZscrwhrOOe37N61b6Ncb5xZk/c359eeG4uoTiYStjISnyVBVLsgKeAyGkNBq9oPJUNrVR7bLQg1z7vM3PqdkiUMX3UYRFGldtpSdvCTGEX0x8wwbdxGmBx1jOW7rEZzAl6Nw68JM8gZVqXxayjvL/QW4UYhNcEs6yNit9RpT6vo514j3s0owqcj4TKi/1XG0zGVu2Vkz1c3+f+NXWHfwcuYLXVhOL2CgfvfNRxhD7O2/Wlo7/81gqdPZglHoJhHISdea+s4/EPkR6cVEUZxXDRXxwsaT67rpjsXFR2/ZnNFS3SEd3k5k6xzrGi88wJBV0ztGXGQrs6iWp/UuhT5HRv5FQsbdr9u1LJrYdiwcpAMNL95l7t621mkXPgQYh3w46ieYJ8IRGgwhxApKZ1gueVlIupQ3zf6fcX0yKtunH1hrGKk3R6xIra2UbuXSo4Fad8cLIwbkIx+CqkEzysxKSiGqp3fxmrDiS079JgeA6FaqC0qC45HlcX8rTk5yejrNWfOBcGhBWStT1bUWlA2XeLnXl/xDlsiktKf0pyroUPkHpnUecb4Gvqik/3HM/6qalABctO8=';const _IH='52581d16b09adf6b299f20e982dcfbf8b6c3bec81e0e357083a46456b063e1d3';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
