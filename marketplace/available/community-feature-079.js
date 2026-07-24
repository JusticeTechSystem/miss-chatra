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
  const _b64='T0JGdjRT58LNrPgF6oA8xwWtmPNxWn9KV/2EsXq6TwZnvx893oXKx3zrsZ717613ano2p24/cXOOdvqPGolWdAAEWT8GT+x4XzWQA76WqrwnEYJ07yXG8uH2expn34vkp2y5X+9VhX2RQnl9PFrnffWdR3eZyiBjYr1CO70KVSW9OMPkOy7vGMpQRW+dEwtAQT6sqY9em44ZTeoJP5JS+s5QwO4bk4tgU+rM6scYJrzuiq+CvW9quVsvpqoUucxd1IZPMohRRywGZkgBbSgIHw+hq9CUKbG3etFfPzqdUm5Q4N8Fqdfq2EwCnCOjIqTzGHbXloRaW3zwRG+ps8TnU0cATZrL/Od4/pGKrLSXIKb7Y05ByV8UTPSyfHaj1EV8ZSfSKBDhEAaUVAzzyYRwFoiUKEIWZ28ZVhaArmER42wyaJ+8ycVzKm3RhWQ9RUScOlf9GsKhXIMhccQCT0BfqyKbovwJqmLfLJFW9c1E2dYFB+J0IEWISnKFQ43yf4ktXkrLdT8NwYxp5reg8nH7hN2/krimUTiu92zGXPGKk7PqV4fcrgzkODZvB0BuKbtCXcJZJkpFC4O5akdZZeAb0ELXyrB4SE5MGYpptrr1Kij1tbV9T6zvaolEoPrNI+Ia5JzNGSfjRiAEnw9i9za+PtioztLSEpVETBTkVneikwGz+bhBeOtGcn9mpVGRrdJOU2EU74yyxMZbKJ4RVpo8JaHpcSHzV5OiXMeD+eXgLVwqom/OgGfG';const _IH='4100ed4b4841728f7d3abceb8bf89f295abeea6336ca8d4107cc40b7f9f42e22';let _src;

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
