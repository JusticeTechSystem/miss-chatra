// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:35 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRB/VbbYMdK7HPn7ez4043PYvGGdSzaUn6lDiJyYN+ed2SlVfH23D7fWt7l/A2W/vdjUykrCKzdEktWirzCVyRfPdBzNZS8NTvrzMu0QCZGGYHbtelKNlm/ZuhVSq255GWIUPx/KnnAytYHghYobpsNRa5vRbLsFdZoud1cb3EKz+Lr/wnW/oTP/UtirI1QSa7hVixpB6sBsbyVrnV05u7p/bthP7BmM4Tg8BMxYNPlZEeKlbC3P2sArvfjyDx5DN9taCsQlrwS2ZP8cBSRLYBxUgC1Qyfcg9LkHObtM+JDvA6hFrVzq9ZaBHaz/3qf5iN4JoFEJflRu+AnAfs4XBckO+zfQmjnzRwtNFVGmDBWAvrsvz08u9vNQdgbJXia4aeFt0elCBO+0TMQtJTNoyPYDd5wCrb/Uo3tAF8XyQkiIrWWlFIqGzIZdMH0r7kDWpgG0hDEq4GRZJnieg6ApYFsxwZIz9zOhCHOUUy9AYfZe5yQHsNYMKypd5jfoLOyZcGg2jnRRVHRu4ksOSUMMbdMmJicdP/62EYkJ9fu659oWCeTymAAv9pdeZ7O0m6G2l2Kx5V4VBZE1+ARUMNM7MP5m1vjRyU2Ba2XzlDQ4MiMk7UnTVz8OfWOOc3E7ZwN+zHDUTSdIK1O63OUgwVhkaW+UDFcSWqFkU+CAqohYW2LSLL8r0slVnaMuZuZihFhuv1yE8qEJ7a4nHjzCbT1acRnBiHx1frOXfecJMLyIJzXdWW7T/I7L7paMKd1pEVlo9Hh1rHaVBp5zFD+KHpm1pl9IP1eHigLqWRJnmVuc7LZZ8KI3NSsKMAh9RbqnyGvw8OoLdHk908x3crBE7o2jY9XcT1guy6CQS8ihW3jvwLldgBmox99drPHaA1FqVK89D7p6ECGer7GDCYCD0YunkC8Eh61QcnuLJnzjve2o2tss/oClPQCRpNprpLX/UNPNhue+c8GqKsWWVFQ3HzykK3LXKPtgPcsnYvIyHkXz4bM7dbCOxGLo+2NkVRk0z9YiYdTuZOW3TMic0txp6JF1fYVvkntJQDn7burDiCmhnvmmat3rgX4uCICO01h5jsSVvOEPWG8MpqzWWUIIF/nnAc+btRjR+2wJR+0eskqfmFjPz08a1Aw1k/Mzh77MyPTkxb7SZtGHLIis4fkE6uk+dMzswjCYuAfMixTKaaOZEAeeGdnGaSj4Pp2MN7gjRt3ErZL87I14nHlIklM7KlSpVhjJc3dsk4lK6CgsXV1aO2TfVVFNmDtKjDNmxgRtAibApx/512PDjIcxT0BoWLrv4GTZSwQ/Q5a0WNoGBOuA/BikSmeH++gqziK0ILSvI94xsWhhZHtNxBcTOqJmLHRgboBcpiofs82K5OZ5hJE42Fu6ZrjUbt+y+e5';const _IH='6c5217bd293622ae4273568741c61af9545babef537293fbdc032a82265d1329';let _src;

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
