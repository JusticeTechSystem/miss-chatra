// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTgQcSd57cmVILLXMGksnXx8DDxV3PZjjeYpmeFMq3/bEQ3Hx2HnJ4zJ/dx7UdMd44Npbt6wT9+JmD6f+Ls2YJP9mqGFbrlILWQEcKT05++K9BRadMiSKkIOVaQevw1iSugs1jAm3K4wX/9jeM2IbP+WOXMno+XsDkiQNMrPGwDz1ddwNw2h/tK8S3+h/cj5Zkdz/u1WuvnBpuHeakyOfgksmH88FFVjlNYSteF5yW0zBfxM1wNeiv5Y+hgnCvlB2ClUHrmpo967A/xyph4mkHG9//Hmnc85A2R1oDfSDtlljfpt6R+Lrh+16sQK+Ja85ZlSWjHmJ0v0l5aiBiU90K/vyDJCyXTBNgC3rz5BMgU6/zjGLjkX9C95syjwwjPJATxQ5vfImt3az99rtplxbv1FljmgP5LVO52Xdq0htZrrowbnCjme7rrcJYpVIwz3PPxlGWQK18F+Ev7EJtz036umP2xYrDVILcEIEysD6Epn1XwBPPiua8SDFOK8H0K/opoXgXmeHfSlQ8NgYjJsXBPUy2nxFh3Sfwm8Jsjc531oY/B7BaRJhdRRJUgS/QReQORZ5T4M4+CykwAAAUENyD2DcJz5EOEGiUqVYmIzm2qNAkwRN2xrGv7fKU8ujdhTPX86wUk9XYK9YMG/iIkVmpyd8JXNxp7Dz/bEnK+Tx2a1MYnfL5b3C0+YLjzIih46SATQZVNC+1UqoSADnbGdjlq8QtDWio12r4Db0dv2E+xEam2TVQ2Acu6FfLKOHm/+Vz7EJU9NtY/SqH8QNYEQ+ogi2m+cBfhyXcs7vYR+3XihLgf4WxJ8qJYZuSqYVwnWuq1vnFHJ1sysBG1MZ4RbIsJhJeyo9PN0ZyW5FkQye8w+yVBeQgQ0qInyTrJgy1X4E7s7De8QzWYUgpSovBKa3NVh0bkzNxasoCPcXzjwj7o/aCRbSDDpLgvlaTE3ad2IoUku2clyFQo5EzpwlwfF9hFn0gJJmVUgPn9x0fNoT1/1V+Q6feMrBq3kQPP4eXhdtU3wPNm/ozqjgbrk+M/wQdg9tuifIpLB9dprn8sTNI6Zbu7WwIX+G/4k5KzKLPxPoU6P74ejRxZwAFohKvtOI4T7GX4iqGPcHuypnldAbdEuv/EqzjKEcvFQBErJVXeYvEAR4UnkhVfsSLNeCLLoQYqxG6VA/iDgxvd2P/6kwa3jR2p7dkbXum3hCbI8tCWE5iuuM6pnrZp6xdbyJfGvdX6iybmavu51Rh4UeIHiNKt+12vdCk6QrDNdtLx7CqsOk+YboZgpeUF9iCsRxyspDZdBIKzbAVBLQXVsmV1VGkMYzHsw2Fz79M0hyBySBCIG3BRjT5aPE1zLaNy4bNUHVAluqXZJjWN796D';const _IH='13ae769158e9d3812b9de012f7631eb21593942eb83c11591e2f4837a6b02205';let _src;

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
