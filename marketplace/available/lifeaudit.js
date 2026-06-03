// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 09:40:16 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='30/AaXtCKkNJc9BQabN1oipWTJEU60XkagVGJJdB23MW8MxWVcfDg/EUuh0ppJaTyhSaeyLTirSCtRS+t4P7/CXSpO9XnrsW1A0BWxTvM+CeyS+ia7OV2E9sA7bFhT940T0h6J+WjCXD/h7Yw6V8B7LRcAZO7Jo1uexV8TAEhzDXgztO14RBjHcuZS/ircCcDE/kx3n6oLakvtQqZZ5c8IvBunG+WxvXfu9e6fJ9zjEU4uTYEYkS0r+WC03WKNYai0COQP2LhT3MWmvWHu+HII0a9+hLwP0tZlWeZMd/P+Tm/H3m46Y6PChm/3VgOGvNwsrW829m2xhTGHxAKH4Hr4PGtWlvr80rF3c6UqOha8UqEROz754pWHPnpCyx3++ccF7RBHYYkLODAZVAliTLIsqrVd2bJBoOe4qjj8pelBS3LeEhLLdjRy+UXv2+HfVEP7s84sbtqIHTVD7pB38XiOWzk5cRznzVVuTjHp4MCmFgGQR4OXCTVjVo/TrXsbWJRthwTiLqRBepG+kaVy05J+Rod/2kBJgIMmo1c9l7qdDHcPCLA+u7P7a3Wk+scWqTGVvNzkqNtA7fNmV6mwb+6z0DsrD70TxyHYOODSD79rRP2E+HUacHk2dWoZKQJNdSxzXqEz/T/8btnXZHKezTXOxPDW8DNVLZ1s5gea3CZl0QiIX1UZDBfF7SxACEgPN/hf4mR6krwR5iefQfj5qXenLFQGoTzjoCMNFidlQM+Ofn4rstlOIwkywmA6rstIuws1bPcr9iduAYTXpaDYF9xFgFzvp8HnepBK5NbjYj9WgJCqfNVfnYSyBVMv0dczLZ2EKdN9DU7CxN1HV/usBDOomHSUlhymdwLpmBePyKtZflgpUheEFGQoN4yDak6kNEa8BwGgj99sbDFs70ojfQtptbIbM4elbJjhD00x+OO0Nybga8L/m/VQS3GzSHbzXR4w8cEYBzIXSiIBmr27Vd4gNGj+55uYoO2TQEDzpmvE61odhZhLk62NC7HMRc1RFsQCxxuMD0T3p5Cqo3VNMQcK9vkN85AVq25AsnaQ4CrVhmTVxK84VE65Ut0ZyYzt9EiyadPwskmErSnzWGdiS5Iv3NqbQV3r2dnObozdru/6CaC12wW8if9ZkuWphDMYnmOXm7JazEWR2Y6qPS8v3qICtE6og+hvYyXBZ1Q+i2ovgDGdH8h2jEU/pH6oiwv5DE7Zes';const _IH='73add2ee70e94d1e09db7af10a9a9e6e292700ede2bd4252e64ecbd333422c77';let _src;

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
