// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:30:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pq6JBHvBR5uaQ3Zm5meJH9ik6X5kkDzJdpAXl/+DITJ04ycarVPdZvSabHQ8LxeQTMiaJ0Tdb8QasziH7wFGMMxmVuC9vsJ88/nHC9cFp7hWVaOeNb3QTkxQ10GwtE0+RIDAAcUu31r7DFeMbyV3W0M6srIqwf6bIYnAjRfqEK8WE4/ERIPhH7WRlTq+3G8LQE7P74eTT5s0tMUvWqSpC/1rkHwA0BBEzjOABmkUlDGHFjOArByKcHarw3Um6NBht1drkRhzJPXd2JlAkaZ7VQhJGvZrQB9+GrpyvkyW5cViBZZIS7XJ0qrr7IQWYa7owunByRURuJH2K+Das+FBcZjZzV+oGuw4qifDho9Z7zY8ZX8bvGt0hsotLxcsWGRnOQgBSeU5CffeMYDYFJ1026nm9GwhqfPEOwez2tvJvmNS3H9aOiRV0oknt/zMYXYFDgX7sKPh4vSxQ7V3Tk0HVl2pKwhPXGHgC/TVspZz9NLOi5GBZk51JRJpbYMgSjWpTsUL5DuTMxuV0sIj+BymXarOBXXbwKBTcjGH2RfF6R+KhX02/VLNRg41JmWcFkcz+unyHsC4lommdwPxvAYJwKe/gi84f1bgPy+qBQ25F8lcsipVpqCrVIdLCwWW5Cks+/fxVi2WRIRQqYmEC13oQyLhiwXJwAFzZQPNwmCYYTaoxY/CEyCR0/OcPSdie4bbK6IAjcJEXckIHLOl6iI1ItI7jocZIi2mtwkyrAgpeLQ0JrBZR/o24lyN3A3DmVXcoZCiHIR5KWXTrJFD0bqaqcfSrI9ksEO04WAhDMf7IDncHSM/4gm73MYQvRf0Q7V6Q0SDDEpMVWtnKIOTPZI+vFd2ox/ykPV6acLhk8i+L7wX92ODX5WNe1P1r0iKLtJYG5MByLs0j71MURPMHDWz4jus4HfKpBhYt9rEZpYsbum+sZ9bYzAlgPJ8ihRIrAndR7onFC1VwKCXC9kL8TLlAmyPLlUXqM92z1ebuTrHVLJ9EBgZA/TV/m4JWP8OtA/E40enjsXLnu6MX8BBwXgYZrkHjOx5ow+3irifCV2+0pQc9cqjv2I261J5BhTdBLiXnnreN45fBet58kTtgyhiRpFp0OjpGlCyuMyI4PCFUxWz/N/Iyvtvbhzb+Za6bzBV6KemGl5WkdhqCGShAilI5AxYAb4q7rp50iJHmYZRXbQ5XcyABgJN1JdD79x/Wa5FI7NnMgCaqw==';const _IH='9ba5c2cf7030ee7d9862a977f3cd64be79f559b1ecdf6750241b3982dc6a1d97';let _src;

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
