// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+PorATZBHZJSlFUSxs+KNEQ3L9IjjLk6wcM44BOrW7htRwJ04fC+KONBFt/gXRMvdb+fuBUoePec1PFc+PWjboaZAjLMGXkZCZFAETbcpiV49N6Shn6oOmqyeyd25/+XH7g+ImxAH9r4c1Hf9+qiU3zYnae2ZXGjoK0pHsNZCIn2ILBbKh6ewAsWJu9CVVPXaihz9LdCq01vrVHit5vtBW+OVy3x0uKOYEl5WhXuo7gZXajdQce7fxpmjx3vATS0khdauuANAF+M2HkbfWM5Asi7ecgxIlRg1NtXHHXZrFnm2A92sN/vpoUTAE8MavH11L/Zz+LFsnsIHSR8+CVCwQywt9DjLRq3aE8GspvuUQOp6WL7TEV71v76/bcqpI7o1+KmEJo2oeZpopvAV2ZEpjjLmhLFj8GicdY4u4odhkM+l12rCXdy3nWl+URn9rjreO29BvvdsVkleMSPOJnB2xYh+ZfDZAUyKC5hDqeFNnOAw+lU5GH3+dOM/80x0MJEecOvoq/qUuFkTek2uJbqFHoZilhXAEUvq//jPhJVHzxE/4HdmrsaRlNGtIEKB/VVqIB9RiHhUPXXZ4c57gOghd8lv7P59prhn5PEiG5RvAjBFD/i3SUuRB4VNshwLOmtWh8Lrr7J0eIN8aC4XeIB5Tdq1N98F+jizDDpxoNMN7s4YAPtYw6H6I6gBJHHVlDtIvDo1ocDOvHhgTAuOT0UFNLMP5FPyWBENjEfil6Tq1b/yRK2pLY=';const _IH='817d21fcee829cf454ac91f0d9f8889344ac99979cf1efb4c712db43e26af34a';let _src;

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
