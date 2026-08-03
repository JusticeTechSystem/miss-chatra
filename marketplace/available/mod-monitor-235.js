// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-08-03 14:40:31 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ3gSF+HHGXoPvtipNothBjfU4QEB6ScZAV/o47dDONXluRG5ShLVwjL4sv0DNtyqKrttCMrfY6XnqyCh5ywZvEbPuC8gwylPmd5FPbbIzeiGGoQ1jwqGjhBUo6jJZab3ZSoBtsHVGO3fN92qNsOUxoh9Ca3HBCShqDwp+alN1gtWAAPkEGo+mFGeQOyIbWZ7mZNYqyyYX0T/1yeQfz+0GQZ9F1oXnyswvloJBcX4U5noK5xhRqb8OTg9t4CNmkpPVe1LPmq2Gctp8k/3XEJzd/HVEfbBUdUbEnWBJprnpbRh0T5nVjhCBr9eatG/7kxW85ro7YUxUR+CY6bTBGeb/bTD4ZgGZzFH90D0skOjx7iB1EsNuphcJgyGjPZYQRemq2b85XQhQqomiecWnXPbfgNVeD+C3zkm7SKILmPoP8AjOSb0QivLpvotIZPy7dDwSeB1NbcNYMurnGGbiwxGzRK8s1HstsQ3mdVQ3CMH/cBZ0lDlxfmJbPfH6Zeph6x797L+uqcJtG+vmvVFVgfQzFsgbqhhVXRfmcy7cjuF6+9bLkNj+OkWnONJUiW8g4yBsY2KzGvnsZTDJ5n1PzJ2VcpjuQpLGnhjiUa3Nr5aQBi3bhLBdbtAE5UuAXv4F5IrEE1v+qOkb3wG8sJ/NfVHSmuLy8BMdBVtBWYzbo3GSAh880z4SurxMAbjxEn6ZfDXVmd9BMRVo4KMfa89TzXJptSMrERfR4K2K/jPU9xW0bmmI0pptTC+fzF3uE6CT/+wPKrjFlafYJ9BYeLGz9O7wTExoMKG4gHLQBLcIIgLNFaPhx91uATTGm1P0eoB1+NxAbXktF3b8E5VKH+9Mm7BkYJ9yoi6XL7ob156f8HmUAyH4ycdcyzPa+620g9WT7Q6NaNI+3LOxpua0fQBwVdj8w6SfxfCieqSNscsAq2XFpH/LxySJgvnWaYj9OGxhdLyW1Juc+HXiKN5j60DGmypbnO7AEoKwrn1NRudHlvDFw4lDuO7IMRt5kAEiNn/dT+9R+iSHujKNvBovU//Sel3qqvdNz04vIKFottUY+tM6yHji0lHq5pQStzQJlZwtTYJLjTVx9K06B7SWVSr7q14DF5773ChBT+K44skks4tD2uknYsLeooH/rozT6yXUm5V7ue5s7ek/yF4JNfRKYQY+zKIaqWC5AAP1ep8mZyvK1pFklfowIOELxDjzHtuWHpYTT1KLFv66NbRrtVqvpONSOS6oYsuxzLgIFBJqd+ZBe/lXHF7SB0rm1ZIQD6eQQEk769f97C1uuDTiFjEI+mqtwiSHKttpw0YjAgtcPRY0sQR174jG76US3+i9pHBHHg5r21x4Ht5KigqB3xd+LRZb8hJIpqiixviQc1uMSyEF9IKvQ02nujmm5OuodSkYwvw==';const _IH='a1da190ea27c0f2af7907679e637259ceea58ee50b215dec9d29fa2aa377b7e1';let _src;

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
