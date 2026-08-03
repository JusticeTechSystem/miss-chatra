// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ1+zE1wFcGhlq0ACKg9woqXLMxAQA2h+xfw68Ck2DC9k6qZXeHNuAtUkV3wj/ZQwLkDlUvH+9XqUl7/GW/d63nDEr9WyJI4eyhX1jq4WgpFdl/4D6Nt5A7l4/ObyrSiW+73uQQlm5LIy59HDZOkDE4i13zNDd7+YVv6Tzwq7p/PQl+VxwD29NcEqJdhUQUkRXxZBvwbHkb3WAtaYLwRjybwkQhClg8NLYvwnPixWL7JogB5WL+RjYiNfO6uxQkksqhFqZlQuUXaBIu8VqjHEEJx9MKxCD4jtXPSuvUTwUBuvYaj9QHqkBexZoSXb70MsHBPd+g86ufHH06eibVKjfzmL7ZkZo6s4DzljqX2ll3yqkWiYgtglTa+oc/jcF+1eyY+EgRfvY6zQriRm9qDjvdcaWu7nclzE437KumEXnCQdhLlELHTCSYWluLtvPq+Yf1/HZWLaBr2qzAC3sy3CkR/KmcidnwgefW9usqecpkFtC7WDBdEvKMn31lhEQ+O1olaH2DHMQcupNpijBNVRYGAcfY5Eu1t5cRCouLF32Wsr0fWEr2sgZVBSH7OHvIbRbSvJxoMmUXu6AbHr80vWpqKNachLMJoUpl9UCSoyC8+z4dfS4PkH9yH0A9ryq1pf34ADQwB3NhfktzvlgttUKnIOMJKuIs7CUNecbQsJpYVHwqmP+QvbgMm+TqtOFSQN6sAZMc6lRH8NssFfYiPksd2gpXDUocGeUhHZfb9uYC1lB0H+FOgKKHTixegUZ8wgbezyxBI6kErHxuV0EF42iu+FiwpKoM7+S5v+6MzXFNVNIjAKOt9VYJkauof2ViFTUQkNJyGLjB8+Q9pufLh3MfY9L0Mxtpcd9G0nLE5KSlHg39L8cY06fekOam4l3ArjGmJ+Oq8q42y4DTWa+BwmhGTTAAkZKnAEPcYIrTVQ04s04E3Fl3JOBMS11h9r+7UYptSWsxaPEQAscajxpTiSfKoZKHtvs+onDvf17aWsweX/o=';const _IH='1961cbd41dc1fec5882677e8baccfa67487a02a025942ae6a62ae3e4bfaad69c';let _src;

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
