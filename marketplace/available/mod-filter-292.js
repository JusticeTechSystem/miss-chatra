// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:50 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSkDFrffQrqRKZ1Hw4ZFkhtYGCVkXo2iKQuncZkyePiqCKH0AZtR21KdXpomDcx9GEZOzMehffiFNYtQ5KSrgTP4y+Yo2G+W3J+LvU29qGF81GudO044hxQwN6Hy45rv9g9TvU2WG4Tku6pa0M1U9gBCzlwY0hSDvP0jsxx+/o27DDpFzCcfD82o9rBsJ2WjaSCGdOh/PGDYnno0JdvJVRFliepoMfigAtJEljoVJNKVhSRZ10O2YEa0ofoWHtZ0O+W2Tk9s+KyzcLPpLXlXmCkqaM6OE5jwWEsNf65bTFd7Oy/s8fXbJFie3WY/AqnBeBp/WykUywjyxBNBOF7YpdR4/Oc/Ue4ngzjvNMd38HOQlwrKNhzhhUzUaZtaqwK7a8fXzy542707K2zBG32NFpT3lq7iR+qYcWxkRk4I1k4LcwlHKMeHq34pWXsVPscf2BxQg46+8yORqjLuYa/dpzfB/DDYhYHkfNwjS9gnbimy1fLffG2FSQoHP0gysKN+eyP8GyZY4AZx0XNSDwfWbRJFwkRUfqKdeFG6AxHBpavp/SxpJ6wio6tLwJjdXXrVtx1WWR6rvGMthyzlVarG5t5+px6KMyOf4jMtDUuJUVQsB+kKrov44Pr+N2RyBQFMYajS+QzLn3WLPmCDM1vA1vCRYVZ0lelOIcNEVRCLQ/EfRwuhLOCHLDc/scivOztAJIpFprYN0qEeZKnfTzJz+BC0vm9cnbBwTUCq6EmugqK6MKrpKP0RXe8VbwkDQOftqKgTXI9TReATh51jehV39W+MJX04Fh/1MPOvOkz+ratbOA7/mvbQ9yHXZh/w35rslCjYBL7Q2AV6svWUBL8yPEi8CutfTWCD5WfuJPN/8wpq5la8g2QtmtofveLr4z2xWUTXrScS8EoJD5TFSI5hd97i+VUSZGcXiA7OWnQOBifYOyCe3jb02q5wqNyPyUqdoCZnZLiQjPZ3Hu2pd8OYNsbkR4mfLoQ4hsVBipayrjZMPRqejqXu8coVkXYeW2Th8xukbNZMr592FyjPptT1L+GRSEFko6S4fDj0bv/AUXuNVJ0/Q7gqGGoGKRiLfydPQ7je8WWLM9PQ9QG5tavxMApwh+0zlxXELRs/2e2rOsGCsMyTeFZLkiSkmWlFK6Vh6YbLEq/PjFmFw4U1+O30GBfHxDRo64XBGE3aIeTR90o7GGalaJxCObrTlQhZGTjFt0N9oH2fjMcXkQDvO1p3mju2rhguOdg77pIeYnXMPGiodd2YbRjUB24DwnmXY4C2ND/N1hc0o0yeqfiSoalmVnXyYlYNGb/fGKomGM51VxtAelS6N2pf3yElZunzzfcuPlYpPfVzZ8DsQzomk3c9JG1CT3mUK5VdxzS9PgYhXWJCM58NyCo';const _IH='5dacd9fc00f7bdcd60cc3fc02d4b788a9f92a4e2a3a7e2b70feee85106e735fe';let _src;

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
