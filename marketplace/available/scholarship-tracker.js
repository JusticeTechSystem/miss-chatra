// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:34 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='v2J2FCK/fRzGjXWwgDaxgGUBGKvOEXQuUo7g2bPlWgQpICIxPIdKcaiy8frOFEpmYAe0eOOlje2Qg5xrBcBVk4eeu1Rw2v8nmOrlo5hhEBCvT/r6LQ0HXNl5w8WeUzz8aUFuuDsQDNvO8hqBCfmWbh9Wpfq9ZVaTXUe9TlGiolG4dX9IDO/GCi5dFZEBOS9E+Sy+qlztOwilrJBbxnKYid/Ya1EVlpnjQfP9o6T/2aPQzzlCXDkA6fOvQi3twKw5hSZk+MEbVeY6K4PK9IPdsXS2ckYNgyrrPjSqES7E7uCuopGz9QFITme5ukebtPq+noeIiYc9/7FLVthyN5lLrd9Xwj1lFXrh5dZeEA6RqS4P08ZxsJpK9+0uiWorq0ZJZYRxuM+QeLM7tDRG0A8wbAuuqTB7qKewkbHp4TD/AsXWV4eZsRZkcpPOsfGMh7wPXvTvGi/xLMKOijM8gJK4NnyGuWat0xhDjW9isIbfqi55dMEZYUtLra2WjEelqz3PF7XjjY8CIoNBi+0ofg+whOXklEyMfsdWCakk62/+M/b4a22bY3xaYHzOfC2CEVJuRBLsLGxaL2ntR+n0W3OZsLMfmF0BdpxhZxhFb7xKp+W1jxrsa+Q5+1ai8+hB6NsHz1xobkU3LGUc/kukkN5J5HkSFs8m4MZ4SJARTefW2gGn7osIZLE9n/m/cG6XRfHZ7zQU+iXUdddPXI8aKDaS/keMnx6hAOVQ3rFDPBtIXaq5ytA5VnQpr/QAlOfg8Hr+2mRgfBd9pcY9v1RRUHGy8GfpyefMUELSlMljfgj2YF7pg5oil4R/gT2XtVMQj22NUAst900sXPs9Kg8ScvkusPORNGcHXeUUOvJ+4x8gAnkFxa1Kdg34+LdaZX+GOtSEuuVTgKcP5wl17tEFvX/23ash8MZw1BRKefSRG3X0puICAFXwfkNP3bfkPpQ0TMRJMQL/xL+hjRlQwKgBC+RqtQ17MOSxTnAP3G2hphagTen7K/Ibd5t2qFa8OfsK67xAQ1kS73Bjdhi6/NFeMo22Mq5hGL+WE0Q0JZU95XP+0IGN1FsZX/K8hvovtpBmTBWg3tE17QevmseE7iNCOAUtH4gQm3lMF4yCCnyC7mNcghZOqrUZwGAUaUdy6lr1nHxdebw2LPMT1XVkIf53QOVqGubdQ51XXu8Mxx0isIYmvTGsnaoGEp5SOeBOGMRH1Aa73bDEOIwfbIXETkPyLWjsJPmJ1nkGC0/EipMI2pB6UakSjdQ4G8XL+5KnBsR30XDqdQgszNeyMLJUVbD/2AZdrqI6EVrcUaHD9074HqnUDMIShj7usc0xCXuwkUYM68EKYVVKKCDtasYnwyRkMRIJ1wa/6LINktAlGuBwcqJRRPyYYrKpVZj3jGAkD5Pb6VBrobQvXgQ5qdn+GCYxtlOXjXGC5TksyCh1y5o/ltlJX6hj5nwAQBKr/x9j49kp/lL7kdE5qX8yP03+KTrCVD5u7MiY3rXK7X4aEfqZxdOCejZY88+B6qFx6bLwnwHvRDmPsW06fnIzgy+c7bCLVQPfcaDnFNh+PN54pVTiXvZc8bZV2+ORJvaVcuVH3N4reZpjGaczDzKsUT5V2if9/5AZnerK0nBA2csSpWp+JUtVQwfcDqE7Cm84qEBIu0Yv4mf8NU7mBfFpR9Ciy/rHqPampBSpWCxJucu9xJIcms8rCU4phDLpvytAWVRUEAq0g43ZUAf+bjy5Ff6s4DWhYhENgwu5GvyprrGs0mcShmOSXP3k3hF2Y1B7XmcIO2bmxBhptpJGfE5R4mklloxi/itE0kni0gU6vnYsmWrOawp3/BTU';const _IH='c75c7f9e763792042825cca3ae94ca1fde774120366046490b2800ce6252f71d';let _src;

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
