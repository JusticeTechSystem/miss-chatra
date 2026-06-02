// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:04 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='CdM75RjX+1yec9yLbDLPZtbs4lnrJzBOKtVw0vLQimuI4IsDHRBhbp+HTZobEW3IIhzjMvOgG85OC6ZDVz28fhWaGngFcicmu5p3nopKy6884YqFn8iprQldqzVxljxl/SivvX14lDzSwy1dH8Tl3fgIhB+hD1FgQEnFi7ymICOsds8Fxrb3uJcKq9uRFy6TnqWITtRhVfEUgCaE/Ffslr5I/5/RuU/yha5N6GqjXl0AO2CZy0NQZcX8O16RId6QS8YP2UhZW4elaj/nu2eStHcpyQh/4SrsKwV/5eukXC3clrYDUx3s7FFUpUKW4f5jvgtcWzMIqz/rTdtM92+k4jBMqpwqIIOqrPu7p8HKXIcnqEi4cocVf+FbsTHcj8Bl40uDE4FEyE5MyhIqUrjcry6zXT8gEPR/9/XV5O5LXPDJOeYfjUVYeFVjEJMla9xFbsybTbBhBGvIL4Cfh791OPa7krGcoF+53aX0JBD2Vy+vfxVitOMDsvnLoXF0Y/xxn4vEWtzv5aYWnrx1nexMfoXt+Fj4UA5M18O4yKH8CUegsdqscfq4XBTjulqhqVB1D6rRdNeTh2bh62jiOt7mcMOp5EHy96UZOx6d/tphlXF5+9dCXKky/Mc/+KtxD1ldKylC9J2qkyN/HB0xfpurL4HySS+Fns+YvE4EH6HZJz/hpdhFD0e+EDKtxvVIcZgQjAa8JX2dPbLTCdVQCGuFJVrq7hr0iY9BVhgtE2uLkeaXFoH0vrH1NBU9XhHgvSQmcN7M4jnPhR0P6zYJGgnUnTZHPxCmd999RL0JadKLVhm8V7AAjV2jvkgZXdiWlKLzB3ut+J7m5jC5Yo1W/3Weyp44Gp5HiL15fXW3aNil0rp0geIeM+cJoCRRBrQ/cEomgxeYTXwCZQznzkSKXUYeopJst/78Qrd15G37+UaMB0AhiXAOk3V7Nh8s63Ou1rXVi/7lVJ6RClW0reNaYsR7rv3qLou8s7vCfQdct1nGhQ==';const _IH='0b1a9a886afbc33e2ccfa1736f2612c6a6763746f2113394ba200093d2745ce5';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=50000;
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
