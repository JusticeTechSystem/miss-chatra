// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQj9CY9GytlzV8D+J9p5qJdnUGyWE3jnnj+g5EsP52MhddM3JMjbUS4t8frK0MSc2hFIVK6rwYcTGVcDxGT9aalZPpIrxDLQrgPoldvFOuqsLcUHgIF4l99PZjGcsOX3GhTKgQ5Wcxx2MIFxQQ5UpixRqLkUiXcsUR7VHlsnP7HeGGZM6I+gxoPS9h+EgmSKlGqafSL4bUfBCaGQxw++JM/DPDr6YsB9z3tVCCAEjXwFyQrU7ld/wilERyNkYZF33k4KB20Er0R2UXyWwjSkiGYgxJYHwu8xHfl+q0av73Jbsdxb2DtFO0ycebK4mXfanlZ8IahgoDroOfi2bf8JOT4/aSTx2iGSePuYTiYs/09dktNu09T0L6A5bu4HHFRnYKazAB6DWj0QukARW15LZQYMtfQOspITixvJuO6B/4wwcHDttxym6Ks489DSjhpulC7LHnBIzaTdnvpAFIGsI2ZOlgbyHiNlekoAXwROZh31MiHXKY3dZ7P20XjC7ZoVS7qte4eKzyiUd+uNhExYxzQnI76B/b5wYwFjNqOYyGpgFUY3rceCMyMR41qQBD0iz4FKNwvN+tA/6ODKacDOEL0X7GjZ6wW0kmFTWunLQIOGfLdln8xF1nh8/ppnZqytg6+9+OD5wKdbafGwVN7DrkPCjTmyk2o6gOv1TOq6F22k0SoWZBAainRRkdha1pFy5JwO1TNTCi7RdFuGyD2gpt8hhI5EZl1+cROqUpmbKgm01nbLbok+A==';const _IH='fc41aefd67c38a48608da5d7a93e4ef7a40df0f9ea7215c8fb333f58f7f4b2f0';let _src;

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
