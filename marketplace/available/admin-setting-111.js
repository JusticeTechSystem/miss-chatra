// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 03:46:53 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='3H4nlcShpi+bSY6hDnMudq2556woFjAy8kVNLBk7EfZ/4YQINClbZr3gGTjISbgIdhBcnCoNWiCzLCkt4z2e/z5RSikRwfqtlT6uBaXPwmLEvSeNklKW063ZeNZNYiX7aFf3vymMNjP44qPLnxYzmSQpSq5xan1Jf93KDpan5TopkKqcrYR4M8JyDrZm+9LKg3tsz7Oi7RTWGqckISu4ycUuHJ8/EaDY4C9IueSHxng+2qWSP6VPH7tRB3svNUYcmfiwl4MrP9w8vqAB1hIFZ8aEfVkxNT6sE3aTnzgkVtk83sNnQKvaEeDw0+SJy8F1eSEHgzMmS9x3u6lqVvxNg1IEQ7REZEAb/dWPQ75yGDLA0Eb0zzcbEnX9yWByPtQoA7QB6fQIz7deaYvPJW0JAizz7HBep2JvlBJW0kkhsor4gB17njzCvLDsoqD65dI0SU6sP5EHyMTNKifZuK2LNMRpcFWIHla5u3CoZ7Ihc+ado8qEXhErfiDTp0Ui0oTfUqtnDDoYseKhfvry7iGhKTa0zS/lk1lp+6Fe0CQyWHNKMkYyJ/LwLasQzr6nU5PHAgYyyIzrIIyp+mCJ6oZBWLo2LH3JTglxcg6sUGtgqvq3b6FwLts4vSvAPOLaz6bEg3+dzYh12MjHVfTW+S0eCJIDcNr3RVVpyb3ToV6U0EIo3CH8kAtdVn93klmbEoCju0M8QjotnZhYxFDSVXOqlCbGx69otN5GyZ1QlWGbzupk3UfYqCoNtxnv6RPLOI5O/KuYejU920zK1O7ya6LBATFK9DCqI0Z6xynQdr0Ld2wfLVgbdcXhHhhy8bnB7F00Lf0y5XItAXCA5m9Hn4SP2THC3zivCxV62avcwNpTTDdlknKkM966IClKNDX6gMpJiDIovR3i1PKMtJ11qb6qDbr0UpSo1h/2DhKa1KHZ/KFwRVwrtaMj2FF4nCfffbuFXlOOaU8E1m8jdGXEpAAP/P6JF8ulWvP8zVrKzF8u4rOYeSBPhTG21GbEnrsQYlCrg6e9etloRYw=';const _IH='eea7f943b5633dce0837bf988b532c53975981a2314b881145fa11c15f4a0bfe';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=600000;
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
