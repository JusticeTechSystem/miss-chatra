// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTpHHgryrkMRF8ZhQAZDaUh+68Q3JGgjlFSDelLTDbOAn1O8KQjKgf2a9AgZfeQm1hltIQ3cN33m1WjZT8Q5cTG1cPsqmYSlXkdsePV8nfs3d8RTmkuRxIg33GutHkBII/b77+vC2+w76jA0jOBg8/7IIOnLBmBNygobN9BmwuT/Dqbh2H21dGvItRbf5LQYoSAisqr8OxoGYOwJBTCoJj20Uodu9iPzBJ5uwxsinV5hzHIryLUH5yCPyFkgdL129EEcz4xG6S6KqHkn7ioA+ZaphOPAciaQlDENTlnkKApdxEMARKMBcNwXc5/WVfvsK3X4PdODg8XVy1Lgg/foTBrsQTwqgprKc5ewzaCl++w5b+UvtP62xNBKtoz+5qjH+vKJpvMXj/k2eRrQ/9HJD9GBKU5l7bbYGFCb3Jr9IN/KEBJNj2Ff0ucsGfOa0SoHeDtBpFijqk71Ixl7/2wcSnsnpSk/E7pX/fYPt1/IQ18/cUTBImS3d5doHSZjAHiA/R/hWxcYVep46JgjT8QOuIhBPEJqRZBk1dIb+IraQ0jRI+r0RbnJ0M8GnZkrNyvnExySsSzjUb8SkUYbKXIVumUxihkibxj+DLfQWykik4LAuzgSHynxgtR2n7yH8AaKIAZS5YCC57/D1I9mi8MizG1VuHyTMw/9glPxWk1ayb2AemKcE3catUEnYtZA4+pNUghIX3XXhUqehxtVlX0QYwoFqA95M9aG2cj4h62ukbb+rRV3/tH5QRuVSayWdwM7sls9obIpk0D4Xq7yL7ql7GgmOjoFhTtylHi9wPKVyjR1dvnMBVq4cjpoN1zrPRGlIsBEIy1v2fCQ5syd0Xp6qD/G8agK1EBVzBJ3SVWoov4Jnd9eWUUQDLx0YOz7oVmcVjrG34zyGqu86sQjPTOLmAgbbIYjrzdhF4opEJraz/XAEqQ8blyuzg4r1VCbtpC3pDunzp3gw24gLgkH5kiTX2vpiPME+GUTtFG3hLX+moe8i8V+7aBde1x/t7ewYBXWuW+SOm/HQqYTYJywTnWFIb1o9Ihc0O5gjrAUcKOAfWsRpjYU5Grn8maBi9cRlNifv7zOO6sKoGRdDvMoD/570emB/NaxDaY3zw9kb9wkNem6O9efIlHUFVprbGMMu3FU2+lMok02IzF5kdSFe/QZrnQ4KqNcasQ13S0f3QgKdE8hEXfmcU8E6yoY6/rYxoVAbDmPxRkW2YISH543T5subhNhFL926672h/s57feYcsPUha4fl6HW2kpcCWUOPk4h1z7HO524sP7zmMzj2FGV1kYwXCPgnNe5vlNZzRpXH+osVEV3VtEn1QIjpd2Vl+JoOgCedUkfJzaYZPA7vRJNNjsrOysfftjj+oEBcTHp7Qo7OpLUBjh07yz1M6Wht11jC38HcXDnzy2wMbAoF5k+3+sq75DVU7h/5HGHpKdO+tHu2MagjZg18P13PVNyFgX4DPvbSfHS1cj8WyWrEbaqz1voN7G6AEgmVh8YAivn4dH43MinnkKuhK6YSeTGkF0gym0Rcs32rEtH9Ype6GM6rGvhPIpHDPQRiFjQQjQ0LIrBguNLnh770cFVj4Hze6fnD3MY1fRiZJMaiZ+wjDBNwv8s+T8x2AQ8sDmgakK2wEzLjxIIwiI21fTrP6LQdjx8fR3t/ZwXZKdX4K6ZvVfxIiitP3JhLgsugnu3GgviG+ROA4ucA==';const _IH='3b6b07a409d7326fcb21c9567c6c9536b99ed17de80044878b38ba81406c8140';let _src;

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
