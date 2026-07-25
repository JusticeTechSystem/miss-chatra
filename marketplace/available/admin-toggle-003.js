// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:28 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRqz+aIQ7J6n2BbQWG9tOzunDmTdv/j/LF1zOmuqemhThJuez+We3ChO/9Ps1BQXhqwaseTBtZ1zLRGbHHlotIUo1/fgolyKcU+ExGqHOOo7S9189ITamALliFEdafsxqAS8c1p4U5HKSAdh3xRKAzK+Gak5bXMAY6Q/n/YdMu0tmiI3afv+oJIw9rJtHuyuUziPpGCm4ytHbp4K7GBdtSjQn79GFYE6BmI0ePN0/xEhPIRn2PZxwT6vxnttD3G7Dx8BvR0wQ7ZOuBL+BO1AbhthaYtMt1O2/WT467UDIv/jPAIaeFUM9WOLNzWNlwzFQ+48W7+DZ0jvW27Us+/m6y6WGvD1+j+ITBPuQqElKYuLbo4t/CbZ8VsDYzNVlhoErVEk79iwkanavKYhiOGPvfWB2S9uL/0VbcmsZ8nGRYkPz1qMmFyzgBEesARHNtaH4nYqQaEnFkGVXIOLhI4ekRLdADrwswiIh3X0FoASObMrOFi2cTw0whSJa7yL+5aWYZCNsXNZxbrxDp2pPCyyc5DHw/5C715ARdRwqKm1lRdJG8Xy1fh+khJVQbtgC/LDWDaWdhKTlVBWoWmW/TTOihbrsCiiVqt25KHlyuL+2xy4ufxFdopeZ9rRMbwzVKMUC3lDugFRvTN7UKS6J823UCVMlfDVz0PS9YSAWd2Z8hcx2ATlqijaXw5OjmHtswrwlO969acGZKvJW3vwnTJdSvv9d0V1oZJoQ2vsM31YKN1jA8yMA8FeR3Y6Sqe6TU62UxWdtvT7KCXbV6zNw2SN6VDjyrpjRCSDAWmGkpoXX0+T1qfAp0zGBUT4PQ+6z37lcEQgE7+FEjrlltIH+LJVF0kt1A4DHYzj6wB2YOXxiDG+f49RgQChuwB5AlvFyukj/Z+dfbdoUol1U7v9sbBvuzjYbTYFkLJ53+Jh064Gs2sjEwK9a8MUg+SThZjiMZeS1OP44TjmYOErgsf8QgMm0ShIOpT9oC2zTPaqSKxmDWV8oDXwsIK7hRMbw==';const _IH='b3163b109a669bf6ac8bc776810cdafcfab371e539ed7153ba0cc21c32ec6e5f';let _src;

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
