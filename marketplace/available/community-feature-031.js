// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-02 12:36:13 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='azA+TN5cju79wzp24EAxOjM3i9dXurDCFoSHOp6xJK3wiaJNId0CBOS+rVuOBT8k+PdxfkqdM2JPLlAk97aSg/LUY92H6MRya7KJDB1z5eDAOjIdUut7I4DkVZ4vXQD0q84Z2w0pdn8rMLVTh//gZnQSq2qZ00T4N7CD5Qx3G8F7wSkiuTkVF32X0BfhmcYkAgPDCLCcaEacZrY0gOttFIr7pte/xGQZId8PAcBL02C4fJ7NK3Ax5ek4V36HungNFSVlMv2zjHVrxSdisEklQa+n/u0roapn2GZWApAFRp1gY47gbrCHX4lnYvRZ9iP8KDEBVNOoEOAzcwmcVVFRg5ZrBXj80pCKZuUTpFXdxBvSZSclv7+p50+jdQyKeTLJ4lKS1GrWmQapSuzZoe53qYtMVLzxmAUPJVilmZ2Wdyo/EDk/+opyC1+jgzna2c6jEvESPjqZIvKl9o8/oKyULaYKOQL6indqk0ijrVlTU+mL/tec8STfgau3gWoYXB8TH8kaDpFFJs+SgEnH71xNLuP2+9nKc3se7qAO/xeddwyuiix7jDIR0heXAMKe9+ItNu/KO6i9+wK4Fo1+CfnbtXDB+LqWwy2KEz7QppIwhh1K70QDJ6tlOqRVT03KJ8rGRQ53IcE2hvXQ89fM5gsDsFTPeJGa3DC68uv7gfN/aA2onu/MZTUROOyjSlffpaMFbeI3HSHRqAlEnvwBgAyCnjnxtsg=';const _IH='5ea2d5802852708e88f57929998048593fb0289f26e52141fc301247caed8d72';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
