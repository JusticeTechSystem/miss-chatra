// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:28 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CTKHBRTjr4qXeA5WVMBNaKOTR5OXZVRB3ufQn6h40ifKWKtQkj3n3uy3jCN1o3cAqVFKuo9tVYmc5v4SzNxozwnLb6YzcOuO8Q5Lsy821QlLyBTnJ9Ger024LbZeFvD5ZThC0RlLpCTOyk2BdtG9ff9s764RyltTIUyRLHRKBoFKGYrzjCQB84QA09uRzW7Iny8q18PWPCh4dxXFzzD3IbakzhjY3FmT7FS8QH0W2JuGkYoxJHOXNdfLC7dd2WR1QdeCANspCrZ425DC6AOeBwHZD1KpzL2LaZH+Ki4FQaWfGPDdITTzk6VTqgsfQBEB+yU35cbp69REqPpPpJj+naeVIGysR2yAdrrOjkyFr/7iJekMCbUZ+ho0za2zjN+V+Kn6or94DTacpDXS7nA/ngr2XrAKTnQ3Yz545V8o3GBoj3nAg97TXXAnaZ8NcXCa9bu1tkfB3YEWclYJHxjQgsEZ+nFqDLFb0QdjBxUqAmJ47Zr+hHd8Akx7MdNitZFwKaterjkc8X/+qSBwVykiTDPHvCOsnzASanjxJu5gcKcteUgzdKFe2VMtxnE1FeX4gdStxuBhbuLihB9cBkVrPAfL45ZNeZUTPEfjjjOqJw7rt5S3pYIh5OOyNH9TciwjUSaGDBCzWhrZxy0yjqYVj2VzPeouaJQeb1PuUdmGJShITSu6BWKwQlOWWCK/ojVJrCSBS0caGgXJRyPe+XholMp67CzIiSbt2afq0oU7uO1YxzKiRIiFKaKOc7TSe56CC+T10eMbqSTtmxz9OA3CMDkBl3yC+UjSQOc5eaYLC0E1w7I9qOghhlHB497nxTnOZ9lYJ7Ouuw1LAXPaPzDno2Pe/Tn9i2eNgYqsiJkA5F2Z2M2poXg0kAIw2j/rRXBEU86wSTqXpjvfmSRU1cbfvdbZVbRHcMNn6zQndaW7SUrF26DnWcXyGhgWvTNs1SfvymS85QkKT/0EHk1/00LWyAvtg9PZilvt+CsY9jkAMAKZYKC25wvgfOoBMJ1Vo4bNYQK22YEnXKunJhGWzXMcwi9fJg0PMB3xV+4OCw6urWsPJJtf+hlnXZ+jGZPk1EXqcz4UN/d2J2niN6FoGjd/rpiotRCAhhNLhD6sYKSDaXKrnG7qoUUegrasYHIjQmDXZUYpcBk0qMquIByB/ZtohAd2SMviLcpc9A+kvUTa2S9UTvQ1xlxJTJmg3ZnT01soMbospKFgTTQVh3A4etWBKLvyfJxCMcffCSYmB8xTpJ0e1lehkIczuldf11fsWKJ95uko8p2JzQHn4ce8rmXXyqncrHJtFx5DETmShI0QplyBvbpcedi9V9nIzOXmFMP6o/zehRP2fubvmL7AO3KK7UDHJJzq1eRrfcDyxdmS';const _IH='8fff807f1c6e7493946ed8055c4bea6de2309dc8658f8758fbf8c8e22c9e9751';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
