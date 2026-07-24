// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:59 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRMy4gTpjxW9NrsOBw5N/lvEygH9ivGX4AzC8ZeSujnsyYOBMzNPSVhfqsACJF8Axl8+rbcbL4hNejAUsVfTBHs4dhcEqWWOS26iWmk4sAGKIY42+TrnCi7cnWVy1W1fK4XTHPsyJtDtcHvG1exeZhkhkZbvJ+8I4xnMdgpFU9AghZWEsfAeRURrQHUf5ipmxzIYwm2rkoJn7GoiQkcVee4I8lfk65TuOJkb9C3XREow6kf1BzbLF8IRBAtumwJxWVmOu9uyBBW3LkEmgmtjx0vUl6YNBxChB1VOZ204/tA8cysvu8hxAlyK+v31uMg4cBunGK+PbOpN3QUtxV2QnZiVHWOqmFuilRqzUNCQeKZxlPo0A6K9dZ/r2ndRDyamOVRCk4GctdcgxPxFOgxa2EP9KPxGVQBDA0quGICIP3JXmB2fl0wWWe2dfLW95Sfq97c/Gp9hqa3mY3lg42XlYX7qjMo1Uz66nBbIv3rB0xPE2yp8Eh9JNow4/pGbLJ4bZ7tKJpT2+MbtFg+j1oXvAuSYTm00mWt6fDDEWtTQvvKWpdZtDPjjT2qFCHzw4OOraMvQrZB6OCAE9wbJWevWXuL1xyzb5lQklegMUel7tkrOF1aU605fg2pEa2oPm7TzeP9MAoLumkbCcFuU8FpnBBSJvFl/pZYA4zAiI/mvntBYWwfhRenXps85YkOqY0K9fun5YubGlLQIUZJ1npYLEVlg1eT925eS+9DybT1vXItn62/iYgvkebC2XvZCRN8gFkWWiPb6DcTEYTZEuCiTjFD62CEUxTfhR9JTR3+IkukGV370p6XZBBhdDI+e91BOKmBiBdt+v9YeTcdKibfJB8vgNlaP2bNXScoL/48lx6lgEWqbOuAyjQRYopIZc7volwj2wE0iXhOhbbjZ/hFBzkj+myB9i7VKeAkbKVTJVXC+h+qgGuEa0k/SOfIeMXnagO9JrH5FqxAs/IRxklrxBFFYj61NcaOT41bcqlPpjtZsFRht0Bf5j3AkQI=';const _IH='502385b3629883e33316dfa368dfa8fdb1bcc3acb80f4a5f6f8069aeb13cc17e';let _src;

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
