// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:07 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQwbM38Lrsql3g3cxSMM/ltGOpbRixr/2w5l8pGvpLfaoxwhgocYOsg1+jWxMdTmcYmqpkfOaUzPoDPKH2QrI9s1EOqiHZhzUMBMvOsRbKhp06GWkYZnCAJ5TK7Diop/rS5jpezsA8SQDWLYU1BG6zQsum2rFBCv0mq5X9u9uqsjJsSBeW8z2GSV0AmUhb+qNRapDO/D3wvwweNfU9dtkg8eEjIeAU2XU/rxiyPMRgjO8iED21C5pJmObbHKB2+yMtLzVxyhv8fcpA7PnLtiu8Z4s+h08GmnxRiwzYyrc1IQsUG+muufjdifn7v9aD6nrFBp+9poJg4heR5/fNHXmHk18LOc5N/0Jysd9Eb6O/jHB1AyNRbzrVJ7pE1uQ+Vee6T1aRqja7zqM+cWrOfJRS8Tfyva7/VtJAoG+lqXEWnnqm6IN89K3JXMuo+0Y+OthzFyYQcWKkZawtSi1X8v9ugBwLOcGrt8xqLQhSl0STaWgTQEzQ97jXgaHBEWkgXKpqANJ/ivI5n0HPZvc3P4UF64zexzLIQ7SF31bCW80weatgHrPvWF7vGoHFC6W3fma4TulvuOa+QBu/ztOI0DpAO4cBFY9PWuENbaIUDvFFMoExIaoMj2h/PXlDGPKAWc8lpZrmz6zL1aBGke9RK2dYMW00Qj2m0eY+UdPW2pzhpWIeJyy1u1AiojggnGy7UnJl3CVZxgIvccTyRV6cWZ28OmupR+YxI6d8sJK4NNQjsW+dEGzLi2l1MA/09GK6BD4VAxK+bEOYFtuIWgLzR6B6driCHHpAG2xdF/DbUych0/zHthGd4nyxukRY2P1RvmUDLjbz1zIcW7oKRSJoL07aG7de2gHDiJNChRlAunpMwKjd4+d0CT73GkCWNWQeldFmSGuHvSH8KecDeXipMU5YAneD4LVE/1A9VF/CHdNFdn+jB7PUQ2zlOqIx9inkpxdSnGT2SPNbSQqC51Mkl8K8GpKWEUGK4EvKCkbVvWfr1xvufTJtAHM2BwhVQ8qwKcE86Y9P+qzhQhzAjn+3rkaSBLDrdexYvWEuTRwVeUNH9YuO6+vxNIi09uZwnz2PQEJVcvO6n++y3KSGDX/BVZnPZSDzTsLn7EfC7p8GvrdG1NdbMEfi/cBdGweU/HZMCKDESG0W3uAen8cEVrZvH0l2tEwCO0lvWEUYhbVfciES17CF1u/qw2ieK/0AjpUo0ZKLIU3WeB6g=';const _IH='8fb4074915bc0eb299908909e3117cbc87eadc7db44fee4bf06e99908d55e80b';let _src;

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
