// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRG9IYOLB6STo3CT6sPSuw+9v+a2J4glaaa79uGsmV5HqnXFhBml6L+RHKcA7OctRp5JtspVBszN+QA2zkSiQS+1uyiyKWe1f4xi7mxfHYA9+iGyGZH4RrxFpsIQXQtjK3ajkM3wiUXIIDhlNJ2CqKF+EKC2qFENba4/9q6Ppcmoxs4zLwVA/XNFxEKmABOG4O0Vl5VmZ2+7X5IDcZP2cf6qmKLDdfNN6vUewjaSpmIYbcVJFiy1wmK5FS+BGKubHkZOEec8ovhFcTYI4sG/nDjn6kypip0GYJpYt3lOwV05yAsPvcJxJ1y/bTTmw+JgbyLfTPhCZruXzm2wGtWTuuPGkcPURSFJNtSf2NnFs5qo3BBZILjYmzQvC/xV9IPBIp15Rbm7KoYmXB5iJkfueSyldjia5va5x6LySS24Beto7P5xQqSXywnDaeTM52/MdbkumBu81au7XhAWPjp4ZyArgi6p+hJQqpSn8Fex5tdyx/Y7rlVlt0+IJ4Pgltlde/i/MboqKuS+pMIj9d+TKq/2HUB8zjrbo67j1XccoA6Ha/0GH74xEATiZl76vHlAU50nvYVuj/rhplP9FuePdhScuzxJAmxYClRlk8xSuTNDrIk5e2tFRiL+4vIssSLO8Plsfov2ftgpYUvlB4cKzDzT6EDyk5lpN1jx112DdcJnXbm4kJBZ7MsplTRUo/zH6zzVWA3/C/42+cJBhxsCDJan9Pm1sQaaTAZPw/Q/4yZodfCFQK1wDN9kWzJM+rsA8GAIScD/A0ovL9L8MdhmjV/9g04jjf0kqn7dkYHSQSTzCxEUn+7/YPSi7Xx8lrJr9EtqVQG6JjqrApYTeODue0cIW0sqjVjEoW7/NwDe9wE0p6pI5Tf+mie6dWWb4IA9GnEdGwlUx2t1skMfU1bWDl/NeESsgObMOOhiiF6xWKdGyA9IPzJEkJFBo2kJho8D9Z2TIGmw0STctcFbgN3qz97b4EFPWW+eUXHZhXQZP8gMchJmtAOaCBYvbGv';const _IH='f7334dbc679402c30be36fee49d64c756972bdf76797dcdb6fd0c37c825f431e';let _src;

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
