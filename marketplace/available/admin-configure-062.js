// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:40 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='jKb66Y5m3BmsnyA0H/MfY2vbjhVy3JxApUe+uxicPBnpUsUdgSRVfnMF91XiuGFIHM7IAcRB2o4AVXxpes6r5wjSYwttQXKUAKDrwzSxP38zeFlpn7Dsdj6mAwp52a1SuvaV94QkJhPzG2mJt35WiXPEun/HKYt7Wcl5KpwmzPoyK8zLT/UAa+2WmXEpAWfCurwKcTkpAhQYTEaU4WAjxN3uLvhyOoEQPjaSiEOruKaEcVjR7w/S5PvWQPlLofITmJd/wxKsAN1FAWY/mfUtrBbWJ1VzgOAF5iAneqylq+0b75LpSdddW17HngwSWeUM2eAuEVPOKSlU3wX+DgxtNf5/mM52yqKWkJ4EQFo904Vc+phSpe5uAZqufTGwB34LjOdwqHIOgHbtcKqLcI8xL/3YcZNtaHrTaQ3vdyxZ58hjHsTwBuk8VT9Jt/kjlx0LNYrAJ7OeVGPMRqFf1jSisowJT8i4+d1Zn0r/4mTELvBLBwrsRMC39Pg8pBhZwW6OP4pRi5GPej7XgoBWAyT2BmUEPr9bNWR7anLcjjA/UDgEYrGE8gjEsYXt6GeaEJfqHy/44FeMxoDpizvgMPA40q2Tr9AykSGDteLZO692fN1Oq2xwS+b7G3dDpSnXawe46tjWdNYqYIOi/lAEFY698eEJZekMa/VMnW2edywo+Ir7jkLZi3+sYojoF0BBy/sF6pXxvtm8AmQAhwhAk55bZhTU34hk7TZ6vKRsUgFqqEY3pTNM3C9HNX9zxqCsg1OWDZZDx2KDkdkmz91kDiTR9fhjrU5fj+r4l30Amfb5vxqZl8vjaPzmtoFjKPBiV2zpv5e/6/j0GITNi6uZWtVEJ9UbrTc6GvZfKBr0MgaxuF2pCvwROSG5a7zT5iLjRHyxx3FCy2iSWiPBXiBhegfXJT4ldVJoyPmDrVB2Fh4w/IjmwPgF4tmxKuXk5ICmcpzSKP1OjbIhAUy3hXTeBwEo1rbFPF45W3Bd9YXRao/la6o/MyaAmyL9LErwQdQH30mJrNDdDAyVHU4hwF5j6BFgvR5D';const _IH='34077e3388e19554f5e9b3f84cb37c6ced511b718f37860750654d91c42df810';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
