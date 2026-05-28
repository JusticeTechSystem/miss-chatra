// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='V7XS/WlaISaYv8cHhn+iGe4xUMvKK6agca6JwMvM7MJq9vbxYtY5MUdHc84Bo+o7re0xaYoougQEshPkMIsgWudWGGeDLQRgZCsQJ8qCg4ku2Ae/zAZhDXko1MXB9HKceGHRE5O3QB6ir7FivZFmo69X/Mky7tTNdc9xs/jwl9zw4B66gmLl0xwIRJiRW3U6JF4hvBpkd6TDk8Zk4p/ujYGbPHehzH5U4z3n/KbF7E8gheg5fzmM76k7PigVPyLXwXRIHH7x4xSJBAJkGRus9ZNCYeIAS1+rLf78md3u234vtkaKRzN3Q0NgBAb48q8tpkWWf5t0NVogFVgkAnJGgnwqLfFCOk1XbcVPFnkNoaAV7x7onC9vHUm7DBHqVaIPNvlTbOm/6804WpFljMx4Oe5OZddbpdzcsy68/T9sGvh62udACZwcTz0Uh8khHGI9EKK6V+YKy0uu9/d2Mr91qbDjNAUdV/ZSZmR7I9nxT5znOw1PCFtNOqUnX0iTS48PzMGS1v6XSGUHWoM/uFMg2n430Cp19eKoesAvvJv1W273mV3cBXELcLUL0q9jsBW4C1WcfakwPeGPa/qjGHZA9rWHdfDSUb5NNlU9owNMg2Biay9qGrM083SBYqZ3GbhfRtls1XKDaHkb2WpKsbCVL2ffyV5RfYtvhX7PEO1+061Uu6QHoqJGWHxJHp0F9j8iHKN856wl6cTCv7jBC438w1hLUTQS+q5MZMHbSS8rSkS7DkErwTTIbGgU3BPOoJMHPTG7Yv5wWAuJnZJAbW1HstXdLgjjCMAbBZEVLFiq4Ku+5fAUyw0Ik9e9WLShC1nSeGnsqFltESuxyc3weBL2ViISx7/EG/7vPJT0x0/foTRkhA/UpGOfHbSsvg4pJuHDwbtNpURZsXf4yCJ1qAGFxC8ecPCySdqLrZ359Rv2tqZs+FmYf9nbqOxIl+KYQ+jLMDYkAVqNYONvhYQZKy0CkCRqTZubapnrpEhJ+2KNFv8hCnRo+gM96hydGHiaY34WrWSFZraWtCqNQVEQ/5nj26MfmavATkRmW3NjBe1C4BVk/CMHgeZqz/fk5MeiOsjuo48s5q6Xx4vb+tZHujmTuuvZtUuClrpk3U57cpTfwsY9IqZKaOZmavhOvxOQ14Y6UAE/RVufOBiAhqvQuomoIHj51yslvXI4zRf1UtPvFfoVg5mD+lsDbk8c8t9Y2w6ozhilfZovo8s+NmXzw9seHavUFJhtGc8nfTrMCPvdovmZ+jf8NmGoYvfP7CqyZu4meuGh41B3JgA+VvB7rzDixanGx/F+hsFa4iKsMovEVyS0VmTza1bsl+THqwd3kbb0m6ScoGDzhJ3iYd/2HKOAJmhLrS+eeiqJBb02hXqcARNOOO3aYlN4Gv8u8WRv7bJEf3E=';const _IH='8ffc8e6b5c854337dd499c27867b8457bdf5c9ae3060120b7820300110f37219';let _src;

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
