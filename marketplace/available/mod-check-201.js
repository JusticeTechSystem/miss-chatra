// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Ekfstyn8ObfqtinB1F8S7bdzHw5og058vbIu1ywsDf/VZTMRxFnGrWOz/N5L+GVYitXHnkY5ENDpc6fvJa7cu56R6dS15HBfQpObdyZo/VFPhn4OrSv6K2EhLGnI869OdmfP/shOkwSHZ3IgwhPTLJb7D23xjwNRedXrVv5aJK/2DiY6MhZI6Y97RF46OjCG5oK1GQHWZBYOMT7YzKE9fqyXRFyLLY1pNp5/w7wtPORb9KHPbaJ3iLEbJc0clpRV1WPCieb+IOGtF8+zIMtZgWviwYMXiaDQ/EdhJGTR+MyzmDYr0hr41W+P2pN1RAMUzbTdye8teMzGKBqHSCBIbrn+VLH1JFlybI2MnlphNiS0umoI5lwXothqOO+BQBM9T8N3CW9c1jTXSgw1mSGIDfXF14yZq2OATbH9JEBAY+7AnDrTiIK4x1uZrBcZ9BtwxoSlNtfTrpqDZ7SvpLJ9noyrPmbESAujWcJ8cwVSn1RVV2lUTmJkAn9gYsZCUFwz1paL1lg5RPER3iCWfT7KNlKEeCbBpTZgRpzSY7UElAOKQofRgi/oa/Cih4pB+yXlzhWzej2keWCDYnWn1Gd1ngTlWvw8tZodYz8BLD+fjn4PKtHJWJ9Pi0p//vBDXeC8wsg9nb5Yjcqay1x255MqfHdxy27RERNw9PoKcXdgcFoXqAmD5IwnwZhYtYhGrJu6AJ5KVS3a9GKrbwQZzrgd7w9AmYRK3DalEoKzndrN//fg12+Y14AI6czNtc+yKsfgcHmrncLvSx+J8FK/QVkn6o7/mYBNW6snGvokR+W6rHn/8bwPOlzOvzz83zoRs5p01yBbhey/T9a0vz3e6mOBgtAYO477K+kHLKA6qxy0bT4BRBk9733fzg2dTOw95Aaae+e4VG7rIaJIzdCu5VvgmY4W7jw1ok1oxvKQNUouCGL+rUtgrsez505+S+wtP5DMcsKx5keGJ98+y8kxZK68PC8Hrx91sgKQ1GDj66CqEFB82zeCws/+UK+fTB8BPGrZJVWoss8nI3gRWmJDeBk5V7E+v48s/KiCoYFJlfAcyfguYb6UfoKc2YNYjDdlBMTNlqz2ODGDZkGOcThfdf2NblAPnYyZf7U3wD2MfIyFB8LT0YUNdpwqRmEXX0AIBCnnisW7r98O3h8wbECAEAft0G0iD/z2hDwU5pqObsu+QM2pXTvNQ/ISfbsGdJ/Ub8wlGfO0s5StGjqqYUfbqqUAYN1/W44FWuqDIqwrravtZerysfmRbbvP8K1ANvQkML506T5QMC1nmuQs6LRlnxrBF50QvEsc2LlMfLFgYZu7ptFJFvX+oLkkiDzp+J5OapJLLCA1PTU5BYZ2wtztuJdjNJd4jUskovvTvXrpFDIo';const _IH='bec88011e17a879bd2bf97f1b5cf4fec9951eba56fb3abac707574af8f9093ec';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i],sl=_d.slice(0,16),iv=_d.slice(16,28),ct=_d.slice(28);
    const tg=ct.slice(ct.length-16),cd=ct.slice(0,ct.length-16);
    const kk=_c2.pbkdf2Sync(pw,sl,_ITS,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);dc.setAuthTag(tg);
    _d=Buffer.concat([dc.update(cd),dc.final()]);
  }
  _src=_d.toString('utf8');

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
