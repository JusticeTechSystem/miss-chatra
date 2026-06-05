// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:57 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='LaEWhP8X7+sffBNkg+RWI5gZJQ8d6Rk4YGIc9qMbtSVlE3cuN52TSDWlHmUOGIE7Zpn8BjJEdwzeKAwpMFnUKQTuMqf2wmWiu2wnZXpy6sfI5mWwE2+GXMxF8WOnqKuaqJcdljZVgIrmnVrK7m/6H8BXbPSj4fsPUkha15nuJkwMWvJCMs1b52Dgku3lFBOGyjswJdZ/xqEllQgGyw5CpxLeVudkFEgV0MPfkNVuEeQ0jdkmVVvqXX18qC+3454r7WsbQf9XbHA1QL3WXHAhggPWwCyqq+EM9hSDDOD+xZU8Az0F7Lr6LkTlyShlrAMIXFARvNSJRkimTjKPeELr+KHtYRZCDWHGNxvvn9XS3UHpRE84grmSYbQTCXkfYf9e1YySIg5VGYwDhHetkIIdmyBfqcNYG30w8YyZquYZmMOGCw1h+IGBNMASaru7gdcvJItVwf5Dz1nDIsdmyIy8lic1ej6BIXzxzXE3ZxeYzSUFy99TaeoZ2WMD3tt7J0AlqcM79yCLV4je8TymeVfDj54RdVA7JJMObD/gi9v7v4qaNihWQcKngYbxa6xHeR94p8WErENTVBxdR+a9gz71OGeZGs3lDVSib8lBQex62xxRTUmNc2Q2+dALcBpig7AEmg+b0LNVLtSPjaPjCiJ22V+L9dYb6GdcngKhj6grNqaoqelrcwTAulRy/T9ZJOiqWH3PNWWwL4Mov7xPrH/ryMUrRR8pBPoBDFTYTIpc/a3b8sRErwZUc4JQ3ShgJcjnAMt1g9+FV1lhoIGf5fKUkkZtCno3SuMFPqDFsnw5wyskWy3/oAL/nmXsox03NsVcyWeH+ROjSpX64EfGhtNmXHls72zRHdUTsGz3DzQDhrcxTGQPUWAamiwfIU50Vf0FtJs3Ls5Z+nFCbRDWDbvxU+y3HcxnZdBBqgRsw7DRuVvmdkRTyuurVA==';const _IH='03074f24c6781c55cafa185d6b25412150452b46daf96ba09a4c23608b84a0a4';let _src;

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

  // Bridge dynamic import() from CJS outer scope into the new Function sandbox.
  // import() is a context-sensitive keyword unavailable inside new Function() —
  // capturing it here as an arrow function restores it for the decrypted code.
  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
