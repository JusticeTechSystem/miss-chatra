// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:01 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTZCco0umX4q9+RLtuo76XfAasF7QxjvtHxWV16QZt7Hjc/PcTVJCfi5pGpB8kMBoQ4sQznEi2z5ZcckqYAb4kDhVadMYHIEz4LodowGWeL/IEWHUkQfj7l9Nrt/c7ywks+2Shejk5lyAZ7L0HRZfD0lV260teIuaAQT+d1M5uXrmInOwkqGzykpMKcJwSPYd8nKjCA4WEulYMbIR5lEWL7y0VmTBV0I3x5g0QoK3jndhmox00I6qn6ohEVax7R+ZaZxqqhoFyp59h/jJZUcxYo1EWS57799AZThi/N7BOeULdwjUc8xYu+1K/BFo7BX1G3opGiCq5Bx+UPks4GuuQb1Z/hIJZqFTdZlLlGE2h0KU/BlO7b3mD2o7MgafOOOfi/5zim/9magIIZcIXI04TiwwTEkAotCmUp+J1PU7wy/R6YSj/3KAwWMoay0bi3NISABA6Z3iOdCHXLBQDThI6A2wT1OOZLQE9PW34jVQSq5onZ0NnAetyEeEDoPW26yfxSbF1jeGJPyI82FOYwdP9V1W24oFR7ejUA6EuOZzV4XlmaaB4skNNu67hf8mTGZ3/dw61b4TQc9yaWsrzVh8AH3VCHa9+SG2wUeE6g0G32nQI1usd2osPije6u4sson4rONDRZly8lOuxkj1mAwEKo80axlkAUq3PcRUDhDgFtKOp87R79BQzliJKjoyZj8G5NT1Pe21y29+2dJqe6rjtqjYmyQ4qC/6x/Zg8aXUh4aM4ZILjc35q25z53MgSdI+VBk8n4MFyYyFcGWQKnQ0kyvyteKz6sB7ptcZM3tT48Qistm6Io9yX6BsHvGwqCi9wnzF7rlq3QoFQlNI8JK5Ie80N9hlgsxxK6twyeapBocGP3h8MXHIEdtW6rqMVYtEmm1ZIQcYMnx2dpmJY5k5v2YYjU9WZZtwdr2oCFk+8t9+0Xt765XeJ0XAzttkP/PDZBs+ph5R5Z/8/qIvRY+P8k0tRXXfMfxQtHTtg93wydi/Bzt/vLvGXlabw25x+nBbGwL3g7dsttz2IJEdaxyFImyXl4b75MwQzuL6rNrXYZyiU2xRAU/ABKB1fmOWn4ymey9EqLGLz4enkwZl1iwG5U+99PCzt8S0K3UYn3urRgbh4T8kevdFJiWqFl9K495Pm3BK2gcdHPY2em5rSVifnijcAQO/DXA2jwEeLrYMxh9+62kr0vablQ2K1yQ/t0P3wGFUR2RB/7YWMXNUHpIq5hvTrFyaq1UiL+rS1oAkQsanrbAt+slFX7Fy4UYvaQG7+w1wvKJfWEgQcc5Okxw8M496MZbCHqWqo21HCUw08YqmIcw5WZ8T5nTLMe/X70PCZ85fpFFIxD8CAXaE1hkFLbpYA4W7NBcPcEFb1GazI=';const _IH='ade91bd28e34189c1ceae13d4a213e4a07b2ef54f856fc2c386566b73df777da';let _src;

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
