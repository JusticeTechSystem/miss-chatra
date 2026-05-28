// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:11 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='i9MYfTo+TPdesDCsyIZDa0uwwoW4Yi4hzwzgGJJiFyrmQexhrx1ncHYUtwWSiuw4hZPfDgr7ipMVHWCe6aHNde59I+VdWoTTLp+eBi7V34MgC8CGKwLPL9/sJByw3WEdcFrNok4sGODADQ1pIKvT649Pp6Q0lItAFl5qsfrT6UwYzxJkUIxY9PPY+qloSq7zJ+flCDwLZP99IEhGhHATQyZWRSX85yfWGBmySA1Qyhnlu4LsTeuRMspro8ZCBjnz+lmNnjhQtyozEpIquTATrNlBov3yTdB6jl9uG+CIY33QMIO0XK3mSEgHCxKberWuG5b0G8RC6CwSOMsa/xRUZhbif87cH4J3OwoRdTzVmb1ED+MsICidYUwCX5j5K5cZ36syQCC+A7Cu1dbjWGV/lWMUWTqAj8GcZ9m606kTltjHl9r86brqyjykROB/QSN1O5UbHuOvX/eSCAcL9PS4RqrJ6YsJI2ozRmTXVs0KFKQ4zUZP4NS3VwU9ZylE9ealrVDlnKwkscP4Te053Y1sg8NSwxjw68p95mRvPY5Rde+pjKR4Owk8pj3s/EkybIZtfN1ZQ7WH2a6+Jw2quLpRqRoQYFIsbudCRDHrnFeGIjAiWxjNc+x0tlpVl9IgqEWC8ZqJtMRS3ZrskYTaDCQ/EpLiCE5FPAQOP6m4zRhq6KWUrz+oZB73CL0CiIA17oYvPIWR6Y43VYLx3YvEBZ+04J1zChx1qHG4eOtU+7cawoOTEpBYsw4=';const _IH='ee346e223c1f87ac8b66d28011bb6754fa15430a61b20c58a91613ac16159029';let _src;

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
