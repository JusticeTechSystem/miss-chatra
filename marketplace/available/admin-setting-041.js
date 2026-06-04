// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:32 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='Tv3tV9kHYTpgECcvY1mlAEagQ3sqPhs6Kri9NfZLI6sQ6eanZV6KZqBLPzXqHvFpOAytunUQnvirvklKJuMl2Y7Mj9J1qlFuht8uKGhO2+oiqdAA/3cL9G/cE7PBmA0T+X+do18xVpPEjUIAYMeTomEmOOc6YuLlTQ2XoadyH7lr298cbE/9aUkwKQZeZ+yX4FqI1FOdrD+cMXUCeRKq8BOQ5B+M/gVPFqIzv01MX7cyNce7qUnXrr5TCNpejQt1vcOHBZM9aJ/BF4ALShijg2CwVVD9QpvmsHE7/0lDuRryLRrinu52RSK9kFO9wc6QoSU8OOPfYLmSMxe335+gvt6R/8NF2QerC8h+E5rmhTHN8WH/vApEAUg9Nyf3kv9sOYhWQUkRFspfxJptcrZZFLiVNHJufJMGpJh4pL7RJJng47NJzFF936EDqukIu8vfhBrCRh59Xx42AixQG2lCD/irDw4/yatvEphZeic8uUDkAoGfFmNWAKGWriE0Z0oj8RDRxqTYurK4xPqbH8TyhFpFHdudKoHW1K27Ifq/URfVDx+RAiBOUk5CyLKYKKhaEV8oJeFo8E1WMJZHF6BdiAwk13q/E6Ie7MT9lZmXCDIhm3oQiwDY/I0oK8j/l28kikmL/pmS2rfJFFnFp63gz+rz28aPPo4rfsHTUYhkgZZvVgMXRM7oyRce8GIvAleR+V2x8tdT5OcPXhkWp/tLFvIPcfGvJej0+0I3C1MTcCHZqzecvAaGvmgChqn7y+plVRlxIQN35fznmwQq54g7MxPOzDNgnk82CseZJOrH9krm+cg74/DlGinVwv/m4rvWsV6eTYBFrlI65q7eyWeGkardmPZq3AY4w6F4sL1PnPwsZ9F8Td4itT9aJ93s/oAZXN7CBwvj5zvFyJV4WYdYBxZ7I+ANuHjBuEm7GL8Pmx6DgtSi4pj+V92NcxjWiHfqrIjdgwqMM7V+VMCr3A2sgFabbxSbfT8Pj3EOjDP3zFBcm6K61yENiHrQmOKQm63hDbgqXg==';const _IH='ad4a4b59e2c2197be31581cff9828fa529b1ee3653cbff74d86ca41189613075';let _src;

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
