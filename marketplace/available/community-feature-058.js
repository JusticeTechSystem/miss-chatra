// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:53 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTJKPetuV5+dbBHcmlyZZ/J/bZpiuvrKlBkN7BW8JsLET0Fw5ztzneODh5I0VyGl3Xeq+wyASkrugMm2U79bAEJW13fsvXvH7qj64KEQObvuG+dtEVyyYRi4NN2EhMm2geEUF+VpcBjEre5+c9RurhSC7vuXu7CUZ7PmzXwq+2K5FaBwg+K5karoQtyuI2lz+7JOybnL2fwR05DVvzpGRL1sXujn+0tUnVFi9LhDRCIytrDNEtkTtx2K3cpIT4NM4n/ddbXToxfRmpBK9oz1QMuaHZLO6BNP+RXPlBtLbyNjc4XQXw0rf3EiBqy8gFmpqrokS1EJn50NsqYDYEgS1VBm6r9FReTgMClWy4TKLFeFFPHC8xBsg+IB4aZdza17KgbFjY5gFlKEVr4UAjHIJti+MgyhpGGI76AvqRAwGWI1JjjcVEhdlAL8TN3co4hwH79TqigxRYqGgEREbyV1qb2rS468MHK2c5tB+i0mRzg5yBcIIACWLgTUIfLbYM0a9qXopds7PyHmKy4pEHj3gysOoWABEJPgkDxuWzpRDcD/enxOjmmF7vYhyVZZHbxZhAkKxV17W/VD+y6KzNXINCJNwsiE/t1qNfqyl3lzdXn2wbsmdJk1ncZni0Ikf4+Gh/n4KCexoD0F3TAzMTHuj1iLCW5ymvYkrqPp+WlMxJdXpGR6qShQejaS8mQBY8fox3wg/+fnkI5kKgc+OJAiyW5cOTxWV8=';const _IH='a2606309a1d8e4f89752e8f4eec269b14a7bcd721c6a97e2dfc0474b3c852d92';let _src;

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
