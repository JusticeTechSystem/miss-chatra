// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='IitCj5F630rLM1/Hm4gQxsANVnK/NPGkuMvjpAQ/sV/xxFQZv/mZ28wA6e6/eV9kA+rArY16kzgMKcEpogv4AM2MarZ/avfBVZqfuSwU/Kv+a0do1DubI/Y3pb6DdMpfGYg8d1tg2Mre0u6iQSw9OKA15kTTCDfcf8Mm7D1HmJHtjFgomaphB78H8g6tfUaEuEnVp/Q2bvn6zZYPmuwux9xFYrgdhsQ2dXiJXDa/7WKYuYLwVBeOO3yEZ3T7jOcOCKrZuQxA1VACFKikK7M/lu3M2jJ9xHWZpOk5QNcPCzM0d6nYhF6WKIwKgbrwyKHWmPlhAzIlELU7Pi5bw5Hn97I2j7u2Sdq/URtFRjI6sHKtfIuPkHDd8Y/OasmJJ1kEXB27z2zgkf6zLIuNx0JEmeU3lob9/YPfTKeHm0bMNZ/rh7+Pm8ifrZ1ciIAMe0Eiv7w7oivwwvhblIf0tTUXn6AhFyu+b869TWdINYyY0JWTedBLfkCeWQwyqDyDYd3CSxVKuR+I5JbyAdrKZPymaDWQKRTSqWX5SstfJn2J7M8Ru1rGJO2m/OpJN3srd9tZy+evdCBAKOLd4I6eB0lgqywII2OhdmwOXEnB3qvhbXNJVgl/KyBH4QGsdLV9h3IiUs5EvkHswR4qBh+bineup8LKLGu/RA74V+6Gjp481BlzGMOBuZCyeT0qK/9jUKHu0hY9t1ft1n45vEgKnPVfMtk5y+kFEZtTfFzotLwwnHsuJT9Id38+BUUJcFrIFvH++T/A6SKsIwc8nYuNsX4UFXfgS5BcMIihF1/Cw/f51G3USgbxM1XzJ/N7pNlJ5WjdTnwzmwJXK9KZgMQCbWn8Rq76WQogYpPPALuq5Oxsu7R+XjET7y5Z0y64NVNNKGQLj3qrY38th39yhbbW8YRX/9UFmViy19bSDh4sQQbpf0JZsJ6AEjFcue9xFt9MdtG3kqXvI++BMCOrYSvBS286M5oL0eYD60kDwXm0vKUrfyllU2UeNt7433SuKmFcYB/acGF93AqqgGk=';const _IH='b7bf587890b3edd185dbb79c71ecea4151eba201c2a3230fb338da68c2842566';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
