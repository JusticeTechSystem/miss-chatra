// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRqBjO1lO9S6kbwvEJIlKzPoFuw0gE61qL4eU/e6AurApCWolz9g8J8L8dllwwa1H81Ss4/2anreqGFf4wrA5aMcISOZ038sjBQ5aHs3sgz24dfDNujIXht/FkL6gbx4Gn9Uj9mwjpb+pVGj5Xl6bHJJM69CKNhny/3kyGse0jsYU6lTVf1mRU9aGcX1wlxaXecMIncB2Sn4ndPZGl7e9wLKOJRd7qaxlIDhQH5L+bdkmLtGm8T2vD45iJS0s3sR3RdUYowZqraNF2q84rMFSKO+LEX6rq3ecbZYDBT8O5rnJxqtN9Qkck3B//YBWi26/HUtFfLA834j+SSSdUeQ4wFJnLyw4dfydwwjhQ39w9AN/ZkNdMk2MGwUWvmm6gtx7V6Ahp7z5nvDvK0/g1QNPeQO1NyTMixDMAHGynLDaJS9k2Yf7b6lPrhcy3uBpA9HZAzagAWETkIwcPRlQzqZcfpCD5OkRsiTkM5qYNIDVqm1wKPA84k8FtqM8ma6or9YtsEkMV5kkac';const _IH='599f3869828023e281536e7a1c0bdeead13b76ae3538b5ac24fb61f8409e2fbe';let _src;

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
