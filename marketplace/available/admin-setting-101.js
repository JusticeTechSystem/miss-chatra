// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:47:33 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRRIjZgxRV0L5m91zxVVtBWETzgoYQgpyYqvW/cXPmZz2CqY0P+EdQlR31nKii1UggtOoNlxj3U6D9o+R+tp3QqFBvzgniniNUJ0ZozRQ5wmYr1IAoZjZIUfKXQbpTZZUmASqPHm3gQlEURxhs9ZuZczzR8rYdYG4YOI1vY0S5OoWofwBI36Ao8iOayvS2szHYmv/E+YbHZSszFeXeCnrS34NXzJH8rryqWabQhdc5AUQLZpoUQVg9mPnqNT/O4B7h+DKmiwxbp8uWEyDeH38C7sVuaxQe8I1ZleImvpjE6YF3S5xV1vMzL/J6Ao270by46DFAwxj+BJcUy5iJW2/Vr8okZEDancWvhXK0+4X5q+wr77enFvjFDLR//jV63+PJ8GNudS4xtl24JXsOMTfnthU+RLlOKvL9PtBjtLyZonHpPO3wI4eZ0YJxC5xUunUyWfpwZYYTW3IvLn2JWbB9sj61jS/Ec6uBgalpFfpcNOS42NN445ET6PgBPz30iRVbOmqg34mqJX6kneuFs6Rwt/glOFPx1wFctM8R3eiZIOZWWyg4anEVHbWZ/6/nR82WjnOmY7vKiQH8B5P/0fkWHmq/2RC9CMGUKe750N1nqpu5WokO6yJP3FVJcxnRgnq1kTwO5lnV9k3pW9C5qsn4hDX7c0gWusRBIJOwf+/jleaKcSvqPXcYIHEl62BSyImMxXj6Uzj8kVtgpU3A10ltFtkMY2TQBp2Yk80a22OkJOMQ2uJTaweUZ1PQSt/sWg9OjPGcfSCDJxQ0OG2L3gtZCt18ZV7HE87kWu2MMLd3ctQm7rLp3LHxsgDnxisApfKhRJ+Nprc5OsUXBtAUESR5yQCzK5WfCuBGzKAZaVJKoe2ntoxm49qOfqVgOYrctJH7v4dMaDpZ4Fa8/wkZz41HaB5GSPaX9eduMcExzmtlPMSeuo9UufOc9Q0GkdGqx2kxZ2rQVI+z2PK7mbM4GVe2kLWxUicx5TO/ccFkWcNMahvDzToO3wbI/TsblQaVlTKFMwD56gMtcnQ==';const _IH='8f0ade92ef07bf4713300b9d7e1245ce23efd0f66a464aed7255e497c28d1102';let _src;

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
