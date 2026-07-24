// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSiT+RbkFG5QaqOjWAeWYZaEHXSfDs0Xpryrvd/cGeyS3LOI6iWf7dUeBW9H+qbKzi/bfHb9rTYF8T0R50VAFzFhIc2diFU5Dld+UDZfl75WKsv0gtDpMDAN2n4CFt1EbbT7fZA3Vz2QKKZyv1hdx3uzTnRHHaBwb2unIbYVNwEk47FZq9RMKAk0vCDrgr0CqYaqg8DdOdHnnB8kqWWBqDy6149Hjo15Xb84zSV6of0lMf5x2hE160vlANnTMJGxhJdCSJ1c7qR4BqA2U32h8MzvYZ+S2sd5P8rh/JXQrtiqoEJ7FbNa57Fyk/eUMeq66GOWTA9h0RqUVASN6Ul0l654pl8mh5doxsl+pClBrQgMGGlKxwiKGFSb48GiJrcZaqGKJ4sevsPj6sg5SxtF+e++yLZXJC1B+/CBAf0d/llD/V0AvBdeT1uJ2wG7TdOkNSpLKVJoy2XpWoMmNm0q1efk/ZOOs1XjSKRtxSlf1s1x1QrjeUBuzKtzRWmNEPulkYgPAidhNTc0JKFLI6NMaCHpe8urXrFOmbSgnQqxUkuhKEABaqThmCSkH8wps94OnhNXxG4mbwShnGqo0TOE91XHSwJD0/glxH5PgSxA4hK4adBmUx+DXjifNOvgBCJ2wGlrjx8uz3X72gu9H07x4t229A5hcUpo691fR5SJvnZhY1czO9o/S5vR2h/etfyLDaXBqNaIhkVIOqjFZdyzZ522Mxph6QgEG6d36ysm/KUo81prlABwW0QxKQSv/M6y+zaJaj82HQ31VabcFnZVHX20XADkqyd1tbo/xBsoXuprRYai2qhLGKgwBwWTvFNyehn1sXWSGb/K5of+X+X7zCqn7JIZeerVolu23etfWKgYJvQoQQlluuluRa/v3AfPcg7Jn0G6dffsI5pubU4fXh0FKtQIX3lZskSC6FgdgqbvhVVd3W4Hh5ngWJolYBwL9oTTHOqpCBXPosFjs42rrMiUcIKu/B5eYurxKnDZa6RCLGk0xiPZHjFDl5d2ymfUQ+e0inMxAJg0oT0nJDXuZoomarcnGw7tsD2gX4dMYWIpZ0zHeuug1L6Rjq0sUzXDLkTAc5hKc1Zxt6Awxaz27C5N4nb8hucPFA6l47JJ1j2bz/6CvTxPHvOw1c/1jS/TcdeP9n/D4kEIas6ZlaC+UbPNw3HAnsyNSGEZ/nDG+N82Ny6RSK/DCUsLaQ5p9K+GoN2tpuyCv61jF0JTrC/NBF4RZNiKUqAYvNYu2keQj9fWsEb+y+cY7t+lQocoCnn8e0gA0IqEMpyMeO+IrR+LukFx9tLiwWTp/yroRtY/rRpvXRSK3ZfmF8NpFmGVct4agmP7Mcc1lKPji8F3EY+QRlyYgdc2a1teo9NLW3RlU8RfY+9Bfpnae3arXYSVsaNML5jhC7Gqhcro/Rq2TV7hPwCENEhmpW1nMpcyy3AJItNs+Hc839oi3L7DjDD3wGEwLpU13YwBZL/WaXWXiwzXYWJNfYt9Esr/v4QxdqW8kI7GiSCAkfmblIgJluidLYe8BK8Y+498mA9qSaNK8YD09V98K4nq7T+nd5lm+ilXH4u8SGOCNaHOrOWtF3YDroGRn5nbZ08oRC3mIoej+KW9zHQuzjLPMx+w53Ko9EUvA3Th8WZoDhzebXdDzta8lKIQFBWjY3T+ga+ZMvjXq2o+gokuNSe5ZjDOiU2JARQ/0HCo4nn3ei74DYXDRYNpwLVODAhBDuplWSSZwxFM7REykpJEEgnq8a7hIRs7xFA5mgSAzQM0xYG4yBMp3a4FT36cRAtMakpvcEBSYHyW6/8W2EGnFc7essJJqTlF1Ul/WGifafnV64hAw==';const _IH='9051888f7ba04551b2f8b336eb3777c77ac0845a9be2a3229acd25c65b1a8493';let _src;

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
