// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjREkRhvCAwMZY0/VoYkZ5uYXwA5/W0QgR6SyjjFvudQ2R3PBimng5hO2K6oul+d0uhIfgLCeXEEd2fBMdROc7ySz4qmZPZC4bTB3dlJ7Y97Tjo+Wzhfg+rPFUC2C9A3+gvJd0DAI0yxneLxRVoyixm1CXvioTzzqaABAUdjLBut5GHZe2pLX13XXn9zMe6RoYDaOJUt2JqdxohjBUfw50v0CKwjavdBpo7CzhuhFtgVFGtdivPyv6FKP2z5F3YRnjQgNWXsyQMVkrx95FZbtRGLGQWq9Q2Vn/UuIr6HkaJHNJ8GOqkKnNUJh8FKDmllF5QlA/+sLgAj7YuuOlzT/gp9YhVx6KTNyY2I4RRSYbYdru/axGpZEmuZzjlRxr4018VL7xRoK5HgCC7j6dS481NacJCXvBHCFKTn24jMQXfCwQCJexZPsrlXGfSzNNK8qjlfa0mbw941w1GZd5Na31FmRElEDeZAZfZ8X7yp3FWMd65bry5l8pVh05f9g2mfh+ZGEzODmNwHFgaTcEh57++j620KFrwk7Mq1jFR0A2vbcCVM84xvZF+JTZfkP+F5SRKEZX6Xa/Ipf99d9Rbl6TN9WXDoRkJdYP0BKJfeiJanNaR8QF8uY/XYX6AyiL15MhOFwoP0pyym+1hZS/NeSa2/CxpTMxJj+uGQ0j+Xrk70utT//vYGLtFrNQ1GETsu4vjzj+A1SwtyhXa8SVH73OJS7F8zDeinznp+/pH96OL9upfCSN2QeAV7xs/TtypWk72FRbyO1Pun0rtgEwl4rSSbU10oqymNIOIxPshNxlXgpdXUCXSqw/veY0YHZg6hKPcMH4QqYVXr4hNtjZrz/lg4Zk8Rq8xSrZgDHn4eHLWYt+rdNOLeDWcEgPUsAY5Ral+u2cZI8+OZvEu+BTHnpyQDYeVwj/VmSwJ2Hj3xWj2Wd42KZxj7p+Nn+8pJ7ET71HeH+RxiuEn1oz67wPDLloOWJX6ViFek';const _IH='2298c869b07faf8cb1b806f526aafc3ab695c9dab6bdd45690018b6c845b46d1';let _src;

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
