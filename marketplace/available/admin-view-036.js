// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRcSs5b9j8WBc55MWonTeCLUdwwOY4DpXFCAMH/lYG/O7vfIsCcinWcJO/0nABJNJNIX7EL5pmsMsaw4f2zYuJ1mKZ9pOCc0Rm2kRow6rI29d1+Syoa3AbMBCfLAyBEa3PxK6LIFodnesurtrXLaf1X8vSKuwWcqbNJCNRoJwKrvWPdNC4NS20Qx0+n2QHsRjRB3b7vYdEFFIdt+YdDKOay5Lv4wu8MrDF60n5xK8749sSTsXTFsvAx/vbLP1hM1xkUp6MLsP/8TWiOBV4qskMToSjMDBgVUyP84pi5QymX9yzfjc5qkffOMnAzESdLFrrkc1nDGxOyPQmakFhJ0afRQuhUPqhR4PDCK5PhgdZlBTdoAF8nzysE9oc29n+FmZPRQji7/bZlfNH4n4Rv3E76BV3ma2OWUGJPfceUXAGp4NS3IEzT0JjPaBXEjc1Xd2CKG0kPehsTSVZYgOhp8f/v1s3SS8kIEATBR0ohrdBsi8TGpgNLE4sAVivEfiCrMXTI96UJnXC0vUmCPCYTMVlqCXwIl+K9Ypua8+ZcP/GVym1Zk5ZUmSzsqvBivUVRWSXulSwCyV8FCMJQq9CYzwLclDWO2py4eyxtqb4OtdCF6uDPvKhqWe389DkQYYPRm+seTdbypgfBQWPMDaJQLMkTVyzWvMVjKWEjeaMtt6XAiAI8hFfkoeQ9YJ5yN/2d3QVR0N7vLWUTHtz0E9FzJJIqn8Fvz4BaBRl5biU/D4nkSXFkjfu+QdMJGnTkYAOi1/cy3IH5N2vJyUAs9IfCcAud6Da+2TcjlBS1is53pswjrYVfcKhFSjxp1fdV4bSZaUkbH5PlrUKHO8ZA27QklXM6MQIcnntQ2R/pBwRikV6fdIpG1Wz41Ggr2/dKNoW+exCZbqYpyMrkPO6tg+hljaGuWcQfJ5DkHZFrvLijsNG50NkA53ukywi2BUsQseCnKKRTPILWkRcpKe/Lqln8/aYqpa9ZAEL66GXU9Y5UVY1V';const _IH='4ae5500ebd2c50e76cd36df5307e52d89b7848bb9dfaaeb216d1a7a94ba66e22';let _src;

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
