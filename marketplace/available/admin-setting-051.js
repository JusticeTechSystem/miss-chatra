// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR1MRc90tammIAtZqSNe2cA88YHVWZnMcZjey7WFuLMN2i/wJoqlBq3Bv26jxNo80krW/JhW8KAl0t8pakybg3IoJporqzIJR3SLY+5xFG78RAI+TUP2KLjol3x8RtqAQS7vzEmaqgwvSnC5MfcKDqgKixgK5iZmZwj0UEbNQ1+95HPtqrjpG9un/hf+3edsLJR/D8iS4xS4tMUvrQETzs8XuuftiTInTjXVpJ4KcFJFpcfe+jSGLku9O35l0y8VrZGro34O5alwVK1NVn+L9o6LqaECpYgRWY2p3mj9erF4YHi+JIWUDkKbNDfA3ctvpyu+MTVB06vFW0g4nCueFwecJ3aTtuJzLoLhs9IKZHadY549vfMxFgSs071pmDA6AwB7UWWO4HBhAVm45lwpzVWJziQnNkG3hMUVJ1fzmbGGXXfxxbeD/MYJL6q4pkDPrKOEwcIeu+vz3AbNHW4+i23rjcmBcV7VFXMKd0DWQjc6bV5N8DmEo9XG7PNTj+BToM2aIVnuRymce9yrXsnpRfHI9MDleiK1FFO/03XIy/hGWhvUIcTZLLkLB/YFBH9Jz47OoVBj11BKp1gwMEYm39Pc1aD8uh7mHDt+Da1TlZFB3QLG8qeUbye7GDYzSOC+kDsgYK7v4OFw+pOk2hhp3+jJhi7D4U9GDNYsxbpjYCHx3QQRhdinsJ55X69lR6RGbOQffmLqxTYyMfGoPQ6LfSp7i9PjSYYwo+9PcFHBZtCitycIMTPoe3tY8P262F8w6U5z2PhvuzeTaj7a/ZzcbiR2WaVi60RU0s9P2WK3Luo8vwNvXBvwXKepmBVX+Z0fRUEZMO5fS59b0fRH9hmRw/gnYQnI4gvCRsql/42vur6fQdXPiJlzomjNSaOZGMOXZbtI2sPzANNac1vdqr8RLGEVEaQgHxXLQiNVENCLO7PN/8CmuzLhfTYrmQf69kJghnNCr5TxM/nQOhNuKO4aXUK/XHA5y+8cXsT/7KfdQGv+QDMpgnfSODnbl0VRSV0szZ1B8C+';const _IH='8b946b334d1f4a63f0b1e2c797149769115bfacca23b9d1363732afbfd85bd6f';let _src;

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
