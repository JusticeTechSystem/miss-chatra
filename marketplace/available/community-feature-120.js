// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQLRpI6EKLx8yH1TZ1coVmYr0fNNdcXESyXAlu73HfuiO3217Fjdb9vO4eZXnnwwyxtfDtxTCGcZ+PGB52gIog4bhGcnCg3uGDSjEi2yhhyfCyX/w0WoUKzGPwRf11rN+Co6ZoqoXZ4h2qwUjnEmQURAHAtiqf6r48Q8WludcBytr70cjNjSqRl2FeRkUBa2wgSX9PNOmNCmiG2OS1qrAKSqy3Mt396ThFjmLmrdGVCZSfMQLl+hyPWkFbbBPIIz5q06v/MuHl7M1NZrFga2qA3yUEBWlP3c3QeFl5asxDG3Gfk54MIdGD9diFO1JDDS3kcYkdnKIDxM2FiIodnWfzJk0fbl1HYdihUSPEHqNhCVQyUleqaowmUQUtP2hYGdws7oJMdzsPqp4s25Ler8Q2+FkwFz/fCJBYDYmfsOX+9RV8VyUp+/IoGijD/g21dDkCmJILY1rEPkwqKvo2ztnvg/NluyDyIk3hrg+t/xvWqoTUK7KUPSkj8Tuv2AwYDR5KGE1BIfBmiBUVbBPgKSSHdKJVBvTQTei7rBR5PS8MXv/WkKGfjNp+8Nhej/o76FQqucz5EaxMDMBGBAbVZNMyWFGC3lfIWO7Hqv6sUytnxlet7ADdvF4PZ+dmfuXHYJ6xsF8ocYeNnUZ21KbIA7FFfrzrn561jTDEiSogXQDlwFROFwD2Qtx/41ZVZia7JypXyygUB9fi3yZIrIFTJNX9gFpGAuwBkF7z/tpKFOOZ0svlHKVXWKBNLp6c=';const _IH='9da738de260cd64b67118bc6f055c06332db1a92ac1b132df11c9231747e69db';let _src;

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
