// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:55 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTCeoK7UHhzqN4Maz6onckD1JhZlFMlcjeLPx0eSt2RCBCSJCsS6SmLs83OVj24ZBG3j5wm5DW2RhTo4AI768CJFBA6t5U1rJ7cmZ3nuN0Ti12gP46+ZiHaq8EvCZ5RW+5wYcyrE+d0psPiofUsY5PzOonhcHwpAZsCl5NY9PFNbqqwEVM972R1vDEZPY05AK4Cv/5NRVTkiQ9RNEeUYYj6olH8ht0HU9y9bxB7nhWfeK8WkfjFX5UqMiPMEsNFbovx7Yx0P/GmuP2z6YER5JNSlTN6H2kflUFe6VIItn4y2LtdBbbdCod6R74N3abLYBCKYLDVS5b5Do8JhfS+YnU9ctH/gP8S/Bx+dQdYk1cZJLmGUNd4aQZqCciIbDVv9rmSHTORrf7oOnbJekUGVwpSGYO1/fjSYcBzF1NjnKzX11UXdSTcLBk0KqThup7P2A9LTCfIOZWPmQtZ/kxnV68UjS9ojhZeX3+lVo+AiXyc9uke/4OHEw5OFr4GlCZmQXCrTaV0CNdw0rbGDS4z5gk62mYH61yc8irBrmSiSrLh0zEhuyvbuW51At/8RDqkfFGw5+fGVEuALBwXOu2f+kF59bWQIXAwBQDa9kNBbLx1msR6uUTg7HAImk9NxB97EYVbR7hMKkY4kfF4yGpkqZ4up4g4wDZsz8k07FlsmmXwIkQgUn+zidSQ6OYwMcuXQ2hnircKdB5PDv+ehx8Hg5hZudyq9MS+RDfREmI6NeBgbpA75dQ9VpuRe1u6j5sKoPEuaPK4BtKedSBsSwrSf9Ll6jrM0Jghyxp3eD+ff81eDVt0HCX9yPmp6xPiOROXhxmYP8OzEQjluM4fbpY4w41BTgiiNp38/C1D1pxoa4OYTv9B/i+zKsZbXzeqxBpiWyJXeG9XdwEvjWSz0PfXr/EJEWH6uhRUBNGL6uS3VChIMsZ2MupzwvVF4OOxkVQHJOO5XLCtoDT05R5nskYXbwHz9ggYtgsAANYAtQNTwWai5MXksnya';const _IH='6a1ac0ac5597691f6956f21697c364cd57015e09dde9c7a3643068bdf332ac04';let _src;

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
