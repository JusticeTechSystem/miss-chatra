// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:06:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+vcTTG4D5BHNsBSEmA5qON7BIeV8VkOXvy0nC5iI8A5m0WshaAbZhMUu0OcHPipkjTdJ2coz3wApk4BwDs7M2pbceesKPsg2tnVk8CylOmW9vACa2bSRXsFEoEHL5uOfcJKrSerh1Gykm+1naQH9bNaagT99A6v3upqnpUBLzfg43GZIB7mTS+3eDz91qRgJe5q9Ydidkd3l6lBdB5PUb6Ig+Ke8/egZgCihfwIbhbkqE7WjUMa1uBDWNYPhwvanONsZB6N+yotXjOI2y3Rx/6T9viWEKB83GAL95yHK0DToKTYKBE270Y5Ix3kzUCHZSAk+/tohwQevLUxDgfONQQV4ZLhFFhfN7uUUl0DsBqOFYJec8fhxuYMDZZm9W8BsS/hGSAjUP1PQMfz8fvXWlksYLM+8J2BvOn8NnlUhOVADfjG9tKhN9N25OIT9pdT0lUKLLVdPVRqKfy5yjMY0qW3DQPbI2dcgC05DpXHd3MfIkPXz7AYxRZ4dfU50XDvKJ3B2I59O1rbdTN+Vc0wPG0CaN3bIhRHCl+pLmSFrrNXKGOHyWYAFckJDk/3gxNMZ0+GyAltdSHpHzpNXG/jiOzy0eSLNLsWX1rV2q0RAlRKm8KhpdjgcTBCAlh8zogF1VTzH6ksQncqlkUgWW8PxZK1jgrx9zSGmGzDSELEebNeNWje0slGi4l061ndUy61rSshqvKjrST/TSXLdZNXeQiysK+9eImaQkilKGpiGhO9ZK+4hqVtOKl/jCDv6o9dhSMRizSR+hUvVBrDeEXVy5YCDzZKLJWdE2H1QENZ098L84Ee152bSmmyTWMhro+AZrvnCSbR8akw8NBcBAc7HsElg2GBpDJPPhRIXIauWGYZLaGFSsjBc/j0mwdfmh6qn7HqvZ+hdyl+uFVOyrH0rUGtrBJ+fxBBYgmfDmse4MoS3L6QGSokGd6Z+lQ19/LOMgXnwT1XnbtMJEszqljONQsPO/hYdbMY/ebbelpvrw6H91JzuRnqxh6yRCaI3/6ztzuGVf1cMcu0uWVWTLQz6CDIgHeDa2c0nu4n+KAOzNbHM7+MPXMhTFps1psaRiH7TENz7Iq/5iHzRdD5or/maYzMdyfkrNeFwrp7Scu66Vg3RHyGUSlBrT7r1+vMW/z4hZu+a6NzWUbor1JhDFL9F+ys22/iFby4T8U2OOdnEdF6xgaqEYZUGpPDZ2Ie9A0y9QYb7I3IBMpWs4jFCeHqxEAH6WjgugUzDO5YzDOyrAMjd1Jau8T6P5csUk2CcL6s+j7S8PzYBUnQmvZYVCL8Iro8H69YaXmctZXEHfCWiFDVpzC+jCkdRLrvn7nspf4JWXLbS4YeL';const _IH='4e6560a8b1ad7f560a0ba0bed65d80f994cc06900da54a1235eab58f8e285490';let _src;

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
