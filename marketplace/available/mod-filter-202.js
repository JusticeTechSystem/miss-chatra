// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='X4JJCrxuljsV0am94T2MkjupMD40lYTgYQj7t6tW9S2vkkqOKBCT6P2gtwPRkph+CGaC8r3cYjYd8pdMC9rXF3QT2P0nAq4j3WB0AqnhqkXpq6J/eEhgSopzAde5NWWh18yNTUn8jKoDI/vy2V4kILEagwyEmHdU+6Vm8TftdzTHhDefeePBJMy+jCSQosnM7VQFkyY35je3YbCSJGhoSofJCl+LI3V2ZOuaFZ6zAaf2h5wh51frJ2JG8pKUZSj74M9t1UUkYIDX0RfKNpZeufeyOQjK4cj9Ha36RD4vnEbuAdSsTDpvx5EPs3wrJW6tdQryovLg2iOcy/R2IZNaOtZ4quWiaY73sCUqd0MQIRSxvIIjQwokgmrnr4RRaOxgO21tZFJLZsOx8W5UmvqSf6hZrx3qUV6s0QFy+VJQNgV8kWwhZRL4EnB0xLpaiwjmORTUHYE/rI2gx+1x5skfzHy7kg+cc3e7u7DFuJhhT+E7mU+7DtiHh//WPYB/Wc6kfqCUQcUMAViqcmXun2kuQFN6XI1FWrBVn4qeKfK40/Vp0YiQa645apKc8MNDHXBmzgaiAY0jyWeDBH/H4e6AJ9PSPUQer8pjRqMN1iKDBfkfzDroUMxqNHpBWhcmH3km+T3gfECkDQEg4g0H2e5iA6PCQiz4nB2352wXUS3n2tx2YU3oqWNkBeVa3tHqx8rMBn8MgA2xCa9V2mYUpQGtIUYK8HJu9Tapd8d0ItXYG0PETC2/h3GnVjBsWotoJSgyxOp9foORcdEWaq7D7/t3X59A1StG5zGYXlUmOKPe0XShO2dLrWhZxvUMcd1Cii1a9Smz2+i5ZHSzlEyhjiXDPV3gd/lViY8YBh0Liet8mMwztUh2hSQjIZNitkP74ehXdE8YxVRTz4FO8O6Um1KsNL4rzcw7EHpj6V7B6iqr5x4Lre8/pa3fdOWMq0musMul6Pu8YZxj6C+xmWp0lIo9tBRBUFFM25tC75PhNgWttmmDDdSWMYECkx8/IlkXW1m1dyLtQRkfSaJ7fPkpvxFCYEiV5DXiIUggPQhLuZ50B1SYBoc/afc9zHArwSIUBUHZXiJ7B9kJrhjWtxKolUkZLgxBMUOkurq5H/CQaNuvvtw5JQSdTDtVCu0IQ+tIlYno+Mus7XWSTISxIgVtOpOfFP5P4j5Zr7mYSlDAE5JSkl/krekCBRmgUYQmuDqRMNAAgylCTS9NlIF2oxsCfhSCKgY+IQ/hayDyUra238tFiQmizV09dagra0Jogcbh1DwwnGCnrtt0Qu4gRThTn/qVKmJIlVJwitfC9sHVjn5ZrhFft5h6x4lYkYXWHOR1o02Ash3RpQ8rxdQUNKjWrWFqZYsa+lrYZajYrJzJHB+gFDExICBGeeLR7g==';const _IH='00a68392c46a1c03d27d9ce89995b67e5974db7cfda012c78243a24a19d8a59a';let _src;

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
