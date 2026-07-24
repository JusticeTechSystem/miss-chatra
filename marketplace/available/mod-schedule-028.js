// ╔══════════════════════════════════════════════════════╗
// ║  Obfuscationary by JusticeTech                      ║
// ║  Version  : 4.1.1                                     ║
// ║  Encrypted: 2026-07-24 21:48:11 UTC                   ║
// ║  Cipher   : PBKDF2+AES-256-GCM                        ║
// ║  Tamper   : Protected via SHA-256 integrity check    ║
// ╚══════════════════════════════════════════════════════╝

// Encrypted by Obfuscationary by JusticeTech v4.1.1
(async()=>{
  if(typeof require==='undefined')throw new Error('[Obfuscationary] Use Node.js.');
  const _b64='T0JGdjQ8dg5wlFbY1qGGe78CYzHQRnj0euw8z7QPeNs2tqQTfP0Z8lrSUG+JYdrqctikE3aYVmDgB5xQ4mEvWnRBCBQwS4haLIrNmG2m4d4epbF5fBVIYYxhiDnVDbW4ZLIRzTGAxEsKhucKnB6TB7hAhuLQDEOQbufVSwRkwDtkyYw2O1kT7GeTo+I7+F2iAfjhc0FYEsvcPz8trTn31VyGDEKOWPeoy/lobxRu28qc3DMB6zro03/IYFyW5ajsmpLewdJOv6ovn00f0ZOPIzPy8X2NoLRl3+RrtXCjHFIaQw2qQq06vu22hBUFsX7gXKIA6JEr/V2D5IBBHnU2loKaXiTzToRFs5+6rKI2Czex19mS+auIOZa4z6DwjGq+RT+ihnW9TSRXnkEpQ74dnQpPQa9IyOWayIFyfD9Kdbdl38W3L2oQEqkymHGds5Dwd0avQOyU4kcq2I3UkVUx8zrW9e44yD4sRRPYwBbPlBVJMaC9sKQd73XyrecE/Z+dzZgaCgTMaVJJWI9HPKSZNks/YiVuyB6jR6/S41i5/JrnTFKJMKhT+RqKHRpOx0+4t/CEC9LLsetLSLKqR5hBVYRoIc9Q2y4PVmBgPcldYChlhpWnVApSzc/eees2SZamx9e8OnM/Lg1v7GyDSiqTMN3z+x1uPYS72OvimczPJgm/V4EHmb8SRqwlEKkjezO5valAoVHLXNogoiwBXtxCawDWNiLBvrCWwI0ANNqD04T9zr/zM/b9eyP9jk1y8PWqvSEOcDpe0zTQjUp2qaE/WMOdkx8sRSMUIeGEg+Vy+lR0NhGN67kyY8X0kFleG/KBGEbP2yb5VUrjCe+JuDaBf+rIvFWJkI5bne50h01z+K/hrUVAVv5xTvqKg6hBiblhWfqtQh+OftHmeDia8v8bSa83AwkQJ4mZFNxvvAA14E32fexUJ1obvQaky2jnbKE1XdpE7LJHPT6D6cgvXvYibTHxfsxpd/LjlUfoX3lyxsZmiYkmOWpT+fAkhPdFt9/3DtYHnPGnXbLVBBIXESUXTj0fOxDlKZsM8UrSq9ey/szzfNgWL/a7ZkQqZ8GDWBK7P1kxcXJSz2qrX9KytiPi1nHns6CL9eJjfFbi5f8zbtXcG9A1O2ZT9waLMgvglEGGYj4scJW8udpjikp08z5QUsjiW6t2SNqfsxwNazWCucJS8plBOpOnLxnPER+BYXRX/Ap8nMwFSMVmOAJ3vAW9ZM6VdNcABf0i1msDm80VbE8VOx808s/+2Dd7XsmqOPAqbfe//eTWpN0mDpZgL0wLuiOaVseEWiPCpu5G8x9L9xEQ4zHCp1QKQuQhKA8eWj22E3LjG75ewPE5XU+f9SCX7iyYi4LFNTH9qdLXeolJJcQ4ysu34nKuihcoQHUY74ipF69dP3p6G27/jyOq';const _IH='7068c7ad80f6a8364e19bed1c99c06f627f3317baa67717db081a0606af5dde0';let _src;

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
