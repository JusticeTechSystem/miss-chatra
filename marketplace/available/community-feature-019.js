// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:21 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ33JrQ4sQd+rQaOQPSiDnxssKuoN7t2R+ISnwyxp59vm3p9Q/pdiKEmxk3Sk0/az0GVP1kNXYLys0vCzThUt6c9N4b/IvylVxszIfoeqdeI9poJHsSuQF7gcYry+7NF1qFJjOJGCeA2Gb4S6UgHJIL1nGuUP5IZwbOxZs6HKrMAmUDl2Bx5kFItCnvd3GVf2bMvJ+NfgtyWf6nMe8TcAgtuyl/rdOZ82uV+oi4dBOaZW0P0W5g0PCMtjml+RO5gixmHJ4KfphCCfJ5gXG1eFx46pOIFR8uLvpkpnXHB4UvdxS69YMdBp6HcUGosE2SnL9ENl3AwsTsark8gUn25LD8964EoqwHJJDKThXz5TzbdZTuDX0U2MnK07ocCJVdgZF+jFsQEzXYKalDcrDPyBBK78s7DD+kcnl1ksBUBMkLifSx+KUMvg9CtNPJHsU/jhFmM0H4JPGLOJM/p2istu/E+lpIFkxfLuRd3VO/j7v8X6QeUd9oQ3u6H6t8W8mev4IoKkfqbXfqyoxVN19shIKmik0/1t8ha6hx/H0PBO7RD/ZftdKgGSnkWpLtF3jpQQcg69Mi3JU3W5Uc6if1XBxgL3fwj6V4tvexwOUlJxUdd1ZymQRq8dWMTgZBjBgL9NnE7c47EMXhEqJGZKzEXKTgQPLQ6RzkHhjbY4mfpBECDUQOePrRD7mQum8TLpbkOJqDdOq590gN0VFfMDUzsQLzeQQp81+RDCTi+WeoVYFkMBph';const _IH='45faa062d48bd86859f6ece42e2264c3c3d7b5bda52bc36bf17043af2ece064a';let _src;

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
