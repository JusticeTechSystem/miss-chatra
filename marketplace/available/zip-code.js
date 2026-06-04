// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:46 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='EAQrLFCLLYA0bw1La3uI6gwKPjfruvnLxjKblAFoLlr8QfUzI3STEuUrvNaHLCoQsYLV1kPOPfUw0p9YfuDQliFSE9gBmnVZwLuoDJ4I3U5ktmagzKGDc65sqkrLMyO7UALNVa7PIy/pdiJhMZ6LeV/ZTAvC5aPFn93g/8BTMaeE9J+Jt/wXltbAjUY7/VpHCVGq6Y5UHaVJqhFh4UAGthg8zDd4jpeETK2UOStJ5KKwDrfHxSvNXy2WssrP/Oun886S/uINlIhF3MW/U7bDBY9TgR9gMu/PeR6OBtGOCBb7Tjreb3arSIrCre5g7Hk0VI+iB+uY8/ufmzZuzKfkpsDiQq8tAEpBM3FSTjqtHX5erAEV73+A0sbv89Sqpg4WVX5ZUj7EL4bOsC4rRpTPhq3s2tvaQXoVFyPAj86qBDiGQyIULgbiXAmoWC5K10gPdH3VB8zQhRKaCCbHW0OR9IP5dg+qKiJDsbYdF+puBNVz8krpQjqWXBRJF8wn3zAPWoC8DbE6fsbQyWbrajoNKmbFhPHFMQ6f6IuJva/9yfFI3am+CqsjoLYOcI0Pl8KKkbVXnV/raW92A3WacgNdH0RtjLC3/waTmTq8//5VpFGlh7dGINjRbD1Crqixv8TrOQXkc2qtBUi/zz5Zw9L7ljptjhuRrHTgKo0W8dzgEFikfGBeRv52HaL1V/Lx9QgoiIKtCefLpG20J947XGMoZOpFMsr397FXH3B90uxAYFKmLijBvPE/4A89eieKljn8Rm98fa/VR5w5EWOOHf2ayv5I55m+IAzwRdxajY9JNFqElp59VID208mLUNZ9vWWlN4J/C0NbLZLvwRRDSAqA0BLStmOw5di9gWoqZRuVZn2rvLAoiF0XaK0tb8KltEMhttExiwuZSRdYKSJQSxF3CpWRoFd6U+65nb5ogsj0MbM5ciGzK9+aESmlPRoeXT3BxK1FbUbYsKOjABnjcaufBi6Ujvn//bimssJ6gynUXx184clnG+ZbbS6L0PBFNnDeR2Y4cvvNBhEaacjJ2POUZtT6jvu3A9BDjGNWSxZkdzmYPlFQUEBL6pX7GtP2vxoUbbCN73g5V1MoUIV/3cqlK3Ja5i73BOBd1VCTja4lpSedC70scTywV5kDX8v+Ls2hncWtASrVNXKDxtYNd+n76LEVIQatAGqde99/G7KSPstU+bjcbcXgBA8LJaq/SeepdV6N2VUg9j4bnXpnKyQr9TOWeGwnpUAuDCZVEEGdNA+VqIZfzY+3k9qqmceRbCaLEHCOGfRzPpS746dRCVTPTV0NTgEFac+t7mlYBvERXL4sczfvEGFcJrRaxQSP2XnwpBXzFaWnodTp7MmEg5GmfE4Blig0Gnd3XsEmnn2ZChZJH2nt+8zgt6/v2/TNs2fAEgLMnsrzm++21sPakB7n5cakWaQg4wLkdtwXTceC0N0bFRGJqbkU29eVO+dR6Lv425ft2qRIGBQP/+VWMj2+OgISde1vOXkjS1Fo8rWnSZaSfhXa30lMdlb7nbQ5GocmhVv1Nv6W2kxj4G+CuMRCSJI/KQ8jz34fOk93ssmf23UYzhwHekA0dxl9i3ZURClUcEg4mQpT8ZaS1A==';const _IH='397a6a69e7e9fd3416d4f2fafef05695a7adc8235cd21e449e1e08d35d456af5';let _src;

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
