// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQF5IsuFZXhjaqT+YuhQH3QHjSCjVLbvzQU2GOO+3QV+SpU21//qEqflgGDhjR1KYqqHMgtKDRmQakIXBg+m34XHs9cK5SiD+rDENCMP7MPVkeAIj38lyLg7INGIc0cQHXEHM5pixEnfAxuH/UTtwAizslMaLz8MEh4qbYaVRDxT0uOeDaTPBwXPBeS4cTznkpm34u+2v0kf2cJbqorCcRErZufpyc+wU9FL8JwI71owXA/C6NHgwD0RUntJ6sG20vjLbOCRoGB7lX4ItE/4duh4taJCK5CUEa8QnnotPwuVggFOAl5Mr+IWmtOSO294lvqo5yJIy1gisGsXDKIvDMOQVgjJHqjc1Ij8FJYVYiv7u2KJ/8/MoBT7//2i41LwpEsBONHpnO9wkkX6M/vt23A6vhTqHGkqpux+1LZbmy2e3zjZI+++njB4XAgR/nO7zsWzyfBylko72A3sQ7j5WVIRTEAm05iDOhiQl5aLPs6ePLkPfzWSI+ZmsSJ7fxXMmuWa5vJWzF9CExjQusjbu0FY+Hjgm6ImFyhgRE0yZ9mcCOlYd6DGPLApEJzAtp/TArNdP+R3i6LBDNEv79+E58Qe6NnCYcWWy9foNmWpCF6hC/yItBWpRkpN1kTxwsvuNnxzAMRfuGCALykTNaLdIzv+n9qFotpfKYgCBJidI/0iHUAiyZrNows4ky9bWytunaJ+uB3oc2MWS693A1LExRWC3aIJkZE0BP0pD2sKOdIHt+BVIUfoYWYC5eGhmxNhk+nlDTIUcykQCw+B0P+6tvUrd+kjqsCXfW0C7nttnGnBgVgv2P1C4QJDqeHhTeAdr56nw/TkSFl/DkOhGyJkhR7sZKJaiHPa7XKRr4dk3Bi+EmmUSYsEISPc9c7t4DOQHhty5G3LJMMiP2r4+vxvBr5VPN+4FarTgimxoGnvaZSuBkETQPFCqCg83LOuut2rW1yC/9DKF0wssyVCxi2hATe5Y6Z32hEHbMjB/X5EUnwJ9WgEVSG3UqyaTfHOYR5Kp2gxSyPLn6hE1Mxpdry91M7I1an2jFsfYQBeJRTUuh8s8qWtXgwzWZYJJbeOWI0qCmmN5zapNUlvi30o3hn3Wczdpt3KIh7Md6SObo4IhPfr/oMzQofIuhvFHgOPyRqGcHzkoG1oqONbpensQ49HUK4RyV+AI6uZmrihWqrbFjZX09F+Z1wtTQyNiHC7eS+OPCuuOoLmyZ7sL66ZwDRbFt3IB4cQ8fe0nKchxue8jcYj1WsonwhdWY32StUuX98rtixR1RiS0driqca4ulw+L6Ti/aknowY5xXhea70jLtJSazymC9VNq/wAuz8zOWMWFb+Ki6+30uoPjp8lB6C0Re1OWx/EvTLo922xab3Gfumk7VkLmi+4I9rPn+4vAk+9uADspQ2cNEHo2rP37YoFkp3GlhNGGIuZa5GG6T0KVeMxBiKdFxhD1ViZ05jao1Y0UexN8a7Oza26FdYHujzZNbB9OCq7qNULw4zHQOgHrQKoykWMapCR2eWkZgLsB8XmmRVH296MlLsqthpKVHv5KnY2c8nIa6sEBi8Cv9J3YHCHGp6chhmqjuFshVPa7CJO/pXOaQeBPVSA/aI14CvW1r+c/p0rlyysQ+fRSe31ylkrSCf36t85E3mtCuytkK5FpQ2bvRayiPvkdoh9k0lhsFT7A6tHSIKn3C+0ZYve1jEvi/tzw==';const _IH='b2e8a3d809801080adabe65cc2dbe559a959fba391ca5e9daa0b098a10281181';let _src;

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
