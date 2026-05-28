// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-05-28 01:08:25 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='pzNJ8TzgDAlDjWOXRz920opKfnpFR1XG74khvEvMRNTqDjaV9rYcMrwp8ehuls9lVlSXoMGnN/bMLKGE0YMcVOrB2JgMXfAYz2zs8nb6JeKykiEaPwupzgwGwv4alG341XYdHxVSdAivYAYXuXfCdKnd8oZyOVGMJnQ4mLorAKUUc/vMVOQro4pZjHNTbd6/JIo2vygRJuMQ7gYDGYkFiZixuCLGFcNRah257TKpbLrVsEikvRx8fLA3HMJ/5VZgtTLEEroqTwr6Qrh4eG8o2xczxSqZ/+EvQP2U8ePHHT74vy6rQAcOXhFvSAvlQkya103/Uq70rTJ3f5VOy+rLiYqFHlPnKy7NBJ4y6EczGqK6Ohn5rq8cF5y+wTeBwtSVvz9/8F4IW/UGUFVl3in5swVnmxLbe7JuKz4nTpgMfSWPILvzZDRAhHN50kvmp3MZwUIUUaA7kDQQ77sX78f07i6jbgj74oV9bdHJBQw/E3+LVwpNP71HqDgA/gO4zAG9k6FXOU1ipiHsBYPCeHz2jUOQebQ8XGGV++YUCmj9WjocSoXoicu6M9l8KOcOGYTfXTj91PMLl2igqi1vfHJpknpGGyF7xGBF7IVi+E5E+sa/X974kbLI/Htpcv0x0z2FN85pqbHzfgL13HaliJloTH+22TJpvPDGDs5xmB2jWPFDGRhHiYM9g3yeW04xfMPbeUWmA2ludQGCU9Eo4GjqPq8G2UrdykPs47CCEwXe2mJzPQzZxl7dYr7FbXaZpXPy3u77MFY4Uth7wGTbrc2kBXQRk1Bakz7U6Wfo7YtyJ2gnZvTeoA8bkgwWGczbwimJw97ZvPFo01JTkWLiUG+dzbI1PlumRUVXTSBFByErpflKzWqBSsj5K68OjbwzFsABSDu9k/BfLG7w/8hnCQYe42ckAN0MU3yt9YyWQlwj6P8ItKeFZPNdVckMoygB2H/LJ//uq+AYowx4pq+gasAafFG0iDtSrxbSQT6HKUpur/dYTVMI87Fva40fl5++MOKoNuV/s3/RilIprfP2nGV9JF/YugZqwgfoErW4Fa+b6bRt5kCDoPk0gy6SEO5N/stNUXU03gZULwTitQuRwO82QyFp2wQ9WzdaJ/wKr8E+up0VMma0ehftfWHtJO2U2r/8OM6DaEaMgMS4+s8RmJS1swtZg/jISOU6tCKt8YOYiO+DrM7C0ecNU30bvMnnzuTPNBmy9BvZdOxsxZZQrn9vzd1/laQSfcExzPqoTtL1+9g6cXDw4IkA0+BHyrmUkfDjqTd0o22gRuVf6SVJ2HlTz1Fe1Ask7uqJvSiwBzSWxFlHSPrmCUGoKuU1rbF07b/4IWsgSRfUEmhcN6dqRParOJKh1cPB8LRg4SC28x7hVcukNH704hu1AQ==';const _IH='9b251b4d755076be5fb22a439b5cd4c19a4fb3a6ee12d159d74efed34a759ea0';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
