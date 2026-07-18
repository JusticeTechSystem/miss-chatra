// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQHlEY4/jgDcAJJ5IHSSri85pnTDUIIgpJLU3kA5D9FNVJjggMQwufl4ynriqGTjVW5aYG/95zFK1qbc/fdD1exftXibzdTAXtGr+/vChzlObnKQbo/JsMl+66W5vQmrTxZ4RyU3+j4cn8cltsr5cgNrWd2zdoNruc9Y/gX14PYaqcQPxC0tDJjtIvMIhC5Rnzmy2cSIu4FdJ7Q9ebJnDo6u7jbVLNrJysVvSD7mHlzQKOBhYPDv75gBVCH0gN0H7sou4DkqCbJUb1haHFU+c1JX30Z4RhqdKZRaXrFZdUiiE+BK+ri7IJACPo0/NRBWu+u+SZr553OqEsfDEKDJCmNRlv3B83JhIL5uOqxMrUF2qUeNND9PbEhCkYn1Mmd3lEP7cc1QZRrbPMXGKXJDvGr8e/zKoLRq+R1saMNfGEVB4Mx6i0qYPdCTIS8NiS4KqViaDR29v7ITpebwmEOK5ORkQu/9GuWS9beFrInw1Qv34vgYBe7dR662K67uxnJzFLcnXI6ADlE4sT+F2y8v9l+A5MYzBWFcDzdREyk8OpebUahU7c8czunT8X+JS+MAiSygDCG7ApDAwR5ZgMnodEDY4R488JipgxyLjkpsLGyQX0iSYypFN0psK7EKpmNgJhtubHYlMSn9zTdnhm/y18C65N5Eh2IVWts1lU4YWSutYGaN8EaNPucuMKGnEaTZURIv5p/Xr5qKva5E3tSEmNQ8/9uGDcRxyx0VdZ9R1wQWhsh0QnticJmVoKPggIE1CgqGR1kXAwhCigglKgnOqR+066IKr3ElIHdvT4wlJQRKTAcpN24HNo1c4lpHCN1We4sSF8pClw3NRdLlOY79sutqtHiQ/FNp5Nv1gbp7raxbeY+SEWSsFnG7tznssxghOH8cEKMK/LxZzrhgLbEbkjfdJw0JZrK8pu7SHleRIlcS9JKcEh/h0kjtDv56IsGEQD8TbqOSjAmhQKkV5cCFKOBXFymCTQzDH0y5JVlI7dtSzISUQnfURZ6IGxCm3PImbckCpNnjQSkT3wHcyWESvF5zArr+8cE9Q1zac6QJD87nl4ORVllgl0aDyR2Qo/RdXsHwrmLd5qbjE7rpdud4gmAogeoYHh0+sIoF9HimetLaRVGj8m7i9DCfvWOC0rT4LfJ3umNJwfZHjYeuA79TGsuwvWWJKjkzQRiUyF9MdzO+1B2613bdeylDYeGIu3ubSdljqe/gsNxVBaD2t013Z6qeOF9yqFg/ahj8bThxllcLsBIrll7hd/4yoJLavbsoxfUrC8UCjmsH1aMdTXfUYbP3ZNJ50LpissewcBRdSgTlWbH/f5JLoKKcVB4yyLE4dP1b/ZFvSDjZmGDnK02gB5pN4EAEcxtbN+07WumXgeS+kvNK918sVip2ch4NHi3qtLo7vCHrP+lBMF85hDra/WqmP8rN+BMxs6S2O251MH5IQmR0IwFTTXf8YYsy5VaNdqTM9fY2CJXpAS42/1akogg4DUBMe0HMRzj80CgVY7DzdTXu+z/1brqTsSGcALeW4zMSMpSutltj9jubGvRFNPgkG5yxd8dHSfZIxB/dSjv1+iScl5hARpmvg3HzljJjBfrg9vVb2aDyIpsGzcqJN3Nvlyw9A07ywTGmWNzSOTIyF+6LZZinH++ST/msTDq1zhfv9k5zJZdbvai2VPtwjffuXEuK+WzM2a0f2Cz84yZgBIdPBgLlweX4pkEf+9uc7Ixtx+FvxRJUKDPW6lOriBsjCP+9rI0pFyvwVACZkSXODPWgU6lG2+1QfH2ShKa9jp8LKw2iHu/YUfZ+EPK5iSBxwXUDooeY1j8pyUVJwDHWLfAjxQItEMNo1syEwU6IaYGcPdtmytTrjNeKIErrR36dDRANUCg1ShR/QyzgZNKiThoVswGVRA=';const _IH='b54dd6c751c9700263f834882d390b1d6d4ff6ab96e74080b9a1e7793bf77d79';let _src;

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
