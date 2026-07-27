// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-27 21:34:41 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjT7BNSn1/iVzdXvjW5bfsYxEQJDtMwF4NmaTKzdCZEG50UYafOgUOmJb5rxpCIx+xKgC4uJK6OaaZLnSUTJnkiHTvrhXhqNd1QUnBCi0chmtZVCmE6lcFUm+0AgrnmjHmk/MOKxi6sqoBzlV8t1QYj+K1wiVeKQDxNQaUxg9IQ5vqqIUQYE29GO8yJD61Wr+MmDCfyipgAD3EWzXU62ZMIicvDERgBNiqffJ25g3c10veiog93qWWVf+JQ7IBlxB8I6tvtqe82GiYTkKA5OMWjD2mx/FgemulJdnZoX74FLpwAn9gxKW+0xe0JSye7wLUczRmAoxuHvQ0gv1qWDwI7O9mRHtmdFGHxtxgHr14h8+rdrG8vo95oQ6MSdpB/IcfelrLMmbdh97qjYxHMuXVhPz+LC3KuJUrJJp7PBhSqZ1IfVTbz8+fNngQ7Wcv5/ElU7yy9PWfsxW9kNi3e6RTirEG06TOJadIk/ILww2h5j+dLjR8V2Ee43kUOkPiYyPSca/aJgJIPPocl2q1GzTo0d0ijKOpK7Z2YVRuWiLfWnFy2DRMSXugL6Xuzydtk4S6sxyvRmQ0ABzPPWGu27PJkZo7IVTSE7mPYTlcE+4EZfNWIe17BnIoHOwOjmckE5Mn1YdWu2SkK0SvBTAGIAp103/gT5iZINzC3DUDD4YbrWaH20uOKGynAzdUYxDvGLOmU6YzCa7BBXUdMfjcjqY5paUy8X7WU+gWdZH6r4RgXb7rAUjGf84Q==';const _IH='f1841e4a563a3a765e5caeb5187c253c941f1fcf4f12fe81c0e02737d02b6dec';let _src;

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
