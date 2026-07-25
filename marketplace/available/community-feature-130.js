// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-25 08:52:44 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ81y8f1zoRarj5bBFaIxYqX4OhzkTGu6jds7BwXOkepj009ETYfgw6QEgEy2CN0vz15k1I8UoouYTiJQ8DmmiTGlCeljld71ccxR0m1jKTXyk9f8ijn6yBBkgt+WgtNDR1P7QhynMNBzPe/fRsyZYOjnwBRzd6zaHgzaHf+YgXlTA9fgsFPLh5HW2X8mfVzOaRlEsI/d07zBeS7GaOiIFSYulkXCXZiTovK569qvwmNsG7fSB7Js9E2fPPXQVUjPa41ZZNYV8I5Pjorkd+cmKkLtclOQvh6zcyR4I6oNBNxU4rmi7NDD4Wm0qVkNiraMpCKgjAFnWC5jx9PVfp3IAzBZJzEHT9cO2tiiNZKGmdk8hVOiLwHM7njIIpxSZhiImGmjRmUotlstkyU/cXBVF/ctsH6R35od8Iuv46EO+svKUtbn2QkZ+QxUj7EH/NMLeowN3/untRt9svLKi7A5Gu0HUWMwgOItlzH2HrBb1wfYJN4/FMDThLR2R4u3S1bqZt7kRiBzSjicwF5aWo09/SW/viAqnIf/RUid5w2TmObMJvlfUvToKhU8GkJyS3CTfz7tDKuPbGiYW68iME+ytHZztqSQN6ZhxpkWtfAuJLnDsB74A/fqNnAboVS4Sc0q2Jx2doGfB9lVnogOn9M9mHR8XwtHzDfPpJoWCPN+p+2rekKeZARuRE3LelqN3y73FECw9Y2NCEU7pDS8WZQvQkeCOOIDYr2D6c4VSg19MFdJtt9ldxMUV/bqc=';const _IH='eadd59c480738622ccac563cad92c3b08d797e80cb99309fd778efb34afcd1f1';let _src;

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
