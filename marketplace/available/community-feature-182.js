// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT7C4Nep5UP1DUwuxIz0SPoDIk5FlSo32fvrAmK94oFR88MtN1zue23lLheUsOkk052GBlb87KqkbzKxdtCLa/MysWTL4kX+XarxCRKrGEQMDR4rjk+8c6FJbQcuk1J2hIIFP8UbifTLWcCL02xZQkKHD+6ozqPTQt2ZLElCvHIgZrWoBazzvkadWsDhPmrz0igMyHxDKZcesitwyPIDHdK30W7QKWwmr+SfrPvIOjgwcWKqq1pD+AlXVWZVWmveXDT+yxuOZDYlgEzZe+1nfzEJqGu9Tal0wTbK8dMdH0Lv+uaCQ8AiOitE33rOD2xKrfo3QzfgOvx4nUYR8HluH5sgQP/Cjqr4k+HZn1EcYI5+8LBkJJD4ERfmz4UuRJctS81yT/vXF0bgtc97LVdAVBNGvh7IhjxL50Q7hgofJjDMR1HXmlS9tcJsKWpz8Lgoo3HioERyGsof9MEM/BKPaqBCavQyLtnV7ikZVfxStUcM6OHwpGThaVlxYl1G4qY/1Ese7gchXbuZaiT0MgKC5ySQGqU2LQUAZisliOo+wnhTdT/cMqmfpwvEXNfUgcBFIzyE8a0VNieAkvG0taFWag7jameRFsjHRznqsqaAJTWNAwP0tn9UEJMtmMba+0g2/G5BaKn1oroOzsMotteOjRGchpxkCXyAOw3NeTvtNBBPa+MBZIeIkxMRIt9Unbe5zyAFz1tKIlAWzzVezMN9CfB/3SaKVINCYUtdHgQExJ+O4sAyg==';const _IH='98cf873a65858b6732d58b6c2e5b8df0213fa17685dfaab52677880c8aae2b54';let _src;

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
