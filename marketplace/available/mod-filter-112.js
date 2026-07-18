// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRHzq1feza/FCURZ8IKDK1fzDkF0Ck5dEnAgD5c7BzQgZrlioX2kVJ7PsKP0YLcEv6jFxeXCbOH9aTv+R3ddYEAb6eJqX3LpmQSMq8kwPIvWBfkWsALfpnzwYBu89RQQ2vpuOdxe0P+NRhTxM8i2JVf9MGchhgRBbvtMHbEe7mY6qWpb94KvDedwvadeBfQFmMPk+CbXAb1PG78jZIxV9vuEtiEqhnKPn66y3VqftdBpLGHUwcM/wkvW4+7emWpCC/Piq8AbLkEhuW6IlwbUTkK/9MjcWJqXYRedwtNOnEk1rQax14G6Roa1Z4UyCnhHSu95GibnLrfvUCEewZiPb/F8bPjrjvm1pVlW4DFoNlPA6hhi+L2nwzN0Xfko80j7EB7IzePl92Rlv5Op+vntuprRj8zYe1Ev3HTB/UhKiQYVdx2oI7E/JtoL6U3SJXvfMwZpntGpPntmMRLbcZ+UC+zeIVACxhrwlZom4EVNo8Gi1kEBSm1f5HpolBOsZ2O5neakBxkLOsQHtPp/k52s10kLnT/obFR+O1rzTaWcAUlgcsV2uo2fYuj4JORyeUyDekr/YZH/IaX2ppy3XlCu+e8S1j2uTEC8kV/65hfADjRvZ3DVZ1o0kvjN+vZOZiP8YDBdSSvoPtzl6XHYlJWdWFez0AZ77/UvxfmYGc/SIeEiUI56C61MGX4ycjRaSfAJy8mCY/w+x4x5BuDc+/DO8liY4P8ePZUY4XYHhcTGx2wkqt/S9Vys7EdFDvhEUc20gkjsV+cdLL0hyUee20brhceH6jQ3HDI2XkZXnlj3/pCkwYxXeGlWT70GBqFgXTCXfy2uCFzTvNH9/jdabU8rClJ7ESyTXUni81KOPMDHE8eJC5VfFRgOPeqM1zDs+bTb13dxJYMqPRtB71KYzNXixJVpkY3Zukuy2Hx7A11pxTKZzm4xFM/FiXx9pkkrfULE4nMvSYtLILBfV1omdWNqwx72apyFANvI8dvGb+18ZdIK1uYbd/GuGpBDGBEymkAym4zmxtSEM79ksuGf2FM6QwiDNOVNRsDoohmfV+6MGK8FAKcumwdN0CzIr0dHDBzQ8scrpAbhFdw78+7OJChdGzwDhtv3tWVdzHwwplzz41+ZqQ5/OpuKeVUqM5tz/LxVyfS7yllSkIhD4qb/HLwJsmUl/xSTp1gOFaLANHv6rj/Obutvmv4oRCxD2LITcysdDNRP7ZfKxLpmeGo7AiTIA2X/9gPwU+e36FAR+qV6mXBwsBn9xAwxfFuLRMkpZiAD2HZFlzkgVbR0JvLy7SGcHygoPgwpB3YHUfD5Csc64z1r9fxEubMwxZ4vcm8XikgS65aazfASPbhEBEPys+dLmBW3H1MDygExIZus+ygR05sY/LsjMlvX458';const _IH='b35a3dc10c6f7fb9932c21471ac037f5b213ef7943a59ba0a6ad76cd8de83844';let _src;

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
