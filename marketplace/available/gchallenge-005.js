// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:27:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='8xvaIzcojcQNxyJLgwntCfYhV6FotFLBts+YSsvDXUu55dCoP6grjlkfr1+HIqKZdoE//TPJK16AWiT/gjqPNbHWj3sWXOTrbBq7uWZqwbsZz1QURUfakZX/+r0b6q96FVc1O/+e8Z6geg8MhbQLFN5Wg3aVzvQUMPjo1RUFqzeLCE6Kl+ekA2wIhRzOjk11IJBBjQ79KCS3gj7ICHexoXZqgwI+AA8Ov/Vbf4tcR4nhViNkB1G1+SEPa5wAkNTQpxHK4nq09z16tFXT50InSNWb/SOnF1XaxwsEWyOhm1KySPY5El3blLYjxEauaw+Gvb7jshrQXeSIN/cMLfnIxNp7JdEe+A9uENod7fAIbMSs37GVGuwSa9Pve9y0yyMP75laP5DFJr76saB3lag3gIVqukHVBmgYtc/JY2WJrEjxv7CeZsjyJ6xgWH1zTgRUqxx9Nyg2ia4qpvu9Mne5VbEmkO0lDJdnwk3Jl6jyVFQLqdHoKtVaR4vp8qjPaNjcI4EY+lL61YgBnkkTiNm8B7xLBV9yxQ+tQS7AwYjvWzXGU5ZTlEKKxYWhYT73PY0/8McFygi6Wd1jnOSsOVabAPNVa4gkSKS5DR3G9joJfHf2PyMM4ijyiU1NxvEv9uXAjWPMC+QTY5Bk8tYjIXQpSZnMO+6vKQzyhljYHxb3hkp/';const _IH='7ff83efc688f453e639e28897b1e5bb9fe096e939171848fb0ad3da36cbc641d';let _src;

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
