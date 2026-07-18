// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:26 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQRI5OWl+yICJSf2BYLz1tUXmw0rQxvPC40Z2G8atXiatJoeRScm742ta+Ir9zcZkB8Q+/aJu8lQLqTO1cuh2xzXaMLHdM1DZhz7KhFDa8QQS0RW5cLTKCiz00EIadugbdJJINllj060FXOYqvikAKpCT5SLU6s5IZWjV8em2Su9vayTHUMari2FBImQFKMmbvniVbEwJIh0+YvjNPbPNtwNN3bwcvjI68GuZF4toA0osPTr5XLQ4JTNsx/L00TF4sZDiOjQg5MT9ka72Z+C4TRQC+3oWCd+9xyCNCmLIo7paRuSAfDxJVoffPvpWTKAlaBykRFk6q7UTTWq0hk1iA6ehrsP1DFYf0zuikTMyqZspZhDaRabX1UKVHqoUfWHujJnX4oYWDNjQmQNdo8kSz+71Xudu4+fxdX3uVZ9bVavPyzmKIdxZhGx5IRsEIz767dE0hn9sVlEcuvsC29d0+ZBI6iHeWwK4K2s9YOLEBGavXevCkHtvuaTb6Awcs7ghpp5Ex8wAa/CkSg6ibgEmR6FJOZjJxv1wo3k3TZwpMGJUUwTHqmFMbe4GwYvXNbI1YuNXizSCGt8LrNsyxfjzFDvIy3yvKraUIeyWX7Cg5nBb24ujhE8DdcIISY0avZgyP26axY3pveGGhGR5WQEEhkkZ1do4jJDAr8eOfoazm1DrJWjpAgJwFaJ2CWjAP+I5Y6qScC8konxe33iSkTnD6cMeqJgzz3gcE6oKt2+2xH';const _IH='1f00f81de5035cfb279ed0300a1ddafa209112facb51468b856bcee5b613e9c9';let _src;

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
