// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTf80iYzQYiaOT9Ugdej4GvPZChUFvEr+TGLNP0+iI7smUQRAaH9NbNpe/30TRhVkBCTQBWdwn0qFI9VCuO7mvI0gwfcU0R3dYAUY7YtA2y3b/Is0gH/dXe5IMek8OWgYabZMfytA3EhQ3tUrdnA84scy3D+low7v669Ci1g2juycplX/nn02BLW0LOJicKSIz/f9ZdVBswnw1Lcpetg9XpDURuX9VaS0njjCMQqqZp3EAs3+lyXC0lrKHVk0ag4o8uqH8lhUtQL4Ev2DNSTXKl/Dvpkk8GWe3JKf9eBBYX7CiLdzi+kdF7tGQYUr/evu9/U63UhWrSyNcELSf1nnqBfQmb7IAyzX9InD1r5MBNQlnPR6apXjWuFqfJjpO3ZUWGz11Jtjxts56CcFQ1pRNGa+NIWCCT9hZojBPluUCuYX0uZVOAvUp8HbU3CqO8+FmFXrUkfbx6wbdKXPkLVK5Xaqgs08gwChyi8bKOBXIoyLPpnFvnPLx7GHgLC1db1e+fduvYKvTjG+rhwcTaxhgghjBQ4TYIRRvDB0tDdOoD5aKQwT8/Ou2HdtYvXP0YGnsJLUGk+lsfsAcw321T12wRdTfn6E5j/cSQW5KwZfdUgS6o9pTkBKA27S5CXwzAlWgeLJcyS4zcio9kbkff1MFMS8hfjmzVh0mV1Hri8SH2DxQJi38J4ASZdNrCmOryxJqM+mUq4F4+zKUvJobwEpoZpx2wzJtdpj0mlaNVMfACZiVxwAOHgCZYEmzd3bo5J3611zj8ECSIHThcN0/yIadk/pJsTqkkVbYG8+r4rhD44CGa98jTlxD2pE/0aYcPpDxjXXxs2XZydC9bSYuWTQq64cSI4sZj+jDNzCDG6B3dE66REH86abdwFJd77vz0fa8mDjowwcZ/uz2jprNRppBFiPg2pjzW3FyQyI1QsX46vUQJVJgudkgGhr1Gem+rGoX29QsJtXzWqtzg2vR0wnmMeagCr9qkvnLGopja93LdQ3BH4dyY/2gqyZ3WWkyQpg/CN9jlkqY7xDEAemnp6kr2ox1bGwkE/gQtLENZUmxpHmiwmSJLSTZClOBiUQaouya0WXMj0szAMDIDbw==';const _IH='66450a82331ef13cb7afe0a234bf586caf11853747599e2b1ed4b7575f701fa6';let _src;

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
