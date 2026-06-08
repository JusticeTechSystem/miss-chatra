// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='bJhlzTtGcoC+9olkP/bneFa3cGDr6rEr8veYIZpun1v/383vN11KS5bS+oFDp2Qvb41k4dtpj1NOm1bWETRC6TiIA8i9+Mce/qT2haP442ezSyRkFPSTzqRuhA4MGuvl5iAArQiZKpVt2TVuIUMvt4cEjpVw7suMQMfuo3AY1nv0MvRKv0FxAvalD26dOl/JjXa2pAMXW6x7B0dxZDe2EKklVeDTMQ5p28mOJUsCWi1BbzCAD6oa8S1ShXAqm+jkFXU8afI+wXk8ABMN3eti4u86UnNQPJqg3LLtlhccRZcWEbzV0S3UDwl9O9jpNb0AwDzETLTeyUGR2Km1ehVjqHa8ziFeCD0KTIeKg1XuWd/jfitVUDQhYQk3tNipbXbCI3cqcKJf9EI5n+byGyo6t/U+SjrsHXOtafeBugcEXRIEMJVCHTx3my8XSpuEmVKO70t+RZi+WDXQtT6RQUWQZeRDvKvLo8vCixRgQJ1GVGCH0jPcIVYEJxe61m7D5WMypIt0BWOpWNMFL0vz+oPq1kFH85E5u2dzhzdJG2z515QjoeiIv8JYHNkHtfSyG4ZcYkBfe/D44znEw/Gz1xrVM9fuVUE+iZ4tL2R3ld9Rq8KJV0MFWPYzgvEwgy3KsYgipAtPzFZWSTZ6jnl3JwHTaTGOM55inDHP/hCKeqw/BlyYRd/sJB47XqwwWqde/AlLEWDfdUvp7faK4qzJTeLxIufJmEanH9elk1Z1BVk=';const _IH='8e01fc9911557a3432264fd5893132995aedb5185d1335330b9fad1b5b3fa5e1';let _src;

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
