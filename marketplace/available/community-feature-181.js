// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ05/jBGMS9t5WQGXDg4zIw7IIzR3/Pc0kRWTcC7el7+tlJ4/xnMTI7BHv12iz9wi/+ox7VTF7tj6NR8D+14WWWss5XukOVPVkgrmAC4SBpTbykjg5hDOyGLTwbVAmBfqtnHT7iqIVkOCMLU9Xboe+3WoQLLVpn7lXTDA7X9Sj/IrdqrJPArk4OUceBmWA+1Mfe4hC18cdB2ATOkb14tT4UAKCE2aHKA60Y8BX9jPOdt4gvjAhAzog+w6qT0B/FuFvnEwh1D+szjlGJ/ClBSrhf9DoFRzDENOoWy4f8YV9yXQqJyRWHjU6m8pZEdALuftEVyeHi+oASnOjjbJw/m0hx+IzCIdvPJKueD8m84j8LE/8wPvEIEZ627s60aTnOhydcnM4ORHvbCa4AGtyqCHy2k+bbpf7ULZdcZRL4cNl/mT/MWdSvvV7UgEcOwUVrr1GRyiVYOpDRywsrjnW1b7/o1hnnXa97P7OmqewqFeeUiU9ekWlqD9DmzMxpoOz/pJIBhee7BiIJUZGBuIM+tGnx9qb065dWeibRDL7f8UMeLBR3djmmT4lHGdd1LMiHzyEzTVpBP76Zl8o6DKWaI72Ai+67PasiG9diOmWcx5OOPhpWpZDli7mzO6bycjd0qVqT9KZoG/F5RAYpJdg/t82bjKrgsoAMWgti4A49T9KbdVg8gBLhDvTjbAb/JZp+5a5Pybg1hvTfUOxbXgvSOZ1aH1I1O1dtb+s=';const _IH='70637c19ea0e620209b0890ccba193b1c78934f8a6879a74b241ae6fc75b9b01';let _src;

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
