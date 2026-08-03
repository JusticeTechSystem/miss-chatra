// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:46 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRro7uZbmFweX25DpSur6M5n9VOKiRxstTC2j3zKFp6fpHEQ/La0/5QkV1C3CQwFoav5zNoSPedQfU3FCkN5qSf2DdW0s43yk6ry7fnrTtDzxjzSOki4W6cMvDtkDWrZCnqmz7PkzmK/o5F8YgRcwT6sgSZolfO3xA9rpeuQd9ECWY5b22Ats7KZyaegp5gYRHU2HZe18WSdudNqsRohYT9EAqO7V7NLDgn5An9Sl4v8D6m+Qig9LOCSzU5cN29M+GaPpqIRRNbty4AjdjhC/5t5CUEHXI2vnp44bkttV3e4/SHfoJfR8ykHy+P8eByMCiCBjA7xnPymDicJY3sUpJAA7EV4Myy8BYPThvcITe3lBalByPSomPnd7XdV+cGj/EY7uyx9oWRg8tkHncd1yV6EdNFaHlarjnpQtVVEGkCX3Dm9Cu49czYHK4wTMhu04tGbcStaov3QfXIVVRSVHr2SoF7dR+LnaLEcXQ0JfAravDqhJjZdK0Hg6Rp33qwgYzMS2iW8q7Iurpq+BFiCepqAQRtNV/T+fOvlrJmIWvO8zich9EVmfSxkqvrh/lI1VJXRfdkIGn/u9f9Q2WY4BySi57FxAuJ4HyqsjSXoxVfxFCAGKku4Wc5jyaMu2RxWbVoJBRHsUW2uyALR+Nz81jTNuHY7LUQvMQBU2YQ7G3/rod+W69dnEEzHwTZHGBRqA2yRl18ocp7pvh0Vu2JdbbexiMAgF40QfLiAcBmqfFcl0lIsv1mnr2BIZoHI4v2/EX+5Pg5pAf1GjvlgAuIBxnzeYUoIaIOejllz8Ez5sgZ0CLvXSTKK0A/bNF2XgxALJAsB3g0KBseUIcRKmIPIWx5cvoJNcPQI3cmaXuM5kA253vSZ6gWjcm873GTk7m7WhjP2CA9dFpH3mQ5ErDZUtI2JgiEEM7T5jItPvd01OeODFCwbdbPMjaSRV5KqQs5jh77P9vYcNmtCdNAsDND64dKfeM4BaKTyD65+RIOMj5Kx6tI9j6IFDdM88KBLPaspu4uRekTFCX94uxPLyXFuMKsO7SsuZENtTBihtGGEVq0uimhlcInUhaVUdSI/jW83GSgPF6GWSz7VDaZ72Bodsx6o3beDbogPC+RVzzrNsXaBQOE+j/F6kQEijnneyZ4i0hot0AvDAIvUO6OWoltWEUixm6+1G+Zug5G7dXe//jmJgCqGg==';const _IH='467e964820afeaa5484815551d882a82142466ebcec5cf61a06f875e46debc6b';let _src;

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
