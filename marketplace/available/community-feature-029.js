// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:01:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='62Qxb04HWj2Dix//SYUYdWpPQXYVmC1+HBBsYCU+mmUvhAKCiSRm8r5rDUI2xA+c3jXb1HD/gJ0BW2By/j+ojU6kuI+biRggNccoN7VGiKR0XETp+iAdB47ymhmvziQDpLlH0J4T7Wn7nVSzwtMMUaBL057sAx0Ke3K1+sS05QoMrkIqeEmx0e5LNL09L0xhNeKdUp6JubbE3o4wde/FHCBaQX1gyjzfWjOPoh5/W57XivFB/9q2drXZOYVNuA9LkcamfS8xZTyKvdwzgjWlKk0wviEI3lr1dzS1bvyfOhvzaSuf4T+j9cxv+I77sJ3XggDWoj3VTpJCbbEvKsckPsMbvkK3u6vo/lxVVynkm4QLdtRqZI/uSJU5QaDYrQlonxLuFb9oyr2G7TsPce4OnjAnaaerRnauTW4xNntoXDAOIcn4LXLC3629yS6sIIBc5R6zWhiW9tOJIul3Ek/wwiMUH0mWTFbTLVuzbm0v8wcWUrrKXzlSdoTb6Umj+Xx+l7tjqgvqPz0Fy1nKPv5RR4oVueXByVC+ECNS664hnQ8f6gfRSwlWQyPy7SJWKZNjVD1/kNpNVIsLmpV7TjQDyxbUTVNlLa0tYFcbB7fpqbl3rLAfiOZ3RBkG617ygMT4gJdiHgSOhbHKhhZJ58TRcsKkEzEgwZfONQ0eYGZyjCQ5QuvXNEsJIWY1CML1AKQxYkgXOKXCUZWj5YKZ96lPpWhiD8mYFsl9AfXSY9fPMiU0dg==';const _IH='00ebd345bd52c164b8d03ee52eaa2b4abb492e4776051ab32627478645de3eb9';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
