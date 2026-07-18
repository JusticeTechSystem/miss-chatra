// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR3VjxcUdWo1ddZpbfgsJe76vRkDZ/fWbzgIF8pPeHe8UDVlqFa9muHYOvGTL5C2zp/uQGtgpW9cMPA1T5r+rqMkItXQRU3pJUtM2Pi/hG5BuU6hAvuXjXgveOna/dF0gKEuwPARHZhPXu+8QKuqf+iKv/zCHlnhFZd2sArOZ4dG9cldItwU7ToId2ZW0HDEK8a4AQqUhJYUvkbdq4XSdllBqQ4MXTTQJEx2jADq45Omtj2NmmEhJnD8WcG/jSnHHzyria7gI39hRIZgUo558LfCrvgVQNxabbzn8xiQOVB6k+QLRVV8HiEz8Uik0lZfiypP586WyrUPMtamlqnIy+2SQQ5NyZJexaAF/p0c2iPAppvJfaq9/9YKB7FprRCiPCzThMWnfdvMivP6k0oJowbuH/zWqgt1CDXo75cQe65/sX8xq/w3q4T0KN4XyzuhnF564yPdOKHTahp3tP5XuGd2p8+PNcCJxjiJQ/qjsTGzQQ/BkTtScnM9iBJvIHFVDJkqu3ct5GfguZWI5jZuSfgfDRkKT9CzsdgjotDj0otYBkWIf7y/JN5TibplFTdrYnQZiRdNAeVXRTvRRMeh0APtZcsadifaErClnGjcBmmWX2cEfYZ28FCMHw578JFNnLcdmC7JujIa7Jkg30SERKaBCOeOOXQ+WlL5YGuOmvo0EzTF3sGKwWBOlaw84P6xS45xbUl7R8Xqdd6JwH5L64LvOXEqA==';const _IH='f465d4f065ecb5cc14dd69c783edd3b9042d1159c2adbb57dd51197fa3405a08';let _src;

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
