// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:18 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTe1AIhCxEnTqAwgHqbulqY0j86oU7TLoZe1uV/o8KQ5ZYnIW5TO6BLig3U5dfxqYVEL1IzTt18D58mtBa99tKdzgdxJ4a/iMYUO/jvBmPTwcGmLOehwTVpyfk4qa08BiNpo5DlUQK9TtLV86lJzS3o/yyHzu8lGAYnXN18/O2MRoY1309gverD30elwiHmSa/LN2/1nTEqIFryyakNxrdxK34I/fv4rnsxVwu4ryMY0Hi39A5FqGURuEod/o0qRyVphiwPEBtYJvtBtzvAeSfhg1Mcd5HV8Ay7pHvICPvUqu6vYfIVTAAa4qYd3la9ZEAY6Zd9IXtAqvjmzgLtAEcNaoyb5+3nT8Ae1opoVWsp2jOyOJbwOhxmaE90pZoRAIwsmv7mottE+bi5Od/DIuhM5tEs/JoLY8buEBegjJ3yn2autF16a7amh1TxYRgMP3+f/TpgtSPqAa5yFQR/oQ5IUaQ3bbXxG1LIckgqibS4H5g8MgaPlzWpdpv5RV+AhRlSJtCr/dNqy2Ep2sqy4/m3/NPQTXXA105TMN16xrECLvRJFTIRt6hN28f60h+B91EF+q1bFFKCGFnMiZCvXptwE/PHFKzDcZ/pPfhHDfq0STqCwVVsTqoJqYxXpU4ZkVP72iSVk2hQp6LPirtrnyAwRIxVs9RLiKGOsJn9PG0ecHTwAnZTuAgdjhPu8ncXwUzWxpDRbkagCk71l5kxQ5R0H8hGHfAyBa/U4ictUab68arW7FV+17Z29S3dBDDNjV5gcAl2n1MmMIVT8PRbmhgiLtKfCpLX6+S8TUKqKpbGeZGqUnGH6DY3332K7OieM/om0P1/1G9MW5Xd0AS9Ni3lEtmoLSqK5JTxztqtj04/bqgAhQdfiCfCernaFL1oUEG7IJBKEg173tZTu7s4v05wIN8PiFWaVNZt7yGLHLQCAIEzx13TYT8IifJUPpvOSYn/xzAcCg8qM5+EOzIWY23lfW11TXkvI6jiqdVFrT4zgt9e0AcioBEHvnTbmyje7x4Rdgh2s9tzmciBOQ17gN6mbOAjkBNLMWm4AfV/+29+xjHHYm/S8fJGr198oz/PoH+MeqdjZj7fcrteXeW/1rGr9sHFwZvw19AdN6uZRsfMFeBRPU2iWqWiLyPlU18hYOM6e/DyTfIYAdNyle681VrzI1kfw554zWN2uHaXh5c1veAuf1TJvuphTVE7u/5Ye01r4Y7IrRULn0xn2PgqKrLnSaSBQIH5RoaDRLZpYcufwOBXQz6772DYWpzLdOxCtYoaqs+9JfWKqwvy8RyvK8UNSCVngen4QUQGyUAx3RT9XeRnBnbTEympaIm/ChJxuqTk2BxzFDFCRoEJ';const _IH='2be5834819046c163ac374138fee6f2f59a59be3d56f8d44457e6f66f606ba99';let _src;

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
