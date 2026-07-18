// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:42 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQi2tP+3xJhj8BHRQwVq9IWPDdRQZS5VP+PsjBeSiNFiR7k40zhecbj9MTk46lN/RR0CY7SyEiIiGynS8PTYai6IwDA+RLxbPZXKg0Wg1zkEsOXrIVFkB0Dlz9rztniEAngxwnz3L7PsGR8S8M2U0GXO3hipu6WpaUuZicX1uM72gIGOAzQg9/aqbJWyUjkG/dc3lOmiSYG13jusAlXcvPvMEBsMtbtAieAktI5lbsLLoLcvTYAcUP/+x1CQXiDJ4UKiMAduuJv03Wcj3GAGOmZJqGfmeqTNFOPC/EXKbF+/AWL7U3KcxSlza8trLChjM1WE6pURvekmW+YoVfeZ6symtlGMF1gqa+jaHGklb5iUY7cwRH7miy5BJTCc0MBxQqjT90lB3zp2LJdcxRNejLXYKJM315VpaiPN2b9tMfMagnINwtJgWVi8DeINNtcbWuWVB48XZGRV/y7BZt57N3S/7wv8bzzIEL9irNfoEVhMnees8Gb4Jq77aw4Q3uRJ9OXh+zcF5n8QjDHqW90/bcv7dGy5vv71gPN5ojsreuJJ5wTPvqPBAcKPs/fR4lJH5xrIigadId7EICqbs7IsMkTTClC0Lu3o3JrVotWn/D34clBcWcPdXA7v8odJ+RKSZGw+qeGDnj1rEaX5m69dLTlQ1LHJKqWFPuhQshT8GTsXnQArn0BTnz08OZNCHsgsigV2iyLBlAipgZ2Jzq4C0udxMJrT9SphOPfdAV/BNSoEvuNxORUuIF2o7Kf7zGIgYlcTVRfSm8+nTLccbl3XAMfkgbGVzCLjziFw1BeSjupumkmGiK0v4ISyiIctRfyS8/Iyqiw+zH05VLDBztDAApWYmlml3cjmZkzKzvZfjz8+e8Mzs7hLrHbzlMkLNhwd+KO8OlyuWlypKpwglHICtPoH3xCPtbHAbECn5jhrQ57HbUSLZoC7/7YNOGoTgw/WtoPaPd4l5YqyNP/wbVHz2VqQgRIIZRM50+CG87R3t+p';const _IH='93a0651452f556961a58c3b9738611774b8ed0f6b15493df055e51497ddee534';let _src;

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
