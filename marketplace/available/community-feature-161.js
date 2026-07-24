// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:47 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSH87cWacAJ67VCQ0e+wE9SgUjC6Qhh6G74tJfs0+r96stf16x+tSBYvvmBcpUQgS26h66Rj3WAXG7N3p6Kf7SxLUVuYyFkd+ApguGxBg1s40UyCdV1FBs/yyEwnrDFYB3VnqmHFBXEnVC7VMIBtzZxTAEGILHQGroaxLGUMr/bZ6inuusYt7w5OlkAVDm+Z06migXtROugTogqbhrWBh5u3twJ1fY3FRAT8CRJctEKhB56heamSP4Ju82MKKx8gUUH8OAaHngl8WB0qVn+VVjHs2oHejldXNMAeskBOBRplRKp9Z9/zVXQmDFcb2Pn4Lc+7D1IMrySYLwTGf8vRlO1Bxuu+UKAfylJX8kXaWdzZvE8mFHn2+kK+VP75raU9hZIHEFjXrNhFzeJ8Sgqu/Ns3Tc0q3nBURjxVy9A2TzihJ4veek6f6RAOrzrAesAd1Loo0Ak/YgtG1zzGRZtITdZDalQE0n5EV0MmYFaS1CQ8ni2RY1RNSwptKKFVvWirQ7uvkjng0t8hg8zQJLWanub0JASVNNaDgq70sUlGcwkw8LLAIb0WkJZanBd/CC3QDnOghS69IvfhxlGgxqg99qsd2NpviomDmRdkIh4jF5rN4Lda2fN2Xf5Vlp4/xISGIwyw88EbW707RSMz5ZrjtYdEhC9LhCs2KtfR2FiTgjjCuHXjjh8oNQgg2PKFeDU5AyJNa+ZcwKkrLeSyhoVfcgkA6fWD/CSwbQ=';const _IH='0d64de530dbea68f0c9e7b675533167756e9501ec72080dded9973760e91898c';let _src;

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
