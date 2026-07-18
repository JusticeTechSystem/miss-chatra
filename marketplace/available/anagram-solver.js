// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjTBXlXmngUhz3TozfyVpKddcMVG2NlMT2JMD0AvnrrHIgNfSfOaXJkPommx/6emqeSx37en5M7aXEAosx/sv/vc5e3KMqgGq6R2KFBCUQFIzQE2V6YSNs6Z0Ya2KWzQ+4+VSAYkjA3hZTToj3Ln9kKKc9Dq+iSu+WrRWDbgIp+HTMWe82QAa/1Apy3BVZxpVPH6kGSU3KsFMmwZUjDQlru8bpKtwn3ehOKPzJdxVH+ju1Q8OAYsNFO79QFc8b+YT1sZzFqrzVWr+9Js0cEwqIAyYCfo9LM7Hd/Y5q/wr8FeG4rMOr7z46eEgaGo+40xUVweHmPFR/r1OkFu9I7oo/Wy2q1MDaDR5cKnu13yGz+YD6pB2u9uPB7K5hgObaeRsWr3GAmZTdoIe3gMlcAGxfRicL5EgX/fAZkCsTlJ53upLdvZ5WbNSG5TbC4wiyjGV1vTzv9q09DgV29fRzKYDu8fGRh3GYf6E8zhtPM+CA3j1+veUcAAgdERCxmPXFeA6KB3vwlo8sVNkUJJGLjMKe6l4GEH5E9I6+f7s5Ro38bFvcvBJlILnm+1VIsi4N8xTVoByMNE6/uPZmfJstzi6N/8337x4CzrS6G472ipoLD9wTcTPgqoQdZKOol00yvr3zduRMOjtt6L8obp/+FZyFZPDzMXb/2FMJS6K7RV5Yve5oRCpcRDJlu08F+EshTfINd5ZUE7hqD8WubncGMXhoKUIgmzm1NZ1aKbAbqV23wS2kCAonyJcjM5ybS/ZlkpplnEcFa2KAaIY/rZC5zJ/6I6Zyxzr5d4xwfNq4htoVBDa3I1StfUW3viID8vKp7RZhz20aflgBuatbFv/kN6F0tJhQxLmcLwjJkNjqjMsSx5ZsLecGi5gCH6BY0ZnBn//SphFYouDCOyzEOaAjiRWJ73QDFOl+rvgSQzLzF20Zst2KSLnZlncRaEg+8ZnaI9eU5RCwDoYHHKgVaOUvU+TkAyS9aJyPAMu5OOXZzeCBs=';const _IH='795f2b4a780c7b6db4bf216b7366c9eff11c031cc418db353741a479496feb99';let _src;

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
