// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:18 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='5Jb+xlXHgoCDkBTI2XHbtb2XacjmoZ7mhUyWM9GdAtnUGTp8RxS+DGBBd0yPBHf3izqKoBRUvWMf1c2cUHoyBhWr3DInLKNKT4ASItnc1lMUbvFSMOBn0GY/CI17u+LLRQySVZkvrxDFf+FKKOQFhQOXt2L8F/JxMZDxW+FJuuYwRMw6rxEDF0ZqtG68bVvfiu+yo8ccJ9wdR2/VOR2idF0NV6O9F3BGLT6ZxdFdUHhFhl/LVWoqLvCicPM4umXYUP80UFJz8ImVmTSkQeEX8G0+obe5QFTnSSUBF6LyPBf56Bik/Ofm5DqN2IaczRWLdkq6S1nMYGZQf1NNpF6AJFkYb/nXS6KdycKzNe4Bm5Wpj8qrEroDgl3vaQ1qvtIk36sRbTcFmPxi8hsToG+s6TvJnMf9tXgZ31T/wqHqQXTptmvoi6XAedTVAg32RkyhtlahaBLHdP+21VZ0P6JQPoUKgnwvJe/n8NF7OwH+aUZb1NoL6nrMDdyX8iXrtHP1JUhQNEGW87MArEyRfBjVThyZAixc4H/aND3JVMDyEmBvPt7OfA8N58ANaBazjrR4BNUUv9vThtNQyrLS';const _IH='44b29f03a6ae170632185167a36c9e1fee1ef1642f498d0fc1e9129f9470c314';let _src;

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
