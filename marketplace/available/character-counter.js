// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:59 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRGKK0l+L8nLXoXMacFK8+wSlVfPgjIN2A6x6sA3RjKlSvHGj8qjTjILeYlV0z/prHcaDmc+Wqr74iGc1NA7RbWZOfbL8n0kYURGGETkPUfTnCSg5Xbq+CUj2JuJc59nG2UPzDNYPEj/9+mIO5VUl6qNFHxlSJiejUwi/doF4zlbrCIvKAS/JqBu6aYQ0zoTHW12iXyme8fzbCM8JbKFw06Ly0rZhPW66w0NZx8yy5AKj+mI3TzAt/hYjXsHfEs8L6GSkLjrua0gYHHZMsvavk7g1rDtKPvO63Js/WrYuIA8SgaBn98FSoSH4PV+pH322zcGOK0LXM9wof7ONaFn/9lizekIgf5XWC61/ejmzTVZCVFMvEOK0GPFEnTIgLkntrEMwTqKFkaqJlu1wPRAjNHzD9eJ1GSWOhHXuFso+g9HBzJjhsekZBEO5fnawIyGlIh+cjgvQbD6VVY2BUA2gQOAF3m7063h+y3NuWGVpNK2PpkucHw62wE2L77ZS1OyisL6Hrh5GMWYxtrbU3iw/BIHORKbGiRiXKuRbUHccqhD2dtkpd6RqqdWrJ5cgGEfWGREipw/VdpnLPH4ExGRN7DHHx4gceYAKDFTIBrOgFodQcU9V31pdarANPxnKpfi8kpU/NyytCr31ZR8AxSHjiPGyWDmmrtWIir+bawhldvQjg25NMH8RamPw+l6MUUEwvaDF1SKrUhqrjR4CLX6sQcj+5fZrQ7cSg+jwzrkSNIW01ij8Wf4G3GUOztYltRljAKfeozI2bLzCUUdb3cnpNjncsCXYJEXTDtFykvuhB0BhPZKngi+nd8szm7alicpNlssGp20nsJKtLqPxXMpT84Rh7k6GIZ7lwyEwTgJqOrGRGZs+UIUWaTGB3YgwP1ES5bQUFIcZ8kwr7qmXLp9uIYkbfUFBthtb8fjrZtYHguhj35Im9wyiIPcSyEKJYUH3pqXT+1XcxniNEkCKpZ6IvWpI5Q5BP/qnMAcYZOgVjujpw5YG6pSrnlAosxUUzognZ0oZxZ27T4prx6rWperiJHFTENcO4NrBx/ZCX+EJXcWrsQB4iLudkLhwayqL7w+huAzDzBmQf0nl2ku3tseaW+A2aOddBaoJOG5sSEO1dc3eDEDOl/+fu/JkDViQGEecaVGaRccYycRH5lG15lICHTPxUw7LiruXn2ehuqoUxTZN0uiOMLZrPzabj8I4hOTFMmfAxZmdHyetWvQBX0caLCKexSOd0jmlu3ClM8G+GcwqflyU6UTs8ek6CM7430GlvuMCSmbNVvxKfkktMQ6e10wibJNe4pKeZbs6/yE/G61t4rGOs8p3toSAdrzZQyxwC1mJ7f0Cj1y4sdjFWgmz7Opc2kQIIuFXEh8iulnHjewJX76776plppsFjbmxtHfIlEc4XTbArqRLK74lGJdkkWYAH2FDSiX8ufA3TqVRLDVLIMa5VZS2kPnTSNEKPes4DYkWCF7ppt9Mek3bUeI9udYVA1SKBZUsZzTX0D9bcbKtzP26Vq2AksdRtOXVkVu8ACZkpkRWL04wiVvIE5lX2RtGv+xjTJ+XrUH3xOW1KdqiM91dqwVqxZBhN7YwXuhg2/kxbgdxpy+o3UdiDOyNWAC5a+1nCTfNpTWxotTiqFfiB7Nddc6DpPe3svnaj2l7obTKuYNfLsnkpyfaRJFqCkXkA5qzkIgrJAPF3Yjwkn4SgB';const _IH='2ab3f949c9e7c2d0e9b6e63ca95c32ffb88fdba541c45f2f6c404783acb47a1e';let _src;

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
