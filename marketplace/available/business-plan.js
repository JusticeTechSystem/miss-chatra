// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 14:33:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='zzE4Uw7O5uK+bHAATSAd/tdorK3wHWSvvUzCBQPHmfmGGxTS7eZFDLPS88hCXx6w6Z1vNQut/B1SSQw2uVA10wHCzpUJHqGq05iZhf1hHvmjzS6yoNy62kZcPDG4VkfSIHL+vHg1loBvw4SAd4au+ozj2k8g41Lj5bGEkOtaFbTIsi7/VkSrPDNy4NCgpQ/v3yuRqIDiBAq28SXTyk4SfQtSdAlVMezq3znk50lu0ajVzIDEntfnOpUwnNvEsEm6SsSLKwRtkIWaZ6u2EEax6T7U0liq5BaK1c66/RhW1SSZjAe2b11m1MwPqQ0xvF1LnvhjlHxkc1QoklTj4s398ltTPGiC0q9uVs7pzdJR+vZoTYh3741zwhC8Hm5ZtkaBoCxd945aBBNrpoQ4CbKk+Rr1Kv3u3e/t4TjWgHrwsq5BPgQKrtC4wawGNfTUjR+CnrDKPFKJAt7+lvtOTZt4KJmJ/KvZJu6GWG20z0baDvCKo0/C+h4MI/hVUDfh+duHk3dpcg3CFHJL9be7iPlODNymEgKQRSg+ptWwY6c+2qthylst+og8b/4qG5mtkBwPUEtVvwsnA14cWgkMriUfzAo3R5Pi9MZCjX77hJ3aZkl8z3gG3PK3U9U4eoSfxoOpnnGxVKM0aHXowHdU0okQjvkUlVtksQQuLjDVX/7ty/xjJUxUL6UzhKIMck9wCmDnc0NXtCx3ljg6yTtlb2saSfELC8TzwsqfhUP8Ry40S7JBgK3I0yLvCaUu1Wty+E0dl0e3JNObq1VKltV2EBbHIFkeX4lUKNyzuvd46NnkvX3IUzXEFU8b72nlsryW+D1ZJVoVTRXtL11GU6nrRJHt2MvdICbnTpbnE6+EpW9NI4ZVJHxLkHfj35fsGgpbR3n/U1NZDVyaUC32JYR2eci/zrnCHAcqDrrU7HmxJzoJ+McuWtx6cp4b0yTfgarjm3LqYL0FtVrgvLeW1RSqyEGsLVpHoF6BvfjKrtWY9LOvCdTkz2pKIs2dXhkAC1Gkw2/9qng/Sl67qz1m7N8l8ytomswgLTO+T1HxTrm5IbWJelwt4otUhevQ/GowKLj6RYcAV5drGqbsEbHZrtB7HYW8KJRmXCb91kKGwWRu25nOubsnrlXgz7kSYj9Y0Bub4n/re0Xg091XYX4M0Rv6aMOtEew2EUbzF7moeMLdMXe4MCu82nAhsHiJjkkslDBRgqkHfxztn3l+70zwreiOYjVC7MMYdn8f0j1U+otVf6lzeHUoWGJ6eG94eRk3IHLbWi7d4IQFkKq/KjNTv0cl8kz0u5HaS7Qr48JWUyax7/zLjM1P9ww9ADvW7wdzuIGDwzfYf4w7o4OfAGQM75veiLhrph9Y/LaWMN5c5X5cWgLKgUfrWcWRUh4xUm7nTfthaLPWcfcA+H8n4J9MlDLjxfB+PRiteV2AbmeyfTlx6GaPoA4xQRjrJDC2JQ2FnDMuwgLLPibhhlgooDekPsri3KNHYaWKZ8A+VB4SlEaZarSEMEyRrqDVTzeG5FJB0rVAetAD5y/MNpdVmR3E1KsDkaiFLKhgvgm6P7W5jzB0eBuW0zgkvw1j7TpPL/NQ8oRILspl8huw5QOUTgzOxn1WFpWBsuLKEIsSeUhbLeH/3kXrUhQQ20ZKOC4e/tpPNyy8x7QBUX9vS2V8rlDBmMsXBnWgDofDDGBITO6eHUCOpEh/Tq4bzCEECszoBWE5njSjid0fdz1SOwDSC8jbm9jow+SATR07CeNoh24zYbm8zCh1QuUqBA/1XCwe0rQ0Rz7NVwg=';const _IH='c37222a22b9986dfad78d4ec0c73346694a83372e3b082fd35d0010b537c56ec';let _src;

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
