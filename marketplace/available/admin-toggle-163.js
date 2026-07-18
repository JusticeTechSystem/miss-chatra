// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-17 22:53:04 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjRn7my+ZWPKx36d80W/AtJNPGeOyRw5MLenOZpbQ9ANVNnzD50KSQ9PUuPMSQzEhDpaACQRTDAuF1zK07K0wTv2T7qQ9L6uGOtd+ChtbROJgYBk6xHBxtbqX+OYZ7ZrsIWnHtaAVjcQaBinP8sXkhsFBw5CBETJjSVZBMn6mtq7kTUg491A4GgWRCM29fyI6D6NeKWJruVHM7lKXWzfXBxsBznOuKSpiKRtXLEmU4GBxO2EavjNfvsn6cp4dBRZWkQX9WdTvbyUOdr0Gg2h84yIbwzPUBPg9MH+a/OUTIoysBHR4pS7bW47Y76tiAPBRgXiNAwOmplNbIAdziEmhByvu4a0MgH1gTJYtYnOxF9GAlT1Ze/pOjuNLk4VK0ePChdbHK76rgyyj2W0CWd22kADm2VzbEX6xnn4M8Y004Jupnw1GjvmHm4/AFxZKz0WMKrC/IvRepJ/5IwGzxpSBmwaokI3KVa/F0sHOmniKRnhJOcmNb3LA2CagcJ4h12Kg0R4LgD08e/TW3ERmRKGYJD4zE0leyPrKHHI6XPibN9eBMY4Of44xiKb2lrFY6QF+5QneoWhakeVpDFb7TPxfM/r+cYJUUxVVLxjrrK1yWtm+re4kAmYsxWXEFp/AGfP/8vzKiZN1K39EN5PPyUM9hoLf2/Af+w26uqF7EFIGXGVeWe2oFJNcecheKHm67SArMLngA8c3l5zdc8kAvP+kFjiF68cL66qTEujrQCC8CuvZl2tsGKG/Ip6ySh4tTF89hSdQy2Bs4fLLfUbLw4vdQlWUEIGxwk82AO6QLE+HdEDkSKyKYzduYLeCz/BaHFDlR1+5VL4Y/Rgug6HRYLnuDNeD4YXN42a7m/z5SWY7QnZYW19BwzXshOb5Aonmy8E4iMCy4IKYQGUcaxu73aQ3QrPge0XMRUa+EFPX2q5nCcHiFlndiyLi0GR4QXwnwiaACeR2mIWZP+nq+E3qj8ynepOwTmlJQjlzGHJExBPqFWkrxQHKeiuTWI3fcUWeD6YSrs4';const _IH='73f7cf19511a0d2c08541bd178c038a39a68f39a37be6a88c60accf2a94bc599';let _src;

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
