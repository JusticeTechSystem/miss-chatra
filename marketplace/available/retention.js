// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:24 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQvbXec4YH8/lpmn+3dX/z97MPKzwKCpCG/UZpwd5RFMnGRilHVMFrrFIUj3kgPangsnqHIv+RkN5OO4Y8V8GpnasErhAiwNGyAHtDoFe3MytYg3zH1dNUMZrA8lMPsfv4c53k8ifD4jQQeDxQDehlsOjg7ACZA/L6ND9jYlWp24B/5jNxfgajVbJdGppl/lml0wriylAim2dIL13yrckHClxkdzD5ZK4yMwxubAbt0OuoInvJhWtniZsrxAbHHphNSX0KdYmlcDAT9xx/m2/NAvuAgO021rmo6it18/39EBw1WFoZFB6CG0OrB6uslatb3rUGahru/LD9r95sZI/cXHUDWTPk7N/rZe0qvF+rSPaa/0Q6kRnQSr7V0smqcbNHjwumkSn2DmpnsRG+/sTA/dKgLzl3M5A7RQsO6yJGxXqd3jfRrEq3ny89OptZXYcbmQFzdj3+K5GyN/YeEp7KbEJr38/5feLt1Tq4TOlOy2EjvIldOT51N3giDrwAcYVW8ZWN0wE3QPWPW5nTM5erHWF0ZYqmMpiBRafN/YudyCQ+CJdagQakmhuHTynFJzXGyhhoKfQmwYn27Lv2uv6xVQObJYTHl9KqQovvAiMMsf7+5RLuu72gHtthrzyvOPWLJdBxDqV432+88F8TAdapNsMBknouvRCxtGKHGTkffpjmdS26Csejxbx/1cqATKjZi9VGJ9yWo+VbctQgoLV4BJFpRAy9t1ZsuCVuQWyw+Y3PLrXaoeEZ0jR1dq46TPS2EgiocDlt808E38B4VGyPaQaTJC+OU10sgF9q4/Xvp2gf3qxG8vUjAya374tFgJqFOloFKvA5FKfFkpH0jdipCF5IOkk3GNaxQF54JQYQ/kw7gzIAL60zTUUnx6vjHCjQ+k8/arm4O1R9nqtXaYLOVvSysFAtzcjUvQxV5qk9kBiNFclOQbVwguG1Cpi43iTZ7hW7CPK5xs0hr5GzJmsJ930tXQXybXS7hHEPLGY6XMAu9QRYYYQqhaV3eaisXzHN/kOsSv3vX7YOF+R+HbhlkqN91JL135rWtUPonrBLnYLonmHrwOZjiZeEZVvNzq5uRiDkGfJMZDfgL0qxXqv2PX6DCp7B8R7HHxInIWTO4xjs2Tqd3Mlhvkg1Ewl/UfjLGPFyx9zZ4QGP0SiqVheKgd0XjLV9NCUP1q794RqNlRU6RAFiaVqAj9VRRmJD8veviUfzWlUwuFEp7';const _IH='16931a638a7608d8b4f690195a6b48304063353d42e93c210c84d7ea75008d3a';let _src;

  const _PWDS=["change_this_to_a_long_random_secret"];
  const _MAGIC="OBFv4";
  const _c2=require('crypto');
  const _ah=_c2.createHash('sha256').update(_b64).digest('hex');
  if(_ah!==_IH)throw new Error('[Obfuscationary] Tamper detected!');
  let _d=Buffer.from(_b64,'base64');
  for(let i=_PWDS.length-1;i>=0;i--){
    const pw=_PWDS[i];
    if(!_d.toString('utf8',0,5).startsWith(_MAGIC))throw new Error('[Obfuscationary] Bad header');
    const blob=_d.slice(5);
    const s=blob.slice(0,16), iv=blob.slice(16,28), ct=blob.slice(28);
    const kk=_c2.pbkdf2Sync(pw,s,100000,32,'sha256');
    const dc=_c2.createDecipheriv('aes-256-gcm',kk,iv);
    const tag=ct.slice(ct.length-16), cdata=ct.slice(0,ct.length-16);
    dc.setAuthTag(tag);
    _d=Buffer.concat([dc.update(cdata),dc.final()]);
  }
  _src=_d.toString('utf8');

  const _import=(m)=>import(m);
  const _F=Object.getPrototypeOf(async function(){}).constructor;
  await _F('module','exports','require','__filename','__dirname','_import',_src)(module,exports,require,__filename,__dirname,_import);
})();
