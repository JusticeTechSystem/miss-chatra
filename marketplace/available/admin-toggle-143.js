// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:03 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTTauOHXcXDDwFncbWXgi2psLJW/nI/jYxeMBQ8ZHTf1rRVD3/J7Edr9LwVE+RpliSlWISWDDPItlJVV3HOPZrtJ5ELw3Z5Ia4sRAWHcN88L9mhACJXnhLbBfTK5AaLWsMEp2vqOOu8yqwWgg05LhY305l+jIU2uhCpxtuFckhZeNP7C08vRLDHTLc6l0zilvl3qDRCjJ16hj8169KYmmVMetDNIwYwXW8y7ECgpPk5VlP+IZPlt/SAnnK+kYmZg2IMjtlGbciALjQTmytqLz8pGwW4byMW4ozQ2PK4lEiIA4HoIjoy8aVtSfHl2gQjr03ral+sTl9tHj6xwUE/0y3h2fsQMRXJfTko95J7gjBr5C1k7OmRYtzuCbWKHelYGcgpXpyVBIR+t7zLFNfebC1Asx2WvBXFLGDfS8pnpGt3plSV0YkICpcCKx/Y6sXQ6ZQfNBFIN+ZIeFyW55xi9MsT0jkVhScq7ArFjC6kES5Y775dmUZepo0X71AuVfH7/xiNP41SCT6Y1lgyP/HqZvZ4vdW70ELLCliY3EIcKnwxa/BqMMW2SXOaRt+GW261Peaz/dMACzZj6rRwCkiY6T4SohwK1sTHKWRlYNx/Kd0Q6dEvxD+9AfYhzdUhyiAWsbbyuB+H8se+STLUm3E5ndUJrtkuppOb/w2/D4F0kG0ltjuAmSzi6Xm3dmU3Qzafy67KkGQ5/0uJgrG9YFSNjz+CgJbekj2I96eGsPsjhFXGnuFbECsXYllIYuA9PllUsmv/HU42FTZrzqQtdyAnB5GyMw07ekk+Xxqz7mRmS/uJwz1nxd0rVdeg503iusvkVAnRGCnzjsQtDqE8rL5HCPW5bJewdTAa+4Y8SMSf96rqZJdaIiwBTaoDbwt4DoQqSJs/T/JR7pSIqS9YMCIwf24lbfeqtSAJzBZd1e/IHvsK8j61VB/3DcwW9Xk4M/Os/s0tlsF7kPz5q93o7RhtwfHlejz0d17r4S0syoxzKC//btm7+QLoc0/UBEY/RrlB6w==';const _IH='c369091c92a426c7f4e041ac4f53ab10f934132a5f0ada7e39a36891f439578b';let _src;

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
