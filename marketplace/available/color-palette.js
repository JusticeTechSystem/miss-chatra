// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjREprSz7+8k34vIKGTOknCaaY1K0hf2aodCGagNz7pYJ6/gDPiYaOyk1YRVpgytRRwbcvTjeiydY9sM4fypxFkmkT4TFjpKGP34ddWqRWVUt0/dZLYZmIbYNx4ciTI0Bqld53qLpqhR+bw1vq0xL1OU5LSml/lCrE8OOoY5gQVKpU0RQ18gfEU4OPAnSJ3Pf5N8B/0HOIRMIo8CA1kr2ieqbPmUcG428hUO+l3P6yT3Oq++DDoXKYGRROb0oCxdIGXspYZcskSXNXXPhnk+E4JN09aW6C08eCIGouk+e/H7t3NmloTigaUMwWQyz1mdQXOQ3UJi+CU+1ym7dl04USxLWgIc8D5Tpsdl/gQEAjEJkjhevmoTiXWEldBKGC4fLczgWR1FyFxLRu1IUqNoVbhgrmzW8fGwW7hfhmXD/e1m/T9q5BYrjECR6j2KYR6jgYERkrtNRHCMIPK+b4DOqHXG+mn9St6P1g/vugCns4k6vk7LCzl7n9xRxJYO6tS0ESZXd0WFYF58f4PRLKy5Q85l9c53q93G7YY94SI+V731ew/QE+Rn/3C4+8sAZyudapwp9PgwP1ubXeOu3rBFqT6pIpZP45nNiQXTJYELFAOHTJs3/DVKp1/wBN9N1/3cxVhPzcvwb5QksD6EU4GKSjdwEDBVCHpSQdRUXcUBi8VmcoOxDi+Q/yJHR+ox7IOn/ocrgm5G6fm1W+b3Qy85zDcke8/RqYe4D1PEbajSTX3vCgSrGo147bakYmmr3FOZgqebyl3otxRteaTXmLPBwKlXtHY5gMWBLWfx8yP0Oax3t99uujKijeS31xEV2p5LJGf+RhEGCWa2rYNsrqV2HsNZmO9P/DXvisFc+OHIvDydtn+fNswhjQvuVsc9Yx5kw7qvo2s7eDtsh9R15FPc10IsKRd2lfONnLu6SypoY2hBYH5E9pJIwWD4ErBO9SlqhACV1iDApM6e6Tx+FCJRWoV5acGFVnxEEUmVXaUjiHz8BA6Ju1fj1jqZDRAlVdNLRitGaHNb034phjQyxQypvx9kMk0g33BlPyvLO+YybCpbVbDbjA3zXM6GXPjiw1xqZbL6eCpw4/DFEcHgcccShJ+tqnfmP8bEGtJl9Qq2F2Odi6ZryRqiCRXeKfUxOiWWHYL+yCe4A/wlR99ZJON+Ar3b7xuf9D+9jyErVtEfcNS/3y4HPUExh+46Q8Pby3Nl8gJnb3AuGHbvTNxXdKog+IRvKFTihpN1ccWf7GAaNEOqCcutbgrQqyCoZ1UCDF1oPTwd1B7g/pRSU567+RVll9btVGgXixHhZ2y4gRRKar2eZ029Vx9OTvPink+c3POYPIhOtNEcHo/7oS9DjT6yXXkZsGnCDTOcwX6JsM7MS1vrCXE+vq+bMPh4Cog5BgLHpWeFRUKVN2W3re7q+NKyGGXtlWrSt/V817RbgUAt6yoChV9htGJCGWcqhhbfhZwQwbFAH102CHTHqOeDXuMjwXlERZFNfzUGjE9BzD9AFzvH59bpPwSu+RDAYZ9uoiy32zndvb8CXc1MiUgWcCb4LaKumM3TqPLOAZg3QUZxnCe41+1G3E4DTX8MGCEBwlnK3NWVA80=';const _IH='9897a6d6d973d69f6834f16a21eb288093f8a61940f395a911ae101d3be500f8';let _src;

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
