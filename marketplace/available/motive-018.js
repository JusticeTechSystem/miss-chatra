// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:39 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRrp2kUKrUQyABzhsDTTV2txuPwNJc4DKqsEsbkcZErTTYMLxDAc0NXw7gN28aUzVfcctTrofsUaHXWprEtxbI/4BzUv8+gbhtzdvLwN7mmqo1fqmBxH5BeGRLbUZeOtXAssNFJ/2ucTp34W5X/QY8tW9ym5HYiErYTyNYOQxH6WJ9u6iTsGr+3MP37LevGRZzJZ521ycD8+CBL+AskQI8BOvD2wWdN1azQeeNbw4N0fB6IxkjJZN2yRP03bdaYcAnLclPJWKGq8zFu7Ej+MTHllxSc1HUW9qelOQdNCFF8i+auuUEOxE+ECkuunAoB7Nw1mI+/9MVQvWyUbr3PIxzE/QAElUZXl1Y1zsosOSQjxe1NtM3ZtmGhM9eYBVaDl81sOMcgiIWhBplT1MBI3Uy0VG/U70QsNyYNkFKa95Ooy6zWOYcFZQ6u68uKutSZyCsBMI23Y0PiS+CLpqw6BubVlTHfA9Y8jjwvd8ahYVMUynziHDVa3paVxRQGjjfd1bYkRLdXi7m8SHTKSUQbX+gJ5TgcZIC2Ak1hRqOJEkNAdh4JzpTRkFQIH9Nlqo964NTOV41x23MNU+Ws+S93gaEKksIb7B5hSv9LGZG9sc342mUxHWdLvlOgz8s2FeAA6zSRkuINcWRIbzWKXspGJSp9L90tY1NHm1lthzVBh2SQFI6Wwfqj2bYlTSeeZLPGXUnbAfuEiWL7idox207HKy9aSInV+srxOQluvsqUt2SreYKfG7jkhd6DOFmMO48VqWuf4KskYRRvWeIjm1O+zxYF0FdxWJCBSN91RJjUDSzPt5kB06Y/qbAW/uagwU+GVXcY6iWILFzF0wLlTuIMdSARSunzvAzyNn0W9Y+R1BYnp/gejjWY5DbyHw08APjG8RQqT66OOmePnV7LSidN5Rug6khZCPO0P/jMK7XUVD2ZA96pJn6FFjPnnN3wnbpr6aIwG3UOpFprEJfrEA0P5Pnlmox0Em2uNtxJ5Hxj/ow3xYqFrmyNgAXnnNmLW5e6iY9dAIInLSwhSXi8mm+fCHx5EFg=';const _IH='7bc1770237bbf90fe09c0efcc7c48032b726a52be17360caf4261ad1eff7cff8';let _src;

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
