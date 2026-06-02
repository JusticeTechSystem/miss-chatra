// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:57:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='j4tYAXXT21TlljTlP/qgFC4lLhLDkHAJvpaCdEqclzNhrv34/iPgnkqzZxX9zPD4gt8rGDaXCSpoul9Z5WX/9E2L4DPdrGgC8xz5UogHSJiITYTnpDx1XWrvMSK7oPthR9roT3CbDSRXcigqs0CkzgnfxF1DGAY3haSghCImOiTkZFkb01SXVzLosVcQkpF/3gFECruE6PRrAG6oZSFJ+XBIuQKfrShk7OA5X/xNWhz55M+MLm3O2yGJTMkE3Njz+zZYOL9oGj/795wHd0dQgbRWYpPWo5rdbdhM+rxfCNKm6b7Kz6zRGmmhoe0O4gpAtG2kNd25OAr51LKL5pjEdX4ne5ppXv4OvYGHYQsh1FVeSDWXwqkkOH2KLOJZJrP9SkeekazCe7eEZIc4mw0GXvnzWXs7UM1yqEnDRqfVSBHYBB584mXPEgpuV/JWmnpeaiBd5K7EqB/5AMo0PRXT6FiftOvlaSqwifcU84vmIS/A758cyAdD3fUzLDgN1o5+fWGkeSpRZXpXllp3Y91soXgP/PBRWpADHVdYHQvsqYgspbuPqfIddif/8KJIbpVztaJYl8HHFYSnLGXZU0q1jr3+OM8Y7TU0L4w8PBckv/DHpUIjkpouGZNSEisI9xsT2N8DOac4TqTvYRh59R7bLeS1KUF6bAfJuoj1vIngpobJOL+neYrngWQv7Y+RZ0Qpp5X9snwQ06koQct9rK6eJFcJHLJFgUDV8+wbrhobH9AW/YB8klNiP0eG2ThbIzvc3KteeB/RIPm+emL5cM98XPxV0ypZxzaZu9948fsJN+wKG4j3nKp4PDR/DceqyGjzLFgPA3baqoXDwPafmfd4NMQ62VVGrfks5ro5O87pxexDk/ZGCUPq2bY+Ck8RgxJxE2cJiTRM/KSOwbco7SagOfA3LmCKyP0IkEIvEwjg5UnqfIYQBHer+LS/HhY9YX7RH7eSGq4K/SX83xBo/HYC6z1zNYZmQIpmADkrxzGg7v5sXNN6k1VfTZ8cPPK9CaNvevBxlZ35SH1xHPhQHkQ8XOofon70BD+QX9M5fBPR84OWfl9EeeTPEMMbETMQANAfJpcSmQX/xllPtZEILiGQSDpMAaoq4Y5BW1wTDmFdfMVwh15MiiO16q0IjSxJhVeATevM+Y5yGteZUWHnZ+dlGxyutWhOP1uhc+tdDeuu2Rnqvns2hXMuYVCZCIvJ4Gesybm5EOTm/RUT1VhcQyxodeMnPJz3j6Sz1E3bXlSSmcJNpWYpZ+kSCCmBc9tY8oCEoRJPnOJ0Al39tAthKpdBNf1JoaKsTNU3c+w9B9vaPxJA+9PP5FPSoI+9GkN/mqbdChxdesk69a4Ddw==';const _IH='82be45cb87fc89ab1766c023130728a525d998964bbfc4468d56b959e5b34f20';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
