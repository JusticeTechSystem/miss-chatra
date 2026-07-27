// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:37 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTueoXPO5NHHZREFtuMmeWwbDEs5q7uEGkaHcziE41RY8wXlPSZmcr9qEwld9SbVmjzklmZd1kZFRCl+C8SAfQVUAQb4LYdwf6KFQGxIn8naYhf/w1cGjtpMzoKmUGX3MYhXN9jVY1JSBDUbI/fE5kAtLKXOZfxVZaCTAE2L+BZoOykoVy32wpfvej3i/GV66UXlH8dri16CaBETCzM8rjJIryoZaR73JdZhTJVZsHi7ZhUkENC6vWKhGFFsZdsNSyqDhQ/FPc4PayP21izrnxeqvC4lLb3fVulORX8sc8HOtuxC+VNp3otdOkeGnLch4dVA3e7qlaxBUQ1UaJ+nNw4Ka9KiDsQRZNgoTYD0XrO0EB8RvuljTSLZX2XVk6jWCmqRk6+Pidi4H7s2s6x9Rv23AzshkRL6BdbkrOx3BMA/4MA0LxbjELjksfY2p6WzwZpGM3YH2scTwdRU+vJkqIHXPvuDozjO6aQ3oQzuBu7khEJrIByXBCGXEzZH8tbG9BN051a6CnKEzW4FWZhKYr2ZCyC2/0JxEJp/ekvWc6Zm9b+ZIhjBDW6v9p9weMC91V5PcJcVQEKFhvZoOonP2jHk4aC5RO31Fu3c0uPo/7VVn9lPcF6A/PIAa9MZiYNvWEj67g8FZemiNEEVmEraWdwiqzZE3qi+Tmukos851GdQ4dND2fFQoqKeYfLl1NWqLteS7K+3FpjQxmSxdMXsDWFsjoGRUIx4G0=';const _IH='a76435a0ca7e895d912cbee87d9d8207862a6830b9698bfe53033b0371fa0e6a';let _src;

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
