// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.3                                     ║
// ║  Encrypted: 2026-06-03 12:28:00 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.3
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='gC7/muMuwXFoo5S1e16k9fV+U1QD1Pkb9iRHCc5A40ak9APGXFj9DC3eXrsrA7EqnRzvbfQY8C8oqvYzesw5dm7LrkDArH7ZT5R3i61r3LfhfLLeOqa3GmzRDd9KETFlEI6qJFabib9WIP6xyzKgOx3r+GBdNDUW5US3GHITe9p9vjHUAHYAReeD71H6BspxZay5u74ZoUQbQAwZt6LZVet1q9h/MmAy8SpdnoIamTOe6fSVsO/YnDvBXRVfC9kvXrT7v5guZ63qQtq6qCVJg1B0g2oxfoyqym8lQbA5DOha9vB+MowcXMdyopC9hc9ZS/YMg2FehArCcqN5zpXULOvLXuc656hqOucNZqLncyIZtdoScgrNpmj8YGWoFJ1Oi5v1jdggTFCA4kY2U2KOTAyJqaBz7WHfXN1Zlh77ICurdZkkr7cgR958h/b5QxtRn0jUfRKj0Seaz+7rWuB7hwmzUTVbpj+SpaHIpN6zFDHGzpYpvv6YulMk4b330QEeJzho/LoY1J+1BUR8Bj0Bm1i3qmrt/Hq9cv4GJtLhWAcHLOeF7TA9H/bUWUcPJ1Tfg7/kbJbTwIYmjmDCbbywJ6nxe7UOlvoEYozSsJfLKRHRBRvAjFNMakNPD+8L4VWJi3HN4wauhUcIL9EDijSDkVAa4E2F170wSRj15Ty25xxnmOb64zCn3fm3+cC7toC5p6rW+AXVo1pyRQV+bVMMR9xPBca7TpM3IYgnbsVUzzsb0ZQJMS8/hn509VqEde1hXqX0/LB8noIZcY8O6//tEBQnyMKhm3/O7/2DGwLjPqgINYJ/OVUL7qBg+XAfQEBUqqKsPAI2IQ9/5NIxQWT6qhMIAFdX9/U1bFjikNmTO6tNVUejK9h/nHK8ju6Ttx8UuKx5sr9vp+1J6HOeqA3iIncuf/E71NvUlRYvW3lJBmW7Q/e0YqjicdJXxNm57hzu36uZSVRJhALFt4YHie0swZAbS8NLl8aU00uy95fUeG8Ob9c2f/so4j8ZnnmAcQjO547GCZipQUZqO7RO5lyBzG2eGM1C+oZ6PAE2IXkblLO/FevnrEi82jes9FkA/V7P+pqQnvu1Ul1Np0ngZ9mbrCrakzx3wVv9/rjftKx6l1o20jjc9nGy3mQwI5okxTatoWnw47SGJFTL9rD0IqJFeHYpBEQ9i+KN2VYbrcBi77aZCnN1jMAyB6plHfvkTd6RVf4FAlE1iuFj/zWLKNU0vGQDPIavCDoju1i7c3uNGUQfVU5FLSkPrho8VOU35Cl1Ae0wjqUc5gs5+aniDmkxK0stUKQkgbwqI6DJlbgRnNGOLrnZSt4w6M/piCnAfBUym2su9eAhYRwfVAjHm+1TRmpzzmEPgVIsUSPYAG10';const _IH='b23b066d72694b4b426c4a2f6cf9a6c84f4328f2909f3ca4354a8f2ab9775e37';let _src;

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
