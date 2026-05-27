// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.0                                     ║
// ║  Encrypted: 2026-05-27 09:05:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.0
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='qKtR4butUGUiy5eSXNiUoSoJKo9MyOcioLQ6VyHR/yjgNyOt41vnycagQZHpR1hmio/nTFi6z6GLvCUIY+goreSD+ok7mxPQ3yXjRvnVXMa12CsChyokl/4GlVqjZw5dTALqi11wTH+H9DfY3DKGbsNijKYPwIubELnnh/XiV3jdI2oCjJNi34teQxqZwfdGGoGqlmB5657m8FUJR6OiWhNSVHrp2bgtM5FkehymupfU6hLNURQqvGyN9kr5wOwG1l7hW2krNPTDvOh97BbvRRE6ee7gkozV2u05OcnJvjuhfY8meJeqbhRJwjfH6Uz76cLcGCeWf/al9p7E+cERMY+AHHcbN4mG0oLNMLJLWv8dcXiaDlySyFAHI3EqtaZpWjZPdMxHB8lcime8ZB6CDv68pWVv8OuGONcLY8Duxgfa4uAq6TQiy7dpC0tYBmLjkeL3MCoSQ9G8cKfd6U7MIcaLg/8aQ9xC1O2GJIUtCzMTEbmrXSBkH47EFu640iVqxG/nUFEV5sD20LQGpMy4aDwK9mdhIYXan2RYZFM9LQN3K77SqTjomFOvqxIrG/TMVDqp+nb//ovYieoJn8/fN69jXfGI7qtQHi+4bQQ13UXuszT0nwcISiWWOxBQBTc5XDik1B+3RgCPoXhCHZrIs22s2cGrgwzZmrho2vywvbNMRng4wUpyKmTcYsCH1AdEXuBNS75wvvRU9jF1P7TmJ+8kf4vILKg7VqDjpeIIEESmZA6f6iaJ2GIHYUcxeO4lXKMlz4xzHgtflpezEeIqYyMfEUwwlFusRbIU/H+JdgblxrB0TJ/ognQhGxTDjMOaHXFn6hAgkOQZo2i5i06NUY+3gYH+hjuQy6NKuIws4Z/i3DX+YdKS0f4P1Znj2fN/C0hNxu/jtsTRvWE+oRyxnHwPAbXHxvMr8XnPxjw7jYy3fOOYXSot4Zvmmf6uSDzy2mOJrs4dNQLBx0b+fh6zwnXURAOsPHgeKVBeHnPmMS2gqrry2Sz5fdCczTDpjVLCX+TnNfIXY1NKlQid7eX5gao+fxFYi9qtrqzQL7p49BvhV7sGq/sfdRpksUk8HtHsyqHFLUzSEmCXJ0F+/OCl7EcdYgdIUnJPEdZjsGuxVAjK9zlRC31hMSJj3gLf/VuuZ0xnDyos48dGuc1PIPlB29w5Yw1jkEimXCft1Hx+ACGCkuLAMfMAI3iLlIwxj2M0OUdizDRJTnBAB78I5Uuad1Uf2bDd3/syrTAMYJ7pjs21HMMRfiWs/uftlmrEwI8hUL+t/IDaP+DWwo/n1Ft6HzqF15EIE8yJPzgRlpQb6ohfjj6WhtzSak5X39fuebb+5i6WBkUFGHV+Ek4W5PTwuvYtkf4wP1bleA==';const _IH='63e013e256eb668e32cb7fbd9cab0ec7bf3c5812e57df77a0e25212f1a12882f';let _src;

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
