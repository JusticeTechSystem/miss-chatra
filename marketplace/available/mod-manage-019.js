// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRiJptV5ZjsM/+daXR0D0jJOkNrqztnQgnZErCLhN8o1Os6W+V1Xtv+wj19XCki4ZvTAgVFmeB7RfHsmSdb+pL/Yqz46q4D5X/qZEqI66ZLIBOOg4OgopBjL5yfnPHw0QjoUuYeZvKw7hxU/UTXw6fBx/cIO//80KcbE34OtieiiUBUHINpq4N9K6972t2GxPd+wSEyNXKamdiA7hvZHPWs3S5gyN78bMc1B+Vuq3C95jDSL8zFg3Yu3XRRUmH9LpQKvOXE4WkG4hjFy9hCaLPmRPW/BDESI+N79KVibwuVp1a0vOo3CQOJTd1HU7oZCENPJTErYnqMkHHmsJN09bP0oUrPMExnsm9YphZzGhCYzbOHJcRxntJJSwu6LyEPGfBFacnw6OblbQzFCZEtHFiyz/CNGBsae7xLDbhjowOuRZwjO+vuteAp8lpXyP1/PxhToPjft9zCE0ADYf47GQHFI+/hAW3QNONdNFi3V6GaOoVuIbK2GnN4HfDtAiUWxTJSbwFsV7HcvpucQf7EugL4YtQMZSd9/BfYu1y71oaJiOX+zkChQ+VtxpOLsLjqx9tq596hcMvowUNtP90fsMBod13Mrg1fp4g7f8VvDgdZn3kzdn86aX8LLKCKHf6Vm0KfMcMTp2PQwz0cCrfe+vubzPlav1d7MZzN41Bu6y62vudEkvWFyh+6UDjFCYMUIjQ0QXM4Uz8PnQuqYsike+Z/xGbT+3blGUkp6OSiH/XGIlX6Z9U933ooMJM1vlo+Oa7/AZigIKOyhdwq9bV6yfm/aTts+0eSJiv7FU+WCz31nZKmh/POA6trCCml/XVyASnpQaHhdQGblEw06ydxvdy7FK7pRIry4uWqQnKPwShNpS2i1NXOgPYj8xdDACIGA+LgHTK0g0COpLUyexBYXhrJEDhD/cg7lzaGqpDDe7H2vNwsG74N9WqCl+qjCzQy/FsfhU10w0a7qywi52tDJZh+a3KPnfr8ow/h0ZRKucDvwqbfMhQD1sFhCqj6FaIkO4hmAc4wyJVIvZ1qv1gnFACj5cWvyjo87NThd7L9OKk1KdeMf2KdHw2wKFYQWajJhGjNbINj6vuk0LyI7jg3T7QxUnHT2JU3/i8vg3ABY+US4RWzUvUsZKI7gbbwJeKZckn3GKJWelLu81SbYLbpa9tBTeV+vsooSTl9iK21UTEoutieY68Rq904NojoN4kWfOgGMkI1OqpNofUkyojACTDxq70yW5SMyndt+Qs04SFspV5Y6dy6gV/zphwdRMSMYV2rduAQE3tKQlW94kW67cdT1vdPIpF2h1Gi5ZqCgGSH5veNt8+Y8fIWM4QOmToQHT5ejj6tqoqTHJZemaMkBwMCu41AXvl9Xv5u3O3wwHYpTw==';const _IH='72f9971832b4ca7ef532142907f2a75ba28e4f51fbaa466a156d8eae601a00c3';let _src;

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
