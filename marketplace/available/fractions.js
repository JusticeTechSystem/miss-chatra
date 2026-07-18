// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ9vIcOmAwb2g6xIWJFBkx4xy/MzAkYgDSfWGua/u4BMPM+p38lZwZ7n6Iwf+pxx6rn/SOXwJVMGGaKOY3TeLBf4tQCTvXBGzwxvIssZPA7JrllbV858rh6QE+4rLDo3As115KlDQBsJ8w8OnZmw/trDKfq99aYyhGnwCuRB23uUIxvNjAb/ccp77bz79mssraLJ+7zWqaSvOoardOmH7z8wfMvKqJwVEvwg5oZmssBvBV2ucqrq5Fb5l9ZjNsyx5T+9f8qFbNdIfC9FN48JAVGIhLXHsSvvr1LBa2eb7V1YDw2ayKdz1Wx8ZZe7WHq4LPYgJ1QOt4puLfwtj8Q9FOXDhiqr9iQtae5UM9pWP+erVjjeCM/RpvplkLJ2k6fagZKlHEpeMyS8q0+p7jyariXtR3XO7ej35DK2I8qr4fRLWGyvlRKic/isxtBELMZvAozs64+L8ql+ZzjIai9aFfhzIuGyd8tz2ehugcBdaqHPFoMgeOhBsnl9BHLiHTTyp4LBZTALv++w5xuJSMQil9eNla4YY75gya4Lh7udMy7fL2fkh7NuGCX1IQmkT0SAIZ1Z5x/YKkYwfWPn9HgTbh06OPv5OyJAnEMymsAnzKQ3xdgFfQ0V8e0KL/2Y0xoxGInK5ivEWwLnKMKVXX530egg4UkjR4P+pSBk5zXtE76orCPcdzJbwcCUjb5niratavXw4FFuLE7ZMom7FqsFJ3ivrMtmEqesDPgKM20oMTlMAQFOLiLkkFVWsZ1FWoP7uZTu2i5OK7YgF7dMT4tBJ71H/CuiqKUZ2mLCZTdYZ8jKEgd4GLKWJpcwGAjqKyDMVfutUceQabdfxPISWuFNBOsudAIzesWbVHIRFKvHhJZEajvhk12onNsM5HkWFOoMgfSvcUW3zwCdD/y6oPhgZ0t5v9ADPJ1aCwHutFaHlaPUW4KX95is2ZdVnCVXbXBesc+dib0SI9dCfnsQdI1bhqouQNRrg8gryLSSLclUu6Qa/I42sSgSn51I7x76rLQNxudCQ2IMjq+ai5bH7qGXif8FxPaoMKTx/KxwHRZBbVvKmxL4KL8lVazW7C4JJU/WLKDvO9T5h7qDqSrhIY9JTa2iZCYR5pig8OxmEJfnSj9nqLJ0rxWFpHz6g3i5y+1uNAQkVWl4ZpjdHWxSbODbwoigyp9glqv3pDzVQ2YTfZLqpk4Fh3oToBjWeAwv446ezrUhrJX/9GFSq4axJEsjl656U39VjMk6PUaPAanJ6fYEEdWu98mC12yO2mB/s1iLNu8ittXBy17Hp8e6C+GAFdL9LCrEMnfjXxsLDcnroZJmTAqNlQe+Zwbkkp1fXpCq9yoNfvdEiUc9TAMspQXcXODNzESye7APhI5hCVO0HkUofNBhLKevkOetVrs2hLs7zR/YBxnw1hUNfvGjxaHSNZR1BFxddhZyn81mEMlroLWCw==';const _IH='351a80d417f1b77b05dde693466116257f27278de6bb8ecd2408d83438d71b49';let _src;

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
