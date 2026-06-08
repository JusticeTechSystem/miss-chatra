// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.0.4                                     ║
// ║  Encrypted: 2026-06-08 23:31:31 UTC                   ║
// ║  Cipher   : AES-256-GCM                               ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.0.4
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='kxXIORHHoA2uB7plL5loZmCoAbwkr995R9+9jogIlYh/V3RtC3brRpqHBAknMpmbVA6yV30uW5SnCc/CV9keG3O14P35CW2IQOVgFLh7UBVJpuC81ipXxpiROqUqeC3Jmqx+M8Q4wcTli1sbSdP9clzPtMU/8WQzgaak97dtzgS1O6TxoZf1ySKwOY5sGbYIBNj/OdjtzWjh83EnqjhOz2AvTjTxlUerwSDIIkYvtl2A7q+WXWcLy98wfGG9TzPzbDLCZOb7B2zO6+YzOpH+jAxXBRGPJSNp72L+AA9HP3JwqyLfCbUdgwTvr35AGFbk3vgrXHnDeWi1G2wAMjYoihY3XHs4cV4xr/d6RTfwywtU2p2UFbR6dYECfeRPCMousMtILWF+PhrHFIvpS6n9Xw13Ati9kOkrIbo1bwaSw707rW53cwUf6vmeNHgrtm6nPGdevil9DxLvErnbmxWfUpaCxoU5e3VXJfXKHKSWMe3QQZWRkLeha/8n6rwOeZa2CRrZnURddFZJRjvWmlsFMR6HuMkNOYIoxWJfHqF9UUzsdcPa65j4BFDuvXBdi4i4N3icnStA7XwjJVgcJkFXxq6k3b1E4/NU9ArAwdVH97Gb3FQeWtXd9rV/XP2/ghvIPEcihssncjNRfTwtn043/mISlKAq0cNZy2EMtHQt0Djr2rsLfuJfuHSJ+K666amK6Ogh1pKTe8jshwUPe1uqajuS8Tru+8jFVPDwzQS8YVMkOku1ZJvVn3UdT+m6fnWx1fBzVeOBnJtIkIhmZF61XwizvCkLDCjqqHJVj15isCs6keat92yJODvRw3DZrLi9BBcwiOnwz+RBfaOW5i5gdqAKFbwPRc1anj/gcU1dxiQPJRWsgT1aa+QP9+dVLlKZQJ/6nlYAgx7o/5xBQs5q4YlkKbBTxOdb1LJrDbwvKwqP51c29e9GnT4he4k3/eRvUDDtbJdcCro+1nKV7oWH28JLwYVNA54/pt6fh3MDNuqrUuZC1rSsFHxxl8WwS0SZ5Q==';const _IH='d2ce19393b8b278da5f3d7cecca318ec2c5d32b061d1e8f643a1cad859666b9e';let _src;

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
