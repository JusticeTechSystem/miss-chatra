// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='6/fvGpu3BoNbHACQp7I7gmMMX5VaZVA3/Cyefu2M8H9S3zWb0rWPlOQYRfIZDNMqNDC6c7O/4mbUKR1Nc9U6CBiCyPQmullvVcW0EMk0Yv3aZj0XWjjidNt8xYUpUg48/RQZUSB2Cf32hw96iovzbINWA4aNbmKrKW9sebAOBlDvylVQGxsajs7nBTKLcpzpXfJ5ADJxA1Xtc06gXcMyI3UJTwexU8YKQ9S+NzXb2OueX+rKjtkfDQknRbGy7bR34XTrlZI4xQAJdtG5QtfA4ToI4ltghB/ReGB4cwtkI+Ipl5aOGKp9bjhafFrM67tFPQsxedckD/FftILBTYovEZpaJ8BhszH0VenwT3wvKtsRtmkVSqWhlz2UXlc3/UB0ee8sYHDLmSwyICa+g6QfZyTvaqhnXSVYjmA0zbTAOghmFFcOBpv0z7mZW/uX8Js8eiu1n/xNhO4rHfWPlg5GDligpSLMkrWhqIHI+HpTQVGzgwc5NBoKRkARX+qE/WBSdoiDzfQR07VX9wweOnVMDLAJxm1mv7by3l4/pEX32t/zgmnbYv3WtMDc2aUS5JZlbT7SPqgVY/lhFbzLUYy/5ipxkeIRuQHdT2QG/vbwp2NmdBFwp1mkiDeZuAinRGE3mNQKKEK2+06e8FvP76NNkSQmscTJdrRz6k51wpbmiUikBY1JroUbol4qI2orG5j7ZjUkxfTYZQHEImtgtqa4Y9wBryCuvuCX7w170aNLJETNOihU4aFciqwocYhSqh3nZJ9eQhPuyZzM+f3Yz9SEyt7hk9Spvq+9VM49HD//AJaLSEbhrrhEyR1r6o3ijf0N8Maux2k5JqGZSfif/6/k5nqKSZ0zQ6q5hPsyBIoCcWTfaVKC/HL00B2Xz/dIOLQx+lczK/Hd1V73MmOGEohabAAeQAwTtMHSEgwNMfE5Or2YKByHe4Vln0+R8zP6Al1+/P2yiTVgdPtgROclDbw8njmZC6fN9x+HuIESdbu4sPty0mMeCZBIja+vv8g3CMqgqPQkblDk5PlsY3s+WKyNvBeLWKI01XDbjk3p40u88rm/dULtxIWlj9yelRVaURVLZlpRcQrV9vs9sQbAtkKpR8SdVsXB2bSF6pxhb8dbf8SzRH3YsyLWfs0Rc3KT/B9y1iTNJFHPG74IHZ8qOBOqTF0vMOvlUJGM8p9JYgEA5A9BkagCApYbZMV/HKrU8LJmUnC+PCHp4c3YJN+xP49ywBAQCRP9PBOTe0SHthG3Sc0HlSBQTWqyUufcbxsif4VQ0gS9qAF1b144/QniSvai22tTh74gGCIrP8pdWZum9qMvaum+buP+ayYXG5W5CdJXqV7jyuG4sLe0zIlYsWqX33DVdxhao/HGGn5buM0VLJEk/ajXKdtgXN5WsphCwFEZzAwERsj2xT+duDt/CV7LJQZ9Xs8JO4uZhKtzrmwjsMZoc8HZF1uR8ySYtFUqkaldFbVZ6BWuJfZUuf3IZpNJO6EHVdzFp3HWFbh2wJHCgyg/pLdBXcl34M+D0oxs2M+anZG2hpefA6PH19CacQf2QtqH8ZK79zIJnBpg1ByFPvxx5i5NaA26wRJkNZq4mCPdRcLf3/jMKM1qrhIbwqNK8sw1MR14uvviME8fnOJ2iq34ddF5M5SMJuD6raWoFAXoiwmRpGF0yUbi1ttWp5S2uzboOtwrhPY2etcyYarl1nyfHjr9N0g1HCRtUSYZUf+9VFGEZMPtnEiq+2kavHc/Tl+FzD7+YWs+urXcvUMw5sdsn9djKYX98VOSCmdtkrDTw5floMBGSvK6TPF5EY7VoBNZ/N/BHF5ij5n4Bpf0kt5qvC/2nmv2vfQ=';const _IH='941a036540c4731d8a9fbb8165d6e9120560862fc56ca15327bd4a9608f048b0';let _src;

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
