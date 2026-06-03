// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:24 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='g3XLI8cF8nlz1Ff431tBAgoolaZaMSgMfD92NkxqDCEt5XIKVvrF/5jSW5w7u5lUrj+Q1pNx7OLTk5QjU4CnnBg65OH4/nx8XF2Mx+dr9a4QPq+F6FCvVFYbLmuTNBn5Eij+iIco5LTnDeSDfWIWlNap8oc8m/ke0cFWsdx9xgpQI5r9vr6pjGRi4/bfEW6sEX85ryqxwEI+7Ou3y5HS5DNQWa30niRWdf1Ljd00SOKbAoB31MfGFB559kksGwB816HuPsoYzpEO6c7BWelSvwwzw4VlknS/5IkC1iHT+AiIlDZNvg2dW34/BhbEF34TJc7nGPB+5Y88B2fTBNxkDDRYIZ3vjWbn83nf3qv/tGeqdCxh+gmt95Ty4kZmE7r8CxrOvZXkWBYbViDwseFOr2MEUA1KXZk2dtRdC1jiO9kAS+a1/AUC1xugBuF0AxuWA8HjN0TjCONY/UosJVTAgqkhF3pzI6J7S7cCYiSHf3bfDxeBkO3kwaNBiFPPJfUfw3Hg4e//Uw9CFC15/LpJZXjOYA199EiNXGB7UzXqJMLCcW2L+A6jjp+VUfOCWRGhulErgTZDf+Z55YUe3mnVEy4wGKi6F07k1KYR0RUNobeV2Azdb3Fhh/HBkRjCE5nxfzvpdauKu4VTslvRVpCQG7ySFhJ+lmT5X+qGU2h+QF/Z2kVBtgUz4ONNJiTBqf9sj466utQPPj6n4NRI9/yNYb5NJbqC0of4vz928i5CeGAKhLQTU00Tiipl8ItUuNpKMUiR89ym87Ig8BfwanXFKHN7G4rBYDQXCdIBjJ6wuzi+jCqiaHSngN7dv21GT62Z79lkbD6HQDiP5QvCo4wozC1cw0LlFddPdPrut6pM2bXx5zxRmoVki85RiLta7iCdJ5piLZBkOn02Ke4iht5rcUFkhP9L/5DaB8NpdC+4mtmEvIxsGWMQOf+Yfr1+OLs49MwaRgpW+iD1UiTKtYPAoRCitQmYS91TsjnYg5rs22ZuRf2QShL2KQB0hy8THomYEhsNSAW0R8HmtnNQlAr5HKqtU9XN4yzALyHp77ccZf3PrTEeL5/EXyYN/9XBEYRuWwRXlgy6s/0iK5nevGF1sX6ByMUkk593tMjzEzMmKRuoxSt/MbiRz/Iu9ouobJDJ8bHaLqs/jBXczsks8ABfsZIJbSfkWQrH4j2K0GEWUBiNmDmH00l3yZq/2EG52IKJAUDA55iTqLDXdWOmaNj2Qyotcvsg6R55G3N3384JIwg8bhzyotPybTcuYzONeYGQEq3Adv4+23cJo5CnuwI1SpfC+T3n1crkZQh1fWYGq78EmeME60X0LKF6AuwCXBNWxQBR/Sdu3sBKD1haOI9GVs3TvH2iwZhnmdI2Ajh5oXb1lFW9+Y0IWHVwARA7HcAFvP8=';const _IH='88130eba441141760460189a659f56d30e4772e5397209feb4481ce8e8311f9a';let _src;

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
