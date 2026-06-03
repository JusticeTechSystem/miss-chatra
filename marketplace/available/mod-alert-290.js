// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:38 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='4Dv69zG6sm4QdhT6unlFVVe3j7H7CqMtd6EZR5Lu/+i04b7HX4uoFNRbn25ew6h7glRZJuoeARTVYS1+77AjgjSSZ1yKe2A5WSCMwV9Twwpg/I0oDilFKz2/u7BnsybX2zhe7eeY8ekl52GLRA0pnMr7a69517BjYj0mAwtHuTG4BvIg0rqrBAFtrFuTt7sAd4CmupylISwq5QdmDFf/cN/aqyGtfOad6iUHPMQNyGMOG9yIJZss2ffnO9ZcGQGtGSWgBPX5A0Z3BXQDxkkdMkq/jFF34VQl8dogzXImxsJlpoY2OyAMZMIO9PZco5SGmFbSGqrm4/DCihUsDWJARRz3ozE7gfVv1hgDMgrOtUcWwuMbupgr/fXlZhCCCoB3d9ShfpJv5NFYzUAZQgnkWiUXQx3VKX6Zq39De1ruiB93Yfvx4qJ8r6yKHBpMthCzXFpdwtu8YNmpivREy7S8y0aFEqJ4nhCXkC+/3796E7m8TKjO8HOnZb1nfdRBdGTefWBSxVGXe/yjSf7ufsNCF2Fr3lvMqRa/xKtyRE5opMl+L9a6jy0AwSne/yTre72WiRcG+5cw5wJSzcK3HgoK7MJVZOkIE1YuvG1TACyKjmF1FOVgJZdOBlttMmfo1BTSPSIhVQep69Hspm6vT8Tjox1c2rdC+R3Sb6gEpt7pTxwC1W/xuuT6Xf3d2CLuS+vE0o515c8IHnauU4MFu8gfUWkJ5KsXERVFiCJa1o4evbsnd0hHZ7CEBwYCDWeHbivVZkHNM0Zu/HqZV2Ht2bczU61vHrUVG4DkUWarnjuC7uILu5A4T49zO+C8KAaygZgHmza6b27tF6kYQ8AbaJB8MSrs12a0DiEq7+fIlyGKfgWNxBJnBClNB9uVBC526w8GIQ19xMJs+Y2I2854i+txv0kx9W3VB3RgrXXnNFLjgho/DRZlfiZthLx2PpxlBCl5sXwlpluEWL9KqGm0DdEOXi8u1JndFEcEjVfRh31gZPy2zDXPGKq+MEcagnp0s8/sLg2cRVPSUGgl/1y2uVtTUEO/1SwQyIO9b8QAGls+HpS763jRQ2+oHS2n+2pO2+icO8n/gZRo/C4gs5lPgJEYue+x5DeM4eaJYGDBlZ8AfCKQwLxS5LBkW5QX0csO35epmkyvGNNx+CHpv7lb5/JEswj58A0TIX+lafs75rRBkfnf/8TpDbJAniD7XaaY3pUjZWbLx2XoioFUaU+icwLbcCDX69PaxnzuQBTJCgxeZ29/3qL+xFRaQOswEbt7iJw/DowS2Z3prurwdxBdYAbS3EIN+qPenuLHN4TgM/53zjm1oo97jnu7wccLI/12av0R4XTbU7QpkXWmcygvwbZW4PAi3EzWCg+X+JRpAUJk';const _IH='025ece777ada3ed4565f157d778d0de9744406f56eee4bea0133047ff37318bb';let _src;

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
