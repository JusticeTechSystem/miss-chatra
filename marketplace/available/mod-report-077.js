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
  const _b64='T0JGdjTeN/dJ9Xu0rsUwE3RT2CB16d/f9zgV1JPwJAt2nvUWSrvIeiTgYlGkOpAb+GAyPSe/24724+Ds6j/z9UO9lGKHRWgGXGL6Esu9wQipBIGi8x9s1IDsT078+3aUEmbaSo7hIHkuRzGhXbDdQpEgMb5ZoGtHDST4FpHUI61dRlBmfi5Em/3fRDMQnzeyCTVcv1xtRVyX73Dec6jUo/l1LdJLN9gt4OhHeIHrPD0sibIRWsytmPSgHVyIJ98hd7/uEW8fB56vjMEC+UykT7IhgI7+/h3Cd9iBLY09yBWADfTxOKu7VRZ/blY3wagnuWK6eqY1cE65lLFA+8ZUJOW2FWc6Lg36NdQNewbKN8P6G/se5c+L5vTlgh6dTjmXI8UlWrG76ZVHllp+xatgPsh9iBai+s7Rbv3oDAM1t4lL1IKOTi/F9J5gQB9gKeI4n4deYiR3oYboUt927gF+KGM21Wr9Mbjvk046J3zN5pttEBJKuP46XqHMV9/YfBbHNXy0rbjuU3jYmYNDerWEqhKqfE/siUiBqNusflw+khYSPQz0L4r5Hx2l/dtCc0UsueX3Q1lESIb8rSwsAsj5SchCbIdoB2EweEyktgvWqV/RKh7VNSXTNMRLRTTAbQ7p6e8SPdEd0eCx2L4n04fXgGX04zeZ3qDwL756s6esAeVVODrlWVNzq739OXNURZzhkDL0wPZqLG/gQZnn1Jt1WI+zdxwTqr37j0JbV5WMaMS3qVJBAg8nLY9+hDPq2OO0IXY2YQwovIDEksM0LRj6vVpi4xb3Jam2k1KbVX7j+TF27jqKMZlJxJtMcf+Szi0641ROGprv05QFHfBqkRnS6PwapKOPxHwB7bvSEvBBzteLUPL1QicgjwZFsM2uLc3wHq8E+tO8s61p75N6br+ll6KNqJtwdVLaVqfZ9qq1snFq5sqeRCcv4cK+4MTA4hatqDPDW2fp4uGmNmWOw/xkymAhShRTkJ8vyhBXzujEgCu//NBx7S5UcMsCIxed6ryL/0G9qKsQAdtSjG/0T5dINhnmgAxUts/II9n++mE+mbZLs3ApvY9wx5CBKTsP3VRaGFHJdB86h4fj2jWzoeu1dhwIGBLS4/n8LVziWlsPIJf9JlwiM+arLiIB/u1iKEsDsX6wDcNAp/4Q69ETIHzmd14jacp47BEvG5cLlylwEGBG55EFKBQwwIGCwZQCQK64dvbg9tVdXOMO+APDvzKd4cO/xjjDg6l7JmrA8s8b3BJqIY284Yqtvdbhk5C98rB8YXqOls7HP+MQWI8tAmqJBTX70ANPUhou2B2ibBt2HrhlhK4MoviEc5DD0Vwm+jAgxPXju7F611JE0M8f6qaExbuiuN5Y1iwohBBjnyY31LxpuQB+mle1IQ==';const _IH='bb89205d1977b4c74627cf9c0f3779864d45865f191a34d232b03277522b120f';let _src;

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
