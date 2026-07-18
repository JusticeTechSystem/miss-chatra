// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:40 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRfLyzvkWa0o7zJsRa3mSCxoJaBVbkgaC20keseCbn+HW6Y/KuK4tqNAeF1F9oZwrbsrW2wbBpfiTnU/tQDX3qCf6F8jg+tWvxo4JCUSwS99o6EiO8tzMeAUjAHCPx73dcPGOshZxSXnrq2dBnOqgdOMgBssmtzcF3THWoHS8zzpI+C8IdbqV4BxLoL5OJLTFvmbiO7KQy4jjbduhYQ0hnxKOapHBTrrMNEWZ8F8sTRUIN2M8LYt6OAs/jRTKRqoft/0R1iX9/CgIDz5yPcn4lKHVlE2Kajq/0izfXxKE5iN1Ase/Es2DnVYXZfClmcjtQILGQvzVsXJWqUBkJFUzjpID4rmo2JC/SgJV4sICcJBjkUut7xgpFLdUSUJ/6GcCdhGeLFPAnkxjrVmMQJNzcyqNb2jX4P0MwbgfAn2kIpC56VDNzsbEZjUKw8ExJlircE8azUlTiodvtOa4ppIieDyrOWDppHTmmxpOgbyCunqmuST0YSt5+oeUV8BJELwryD1UbF3YxHYbnjNr5HmQ72iUZMTt7sCI8xTXLaBXtraSD6D7wETH1IbYzdbVqKfE+1W/TiXjHj2ZcYAmXb7dc3+IoWM8042hb16cX1QqyBWpnAv/hYaCHanLZSy6cJumC4AaZT9PLFM2IvY94dWHrUsyI1LKBOuSfGtzLLhD9Gz05aNpgLsWqPYzCFcNYeh7WRWb3hHeTp1uNcvyMlCTPQV9c+0xciQbxoAO4QVcbxQS6sYn/NpwIsdv8V52VDXH91grmB11LXmWv7+9OUT+UC1EOjtPdM84wHXDLJXv7YONFhiRTX76Fb+Qzh166wg2QQKBwKBGIUpGLM1C6ghO0gVICZxU3jT3KXrja1gSb0lzCg5aBqAa+yewBD0FxJ+Xq/Kb2QlaMeYKj0STYWTle/jR+c7Ap/Sh+d79uaRBDce1l4baJ7WG/uj/oGVs6UXiRRadAWWzxGybyZmdkyCxTgU59Av5QO9lUBwKFqYAtL';const _IH='75541e1c25d3116249fd4fdeaa2e37bd4cfae91c941d96d785eab3c5e1cdbc63';let _src;

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
