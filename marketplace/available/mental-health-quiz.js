// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 22:33:40 UTC                   ║
// ║  Cipher   : AES-256-GCM (Quantum-KDF)                 ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='UUVOQ4wQSdvrjmV1QizbIE2ZKEeHQUrPOgoZL6xf9SIU/5/uHM1uyUosGw1uKAAAtKle7NDB10RBu92pKtqKxjG7GzKggcz4SMqKTogejXMIYaxdgUMk/fULRPB71UgSZUKIAXCqa3mOrbn9mD80Cva86F3rZ6KuR42G/rafONue1Sc9EXumOmo2XVB65So6bKOayklGP9OFGZ3+zHzlu8HNy6ot0Mau4oZ7X7OD11n2O/c7CS2/osL2sSVMQfJp6XtgCBbpfOXa47yRNPztw6ndWRcW/hG6+BCTNQUsXRWMeXuEXJ3kQynVOe8mgHUlTnIBVPvoPpzzoWq668lBzOjclGETN/1hTi0swGEwzvd5yqy4ECQUBSsRvc0xz2sXgtt0psZR0gbzl2JMe1X/MR5KS+xi67uT602vrhtmA0b7wUoWPmhFDPIHntYBGTB4SI4faN0E+C1z+0OM3JTCrhBUMPEs79oU3mdxfLD6+YXqSD7w2FVjoH7gJzZWxCqFTXLqKXeNTAO8qtJzekZs7nGIBavfsnSEPuwwv8YgWwg65XXMGU0jQEes4F7WFGXt7W81pKsPYkRxvIgkLhjaxJnDN70tXLA1UEaT+eGEBhvXdv2VjApZP9GBBMG4ChTjlIu9weH5faizZQSZtAp7SE8wjKrTlnd06o/Ta//U92We/4pduHxOzIAocQyGnVpiY/J13Q5UjVdJUIriNXD1BN3CBrxsIxDCi8ho6mUNMv+ElK5Rx/+0xC9Rjxb5N2hUhyZwMyMgpWB2cFdUWu1Z7x+QeVNGjxLOig94v7vUGfOg3wFG9fGFtWeDC5QpKuP8FpcAifD0SjYBbzSrMVJOcqlZxIt6+Kwl9D1cutkTD1V76Lftb9F9taIsM0/fOih6QKLI+Jg0nAPP277hKXcLJTax32X6xa5fFc/YIsw1c3TYz3y0qzhfxXD06npfBf8iVydA8mT9Rmdfr4Gg6dILLMJKwPgoMFK7zmAg2QHYlDimNadz/nUj3ulfJJJcxU+xar/f0gmZ1Z+DddYgkmbf5jksmtjBvZSSxJvfYAh/pS1AlGxQ/j75boV7kFzJOd3qeLjEMv47VahKJkffhO5HwOI++GRkYG058SPpc+1MTEIYizu/2PiyaVFJmJxaoHOP0Gh6TXt1BhjwCXIRc8Bd0QXtlcLQR4GflVcHET7M9A4islGfUWAgyxoAN2s17npx1AanDo0wj86+zULMoXw4/1VMWyg5S70YQMskKdSU9rryCuKBtGd5/DpRBbpMiYHZa61FKNMNeLlBsR88edpdnbO99Uaz1sSsAjgw/TJCylK/9PGR7SwTYl56bxx9TUYAlJxhH2rv3qxzPYdMQg/5vyy47BeAfltGT0Rn';const _IH='8341aea25771952fd12ede04c12086bb2c9f72ddc3c4b713b8ef656b4702d07e';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=0;
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
