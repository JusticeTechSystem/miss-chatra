// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTS1adZCyrbVpyyHm+XPkAzk39qyXMC2sLGOZr2iySaCJ84A711V6jDuRzM8E4qX+mf3rtMN0ZwfT1hnhvBQAJdcRLwxAS7GP7oaiMzlKYJGQysU1ajEL12Sb3fQq45erhOdfl/RwH8gy67ND/RSfSGcVAEO0Scby1TeB6p3AukLpvlvH8WyaLnBR7yoJXB5dTwYcK/3qzO19dQRZVqzdQczwo0MdUL9Cj4AQSyURl1aCJuY3AiYcQlNYJou9nPBskxKSzJTuT1eIeN0cWnbsf5umQVrnKSlyxYbcvKxAYkHIJ94L6rH7KWAAfZeTL8U+LzTGIatdMkSigxssZODF2PcJcgs6whxCLTzpr8jYGLoJi4xRelhvGJPGDgzRyF4oZwFS7DMvG9LUs/vtzmQ17gW9/fnb2HfZinTln9dQ+OyuKJ8ZfiCQld2dbRPYLjFJmAUGeeWqZUz2LwRxlE8kLdL8NjfY1WBIYgJUHM52nPs4cwdZanNf91Es6ZjWALC0Bu++1i5J9WMKbMWwydVFBU3ibx+ZGEWp4MLxqIl8TE++KjupJPml749L9f+5Cyo99n0LPUMEO2fejWjLYSdPcEMmMtQjv0M8FuNUQYY0dWbJq1sT6VGdXJMDvp9qoAmEjttx7N30XfXlqJitRagJtHo36Y7hMmulwUg2OqChLUXNTmVvUynNoQKPQZ70ZdphCbPItZRXt+dlwKIsHYJIXo8FeB6q1PeiZKxzhMU0+I2gIGrTFEC3bYvqdDgM9LhlqeScqMyo4wSWPGKdqkhqfljG7Ke/bplSqi1VNy5zUBBvccFfrA+UnIjpN2cdwUkNC3kaQt0PpFAZTNtrk07m1i7JlhoJOZtzoIktw2CENdyIqkf+WJUIb5wUB9KmDUMjCxvOuktGaOjAQxePXGIXUbd/nj38pvSkd0KdZTWPz91cu4+iLndSsKJwcHlXXAmabpOSOqJ3je6I5yS9OAbTSHrhmYfOayPtUGSfCeJbf5n2bCcWtX2KbPzAeAhnj6Q+s02cIZ6hERS7BaMo8TyGH5g+FIhYGgQMk466nCv+3ocfeDjRxzLboH48eUpFv8rZ06JKXh5+8QE+9EZhbfsp6kLpe1fBgW0lvQhCeolRlRQ9kPlIq0O/g5DgEoliCiFH+RRZrB4jYJzErblnGnHbGyd/7Zud/esxoHe7H8krML/e72kQGeMCKSGIHNi8yJHjIozAIuS+6AtuRYTnwDMmwuLa74QZGEwfcE3191/uTJa8PO5N4gRl5AEkbPB004ZZo6JD4L13ZmAaJ5R0KlBu/z4CKLVlf05gsJU0s/43pH3ZKumJx/6He5BczDwsCRr521u3xV/Sy0vWWDN3ACMGAYmpXzTXKpSA==';const _IH='6f623bb4b6c6623ad1e37fedf218b090a93ccaf32f2ae78eb76dd479195989e2';let _src;

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
