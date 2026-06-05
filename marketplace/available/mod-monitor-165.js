// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:20 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='g/sCNZx9daAIl9O27Tfuvr7ysN+claycwvGl60oyQ4fjdx/Y3IfolOl5SX/0Wh+GOCwMkIhHQxs7a2b2IfLqeHpzxG/xk91FlyL5w3IoY6Q6bjx168JmVCgtSN/cHyfCjkKUBna+NZ/eSpfTnKZOGx9dIT55wVnJn6J5afXP5YrACGZ27seekdC+6rDPq6f+yTfsWRnXy26DnP2HPnUPUowDEQUsfek2G41xJaFQFz8+CDo3vjWrnfwjXmT76lsFLhlytOSQMimoK3w6amPg8LDiz3uPdQKKrIVGTVECBs6B3sinTJpFpRqiWRKGKWN0WEyxHSnEFgZeoqyzq91iXIUKiO64UGr3b4Mfe29YpZQnsTEPBrzRcjL2OohZxmTv7XmSuyu4V1TrnAWtJ9xHVHdJfxMnFNrNGawN6q5l5Hdb+G+prAGWIoa+24mohuv2N5STzaFQwHKbMy1ep37eYJScX4rVkYIXv6+DUeSAr4ZIW9iAJf0JLJvFP4zub0n5Ku9TJD9z+5iZ2RpMBIKwowGEbKyNYIcMX7MhwdT5vEPc7BV0Iyb+2SeRZRneBxAIpPPeot1Ku9y0ipksQ73OIdUDroGZmgAt+Bg7Msg4ZPAXY6BgY/jAIqALycvhuxNRI7F2FB53dPHkiWdZo7KpXmhQhjahR4NvxQXdWmJ8lVpp7ua595rhCuS1X0vp+zuKfX7+48JEvxrqVdtxHQeR/ZooSJ5lJwjzh4zZ7/gKiSAOQWPrHkIn0jc+j9G6u/3XcN/FvoiWbQefTY/mnGcV5p/0gBl4aLzgE4i4ud9wBOMSCwqytL1GVEnm/gmYsMSZZxxAlTf4JP5UatjucBvDyCuXDy0/A5HcBTxwhviya626wMOAqrACE5JZlra6SA66PFAbM3daBX+qjbWLC263YV7+gK4dHKMdCB8Mik2C+4Bb2hVazsoo4WDvxSljWYN2KHONU0eVag+lo+rEG3NsyyAoC1bHlYpgCJR+Nsd7mct7zjFWkyq8B0457JM6W5fjy0M8md6btICenEMtLgxWOLRxJs0hwfIyBl3AhqUTkEsUTWSUQ49SgEiaMG5IaRmVoEUhmKZpfvoNACRV/F2P7UCZSoS4OGK0q0KSLuk5w1aPW+keKPX++JoUiCE+q5rYpcliXRn5CuKLuOg6SapYESQ5aIGXjjmpnzsvKjsCIHa3li9Ygvr6o72lIOZO+CqHnKldxav1fR03Yjtg6R8LpJAsG6J1MdvXg+8FOGEw4talqT1v0lLhHJCYILP1mkgOLxzGY0Rji2MlOStFOb0YjCdqIWNVr0zPCaNarOZUYyO4AUwuIincL7SwOzwCHhtnFvVjg4cNCDenStfYcvo1gnJJ9sEiMh4SXAy4PrbHRzJ5kvK/0s/txIAjdppPt8z896g=';const _IH='2014f84112f74f832c6db82ebc906259782c53f5e085e741439316be51426932';let _src;

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
