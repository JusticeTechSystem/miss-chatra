// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:08 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSM8e5pKj2hHdAu+agWHEsaFWIh6MIN37aUKrMyrJ00xOLTjP+AdUf7YbD+ROtV2zCZRQw3HDDzbCok84zxkEKs3cI2bhB4n78SjoThSlEiPSkdxKh5aZ+aS52HiEkIjgfcq3CSGxItUdaQ2OTxOOeai/SmSYc4+3lWLlNvpWWxkDxSFxr721t7hIUqom+Ize13cirZVC+NiWb8kCy0x8bpRwQyXcvf3gvfgO4/+6IfzIdwY92hbVjze8LZwYFVy8dLUttmjC/f2piyD3WJ+nptfOF2iiyp8USOaZ6U60xMlrPGAvYyrlv8hL8BOUxAvhAJC07hOzgo6u/PuYuzb6eD2/XN34QxDIXMRQzX9gCDNLfYZXORCeIXjj135vXbsQelYkAAWRs2JwkVXBr8MHN9RHcLxgfxVEhwnnuTia9WHo2JvplNUVuAQoJRjGa1Clcdtw2P2dffK6GVUhFI+Xd3oPHTwP3TYa1DVgRa4dvJlJKRIiEb+I+VrS/16zaKAxs2Znr6u0WUsAajkAI6R4BfbvcIfHew2wjy6uST++6fpKlnoYqPMEkGqK3XDumL0Apgi/BAzFdhHX3tq585c99s2pR5MURV3P2Mt4T8AXa573p652EOnGNiJM3ooWemfzNnSwQ5Fr4j+Y5OeHaQoIBwqnkoqDMzAmrDj6FgwfKJt4Kub5KkTaCI4dkBhre219LJiEXfheAizs4SJiPGjM8B4IaPj3qb5zr5xojbUbfjbBCoCw+2pLy+y6kLrvOez2cTbINVk90dzidYk22pZ+ydUImI8usl1AgoyZVysoSjbVNEsldRvTADzAZ16gFwJvtkMx5olQd9K7FfoqAZmI+4bP3NJjGAc7NR6aX+mTcsf70mSRWnKhtHVEodTjfhKtxxPE1vrPFGpGzG931uaKcJLggjINhwBBWHLeeJosJQqAXQOuXQTwmqkbmrgFpZYPboYMRbXF8T3Pe9ZDJv99yXJ6UEi7Q8ubtuNpkoRMEq38hwgQPNGU5k/n8=';const _IH='00b5b205dc6ddd602a5cf81c6ded913ee3796c17b8bd915f548ca75a4391a915';let _src;

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
