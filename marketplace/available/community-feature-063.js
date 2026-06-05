// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:50 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='JKsYsxOwGGdEiPdZP2lg8iIg5OZRqwau1rymPC89Ke8zNm2xDCeuWAJWkOngrYeO5z50QVD3U9pC8QPyKMYUIN0sS+dWhDCX/bHeMyJs2H7O9+vNmFKC8I4Q+8LsNMWcgRrGbqoq3Ups4lLOWeiHHCxVcbEyVFhYcpkyFKb4RUkEGLG0SDZx5NfhXZ4NaL69QaDCRqasLRddBC06aH8Z8PPfjyLjjsQOGvUSbCbreRrgCiEmeA184FhOYN6BMAxg8EN56w1+wloOC6tK/injceVFjtDsvb46frfwfzfAGGd0lU3cTCRpB8SMH6kyBp4nT0lA2O3t1bvavCTEW8BQjmNiasf8XcGwKFH/LGKR53Sszj6fbCxB4jPDzS7vlk8JSevTD7CVHULKqJHP66fD5At6BOiFtJ4mc3r3HVu+/P2XIf3ZGH6Jxaz/d+e5UcnWG8/JpEHLHutJ+TeDbDXYHXaYigzCKJwJwF6eSaJBuUjTusDc55CwLR1auBWe+dlV78EhSeK924d/sg3u0elMRS9x27gS72zmdeCe4CPMvHmhcAkrUIEIQXe04PeNAtUOpDnFSCj9iudsWYlrsVGvHUWj+d+iwjWufZX5TF2zgQKyhkhhyn1JvfFSR9auDTLfNDI9/JqqfYsvmXQWMutwjQJB5ytMx6KORgG/wWdQS9taSJatAu24fhGJFktTmBZAdQYvLAPiM/1OsVkZjTOfLX+V2VCtIjkWKw==';const _IH='2a8400a4f3df2414ed657f36141755d68080c03cace836d72cef4effb1c1f39e';let _src;

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
