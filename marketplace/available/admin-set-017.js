// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:58 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSnUS+s8ZtyXeGDSfOUATsabdrHYrj1XDYXxRerl5sw6wgEHiR7DVmBZHpFE48OAEzL/TCGbE2TETvgAbU2vloC199HulHGwmFYs3iRFFShnvcxxYizmdGNdEmFkVHBBK6SXzeysI688FMqEvbtdvYJCo+8Nv173eBft8dI2vlGrblKYfQ+xAdVEcmZOJIYHct1dM/3JD7IPic61Z30aY66Lj95IbmgPOOkvP8gY5Kw3f2aKNaOZd1iDOe6MGsHdHhVcmsTvp3gG1FmVJWKS+QKk3oVhfW81pdq7WEMz529otpSOjz+xjSnIjpPxCsjohIemTp7x6zu7sSSOVELVWSe1trWZFMK+AL1Mayu32pxZX/d2Os8idL8ps2Pc1+wbGmB8Mh6imwizEQVLZSecxVSXdf+M8VAevG9U1jYbisNaQLZeMrWy51i/viaXgVn8B4tPfTTeN/7rW+2DebpWLDgFHpP3tHma6Gdn7Des53aylyh3wyz/pz7mCwI05UofdwiOX+YprM8HiK0nYxKsHTH6aTMWPf0T/HbdNoKZelpvValeS8Sa8a9INtWjbmDtUnoJmD4P/tVjfQzUgHxXwwih2LrT+CWzDmkJYwMtWrPP0jFVFU9QZiAoLHlxibpu/eIyQFWtwF5Q8TVxOfsQAAnnYereumSKOZrTgeEsNN2kh5GjPbKyw+zknE3mQo/xNTRwdbSutUZV5sWGs2SgERbhgHRaPIAlp08thPs6M5jyeofYzHDVO6jiLOyw7q79BoR5H6TxyZDIOe7WO2rlZMIxgCzizfqaHn/nxVXlsKhhb9Zt2v6D4zf7ZwJ/tiGsGRjfDdrPZ4rarS/N07hoPGgzknVJ8fJ9zvf7eG5yHbYBUV4UcVOqz3aqkbywIhlkuf4azLvnx+4XYsC9OQs2aUY9IRiNvTP91fzAB0aJyM8gfYjveBSKYruqX09KVovZQJpQDTrVazvdVfIAPes+vlRBvJFy7DN1rM=';const _IH='a0064af04e26ddf2a4c7c6a837213b3090ed216c3119a8e4035dc488bd828dd6';let _src;

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
