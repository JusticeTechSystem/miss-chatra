// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:23 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSZgWEjOP0UmvMFXvRff4GhGs8DSaEaPJtu0O1zvHibVK8oAJhfIjXvuVU8VFhCpkz2TWxj0YU97feF5TriK+ibK3Ca54qu5nQ1S77jDAGswSnFgk+MSkyL1xO8Cph7afimWKGwSmQoVv6vCicl+YX3QTwBGV89KmkyYzQuzCbI8dCqg4rviFVtlJxo3WoRRk+5LO2JvtAZSo3YQi6lmqNcrZ+Hon1i0V+ikyAi2koIzkTwkSu5hJjl6L9WMtEb5BUFHARZUsSmw7/JPyAtpnEULYeEtP8ZEpIR9utsdDYqkoXbkMEvWMuPDFF3lNGT9JEoX55EoSjwW66VSCZWQ+fv2x92wBlpuqDKjvWW4FCb6J/aVv8a5KzDg0R5bdXzSV4iY72ws/I7IY6yR6Fybe4fjRcsuzdz0YYeSw5mAuYwq6e3lFmv75M9ZiBeCyqBfSsMdAYufVrVxnU4WhhCo9T0vvqQIYIX/Bca48ZbaEa98S8lrlEoaT/9RzgP4C7s7jX02Wa/g7wq3QIBwHsw45renP3LS5/DLvXze8Gv4/TScGRBumstcP8RE8Jt3Iy/5IHOpvJLXSemBdrHx+fC8TmlBZfTvACyW0U6jBdpC09Ud6H1EzUtT3oeRycxMX3sf3fxD8dFEYQOQBC7hIZvXWMZvUT4+8zw+DskxPDUDPICRJnfdcqOVgBqx3sRgJ2RBmDpEqlAbj3aXFLfE+OsZR7IrPQWK53FnxWxLmFatLHSqTGRNUFaXO46b69SFrFFQ+JnSuE1bL1QaB5vRgPM7pLICFXYL8JL1wdZAvy3RwI4uzBmR3gCl/iGsk/kMbBzwmMcrQSVCSUoMEIxSSEwomk+VsheBXhMsl1wpmDK2VIqPSPHtVkAyerFQVOyW7lZnpF9l8fcVi6Y209QZbk/WD4itnTKvulkrQM2H8iPUqVAQlLSjJs9gC4mUVKtOLA4vSRSuDgVVty1UjXzyMMBuvm7KSkejRO0iiEEfEPyBsfMjlU4ZP1hN00rsHxecZGSnDzfC4SZbrCY9NG5xiWvxPRmcVHzMOm66oF4PFIdLyd1wK3WBWbHavrmYqkuWZ8NgEDqSqjjYMvopB+Isl92DLyyRtTVIlTW4Pk04Rki7mI/h/O71ZstHaRht0I6B6avv8B8IbCG52ZvjHW04mFDFrxIGrO/MohjxrkVKvlvWaFSIdGR+nBG6BYF9fUP7v1xQDiIS4cOLwYvPTNDU0ti9U73DB9c/XUYHyK+TLswG+L3RDpg6vk0ppguYXrwkaq8DfFqHVJLhMZrr3ZlJi/Q/fmq12PrgCqylPJfRbD0ph9XWovhwRnQflQnQvH4pCq6MCgKJ5jV0xn4npm2NldT9q0fFHinApoaDMQKVEzBzAk=';const _IH='9ca0bd8ee12e5d5052982d90d0f31b64db8ad02d7b9d8768d4ae92c8ac3bfbc7';let _src;

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
