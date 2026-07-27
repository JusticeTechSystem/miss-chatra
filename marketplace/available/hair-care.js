// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQocGh/S5UDbr9k8JV3OP+VFCVLt6xlmtyCeDFmkt2bSOsx38llY45EkXkK/ogL2rqZy31SU/fdPtGBatJ5m4ZXc6hCRaF8gr2er7KQEvsA9vl3zBNRiL2nzwoiNL5ECAQjS1F3OrEc+BbyBqmPlLxCy7z/HAySw3TaLzoDu0o28/Uc7hIhyDmT8d+BOLK73/8IWaavpqs3rYRMCkDcNiFjPgkenSkzy6nctQu2vvvFr2O/6bDNnszM5aqlhBH9m+hBoAsZSQNK0eFMKi7JRbz53zEar4iL2sgUPWyRDvDM77L4OKnXYfUh2E+lLQEgI7Bwk33yk54dcNVJPsA1tWo3dVvsGFRlsJCjgg6l6EQo2ENP1penjQSVBpu0OLUB6Y14hhPhzZD+rGRbviq8H0OljppniMPLC3FtTuvWPtmWFjSPWDu7eqgUFn0FzFFON7XKL7JblnWhmMzNbSQ9bGyKqcOeL2qPXOPs8Gujvc8DhcUi4vsNSyGcAwkMSjXdnYZYY1ULUAFYtakt77nki2b5DtrDf9aCJxvsy1b3GLpLM2avo2uEwpItHb108go4mrv2tcrHZEgWowbM0TgX4cwBiGIQgElQzSh5MWl8+hAysKiakdjtJ/4JABw/xtqafBTifcScfrl3z8hoQy+QdzQaRDlLpMQBPY2mNNs/yFM0Zp10YZA7o/aQzW5zuKB+EBtDDXzDTPwxtG5EpUDxZqPmljSdIyHyh24x9Z+8xRCRedo1irVdcCnnqpNW4/hJM4ytK4RMsSPghcLt40eDpZ9PqQCEo9ACIQgy+7DbnX477emIYM+X6SMlVBEB9O+uw9/QKJ1fBn9RDGP79Qg2Z4FUFjddib0qDXsRbCCwHAGXtrsEq8jk7poRXykKkqynm55bCqil5UlxJD+5ZBX7gczyZg57bsQAFLPScyYcZn3KMs48Aj57mMFyB/fOCzwjrrY092zhkJQsEr/JdMeJ6cS645Wr4Qhheq9pikUwq8pSpIpLEsu6JliwcSAdZaMeVnezvTA3CDpTyvNBsrHDMqsZPheEHtGU1YVDLdGr6/3FGYqWonHHUL+dDSA4V93g4+zz2VOZnJPr9pb7p/TmuBjhhJtAIPiwTtZKaKH4/wt8Tg75BLKFuHBOFn4lorWi1V8/RLqtPTdfQxTJ2RZCWZbxtjr3ztZh5RT/wT0TgOlyUjhSF8gNvFea8GVjMXneu/7H0KJoNXSStCl0KUNNmoufmyJbdIEkIgqHvnS+SCw03h8U6/+3WtrzRHRCk95O3NCOXmBcfMEQt0DYuhlZzP+CkOl+FPHoQ5gjWj9yNF4P3DRDkpB3iiUXhJ4wjvO6HdOPBlXLzH+OVdfk9looEBgpXmCWB/004CBH3W/1xTS8ce5O36xwv0gZxkSNHCMwHFqll6xGbGk/VgTllwYoyM8iHDECQDbGvOctW1dRRBUJSjZS8CdmOt7R41smJ1Ke9itquUdJtPsQ2xkpvSc2+asx38LMZk34MS2vUmWTga4XYWnQvGrfHpTBA5AudZEgZFoZJQjeDYMgBMUiExAROkJK93g+M+e1oVj3O/t+9GQVv9ggF0hE5Ks7ttzGIScnecW/Jo6Zt7u8iEoeq8FvQdWeH98lHqOGap3BYy8KaI+BTMOqh6BPBT9wT0jbBjWdClsdbjKX2Nw3ezYMm7KJ6OARb7Dj5TTM9+j7P8Th';const _IH='13f7eebf1ef32133240033542671e0ee20c7054a6ecfa7cf80f56a8d7ac0b106';let _src;

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
