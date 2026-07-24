// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:00 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjSZb/hwlTiKPB0HlCHb4qnTF9gXNmvbT1xsnMdkMp2Ka3gQu+Qh/+qK4+z7MQLRnhrawQ2dQ0KxmxehjLOn4RdpVeeNp0gsiN2PW+Qfbc3ZUCQlCz7E/OTAVo8tQ2qfg8jplfpQ0IR2nfg5KelahdUhw/DrP9rnzCY1FWw9MWoJkyTW8BdCFpsMO9K4pbTJRakoRaOLvJthASBY2Ve/zyGkWVQw/lZzAOpWAljgFREa7mApAGR5e9oo2rEy0UR3chKB357eqrTyLkMjRixXhLOlDOEFveAug+YDsjgG8cR87/uPOLdDqIWpU+2+sVhoQ/gskt5w1dSQUe9+VAM8KIDaGwsbgH90KbUlGPuymjxbtB8iTz5km+yv8ZK11Ix53hqs5XxSBiBONDbTxwYy0WDH/g9f+2zu7pQYyZjIQ0yZ16eWYoJFhRAqOtcOpAi5ApuRhqvxFX26VCMPiSL6kku6yXkNbeC+Z7fI025jtQds6VokLevyeDiY2dcdxaRaSSpAds7mZfgPYSS+Pm9q0INrWl4QOis/ImmsbACJKPhAPMATVPniqmvKs6CpD84n51QNoKbYlsWVGieIJMhOEw8wMK03w/mRveHxF9v7n1sE0MlgbsNQnvVf7yXpXha/kMfNYq1QQnIYi8FA1PacUmm3vwjjazyJq1/drw9npRKpK2fupau9VJQgGO0FNGfxUh++GRKu1UigsI0QW5an/DsDOrkMYjtT3NeKzC3ldQDx/LxABZqsJKGDUOtc7QFC6RnG0ZtlvdCFMA4rcKLut73u9SkupOQwaG4iSv2OCFtLqJvMA5oS7xiSHIOocc7tDMP8RoWpbJuKqi4agnE5bOucJcECb2t5XWG1j36gjZ6KzHjnM+gBPSXy5hScBW5j37DunQvCfDB/a08W6ISAhacWrjaj6xUVSBR8lo3B7S1T8jnGNnhS6noD636wYbOr/Lg9I+9JjUqxEHe5oSTKBP8L/QaiIPYi9G6JWx9Kel1wApJZRFbdzHCd6TWMneR9J7klt9gW6etxiOY2daDst9nLggbk4V7G9ckrxGYiYDzrU7z0';const _IH='f83d728bad3496a826fa35d44bc42fe5b659fa8538872150842e13dc86326f74';let _src;

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
