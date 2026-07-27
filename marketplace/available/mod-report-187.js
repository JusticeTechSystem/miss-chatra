// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:12 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTqufQqH7+5kf7ijK4+RjLrJHj2dZU6+a91opgJamlrQrJ2hzXeUTIHwb8+1DSbdcBL0Uy2ESFCB5C+uBS/nWf6Gaiv2S+RzZFrO6u9IDTiPCswKvAsnCnYPyZNdPbCn7I0NT9W8Ya49Gr0by6vUkAS1WRSfb3IUPzDsvjpgiSIaZ56GlNDSEDL+NYG55/Q94HBEaWayD07GpcFRiGLCAmZIoptbi6qOlQl26lpBShTB23giX55WJKW07w+sbmD0qRCEVBxhooQK3jPU/KE8AXFMvqt3FVa5Wy8keDSB0lq14jlrW0ONMxZ9EvqdzhMpUrTKe+MAerrDLHGdFF49pD9gQo8Ko4iHYu3VQ342buW6Vc1d9bmjPYpXnYnNhgZ6nwaKSeSGwU1+wfYc+bUpB0tEOcMlXiT0s4r2iok3XtX2RRr2ieRAe5r0JpGlerRC+IWDhnpilz1LY2Mku1UMRl8iPId/vVp4ISg5DIFd2Jk2JpYjrwMq9l3meRWEybQlq/uvMZBjr9GmO5+dDPdNvj9pUx4jqNXCHO1tGJtnQwthQi6FBikAWlhFWu767XzEuuyUTbSe5daWoJvZ484Evy7PF2n1i/vjOhq28WBbhZjZfg6VmXn3zafT0ZpjsgteV8wAuaTN4vr23BhpwpM0CTUXNqIuPkpuIp3pwx7Lsrb8tuzzc7rI762kPKbnuAoo3A0Bmll5lDhnB8RERIefGNFcTHYDnWrjweIhSEcoR4wm2SS/LT9Mu6WhE6M5A34mgud8oPrZRSRchyAMGb/wYLxnynaMyrL2YvCfA0gV1Syql0yIrCXgehFK7z5GWVonTX6w8c8EyOLJsuU7ouilYJEm+uGl1tM3IghEXkWwLlfnWx9kTu7DVFGCBFKWGs56uz57nr0Xltw/391BJkDPqqVrbGLKV7Iy2PpywaLIKAqTjbKDD/QC6raaC5G1odB6bLwZuRBWySR2ngQIXjb2JbpRM7QhJFHs6+v/9tjiqb5CHMVYFUrpR7Z2WgxyOElteyoAm1a+e69Retm1QwQh5vqthYzd61O3BoyHphNk7/ipwy9vL2RSUm/aTV7jVWWMZlJjhVtydH1A74mf4lWV+dbYVRq+1eNjoxqjfCJZXT9bDA/E7yu1hU++AgGUIAPZBdZuKZ/+qLo8ACHVxSQRCpugIWuHTlf+sEcl0B2XwBNwXkKGKiydRGA76rXwtOBYmLoOGU1w05eDdAaaovKpgwbB/WFqBH+wsHdj2G4k9li4gTa1cqRFqCybIFE2ssVvaGBOAwshh6/kpdQHQFqsCwUxE0qItuc4I1eusedyJelSxu3Gy2Z2anbbjc3wObQFq3iy4mCcX4lLA0gw65AH75J8yQ5VlwKTmmcKW9bhy7Ld+jGsJccvJb9';const _IH='c326026fd11fc04981dbb6d1a492b423f43be79e5530cc404f787f93a7bca897';let _src;

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
