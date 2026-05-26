// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-26 20:48:07 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='m0PN2oQwmopb7aKZfHPqknx9+9vtF1/GPOPddwTqG8O/NccPTQfj4/aBSPHymqBhPVV8O4qyy5mLxwFJAUUobxzwRoNJ9xGA19QAPeDVYhphfi+3HUumO9XX/E4HpHBm8Pz2ZRTrlO/jnf0nBbv0k8esE+uFkNaUHZ57OaCBoQpa/MIHCxKTMOxc7BjhirYWqAOS+xL7wy+pIFBJJTWPeyZgTSLM4ygY42QmB1VLIuxCHALx+1fkhxw1eCTxFsHr6T0BspO5oR5hbKE3w2dK2Frt6G5MOFZzV1UZ2CgyGbD1b5+1uLFRUVJUAAhtYjet4DitJNNJnicvIlpuaXqaOGJfPrdW4leRmSNwp71jw4deRo0ZwsRCE1okcgngnbbZVSHrLCMb1pSsnndGcwx1T2slvmHL6VrEsMYk/xYH5CGPYG8GCTuH7WHLqVK+comley7UnkV4Kdnol8dJf/w/LMVJdnnSOfmLHM25MUshNksOfVBo9uijnbh8Zj4O8rWQe/NgfmDhVQ2ShEEUZLXiExV4PiGp3SzEXE/hseaoHdH1TK1ll3SQtM4e39QkxsNBMUy2x7HnjuJRx2Jq2ICWxAcEm4Avmaoj+oSwLwsF7XLMaxnt2p20GyplqSZBjNmbWQgbw4MOuDfNfkn1IWDeMxYibqQIVE2L+AqWGgyf5NZ1Fony+n+7qdFrLN9XhEa2PoVD6jkz8e8Z1HsuSWHsfPNWZ7lR+hfrM/ieGGAt+8rNT3+HYOxZb17FhxiKXBmLV/0I3V40TGDw1S1s/9FcOhSQ/bjhCxWIEAF1xkqAqCb8FcZaCzWtMB4w15XaOVy5dmp/qwxzXvOchn5cm7Zf2j05SDnJtR34/bGYt0JMJftJEXYyF/mnCgQJns+FDKh++QaP5uG2qyR3up3Ro+zPSzdZSHTdgDQD93QBb4Peh9SI4HMnrTc5ABXTewuP/jbWK705013PQZdN9s7iANLqfI0G/5kZvQwhO7Ct2nHzMCPVN73UkjqjMia1lCpyOSh27vxe0it1p24R40t7ARPGiTC1nSj2wNNdEojokgbgXLM/IKqdtn+IquAxpvrvUbCHZ+9vkfPi8ysAeFIONlQ1jPoKn8/lCipvEDLGr2bGNFnujk84os3kw06jGAYRquL176J3wIZ6ebqNhQ6XSSELPBFfDAXNsP+Csr8HIL+gJeOEVobIu+nChcIdWEZcOVX3aaylFC9VW812UbM6SCT2ub9vB4a8/2iG1fBYsqerlkDbhzviD+EVP7lt0Mubx1GmDcLhlNaRo8FuYpAj2sjlLutnjTn0tEXNGnzZymtkGSzfDuOyy1gg2grEOwLueLlAnWCWFUTfEfAYhC5BJurS0LVjjEHuVYUpK4E7HHeR';const _IH='25f64e490da124aee605d51e30575db1cf80a5adef4b353ad549567cb2929f65';let _src;

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
