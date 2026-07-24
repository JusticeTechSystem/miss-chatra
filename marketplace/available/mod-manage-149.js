// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:59 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRP+gHYgUUOECvIe33858qDj7wrM9KQ2pF8yDDS2gwEBCsSQKyXO7k9+1VKoA74CssgsFd3sp5TZTTbs5hE6RZ6OUp+s37/9DlWgqfLc1QP5KCmrlgq+LbZaf0r3Eh3AqFV4umV89YY2PDw09CZLw6JR5q7/FnQRrfCbBB9HPvpa724cL8eL3lBgJOveQMTKM7bVWE9hcanmaq3T9vX0K3DliYlqHwCvtacrapvmu716iUZ4LDK4XZ/nOVEZzmwhMl/QWZOVjTyyUmLQqH2Zm7vGV9bYBWi1sdAt3z6ZebcEa+WlG2IfM4dUViw4Al6Ay784JtHX38U/fM1qbzUWBTmuOOcecuTIIkxjOtjCwh2yqENu1UhC2QSw2JLPzhWEHvrtkv8Dx6wxKCQmlHsZT8k1iQfsTjWhAVrAr1T0Xn7B+V0mDU14gHtEYcVdo2JY7YpofCagRkrn1LN6KWZWcnAA8aLRHI3cKlGoq4E2YcMCu8rKfVk8RRBHippWBqeYJxFRa3wivhGJvMdZ17FAr6KrVQSrAS9qmgqtaixcI7AJ9CkBCS1q0O231nReU9+tvv/l8boT4eRD4igyjFiEBzGFveuF9TglYHakfx0VnDtKUm2TKMqtc4ZAteERULOKWmUXZkUKt9lVSsV6FVpTK0gXAMc2Tz08QSl/LrlUHIUhhdAT2Moy0wLknkmx8IEAtTk8c4azGC5RCKkNh4OeO7/p/0CShugXegqFre18Cf5c2Ygieb5mULp8oAo7UYPAq4UudVLxo584t8znX1qoMLYurw/t0upRGunMihZVM01eiDEqTjAYSXnex497zss5U8GNbkm6xMhXmazg5D4lR94Ns8TB7bZxZATufZaliIsbXX1HHZ7/TPwGHStZt7K6znygW+AjjKZSO4UCa85B/R6FLb5tWi+1Yhs6mRSeJh3WCkrfqZvBeemPS7SrvkzMjopIOFlgg2GW46FjDuuOkn9WhmqNn6OTJEVsyuPPO8AoQMe9ebboNeSP0o/wSup0CP+6raa/hM4aKtyRGFzojYpOsh9Nx4DyCX/Lb6QUuASrdrMJ9yFakcrGxkWYUsn6a/lF43XUtQ1h1TKsav9yAMZQQXUsMeKdHMC7+xuY1/98p+UqVa2enU+eZVCSoRCyY0toh31GBNrotdXJt2IYbumCMU1Gj/SSrTYmWFirXQDG12LuzQScdGZHUF3Xz9s2ZEyFc+e4QS9JKP4tyNhHHc9rYAB7/WPGsH9Rn5Slvzop71fcRwu1ZS+ur9J1m+4NMSCNvISvXbUxtP1YXNdinQfpcVXMRQnt/l+vfWKfEauWEtK7Nvwih0Czh83nYXumYrVYULtsjwhaOGm5VSbk+p0ng08vhkkR//FbzxqtXR8yctevbcn0g3k';const _IH='7605d2295d33e3947d8a1759cecea42ba0f614b830b628155de2127843b678cd';let _src;

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
