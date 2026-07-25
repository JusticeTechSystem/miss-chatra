// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjR5JNnzYfTJ8RDnJ9RANfMjUzzUAzbutDFpi1vtK4Cj4vi+SMQdC7iGJ7NzEtTvuceeYQ7+gA6Sa+5nubpP0CEm/5jGiNjdKzL/6JIxL+3eguWdzIZXoD4SV82AceBT93F97WANt3rYMYuCAgIK+RwBF6zasn5LTvorWZh3mdrlMl6GkI/EQlL48YMFeXqJGwRRjKqcPAzaRXrfL34i0BZsp2sQWfCBc3sSbm5cROU2gt88V8l+0UUfAXKWmapF6AS/JB40VIqY04MuaE2N/t8sR7kwkFV8HVqN2xodgGB5TitTSJYhL67CKtXFDK5dMnUDyi0r/5paPwmTfzlxBdLfxs9CTZD3nG0VtQ0KKwAeiJ4gm34DnsQA8d5ZuWKNMrRcMfD1zIrO+EWBjfz3cS1gF5hpkJYwhXCqC6gCLjegH41Vk6I6OTbkTijXPCG3j6mVVHdzvHll6gTdCKPSZJfk/LS/O5x4yRVujKq5iJBOXWFh2DOScuMiFUOZlnfZwVZw/YcoRt9RWlWu9bbLFr+4UrSH0G1WjEOYQopG+PYCNjsarSwQKRzbJ+rOh1HKaVu3zUWEkDv+3D6OZghoaKUerIogX5RvlQTMGq0YRowjDt3hZD9Jw0tXBYmLYbijWUnZ7VH3py2Sf6RcQnnk2WcT76f+E22gCFmJzLrGEfpUhFdwTnGYbQmi5i1vx2OAM51BKTQb3KqvA5HatSyx+Yk84OFKBW1L4LjAsEPJde8Wj0nh+loz2cEbu2kpjupaE4acl1WnwK+Fy4fPc+Sp3Ck6k9MULSoejYU2v2OTqmJOyO6Mtzz9haEOjnnZvt3XTiEDcSZ0xBPNeZq4i3L4L7Nzyzt5m2+IPB3U8DTiTunZMhiQG7f0H6Zestrk0XuAuuTdJ8q0tgAn7UELzIu3vKaMT+L/MmirY2KW50B6QtrJVEg+I3/jjevIDWIkoTwx4vctk+Xe//pOgkTVgO1Hi3JRPPqGGl8Y1CZ2gxf0sP1nVWWQO7PPOERtLA0=';const _IH='68687906b7628ab031bfc50c009b95c0854f9c3e9f85a0d8f0521a377c601188';let _src;

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
