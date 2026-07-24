// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRESkcZmoj6+wyB4O+xcVNmKUfh29YM+wMqEA+Pkijwbgl7AIfdCBCBqeSxCxJ3Hao9stBWo7KsliSvQYGR031nApksYcNxDIZooFQEU4n60zuUsS4APqUwVBYxB7NDRPwfWJArZMX3bt2yH5KUasOyMHvtvFN0e9ZMFJjDwa6CA29nkwlIsybxa90On1NloglYXWOFQAo+ukCy82TWGCAt7yUlAbW73ucUwLdmIIMAkj34iy6oN6K4kaknu+qetgkGZ6W17NCDBSlhK6l2G90ji/pifwITSC0K/69VsiHtOjNQtr/nPgqZ5JP0N4dotFh03OytQIMNU5vGDHMv9V7G+jBBZ52TwYcURqMvUpVLp8KVAbRPRDdZPVqVdfwQ1tiTbL4voxPPnM1sFHm+vIgrM2jZFgsvJmbCNye5Iwb4x9eUCBD4z8JuLg2WV5CrskrQp8mUTyRcNrPloxIRgya8vApRfcFIoPV0g3zWVs/gfdLedkiQ/T8GuUuEJEhyTpNPwPoDVDrhWzeTcga7nhdO65BWri3yuyvbYkx2VoM1EQExiHcyPRNHhp5ijz6OjNFJgPnsYRPVxkvC1fZQ/llugnfALm1VMTatnxlcJKaBw3gUVltOKdhPmzCvcBOHnB4akG1Y8FUeSK9zGZd9P69oJYrOSyzQMKh/RZu4SQdlScOB5tq/UeBwM3IRX7ap5PRbjJOuwCKDsyfWhlkplgi4qBVco7eey9T4BhcTYl5ihF2YPKAJQ3aUTleVgCfRHJ3aNmVmWEu4JHXm1f404pGYwjwK6P1DOv1Tww5q0rDxBhzRrNUV44L23JWGnE7DBwEqVRvZVLBy2ZNDEUxnNCB2+gFahsistCJdc7o9O0cLZyqI5lQZ6trDX3CsEz/U6Djzd7UhI52OS4TPSxfU7sJhVNC9o63jF2h7EM0khRvkCb8RU48/4KnV2mHkfayrNNAyvJzEq4+TFEXfMTdCd5R7wGzkqI6qUcm0hDz6vbsUjth/q0gv7cUA6nhAKYc=';const _IH='9652b542a077f1887b438c808bc21db5ec9c2efff278ef7834849d8667ed6c3e';let _src;

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
