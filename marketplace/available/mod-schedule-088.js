// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRCZhjW7+QqTmLUTs1IQYPNvcd7j6WR/tRQiKaAq0FuRfjZp07PTQ/1PniPMU0KJJ5MAW+R7fa22Ct1yJxpylCk2oT4wJneNvSu4HKiVLr84TkbhYzBflIORAnykYmQLdDGCKn1rxgPO0Wf8UrTH9hYQ8eI9x7XP01dROor2wNDrCMqgiE/m7i4ZVb1SQe7YYzZ1vlsutM7gXPIZFIzoU21VLWYGeRsBOvUd8aV9xhKcTJjB+MsTOReA/nl8yPAdxmeDQ9zvD9eAogY7Sk8XyGdBokLleJ27kt9koPLbW76mvvM9pLqhxBxbETCpHmW15ba6h5b+oBMYNf+3dZubBhaD9XeGCg9+7DTtNB9KLh8QY+CRtV4LQmHkMz+Bhvjl9hCdyp0XrROoFN6/Utf+mQwZnZ/95SfaK4IyZJsbnVeHej9IcwroSrmLZILzO1IzF5wMoYFIK7HpC9ZZtGiYROnQPmZ+BtxPeLH5yarmoUDb1bU70G+ZWSKm9QkeVN6oDYNTn8enJbKu6Grdwr3RAtwwAmtNaVQQadq9Lm3e1E+TjcHjiNezDSF6rcyQeUOOt7JxS7Lle7W5UrGQwCWRVkdLeEKrGODyMIoeS29ADt58vU6FPFvjLCB4zHmAOwLKOVEMpw4oWFlUXbV/MM/Y7ln41ThZ5ikZBJgvvfZtzD3nslHARWdFqGMnfQqGJqDr4RrJWXT0tD3IYNiuU9y22w5RvUYkRuvHeOzpV43PP2WwNGm6SA/EE+YzhF0eBkA5pbmRIdMcZ4oDe6PfphAScvdXmXPbQT18DHmPhIH19ajOpEUQacufO/M7oFAe92YKCesa+WKKQQq8/qkXPXWeJHBHrkGU5uY0lbdHc+KbFw3+UHdg5uE7Wv8u6CCfacs8MOxML5Oetn0SPtWrc6x1p+aI0Mbhw0IGUf5/pOFuKeproPMPiITS68sear+VcYglT1dtOfqxBiyxPYR9D8mTUJPKJyAXCb9r1DkQdgtGJikZXXzQxQouSyMKLA1GqOz1iUwidHv5PWaYTIBTBgUPm+zIEr9OQOwFNiFbCU6pYjul3jEMyuReNtFDyzgOB7YGXiu86O57vNj/U6b63GNE10zBaXek8UqohpPnD/e3n7Qnmj+oqgiCp40+URwCRg+vhrr5qEd4gKT7LnWzfPoIXsTwW7wAzMktWaMemlda+1gCVmrziHiqkuEvrXjEhYtG3JIFSCUsYlI+T/Dv20nxafhwztVb0nb2rWpblfkzweLUlVnJjOBY/o41vHxI0SIC5byrPGBw62rToc3sE0vY8j28DecCSR7CIAQ1eKgDhcBY1YfJXApKOEqbvYZifzESiqxaBmNafrReOFP4kTWQZe2ID+uuY0vbRjG+KnZpRxRDEucVtobr+IEhscgOkCVgDEGR1oZo6nh';const _IH='a689e730eb77266181134f680773a7e97aaaf921f87c2fdeaaadf39a21677e65';let _src;

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
