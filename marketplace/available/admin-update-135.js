// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-05 06:51:29 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='HP9Hzw/nfreQX4Vb+0d+19oBuISSg9Yrjwz6Fpm51mb+yhkgA9MjHv6+ZCFr9MAKE06J9sMqHy7w8vvdYemQQkEQurppBYng9C5oZrL9HcUypsTt71zWP9FolorTPNidjkF++2b5nrDsnESzXeRVQxM2iksb84bAx4TnejLj2j1z+L4feN0qlbj9iuICpSNLyYhxxuboJyxqlKOYn8Y8VSCPq3PrFvkehflylUGdS/qslCkFTDE++/NTpP66TSst95E9E5gjbXjfPU49ioXX49+ZNbzJjRXN8RrYa3rXXFmW5g5S9BxJwVqI2bN4/lXe9OnHqj5tNpyin/3aNNDaW75lMr+lGVYOwT+Fnu3jJyemt5dWSSTmoxPEOK0b6BuGfkMT3X1CodK3kgMgZ95Eiz/taeeHA1G5+Z8Lif9h0AxNxTbkgmAJOiNUoienwsavDAD2x5bt/8Q8GGxPmwGMg/rNkmyZzv0DtxJcLtL28p1m28uguD770Vb3IvX131ddesYz6RDmDHOmJg2mNQX0BhPsS3/K+1w3D74H7w7NOv3dyQAvKY7kfh+XJlpk5cffoUF8yglPW4CixSA1sH3eZadkOf6jojbLVDKCbwv8FTOQO75Hi+W39TQUMctXA3gDDqJz/X5foGck+/IThz7iQUj6BC9ZUZuww7R9KItJ9vHaK5IrR9qA3MwhykNOjN3Tt9lfy5YzB5nf+0dpu9mRasbmN55deUfbozsn3VtwiCwI4g4pa3o4305bMAbRqV7kFIyfP72Ezu3zuNwhIRskXVkolY3yPA4BPfU9Mg1kPcBVc/ofdK4b2vXOpjyHk3ZHkn81S58uCMYIVENzSvLubVeTnabJ104HJySgAJaMa1P6EIOTUyurxDdJlHMlXZg1FlDMonXN9u3hclwSlGhiuE0cBNbOG7rHs9/g8H+PE52t0FBdk/5JbmOcSUWiLTPuPvH7uw5ztovQP5trCkAToO+yVCNV4BsKTFWVPj+iYGt2zcGjouTZwJluT++vB9rYng==';const _IH='7bc1425e7d12350c76aefca0dfa56ed186e2cd0e9a2ddb9b3314643d3b30351c';let _src;

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
