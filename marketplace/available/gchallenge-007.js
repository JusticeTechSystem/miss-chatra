// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR/ZJ+nrBEpUQwfbkIAJjA2ygfh3OMkzeRD+44hw5JxvqtVh7PWhSoX1p974jBpy0zeNyGfVMcQSb+DM1gqajg6S1ViRBTsMkXefacG2fGmjQKBtEjsthPlCRgKn6RmZHKhGOttAXARkCOBDOancxZyN0k5DEjovkwRIGHM+7bgkfPne98mYF7i3kj/Bwgfn046RDzNmi71sAMFaqf05vjikS5oM8qaL5z0CaKy2cRfHI1PRACpn7lFXuxe7E1JPAm5FYinA2cC3L8ACmh/e1I5Ld+BvkdJnwx+FZKypVyrHMt5ZpAxBALq8+/I61GYePqwunkHtaLKXutks7PhlWnfn1/dsFnnN/Sg51BV+5Q8DENni1uuHfYAD0GWxoXah1BxRqeLpMznJZ8i2MHD7ovLeoCCwZY1P0vOZMkvEfllnV3I3vx6uPmiV24Rq8czEM65h9zqZaOEouP+sYxzBFdk0d1TawNvgEBKAInaU35mX1mZGy0q5UFu2+q+18vBoyV39wfYO+Zowh4EGe4Axab+TEpE5AqCSRYtEM7gMEUvhV0imaQhfHfEzikkw7XMnruhaUcMxu6oOOoeSz06/xeqHEeXTqLHu9suthlbGYxGIgZrq12Q1mHOFQgeJvzucD0l';const _IH='6ec46f7b3edffe7eb9828a8d5e46de6281b5f08bb755d12af0126af5b7ec1587';let _src;

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
