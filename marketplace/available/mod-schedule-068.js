// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:49:54 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6120Xb63gxVqh9NuiIeTbuzIYAL7oUivI8w45JGdW7fzmaVeExUrIYii7EqsEUPam/8+NiwwYmZIuaB1btjYaB5vT2WYLQrmJ6/jcMyFa4VhTKJN6RLNuK36b37pRt3SsMOIbJcJGiRKbeKslK51/4zPYZgTUlbereNVVzn3EDZvD46Bk6VyOrhrzjQD2MJKxkENUvZPt+lnMLcQ0Q2lAsIy1HAtBDKEsatsSPCTQ+Wbr5ecBnr+d4lqfOEKsuBCEaqNVA+dXNZIpILMIjXRukGvh2r3smpezhZU9JrYjkD3ozULYjEvSC6tm3oFvFUCs0T8kgorGTCw3F0eH8Jw+g5SD7yCGDwgT2TVU+i+w6iH+oXfThQD0c5UdITCSu6XBCWO9aW/2BkMbnVyBmRqMePNPquTCHrce65KsxpFxYbK+i+42U5uX8/0qgCuH09N7HZgAI3vnC5nr16FVsoM6n9xrGy3/u5avoDmA8QgVZLZF/8PV/RuyzzcgUAByQvIkydVoS5TdcvbJ1MgsmQhzCZEo2oPsNlkL4TSZy5T/vcW31IstRIoO7ZM5FJN8W/h8O60aBcKzjdMbpEaO77aqiJ0B1qISEXUtUjln6bquCvRfRQ5YkUX3s0VamTghfeUVy0FHFqDUtHVn6WFYDN+ZlQLhAj6N5CSwoLKWYpCp/FjMKe60aMdLY1lGDO+x5seb1CdhKERs9y7x0zhqm6ah/TfuonSYT04oSFcP6o6bOhd/moh0tQv7sdZPsWrtseng67Nr1k1fjs9hCZVFDoBXWJZBlQvyETXtZ/RsNDXNGgListbn//+sUiKsePdIP31b5UNpmMLsA0Q+/nAR9barKGhAOIbeJ9RulqBwesJkv7fv62TcaKJm6d3ForzV+OFs+uyAxGvNbyztiP3PPm2mI6aiIo8KoIu1rhOHUULxZYKytbaR0nDPomaM9mpMUX+eg12jksWHy8YylAGhus/fDva8D8mXrkq8g/v62fp1nXd0S8EVM7kafvJK01d1Z5boAMuR3izdax/DDKVUatZ6hICQOp6Cq2lRWx+WbzfVqnfmMdQfCKkl2PYYU3A3k8Au4PPcc1zxgVL93qgwlrsN5L8oFID5C6DqqBJMv7NtXlo+ZIhkkgZxCtBexUqFZIVn16Oiv6sGw6lhq0WXIwLSFUF9YWpm7aiGkzDqto40T8bMXkkIB1UCYU5wXJIm5rFeucLdnMeoqCeg/G3aBp+uVXDzNdhLC2lzPu4dudHl3AVySSsix6yCdC07sOveynuT33oiJCs1AYBq3WkQecj/5+V0XLJnDBU3KyTctTa4VpkHfCd15Q1r/sykKaUIa1aK4xHkv2+aEZfnNH0F7qBcz/4uLwu0ucKbPC69togvgkNM1b5eEUr+dudJhrKHFLTKzrZGOtY4w==';const _IH='f025b15bf92f318e2f64ca32f7165d93abd648087cd252a357bd304eb5835a35';let _src;

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
