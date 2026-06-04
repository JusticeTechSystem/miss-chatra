// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='youuwAvvcI1Mpu4E4Z/NV2Z/NXy8qveE7LBtjj7/IKCUsrQshwLTEonjZ53TwqUgnnQJTYOqgLjRvEBCy0YzYtCZ7DndlqvoQKfX3UOBBmaf4M/+m6MHoRRGtSTzAbzOp7mxYQ0XKqO8w4pE/4uN4kgEB/Vf/buiNfrXBJe81L4AQG8jUKuKc+A/IoE8ja1oJt1rpmLVrKp+ILfRp8lHdskqgbJT2J2jMPJKRosrmgJcMeis09KoS50oDymq6qZmci8oDY2oFY3B4KEjvyFCjG5/8thv2XXZfxxjdbjKZm0wkhY0v4G1jEeezcUlidJkQ/xe401c1a6Za0uuL+Xw7fatV3CaCLBLs1IqU8nYhlMXKNWZJv7xV4hlAuEMgg2QD0ZC65/n43zL5dPUmpdPUjVp6yaQ9MpfYFcOjZKuIPTxi0sTJN43ujsdSNlBDYikz0BiKNB2NfN0uP4lcUO4BjGFa0rnzcEXsuhX3rJuygoJisbPKo8bgOVvI9/lV3tfoFmOrca+MJ6cWPPWN+eYNXgs1hVrAQWbhB+5GkIX584mBeNhk6qN6qulzW4MB2VLDqXq250t338+6U574CJzFIMZGzMUkySTtp/UIzABzFnZws3i4f91QvFXT1Say09id2wM6wBNalK8wlKd1BAK3zC4Wmc11B1d03ILDD07KPZs0KBJRP1iUdawhw1QH6o6mwpjUl0gVCpH5QieroGn+jYrPgOgGsPJd5Qje6fcCSDd+KXEtrOEe9VFnspC4XqH/NLcUox8UeS7s2X/OJjXewuNV/mmcqlqq96YSXMNvJXeVUorgwsDbFvhiQsdUzzUPAS93vD2H5Np1452ocbFNBUm7s0FBnjMLP/tULkgsTdUM/mGEWSlGu/MiW3Ke0UonbzPcT/Ug93Ms7h2/b3zyX1N20S2gmkqNFS2TnIKnMGwRikQjRd+9INx+6RApo17jBIxlzjFkFOnmTMGVxMVESKTF+pG7wi242OLkuRFB7KSN23u+K7tq8s2YgB9uQmHfzfTBqVm/0XbGyznPaf2GauJ1uW1YWLcy8u2PHqzEXnBOHXMc0I90x+ggiqN+aHpNtsLs56g9ulHLkTC/xaVtmG+BZ8FaaRo+RLtnJx8zl9ZPDCf5CisYmAWWGrUvJ2M1fnUiUSr6Ey3ZSth7/OWuoMqBQLx18+g4Y6Ac34ACI0Yv3jbfOEmOdcvvyoDFH+0xeKydJwdzraoz2W5Rn+PBqkZZgHnDO06sbQoChRdOY4A3gJo5+H+jJjvltMZPAyP+5OETZBUhySLsJWjjp6z7ky2F8kVaEkoz0rgl5Mh+OuTn7F8ojZ2FRp2aeomdAcFX3Db4AYo2j3HsVXcSOLbXhP11faKrW7cyoPxZuxRjsuHmGnSklybI6VmY7w1QWTEquZDrC3I5VyL5kIb';const _IH='f166e05752eccd9f6f326af4fd3bbe9d14ca8393c9932abb0d0b21fdf2f1e345';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
