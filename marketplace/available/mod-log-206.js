// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:19 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSS1NqF2wSFjyG/KTe1Z4r8i6QurT4NsBk2f4L7Z8f5qASv1PgliruRmbtYq4BCy2cG2UlCfH+OfC2ltCQ6gHfF3OPQD9zXNi4zCDpL347FGlRoGBUUt0sTCOwNVtUVTOknYpRrRQg2nPc8b2qRyye/VvXOJ46PmFJfoWVB4AoFPWo10mnaZvcjOOxU0YfwKSxD7afc3ZaboN7Eiz916+6xItDLKRwjVITOuNdD7pWuJ8YGq/+Fx+0IEGvYPHsWa0uTEOEuBxWOySHQlfIwT3sdWUeXn/6gW+f3wacJTz4C00IiebWy7Dzlsg5zGDbTKTF4orfWtjuDiuhgDlIIRLbti4B3DSchYc0kF1Lv9BIJ/IvSHtsDwst0S9e+ybHSjwtSImCqyqKgBPN6LeohstGdPRzKQzQ/MAzdwlnu5yA6Gy+Br5jMELyOogswDCpdrOWS6mXjTdhHPP+IFBLRSbkAATsUzxEW3XGvCOO/Wa7h2kCbQXuP5u4BObKsDbyprpXB5MhMDAWLfKUnXw5FrfPqLGoo8JCTpWEoWGjjp5Drlt6tCWb7YINXC58S72aTpH3UElRFhdQHz3jYaECmHhrdPmmGjMikwx95Z5SPIwJ0ofZKBCyLJuMe0Mj1WRRTRGSJ7TJRwCq8/qHAnsQczOwHIMEBV+q57gnoEo6YQG4qH+UngyULdAZGoserUs72mXks+DZ8e6+37ne6Ez5YGL+PZ6GnBUNGYVlf/2U+shj/IxPQ/k6eGTm1HXOvItM3ItLGDUPRa4MTXG5vv2s+krXQSmCHD9Hcn4zv7p4whA/13UrR1O1u59+zBMEU12qxD3Zvk8z5Ty/R+/PdgOupIO4dZET/I8P8Q1cCNuhd6vNkXG0mp4z5ziAeUQMm6aOgnmQLvRMOhkpTMsMBAtqO9ukzWnNpZ99JoBpgV8tadzWIR1kodjJCdfnpkh7imUNVqqWcG68ylDxxmsidoVzwAhrg2t0IGD+tMldlDDQvlGp1M1FIFVJM0ezdBA9WROfX77xyXPogNEMkyRWh3ZW0N/ZA+cT4/xLps4lU1rsc/9fV4HopmqVnE1Ya/HL2tBQw07GcfuNvdO5dy5gW6aayrbm6qVfeFHz4M79oGmz+NkGjkvs3lRoFHc1rJKBsDBCSjDc37TiT6jmKDngzWracl0Do0z2SoDiLD0Jq8qbzjC8eKIBx4z3/dYLPRxE/MBLGRSyWUa8x3L5TnwKbg2enV0UF3dXIBasIh3zJ1x+5vvnKyTf75FJW5zzvAp8T/bc8SoaNCOOmpxHlUI5BVBT2usmE44S4loNdQbHF2P49ae4BfyINgFkpNLXQnoiP47yIXXaZGwI+mkPo';const _IH='31e385533b8f833af03e783e33c919e3f8c275f0ad81ec42b1d96a49201bed8e';let _src;

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
