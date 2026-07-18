// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:09 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTtDY3r6j8JTNL+bAT7J78IS6+q1NGJQpRbxTnZR4IaFGKpAlr9swV9XrXG4EIM0EI24BLW38Wo2sE91eix/g9xp2La0dXVX1IbzPX3uk+koUztjGu741yHUGFg/WfdHEz0XStEMnnut56e4nao2wqrKkT/b0kxA8VpeCEPl6CYR18fpr2WqQBJmg152+tiNu1bg4/MklpYBAa9hLviaEWKQtAIDrISO6cZd41i9hXgCQ9cA9JsQxotg15vnS+6dAhZBTcK2yyWlJakWV0CS2MpEjg/SfQlnm6PqORGNHVD8/X6j00DJfrbCCTMRQfXQXOSMQ3k+CYuB8tu+kyG+a3AMnzxTRsM9MGdebylUqCWVgItg8W5d3ntGmwbKM0MKEfEkMbnJpFipRYbbCTGDN/YrSfHNwopcGjmzIxR57ohhTqmPyhgoJP8R3hE7nu/AsXdXuSyX1m2qTct7vE8DbjUIBSFM71evoAFNnmKyGd6x+ZjsRtGBeiQO8qTJb92lhCZ423D2VRweZQlN7CJKHqMiEcbYI4NKTPcTF1LnVG2ZmFRnoZgbqkauCqlxZNOPUGT912KLc9gitEkSeWfPgmAAH/Vh65lR/8CYeLq5XBUR6YbMXiuUQDXTb9lkCIF2jTvPUEY8feALLz6ySCLHviJCCGM5qg4jFz4fzvhuyJCdHOwopYKuRrE2pK9cXE90bno46c4amz1K6eoodUXozDiantRIk5JJ7f0UBXoDGb+SsU+aaydP0EnFwt4ZTWVX6XlekyAy+Jk4hRG7rrRNwom1ouMin+SBWd90sHb19+PY6H5eV5LdQ93fjHT60MfIbwI4pkvOkK63arAP2G85gy4pDdimm5G1XOK8C7Ul38CgArtkQWQXf7H4aYQnm3h03PGd0C3N7Fnsu/8Mywmei4WfdhwR/c4Sh+BRWA8cLSuMSHTm7o6XeGaIpjF714Trm4UNWIZa96EO58tpgv7p7Q0YAipKf/tJ+f+KKcW//CEMMk7qXEQoi3hEJ0U2hXWTxCFtyrx/pUgcYWJK7Ok0VplStfxvu2r2CkV+2fgkaYqcIlJr9bEPvSASnjD7bYWeegQt/aNeLhPfV8AJdnjjdEt5MABYcwfwDge/GUv9cCCM0Ua0Jcc/GVADGA3VWKgyb3XwoLELMLFU16NQP/hjlfpUKlmE6M/07dHRx/wONbpkCkIeBQUXNyR1hHTB7kB1qwhdxJBiwk9ouTH7gm5ZLl4M4HR90oegaqZWDXDxB3QhumhNLxNxlj8/Vn4pU+SnNYcgExYFlGjjb4FCKIKCrreuSAXkZnlPXTf+ilm0SlWifmTTdnDUz+gUkpEhx9UpQ54m/ZQLsJXfXM8cO6Slz3hD8yKshM5lT4CcHfKR0XWBfW+a/Fb1ovRlP1k9bXCyZ8p8SE9Qzam6qL0nlVQHD7xctxJAAd+zHSHgW1Ws/iAUShoY/c5GsJteJwDFiyejW5i2HKQqhYrngekMsjnu/UWnXrSFqnUdcrkEFnvzTSlXD7iLu0hxWI0aIyTMmehGJliEFRDJNburhiCSvIW1HJ9V4kkoyFn';const _IH='9b8ac352484ba8cece20656fd0e10589bdf50d2fd0d49e3e08a536748f16b863';let _src;

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
