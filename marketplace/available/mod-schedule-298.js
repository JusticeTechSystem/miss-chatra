// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:12 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pIbpKE2GYgr+lo6Jqd3VC8nIsAdzuSi3EF+J7xQ9XQyRhZN3mqvec8euD7t+58ZZoa57Jga7BEhNc4rWT5fhQqUZAIYCNVcg4Sgsl36C7ESs2pbYez9iLZIyW9BtaxMhRdHXTRFU/KW0sgtQuiTKLlYz7YJMdiUkgbmvIlFkdIP9rH1tQzNFWEwXw40j2E2ecFJY7tjDA7YPZ6mhbS5qD82mbVrEKJP8hTtVZwq1QfW0jXfXT6erhMwi0P42LETYfokdIksyh7VUzaEtBikdUpxACx5zH5a44fYuypGvjTuLmkFBZGOtYaClhNwRkZiGbNTOPC/cvnayvJZlB5DLHHToH6WUSCr0posbjknacb6O3lAeyzUBpcvrK0RPDokcdoyyQF3+R5C67oNCEXqP0TPBbEMFDC3QL6DMb4lCrg6XJggiJJsWz0ySlA1CfmWcmqHWL5mo2kT1uDbYNOVQfVEyWWIqeYTjNRE2PyaiIamYDEAa7POls0MNHRBgkG6Bb0niIcx4pHbT8TiuYe48S8kiOt9VqRd0KWBxF6gx2SInEBq5ILm7ysH3gjh1gShFQmaYQi7zO+EVlNtHrFQ8XLnYfmZ4Pbb2EFMjyOwUFl+aHH9/TzwoFnxyhdbN5wlp23KHtp1q5Pwa47gHx28ll5GhgpqF5tptcdQKGftDDs6VI+LmykOCKjFRnWJPibcJyAYMUWEEVtRUrXvrP5NJV2N0S1q3oypWad7F2Pfx9x5XBgjZ6ZSFK0iLbYcXh4tsdQFqZ7bAjsyCul5tpDOyRzYTvLV30DMLtwBfGE0kQOy4donlC0HkEg+4ZBpD54wjV7JNa1q08ZtJFfLynJeWzTMbbQfwqr2wu1xaof07nr0LycOFX3sIz0fnrce/olHxObw0GIRMIW3fbYonTgtRJA4a76h9PMcw01c16l2Jxj0YY7HH5tJ/QvcFdNLLuoGLo95lWBtte0jE8s1rl7gUQp/l2FD8g9QhUPuMVmZ58nE73c+Nzq5ceipK2LzLfD0/Xj6JVz5pyVny6Lt1SxXLi75T5xpmQJjJwW3Fdtkp2ekHmetYPzDodNsfD3YPzf1ryVW8B1NitZUXNBlCe+fKHhbUygUUZK7xXCWufYeSl2DKtabmstxMBlCxUImdFF1kz1DJ2YYdfltFvwGUWXbIvXkJcG2itxtSXAlCTJRRBmCjFto8ceG6gD42rnytpZ0Nq6A/h2PG2kV3jZJBA/xQRAT9x68eYdc6ZQenoCSGfF+BITUYNJm6ocHDCqk0sEPeJ3UdWZe99CooXlP1JZNf4EM1CfYgF6FBHtiv2b0lEV09vqXKnMy1tKAVTdGJU3UI+eUk4spHAn1YQ2fo8MhY/aHgjVd5Iz/qA71zlfx/s3p5KyDAgSnEMUfyNb7/8kQ/1EH3eYJNffJcApUL';const _IH='bcd4121d830932bed50574c7d177dffeec14f9b5fbecc76639e2d59d44d761d6';let _src;

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
