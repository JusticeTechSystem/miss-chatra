// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:55 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='418NpP6fxtyWJUhbzVGCzpUyb+Spmi0h84dZR4YJtFh6QonlRUa2fGsY5vKGBq5la5cRXTQxg0rZJ/YGZUOM+A7se40w6Lt1WkXr7DAJ8QdwXuHRXj/6c3ZPxTWctfn3eMqdBrfPweO+xUHD6gLJrE2+wZkqtk5bEWkKjBUuJPHC9olr5Benr9u11dIB0odWNJ7pzwgekXI7mHkcOuJiK06RLpO950YzxQZCWFXQMPti0WpXegeiuG4sEmfdjq+ZFCO1zZjnqHve/XQFjsE02RtzaCdWGVJlMbmozdCRjsrm4hkfhQedPbXVAq3hNI4oLEAB7XQzjtMOYYwdLBOyQzek/7pOL3IcczOei0C6geM/4x0e20LKmSs9G2xjX6GuMv35eojxohur0C7XvL3PnbAQBa5ukt9C9tnyGiS4F/199PK+RDdeb/qQ+N36Bc8XVhQGFhF+NoAMIXToZIfUkHwdJdIshHUm8CURCn8NToQzJsunJtpKnfP/GWub00KdxESnWMu6M5lJQI/U5Q3C+B+pkzXguRLhCSwjys9DPul73JuUU3iT6WxI3Ag7225pKzRp+FAN509hKsKiOSB/ROQC6LOF6u/uzWTghO70jQFNilyd6BkaONWikSz/sQsF5miU8mYuYX/Ri/LA0Z+3OecTrdy3TipVKblBuny7YfcAIVXyQvuoXfj4JicIh+RtFLDMZf9YSoAXRZO/EqoiMP9zvpcZuliedS60TxhXZm3UPlJNANo=';const _IH='a99889876bf022d0dd7e6b59e962c263c0aa4d4661b537b6b3f5c57d42e19776';let _src;

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
