// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQrWe3T9uXYQnRrpgRruVVYqXw+Su0GlVxlBb7dHkdqbeqD4V4e+ajiPlju2VhP8mIvfMucr5F+vRVkS4l7+5ctu7hpPVj6CnMThtgiC+S6b+Ew86cSovv9FaR1P+rcGUreh+SSoW6jC40LSzZI/LVxsSkauwBwWPVyhImIHvg+SBZZuG5DvyjglEhi7fzFAYFqolgIFkFfReCB9JULPrp3/+DbdL1AJbVd8Z5kxUZntyDhEYkXuY/hSFiTqLExqyXLcfbT+FKjbxt6sHWU5kEqksvmz4jCfUyVY5TxQe2Mf6w2ZaYyuteymxKisTEgoo7YzdWr/jZOGzi+bTdBdas8Uf6cxRfZjc4D9kz0zpzO9oG0X5a171HfqP2kLlLD05rZ8nS9+hHR3hNV6O2yoooBBYOoHlrfdzKhIJFTDbzEOMqPVhJZp7AZ7fFhrC9B/Q71US8vl6I09ugGUlDfxZ0nUhxYh79gVjn2YFscYmzy2UiscYHHGEpbU7c15hDTeQ6UeylVeFULA0KeXC5lBGXx4Jk8BgMjtn9Z59EEQQWh58dDVZqHM2I9lTeW0PJ+IIsRB2aikR2vJSJdZl3ZsdURu4zwkNEgevPqe/9z2BoCQWFiHNtlKCPmepBC/ebxRJTf/CMV82oqXn+Fp96+IZUk3WGf0WkOeo4qrJS0P+kmHIv4oQFDHM42MHofxDKiXYNYpEOJe9hzvgQqG0Zx1nJi8e5CTERVysK5d+QcD0Hzbwogu1Zg2kZsWhOCAKuHjAxI8Z3o+Iwp7mNKz1bnwoJIgVpWAXXaAmpS57CM3Zu3GvDi9T4h41BKHZt7SvRdSJcaoiOSsV6sPwcJoBSyDk4dRFPeROOfyk75g99WjUNKCqS/MB1JkWAe3CI5AQrO26patb7hSPXxeCIah1nwsN9SDbXK9GBlhvGKXL5qG3koxy/0DimWAuveCAlNQ3NnrXJcvVtibFYo7BQBhRwq/F9cNrRf2th5yGZq5N8D9skFbV+n8Q5wqt2Jn6PgqZ8sB7uOVxK1OWnYY0elGJifr8zMgYo=';const _IH='34d58659b506baa4146d73fca2f5b05e49bb54705c622240d06c338c60a61acc';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
