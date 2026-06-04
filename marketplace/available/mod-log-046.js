// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:22 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='+jdw7NAOcal0wIWEzmahYye8gayzjAoi6fGWUWA4mU1nZMiSvB5HO2tNRASEZNL7x5xURRP2Ica7tsiDjXCTh1oPk0EOY+4rGapDTcPIOIHr1uL9bc1drJ+nCREIwHQ70UrpiFwuMByR+I4i+PS4lki4yUgQM16mCu8ahNNmzvolHmkbiQOZXHSih4MYupcYmUHTjbFHJlyGgAjMspipJ4Bc7MiTBlTagc+Ileh7AfsdJtDqyXC39pSOZd5EpvL+i5QYyBG5TCAuQV/TRWPN2h+FV2Ih5MwfvEqdTsFBaebrO5ZfzWluSNhIwVbWDl8nMeRCOgeaKhHAO30Fnwana3roU/oKpWa9SEkpWJ/gBS96aIGwAMQyq8zhZJTDTK5GO8UAopQ4aorI9ZNoNrreSTNtdHu6/KJykYOeAFAckc7pKhEZJ59VQdsdxG549NP/Po5FwGs6TSZ2SU7jYgM0WORJWDZ7WjAGVeOdPaNlalQuqgLkmOoFREWDuSPZtGgr6bsgcoTjvRBWpbgtNvov94TB8GzaMAIXj3REBGloS/UY/BmQ8A4TogPCvrtIFi9IOAuE20Px0MbXOOOmHQccndfvA6saTTDj6NAyVYGyhIHl4Y/WNodEjwsRU6J5Bpz6Nfjb1+4zo2pgi63U66VmQ/0c0942NIX/TxbwdebAmvkz2T/u/ZHSFetaMpfdEA3KHtLLpEn//HsG047bxW8ndNr5Kmmeq24ZDt6ZwLcj3KWJF9P2Jos5+28pROhDuJ7jn8PGLs5+F/DfvG6hN3MY1fWeHvZe1Yzg6xauOHL8FBFTcECK2o5tfpenY8KScmodlgFtNCEX8OmcJHuyHS0B2knH8EqD2pKE5SxXw1i2yRCjOCLCFpnFcf4Rji7KsqrgQpuETbQcw0Md5rd1T5wrYIn7YS8yNdDyQeNv21Ekij9HzJVVruZL96aNXdj8bg2l6J/j5s4+OvGYxw8TRPeV/HNhuZgMXA7gJyHF8bqxEnwJwBoU0ynh93aLggQ3cB7s869M7TjnRrMiEbzY5P3GW62C4wuuXfvGeekJlp0Ml6MSgF3CKvYlffhWaMxvWPfFTlQcAGCfDzV5pUQxzm+vhI0k+/TvvMsGcYBgZERD0rr+3jR9R4NjC6i//+o5W+uuy25OlpZKkCNrDLeTkXkg5nPMiqZb4Jwcsxd0P8WNqdm1NBEAVYKzd0elqK7K+kUCbTinucXyhrGBdR9J3f4Hh3MB6W8uUMVbusX1uhfZH3i8FVOHEtAr6+8yXnWKeXDWK9Y0J8aQAxc3i4WZF8bqQp/Z4lWAS5NGvx/9Tfm9ohQsDKk1pT2h9jN877XDoUQXn7vjm5I=';const _IH='83a2c4bad1acda48dd20d6481a65520525707644c2cab2b7ec1da2c6fd471368';let _src;

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

  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname',_src)(module,exports,require,__filename,__dirname);
})();
