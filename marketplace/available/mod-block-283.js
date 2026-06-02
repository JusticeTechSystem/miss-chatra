// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:35:47 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='I5PU9OJn2yhw8XsG7PQ9UwgiyGc/ZMw9CZXlbsE8WzhB1Txq2467GLlwNRtppK1Ve6kOcZkye2UsFmVmJgC05HIiDGIZKyJF+nnpYqvV49HK7r7KJcpjfvXTyPlebboU6njgmILlfATIHLSpoljVvN4ZWELSeG6j7DZRI6bMzKfANpbJ1WwDaoLL44jdLdQ8+noij43I+XNkK4IxX0RO1L3LIJBIgoazGKdBpCKHCA36dH8NTG7X3kHVUe8apfxSjDcazA+ISs7qd3HJCxkFACsxlV5P+n10vr56yPISTMeqoUZ3Fl+srI0u4awoLhggOp78j7oT0/0RWJ90x+lWNNJ4ZKDnBWWDzp8FBcOf/0ygiCvBWDC1LBFG3OMBHnqOZ/08sFBymQ6utQn7ljJKzICVzKWiiIvjPNVl68V70VTaL9Pw1T/QOT43kncyrMpREYJ6B2cPHJlwT68mQ8OUraVVQjqcV2CUn5vxh6q1ceu00FgHFibnV+ihgPh4845SY1kzvsrEttOobs6aRZ1/VYvC82cJMs47gLPeoc7UC799JfBWigPo6SGrHhHOP6IjIUpS+i8/e+HR2pKgWPylVIlyIRYYYh1cR4mtkz7mRFtxu0Yy2u+k4qCAqikXHC+nLIRIn2APQYuShPraVAOJdCba2ellUYlDTfJrRE+dM8gNfQe++2XURB+6g7q42AW+UbxkuovqeIjzN5pHxjJI6Mc103ZGJao6fOrNd93IQARcgGVTwikneMe6vf475rC4HjL5wAvSHZF4xKAvK49AXNlq54zE9Hstb7hrOjI35CQ1r3F9wOJFHNrb2askunkiLvS/3HF7KrbJU8PtFlcFzKpg/8NjJgRCN3CtrBWLpVu28aqF9qazi3gszrMZy7hiZ3dAUZE1zON8eIYLujX37npRitVtKVlNpFDBztQJLEE8W28iv7odmW0i8HFEwaJM8AhdDazjIYg1Geh0wd/PYS3XuthB8IY7TEf0MgGZtFgityTzM5LZMayWfuHFwliB45piHUzcQdeRBkY5RRSqYZESVnn+oIHOO9R+hPfn6FGhvvNQ0EXqceZdH/acvQCRFU4wkWQgL2eJmWF/mz7IqxaUK0zZ7mO1qt4LZWpmZ5BM1PoLOtJPHX9Fh2L4YZcJdMDBJ9kxsCGcXbsy1HiJHZfgi64jOU6m/ZtdjI5dEi+pmjVJg26Wf47PdymwdQjH2Uqc6Yvw+gtzwjfnhQBoTRqYhwqY/sHvYpF7L0dE9HymBsNs1dDp8mH5T/EyB0bLnevfJEY2rVuHIJE0jEbNRNQaetKtnro09ycCOIhAiYnnxqTUf/YRX4wdCbImRIgvqNG80NrukMmg6vccy2W15FyB8niWYM2nCW7hfS4a';const _IH='345c0fc4f9cd2619c090590466d556f1da5088aaa87dc320b4a9972e5d6c9986';let _src;

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
