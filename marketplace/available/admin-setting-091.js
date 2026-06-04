// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:14 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='SRkMIlEk1+qzmI2TA+wZxwzBq7/C1WDpcgpBpUaG6fcbTHLv9aG8rKJ+iOmC9L+i83PxmkDTTDB//wvT+gCgSheaZx4lCkhwSMDVtlV5wuucHNDe6AwVhRZqbPjZIS50aQSUMt/32/iNNQPo6qkQQQ+RXSTBLSlnCYnaVDGn0+e6qzT24V9wSLMjQecz9ZuM7ZF8Xz3+FaMGoayAQi90yZ15M8BAtHJh6zKMDPqrxykNkqO3u0QIf7gLyj3Mx+BPNC0w5/rEtXiDPN2gPmYGCMbO2gDt1wS1UQrdk7kyhUgZQNwn5artn2HMjIaqBso3Dgpk06xC+guyy7KHdRKyfwysId8ijf/ykKbESuuR7wNj8gRsYlgq5b0CDeMK/b5Q+r1Yrn/0Des4Uv65E10+NXlC/aFgTuCka2c1ZaF8/5q+nlkW88+MGI+whrultDbdUnuwvLbstHvYT1Oefgnu5QHfvprFOTzV33OU5Mzava2mLxfL0PKO4cYfQlL+osRq0dd96zapIALQANaySPdClnHUH80jwIETzyffoibKx+Ej3hXE9oJZdt1zwLlZpbpidTBeWf4TaoHp3XnspWpW1w4gfnygXKQmqB/vPrfZXDLvL++Bkt/NzfB3NtY66ULqIx/72BxqHjHUDGJxAhza/q37fJ8zH6NXGMGvJajr2fCvUE0Zc5KbOBfZ/o+WVLzh1/UZoJdCjPUT8TcEpUOEOmR7t7QDVydSqHUQys5QAxC1TEZoXjO3XMHRSMxpOhxHPUaLD83oqLhfZoSHeCoy9PJBGM2yQ3vSZ1Zi158kHoi3t2UJM3kCioaUgorTbFK6n7T+U9jjNwpWXHcBGUDdUysg2aykosjHxedybpI5diI0jjLr3VBo8raDGTnwhfkp0iIUu2Hl/AWpNvqYs93VdWzzzaMKImarEwJbW+zyNovJgj780kUzp5WywvjW7PWLoYCMC7sf6T3c3LN1bBYp7vTMNI+opAPbbNXIdZd/zqdFEp9Z5h5qNR/kQPpZt1aITHczWg==';const _IH='db283c06091e40deaac38cfa00665bf7198bfaf501841f87eadef3531f93c851';let _src;

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
