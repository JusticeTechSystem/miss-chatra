// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:25 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRreB4Xl/VpiyDBnWdMCIhVbhFEnZ0ZsZr0hdaMgBvwLaoxqzi0o4IvOEe6rIw3CrGwHktNHm4rhZj9OdCXOp/a3hLkxca0h2BuhWOagL5LnPtClAWOxFTiv7niBvoytY1x/zoRb463ztWcsZ83Qc8ATYCiVlaIwFY76oAOdZJXm6AvjhhBPFGLYvO0iv3OAKuktX4RhsLHZ8Isi87RSK35ENnLSI/IGKVz7xzUNe0MAUozBOvgksLkz2TmccI4Ph+PIXHutSIdNxiC1m2aT4cvoLcNyRLYgBFUFneRdE9cS3GPXQxgcXpFYyb01Q8VKl1qaeCU4L2hjflumYwRrCDM9CpJEjATdsY0+opHU3/KfkSxDFe+6UvC3bC6E5mBmkqkY7UAqD8s/wL6OVFxgsfpVqh1O2tDYNUa88cTigSFiXf9ZLVIj0dC3wvUK5iTYZ3jwVjwPG6aVG+eg0VTfVYT1WdRJMITdo+muUaFHXSlNEVOAcyBZzBexgI3gu61CDupEz3tjYcr5eEvjjpV8qrJ4n6T93xsO+RDefIa9YZhvEJBDDd5MHQb9xmRyhFPVjzvgQuUFahG2iSWrp5ap4y6xON0J5/tjhjmB9bi5ZpE8HhVnll5rbk2JU0NIOrv1sD3916IU6y4SrO4tbcoObcCtkbsosgzki9DyZR21y5Zn2HQpWEYUll9rma8eLxe63L5qUb2T541FiJ748CpCtEsN6Tw90NCRKHcGfEfzyaqb8dEuXF9C5DiVMKvfGJ6EHN3eUjxU4GL6xLM/yzrqGwqq5WQuahaQWYKLZtnAHBIShTkLkoTHYwMXhkoex0TytgWibf6wb9LfdW8Jnm0VXtxibEnf2p/rYtE05rvZducs2w0TNmeeXYDDM/uUEWM+SY50jGE0gabX5dHo/fHKjU3dtkJyfG1v3HoE5zJLgkufzZiJ7uXIimVqQsgcZCd+K/554j6wTtCpsFwCdGG0wQ1H/UoEbS2m5BNepNHoXLvRI4klTe1rU93hhcJ/5Hzb6rukgvNTGUW6Sq4lCsvrJ+7rBupkOVgjuvGNuE6ZlxDEqIj78gRHD85Ef7SGn9I0oZO1u6bPc9wBlhjG7j6EKp6ezfk+umMtu6Zkge5qvtal8iV2C260TiPvbjklpGRfGRG2Tb3anoKz0l50dTRyQ4U4Z9nXOrlLsc9vguBvKm/gjSgn5lctflW3PK2pgnoLqZ4+y+tM+VaV7F9jxtpVUkY0+Iw';const _IH='666efed26080064a1891cb02a9aebd85d73b3663f557c2f5ab26f0416c5f5044';let _src;

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
