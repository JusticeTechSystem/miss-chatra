// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='0dOzYaqKhVqiW9VU4SaBVl/HXLQW6DiGhjEXOrd7dQYMf7Z3DdcsUKLD10aWbeXz2qBe6xDlrqpY/IlpnJazWQvb+MyJYHxt6IdrUCiHheY70LuOOX9KbvsmYMcEdQ/vj0L+7pMLIquhF27rY2OROgbQaVPMW5IFVa7P9Yc43Ee90Gn8VfRi5Ev1cnjmU9VxqZX367+5heWcIHc58nVIylIXw3WpY989zyf81iC9z9JaPvj5nz4XNFR4ajiomL0qZfT8u1WXKrlRTLbSS5Na2ThrT805ziphQHoqO6vqd14WvwirIeVBdDEEYk+Uy8sqouCPap5MZwfzIpQgiwVIj67kkTfAd+IpXI2ldGppUiY7xNfsY2EG085WpguzRVCx6FyaYtC/6ZP7NGmYqQpOXRjhpTX+oVrnG774BU7iaIUc7ll/sUlwZvaTonElan/NP1QbMYm/tCpMcL3OhH+Ta4E46496ZU/SPzue2P3m8GBGLf6Cz6/aa8KfWhk3qYG8sxxavihgP8EJPwpWoaFo8n5kUxy+TZmnyMWw7PGJIB9pGSyogp6GLYpn3BxHOWYMm3Q1MKV96CV2E1GkMaa+uHiXqQDPVluJBoC89TINkAMyFb6InJdDtnn1XUVaHbwZ51rPHKsFwFC8b0tWa1jWszGa4TqMOlfCmnPnONgLtVmOcOnYo3TmnD7rZ86TpvH5tg09+41FM4jTe4prKYpLKJNNlKBwGQSJxYOCKkiNe7cJgaegrg0bTP4GQGLi/mo1k1nT6CFLDzufwl3rRZcws/qPXevrLlpnHBDxtKtNcJxRnwUCaHaXOhAitYG6TEsV/hcgILWVcklJaEiD+s2lTrVCW5OmsvLvpUnW8zBvcHMmp1bSIbrCxRtemCHcao4njtsviOWlyrgx6B5LKFSOGSjRCU1/AHuvxq0G/OGYXmoNMS7MPRWaBA==';const _IH='cb5ead70c79f24dadaaa2f7579c053ca6e5511d6c9d09ba2782f1a50aaedc93f';let _src;

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
