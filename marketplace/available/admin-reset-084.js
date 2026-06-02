// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-01 23:58:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='mSD3odPSBhvyB28XVos/LQsHqNXtoK1gri6vkFfhtULFoY8N5z3cgPUtgfzs8WMldF7QBVThKeAj2W+k2UjAkGGS12e5EXUvrRrKEhxgNY61K9R5G5d6SyqOt9Dc0OQ0DE4VpdUaPkrQA2BMHrXYPz1FqhGJXA6AZtSEf9A0uR8XVoL+Gl8qa+NPDwo893cHNASeFzEthncOgjpt6RuXsWxbwJlTKARfSA2xAAJGWY/xpRKO5cKqAxZW30h8VjaOtvmwFZmKJWzrMy3/smTSOHk4QVpxU4CFbpcJzF8c4VE7oVRdz4nhoujiYqEFUbHwwar/xr/7SfHun/UEKrgRkxZhfKfuaFW5WzKWEJqkReovGknpL0Ku1KPRY+ibA10460eilsWZ7dRkSHbNMC4ypXvNiZdlgsrC5tNzjOSYLwuLD/ZzaOlNXM8l3dJn2hcycUE3I1vLcRk2eBd6SCAHY3SI+QrpdFPdGx86nBSroOSliMgXF4wgaBx/VVHBpJ1tjx2MQTg3ZyKYiJgNPm+FyBSP9spD/KmjfoXkqt9kOcqvYAgpNVbAJKsujjmb6EiTmndYTk+B/4d79QmTwJhJ0VH7XYPjTBO0d60EqwzK1knxcLZwLjfX7EYOveoMHxryPz/Tr54NRPDnQFqLGYdeKpEd6hQnTIz4ArCnpPXJVlsZY9mJsRXX7aZD5YwOHfPptrohcjhFalmBg/aWl+VMo3A0zMFwqvGrSchEqVEdXwoRQbxUMPx0Cnz5g3yKElom/GQxG980PWwSG5JY0Bw4hxhJ6d3Ls6Vbfo8f53mji8pL7UeDE7MSjjNhKlQJ+a/Bb6HgptdCLr7WXY+WzT25xMciawi8+1pb9r3N+f1ZgdRmdyZWjAU0FCRaObKB/j28D1aasXevEZTjyLtSHitxaRcV1wc3AmfFiZ7MDZGNc0ZbumvA8qTat/G9lABag0a7ujds4sxtp6uIlgv+QUOHa7/MrCx/CQXJbjVH0nHItaIDkhcJnjA=';const _IH='bdc471f17505a4f8912eaf2f75e446650ba331eaaf7a7e29d9bfe7675d49c715';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];const _ITS=100000;
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
