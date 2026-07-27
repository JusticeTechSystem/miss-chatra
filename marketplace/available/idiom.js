// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTXgMZdgkYbWSUguUZdthFRidqtKQKtVE8NSsRWIhnw/2x/lgIDDuNouuHDqK+qPOLbg6ZpPsmSiqhQFUB81bp6VD4CwlGJX4XYovJsHrBtEGwyJ8fSf595ivQhuHAkydVCDUIr/gVWtuKwZwrcpDEU1trdZz4Pb/vZ8lcRYN31VSQOt440NuHkxrPsZTim40aBz82DolI/6FF/4G6Cg36zOF6SE6HXt1afrwTStAoUPHrzEMi6DlPwNwp2yhRwknVL1lHFhMC1QAtWPPx80niZTHOfo0JGOLy9+Q6xZLmUgs3dGgT5P/e94nFZks0t22WvT0KqXKwTGDxdVOjf/K4QfNxe0Mh3I/3MGpzWWSoihLK1oiFIgjAfkMnlelMLr+cfjiokjdiZYIKBoYsI0Tbm2UtlHK27nExrV1GnBxARc/aBs17NPrdnY6G1ARYPlfmVfRc71+Hy+h2N2+/WjUvrCehWDW1bv4FRi4b8D7Nz1b7hPihGoQVexs5oNS6Sbkfrx3kVp+EU7qczBpuk19Bw3TCLYVv9Dg45eoW+EdcOzsrwWVoIw+0/U5LTP0KdQ/4AfGF3zActsYWPBsUoVMKv9jnOyrWuMrk+4Pgd4V/pEadEZDPEWyZNJjdSrZyxdLNm8qnANSgVqCmRmZN/KbGFGAvgRYIkb1LBFyXUOwOjFndAKMMri6KTGA2cW0qkBO/0fKH7af+M4ed+GfYI4gs8ah9JZyD2Ba1qmcwXTfW4OPFHsBv08fVVEVGCSlYcsTFzvX67MXiMH1FU7P6cPCYEovXWfXPCT/hAkOWHy+WZDkbzONgp8i+LESV+iWskzOfL7/Qe5v+ed5oUTxKPyjmWtyCAM29uUU9eXYHQP42WTkczQuVK3oEHqK5ossKj763RJO4/OntPBBscm/6SeOR4wwwxeuc0VehW/x9y2gdwnGr1M7bVJm5K7JdL+uzCuPJeojdTdRtdPksPEP60q3+ZpJDN/jFfQqP0gketMJvraDwfVvDuMjgHpXFTuF74qSyPsQXd4Qw1UPPmNT8dUbrStHpF+UF3/0PhcCpH+a+RkZvOxCH5OtsEiL/LufCDkjwJNaX27DsrlJXzBfwBw4rNOwC1ozP9qVLe4orASgc9LpHlaOTolse4WSe6faqDf74u+wUFJk9ZJTaRRTUYssH/eiDjN+Vem5OqUV+1+5jtoV8ae2IOQY7BH2BUGg==';const _IH='b71609cd770ca17e1dde83bfb7fcccea38c32b34b8318f8771b67ed7913608df';let _src;

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
