// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='veL5Fz/0dRvHy3ir9Ag7Axu6fRA86xMlyqafmM27h20oKuE3aksUj2VL3fWGzHNzco7zCO3JLUr5sO8Nrgx18Vzbn5wgu3rV1aIH/WT+HHNogEgCrgcJjgv3+jrwze/qUcqN8xj0uYAOMHt/RS7JgXCgCtO+sKj3WenhRz6jSWdc/6lzZ0MBcvW+fPX48GwT9ZpGIDRXA5yAJXkFm8cU6kUQcJFBCIK+ETg2Psx5Fk9gTrn7H2ooIxbDbLH2V2/KKx5ZuyUEA8drLrPzn/c1cJzZXvj68kM/4KvTbVNlhg5y37w/2bCtOxew4zHNFuJv58LeuivaUTXHwtROGRu1L/WpPPI838ZSIjsyUo7ax4Y79kw1X7EJS27Ydf3HwftuD3xBmMQ8cz5gpB2TlBtbbxBkOS3wvPUb91Q3+q+BMaC3QV35z4OC+Pz+B38PzhkYfHkWbDyFZSQ51UO5LBTlHuVVcDju5WIZwB8O1dQGdefh21h64szaLQTQz/qmh5mRA8J4oLNWqOg4PS4SFYKTeYLzILbzDjdaN+r6gzJEuGjPkH4YR83ms/+hSz9gsmxTOc+wB8/ApmT4Idg3Dk4v0/2zqbT5wP3xEu3jMtj68v2l/QR+2mDBiRfrcj2slYSJqWHRp4F4w7m4lpP2Y+s0Pm1HW1tcxGJNgwyRtVA+ofPiqMHyhM+AYd6CV8iqO/qG9u3OvwTueZia3ujE089v98ntA3O+dbi24dn49ZXJTrzHL9w5MegB1D4tohkpOp2Ndga7yAl1f1Iu9C7IFSP3OpWeV5IBjTSrC9jnXgNv2kLc3bL8nvGvrtZC82EbMxST3eUyDyanrZI1dzR89fRr+KRLUYhV/YsZEttdSYMbQRU4b9xTE7gQJ/h6sYzPFGJcqZHsBuwSKi3ZPNBCBfi+a3JYoQohNdus+OaWHJZRfZlbFr0Bd8a0bGULXLozyDd8LIkdGjhIztD5Kuz4TO/rjcix8CH4K2tvM7Ca6JvB0uyBXDK2q33pee2bAl5cbo3BQnMAeCHNgYYB187lr4k9cjmezqYlQexTgN34bl1oSvs3WvpjDNJlgOtemfn9cUKv2XBPJgVGMrCNPLm7CjbITr2hyBo9w+fnOw9YNwqFi11r9V+5dp4RjszZ0wB1sRsFnkq9p2RmJ+zmDfLdESqBAOH8VBaNbyBkwIlz168HlMoCrIy+oop0OEjC3KRiPZbNf2kcqPuZgkAa6+TQ4svOiXWbGbezHyvPjK9a7ZsPMfr9H4FBM4rxenoOrwUILi1SV7reysa538qCAY5vlfgWB4jL5yKlT9mB16gwxA0zxA4TksXQtNeJdJ4BpHSTwWjmhoA7k7/cJk7m73kpYyfwAcH+kzQRiS+oVrZnyroVbQp9TCK9qALvsdKnOMnx/2USadFs5f2U8fMLUA4i';const _IH='9879ffb6d575f04f63eb50a2690d94882b707932865d6cee7b9f2b92dc58371e';let _src;

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
