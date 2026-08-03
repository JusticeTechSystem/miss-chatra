// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:41:06 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRClZUXDX8GwuEGKZIfW6fitjPExGOZ2Fmr4ArYKDOf6ORV7C1Jud2XDemooAeKr3l/DTtBz2YIjsXDThZVSIdcgUaH5ifqOFUvxRfsMT3MgkBzTLCtA3j0qXfMsp/sG5rf4JHAzkJk+L4T7eblMejoA+zfg6fmnSTe+oUTBUdh6hvJUhK3hnbjLhMDrgf/3GMFlVHmzVTTEH0g6xsZ2PyWed04J4sjoa2pWMDv4/iGkyAGyUUULU4pNeCKC0HITD+bLLRp3GkXTh+JkgMLdrCbPyJQ/TO1imLZz2OseQ8zt7ZMpR68ramM9YERI6QpOezDMQBQuYnijKZa2nAw38iTTFbGaQCChqZQo8rFhM2a9awtLZkMHxj8tQGzZdZr2NDrCIcDUhlC5wAUajPDyxS9UuY2hXWQpnM1ydVAfusJA7prQRUNTbrZJeYJUOrZxAmyREir01LiLt4v5bBMxDbhJOxnrhe0GT4pw8UIQkk+J3bRJQd7nvCe7KRwAWAuJ9z0ou/VUWn8joEXp+RK7ebhYFIIVd2mJK9zNXorEn6vmC48scc4SZB626wlk+mj3hw+Kcm3TbJPAnAeXSgoXE1WtWJnxjafChBXq2ZTxo5NLiukzHEZtHq0XulyXImgyVs85q39ZWHDRcSDFXQLc8iQcOLx1mcm/vcA8K91lJB0pYglhFHd/sh33SbPgbpqkBU/SV6HewtPtd59dBQSEzzGv6wenxFALOfzazVu/5ZbS79GqPoKEtjKwBrY2VnI6rliY2/cqcWoscpW1397zw9ouTyU9VP6qaSmWSnRnMiYx5P5P1a8k15jlSklGHwVbSeTY0eduT0K4LpA/wrUFgHoaYpPMjBv5e3jIwMdEltRf2NEJ5bDkw2VeB4ZfzdLW6Emfntk4kJ8LRxsG0gFlTalmQPLqpAtsnpPiGo8xy2Tt1m6uEAt+7kbMFH1Bgwrv2945DxmFJEt3QQPf1eMKzcmkM/4NK256tubTnpYaCTfxJ6xxyQFnw69L5s8iztFpwBJS29Ng+QOj4BWEhv5/eo5sXxrAxh5NmPy9UJGhvJcN82Qqr/8gTOqtERdpGX/+cttTQnXaUyrgPsXKYs6/mMXIcxnTtFIIsUNzt1zvOTWZkDDAaaC59Izj2VAfUZediIEVc+0Hy1bTmYu2SgZYlE3k6oz/SAxB2X1vRW2vbkQQj1zuileV1vgbVUNSuO8KcyKCM3P7gF5n+WUbqUWmZ1rQKFmoKKtZlU75grNfKdQYAC8ha3yAOZp9aJkv7UHzWsyfGH+WAlolrnnafX10PyBiIW9KeQDQVeRSUtYyEyd8T1sS7Cv2P4kO+wq2OSEojYt7ehA2OLBKd6yZ403tTxwaNSEeK9xLlajGQ1HC0qq3FGCkN455h1i9oWiXfatEQP+tcxfvWJw04lva++DsRpndojekSrhbRAPR44LicfQoKJeuIB8NEw/moalb7mgzqBF8cOo7AHMF/2xOUKMFTpY7Q79nYr9yQDCvjBZ2U9K1/OJweka+HU24r70jdNH0UCAu52tfDolauP7++hfwfjUjfYSM55/5g/Bq+NPBXroSzXQ9ZAZjvtpOyl9wJev9K0jLXeu3Ul+mKF0rzw0ODxp6OR4Re1Eoj+Ew+EIiJxBWcAp7SKeHb8Y+LL2S/Omb1/UqcYR9kcnZgUGXvLvtimS7GL/tDwFb9fuu1EjjsoNNPpJbNL4cuQhLFJ7kNlbsDaYqa/VaBszaxfTDAbvGKxICMauwwqQjo61a7DRWt0rWk01mKpDVdTIcfOqexhp9z+/uCqRjupVJDhSEoAdlw2q96vZ+gMju3E41eX3JflAEsk=';const _IH='5f178aa5d3809ea54cfcc4ee202e6e36f5771665b843545c0608290b815e9edd';let _src;

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
