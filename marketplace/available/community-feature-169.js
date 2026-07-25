// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRn6o6F4FZEvkBumHrOzfjwV32t9GwBavYjx8qgMU25e57JggChKwiwV2S1raZjcox/JzmVgiJNoERuHiC+vNk4SRYx9X8hAyg85JpdZ0fTLJa+pVESDnywwDpkpRP/OaUStMnItB2Pcfv7UAZheZ2EB4/2zOxe0uYM5z4xYtpqY6qIDXEjI0WnDd1j/2H2LoA4ZhqjUp5FxnVCG53QqsXxtrRafxO/VcpqLRqfaiaUEszP0+BrFKlKpuyB4l7Jv+gY1GdVH/bn5DyUQsXSRg3jbMotTQk0y2jIAQcs35i6u13+jZmAXf1TsHNGTS/kmcTkD59VhhYy6LZpt55QEB1ZgrmWAVq+Pzi0V+RgfzojHs5BgAcU4fPGu8q7VorswZzQJcVU+W8nY3w2yFVbJgVIQ+CzE+UO2fqYi6wNwAENhogPIXA5Ak5Fy3Mvpf/H0LotLWBPFCjLaQLz5OYudgwnyc6JySiuw6gl/XioLpQbXATZoQFJWqgET0VwK8hpAExw+9shWCVygbyf6l4kMOzSUTCZe0aOBi7ayW1ObgrrTYfodiz0KQJdaXXZm91FL6Ls65eka0v8inCFAntkLzY+FpzZIKBhLLuY+Rr+tJR0JLjLQjdOuygBFEgq/rgI80UI+TOF5oYv2LsSdZAqwxdn+0Xf7mG3maONghFyler6J5PKIo2lyGMNJhYEAtRFYgq2ZC56SNvgAXPmjKy6LJrBfTTMwmLAm0Zb8SHfY+uwgEk/rF9SLg==';const _IH='79bc376a8d6aeab8320ffdb6e6789a46097ecb3e50e8d60de4e584a294602267';let _src;

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
