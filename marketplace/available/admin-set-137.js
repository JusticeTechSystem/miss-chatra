// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:30 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTYJTG/TcOcVM5mWdaLldeF5S81Yt3W0FBP+ov853iUpFJ/PRoasu4Gue3PwfwPjMvdpF1r5Sf2rnHuXkVr7hcfWPWk7uIHlmy10JQbqfL18jGxOfXMMPUApK1RrGusRPGBIXzrjJ/66x3aZvj7BeiWlIECmd+id2URsUUrajdaatSkVVaQl3/UUqMgGsl79wcyc8V+SkH6BjTTsxOQRL8AHGYe8GvjA+4Whel8odeOCFk8GjZqamdj19cKD9qhHm6S7JGaIP0MBTKwPYR4kjBps0FhllyhKA9gkCEwKjqNqfdMwkDRJY/Ezr0ALAWFotHySVJvaPdikW4JQNPujuNVuzEOZKWlF8q3FPSjQkrP0oaKHDORh7UPllX4A39VEt63YPmL2X1NRDsTZ5wPJqm22SutKBhM6/wonfIcQ9CHIQoXNemfUQ7zADKaBxP8PGpIZ7WLbk0Qub6oNK76UMTl8aAr6sXs5hXpeZyAjdxnh9UGQhV0aMveFcVifPZYrcOxDI8efuLOdS8hsqN7p/EzTJinDd1jjvhJBMoPFXkJ3McoOgDusZiUYgBBdwDlCoq40TVVZ/k2RK2qXSs/XcThXoA4YG1gS2H02RW8FPSfFx4/m2f440KwTiw+YcfOp29Vh3Eb+/q523dtLxVhZC63gOMAH5lN/6RDhzzCHvcL1jiC3XO8ftOpoYZ9CByJ6Pi7WOj+lTqIAH2vMO7FVVQue8cnjJjE/buVNtdSLRI3+3BJoIgawqWFRFHziYTiwSKTMYqGLxrXiY+sqdSVua5gALzH9peA7lftPy37/MPuLKRmMwvESY+FCwq1LkOCllzR4NjKr1p7JLqZqMmoCEEwntlU28RTaMfqP/wKu1zoHgLZmoA+Z76ToxyJsp5/PZs9jFICDHJSZdwtAQqHCGDfSkC1wlo2g33M6j6AAsDIi/X/JxOsmWqsJfYq/Tc22rqWfUt4HN1iNUiX8RcayFqIJYyUOxtl1KCqU6rJ';const _IH='660fb9932b36325e99811b69021375a216f7259e74c8d4f5ac0de9a36158c6f1';let _src;

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
