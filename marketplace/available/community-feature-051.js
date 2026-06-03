// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='OcLAElsNbGcJQm03iA7fXq4P4Ft5BV6NYXUVRn3EBmNEOy3CuzrPSAtg3aFO7Qyrek/E5nRF3qiABbtDxHCXS9grGziRCPVZRqAX4m5yPeejXHT5QtgirGTIpFPAJlnlFRnFOK/cZOfefGA+odUyCaJrtXjtMlwVvce+S4gGMh16cuWIPpzJBpJ5d91VkjqOoouPam7JjIdYP9PztOCOAihfw2nUqYJqX2+9xfitSm8k48qQEppAXBApP14V3APWciG14qMG/GA1VzcagpIp+F4jSGu0khmTqY6ftc2Jr8px645GFOTeSb+M93iWQBGLBibZ6gTZrRIX97BJgt8t2erJEHwm/qVnAkc8zroiSYAHj/O+UGudsYP7W4iqXXHGMIPUvxeu6ZAq8h6Vejvjg0joAtF/HZmqcuSC7ZojuKBl/pfAIvbgVxwsYmL9sjo2CCGoPg5FOVsOJZ1IBX9uCXpfigfttyveO0rQQdLX/APHpDtCUS9jWfEPl/1CYeRKnxackTPjbrZQKuCBJyFXpkmNmOzPemHNfYWqensZopvA/rEgAsntbUp5SAI3+kG8WCKzN6SUjRdrz9JrJRy8DN5E40GTWyDxWBikCUryROeN4LiCNhTSlkunBnwiJGLcSSmYl4HWhmLP+lcP4OKsAKPjQgFQ0+uMkBt+UbHsX8v7KAZ9gFrYtNYXuTRi61WFzZBTRJbdrVkxLivS7HBzfh7st2Y=';const _IH='9ede8261b82d0c90de90ceca51f742d132da88d671895b8b45b9b1094933c0e1';let _src;

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
