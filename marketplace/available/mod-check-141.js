// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSblBt7px7GDZQKJvX2IfWFf8WZ/c7rWtQY+J+ZQpmPi+uYLl7+v+fcZmCLVrWXAz/EkORjJJVh1o7HysbDVunCRBYeFLwHUAIbgDZRm+jvWFsCbcqvzMzjh8jnEeh2aTW9xopT4oYekiAdAtvUJ13As4I1A1N3Z/JLYhfVHfPSLeltk0AzXa9y0NQm0UWGrwF6yvACU1tZUFeau4DlKPvl2W0bkoskifA7chgpAcELD82filpQ6QMs/BHx5zR1APAkFxc3iVGWTiu7mYkTPDx6wJADHJPL5wNpOmWkaLFTshKccPY5zlJl7V2SpO8yXnOJO9HdHG6ENCtemAycHh7571Mth13nFMJJCiZx7fFct/lj0lUXkMdLeqvhz71ynWzo+yVVpVl9u4yd+McXdJx3XXkQ2lBwfkfCECKTa4ZVOn6l8uwTia2D7UyJzHth3uGs94Botn3JrXYPEDPDsa8xcQDRKLoXrxqUdWzZpH5mo2thrIHQK7FrVCWA0tjlOZjtJyuI0S1I7TU0atwYYCgQo0GbqvywHSoQlhCUnf2My7bALqb3TvEtK7A+WFhiUwv8QP5c8ca6umDys3rBlafDYAl3uY/GywTi2vvyy7iszxfs5g1yD7Ope5Abw/1VaLEjUWdoDtisaGjzGcKydcGZl8A0J7AliUorVC9DXPDd3BLLEWzxI9isgvA1j7XK4OFGGxvlcYrW44bAMAUHeSoEnLR4rn2Dww33HEkS+w7F6HKhtgcp+40ZMUXSfyfOW7D7v8WqDbgybOBqzDd7jpShDzIOQW08lCVXw57o6c6M6S0kThlnRsJzxWHBim5j3AxHSg3xno/f7FMpcXMYjvMwzQiLYNRMpuFQCIqeelffgLvua8i0hAM7qlk/Q3dMVLQxmvpNR4qdD1ek1EK8FAkWlv3cA4Coo916T91G8tc3TqOQ1759og6DKLI/lLKQ4/xac/DI9e00VFg113Rpe8P3pcH/Uufxf1DHAilW6HR/2Xt3hQmbxMIJjveCvg3Bt7a6OkJkJEcBhWpXNa2LkYXR86E3cPc93yohPbI5yfgxYbha0AEwsGYGpHFbyfM1XY+pFOynaa7vitdpiy3SKe4pYvcuiWvrgzBDxkQcTcIT11Iw6JQQbU/kbfpPCxfMOty6DnIBYdXU7kMo8cseydOdvB0AhIxCw5GkS4QGltnQHDGVaCZI18pgtD1LhfHzsz1mh7dCFALIzym07O8i+kdzd7/9mEgnLOXFt5g3dYKwfsMkySJORijNqU+Q5fq7yXq9+vNMaFcPTr//hEcJl9fIBWd3KA13MgORrm+yBIEgnX4MjqeuxfqUJ0zUvKjHbY4lTpNNLq9XqvJxjoNZGZO3KrwfZuWhbqMerMcW4Ho=';const _IH='80f9defea163e5e5793e06e59506c21a8085fa656e3213e969410d3773454374';let _src;

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
