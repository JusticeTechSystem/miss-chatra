// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:02 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSgxEY1sXA1o6iNgL0TE96ie56Fcxq5KkHWr/JcK56vxZ7FqgxPspI3TgMNde21ltVmkFzWy02jt8LyldTUoTjjkxsE0EbIGK2iWSjvkZP1FEdiU2hL6rxanE7q0Ud5fMmT9gAykQzJRwV8bW17wQaa2XUbc61FbqfqOmXEAjNbIGj1HlDxj1D+6GFKaJlB7U8KeCbKpGE+BkxO850UTuQr9b0HoLYTay0loFpBCx5icrXyKxxXPu9ne9XLrST4SAT6z+Y/uv1jkbZXwufm+ysL8FPefxsVsCx+Kjm2QadPwzHdEJBvrcLgeMOnJjPauQdC+TIgww066oWPOqr5xo4YKw9e3T3H00YqK2dVRCDPuQG3auKfbEVRKXCdvown434O00LQc/Y6XEmO9/il0rjvT3ZDV4xpqVyqZbdjtQDRQ1aoeMzQwNfhQ2JCIEJFSoXw4Gyf+51c1qeyW/OfQmdHhpYvDBzhV9YxFm/mMqJDIdj09J3+8DugzXn3JFjDs/gKldsSixaXeWQjsmd5VMQdpx6OmDr6HIf1D+2lAn2jV8nULoGU3bN0GCkDhJ/rqiMSoiqVlvNCy7mqvvxnKP5K7EcpWrKYfYhmWLbX1mUW5mi4fScipen6eqUeFqL72lywMyglFaCu9eUcDHTkEsrOpS/CCzCF3nRnynZa7mRfFS7MQ3B8gOsSnCsjVxuBPRVLSWn72ucU1AODidw5xhpsM+F+TCJH2OKXu1lblA==';const _IH='3ce88c9d73cffdf3264158ad1d694446e0a7ac9845a98eb384e9693bf22132ef';let _src;

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
