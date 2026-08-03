// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSFbUEgMW1nomdsiDRJvIx4tvu5jP2JJuVDE8eeBfOnsxhRIkQVshBGjvl5eL5fOmmAmOA+q+mOcY0RVvxRaeh2CzK7G+qqcWp+1Yi0pG/lOPVFzGz6tTV6anEtekaogEWdt9xaKr9XctDINhN/N/XRnZXHm2itOtnhB8plrNdNMutRWUl4fuH3UWC5e0O1o9IS1Xzr6caq5gLrMB6BJ23uSUiZDxzH1XiY8cP2A+lBPA4XupKMy0KGGHMUlfs1VJJ9CIPwUH6KyIjvnxUMx+yC80Oy5p3O+kii/UgTsyxRWlUDXttjKIpUbNn39EBCAr9ouUG+5wbNCj2r0nJ/z3xXn8Tn2iz37xdPTvguta7k1/9xwP7HLMjvgiqgdUgcqvrLD4zx9qgSe4fomIZe1TShLMRtdubKy+dSoGlUimL6UuRArBLd+WXKr4qti6uZ7L9bZ53Jz0VMx7vITOVZVOaJmH4EYEZqgHg9r8GgTuiRusNFUDU4JIphnQllgbmRzBKxjKfBE+hNHUd42rhpaLi9HiWFuq71gkIsQlc+JTQ62qI5DtDirS9qnEkd/l8Qf2TJhxuS7NqalvgzSWd4rfsaaIWZ9TewQhP2DhChfb2tzyHj7lRdspJvDsQG5q5bkLxoZ/GxoLa7w4B3Z+Lj/iTZFlumfcgVA2i+4pR9XBzt5eQlTY24zA1V45iKe9btHQdYrH9uDbx5fN2O8h2zjCk5ovDIX7EscLdSR1ItmhUW0kHtYwvASB6t5nq8GQ3Mhi542+nVNSoRz7NwFTVuKj2/LdcMJSfOLM686mPNOS+BqkIp2Tm3R5fGiLIBcDo0iXfYHxZOa7JuxyWigbSqyyGigOn49ThUZpxdGxc1bXj5VNecpQi8R15Zh8//z2y3TFEH4JL8xJyfhmWe2X8GFrnqb5JIzC22J2eW8Cze8p4QQrm8ZMQqmsHeD5s=';const _IH='f932fba3afb1b814e699fc7c2d84af7b843fa39e7a6a471b0a90da8438590d4a';let _src;

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
