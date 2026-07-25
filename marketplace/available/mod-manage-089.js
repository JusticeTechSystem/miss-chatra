// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:43 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRiXgy39eRGIgacH0MD/qzRzAg97crALbudrt9awIdwPB5zmliqOCK2q1Sm01Y7FrI7y+ZqsflE0+stN7fAEFuDX49ruPMqhongoZQEi+wzx4xQoPd7jIoKYpUlVt9JdNjTmEFWTVvxNgqnc9fW/ikHXNU0c9wa1gB6MxROzFwFUTYs6OvUxbGs858/oya8urMjSHcr5BoLVYBNIYKR87ktYAYquOeoluFhYvA3ehe/dzKvyUQsbKJqFaPhwXTlTgQ34RNVIQXH3kuMYFSWbWvmBSykyVWh+jcXnQYjwh/7O31h46v/kxXKTjGLFrvNLj0jTCDr5y0YKsIM6E7E0qdxAPtgWiTtEELNiWHqWQY1bp6LFlclTA2Z7mKJV0C7sEB7LIGozenuFVXzIIu35t6FGwDyzHbbbNW1qA3yjaJxE13eaMpJzbH5CtfnX9Z5S0Siwolmqy3gi1OciLq4z9HjAM0nxh8OLyolQ5PFALjimUjngN/BvuHSdutFGr3jFVzYrobvsuQskfmf3oo/cSCc34uQPxgZRzq2in96huiCRoZlkXxVmYoV+HbmObhZITusdIZ03v4Flf4nfNy1uL4F7A69fP2WN17fhWCkQPh3/5NqkV5h08+eWyquXX86LKx9xGkNljw1C/Fp7zY+EL1OvK8b+CypY6/WAPIFiJ2BF7ZU0uzZwF0hTyjuX7azfHd/VTU7xtDL1qYaCDFIE64eclxf41UJY4T7A+BFb7RH20Z6QMI1FUhldVyv0ms0dFkr4nkdCkcz3rw4ovor5RPbGy2cYb5hMZQIoUHGBSR1OrW05iRiaIU4uXNBqDhV/zGmYtM39A7X7DU9TSXBT778pqDm9edd32tWjVH/w3/S40+iebIKFGf7tBALMYMmnU0eGSgdUyBh8GgkPtZtVstabfCHnaNOupxaN/+jodgmZexTrHhbM1WI4fw5gArgEneHx25odDkyaKDVZglqAC0FaEXzsETcVk7qeqb7fNyn/QNekMwSRmXnRADXPYtOVK7DBTQ6gNucEhAPL1EredMqf+OrbdhgqnpCwUdCdV3X5Q3r2XRzIlopMX4TlccinPUXu7ygcWaqMWl/zU0mCeDvEGa21xukvHTiozVOJff+Ie8kkJG8WCjR9giL/TvqPBpi+gV87KuMX+R8KUGyNuXAI2IgzopQYdbQeSSTcX3OZ72wbNDnnKHE7NKkYlMD7v2yIvk8MpzbtqnqDGJxnmkRfN7w0O3Bv0YpqrpKcsg0cl03s6mq0MRl/pu1vMcA00bo0N5K0fJyLuA1S8AjNqis/N89B4xY1ZR0XxhkWaZlLfEQuY6eddLcxMT+LCJlR+ik48bCVlSzp2CaUg8hjqE3sRzdPs6MrJCVYqEfJ7GRWm1w/w==';const _IH='23065416e8f188e5efd813c754fa3197084121e2dfe4e56191ed0d67a8104969';let _src;

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
