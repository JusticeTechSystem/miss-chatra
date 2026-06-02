// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jNOKBAfHtUscKggFIztQh4E1uevXVXK4TYKGe901SmnfkkPyjLOvvHQehfAdGDvppIGSh3MzXTfmAUn5l+YBun9zmp8XwJ47Rt/s6H0SPWAB57dP8Uv1zlvpMbiTWE7G8NtRGMLjhu+6q/Yr4F5crp8eKhAIe6UlPhsRUedmRrZLx9LcC3baWAIdaKyrDlatrOdSfLIV3yKobwJ6TXM1d3rsAZtHiS8YtIec5wLZ/VoX9lxp3GH4xryq+DGdicxgQPpUVXqowm/nFpHM+NA4EMjz9B1Y6MQrSUKxroe0bhTfDZ/UNg4owOr60w4gQBlWbCnSYjmbS3deQqHKkPwvjSlI4arQWwFeLnI/C1xju3t13pNHaOR6JZaCGZr1qExWyBnI8yswICCEvVOBEc9sAcvqQ53EVGzvps/tlheQq54nzwgLCSZG30rKa/ZB18H76H7bJtV5kMr/rdXnEv98W5TqoW0m+NR1VlydFvIsAtBOKbip1swwkXK4dDrApccG22Lr+lx8W33mz2B4V6rDLDC3hLP+Ghmlen+EXkU+6VCK5/NxtguoqkvGVQllDCFpocptaMjeW6WMMM94+P7Yw/PSCYl78CEeFw1jDRbx3ZoWNhzaKA0zz6DR8R0cEp2JM3qYnv0wWQrsBAtqH/ortid0cQaOUwVKcLzYH0cHODKSO6q27Ry8JknF2Yt21m9mqWMQRah2Q/NLxCfaI7PlYBed2w65uXSnaxytgEx9ZvfjGyRAdxIDlEcDHkgSqcuLlGzKwrHkR+MDkQLo1VEka2gHinb80vSvE9wKQFd8rgB8p+WpabAv2Tx5sqy7JqAYaUyYfN6MW5K4iOqUEmkIfWlK03IwN77P4bdV9SqUJ6Odrbg8cZ/6PBDG0RRl+nqblpxHmfo3H9BA4GCy7bKOtDnT6utG1GINqIJoaKldXgeOtCRL+EUsMfIdzodx7sA7dp1oRVU+OoKodYEgwwLyRvE/MSVCYpk6dMJrO3/bjjaphIltrz9i2tTT';const _IH='11d078e54d8504431ff391e80248c948ab00f737cc6fe17b1eb8ed5a9661eb29';let _src;

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
