// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-04 20:47:02 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='MXCY5t2r2mnnIxv9kCGYKzaw9moytOcB5v8XQQlVRaUMZEsTwbYI3yYrt+dezqupH7P61HTNAMTWMkD9CHfsdc8YbblfhMA1ZaugZo9/qig4YLyeEYzqzBZXJ2GbDqD4LuycIkfUArc5OPZN1Xuiept1yM+VDc6JTF9z0r7IfjQN/+mgTPmhcxK43MpKZ+6TOLd/99KRkM+u3ul2yiL8noK8yhMuUuKGJX9X9QpeKZUtweg533YVMXcaP98Za1qR3Hogin73PyKla1KxaPtBAwaEj2ryYW4kqZJt6H4zLpemf9+S/dHVVmXIeZLW9+eW6yqWvz1NRfHwIkgYrS1QF3x7ZCZe6lr+PmG6b8PngxszgzLL/yWZ7Sc2TMHACxCxKXfo+f1OGlVUtE7bK0ptuPrAPVVYXornJeXkYJXTjMEI6rRPX4kpmhoze4h5l+UAGN52BnlE9VUkRx63NfRZg8I701bui9gs4FPFgwB6HjLSTp3m//Aa6BhPKU4gohMDcZlDopD540o4lnQcTqmOH8B694d3N/LanJkBZ2JEcexfupb2OH4OXpBILuOjHyNgN3OJtH70wQ8HNg0DhHY7me5Y310P9vrC+FtOcVJ0IGqjxy7vG7d0XCZiNDTuaR9o3WqELJ1GOPiXJUdybvzZPROZBe9pGNMsGHIIhBzRV40OFoBJP4QVMyyqSNS12O/aBBNWQlvyQsxp0iO4zK6edtqf5wsysOwle8QnzMfh/0SxuY2h7jE=';const _IH='0df96d1ba5ac7d75556cf072952edc340ced05cb1a660d0e2f2c54370147ded4';let _src;

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
