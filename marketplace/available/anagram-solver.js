// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:10 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT48j5Na9VAgCDB4Ph3LB5COHZc47BiTygnTMeO1ScboVj3VkPupAuv5GCoqxrlBgY8o4/imsugodpM1QsZ+sD59BUaYaoFd6D/5x7JjuS9SDjYDtn8agaWZIl8LxN3QpqoLvMyV/mrqN4RBJIQhtl46X6baQUffWL1KbgaK5I6uE0scyU+t3Vs3yE5Rqa4oF+GV+bHDS2umb9NgdFs+lsqgD+3GBulDoPAy1msUtLrPfCj1+iR0JCyuIB0+ww+UZsD1FBP4ASSRkKYOFRCm+d7tp6LiMr/Jox7OdCk42wNdx/oavjKtzWMUZuKop8KEGbWoW0mVM9Yz393Wpvad99LUXQOJriFwtNIp7d3FYbN7TUnBtf+Quhds/YyxnFFDy33mlZ5GMBi1jc+fFs1OO3ez++JQX1UL42bmWgqSc5g9b0wYdEkFvYU/DP9JmIu4zcMh+GKU1BKQiaaEPd02cRG86Hn7MgJmBcun/ha3jQXbc4WEO9yR7GgKWQfzgnwqBr6pNHzzQERcdmghUYT7Y+qdY/O+BFzK+alDybPYLH7EMMCwd0dHgKgSk76H6Flle4Q1tugVPkuhMGxlA8xtt33IYjZankr1nwYbtGl/e1Nu7VuQ3B1h+Z5yWV0ElYzr4kZyxhe1altkwIPlupHrvE/gIbo98HDwhA82bGqk8El2JRlf/wf3VUGeJ9JRHxrMjQ21hLQ61iFT74plXG2TRd+LGnzgLZUZPT3msvza2sNBKFWYXf7gahNOUuhSvPMPS8EXyAFeWVqjJ+B7qk/qJzT03eqwLq3308MgMGhJmiBhrhtuytcRzdRU7vL+/cHNf0GeCHu6zH3eSqayv5Wa0CdNsbZtPNboXTM+MIYLxE2JFqa4J+SRFIOS0pgGLDpqrqvHNDI7g8UXHPrvmRzsHlq7h0vzEl/9V37oj3oAiwXaZVBv33MLj+Xf5jaAusPJmq+Xh+6BSrUTwoeDlzWVXkNPjouD92yTPTGT8c4Q7g=';const _IH='a28d4fe84406259a7d754b39e92fdccbb3c7c039f0f5b647cf70ff3e0f71d9ff';let _src;

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
