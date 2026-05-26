// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 07:29:27 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='rb2Xl48ASi+xNsYxzwPaoGkFZZ0OWta3vjfl6xWIL3AwpfTKhezwOSvdGnuGkA7mOUCiK43A2FR+ib4SPClyBG+cZVm4qLYJ1wrDF5I19O0BrkQQNa1MCM7lm+DNGbVmWTQP68cuZrzGDAzov4kmfCTQS3MIdCg8KI0TSoadikvobIw2zrqGNY4soldiqnuW8Dwki2HPflVy0gp8vagXzGxCVSUlomtssyXu7CAoVT1syXicVf8sFZDoOkqbMjzNSl1C0vYyNY9IEDsEmwSToBIKP5+8cXGHXtW4UvwI6eS3wSxSg84pXAGF8fAp+3Tn48H+Xak+xSIxtVLRbz8X0jbvRjHqnwfwMZoFDJVXDvJlw+RWrCoVZyCj3GggbIVWEy7O1vOb/bGBv3uBuJiwkCojrpyfdllRO68poDDGMtNKxElUf/O/ornZTjSQcaDLYCvZzDD1xmKc6b1niowv81rDUoSA9NDI6bi8sCIoogoZYRrdV/0MdWRox3qWcx9Prmjl/tZClyM9RfC9cb/pct+f9Sd5JSycSAj4fY7IgaUeLdJdiCIftKDnGi0qE43XziBfCeV6v6RW9+hOuOCYh7DXEIP4qJTwU7yW+zswBJO67w2Zcjl+SJmgO3wJgMMEWNS9Ww3Q7bdHCHDr6CQhxvruuXE/tmB8HOYo9r5KMLWqANBZEpk94PaVmW6Ww5Aalcp7tU0DXueWhbgdZI+5EUJfLJBr/wqmsqZ0OmDVuOCBwxFdX0q8rQWnOuGOGKFaoug8fMKozyQ4G6sDT6L4OS44joNkw4XmesHCznDso96obeDTL7znVdl84ZdhBBGpY/Q+SCUFM/g6rc3ufsFMRLbvmLh5uTHH27IjEOvCD3QD7/bX25w8QYYZflH+L3j+uAInygsU//Hr7Mkz16SACPFuWCQjGdrAaqJ0WyL+cRsMqsU2zXrkLrBrXiiZSN07i5zz382WfYxVXq6Hd5FHDa4SLEB2CI8g9E+Fa1s1rHaUnKE4NacIpSS0gxEupqA2RnXjgnO1NukAdhYnaq47vg9cb/vmeh1lirAxLe76FvEj9vTrFQK9RiOMSnPgRQp1lcW0stKYcWSq5SngqFefYENpNJ7AfVpikZsOPC7tubc4weM7eruZbgwLczgYr99TBPrlOsZmL2N8oAvqGRrrDNKpJGn43LpNxWddKZWMY3P5mnyPQ82GU2HIovMCuFeDtJ1FlHl6P40ek3VXR4T/IoPZ8dY6RcVoknlVHSU2iBEcsCBr+odILb6jT33Rq1cqThtrm2Xpz6AI6w7lourel4eNTK/mkHfU65f2BV9xPqxY9LCKQDBjkHIOk+q1kbjFPj4pTMUh6aJhObiI8vgMPZIDCRg=';const _IH='46c70ace638ad67cae50cb6fd5c23fb0be11cae375f2454945111e7ba0df0a74';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
