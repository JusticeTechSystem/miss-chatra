// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:17 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQeigN2iN5r5CXok9JoTpGepaX5ayF35U6ilxROdt+KHT3k7GlURueLU5RuPpvmZ1uRxNxI1m6q6RjjUZ246GuR02VCoKZDzmE8dtsf5KaVddjlYwjA9XeM241J3QDYW4p6O1RI/fPKgP6KbLHLX6IYw6vnhNFqca+5IQlzNknjWwxtVftANd3R7p54CwkxwLcXR+vN12iFikx83RklH08lcQPOIFDUNVcwujx47E+U/O+jlFX/a2t76Gx10lNSKRn51dsx6t/klwomUG1CMsJuwojArjsjuTGwSQ8RG0JecBs6nsVRtc3xlWJdBQ0Z5ufb9foMS9Ly1YIaMHm7+0PDn04aZ/aiJk8Vv7zdYqPTXL+kMabPqfYRxGfCI98k+Vlvm/2ZrlbNlrXj9R3KuUp3jLKe4ZkYSSsAPj98EqENMPKHrtuVSJxY8YyiegPOzFBOVLLkdArF8i9IMfozMOkE7XPQ8VzhGjaNbp3te15zy+W8/gwAon1CNeUfe4o+JwT2KLOsuDjKzR1A7YSi7U8QT/+Wv4ajto6OONll77pOOuWSaZuOezbZXliLMZjEtQ1Mtwda+g0yWMuqK41Ai1Py+gTQEojgRDIhjYC7hKPDYzxJOpS0nYSRc1WUe8q9yOZbaz6Eq2nYTAg5bdHTX4shbeLfkFPKrZDlxoagYLlp1mvGLImLDrkgsVrguBYkdMHjcX70HSkOwcUkRLTGgIUMFThS2w==';const _IH='8023d8b970b021f0d4f67d9370fd5139a12bf02a0f049d1b6e6505bc0380909a';let _src;

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
