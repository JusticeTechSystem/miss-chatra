// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:19 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='1qhw7lYzYc62zg3QZpvTIzGhXuYeFK5DU6at9Eqkf2JW5LevWUCAx4DoMEpaqiedfP+uq5z6TlLq6TOAj4MajKZnzvC8H504TYLPQoDKGQjhbGg614hox49OS1aI/oPEfngP6VH7+evv4prBpA+fWpATgOSA9ENJgkQ/Jy5z4IEIn9BevurJ3BVYfvULTgCyQWvBOMl2jWF9aR19H/Y+QBoIsOT9m/VzMHeAcqglMXzIVFWU4x9/2tg3NFb6aY+i06XdBsJS0hRm2RS7NG8QfkmF4NQ9sIKAk95TYzsQYEE8jkCgqpVIhd6E+Hs+gt35LVbfQMP+p3q4A2ZDQI+ElttU1OGH7F5+VoPzVsdSErYMwU3Me1b8Hv6Y0oSnytM6Em+uaBvdl0WqZ1SjB3SYRYcHPPjaIaNjhGwZBy4z+VbG9XHtA4swT9RfzENjZeOA0NErqn61PtfkJTVqTHRMo1VMPhAtcCcldQAClaWvvSygAyYbosGcfxVPjSp8tCdIpfOVDnqwnXtvJzm+Rzr2/XQ9yT7jUneG1Ws/F4jd1p2apYhy5fSSU3wIx3wGm60QBhMsXza2CAHmFBA7vN1rikCZjzp35w2qnozf3YvgMzUQpWhydoJjGCJ4tt9g88fQfjuHuE/NW3/ya5ewISaNMbQSoQDKITl52XSV9teAxO+c/UV2a0zjkm1oZe/tVia8qeLbulVYN6zS71n8hgbgEbIGMtdNj6vRyEZ/KYJv9klgQyGKJDXwMCP+1OPle87CrgufOtOnG0SBEFfoWSBQ32LuHVy0jkPdCxhm6qH4L1NE8eREfSc33S8HjCAtknMGHUc8UTKD5p83pQLbN7/tFwt8k6M22aeWikMxOMBsN/T/VKKIJPQiPEJ6Lrh38TTVc0xaKCA8wSDrKVI5RbvpbNO6tM235wsggXTvShzOENKaf14+iz20j61hkqMIdzhFbhcsvUFXziT79lsA+IPtgYJzOeg88SPlm3g8W7lsbIy3YqxTkr1yuTy8LQWX1hDWzNfvGon3l7oSroB9dtQRfh9+tfH1sXjHwx2E00KiBq0HGUIlzhEfoDxfKCaw0nOVevifbQGJqrtEWAq7CWbwPITgyMtnnChYBjty95nlZWw0vBhYZa20aSWL3iKSBq5o4eheKm607XiTMEGHTd+seBC/1eNhuM4Dj3cYdF65iEj5n5Z1o23Go6T41lla8CdoBe9Y2kwl4voA5go3R9NKnxFTgHDyVpbru/FDjv+OUja4BRacaYX97Uw5q0pEzfsPRbP2YQxuA56D41oEOPrFE5okiuhZ3RAzgk5o9KlviTb5P+htmuJS435gf6LaejOqsqK/vaU=';const _IH='2319815a450e176c8f948ead493a3b3f2f365746f9536b38f6ba99b2c52deceb';let _src;

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
