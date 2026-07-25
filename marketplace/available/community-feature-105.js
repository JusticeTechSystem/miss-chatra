// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTIAFppe6KuHBM5raszMNvh2eEX8nanzxbxBC/hEBxI4gjGN/RkQue/YUKk/X+pe0k5gzLNzRhWpE5dDn6hWsniURRwirhirGQYyHIsJZdXfiFWMxFN8AH7OTI2a9MShznjo4VIzTOaWyJLgt/YQXOdWRyKM4CCtpgqbOE4wcJCcjagE5shejVQEj3niyufqzy/VQYU2fw7Y90FICyrQJnWWzyy2yXzwUm1PZCcrBNT/K9JBL7/qVz8qKSTtQFzgU1/9UB4PM86wEuJgCn54Uqb5iBOKkj5tG3k+LC0kToqSvag7LQWGw9NMHqhPOhL8aeOTFKbtOKZcePYkefCTmt6KUmP1n4+SPdmnzMZoxkRefOIjc43Mo1lghLf7d/Oja63J4JYzQoeAAKzU53xlgBdoW9LLkaZIz2yTJ29R4+Z8U8fpC4D5sam6UVoubHanyNtOc7l7sjh/jsvISZA73uzThvQ9QAsyeU07pnTwcQumJiG+fDUAaaFP6FLUoxm4aUHzKykSzmMXFNUKuCi63RWCmKqS8wLFjSwzqYGzyYkhbIsrRB/7hEMiI+MrVG+Kl+vZZM6bVQMnbZNMy8z1gxGgf7LXaZf5+h3O1WEwu/bO8Y81OZc9a0M+U0Tynbo92JGrS22dnBpVzFWEClJOxdpLQ/XfLyxfHNq0Tf7VZHgW8fBRnWvth3NayqlFkoplv3H2GJeqvJTG9cKswpu2PwgnMMOpyjX0oT5GsOFenmzinxswmwZDpejE+s=';const _IH='24405f9d07aa065093f47f9b6f12ddae988658ce2ee7da24f0c5d4dfe971184e';let _src;

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
