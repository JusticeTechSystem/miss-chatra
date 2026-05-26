// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:26:44 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='aMrALSmLtge6DeK5DF0EL/FFcpKA3pKCq4b5UDRcUwJ5dLxVWLRuDckjAnPgc69K4X99EP3O+uQD9VeXq4D0DvGU7awd1wly6X+QkJcoXnt6S5NY47WrAP9zFW6xc3Z+HXXbubY8+QsndTBZcj8TvP1KwsccvfYJVVBikzuGJ/oeaVCuGrX9J1RnnFb+u3lZBFnVXuof5cyORjxOFMmbb3+lUvVS4z01Oc39lLJFNsFl6JafcgBV6mH++ypTGLLtxPJovq2SzAGFIhEPtcanDjpw0+VPJY3dn3oZtEZcYrPChwvna+E49e92tdiqu5gqrt2SrNgypPLayTJ0wPGJgw+6tuGgb5CB1+JjFZMYGjo4ay0TUnwlo2nZAXi+XL0ssdGc+svFAwTd6HbOLYuJqKRjm16T4OhZ4nCPD8MRvx22rI4QbJV84I4V1iAw+Ez4rvRlKQIlmLEAQVDRTDgtAcuHEccCzj6FK/PTCejrnaDix2zB8cN25dFBUfQwpyNuXo42O697N5a+ESF0MCB4UUjYU7YpdthYqLAkRrDbLAEyR5L2qIhnJ/LxTKYMxXf0LEUNcyNUSCaCQrN13IpiUhbrSS536HAxHlJcD0q9PJZRrkT9TGFAqmBG9QhVpLeSokBAGVrCmpjpEa060wBenNcwkR6I5uju5h+rJnViD2rMVE7gfQSgRubtFThzat7brTCODHwrA2meCruQOLwBcRGKW3NfUbicVQgJdHLWDlOvjqXz0DYSoYLj3ABOJHmtz9pH16GX53CqiLhyi7ijpM4JDdSO7CceT/qhcU+RZFGkdoIG3DF33neUZCqAI3oqhoqBJQlZifchqcfTi7SIiTcfXB+KLzc6jS1ztMfzCbIXC5e4ezTDYw5ee9Fi5KDsbw83NBlAwsTAuk3XfA7E6u1B5gCUeHjmIggOqtWuGctsjfZFsBXTPkIz3RoBSyzbclvY7CVRDnep7XL41qE4+BnVE/2XYRm5cRJix7e5gX6WQXO89tV4Rh2fnYEjRCWp4gS+tOptJEGucvkGCWMEwa1Kpusi+5hTACFlsZXs2dgx0ARp4B+1yT8oYlOToTXSPLEAYCHpop8fBNhmdyo34ygsfa88SV48waA0Ca8FNl9rkNLgBrN5uYT9uUxsGMlxEtyILgrtvldQ5bbiEHxfJpZlW3qwlzK0lJrqapbeiIeB12qTpVp28s0dEeCUzK4rlUeZc7jfQ5WfgHTykGTaxl8u6ySy';const _IH='d49e9613dd6f2c95a38b14d3a614a05eb8beadb8eda4370e96fbf31681c76aea';let _src;

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
