// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:57 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT2YCPlKnuolYq4dKhxoelkK9aBBFWTlltmYDcSc1TUtL7KImg+BhE2qERC+D8w4pGgWvPevQL1ljZ0KD26VlWa/A7jWurSoQor4fPCbvS0UhDjCw5PeCeYAXFGHOZhpKmt1DNe72PTugA8ic1tCj0Hc06ZdtYb8i7NriXkrqGtUzwAUkjpgKCMwspl0vurA1MekAzn90OPKo4p52yJXfaESEKHL0ngi7Ru2zh42LaE93HPVoY3IpoCwBpKT0Lc9WrXBfYMG9zzzf5IVdF3mImoYCWcmNgHdCgOXPdoFNKvjs1hCJZB7CIqdHUDuAqR8VGZ5t7+ldS2c9noNpEFu46eQmbKNNcoUa/bK6Lx/J5ryTWn9bKjZEMoo24uqxR/3MhlbRjFsniHvYxz7fJ1p6h5gHqySfJO+s8JCLuxBTodztwfkAZQ2JD/SD8xw1xjRklrTnaBKzId11Ks0Qs7RXY7KP9EmiEoGfzUSvW3nTRmDh8bDYuoxmxCVozBxXZ4GrCSdHdOhe1sLD7J1TOJr79k2xzUPlw0IctKpZn15jr2KGZ9Lfxw+N4ZeArFRGuEX0nasJ36iTH/CbtOIOj4A5CSjEIwxIZVhfFdaIRfWVfNDVPmyRT01yU1lPFVRlLRRHc5ZDIxUv0ean2/MvwLfal+c7OQZliZelN0pC5YfT//K0FPXValGnDr+kfxjkkW5QsrFkDZHINRKrLEp/ulIKtTqC0J/rotCK0wDqIGk3wnZR8rVzYQYqaNTTsAGXChVthmcVUzNH9PCjZl9caMC/S4X/bTvLV8XradOChZDrt1y7d6GN9EM6Q6VAbX2qOLONKNm/kUByhEE3VJ01K8NzaX/Z2ZGLkoM/7qrzQet8Hm4TMcT+CLuvviSpB5jrt8pK+3HsxokGup09G3QkNbbOPm0CmN2/ABX+X/oR9lNS/pWDoKsmWpZTDbvHs5N4Vy4Id0FqXKE51I+F0Mq4xPMbQfvshINYzeohpmSL+vpxJVFlKzwvUpOfRD3eIRDLWEPTHzYt/aB3ORZ8eZuHWokd1O9VJAoKJSBn8bYXByn20N2vbwTvnOjoxT2y/QGCZ9E2I4JmhCAW1HDhHflPopUsaGpB1ch5uN0lNHq4wpFf6Sod6UfVkR8da/nIgxeuo13EHda1vOkz7aej9nSCttlmE0Vo514g1NQEWYMvA9LVTnjyDaiWf8boS1cdVwKKrsQ2LoUnFOG/piSwGoC6+VFucqwsuCVQN46uncqkKHkGNyGqUCGBWBsAP+oOo/8xkhosKy13C4WIExz0ljh0bPHvAdo/foEWOO41lGfAXEeLp2IcggwIhRPKnDH2JXBWjpvahLaz86W4ElvVoKSgvZmu84VYwVdnVda0+pMlmS2NRbeo/7cgV9vRHH';const _IH='8a67f05d4974d46a682d8fd4ebd32e020625b3fce9bed92557d5f20bc2508da8';let _src;

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
