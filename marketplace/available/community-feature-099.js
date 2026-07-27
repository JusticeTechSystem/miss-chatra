// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:38 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRBWnfpzSbM2KGyAWg+52lHE/IgWnosdJofqJZwKWzMXdbM+IutoqTD5KpFy0mMEpLEhwCnXqTHcSVOCiB3in2YwHT8ia+fgYI7jp3oCEX1nbiNWHHKLy40ZaKt/dyjWsXUenIQ9uTqUR0Ou9fQxM4+aAKJzkDtriRC54sTx1hy2z7DrPGiCd3yjH3fadmOSZDZGRsuONqOvLSCKYdtHvJleOVOy2B3gBF8SUohKb7QfbcSHAThHFawLKynY85m6Yv6XF9V48JSjiZgNfdRbBiq1XDSjnvOj3EtuDS4H8/Yk3U4/b3oDCg8rpXx4mECy5UOxt7MmVzw6opz3xLsvTvPp5KGo5MicrPZi6g02nul56oFavpSgHTHxZbXtbTUxBguUe+4N72l6C1G6P2a5jMy/ZdM0RxUv4sK3zPu5tfgkiDI4NyZWQ0MRWuka+1+knbmai7swQwLGtAnCmPp7I1uLRrWkRG54uLA9Jz4JDx99QoTAREKPYJPs0e221jepU0MEM/6vO2tk4kqFr8O764KBIRJeqtbAktFegSR+h/zV+ySdzvNgmev1bzMfXp4YJKQS43YOOQUbAbCMGB/HkjoH7WSYKI2/VwClLyAXo8H1KEyQjBzAJHG/jsMnZK8TMy1S7nVH8IawgOtTe0qSMO1EPMq4zoFudP7qeJZLQvdmsQ7dylLetd1EMMX4251mlOC3VkFIXHi+m4Pvn/UXiFG0lawleQ5idZR5L1oc4HB7QMHWg==';const _IH='fa658d88962505d3de2eb946acaecd0c085f80f356dcd3fb57f949c80282b61b';let _src;

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
