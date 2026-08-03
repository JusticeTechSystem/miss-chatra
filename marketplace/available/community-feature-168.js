// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQRL2Cx+DUmaH9KWRnfa/nf/MgnpBd0Az1Zu0GmSw1ghCNuRWSDfgRiZsJ0WB58F4h0BZ4YBaPq8uW1Z0U2IveloKR+y2dvi/Dva7vTlnweKLIQsRY0ccrJAGbFbU546pOEfsfNuqHecM2Q8OxM0IhaFgfVY0U213CQL9He5CN9HL19q/2PZL4lOFF0Legw/vC0+KQzHI1QBgx9YitrAIvoXq0SNi90bl7MCTDn/YYUc7Cepfi3mXaqhWeGyODSmVhv3GCNjHbbM6wBTY6KGSZtNOgF7mXd80aqHHDepy7veAB+ufxThheG0vpB+reYtKy8/Aax+bkZLvF8OJVqGGDkgIySOtDwpovEtG9YGv13bhDZWymzFsp4SigN8tI6KHRlH+vqIxN5L0KxPSCP2RACFbbfcEa0SuC7/SLiIGZoHcjauP2bt2WJUTwAi8LI0fY6BjJXGzuGysu+DUKEcEJSEtKHMeA5rZ+1j0H8rGPAwpU82PQfBp4wzYXLsOr9JT4b186xv1jbIKIvc/B1q/1Hyz2JLeXSzFhC7bG4mC2o2By1JWEvYCkSaSYlJ4PnB8S2YZOYRjle47knE3Nh7zUzpDFk/rLcnCwhHu8yQ39Qg0iMVIuyrBOIpqVKcVN6Kk1gGeG/93WxoLtca5Ke1dccLwWLknYdP1EOtQytOUbRdrf/dtxDDBNXBjPh/oY5YsyDbIfuOuIljZyvu6rRQ2xCcjznjMJXkaWv';const _IH='1733cf7c8a009d7ee0a7ba4d6426dda47127c0ef737c034b5051364e045b3749';let _src;

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
