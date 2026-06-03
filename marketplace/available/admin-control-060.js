// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:30 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kQPZu8BGPzSA3Rm7yEjGDP09bzDG/QVDVoVMR3KBO9vAzPx6Ghg5g4e8x9zpokz6gZ+Kxsso3edAQPt+3u0kkGfa/3ysUb2ZQDCCMhjK7vVGpBKR9JHT787b0cYXhwLpXfcgb8HaGlRmYzLQF4kqMKzXxy8EVn/daBhIqUW5rU3pfpdNBbP3DU+rygG6ZR/RIaPob2CZrk53v0V/0SEjsEFs0m7uRPk3VDcaABXk1a62KEx58H4ZpvJl/6Flfya7Tv0g+0kgFi5+z7/hIdC79nYpapKls8j7/4T67TyfCmIrSCEVE7rs7d7EC65XRce1A7WAJmnS4KJbzu1hC4VhWPQ0lgCeCVBkE3ygCW1upVRChnA8JN7Bl78wPqmayo5doj4TIkYBx/CHUReAQ0g1YHNxE4fBDe/dKLalYW4sS77Eb28DnK431xpcxQhN1MyBEMyOUTjHopk9sLFrLIa2M+nZDpbn1e6DG+X12ubSia6nSpyPTGbpxJzO0+U6lHO6+CR0vgvj3hALH+uOy0DFNCxBlT4ySzx6CJNLL3eArV4ocibKD7ySa1/BvWs5cvtEchUhHyNgYCxvIjYh/NyEhZ8471yp7JcHL+WXxKCNhm2eVVXu3VmQCNX8wIU903Y3gOBovg2G5SnaoWVW2/Hnyuy40ZnpBiM31nLy9VDSKTTKgxNbVOXOwXdcw4Ym3Z1PQYtmLKOGbozt7gfixeejJ0lYxP6glE2o0TTYbJHW3GO9tbRJmCzxOTOjlc0YphkGMF2qX2OWrrTwv26B5/pZ88CE6U9/yPVN/ZmhTrQ85okmTTQJ7jCAilgR6+Way2r+7NakpCdsCLe3w5AvPA+lPHuC9E/sDFJBG4qH/oUAOVmQljMYysatUs3LBXmS5FlcZzZhJOZ9+huO72nqcdPsSuxnKB6sRlkk+Hv1EmLQoviXy+0imp6yYPVac0HLGqAUqjKpZqXMZejPzo8r6Vt1U3q7tOKXfbR7c4/oBnh2V6N1Vy2aDx0yTeJM1UMph/9jLopSww==';const _IH='95837d23e770c51abedcfd004af5cd83541c7bc9f9fd5f38920025d9427aa5b2';let _src;

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
