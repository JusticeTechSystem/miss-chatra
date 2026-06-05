// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:50:56 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='lo3NOXM+D3xGxqLgtiA9SLm3oMZfTCwmrmcSE9t97v09arOaWSO2ZzoDtMw1HuKPYKzhk9Zs11jgx7R0LjPgDxnM57EkXJALRZtjlrUQj4/TKuqntkz07HWJH6hihcoY5Uf+HOVM6aJy5ze28GUZ2drXc0abknLlumd/NJhpg2FFHuU/Hia8PEJ8lmTSvNl+NCxdaVQHDs6V+XGDMVT5e9sGCrAWWgAdO3Ays/euy6rTHebDfFvVxnReYwRXBCHaTC/HSlw1Od6tSAHfDlPvyBWZet8EtHN9kPVuhpAXGZeDlIK8nYXFJjifIwbPBPz3hjNM46cl4fjfsswJnzVLukgE6yRQtiyqZw6+4IrFBoRCJJtwHGsdD/OrCWG9Qfdh4eA3rp4LkMM0q0iX1paptYtSC63/saZlmg83LkvH2b+JWY0YssORyqnya7/HU5ZvaQQoxnExhu1TX5+nwkVsqWAxx6h6eRu7O0ZX2qOT+zqREEJOWclyEbWUSAeDEUIF2usXi80ybE/uElWjglPrQn+uE4qddg2czVv+LXdJJoqPHpX0xNNG2jnRUViRGVmu16I94LztvDh9EPlphUuVPD0sZU+GZ1InrbdCX8+1n6qVEkU8HjHjrnYOjkM7swpp/9LqK2v2QcC/7PrGEQdf7ZiPX3a9s524MKGvyL1CpTOYwoeIFERuXHMZW7sGVuStZAfSiOi6mvducC/8/gheS8h5uaJP9c2tCZmredFzcM/WPsS3Sc6SzGDai/szheOUc2Sh+ifS7mnjwvKGMh/s/+gVOwwJ0HGCtmRLEpxb95/gvBz27y2llm14cOVUc1FFUlWOv9IevST5spe/MhyShnCJiOidRfCoI/cKm41jrwgIQIegOIAElH23shOd4sAxGxFGGwNoddOc/4ahUGgE+IWaMR3ccXdLTOySrr/7BQ8DMdWlASEA8ry4foTyDYleAgLaj7drf5HxXKCd16mAVEy9XHr+COjwll5Ur+DWjraob4KKgANFxbjHusLyZqLWfSlGk+l6k8oyTlYDNHjFC2JK+iWvk4yK0XXmNKMJCSFMtwl4NXgMJ+ErJrYJKNDc3NCC2IwgYQ/UzKAjfp5VuxJl5tDSFlF/0CAkIxBhsNkobk6w82hg+bXhQ2M7l/6SoP2G6I2SnFh4h+XRUGyA7dBdB7llCcCnqDc/xMdi8LPEHUCnJs2A4ukVvPuHg7WX4CsuqH8+eJRbaJ/2z9g7IYGH6AU2hd1bFMQS0LomijB79zxWy9Zs+jqsP424I5Qc1fjJMWqnmmLsds4+rfMmNoQDMax8A2ClHfugzxBzgytUyQXy4ZnFcXVEdNZc1cr4Mfs+nXa8zfbwY/06aG7166/bbxt0ywxBGN3tDv5X0gi+ijL/gfPU5F/qeA4MwFeS/RP2s1CYsrWYXsAmJPowwxWPkv2cidcf6TL8SrokpeOWKQd0eeRc0qIf2RWya1KAUlBiJgbrdqhVcAb/vrtobx5pgd3q+DFI7vwrGBS10LrOvgfPw1FjowRZFdY40Q0cWMjSXx1GDrNwxh3zzQ6dAO4dzLNovuSSGD7I+tlqObbmnQrjaMS6eX503hJMszEEFR8rLl80nEXPZmAmAR4A/vcY0OhDEJxEmVx2AUPDlrWqXnumTgYPw1Mjn2OoAPRTUjGLKJBi';const _IH='743eced931d7a8bd5332de8be6d25f9c110010a400bd5c1f5dcbe751a1e48d33';let _src;

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
