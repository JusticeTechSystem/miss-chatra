// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSktsKekMgBXf5m8rCQix+8z+kqVHepPlz0ZgHAtn39NCRDKYzRUVjTZx4SIpxTTHXs0CoEtu3CaIUFtR/NIdyyoRYMNzWNlPddgQuIn0lq+Q5kFty2FWalwc2awwGq4zjD5rqg2zO44y/X2HmOlL94wAWALcNpegEexZMiqRdangO0tR+UUtnDA3NREjZPPpCPgdvuZ2IoTawIBXVXdiQUNC94Ikn84xZMUFTgFfkEqAdJfkdIMvt9E219Ty+ybKHCHmmNnGK9aTifbE1IPJNKjH6v86G6eYwDqsIMhKqIHu/qAmkrE7cCXPt89O8reLsDUHp71DFTJ3NU5mQd7fC/uqrWbAxj2ij6RGKn7gBdDOEG5RLdfHGM2+XHOwlTVD7ZUzNpttFyLpGIuhmmxxp8C1divSbe4A6twN5I5mvw8J/BHfDA8zhCuTgxk/0QW+TKYKx3IFNiRRSCHMHNspdXdbl5YPt7YJE1TlL9oenx0HGqNMHYkaIKGArVWyz9Tt/LfawRoX23ac/NCsIRo0f74cnHAu7epd9JB+Pw5WVCEXRb6xq+uDAyS4ogwXD5W85rgqLWaBFjIJDErYhKV5y+HuoXZ+Oxouw1F3PddlpUhGlcd7JPJWLc25WqR1vfPJn8Sb89sAZ+a9rgCOvUygLIAHObqwwp9Uip+NqHymEpEf5vnMcpB+RX9GJjAUoKSvCVM/xRU070IDbbOynO8F8EjffCewLHxWdhxggQGV+uuvwQaLcGSlLHA8Dn3bRc5Fh9clUXppEVEnbQ5nPBHtMDw04rxigaGPRz9HToV/xq+8SJe+6Kzmgib4ZKYs43X2VMzXRi9Bn83/4dMr6Zdlp5L7AagqgX5BsAbBvBViu2sc/VBMgs9cGmBkcnu7TAY6VgEQlNASgEA2vG3XIjam/kPvioU7Q6tei2H21X8Xs35xVOMp6QheixgvV1yE37eg/Dy5H5bp6goyojKpoyVydbpJUsz1U025FiqTMnY5iH0SKzti4/A3qixc1goZ3x/sJz';const _IH='de9c5c73e9e75b25bce5e9644090e0568f2e106829a0763b4da23c131defe2e6';let _src;

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
