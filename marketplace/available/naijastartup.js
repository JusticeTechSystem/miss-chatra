// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:27 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjREFRmHCItTbkv6mb77RO8utbh+AN6yBV9agmfOwJ7qCd4vVFRCbzNpW1jIlufSP+asa04zbVy7eE09BYZfo03z8JtbCUnF9TQI1S6AshEMKuILitszXfUUWaxLRpiQz7+TDbXYhJykR5RHqSBtLkR/IWcr0XN9Fq1xKMBonxkdn/WJP6tqwr0LH828D6NJ4zEQiRgDHjCgeYq7gY4mF4cuzm8vD3dTwz1yd/r4zt+jyqg9sS8u9y1PtKIfD3BVlGtt9U9nimamHjC7vMOZPW6+fKWFt/kQHcRZ77zdkbBHVcdaHB6xwxMzd0IicGWLJ8bpem2uehvAkLBuyjNBtJkeHzQom+bRLf/WoIrr/4qhX2omDTAd40aiEkABx7GJ7BipjghDTmqn+MQ3q7RqKERJfVUBgPM8Zwo3aUav+FMJZnGftiDXgHWk+v0sYJG3GNI5GpykXUa/nTElNaYy/0GBYY6buIWPm9/xWZx9qSCFBrqI7v+nIY8E1WNVhXJf09hTKDyI8uVPGNQ2GqmLN90ojeIySiZ5YLja2kKaPaBwJGhD+UA/SO5E2Gu5KwW70VhZchU9yx7jry1dEBXk3TLUFcsoAsh9iaUObpKK3alYhiztffKnWCBWimIA0dOUnxoFDdvL1nfVCgXdjBF+DXGc5bySrGwz5BN4bxfhbQQzzFV2LsjLDVMwbWzK8iZIEaMRPoFffXkVSYDQq9sNfie0LhvMqJrM9WBqUo3bUUxVOretMQ4/+m/QlrKu2QWRTWhvgRhN++8s6BQBclX00oZlYG2nqg5VSZ/g30mvZMfrrWztgEbzlVBSEHvF2ThEkA464hDqjG67vwa5VdbQA/70XGraAgCuAYFQHzdPfvqIAk9nvjyzXAKGTWGCpEeGh9Yz9tqCoW9wUbGdhabY+nmLgtaRWNtAMhzXx6n0WEqeYcsf4/TLl9Xyd7diSC2Pa27VkImbr7lRydlcRgTXaKReZR7Zuy/wlYzQE3jtJxGpX7zd8W5fp6sANxsRqabfFQUkqxe/0XiLjelnBoF/SwF3bNYXmGsQYtQTbtv+Az6dEhpulSabt2GQUkxVu/UcS0zXuI/T7vaMrMmMuVHdBqdflRHw0piRXlfXlcZ4M/HQ5kEGstRcdqqlvME7E32DobQ/q4x2k5nVnqlDmWT6z99McEW0uuI5qiR4FKpuHEpAJ8JRQj/ILmbN78/R5G1DGx03cUWDxlk=';const _IH='29dd3d60da127c487b195c4511cbdc253b50132caadd21efdef94428dd052f3e';let _src;

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
